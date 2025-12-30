
import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, Star, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(6);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-indigo-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Deep Content Redactie</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Market Intelligence Feed.</h2>
        </div>
        
        <div className="flex flex-wrap gap-2 max-w-full md:max-w-xl justify-start md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  selectedCategory === category
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {heroArticle && (
        <div onClick={() => onSelectArticle(heroArticle)} className="group relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer mb-12 h-[500px] md:h-[650px] bg-slate-800 transition-all hover:shadow-indigo-500/10 hover:border-indigo-500/30">
          <img src={heroArticle.image} alt={heroArticle.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          
          <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 z-10">
             <ShieldCheck className="w-4 h-4 text-emerald-400" />
             <span className="text-[9px] font-black text-white uppercase tracking-widest">Expert Fact Checked</span>
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full md:w-3/4">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">{heroArticle.category}</span>
                <span className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest"><Clock className="w-4 h-4" /> {heroArticle.readTime}</span>
              </div>
              <h3 className="text-3xl md:text-7xl font-black text-white mb-8 tracking-tighter group-hover:text-indigo-400 transition-colors leading-[0.9]">{heroArticle.title}</h3>
              <div className="flex items-center gap-3 text-white font-black text-[11px] uppercase tracking-[0.4em] group-hover:gap-6 transition-all group-hover:text-indigo-400">
                  Open Volledige Intelligence Gids <ArrowRight className="w-6 h-6" />
              </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {subArticles.map((article) => (
          <article key={article.id} onClick={() => onSelectArticle(article)} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group flex flex-col h-full overflow-hidden">
            <div className="h-64 overflow-hidden relative bg-slate-100">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl text-[9px] font-black text-slate-800 uppercase tracking-widest border border-slate-100">{article.category}</div>
              <div className="absolute bottom-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[8px] font-black text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                 <Clock className="w-3 h-3" /> {article.readTime}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight tracking-tighter">{article.title}</h3>
              <p className="text-slate-500 mb-10 text-base line-clamp-3 font-medium leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-8 border-t border-slate-50 text-[10px] text-slate-400 font-black uppercase tracking-widest mt-auto">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500/50" /> {article.date}</span>
                  <div className="bg-slate-50 p-2.5 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {!allLoaded && subArticles.length > 0 && (
        <div className="mt-24 text-center">
          <button onClick={() => setVisibleCount(v => v + 3)} className="inline-flex items-center gap-4 px-16 py-6 bg-slate-950 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-[2rem] hover:bg-indigo-600 transition-all shadow-xl active:scale-95">
              Meer Intelligence Laden <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
