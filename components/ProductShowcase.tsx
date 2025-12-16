import React from 'react';
import { PRODUCTS } from '../data/products';
import { ExternalLink, Trophy, Clock, Tag, RefreshCw } from 'lucide-react';
import { SHOPS } from '../constants';

export const ProductShowcase: React.FC = () => {
  
  const getShopDetails = (id: string) => SHOPS.find(s => s.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-indigo-200">
           <Tag className="w-4 h-4" />
           <span>Populaire Deals</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Prijsvoorbeelden Top 3</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          We vergelijken handmatig de prijzen om je een beeld te geven van de verschillen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
            
            {/* Product Image Header */}
            <div className="h-48 relative overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                {product.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{product.name}</h3>
              </div>
              
              <p className="text-slate-500 text-sm mb-6">{product.description}</p>

              {/* Price List */}
              <div className="space-y-3 mt-auto">
                {product.offers.sort((a, b) => a.price - b.price).map((offer, index) => {
                  const shop = getShopDetails(offer.shopId);
                  if (!shop) return null;

                  return (
                    <div 
                        key={offer.shopId} 
                        className={`relative flex items-center justify-between p-3 rounded-xl border ${
                          offer.isBestPrice 
                            ? 'bg-green-50 border-green-200 shadow-sm' 
                            : 'bg-slate-50 border-slate-100'
                        }`}
                    >
                      {offer.isBestPrice && (
                        <div className="absolute -top-2.5 left-4 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                          <Trophy className="w-3 h-3" /> Beste Deal
                        </div>
                      )}

                      <div className="flex flex-col">
                        <span className={`text-sm font-bold ${shop.color}`}>
                            {shop.name}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                             <Clock className="w-3 h-3" />
                             {offer.deliveryText}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                         <span className={`font-bold ${offer.isBestPrice ? 'text-green-700 text-lg' : 'text-slate-700'}`}>
                            €{offer.price.toLocaleString('nl-NL', { minimumFractionDigits: 0 })}
                         </span>
                         <a 
                           href={offer.link}
                           target="_blank"
                           rel="nofollow noopener noreferrer"
                           className="p-2 bg-white rounded-lg border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                           aria-label={`Bekijk bij ${shop.name}`}
                         >
                            <ExternalLink className="w-4 h-4" />
                         </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Last Update & Disclaimer Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <div className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" />
                    <span>Check: {product.lastUpdate}</span>
                </div>
                <span>*Prijzen kunnen wijzigen</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};