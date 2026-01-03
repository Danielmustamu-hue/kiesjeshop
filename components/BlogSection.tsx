
import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(10);

  const categories = useMemo(() => {
    const allCats = ARTICLES.map(article => article.category);
    return ['Alles', ...new Set(allCats)];
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Alles') return ARTICLES;
    return ARTICLES.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const heroArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const subArticles = filteredArticles.slice(1, visibleCount);
  const allLoaded = visibleCount >= filteredArticles.length;

  return (
    <div className="max-w-[1400px] mx-auto px-6 mb-20 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-3 border border-orange-200">
            <BookOpen className="w-3 h-3" />
            <span>Redactie Onderzoek</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">Expert Analyses.</h2>
          <p className="text-slate-500 font-medium text-base mt-1">Onafhankelijke tests van de redactie (bol, Amazon & Coolblue).</p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${
                  selectedCategory === category
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-orange-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {heroArticle && (
        <a 
          href={`#/artikel/${heroArticle.id}`}
          onClick={(e) => { e.preventDefault(); onSelectArticle(heroArticle); }}
          className="group relative block rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 cursor-pointer mb-10 h-[400px] md:h-[500px] bg-slate-800 transition-all hover:shadow-orange-500/10 hover:border-orange-500/30"
        >
          <img src={heroArticle.image} alt={heroArticle.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{heroArticle.category}</span>
                <span className="flex items-center gap-2 text-white/60 text-[9px] font-black uppercase tracking-widest"><Clock className="w-4 h-4" /> {heroArticle.readTime}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter group-hover:text-orange-400 transition-colors leading-[0.95]">{heroArticle.title}</h3>
              <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.4em] group-hover:gap-5 transition-all group-hover:text-orange-400">
                  Lees analyse <ArrowRight className="w-5 h-5" />
              </div>
          </div>
        </a>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subArticles.map((article) => (
          <a 
            key={article.id} 
            href={`#/artikel/${article.id}`}
            onClick={(e) => { e.preventDefault(); onSelectArticle(article); }}
            className="bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full overflow-hidden"
          >
            <div className="h-56 overflow-hidden relative bg-slate-100">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 z-20 bg-white/95 px-3 py-1.5 rounded-xl text-[8px] font-black text-slate-800 uppercase tracking-widest border border-slate-100 shadow-sm">{article.category}</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors leading-tight tracking-tight">{article.title}</h3>
              <p className="text-slate-500 mb-6 text-sm line-clamp-2 font-medium leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-[9px] text-slate-400 font-black uppercase tracking-widest mt-auto">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500/50" /> {article.date}</span>
                  <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {!allLoaded && (
        <div className="mt-16 text-center">
          <button onClick={() => setVisibleCount(v => v + 6)} className="inline-flex items-center gap-4 px-12 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-orange-600 transition-all shadow-lg active:scale-95">
              Meer Artikelen <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
