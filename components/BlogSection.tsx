import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(5); // Start met 1 Hero + 4 kleintjes

  // Unieke categorieën ophalen
  const categories = useMemo(() => {
    const allCats = ARTICLES.map(article => article.category);
    return ['Alles', ...new Set(allCats)];
  }, []);

  // Filteren
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Alles') {
      return ARTICLES;
    }
    return ARTICLES.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const heroArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const subArticles = filteredArticles.slice(1, visibleCount);
  const allLoaded = visibleCount >= filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredArticles.length));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(5);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-purple-200">
              <BookOpen className="w-4 h-4" />
              <span>Diepgang & Advies</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Redactie Keuze & Koopgidsen</h2>
            <p className="text-slate-600 mt-2 max-w-xl">
                Wij duiken de diepte in zodat jij dat niet hoeft te doen. Eerlijke reviews en achtergrondverhalen bij onze niches.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 max-w-full md:max-w-xl">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                    selectedCategory === category
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                >
                {category}
                </button>
            ))}
          </div>
        </div>

        {/* HERO ARTICLE (Featured) */}
        {heroArticle && (
            <div 
                onClick={() => setSelectedArticle(heroArticle)}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 cursor-pointer mb-8 h-[400px] md:h-[500px] bg-slate-800"
            >
                <img 
                    src={heroArticle.image} 
                    alt={heroArticle.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" /> Redactie Tip
                        </span>
                        <span className="text-slate-300 text-sm font-medium flex items-center gap-2">
                             {heroArticle.icon} {heroArticle.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight group-hover:text-purple-200 transition-colors">
                        {heroArticle.title}
                    </h3>
                    <p className="text-slate-200 text-lg mb-6 line-clamp-2 leading-relaxed max-w-xl">
                        {heroArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                        Lees volledig artikel <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        )}

        {/* SUB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subArticles.length > 0 ? (
            subArticles.map((article) => (
              <article 
                key={article.id} 
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-800 border border-white/20 shadow-sm flex items-center gap-1.5 uppercase tracking-wide">
                      {article.icon}
                      {article.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors leading-snug line-clamp-2">
                      {article.title}
                  </h3>
                  
                  <p className="text-slate-500 mb-4 text-xs leading-relaxed flex-grow line-clamp-3">
                      {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-auto">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
             null
          )}
        </div>
        
        {!allLoaded && subArticles.length > 0 && (
          <div className="mt-12 text-center">
            <button 
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
            >
                Laad meer artikelen <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {selectedArticle && (
        <ArticleModal 
            article={selectedArticle} 
            onClose={() => setSelectedArticle(null)} 
        />
      )}
    </>
  );
};