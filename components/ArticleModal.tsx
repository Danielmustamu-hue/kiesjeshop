
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
    if (article && !inline) {
      document.body.style.overflow = 'hidden';
      
      if (article.faqs && article.faqs.length > 0) {
        const schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": article.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'faq-schema';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }
    return () => {
      document.body.style.overflow = '';
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) existingScript.remove();
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
      
      {!inline && <ArticleStickyBar onNavigateToShops={handleCtaClick} />}

      <div className="relative h-64 sm:h-[450px] shrink-0 overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          
          <button 
              onClick={onClose}
              className="absolute top-6 left-6 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center gap-2 font-bold text-xs uppercase tracking-widest z-20"
          >
              <ArrowLeft className="w-4 h-4" /> Terug
          </button>

          <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <div className="flex items-center gap-3 mb-4">
                 <div className="bg-orange-600 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    {article.icon} <span>{article.category}</span>
                 </div>
                 <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Gecontroleerd
                 </div>
              </div>
              <h1 className="text-3xl sm:text-6xl font-black leading-[0.9] tracking-tighter mb-4">{article.title}</h1>
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/60">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime} Leestijd</span>
              </div>
          </div>
      </div>

      <div className={`p-8 sm:p-16 ${inline ? '' : 'overflow-y-auto overscroll-contain pb-40'}`}>
        
        <div className="mb-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-4">Focus & Context</span>
           <div className="flex flex-wrap gap-2">
              {article.lsiKeywords.map((kw, i) => (
                <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-500">#{kw}</span>
              ))}
           </div>
        </div>

        <article className="prose prose-slate prose-xl max-w-none prose-p:leading-relaxed prose-headings:tracking-tighter prose-headings:font-black prose-img:rounded-3xl prose-a:text-orange-600 prose-strong:text-slate-900">
          {article.content}
        </article>

        {article.faqs && article.faqs.length > 0 && (
          <div className="mt-20 pt-20 border-t border-slate-100">
             <div className="flex items-center gap-3 mb-10">
                <div className="bg-orange-600 p-2.5 rounded-xl"><HelpCircle className="w-6 h-6 text-white" /></div>
                <h3 className="text-3xl font-black tracking-tighter text-slate-950">Veelgestelde Vragen</h3>
             </div>
             <div className="grid gap-6">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-orange-200 transition-all">
                     <h4 className="text-xl font-black text-slate-900 mb-4">{faq.question}</h4>
                     <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        <div className="mt-20 p-10 bg-slate-950 rounded-[3rem] text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <CheckCircle2 className="w-32 h-32" />
           </div>
           <div className="relative z-10">
              <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] block mb-4">Eindoordeel Experts</span>
              <h4 className="text-3xl font-black tracking-tighter mb-6">Onze Laatste Aanbeveling</h4>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                 Kwaliteit wint altijd op de lange termijn. In 2025 zien we dat de service bij bol en Coolblue vaak het kleine prijsverschil met prijsvechters waard is voor deze categorie.
              </p>
              <button 
                onClick={handleCtaClick}
                className="flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
              >
                Direct Vergelijken <ArrowRight className="w-5 h-5" />
              </button>
           </div>
        </div>
      </div>

      {!inline && (
        <div className="absolute top-6 right-6 z-30">
           <button 
             onClick={onClose}
             className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
           >
             <X className="w-6 h-6" />
           </button>
        </div>
      )}
    </div>
  );

  if (inline) return content;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity" onClick={onClose} />
      {content}
    </div>
  );
};
