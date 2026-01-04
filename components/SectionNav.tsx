
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Zap, ArrowLeftRight, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

export const SectionNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'PULSE', icon: <Zap className="w-3 h-3" />, href: '#market-pulse' },
    { name: 'DEALS', icon: <LayoutGrid className="w-3 h-3" />, href: '#compare' },
    { name: 'DUEL', icon: <ArrowLeftRight className="w-3 h-3" />, href: '#duel' },
    { name: 'GIDSEN', icon: <BookOpen className="w-3 h-3" />, href: '#gidsen' },
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
      { threshold: 0.5 }
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
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <nav className="inline-flex items-center p-1.5 bg-white border border-slate-100 rounded-full shadow-sm">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${
            activeSection === link.href 
            ? 'bg-slate-50 text-brand-pink' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <span className={activeSection === link.href ? 'text-brand-pink' : 'text-slate-300'}>
            {link.icon}
          </span>
          {link.name}
        </a>
      ))}
    </nav>
  );
};
