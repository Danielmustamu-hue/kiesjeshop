import React from 'react';
import { ShopData } from '../types';
import { StarRating } from './StarRating';
import { Truck, CheckCircle, Package, HeartHandshake, ExternalLink } from 'lucide-react';

interface ShopCardProps {
  shop: ShopData;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Header / Logo Area */}
      <div className={`h-24 flex items-center justify-center p-4 ${shop.id === 'coolblue' ? 'bg-blue-600' : 'bg-slate-50'}`}>
         {shop.logoUrl ? (
           <img 
             src={shop.logoUrl} 
             alt={`${shop.name} logo`} 
             className="h-full w-auto max-w-[80%] object-contain"
           />
         ) : (
           <>
             {shop.id === 'bol' && (
                 <div className="text-3xl font-extrabold text-blue-900 tracking-tighter">bol<span className="text-blue-400">.com</span></div>
             )}
             {shop.id === 'amazon' && (
                 <div className="text-3xl font-bold text-slate-900 flex items-center gap-1">amazon<span className="text-yellow-500 text-xs self-start mt-2">.nl</span></div>
             )}
             {shop.id === 'coolblue' && (
                 <div className="text-2xl font-bold text-white">Coolblue</div>
             )}
           </>
         )}
      </div>

      <div className="p-6 flex-grow flex flex-col gap-6">
        {/* Ratings */}
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Klantenservice</span>
          <StarRating score={shop.serviceScore} />
        </div>

        {/* Features Grid */}
        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-slate-900">Aanbod</span>
              {shop.offerings}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-slate-900">Levering</span>
              {shop.delivery}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <HeartHandshake className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-slate-900">Uniek</span>
              {shop.usp}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
           <ul className="space-y-2">
             {shop.pros.map((pro, idx) => (
               <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                 <CheckCircle className="w-4 h-4 text-green-500" /> {pro}
               </li>
             ))}
           </ul>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <a 
          href={shop.ctaLink} 
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={`group flex items-center justify-center gap-2 w-full text-center py-3 rounded-xl font-bold text-white transition-all active:scale-95 shadow-md hover:shadow-lg ${
            shop.id === 'bol' ? 'bg-blue-800 hover:bg-blue-900' :
            shop.id === 'coolblue' ? 'bg-orange-500 hover:bg-orange-600' :
            'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
          }`}
        >
          Ga naar {shop.name}
          <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};
