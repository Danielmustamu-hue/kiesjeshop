
import React, { useEffect } from 'react';
import { X, Calendar, Clock, ArrowLeft, ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
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
    if (article) {
      if (!inline) document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [article, inline]);

  if (!article) return null;

  const handleCtaClick = () => {
    if (onNavigateToShops) onNavigateToShops();
    else onClose();
  };

  const currentTitle = article.title.replace('2025', '2026');
  const currentDate = "31 dec 2025";

  const content = (
    <div className={`bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl flex flex-col overflow-hidden animate-in fade-in ${inline ? 'mx-auto relative' : 'max-h-[90vh] zoom-in-95 duration-200'}`}>
      
      {!inline && <ArticleStickyBar onNavigateToShops={handleCtaClick} />}

      <div className="relative h-64 sm:h-[350px] shrink-0 overflow-hidden">
          <img src={article.image} alt={currentTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          
          <button 
              onClick={onClose}
              className="absolute top-6 left-6 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest z-20"
          >
              <ArrowLeft className="w-4 h-4" /> Terug
          </button>

          <div className="absolute bottom-6 left-8 right-8 text-white z-10">
              <div className="flex items-center gap-3 mb-3">
                 <div className="bg-orange-600 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                    {article.icon} <span>{article.category}</span>
                 </div>
                 <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    Update 25/26
                 </div>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black leading-[0.95] tracking-tighter mb-3">{currentTitle}</h1>
              <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-widest text-white/60">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {currentDate}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
              </div>
          </div>
      </div>

      <div className={`p-8 sm:p-12 ${inline ? '' : 'overflow-y-auto overscroll-contain pb-32'}`}>
        
        <div className="mb-10 p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-wrap gap-2">
            {article.lsiKeywords.slice(0, 5).map((kw, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-bold text-slate-500">#{kw.replace('2025', '2026')}</span>
            ))}
        </div>

        <article className="prose prose-slate prose-lg max-w-none prose-p:leading-relaxed prose-headings:tracking-tighter prose-headings:font-black prose-img:rounded-2xl prose-a:text-orange-600">
          {article.content}
        </article>

        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-16 pt-16 border-t border-slate-100">
             <h3 className="text-2xl font-black tracking-tighter text-slate-950 mb-8">Veelgestelde Vragen</h3>
             <div className="grid gap-4">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                     <h4 className="text-base font-black text-slate-900 mb-2">{faq.question.replace('2025', '2026')}</h4>
                     <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.answer.replace('2025', '2026')}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        <div className="mt-16 p-8 bg-slate-950 rounded-[2rem] text-white relative overflow-hidden">
           <div className="relative z-10">
              <span className="text-[9px] font-black text-orange-400 uppercase tracking-[0.4em] block mb-3">Eindoordeel Experts</span>
              <h4 className="text-2xl font-black tracking-tighter mb-4">Onze Aanbeveling</h4>
              <p className="text-slate-400 text-base font-medium leading-relaxed mb-8 max-w-xl">
                 Focus in 2026 op duurzaamheid en garantie. Merken als Miele en Apple blijven de markt domineren qua restwaarde.
              </p>
              <button onClick={handleCtaClick} className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all">
                Check Deals <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>

      {!inline && (
        <div className="absolute top-6 right-6 z-30">
           <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20">
             <X className="w-5 h-5" />
           </button>
        </div>
      )}
    </div>
  );

  if (inline) return content;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose} />
      {content}
    </div>
  );
};
