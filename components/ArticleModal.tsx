import React, { useEffect } from 'react';
import { X, Calendar, Clock, Share2 } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image Area */}
        <div className="relative h-48 sm:h-64 shrink-0 overflow-hidden">
            <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors border border-white/20"
                aria-label="Sluiten"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 sm:left-8 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 text-indigo-300">
                   {article.icon}
                   <span>{article.category}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold leading-tight shadow-sm">{article.title}</h2>
            </div>
        </div>

        {/* Meta Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime}</span>
            </div>
            <button className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                <Share2 className="w-4 h-4" /> <span className="hidden sm:inline">Delen</span>
            </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-slate-900 
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-li:text-slate-600">
            {article.content}
          </div>
        </div>

        {/* Footer CTA (Affiliate Push) */}
        <div className="p-4 sm:px-8 sm:py-6 border-t border-slate-100 bg-slate-50">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
             <p className="text-sm text-slate-500 font-medium text-center sm:text-left">
                Overtuigd? Vergelijk direct de prijzen.
             </p>
             <button 
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-bold shadow-sm"
             >
                Naar de shops
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};