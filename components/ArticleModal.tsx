
import React, { useEffect } from 'react';
import { X, Calendar, Clock, Share2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Article } from '../data/articles';
import { ArticleStickyBar } from './ArticleStickyBar';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onNavigateToShops?: () => void;
  inline?: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onNavigateToShops, inline = false }) => {
  
  useEffect(() => {
    if (article && !inline) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article, inline]);

  if (!article) return null;

  const handleCtaClick = () => {
    if (onNavigateToShops) {
      onNavigateToShops();
    } else {
      onClose();
    }
  };

  const content = (
    <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden animate-in fade-in ${inline ? 'mx-auto relative' : 'max-h-[90vh] zoom-in-95 duration-200'}`}>
      
      {!inline && <ArticleStickyBar />}

      <div className="relative h-64 sm:h-96 shrink-0 overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
          
          <button 
              onClick={onClose}
              className="absolute top-6 left-6 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
          >
              <ArrowLeft className="w-4 h-4" /> Terug
          </button>

          <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 text-orange-400">
                 {article.icon} <span>{article.category}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black leading-[1.1] tracking-tighter">{article.title}</h1>
          </div>
      </div>

      <div className="flex items-center justify-between px-8 py-4 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>
          <button className="flex items-center gap-2 hover:text-orange-600 transition-colors">
              <Share2 className="w-4 h-4" /> Delen
          </button>
      </div>

      <div className={`p-8 sm:p-12 ${inline ? '' : 'overflow-y-auto overscroll-contain pb-32'}`}>
        <article className="prose prose-slate prose-xl max-w-none prose-p:leading-relaxed prose-headings:tracking-tighter prose-headings:font-black">
          {article.content}
        </article>
      </div>

      <div className="p-8 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
         <div className="flex-1">
            <p className="text-slate-900 font-black text-sm uppercase tracking-wider mb-1">Direct Actie Ondernemen?</p>
            <p className="text-slate-500 text-xs font-medium">Vergelijk de beste prijzen voor deze categorie bij onze partners.</p>
         </div>
         <button 
           onClick={handleCtaClick} 
           className="w-full sm:w-auto px-10 py-5 bg-slate-950 text-white rounded-2xl hover:bg-indigo-600 transition-all font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 group"
         >
           <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
           Bekijk de shops op home
         </button>
      </div>
    </div>
  );

  if (inline) return content;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      {content}
    </div>
  );
};
