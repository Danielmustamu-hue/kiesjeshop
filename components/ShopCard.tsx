
import React from 'react';
import { ShopData } from '../types';
import { StarRating } from './StarRating';
import { Truck, CheckCircle, Package, ArrowRight, Clock } from 'lucide-react';
import { AFFILIATE_LINKS } from '../constants';

interface ShopCardProps {
  shop: ShopData;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  // Gebruik de strikt geverifieerde affiliate links
  const finalCtaLink = shop.id === 'bol' 
    ? AFFILIATE_LINKS.bol
    : shop.id === 'amazon' 
      ? AFFILIATE_LINKS.amazon
      : shop.ctaLink;

  return (
    <div className="intelligence-card overflow-hidden border border-slate-100/50 hover:translate-y-[-8px] transition-all duration-700 group flex flex-col h-full relative bg-white">
      <a 
        href={finalCtaLink} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className={`h-48 flex flex-col items-center justify-center p-8 relative overflow-hidden transition-opacity hover:opacity-95 ${shop.logoBg}`}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-60"></div>
         <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center gap-1.5 z-20">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Live Status</span>
         </div>
         <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
           {shop.id === 'bol' && <div className="text-6xl font-black text-white tracking-tighter">bol</div>}
           {shop.id === 'amazon' && <div className="text-4xl font-black text-white tracking-tight leading-none uppercase">amazon<span className="text-yellow-500">.nl</span></div>}
           {shop.id === 'coolblue' && <div className="text-5xl font-black text-orange-500 tracking-tight">Coolblue</div>}
         </div>
         <div className="mt-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 relative z-10 shadow-lg">
            <StarRating score={shop.serviceScore} />
         </div>
      </a>

      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2.5 rounded-xl"><Package className="w-5 h-5 text-slate-900" /></div>
              <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">Focus</span>
                 <p className="text-sm font-bold text-slate-900">{shop.offerings}</p>
              </div>
           </div>
           <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-300 uppercase tracking-widest">
              <Clock className="w-3 h-3" /> 2m ago
           </div>
        </div>

        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4">
             <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 shrink-0"></div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">{shop.usp}</p>
          </div>
          <div className="flex items-start gap-4">
             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
             <p className="text-sm font-medium text-slate-600 leading-relaxed">{shop.delivery}</p>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="grid grid-cols-1 gap-2">
             {shop.pros.slice(0, 2).map((pro, idx) => (
               <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {pro}
               </div>
             ))}
          </div>
          <a 
            href={finalCtaLink} 
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`flex items-center justify-between w-full p-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 ${shop.buttonColor}`}
          >
            <span>{shop.ctaText || `Bezoek ${shop.name}`}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
