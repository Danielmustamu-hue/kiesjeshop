
import React, { useState } from 'react';
import { SHOPS } from '../constants';
import { ArrowLeftRight, Check, X, Info } from 'lucide-react';

export const VersusTool: React.FC = () => {
  const [leftShop, setLeftShop] = useState(SHOPS[0]);
  const [rightShop, setRightShop] = useState(SHOPS[1]);

  const features = [
    { name: 'Gratis Verzending', key: 'shipping' },
    { name: 'Zondag Levering', key: 'sunday' },
    { name: 'Retourtermijn', key: 'return' },
    { name: 'Installatieservice', key: 'install' },
    { name: 'Abonnement', key: 'sub' }
  ];

  const getVal = (shopId: string, feature: string) => {
    const data: Record<string, any> = {
      bol: { shipping: 'v.a. €20', sunday: true, return: '30 dagen', install: false, sub: 'Select (€11.99/j)' },
      coolblue: { shipping: 'Altijd gratis', sunday: true, return: '30 dagen', install: true, sub: 'Geen' },
      amazon: { shipping: 'v.a. €25', sunday: false, return: '30 dagen', install: false, sub: 'Prime (€4.99/m)' }
    };
    return data[shopId][feature];
  };

  const ShopLogoPreview = ({ shop }: { shop: typeof SHOPS[0] }) => (
    <a 
      href={shop.ctaLink}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`relative w-full h-32 rounded-3xl flex items-center justify-center overflow-hidden transition-all hover:scale-[1.02] shadow-lg group ${shop.logoBg}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-50"></div>
      
      {/* Live Badge inside Versus */}
      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1 z-20">
        <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
        <span className="text-[7px] font-black text-white uppercase tracking-widest">Live</span>
      </div>

      <div className="relative z-10">
        {shop.id === 'bol' && (
            <div className="text-3xl font-black text-white tracking-tighter drop-shadow-sm">bol</div>
        )}
        {shop.id === 'amazon' && (
            <div className="flex flex-col items-center scale-90">
               <div className="text-2xl font-black text-white tracking-tight leading-none uppercase">amazon<span className="text-yellow-500">.nl</span></div>
               <div className="w-full h-1 bg-yellow-500 rounded-full mt-1"></div>
            </div>
        )}
        {shop.id === 'coolblue' && (
            <div className="text-3xl font-black text-orange-500 tracking-tight drop-shadow-sm">Coolblue</div>
        )}
      </div>
    </a>
  );

  return (
    <div className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-sm mb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <ArrowLeftRight className="w-64 h-64 text-slate-900" />
      </div>

      <div className="relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-4">Duel Mode<span className="text-indigo-600">.</span></h2>
          <p className="text-slate-500 font-medium text-lg">Zet de giganten direct tegenover elkaar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-8">
          {/* Linker Shop */}
          <div className="md:col-span-3 space-y-6">
            <select 
              value={leftShop.id} 
              onChange={(e) => setLeftShop(SHOPS.find(s => s.id === e.target.value)!)}
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl font-black text-xs uppercase tracking-widest outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {SHOPS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <ShopLogoPreview shop={leftShop} />
          </div>

          {/* VS Divider */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-black text-xs shadow-xl z-20">VS</div>
          </div>

          {/* Rechter Shop */}
          <div className="md:col-span-3 space-y-6">
            <select 
              value={rightShop.id} 
              onChange={(e) => setRightShop(SHOPS.find(s => s.id === e.target.value)!)}
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl font-black text-xs uppercase tracking-widest outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {SHOPS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <ShopLogoPreview shop={rightShop} />
          </div>
        </div>

        <div className="mt-16 space-y-4">
          {features.map((f) => (
            <div key={f.key} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
              <div className="md:col-span-3 text-center md:text-left">
                <span className="text-sm font-bold text-slate-700">{getVal(leftShop.id, f.key) === true ? <Check className="w-5 h-5 text-emerald-500 mx-auto md:mx-0" /> : getVal(leftShop.id, f.key) === false ? <X className="w-5 h-5 text-rose-300 mx-auto md:mx-0" /> : getVal(leftShop.id, f.key)}</span>
              </div>
              <div className="md:col-span-1 text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{f.name}</span>
              </div>
              <div className="md:col-span-3 text-center md:text-right">
                <span className="text-sm font-bold text-slate-700">{getVal(rightShop.id, f.key) === true ? <Check className="w-5 h-5 text-emerald-500 mx-auto md:ml-auto md:mr-0" /> : getVal(rightShop.id, f.key) === false ? <X className="w-5 h-5 text-rose-300 mx-auto md:ml-auto md:mr-0" /> : getVal(rightShop.id, f.key)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
           <div className="inline-flex items-center gap-2 bg-indigo-50 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-indigo-600">
              <Info className="w-4 h-4" /> Real-time data sync enabled
           </div>
        </div>
      </div>
    </div>
  );
};
