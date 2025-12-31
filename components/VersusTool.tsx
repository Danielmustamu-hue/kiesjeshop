
import React, { useState } from 'react';
import { SHOPS } from '../constants';
import { ArrowLeftRight, Check, X, Info, ExternalLink } from 'lucide-react';

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
    <div className={`relative w-full h-32 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl group transition-all duration-700 hover:scale-105 ${shop.logoBg}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent opacity-40"></div>
      <div className="relative z-10 group-hover:scale-110 transition-transform duration-700">
        {shop.id === 'bol' && <div className="text-4xl font-black text-white tracking-tighter">bol</div>}
        {shop.id === 'amazon' && <div className="text-3xl font-black text-white uppercase tracking-tight">amazon<span className="text-yellow-500">.nl</span></div>}
        {shop.id === 'coolblue' && <div className="text-4xl font-black text-orange-500 tracking-tight italic">Coolblue</div>}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-xl mb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5"><ArrowLeftRight className="w-64 h-64 text-slate-200" /></div>
      <div className="relative z-10">
        <div className="mb-16">
          <span className="brand-text-gradient font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">Retail Duels</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Duel Mode<span className="brand-text-gradient">.</span></h2>
          <p className="text-slate-500 font-medium text-lg">Zet de giganten direct tegenover elkaar voor een objectief oordeel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-8">
          <div className="md:col-span-3 space-y-6">
            <select value={leftShop.id} onChange={(e) => setLeftShop(SHOPS.find(s => s.id === e.target.value)!)} className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl font-black text-[10px] uppercase tracking-widest outline-none focus:ring-4 focus:ring-brand-pink/10 transition-all cursor-pointer hover:bg-slate-100">
              {SHOPS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <ShopLogoPreview shop={leftShop} />
          </div>
          <div className="md:col-span-1 flex justify-center">
            <div className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-xs shadow-2xl z-20 animate-pulse">VS</div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <select value={rightShop.id} onChange={(e) => setRightShop(SHOPS.find(s => s.id === e.target.value)!)} className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl font-black text-[10px] uppercase tracking-widest outline-none focus:ring-4 focus:ring-brand-pink/10 transition-all cursor-pointer hover:bg-slate-100">
              {SHOPS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <ShopLogoPreview shop={rightShop} />
          </div>
        </div>
        <div className="mt-16 space-y-4">
          {features.map((f) => (
            <div key={f.key} className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center p-6 bg-slate-50/50 rounded-2xl border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-xl transition-all group/row">
              <div className="md:col-span-3 text-center md:text-left"><span className="text-sm font-black text-slate-700">{getVal(leftShop.id, f.key) === true ? <Check className="w-6 h-6 text-emerald-500 mx-auto md:mx-0" /> : getVal(leftShop.id, f.key) === false ? <X className="w-6 h-6 text-rose-300 mx-auto md:mx-0" /> : getVal(leftShop.id, f.key)}</span></div>
              <div className="md:col-span-1 text-center"><span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover/row:text-brand-pink transition-colors">{f.name}</span></div>
              <div className="md:col-span-3 text-center md:text-right"><span className="text-sm font-black text-slate-700">{getVal(rightShop.id, f.key) === true ? <Check className="w-6 h-6 text-emerald-500 mx-auto md:ml-auto" /> : getVal(rightShop.id, f.key) === false ? <X className="w-6 h-6 text-rose-300 mx-auto md:ml-auto" /> : getVal(rightShop.id, f.key)}</span></div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
           <a href={leftShop.ctaLink} target="_blank" rel="nofollow noopener" className={`p-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.05] ${leftShop.buttonColor}`}>
              Ga naar {leftShop.name} <ExternalLink className="w-5 h-5" />
           </a>
           <a href={rightShop.ctaLink} target="_blank" rel="nofollow noopener" className={`p-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-[1.05] ${rightShop.buttonColor}`}>
              Ga naar {rightShop.name} <ExternalLink className="w-5 h-5" />
           </a>
        </div>
      </div>
    </div>
  );
};
