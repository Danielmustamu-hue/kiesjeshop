
import React from 'react';
import { ShopData } from '../types';
import { StarRating } from './StarRating';
import { Truck, CheckCircle, Package, ArrowRight, Clock } from 'lucide-react';
import { AFFILIATE_LINKS } from '../constants';

interface ShopCardProps {
  shop: ShopData;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const finalCtaLink = shop.id === 'bol' 
    ? AFFILIATE_LINKS.bol
    : shop.id === 'amazon' 
      ? AFFILIATE_LINKS.amazon
      : shop.ctaLink;

  // Dynamische hover-glow styles
  const getHoverGlow = (id: string) => {
    switch (id) {
      case 'bol': return 'hover:border-blue-500/30 hover:shadow-blue-500/10';
      case 'coolblue': return 'hover:border-orange-500/30 hover:shadow-orange-500/10';
      case 'amazon': return 'hover:border-yellow-500/30 hover:shadow-yellow-500/10';
      default: return 'hover:border-brand-pink/30 hover:shadow-brand-pink/10';
    }
  };

  return (
    <div className={`intelligence-card overflow-hidden border border-slate-100/50 hover:translate-y-[-12px] transition-all duration-700 group flex flex-col h-full relative bg-white shadow-2xl ${getHoverGlow(shop.id)}`}>
      <a 
        href={finalCtaLink} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className={`h-48 flex flex-col items-center justify-center p-8 relative overflow-hidden transition-all duration-700 ${shop.logoBg} group-hover:brightness-105`}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-60"></div>
         <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center gap-1.5 z-20">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Live Sync</span>
         </div>
         <div className="relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1">
           {shop.id === 'bol' && <div className="text-6xl font-black text-white tracking-tighter drop-shadow-lg">bol</div>}
           {shop.id === 'amazon' && <div className="text-4xl font-black text-white tracking-tight leading-none uppercase drop-shadow-lg">amazon<span className="text-yellow-500">.nl</span></div>}
           {shop.id === 'coolblue' && <div className="text-5xl font-black text-orange-500 tracking-tight drop-shadow-lg italic">Coolblue</div>}
         </div>
         <div className="mt-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 relative z-10 shadow-lg group-hover:bg-white transition-colors">
            <StarRating score={shop.serviceScore} />
         </div>
      </a>

      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2.5 rounded-xl group-hover:bg-slate-200 transition-colors"><Package className="w-5 h-5 text-slate-900" /></div>
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
          <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
             <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${shop.id === 'coolblue' ? 'bg-orange-500' : 'bg-blue-600'}`}></div>
             <p className="text-sm font-bold text-slate-700 leading-relaxed">{shop.usp}</p>
          </div>
          <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
             <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
             <p className="text-sm font-bold text-slate-700 leading-relaxed">{shop.delivery}</p>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <div className="grid grid-cols-1 gap-2 mb-6">
             {shop.pros.slice(0, 2).map((pro, idx) => (
               <div key={idx} className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {pro}
               </div>
             ))}
          </div>
          <a 
            href={finalCtaLink} 
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`flex items-center justify-between w-full p-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl hover:shadow-2xl hover:scale-[1.05] active:scale-95 border border-white/10 ${shop.buttonColor}`}
          >
            <span>{shop.ctaText || `Bezoek ${shop.name}`}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
