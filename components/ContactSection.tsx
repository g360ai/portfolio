import React from 'react';
import { Icon } from './Icons';
import { GlobalSettings } from '../types';

interface ContactSectionProps {
  settings: GlobalSettings;
  isEditMode?: boolean;
  onEditClick?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  settings, 
  isEditMode = false, 
  onEditClick 
}) => {
  const contactItems = [
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Bizi Arayın',
      value: settings.phoneNumber || '+90 555 000 00 00',
      link: `tel:${(settings.phoneNumber || '').replace(/\s/g, '')}`,
      color: 'from-green-500/20 to-emerald-500/20',
      hoverColor: 'group-hover:text-green-400',
      borderColor: 'group-hover:border-green-500/50'
    },
    {
      id: 'instagram',
      icon: 'Instagram',
      title: 'Instagram',
      value: 'G360 AI',
      link: settings.instagramLink || '#',
      color: 'from-purple-500/20 to-pink-500/20',
      hoverColor: 'group-hover:text-pink-400',
      borderColor: 'group-hover:border-pink-500/50'
    },
    {
      id: 'youtube',
      icon: 'Youtube',
      title: 'YouTube',
      value: 'G360 AI Kanalı',
      link: settings.youtubeLink || '#',
      color: 'from-red-500/20 to-orange-500/20',
      hoverColor: 'group-hover:text-red-400',
      borderColor: 'group-hover:border-red-500/50'
    },
    {
      id: 'mail',
      icon: 'Mail',
      title: 'E-Posta',
      value: settings.emailAddress || 'info@g360ai.com',
      link: `mailto:${settings.emailAddress}`,
      color: 'from-blue-500/20 to-cyan-500/20',
      hoverColor: 'group-hover:text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50'
    }
  ];

  return (
    <section id="contact-section" className="py-12 mt-10 relative overflow-hidden group/section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 pointer-events-none" />
      
      {/* Edit Button */}
      {isEditMode && onEditClick && (
        <button 
          onClick={onEditClick}
          className="absolute top-4 right-4 z-30 p-2.5 bg-slate-800 hover:bg-cyan-600 text-slate-400 hover:text-white rounded-xl shadow-lg border border-slate-700 transition-all hover:scale-110"
          title="İletişim Bilgilerini Düzenle"
        >
          <Icon name="Pencil" size={18} />
        </button>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {settings.contactTitle || <><span className="text-cyan-400">360°</span> Dönüşüm</>}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {settings.contactDescription || 'Projeleriniz için bizimle iletişime geçin.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${item.borderColor}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`p-4 rounded-full bg-slate-900/50 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-slate-700/50`}>
                  <Icon name={item.icon} size={28} className={`text-slate-300 ${item.hoverColor} transition-colors`} />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className={`text-sm text-slate-400 font-medium ${item.hoverColor} transition-colors truncate w-full`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};