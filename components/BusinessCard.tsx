import React, { useRef } from 'react';
import { BusinessItem } from '../types';
import { Icon } from './Icons';

interface BusinessCardProps {
  item: BusinessItem;
  isEditMode?: boolean;
  customImage?: string; // Keeping for backward compatibility/display
  onImageUpdate?: (id: string, file: File) => void; // Changed signature to accept File
  onEditClick?: (item: BusinessItem) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ 
  item, 
  isEditMode = false,
  onImageUpdate,
  onEditClick
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use the imageUrl directly from the item data (which now comes from DB)
  const displayImage = item.imageUrl;

  // Construct Google Maps URL if Place ID is present
  const mapsUrl = item.googlePlaceId 
    ? `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${item.googlePlaceId}`
    : null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageUpdate) {
      // Pass the raw file up to App.tsx to handle Firebase Storage upload
      onImageUpdate(item.id, file);
    }
  };

  const triggerFileInput = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleEditDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onEditClick) onEditClick(item);
  };

  return (
    <div className="group relative flex flex-col bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm hover:shadow-[0_8px_30px_-5px_rgba(6,182,212,0.15)] hover:-translate-y-1">
      
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Main Clickable Area for 360 Tour */}
      <a 
        href={!isEditMode ? item.linkUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 relative block overflow-hidden ${isEditMode ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={(e) => isEditMode && e.preventDefault()}
      >
        {/* Background/Image Container */}
        <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
            {/* Image */}
            {displayImage ? (
               <img 
               src={displayImage} 
               alt={item.name} 
               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
             />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 border-b border-slate-700 border-dashed bg-slate-800/50">
                 <Icon name="Camera" size={24} className="mb-2 opacity-50" />
                 <span className="text-xs font-medium">Görsel Yok</span>
              </div>
            )}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            
            {/* 360 Play Button Overlay (Appears on Hover) */}
            {!isEditMode && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-20 pointer-events-none">
                 <div className="w-14 h-14 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] backdrop-blur-sm border-2 border-white/20">
                    <Icon name="ExternalLink" size={28} className="ml-0.5" />
                 </div>
              </div>
            )}

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10 pointer-events-none">
                 {/* Rating Badge - Google Style */}
                {!isEditMode && item.rating ? (
                  <div className="bg-white/95 text-slate-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-lg backdrop-blur-md border border-white/20">
                    <span className="text-sm">{item.rating}</span>
                    <Icon name="Star" size={12} className="fill-yellow-500 text-yellow-500" />
                    {item.reviewCount && (
                        <span className="text-slate-400 font-normal text-[10px] border-l border-slate-300 pl-1.5 ml-0.5">
                            ({item.reviewCount})
                        </span>
                    )}
                  </div>
                ) : <div />}

                {/* 360 Badge */}
                {!isEditMode && (
                  <div className="bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1.5 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    360° TUR
                  </div>
                )}
            </div>

            {/* Edit Mode Controls */}
            {isEditMode && (
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 z-30 backdrop-blur-[2px] pointer-events-auto">
                <span className="text-white text-xs font-semibold tracking-wider uppercase mb-1">Düzenle</span>
                <div className="flex gap-2">
                    <button 
                    onClick={triggerFileInput}
                    className="p-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl transition-all hover:scale-110 shadow-lg"
                    title="Fotoğraf Yükle"
                    >
                    <Icon name="Camera" size={18} />
                    </button>
                    <button 
                    onClick={handleEditDetails}
                    className="p-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl transition-all hover:scale-110 shadow-lg"
                    title="Bilgileri Düzenle"
                    >
                    <Icon name="Pencil" size={18} />
                    </button>
                </div>
              </div>
            )}
        </div>

        {/* Content Section */}
        <div className="relative z-10 p-4 flex flex-col gap-2">
          
          {/* Title */}
          <div>
             <h4 className="text-slate-100 font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
               {item.name}
             </h4>
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed font-light">
                {item.description}
            </p>
          )}

          {/* Details Grid - Location, Address, Phone */}
          <div className="mt-2 space-y-1.5 pt-3 border-t border-slate-700/40">
            
            {/* 1. Location (City/District) */}
            {item.location && (
              <div className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                <Icon name="MapPin" size={14} className="text-cyan-500 shrink-0" />
                <span className="truncate">{item.location}</span>
              </div>
            )}
            
            {/* 2. Full Address (New) */}
            {item.address && (
               <div className="flex items-start gap-2 text-slate-500 text-[11px] group-hover:text-slate-400 transition-colors">
                  <Icon name="Building2" size={14} className="text-slate-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1 leading-snug">{item.address}</span>
               </div>
            )}

            {/* 3. Phone */}
            {item.phoneNumber && (
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <Icon name="Phone" size={14} className="text-slate-600 shrink-0" />
                <span>{item.phoneNumber}</span>
              </div>
            )}
          </div>
        </div>
      </a>

      {/* Action Buttons Footer */}
      <div className="px-4 pb-4 pt-1 flex items-center gap-2 mt-auto">
            {/* Maps Button */}
            {mapsUrl ? (
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-400 bg-slate-900/50 hover:bg-cyan-950 hover:text-cyan-400 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-colors group/btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="MapPin" size={14} className="group-hover/btn:scale-110 transition-transform" />
                  <span>Harita</span>
                </a>
            ) : (
                <div className="flex-1"></div>
            )}

            {/* Website Button */}
            {item.websiteUrl && (
               <a 
                 href={item.websiteUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center w-10 py-2 text-slate-400 bg-slate-900/50 hover:bg-slate-800 hover:text-white rounded-lg border border-slate-700/50 transition-colors"
                 title="Web Sitesi"
                 onClick={(e) => e.stopPropagation()}
               >
                 <Icon name="Globe" size={14} />
               </a>
            )}
      </div>
    </div>
  );
};