
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Alleen tonen na een flink stuk scrollen voor rustig beeld
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[80] 
        p-5 rounded-[2rem] 
        glass-morphism shadow-2xl
        text-slate-900 
        hover:bg-slate-950 hover:text-white hover:scale-110 
        active:scale-95 transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}
      aria-label="Terug naar boven"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};
