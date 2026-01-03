
import React, { useEffect } from 'react';
import { ShoppingBag, Zap, Globe, ShieldCheck, ArrowUpRight, Star, Clock, Truck, HelpCircle, CheckCircle2, AlertCircle, BarChart3, TrendingUp, Sparkles, Box, CreditCard } from 'lucide-react';
import { AFFILIATE_LINKS, SHOPS } from '../constants';

interface TheBigThreeProps {
  onNavigate: (view: any) => void;
}

export const TheBigThree: React.FC<TheBigThreeProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-16">
      <section className="mb-20 max-w-4xl">
        <div className="inline-flex items-center gap-3 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-orange-100 shadow-sm">
          <BarChart3 className="w-4 h-4" /> Marktanalyse 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.95] mb-8">
          De Anatomie van de <span className="brand-text-gradient">Grote Drie.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-6 leading-tight">
          Het Probleem: De online shopper verdrinkt in een oceaan van loze prijsbeloftes.
        </p>
        <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-medium max-w-2xl">
          <strong>Kiesjeshop.nl</strong> ontleedt de drie reuzen. Wij kijken naar logistiek, prijsstabiliteit en de daadwerkelijke service-waarde van bol, Amazon en Coolblue.
        </p>
      </section>

      {/* Visual Service Intelligence Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {[
          { icon: <Box className="w-8 h-8" />, label: 'Voorraad Check', color: 'bg-blue-50 text-blue-600', desc: 'Real-time monitoring van API-feeds.' },
          { icon: <Truck className="w-8 h-8" />, label: 'Logistiek', color: 'bg-orange-50 text-orange-600', desc: 'Vergelijking van bezorgvensters.' },
          { icon: <CreditCard className="w-8 h-8" />, label: 'Betaal-gemak', color: 'bg-emerald-50 text-emerald-600', desc: 'Inzicht in retour-teruggaves.' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
              {item.icon}
            </div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-2">{item.label}</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-32">
        
        {/* bol Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 bg-blue-600 rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none"><ShoppingBag className="w-80 h-80" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-4 py-1.5 rounded-full w-fit mb-8 border border-white/20 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" /> De Markt-Dominator
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">bol</h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                Het complete Nederlandse ecosysteem. Leider in consumentenvertrouwen en lokaal gemak.
              </p>
              <a href={AFFILIATE_LINKS.bol} target="_blank" className="inline-flex items-center gap-4 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
                Check deals bij bol <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">Analyse: bol</h3>
            <div className="space-y-6 text-base text-slate-600 font-medium leading-relaxed">
              <p>De kracht van bol ligt in de naadloze integratie in de Nederlandse routine via Albert Heijn en Select.</p>
              <ul className="space-y-4 pt-4 border-t border-slate-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Lifestyle Autoriteit:</strong> Breedste assortiment in NL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>AH Retourservice:</strong> Retourneren zonder doos.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Amazon Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 text-right">
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">Amazon.nl: De Prijsvechter</h3>
            <div className="space-y-6 text-base text-slate-600 font-medium leading-relaxed">
              <p>Amazon domineert op brute prijskracht. Ideaal voor de rationele tech-shopper die de laagste prijs zoekt.</p>
              <ul className="space-y-4 pt-4 border-t border-slate-100 flex flex-col items-end">
                <li className="flex items-start gap-3">
                  <span className="text-right"><strong>Globale Inkoop:</strong> Laagste prijs op internationale tech.</span>
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-right"><strong>Prime:</strong> Beste waarde-abonnement (Video/Gaming).</span>
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#232F3E] rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden group order-1 lg:order-2">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none"><Globe className="w-80 h-80" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-4 py-1.5 rounded-full w-fit mb-8 border border-white/20 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" /> Prijs-Leider 2026
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">amazon<span className="text-yellow-500">.nl</span></h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                Ongeëvenaarde schaalvoordelen. Prijzen waar de lokale concurrentie alleen van kan dromen.
              </p>
              <a href={AFFILIATE_LINKS.amazon} target="_blank" className="inline-flex items-center gap-4 bg-[#FF9900] text-slate-900 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
                Pak Amazon deal <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Coolblue Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 bg-[#0090E3] rounded-[3rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none"><Zap className="w-80 h-80 text-orange-500" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-4 py-1.5 rounded-full w-fit mb-8 border border-white/20 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-400" /> Beste Service NPS
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none italic text-orange-500">Coolblue</h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                "Alles voor een glimlach". Koning van de specialistische ontzorging en advies.
              </p>
              <a href={AFFILIATE_LINKS.coolblue} target="_blank" className="inline-flex items-center gap-4 bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
                Check Coolblue service <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-6">De Strategie</h3>
            <div className="space-y-6 text-base text-slate-600 font-medium leading-relaxed">
              <p>Voor producten waarbij de ervaring zwaarder weegt dan de laagste prijs. Wint bij witgoed en complexe tech.</p>
              <ul className="space-y-4 pt-4 border-t border-slate-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Eigen Bezorging:</strong> Installateurs met verstand van zaken.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Fysieke Winkels:</strong> 25+ locaties voor direct advies.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-32 p-12 md:p-24 brand-gradient rounded-[3rem] text-white text-center shadow-xl">
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.85]">Het Eindoordeel.</h3>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto font-medium">
          De Laagste Prijs? Kies <strong>Amazon</strong>. Het Hoogste Gemak? Kies <strong>bol</strong>. De Beste Zekerheid? Kies <strong>Coolblue</strong>.
        </p>
        <button onClick={() => onNavigate('home')} className="bg-white text-brand-pink px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-xl">
           Start Vergelijking Now
        </button>
      </section>
    </div>
  );
};
