
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Zap, ArrowLeftRight, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

export const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'Pulse', icon: <Zap className="w-3.5 h-3.5" />, href: '#market-pulse' },
    { name: 'Deals', icon: <LayoutGrid className="w-3.5 h-3.5" />, href: '#compare' },
    { name: 'Duel', icon: <ArrowLeftRight className="w-3.5 h-3.5" />, href: '#duel' },
    { name: 'Gidsen', icon: <BookOpen className="w-3.5 h-3.5" />, href: '#gidsen' },
    { name: 'FAQ', icon: <MessageSquare className="w-3.5 h-3.5" />, href: '#faq' },
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
      const offset = 100;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <nav aria-label="Sectienavigatie" className="flex justify-center mb-16 md:mb-24 w-full overflow-hidden px-4">
      <div className="flex items-center p-1.5 bg-slate-50 border border-slate-100 rounded-full flex-wrap justify-center shadow-sm">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className={`flex items-center gap-2 px-6 md:px-8 py-3.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap group ${
              activeSection === link.href 
              ? 'bg-white text-brand-pink shadow-md border border-slate-100 scale-105' 
              : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            <span className={activeSection === link.href ? 'text-brand-pink' : 'text-slate-300 group-hover:text-slate-500 transition-colors'}>
              {link.icon}
            </span>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
