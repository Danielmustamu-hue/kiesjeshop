import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(5);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-orange-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Diepgang & Advies</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Redactie Feed.</h2>
        </div>
        
        <div className="flex flex-wrap gap-2 max-w-full md:max-w-xl justify-start md:justify-end">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  selectedCategory === category
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {heroArticle && (
        <div onClick={() => onSelectArticle(heroArticle)} className="group relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer mb-12 h-[450px] md:h-[600px] bg-slate-800">
          <img src={heroArticle.image} alt={heroArticle.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-4/5">
              <h3 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter group-hover:text-orange-400 transition-colors">{heroArticle.title}</h3>
              <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.4em] group-hover:gap-5 transition-all group-hover:text-orange-400">
                  Lees volledig artikel <ArrowRight className="w-5 h-5" />
              </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subArticles.map((article) => (
          <article key={article.id} onClick={() => onSelectArticle(article)} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group flex flex-col h-full overflow-hidden">
            <div className="h-56 overflow-hidden relative bg-slate-100">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-5 left-5 z-20 bg-white/95 px-3.5 py-2 rounded-2xl text-[9px] font-black text-slate-800 uppercase tracking-widest">{article.category}</div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight line-clamp-2 tracking-tight">{article.title}</h3>
              <p className="text-slate-500 mb-8 text-sm line-clamp-3 font-medium">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-[9px] text-slate-400 font-black uppercase tracking-widest mt-auto">
                  <span>{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-colors group-hover:translate-x-1.5" />
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {!allLoaded && subArticles.length > 0 && (
        <div className="mt-20 text-center">
          <button onClick={() => setVisibleCount(v => v + 4)} className="inline-flex items-center gap-3 px-12 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-3xl">
              Laad meer artikelen <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};