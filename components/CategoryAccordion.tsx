import React, { useState, useEffect } from 'react';
import { CategoryNode, BusinessItem } from '../types';
import { Icon } from './Icons';
import { BusinessCard } from './BusinessCard';

interface CategoryAccordionProps {
  category: CategoryNode;
  level?: number;
  forceOpen?: boolean;
  isEditMode?: boolean;
  customImages?: Record<string, string>; // Deprecated but kept for safe props
  onImageUpdate?: (id: string, file: File) => void;
  onEditItem?: (item: BusinessItem) => void;
}

export const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ 
  category, 
  level = 0,
  forceOpen = false,
  isEditMode = false,
  onImageUpdate,
  onEditItem
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpen) setIsOpen(true);
  }, [forceOpen]);

  const hasChildren = (category.children && category.children.length > 0) || (category.items && category.items.length > 0);
  
  // Styling based on nesting level
  const indentClass = level === 0 ? '' : level === 1 ? 'ml-4' : 'ml-8';
  const containerClass = level === 0 
    ? 'mb-4 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors' 
    : 'mt-2 border-l-2 border-slate-800 pl-4';
  
  const headerClass = level === 0
    ? 'p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition-colors'
    : 'py-2 flex items-center justify-between cursor-pointer hover:text-cyan-400 text-slate-300 transition-colors group';

  const titleClass = level === 0
    ? 'font-bold text-lg text-slate-100 flex items-center gap-3'
    : 'font-medium text-base flex items-center gap-2';

  return (
    <div className={`${indentClass} ${containerClass} transition-all duration-300`}>
      {/* Header */}
      <div 
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        className={headerClass}
      >
        <div className={titleClass}>
           {/* Only show main icon for top level, or distinct bullets for deeper levels */}
          {level === 0 && category.iconName && (
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
                category.isSpecial 
                ? 'bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20' 
                : 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'
            }`}>
               <Icon name={category.iconName} size={20} />
            </div>
          )}
          <span className={category.isSpecial ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500' : 'group-hover:text-cyan-100 transition-colors'}>
            {category.title}
          </span>
          {/* Counts badge */}
          {hasChildren && !isOpen && (
             <span className="ml-3 text-xs py-0.5 px-2 rounded-full bg-slate-800 text-slate-500 border border-slate-700/50 group-hover:border-cyan-500/30 group-hover:text-cyan-500/70 transition-all">
                {(category.items?.length || 0) + (category.children?.length || 0)}
             </span>
          )}
        </div>
        
        {hasChildren && (
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'rotate-0 text-slate-500'} `}>
            <Icon name="ChevronDown" size={level === 0 ? 20 : 16} />
          </div>
        )}
      </div>

      {/* Content Body */}
      {isOpen && hasChildren && (
        <div className={`animate-in fade-in slide-in-from-top-1 duration-200 ${level === 0 ? 'p-4 pt-0 bg-slate-900/20' : 'py-2'}`}>
          
          {/* Recursive Subcategories */}
          {category.children?.map((subCat) => (
            <CategoryAccordion 
                key={subCat.id} 
                category={subCat} 
                level={level + 1} 
                forceOpen={forceOpen}
                isEditMode={isEditMode}
                onImageUpdate={onImageUpdate}
                onEditItem={onEditItem}
            />
          ))}

          {/* Grid of Business Items */}
          {category.items && category.items.length > 0 && (
             <div className={`grid gap-4 mt-3 ${level === 0 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {category.items.map((item) => (
                  <BusinessCard 
                    key={item.id} 
                    item={item}
                    isEditMode={isEditMode}
                    onImageUpdate={onImageUpdate}
                    onEditClick={onEditItem}
                  />
                ))}
             </div>
          )}
          
          {/* Empty State */}
          {category.items?.length === 0 && (!category.children || category.children.length === 0) && (
            <div className="text-slate-500 italic text-sm py-2 pl-2 border-l-2 border-slate-800 ml-4">
               Bu kategoride henüz listelenmiş işletme bulunmamaktadır.
            </div>
          )}
        </div>
      )}
    </div>
  );
};