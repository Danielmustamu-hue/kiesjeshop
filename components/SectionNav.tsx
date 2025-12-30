
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Zap, ArrowLeftRight, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

export const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'Pulse', icon: <Zap className="w-3 h-3" />, href: '#market-pulse' },
    { name: 'Vergelijker', icon: <LayoutGrid className="w-3 h-3" />, href: '#compare' },
    { name: 'Duel', icon: <ArrowLeftRight className="w-3 h-3" />, href: '#duel' },
    { name: 'Shops', icon: <ShoppingBag className="w-3 h-3" />, href: '#shops-section' },
    { name: 'Gidsen', icon: <BookOpen className="w-3 h-3" />, href: '#gidsen' },
    { name: 'FAQ', icon: <MessageSquare className="w-3 h-3" />, href: '#faq' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0% -40% 0%' }
    );

    links.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <nav aria-label="Sectienavigatie" className="flex justify-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 w-full overflow-hidden px-4">
      <div className="flex items-center p-1.5 md:p-2 bg-white rounded-2xl md:rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center px-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`flex items-center gap-2 px-5 md:px-7 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeSection === link.href 
                ? 'bg-slate-950 text-white shadow-lg scale-105' 
                : 'text-slate-400 hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              <span className={activeSection === link.href ? 'text-orange-400' : 'text-current'}>
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
