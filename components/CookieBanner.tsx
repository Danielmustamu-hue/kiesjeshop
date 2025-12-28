import React, { useState, useEffect } from 'react';
import { ShieldCheck, Info, X, ChevronRight } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kiesjeshop-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500); // Vertraging voor betere UX
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
    <div className="fixed bottom-0 left-0 w-full z-[150] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-orange-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Linkerzijde: Informatie */}
          <div className="p-6 md:p-8 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Cookievoorkeuren</h3>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Kiesjeshop.nl gebruikt cookies om uw ervaring te verbeteren. We gebruiken <strong>analytische cookies</strong> om de site te optimaliseren en <strong>affiliate cookies</strong> om onze commissies bij bol, Amazon en Coolblue te registreren. Dit kost u niets extra, maar houdt onze gids onafhankelijk.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-orange-700 flex items-center gap-1 group">
                <Info className="w-3 h-3" /> 
                <span>Meer details</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Rechterzijde: Acties */}
          <div className="bg-slate-50 p-6 md:p-8 md:w-80 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-orange-100">
            <button 
              onClick={handleAcceptAll}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-orange-500 transition-all active:scale-95"
            >
              Alles accepteren
            </button>
            <button 
              onClick={handleFunctionalOnly}
              className="w-full py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-orange-200 hover:text-orange-600 transition-all"
            >
              Alleen functioneel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};