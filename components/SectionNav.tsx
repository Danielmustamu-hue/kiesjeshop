
import React from 'react';
import { LayoutGrid, Zap, ArrowLeftRight, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

export const SectionNav: React.FC = () => {
  const links = [
    { name: 'Pulse', icon: <Zap className="w-3 h-3" />, href: '#market-pulse' },
    { name: 'Vergelijker', icon: <LayoutGrid className="w-3 h-3" />, href: '#compare' },
    { name: 'Duel', icon: <ArrowLeftRight className="w-3 h-3" />, href: '#duel' },
    { name: 'Shops', icon: <ShoppingBag className="w-3 h-3" />, href: '#shops-section' },
    { name: 'Gidsen', icon: <BookOpen className="w-3 h-3" />, href: '#gidsen' },
    { name: 'FAQ', icon: <MessageSquare className="w-3 h-3" />, href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 100; // Hoogte van de sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex justify-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
      <div className="inline-flex items-center p-2 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 hover:bg-slate-50 transition-all whitespace-nowrap"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
