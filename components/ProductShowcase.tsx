
import React from 'react';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SHOPS } from '../constants';

export const ProductShowcase: React.FC = () => {
  const getShopDetails = (id: string) => SHOPS.find(s => s.id === id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="bg-white rounded-[3.5rem] p-5 shadow-2xl shadow-slate-200/40 border border-slate-50 flex flex-col hover:translate-y-[-10px] transition-all duration-700 group relative">
          
          <div className="absolute z-20 top-10 left-10">
            <span className="bg-indigo-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Beste Keuze
            </span>
          </div>
          
          <div className="h-80 rounded-[3rem] overflow-hidden bg-slate-100 mb-10 relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-[9px] font-black text-slate-900 uppercase tracking-widest border border-white/50">
              {product.category}
            </div>
          </div>

          <div className="px-8 pb-10 flex-grow flex flex-col">
            <h3 className="text-4xl font-black text-slate-950 mb-4 tracking-tighter leading-[0.95]">{product.name}</h3>
            <p className="text-slate-500 text-base font-medium mb-10 line-clamp-2 leading-relaxed">{product.description}</p>

            <div className="space-y-4 mt-auto">
              {product.offers.map((offer) => {
                const shop = getShopDetails(offer.shopId);
                if (!shop) return null;
                return (
                  <a 
                    key={offer.shopId} 
                    href={offer.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-indigo-600/20 hover:shadow-xl transition-all group/offer"
                  >
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1 ${shop.color}`}>{shop.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{offer.deliveryText}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover/offer:bg-indigo-600 group-hover/offer:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
