
import React, { useState } from 'react';
import { PRODUCTS, ProductComparison } from '../data/products';
import { ArrowRight, Sparkles, Bell } from 'lucide-react';
import { SHOPS } from '../constants';
import { PriceTrackerModal } from './PriceTrackerModal';

export const ProductShowcase: React.FC = () => {
  const [selectedProductForAlert, setSelectedProductForAlert] = useState<ProductComparison | null>(null);

  const getShopDetails = (id: string) => SHOPS.find(s => s.id === id);

  const Sparkline = () => (
    <svg className="w-16 h-8 text-emerald-500" viewBox="0 0 100 40">
      <path
        d="M0 35 L20 30 L40 38 L60 15 L80 20 L100 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-[3.5rem] p-5 shadow-2xl shadow-slate-200/40 border border-slate-50 flex flex-col hover:translate-y-[-10px] transition-all duration-700 group relative">
            
            <div className="absolute z-20 top-10 left-10 flex gap-2">
              <span className="brand-gradient text-white text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> Beste Keuze
              </span>
            </div>

            <button 
              onClick={() => setSelectedProductForAlert(product)}
              className="absolute z-20 top-10 right-10 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-100 shadow-xl hover:bg-brand-pink hover:text-white transition-all group/bell"
            >
              <Bell className="w-5 h-5 group-hover/bell:animate-bounce" />
            </button>
            
            <div className="h-80 rounded-[3rem] overflow-hidden bg-slate-100 mb-10 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-[9px] font-black text-slate-900 uppercase tracking-widest border border-white/50">
                {product.category}
              </div>
            </div>

            <div className="px-8 pb-10 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-4xl font-black text-slate-950 tracking-tighter leading-[0.95] flex-1">{product.name}</h3>
                <div className="flex flex-col items-end">
                  <Sparkline />
                  <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mt-1">Price Drop</span>
                </div>
              </div>
              
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
                      className="flex items-center justify-between p-5 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-pink/20 hover:shadow-xl transition-all group/offer"
                    >
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] block mb-1 ${shop.color}`}>{shop.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{offer.deliveryText}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover/offer:brand-gradient group-hover/offer:text-white transition-all">
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

      {selectedProductForAlert && (
        <PriceTrackerModal 
          product={selectedProductForAlert}
          isOpen={!!selectedProductForAlert}
          onClose={() => setSelectedProductForAlert(null)}
        />
      )}
    </>
  );
};
