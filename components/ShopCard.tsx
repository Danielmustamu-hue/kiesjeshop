import React from 'react';
import { ShopData } from '../types';
import { StarRating } from './StarRating';
import { Truck, CheckCircle, Package, HeartHandshake } from 'lucide-react';

interface ShopCardProps {
  shop: ShopData;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group">
      
      {/* Header / Logo Area - Klikbaar */}
      <a 
        href={shop.ctaLink}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`h-28 flex items-center justify-center p-6 block cursor-pointer transition-opacity hover:opacity-90 ${shop.logoBg}`}
        aria-label={`Ga naar ${shop.name}`}
      >
         {shop.logoUrl ? (
           <img 
             src={shop.logoUrl} 
             alt={`${shop.name} logo`} 
             className="h-full w-auto max-w-[80%] object-contain"
           />
         ) : (
           <>
             {shop.id === 'bol' && (
                 <div className="text-4xl font-extrabold text-[#0000FA] tracking-tighter">bol</div>
             )}
             {shop.id === 'amazon' && (
                 <div className="flex flex-col items-start leading-none">
                    <div className="text-3xl font-bold text-white tracking-wide">amazon</div>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF9900] to-transparent rounded-full mt-1"></div>
                    <div className="text-xs text-[#FF9900] font-bold self-end -mt-2 bg-[#232F3E] px-1">.nl</div>
                 </div>
             )}
             {shop.id === 'coolblue' && (
                 <div className="text-3xl font-bold text-white tracking-tight">Coolblue</div>
             )}
           </>
         )}
      </a>

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

      <div className="p-6 pt-0 mt-auto relative z-10">
        <a 
          href={shop.ctaLink} 
          target="_blank"
          rel="nofollow noopener noreferrer"
          className={`block w-full text-center py-3 rounded-xl font-bold transition-all active:scale-95 shadow-md hover:shadow-lg no-underline ${shop.buttonColor}`}
        >
          Ga naar {shop.name}
        </a>
      </div>
    </div>
  );
};