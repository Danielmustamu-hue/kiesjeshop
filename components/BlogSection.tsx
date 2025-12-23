
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-orange-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Diepgang & Advies</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Redactie Keuze & Koopgidsen</h2>
            <p className="text-slate-600 mt-2 max-w-xl font-medium leading-relaxed">
                Wij duiken de diepte in zodat jij dat niet hoeft te doen. Eerlijke reviews en achtergrondverhalen bij onze niches.
            </p>
          </div>
          
          {/* Category Filters - GEEN SCROLL MEER, GEBRUIKT WRAP */}
          <div className="flex flex-wrap gap-2 max-w-full md:max-w-xl justify-start md:justify-end">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                    selectedCategory === category
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105 ring-2 ring-orange-500/20'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50'
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
                className="group relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 cursor-pointer mb-12 h-[450px] md:h-[600px] bg-slate-800"
            >
                <img 
                    src={heroArticle.image} 
                    alt={heroArticle.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-95 group-hover:opacity-85 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-4/5">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-orange-500/20">
                            <Star className="w-3.5 h-3.5 fill-current" /> Redactie Tip
                        </span>
                        <span className="bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-white/20">
                             {heroArticle.icon} {heroArticle.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1] tracking-tighter group-hover:text-orange-400 transition-colors">
                        {heroArticle.title}
                    </h3>
                    <p className="text-slate-200 text-lg md:text-xl mb-8 line-clamp-2 leading-relaxed max-w-2xl font-medium">
                        {heroArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-[0.4em] group-hover:gap-5 transition-all group-hover:text-orange-400">
                        Lees volledig artikel <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        )}

        {/* SUB GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subArticles.length > 0 ? (
            subArticles.map((article) => (
              <article 
                key={article.id} 
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group flex flex-col h-full overflow-hidden"
              >
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-2xl text-[9px] font-black text-slate-800 border border-slate-100 shadow-sm flex items-center gap-2 uppercase tracking-widest">
                      {article.icon}
                      {article.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight line-clamp-2 tracking-tight">
                      {article.title}
                  </h3>
                  
                  <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow line-clamp-3 font-medium">
                      {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-[9px] text-slate-400 font-black uppercase tracking-widest mt-auto">
                      <div className="flex items-center gap-4">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span>{article.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-colors group-hover:translate-x-1.5" />
                  </div>
                </div>
              </article>
            ))
          ) : (
             null
          )}
        </div>
        
        {!allLoaded && subArticles.length > 0 && (
          <div className="mt-20 text-center">
            <button 
                onClick={handleLoadMore}
                className="inline-flex items-center gap-3 px-12 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-3xl hover:bg-orange-600 transition-all shadow-2xl active:scale-95 shadow-slate-900/20"
            >
                Laad meer artikelen <ChevronDown className="w-5 h-5" />
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
