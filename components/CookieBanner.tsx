
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Info, X, ChevronRight, Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kiesjeshop-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('kiesjeshop-cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleFunctionalOnly = () => {
    localStorage.setItem('kiesjeshop-cookie-consent', 'functional');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[150] p-4 md:p-10 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-3xl rounded-[3rem] shadow-[0_30px_100px_rgba(15,23,42,0.2)] border border-slate-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Linkerzijde: Informatie */}
          <div className="p-8 md:p-12 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 p-3 rounded-2xl shadow-xl shadow-indigo-600/20">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight">Privacy & Cookies</h3>
            </div>
            
            <p className="text-slate-500 text-base font-medium leading-relaxed mb-6">
              Wij gebruiken cookies om onze vergelijkings-engine te optimaliseren. Dit omvat <strong>analytische data</strong> en <strong>affiliate tracking</strong> voor bol, Amazon en Coolblue. Dit helpt ons onafhankelijk te blijven zonder extra kosten voor jou.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 hover:text-slate-950 flex items-center gap-2 group transition-colors">
                <Info className="w-4 h-4" /> 
                <span>Volledig beleid</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Rechterzijde: Acties */}
          <div className="bg-slate-50 p-8 md:p-12 md:w-96 flex flex-col justify-center gap-4 border-t md:border-t-0 md:border-l border-slate-100">
            <button 
              onClick={handleAcceptAll}
              className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-indigo-600 transition-all active:scale-95"
            >
              Alles accepteren
            </button>
            <button 
              onClick={handleFunctionalOnly}
              className="w-full py-5 bg-white text-slate-500 border border-slate-200 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:border-indigo-600 hover:text-indigo-600 transition-all"
            >
              Alleen essentieel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
