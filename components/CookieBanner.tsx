
import React, { useState, useEffect } from 'react';
import { Info, ChevronRight, Cookie, Sparkles } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 w-full z-[150] p-4 md:p-8 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-12 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Cookie className="w-5 h-5 text-brand-pink" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">Shopping Intelligence Cookies</h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-6">
              Kiesjeshop.nl gebruikt cookies voor <strong className="text-slate-900">affiliate tracking</strong> (bol, Amazon, Coolblue) en marktanalyse. Dit helpt ons om onze marktrapporten en AI Advisor gratis en onafhankelijk te houden.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 flex items-center gap-2 group transition-all">
                <Info className="w-4 h-4" /> 
                <span>Privacybeleid</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="bg-slate-50/50 p-8 md:p-12 md:w-[380px] flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-slate-100">
            <button 
              onClick={handleAcceptAll}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-brand-pink transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Accepteer Alles <Sparkles className="w-4 h-4" />
            </button>
            <button 
              onClick={handleFunctionalOnly}
              className="w-full py-5 bg-white text-slate-400 border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-all"
            >
              Beperkt Gebruik
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
