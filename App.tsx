import React, { useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_DATA, INITIAL_GLOBAL_SETTINGS } from './constants';
import { CategoryAccordion } from './components/CategoryAccordion';
import { Icon } from './components/Icons';
import { BrandLogo } from './components/BrandLogo';
import { AdminLogin } from './components/AdminLogin';
import { EditBusinessModal } from './components/EditBusinessModal';
import { ChangePasswordModal } from './components/ChangePasswordModal';
import { ContactSection } from './components/ContactSection';
import { SiteSettingsModal } from './components/SiteSettingsModal';
import { CategoryNode, BusinessItem, GlobalSettings } from './types';

// Firebase Imports
import { db, storage } from './firebase';
// NOTE: Removed modular imports (doc, getDoc, setDoc, etc.) as they are not supported in the installed Firebase version.

// --- Helpers ---

// Helper to recursively filter categories based on search term
const filterCategories = (nodes: CategoryNode[], term: string): CategoryNode[] => {
  if (!term) return nodes;
  const lowerTerm = term.toLowerCase();

  return nodes.reduce((acc: CategoryNode[], node) => {
    const matchesTitle = node.title.toLowerCase().includes(lowerTerm);
    
    const matchingItems = node.items?.filter(item => 
        item.name.toLowerCase().includes(lowerTerm) || 
        (item.location && item.location.toLowerCase().includes(lowerTerm))
    );

    const matchingChildren = node.children ? filterCategories(node.children, term) : [];

    if (matchesTitle || (matchingItems && matchingItems.length > 0) || (matchingChildren && matchingChildren.length > 0)) {
      acc.push({
        ...node,
        items: matchesTitle ? node.items : matchingItems, 
        children: matchesTitle ? node.children : matchingChildren
      });
    }
    
    return acc;
  }, []);
};

