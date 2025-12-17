import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { NICHE_GUIDES, NicheCategory } from '../data/niches';

interface NicheGuidesProps {
  onSelectGuide: (guide: NicheCategory) => void;
}

export const NicheGuides: React.FC<NicheGuidesProps> = ({ onSelectGuide }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-rose-200">
           <TrendingUp className="w-4 h-4" />
           <span>Trending Categorieën</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Top 8 Trending Koopgidsen</h2>
        <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
          Wij hebben het uitzoekwerk al gedaan. Klik op een categorie voor onze top 3 aanbevelingen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {NICHE_GUIDES.map((guide) => (
          <div 
            key={guide.id} 
            onClick={() => onSelectGuide(guide)}
            className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={guide.image} 
                    alt={guide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight shadow-sm group-hover:text-rose-200 transition-colors">
                        {guide.title}
                    </h3>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {guide.seoText}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {guide.products.length} Producten
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 group-hover:gap-2 transition-all">
                        Bekijk Gids <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};