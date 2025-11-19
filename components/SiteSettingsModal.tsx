import React, { useState, useEffect } from 'react';
import { GlobalSettings } from '../types';
import { Icon } from './Icons';

interface SiteSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GlobalSettings;
  onSave: (newSettings: GlobalSettings) => void;
}

export const SiteSettingsModal: React.FC<SiteSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState<GlobalSettings>(settings);

  // Sync state when settings prop changes or modal opens
  useEffect(() => {
    setFormData(settings);
  }, [settings, isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-900 border-b border-slate-800">
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Icon name="Globe" className="text-cyan-400" />
              Site & İletişim Ayarları
            </h3>
            <p className="text-slate-400 text-sm">
              Alt kısımda yer alan iletişim bilgilerini ve sosyal medya linklerini düzenleyin.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-800 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 custom-scrollbar flex-1 bg-slate-900">
          <form id="settingsForm" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Contact Information Group */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                <Icon name="Phone" size={16} /> İletişim Bilgileri
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Telefon Numarası</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleChange}
                    placeholder="+90 555 000 00 00"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">E-Posta Adresi</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress || ''}
                    onChange={handleChange}
                    placeholder="info@g360ai.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Social Media Group */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                <Icon name="Instagram" size={16} /> Sosyal Medya
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Instagram Linki</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Icon name="Instagram" size={16} />
                    </div>
                    <input
                      type="text"
                      name="instagramLink"
                      value={formData.instagramLink || ''}
                      onChange={handleChange}
                      placeholder="https://instagram.com/..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">YouTube Linki</label>
                   <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Icon name="Youtube" size={16} />
                    </div>
                    <input
                      type="text"
                      name="youtubeLink"
                      value={formData.youtubeLink || ''}
                      onChange={handleChange}
                      placeholder="https://youtube.com/..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Group */}
            <div className="space-y-4">
               <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                <Icon name="Pencil" size={16} /> Yazı Alanları
              </h4>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">İletişim Başlığı</label>
                <input
                  type="text"
                  name="contactTitle"
                  value={formData.contactTitle || ''}
                  onChange={handleChange}
                  placeholder="Projelerinizi 360° Hayata Geçirelim"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">İletişim Açıklaması</label>
                <textarea
                  name="contactDescription"
                  value={formData.contactDescription || ''}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Alt kısımdaki açıklama metni..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-900 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-slate-400 hover:text-white font-medium transition-colors"
          >
            İptal
          </button>
          <button
            type="submit"
            form="settingsForm"
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-xl font-bold shadow-lg shadow-cyan-900/30 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <Icon name="Save" size={18} />
            Kaydet
          </button>
        </div>

      </div>
    </div>
  );
};