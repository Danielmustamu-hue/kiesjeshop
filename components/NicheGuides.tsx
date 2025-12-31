
import React from 'react';
import { TrendingUp, ArrowRight, BookOpen } from 'lucide-react';
import { NICHE_GUIDES, NicheCategory } from '../data/niches';

interface NicheGuidesProps {
  onSelectGuide: (guide: NicheCategory) => void;
  limit?: number;
}

export const NicheGuides: React.FC<NicheGuidesProps> = ({ onSelectGuide, limit }) => {
  const guidesToDisplay = limit ? NICHE_GUIDES.slice(0, limit) : NICHE_GUIDES;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {!limit && (
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-rose-200">
             <BookOpen className="w-4 h-4" />
             <span>Winkelrapportage 2025</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">Beste Koopgidsen 2025.</h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Wij filteren de ruis van bol, Amazon en Coolblue. Klik op een categorie voor onze real-time analyse.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {guidesToDisplay.map((guide) => (
          <a 
            key={guide.id} 
            href={`#/koopgidsen/${guide.id}`}
            onClick={(e) => { e.preventDefault(); onSelectGuide(guide); }}
            className="group bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
          >
            {/* Image Header */}
            <div className="relative h-56 overflow-hidden">
                <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-black text-xl leading-tight group-hover:text-orange-400 transition-colors tracking-tight">
                        {guide.title}
                    </h3>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {guide.seoText}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Q1 2025 Analyse
                    </span>
                    <span className="inline-flex items-center gap-2 text-[10px] font-black text-orange-600 uppercase tracking-widest group-hover:gap-4 transition-all">
                        Bekijken <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
