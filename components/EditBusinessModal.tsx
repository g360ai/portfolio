import React, { useState, useEffect } from 'react';
import { BusinessItem } from '../types';
import { Icon } from './Icons';

interface EditBusinessModalProps {
  isOpen: boolean;
  item: BusinessItem | null;
  onClose: () => void;
  onSave: (id: string, updatedData: Partial<BusinessItem>) => void;
}

export const EditBusinessModal: React.FC<EditBusinessModalProps> = ({ isOpen, item, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<BusinessItem>>({});
  const [activeTab, setActiveTab] = useState<'tour' | 'details'>('tour');

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(item.id, formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-900 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Icon name="Settings" className="text-cyan-400" />
              {item.name}
            </h3>
            <p className="text-slate-400 text-sm">İşletme bilgilerini ve sanal tur bağlantılarını düzenleyin.</p>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-800 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900/50">
          <button 
            onClick={() => setActiveTab('tour')}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${activeTab === 'tour' ? 'text-cyan-400 bg-slate-800/50' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <span className="flex items-center justify-center gap-2">
              <Icon name="Globe" size={16} /> 360° Tur & Medya
            </span>
            {activeTab === 'tour' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />}
          </button>
          <button 
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-4 text-sm font-medium transition-colors relative ${activeTab === 'details' ? 'text-cyan-400 bg-slate-800/50' : 'text-slate-400 hover:text-slate-200'}`}
          >
            <span className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={16} /> Google & Detaylar
            </span>
            {activeTab === 'details' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />}
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 custom-scrollbar flex-1 bg-slate-900">
          <form id="editForm" onSubmit={handleSubmit} className="space-y-8">
            
            {activeTab === 'tour' ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-2 duration-300">
                {/* 360 Link Section - MOST IMPORTANT */}
                <div className="p-5 bg-cyan-900/10 border border-cyan-500/20 rounded-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                      <Icon name="ExternalLink" size={16} />
                      360° Sanal Tur Bağlantısı
                    </label>
                    {formData.linkUrl && (
                      <a href={formData.linkUrl} target="_blank" rel="noreferrer" className="text-xs bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white px-2 py-1 rounded transition-colors">
                        Linki Test Et
                      </a>
                    )}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="linkUrl"
                      value={formData.linkUrl || ''}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none pl-10"
                    />
                    <div className="absolute left-3 top-3.5 text-slate-500">
                      <Icon name="Globe" size={18} />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 pl-1">
                    Bu alana Matterport, Google Street View veya özel 360 tur linkinizi yapıştırın. Kullanıcı karta tıkladığında buraya yönlendirilir.
                  </p>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">İşletme Adı</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name || ''}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Kısa Açıklama</label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description || ''}
                      onChange={handleChange}
                      placeholder="Örn: Modern dekorasyon ve ferah ortam..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
                {/* Google Integration */}
                <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white rounded-full shrink-0">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5" alt="Google" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Google Haritalar Entegrasyonu</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Google Place ID girerek işletmenin puan, telefon ve adres bilgilerinin otomatik olarak Google'dan çekilmesini ve "Harita" butonunun çalışmasını sağlayabilirsiniz.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Google Place ID</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="googlePlaceId"
                        value={formData.googlePlaceId || ''}
                        onChange={handleChange}
                        placeholder="Örn: ChIJcQNXvJdt1xQRmwCCzw-B_Hs"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none font-mono text-sm pl-10"
                      />
                      <div className="absolute left-3 top-2.5 text-slate-500">
                         <Icon name="MapPin" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manual Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Telefon Numarası</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber || ''}
                      onChange={handleChange}
                      placeholder="+90 555 ..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Web Sitesi</label>
                    <input
                      type="text"
                      name="websiteUrl"
                      value={formData.websiteUrl || ''}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Konum (İlçe, İl)</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location || ''}
                      onChange={handleChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2 grid grid-cols-2 gap-2">
                     <div>
                        <label className="text-sm font-medium text-slate-400">Puan</label>
                        <input
                        type="number"
                        step="0.1"
                        max="5"
                        name="rating"
                        value={formData.rating || ''}
                        onChange={handleChange}
                        placeholder="4.7"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                        />
                     </div>
                     <div>
                        <label className="text-sm font-medium text-slate-400">Yorum Sayısı</label>
                        <input
                        type="number"
                        name="reviewCount"
                        value={formData.reviewCount || ''}
                        onChange={handleChange}
                        placeholder="1250"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                        />
                     </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-400">Tam Adres</label>
                    <textarea
                      name="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      rows={2}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
          <div className="text-xs text-slate-500 hidden sm:block">
             Değişiklikler yerel tarayıcı hafızasına kaydedilir.
          </div>
          <div className="flex gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-slate-400 hover:text-white font-medium transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              form="editForm"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-xl font-bold shadow-lg shadow-cyan-900/30 transition-all transform hover:scale-[1.02] active:scale-95"
            >
              <Icon name="Save" size={18} />
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};