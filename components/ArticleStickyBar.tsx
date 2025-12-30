
import React from 'react';
import { SHOPS } from '../constants';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface ArticleStickyBarProps {
  onNavigateToShops?: () => void;
}

export const ArticleStickyBar: React.FC<ArticleStickyBarProps> = ({ onNavigateToShops }) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] w-[90%] max-w-2xl animate-in slide-in-from-bottom-12 duration-1000">
      <div className="bg-slate-950/90 backdrop-blur-2xl rounded-full p-2 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex items-center justify-between">
        <button 
          onClick={onNavigateToShops}
          className="flex items-center gap-2 ml-6 hover:text-orange-400 transition-colors"
        >
           <ShoppingCart className="w-4 h-4 text-orange-400" />
           <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] hidden sm:block">Direct Vergelijken</span>
        </button>
        
        <div className="flex items-center gap-2">
          {SHOPS.map(shop => (
            <a 
              key={shop.id}
              href={shop.ctaLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-full border border-white/5 transition-all group"
            >
              <span className={`text-[9px] font-black uppercase tracking-widest ${shop.color.replace('text-', 'text-opacity-90 ')}`}>
                {shop.name.split('.')[0]}
              </span>
              <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
