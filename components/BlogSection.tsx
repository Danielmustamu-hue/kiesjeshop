import React, { useState, useMemo } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alles');
  const [visibleCount, setVisibleCount] = useState(3);

  // Unieke categorieën ophalen uit de artikelen
  const categories = useMemo(() => {
    const allCats = ARTICLES.map(article => article.category);
    return ['Alles', ...new Set(allCats)];
  }, []);

  // Artikelen filteren op basis van selectie
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Alles') {
      return ARTICLES;
    }
    return ARTICLES.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const allLoaded = visibleCount >= filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredArticles.length));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(3); // Reset zichtbaar aantal bij wisselen categorie
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-purple-200">
              <BookOpen className="w-4 h-4" />
              <span>Redactie Keuze</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nieuwste Koopgidsen</h2>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleArticles.length > 0 ? (
            visibleArticles.map((article) => (
              <article 
                key={article.id} 
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full overflow-hidden"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                      src={article.image} 
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 border border-white/20 shadow-sm flex items-center gap-2">
                      {article.icon}
                      {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                      {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                      {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400 mt-auto">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
             <div className="col-span-3 text-center py-12 text-slate-500">
               Geen artikelen gevonden in deze categorie.
             </div>
          )}
        </div>
        
        {!allLoaded && (
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