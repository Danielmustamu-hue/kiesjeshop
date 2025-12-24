import React, { useEffect } from 'react';
import { X, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  inline?: boolean;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, inline = false }) => {
  
  useEffect(() => {
    if (article && !inline) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article, inline]);

  if (!article) return null;

  const content = (
    <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden animate-in fade-in ${inline ? 'mx-auto' : 'max-h-[90vh] zoom-in-95 duration-200'}`}>
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

      <div className={`p-8 sm:p-12 ${inline ? '' : 'overflow-y-auto overscroll-contain'}`}>
        <div className="prose prose-slate prose-xl max-w-none prose-p:leading-relaxed prose-headings:tracking-tighter prose-headings:font-black">
          {article.content}
        </div>
      </div>

      <div className="p-8 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
         <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Overtuigd? Vergelijk direct bij bol, Amazon of Coolblue.</p>
         <button onClick={onClose} className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl hover:bg-orange-500 transition-all font-black text-xs uppercase tracking-widest shadow-xl">Bekijk de shops</button>
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