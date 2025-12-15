import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ARTICLES, Article } from '../data/articles';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-purple-200">
              <BookOpen className="w-4 h-4" />
              <span>Redactie Keuze</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Nieuwste Koopgidsen</h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            Bekijk alle artikelen <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article 
              key={article.id} 
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                {article.icon}
                <span>{article.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-400 mt-auto">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
        
        <button className="w-full mt-6 sm:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold shadow-sm">
            Bekijk alle artikelen <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </>
  );
};