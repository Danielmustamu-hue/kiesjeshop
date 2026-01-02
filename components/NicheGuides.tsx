
import React from 'react';
import { TrendingUp, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { NICHE_GUIDES, NicheCategory } from '../data/niches';

interface NicheGuidesProps {
  onSelectGuide: (guide: NicheCategory) => void;
  limit?: number;
}

export const NicheGuides: React.FC<NicheGuidesProps> = ({ onSelectGuide, limit }) => {
  const guidesToDisplay = limit ? NICHE_GUIDES.slice(0, limit) : NICHE_GUIDES;
  
  // Dynamische datum voor 'Laatste Update' gevoel
  const today = new Date();
  const formattedDate = "31 dec 2025"; // Hardcoded voor dit specifieke moment

  return (
    <section className="max-w-[1920px] mx-auto px-6 lg:px-12">
      {!limit && (
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-rose-100 text-rose-700 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-6 border border-rose-200 shadow-sm">
             <BookOpen className="w-5 h-5" />
             <span>Winkelrapportage 2026</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none">Beste Koopgidsen 2026.</h2>
          <p className="text-slate-500 mt-6 text-xl lg:text-2xl max-w-4xl mx-auto font-medium leading-relaxed">
            Onze redactie heeft de assortimenten voor het nieuwe jaar doorgelicht. Ontdek de winnaars voor 2026.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
        {guidesToDisplay.map((guide) => (
          <a 
            key={guide.id} 
            href={`#/koopgidsen/${guide.id}`}
            onClick={(e) => { e.preventDefault(); onSelectGuide(guide); }}
            className="group bg-white rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 flex flex-col h-full overflow-hidden"
          >
            {/* Image Header */}
            <div className="relative h-72 lg:h-80 overflow-hidden">
                <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-emerald-500 text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest animate-pulse shadow-lg">
                    Elite Editie
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white font-black text-2xl lg:text-3xl leading-tight group-hover:text-orange-400 transition-colors tracking-tighter">
                        {guide.title.replace('2025', '2026')}
                    </h3>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-10 lg:p-12 flex flex-col flex-grow">
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed mb-8 line-clamp-3 font-medium">
                    {guide.seoText.replace('2025', '2026')}
                </p>
                
                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Winter Update 25/26
                    </span>
                    <span className="inline-flex items-center gap-3 text-[11px] font-black text-orange-600 uppercase tracking-[0.3em] group-hover:gap-6 transition-all">
                        Analyse <ArrowRight className="w-5 h-5" />
                    </span>
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
