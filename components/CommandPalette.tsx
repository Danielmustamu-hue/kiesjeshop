
import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, ShoppingBag, Zap, Cpu, History } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { NICHE_GUIDES } from '../data/niches';
import { SHOPS } from '../constants';
import { PRODUCTS } from '../data/products';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: any, item?: any) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();

    return {
      articles: ARTICLES.filter(a => a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)).slice(0, 3),
      guides: NICHE_GUIDES.filter(g => g.title.toLowerCase().includes(q)).slice(0, 3),
      products: PRODUCTS.filter(p => p.name.toLowerCase().includes(q)).slice(0, 3),
      shops: SHOPS.filter(s => s.name.toLowerCase().includes(q))
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4">
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(15,23,42,0.3)] border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center p-6 border-b border-slate-50">
          <Search className="w-6 h-6 text-indigo-500 mr-4" />
          <input 
            autoFocus
            type="text" 
            placeholder="Zoek artikelen, gidsen, shops of producten..." 
            className="flex-grow bg-transparent text-xl font-medium text-slate-900 outline-none placeholder:text-slate-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <span className="hidden sm:block px-2 py-1 bg-slate-100 text-slate-400 text-[10px] font-black rounded-md">ESC</span>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {!query.trim() ? (
            <div className="p-8 text-center">
              <div className="bg-slate-50 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <History className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Wat zoek je vandaag?</p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {['Oortjes', 'Airfryer', 'CO2 Meter', 'bol 7-daagse'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8 p-4">
              {results?.shops.length! > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-2">Webshops</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {results?.shops.map(shop => (
                      <button key={shop.id} onClick={() => { onNavigate('home'); onClose(); }} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 group transition-all">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl ${shop.logoBg} flex items-center justify-center text-[10px] font-black text-white mix-blend-difference`}>{shop.name[0]}</div>
                          <span className="font-bold text-slate-900">{shop.name}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results?.guides.length! > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-2">Koopgidsen</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {results?.guides.map(guide => (
                      <button key={guide.id} onClick={() => onNavigate('niche-detail', guide)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 group transition-all text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl overflow-hidden"><img src={guide.image} className="w-full h-full object-cover" /></div>
                          <span className="font-bold text-slate-900">{guide.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results?.articles.length! > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-2">Redactie</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {results?.articles.map(article => (
                      <button key={article.id} onClick={() => onNavigate('artikel-detail', article)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-indigo-50 group transition-all text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs"><BookOpen className="w-4 h-4" /></div>
                          <span className="font-bold text-slate-900 line-clamp-1">{article.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results && Object.values(results).every(r => r.length === 0) && (
                <div className="text-center py-12">
                   <p className="text-slate-400 mb-6">Geen directe resultaten gevonden voor "{query}"</p>
                   <button 
                     onClick={() => onNavigate('ai-advisor', query)}
                     className="inline-flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all"
                   >
                     <Cpu className="w-4 h-4 text-indigo-400" /> Vraag de AI Consultant
                   </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-8">
           <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-black text-slate-400 shadow-sm">TAB</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Navigeren</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[9px] font-black text-slate-400 shadow-sm">ENTER</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Selecteren</span>
           </div>
        </div>
      </div>
    </div>
  );
};
