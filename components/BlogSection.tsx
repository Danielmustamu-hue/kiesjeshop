
import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(12);

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
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 mb-24 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-orange-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Redactie Onderzoek</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight">Expert Analyses & Koopadvies.</h2>
          <p className="text-slate-500 font-medium text-lg lg:text-xl mt-2">Onafhankelijke tests van de redactie (bol, Amazon & Coolblue).</p>
        </div>
        
        <div className="flex flex-wrap gap-3 max-w-full md:max-w-xl justify-start md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  selectedCategory === category
                  ? 'bg-slate-950 text-white border-slate-950 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-orange-400 shadow-sm'
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
          className="group relative block rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer mb-12 h-[550px] md:h-[750px] lg:h-[850px] bg-slate-800 transition-all hover:shadow-orange-500/10 hover:border-orange-500/30"
        >
          <img src={heroArticle.image} alt={heroArticle.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          
          <div className="absolute top-10 right-10 flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 z-10">
             <ShieldCheck className="w-5 h-5 text-emerald-400" />
             <span className="text-[10px] font-black text-white uppercase tracking-widest">Gecontroleerd door Experts</span>
          </div>

          <div className="absolute bottom-0 left-0 p-12 md:p-24 w-full md:w-4/5 lg:w-3/4">
              <div className="flex items-center gap-5 mb-8">
                <span className="bg-orange-600 text-white px-5 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest">{heroArticle.category}</span>
                <span className="flex items-center gap-2 text-white/60 text-[11px] font-black uppercase tracking-widest"><Clock className="w-5 h-5" /> {heroArticle.readTime}</span>
              </div>
              <h3 className="text-4xl md:text-8xl lg:text-9xl font-black text-white mb-10 tracking-tighter group-hover:text-orange-400 transition-colors leading-[0.85]">{heroArticle.title}</h3>
              <div className="flex items-center gap-4 text-white font-black text-[12px] uppercase tracking-[0.5em] group-hover:gap-8 transition-all group-hover:text-orange-400">
                  Lees de volledige analyse <ArrowRight className="w-7 h-7" />
              </div>
          </div>
        </a>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {subArticles.map((article) => (
          <a 
            key={article.id} 
            href={`#/artikel/${article.id}`}
            onClick={(e) => { e.preventDefault(); onSelectArticle(article); }}
            className="bg-white rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group flex flex-col h-full overflow-hidden"
          >
            <div className="h-80 lg:h-96 overflow-hidden relative bg-slate-100">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-2xl text-[10px] font-black text-slate-800 uppercase tracking-widest border border-slate-100 shadow-sm">{article.category}</div>
              <div className="absolute bottom-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-[9px] font-black text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                 <Clock className="w-4 h-4" /> {article.readTime}
              </div>
            </div>
            <div className="p-12 flex flex-col flex-grow">
              <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-orange-600 transition-colors leading-tight tracking-tighter">{article.title}</h3>
              <p className="text-slate-500 mb-10 text-lg line-clamp-3 font-medium leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-8 border-t border-slate-50 text-[11px] text-slate-400 font-black uppercase tracking-widest mt-auto">
                  <span className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-emerald-500/50" /> {article.date}</span>
                  <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-all shadow-inner">
                    <ArrowRight className="w-5 h-5" />
                  </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {!allLoaded && subArticles.length > 0 && (
        <div className="mt-24 text-center">
          <button onClick={() => setVisibleCount(v => v + 6)} className="inline-flex items-center gap-5 px-20 py-7 bg-slate-950 text-white font-black text-[12px] uppercase tracking-[0.5em] rounded-[2.5rem] hover:bg-orange-600 transition-all shadow-2xl active:scale-95">
              Meer Artikelen Laden <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
