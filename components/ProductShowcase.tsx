import React from 'react';
import { PRODUCTS } from '../data/products';
import { ExternalLink, Tag, Clock, ArrowRight, ImageOff } from 'lucide-react';
import { SHOPS } from '../constants';

export const ProductShowcase: React.FC = () => {
  
  const getShopDetails = (id: string) => SHOPS.find(s => s.id === id);

  const getButtonStyle = (shopId: string) => {
    switch (shopId) {
        case 'bol':
            return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600';
        case 'coolblue':
            return 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500';
        case 'amazon':
            return 'bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-[#FF9900] hover:text-slate-900 hover:border-[#FF9900]';
        default:
            return 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-indigo-200">
           <Tag className="w-4 h-4" />
           <span>Populaire Producten</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Direct vergelijken</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Bekijk direct de actuele prijs en voorraad bij jouw favoriete webshop.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow group">
            
            {/* Product Image Header */}
            <div className="h-48 relative overflow-hidden bg-slate-100 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback: verberg de gebroken afbeelding en toon een placeholder container
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // Zoek de parent container en voeg een placeholder toe (simulatie via CSS classes op een sibling zou schoner zijn in React state, 
                  // maar directe DOM manipulatie voor onError is hier effectief)
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100";
                    fallback.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-3-3"/><path d="m2 2 20 20"/><path d="M10 7 2.7 14.3a2.1 2.1 0 0 0 0 3l6.4 6.4a2.1 2.1 0 0 0 3 0l7.3-7.3"/></svg><span class="text-xs font-bold mt-2">Geen afbeelding</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-white/50 z-10">
                {product.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{product.name}</h3>
              </div>
              
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>

              {/* Shop List */}
              <div className="space-y-3 mt-auto">
                {product.offers.map((offer) => {
                  const shop = getShopDetails(offer.shopId);
                  if (!shop) return null;

                  return (
                    <div 
                        key={offer.shopId} 
                        className="flex flex-col p-3 rounded-xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-slate-200 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-bold ${shop.color}`}>
                              {shop.name}
                          </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                             <Clock className="w-3 h-3 text-slate-400" />
                             {offer.deliveryText}
                        </div>
                        
                        <a 
                           href={offer.link}
                           target="_blank"
                           rel="nofollow noopener noreferrer"
                           className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition-all active:scale-95 shadow-sm ${getButtonStyle(offer.shopId)}`}
                        >
                            Bekijk prijs <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};