// Helper to recursively update an item within the data tree
const updateItemInTree = (nodes: CategoryNode[], itemId: string, updatedData: Partial<BusinessItem>): CategoryNode[] => {
  return nodes.map(node => {
    // 1. Update items in current node
    let updatedItems = node.items;
    if (node.items) {
      updatedItems = node.items.map(item => 
        item.id === itemId ? { ...item, ...updatedData } : item
      );
    }

    // 2. Recursively update children
    let updatedChildren = node.children;
    if (node.children) {
      updatedChildren = updateItemInTree(node.children, itemId, updatedData);
    }

    return {
      ...node,
      items: updatedItems,
      children: updatedChildren
    };
  });
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [usingLocalData, setUsingLocalData] = useState(false);
  
  // Data State
  const [portfolioData, setPortfolioData] = useState<CategoryNode[]>([]);
  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(INITIAL_GLOBAL_SETTINGS);
  const [adminPassword, setAdminPassword] = useState('g360');
  
  // Auth State
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Modals State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPwdModalOpen, setIsPwdModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BusinessItem | null>(null);

  // --- 1. Veri Çekme ve Seeding (Read) ---
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      
      // Güvenlik zaman aşımı: Firebase 2sn içinde yanıt vermezse yerel veriyi yükle
      const timeoutId = setTimeout(() => {
        if (isMounted && isLoading) {
          console.warn("Firebase connection timed out. Falling back to local data.");
          setPortfolioData(PORTFOLIO_DATA);
          setUsingLocalData(true);
          setIsLoading(false);
        }
      }, 2500);

      try {
        // A. Portfolyo Verisi (İşletmeler & Kategoriler)
        const portfolioRef = db.collection("g360_data").doc("portfolio");
        const portfolioSnap = await portfolioRef.get();

        if (!isMounted) return;

        if (portfolioSnap.exists) {
           // Veritabanında veri var, onu kullan
           setPortfolioData(portfolioSnap.data().data as CategoryNode[]);
        } else {
           // Veritabanı boş, SEEDING yap (İlk yükleme)
           console.log("Veritabanı boş. Yerel veriler yükleniyor...");
           try {
             await portfolioRef.set({ data: PORTFOLIO_DATA });
             setPortfolioData(PORTFOLIO_DATA);
           } catch (e) {
             console.warn("Seed işlemi başarısız (İzin hatası olabilir). Yerel veri kullanılıyor.");
             setPortfolioData(PORTFOLIO_DATA);
             setUsingLocalData(true);
           }
        }

        // B. Site Ayarları (İletişim vs.)
        const settingsRef = db.collection("g360_data").doc("settings");
        const settingsSnap = await settingsRef.get();
        
        if (settingsSnap.exists) {
            setGlobalSettings(settingsSnap.data() as GlobalSettings);
        } else {
             // Ayarlar yoksa varsayılanı kaydet
             try { await settingsRef.set(INITIAL_GLOBAL_SETTINGS); } catch(e) {}
        }

        // C. Admin Şifresi
        const configRef = db.collection("g360_data").doc("config");
        const configSnap = await configRef.get();
        
        if (configSnap.exists && configSnap.data().adminPassword) {
            setAdminPassword(configSnap.data().adminPassword);
        } else {
             // Şifre yoksa varsayılanı kaydet
             try { await configRef.set({ adminPassword: 'g360' }, { merge: true }); } catch(e) {}
        }

        clearTimeout(timeoutId);

      } catch (error) {
        if (isMounted) {
            console.error("Firebase Hatası:", error);
            setPortfolioData(PORTFOLIO_DATA);
            setUsingLocalData(true);
        }
      } finally {
        if (isMounted) {
            setIsLoading(false);
            clearTimeout(timeoutId);
        }
      }
    };

    fetchData();

    return () => { isMounted = false; clearTimeout(0); };
  }, []);

  // --- 2. Resim Yükleme (Storage + Write) ---
  const handleImageUpdate = async (id: string, file: File) => {
    if (usingLocalData) {
        alert("Firebase yapılandırılmadığı için resim yükleme şu an devre dışı (Demo Modu).");
        return;
    }

    try {
        // A. Storage'a yükle
        // Dosya yolunu benzersiz yapmak için timestamp ekliyoruz
        const storageRef = storage.ref(`images/${id}/${Date.now()}_${file.name}`);
        const uploadResult = await storageRef.put(file);
        
        // B. URL al
        const downloadURL = await uploadResult.ref.getDownloadURL();

        // C. Yerel State'i güncelle
        const newData = updateItemInTree(portfolioData, id, { imageUrl: downloadURL });
        setPortfolioData(newData);
        
        // D. Firestore'a kaydet (Tüm ağacı güncelliyoruz)
        const portfolioRef = db.collection("g360_data").doc("portfolio");
        await portfolioRef.set({ data: newData }, { merge: true });

    } catch (error) {
        console.error("Resim yükleme hatası:", error);
        alert("Resim yüklenirken bir hata oluştu. Lütfen API ayarlarını ve 'Storage Rules' kısmını kontrol edin.");
    }
  };

  // --- 3. Veri Güncelleme (Write) ---
  const handleItemUpdate = async (id: string, updatedFields: Partial<BusinessItem>) => {
    // 1. Yerel State'i güncelle (Anında UI tepkisi için)
    const newData = updateItemInTree(portfolioData, id, updatedFields);
    setPortfolioData(newData);
    
    // 2. Firestore'a kaydet
    if (!usingLocalData) {
        try {
            const portfolioRef = db.collection("g360_data").doc("portfolio");
            await portfolioRef.set({ data: newData }, { merge: true });
        } catch (error) {
            console.error("Veritabanı güncelleme hatası:", error);
            alert("Değişiklikler veritabanına yazılamadı. Lütfen 'Firestore Rules' kısmını kontrol edin.");
        }
    }
  };

  const handleChangePassword = async (newPwd: string) => {
    setAdminPassword(newPwd);
    if (!usingLocalData) {
        try {
            const configRef = db.collection("g360_data").doc("config");
            await configRef.set({ adminPassword: newPwd }, { merge: true });
            alert('Şifreniz başarıyla güncellendi.');
        } catch (error) {
            console.error("Şifre güncelleme hatası:", error);
        }
    }
  };

  const handleGlobalSettingsUpdate = async (newSettings: GlobalSettings) => {
      setGlobalSettings(newSettings);
      if (!usingLocalData) {
          try {
              const settingsRef = db.collection("g360_data").doc("settings");
              await settingsRef.set(newSettings);
          } catch (error) {
              console.error("Ayarlar kaydedilemedi:", error);
          }
      }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
  };

  const handleEditModeClick = () => {
    if (isAuthenticated) {
      setIsEditMode(!isEditMode);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const openEditModal = (item: BusinessItem) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleLoginResult = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      setIsLoginModalOpen(false);
      setIsEditMode(true);
    }
  };

  const filteredData = useMemo(() => {
    return filterCategories(portfolioData, searchTerm);
  }, [searchTerm, portfolioData]);

  if (isLoading) {
      return (
          <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
              <div className="flex flex-col items-center gap-2">
                <BrandLogo className="h-8 w-auto opacity-70" />
                <p className="text-slate-400 text-sm animate-pulse">Veriler yükleniyor...</p>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black text-slate-200 font-sans selection:bg-cyan-500/30">
      
      <AdminLogin 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLoginResult}
        currentPasswordHash={adminPassword}
      />

      <EditBusinessModal 
        isOpen={isEditModalOpen}
        item={editingItem}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleItemUpdate}
      />

      <ChangePasswordModal
        isOpen={isPwdModalOpen}
        onClose={() => setIsPwdModalOpen(false)}
        onChangePassword={handleChangePassword}
      />

      <SiteSettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={globalSettings}
        onSave={handleGlobalSettingsUpdate}
      />

      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800/60 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 justify-between md:justify-start w-full md:w-auto">
                <div className="flex items-center gap-4">
                  {/* Logo Section */}
                  <div className="text-white w-32 h-10 flex items-center">
                    <BrandLogo className="w-full h-full" />
                  </div>
                  <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
                  <p className="text-xs sm:text-sm text-slate-400 hidden sm:block">
                      Dijital İkiz & 360° Sanal Tur Portfolyosu
                  </p>
                </div>

                {/* Mobile Edit Toggle */}
                <button 
                  onClick={handleEditModeClick}
                  className={`md:hidden p-2 rounded-lg border transition-colors ${
                    isEditMode 
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                >
                  {isAuthenticated ? (
                     <Icon name={isEditMode ? "Check" : "Settings"} size={20} />
                  ) : (
                     <Icon name="Lock" size={20} />
                  )}
                </button>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
                {/* Search Bar */}
                <div className="relative w-full md:w-64 lg:w-80 group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors duration-300">
                        <Icon name="Search" size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="İşletme, şehir veya kategori ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl leading-5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 sm:text-sm hover:bg-slate-800/80"
                    />
                </div>

                {/* Desktop Admin Controls */}
                <div className="hidden md:flex items-center gap-2">
                  {isAuthenticated && (
                    <div className="flex items-center gap-2 mr-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
                       <button 
                        onClick={() => setIsSettingsModalOpen(true)}
                        className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                        title="İletişim Ayarları"
                      >
                        <Icon name="Globe" size={18} />
                      </button>
                      <button 
                        onClick={() => setIsPwdModalOpen(true)}
                        className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Şifre Değiştir"
                      >
                        <Icon name="LockKeyhole" size={18} />
                      </button>
                       <button 
                        onClick={handleLogout}
                        className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                        title="Çıkış Yap"
                      >
                        <Icon name="LogOut" size={18} />
                      </button>
                    </div>
                  )}

                  <button 
                    onClick={handleEditModeClick}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                      isEditMode 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]' 
                        : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {isAuthenticated ? (
                      <>
                        <Icon name={isEditMode ? "Check" : "Settings"} size={18} />
                        <span className="text-sm font-medium">{isEditMode ? 'Tamamla' : 'Düzenleme Modu'}</span>
                      </>
                    ) : (
                      <>
                        <Icon name="Lock" size={18} />
                        <span className="text-sm font-medium">Yönetici Girişi</span>
                      </>
                    )}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        
        {/* Hero Section */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-3 border-l-4 border-cyan-500 pl-5">
                <h2 className="text-xl text-white font-medium">
                    Hoş Geldiniz
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                    Türkiye'de <span className="text-cyan-400 font-semibold">48 şehirde 1500'den fazla</span> işletmenin dijital ikizini en yüksek kalitede oluşturduk.
                </p>
                <p className="text-slate-400 text-sm pt-2">
                    Aşağıdaki başlıkların yanındaki ok işaretine (<Icon name="ChevronDown" size={12} className="inline text-cyan-500" />) tıklayarak sektöre özel seçtiğimiz örnek çalışmalarımıza ulaşabilirsiniz.
                </p>
            </div>
        </div>

        {/* Alerts */}
        {usingLocalData && (
            <div className="mb-6 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-xl flex items-center gap-3 text-sm text-yellow-400 animate-in slide-in-from-top-2">
                <Icon name="Lock" size={16} />
                <span><strong>Demo Modu:</strong> Firebase yapılandırılmadığı için veriler geçici olarak gösteriliyor. Kayıtlar kalıcı olmayacaktır.</span>
            </div>
        )}

        {/* Edit Mode Info Banner */}
        {isEditMode && (
          <div className="mb-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
             <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <Icon name="Settings" size={20} />
             </div>
             <div>
                <h4 className="text-cyan-400 font-medium">Yönetici Modu Aktif</h4>
                <p className="text-slate-400 text-sm mt-1">
                  Kartların üzerindeki <Icon name="Pencil" size={12} className="inline mx-1" /> butonuna basarak bilgileri düzenleyebilir, <Icon name="Camera" size={12} className="inline mx-1" /> ile fotoğraf yükleyebilirsiniz. 
                  {!usingLocalData && " Değişiklikler otomatik olarak bulut veritabanına kaydedilir."}
                </p>
             </div>
          </div>
        )}

        {/* Results or Empty State */}
        <div className="space-y-3">
          {filteredData.length > 0 ? (
            filteredData.map((category) => (
              <CategoryAccordion 
                key={category.id} 
                category={category} 
                forceOpen={searchTerm.length > 0}
                isEditMode={isEditMode}
                onImageUpdate={handleImageUpdate}
                onEditItem={openEditModal}
              />
            ))
          ) : (
            <div className="text-center py-24 bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/80 mb-6 shadow-inner ring-1 ring-slate-700">
                    <Icon name="Search" size={40} className="text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-white">Sonuç Bulunamadı</h3>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">"{searchTerm}" ile eşleşen bir işletme veya kategori bulamadık.</p>
                <button 
                    onClick={() => setSearchTerm('')}
                    className="mt-6 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-cyan-900/20"
                >
                    Aramayı Temizle
                </button>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <ContactSection 
          settings={globalSettings} 
          isEditMode={isEditMode} 
          onEditClick={() => setIsSettingsModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/50 py-10 text-center backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <BrandLogo className="h-6 w-auto" />
            </div>
            <p className="text-slate-500 text-sm">© 2024 G360 AI. Tüm hakları saklıdır.</p>
            <div className="flex justify-center gap-6 mt-6">
                <a href="#contact-section" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Web Sitesi</a>
                <a href="#contact-section" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">İletişim</a>
                <a href={globalSettings.instagramLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Instagram</a>
            </div>
        </div>
      </footer>
    </div>
  );
}