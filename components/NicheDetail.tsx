import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Award, Zap, PiggyBank, CheckCircle, ShoppingBag } from 'lucide-react';
import { NicheCategory } from '../data/niches';

interface NicheDetailProps {
  guide: NicheCategory;
  onBack: () => void;
}

export const NicheDetail: React.FC<NicheDetailProps> = ({ guide, onBack }) => {

  // Scroll to top when mounting this view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const getSearchLink = (type: 'bol' | 'coolblue' | 'amazon', query: string) => {
    const encoded = encodeURIComponent(query);
    switch (type) {
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
      case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3D${encoded}`;
      case 'amazon': return `https://www.amazon.nl/s?k=${encoded}&tag=kiesjeshop-21`;
      default: return '#';
    }
  };

  const getGuideCtaText = (shopId: string) => {
    switch (shopId) {
      case 'bol': return 'Bestel de winnaar bij bol';
      case 'amazon': return "Bekijk Amazon's beste deal";
      case 'coolblue': return 'Koop met de beste service';
      default: return 'Bekijk prijs';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Terug naar overzicht</span>
          </button>
          <span className="font-bold text-slate-900 truncate max-w-[200px] sm:max-w-none">{guide.title}</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative h-[300px] sm:h-[400px]">
        <img 
          src={guide.image} 
          alt={guide.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
            <div className="max-w-4xl mx-auto">
                <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                    Koopgids 2025
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 shadow-sm leading-tight">
                    {guide.title}
                </h1>
                <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
                    {guide.seoText} Wij hebben het assortiment van bol, Coolblue en Amazon vergeleken en dit zijn de winnaars.
                </p>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        
        {/* Intro */}
        <div className="prose prose-lg prose-slate mb-12">
            <p className="lead">
                Waarom uren zoeken als wij de selectie al hebben gemaakt? Hieronder vind je onze top 3 aanbevelingen voor deze categorie, gebaseerd op kwaliteit, prijs en beschikbaarheid.
            </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-12">
            {guide.products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row transform transition-all hover:shadow-2xl">
                    
                    {/* Left Side: Badge & Visuals */}
                    <div className={`p-6 md:w-1/3 flex flex-col justify-center items-start relative overflow-hidden
                        ${idx === 0 ? 'bg-amber-50' : idx === 1 ? 'bg-blue-50' : 'bg-green-50'}`}>
                        
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></div>

                        {idx === 0 && (
                            <div className="mb-4">
                                <Award className="w-12 h-12 text-amber-500 mb-2" />
                                <span className="text-amber-800 font-extrabold text-lg uppercase tracking-wide">Beste Keuze</span>
                            </div>
                        )}
                        {idx === 1 && (
                            <div className="mb-4">
                                <Zap className="w-12 h-12 text-blue-500 mb-2" />
                                <span className="text-blue-800 font-extrabold text-lg uppercase tracking-wide">Slimste Keus</span>
                            </div>
                        )}
                        {idx === 2 && (
                            <div className="mb-4">
                                <PiggyBank className="w-12 h-12 text-green-500 mb-2" />
                                <span className="text-green-800 font-extrabold text-lg uppercase tracking-wide">Beste Koop</span>
                            </div>
                        )}
                    </div>

                    {/* Right Side: Content & Actions */}
                    <div className="p-6 md:p-8 md:w-2/3 flex flex-col">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="mt-auto">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <ShoppingBag className="w-4 h-4" /> Check actuele voorraad & prijs
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                <a 
                                    href={getSearchLink('bol', product.searchQuery)}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-[#F5F9FF] text-blue-700 font-bold border border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 shadow-sm"
                                >
                                    <span>{getGuideCtaText('bol')}</span> <ExternalLink className="w-5 h-5 opacity-70" />
                                </a>
                                <a 
                                    href={getSearchLink('amazon', product.searchQuery)}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-[#FFFAEF] text-slate-800 font-bold border border-yellow-200 hover:bg-[#FF9900] hover:border-[#FF9900] transition-all active:scale-95 shadow-sm"
                                >
                                    <span>{getGuideCtaText('amazon')}</span> <ExternalLink className="w-5 h-5 opacity-70" />
                                </a>
                                <a 
                                    href={getSearchLink('coolblue', product.searchQuery)}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-[#FFF9F5] text-orange-600 font-bold border border-orange-100 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95 shadow-sm"
                                >
                                    <span>{getGuideCtaText('coolblue')}</span> <ExternalLink className="w-5 h-5 opacity-70" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Niet gevonden wat je zocht?</h3>
            <p className="text-slate-600 mb-6">
                Gebruik onze AI-assistent op de homepage voor een persoonlijk advies.
            </p>
            <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
            >
                <ArrowLeft className="w-4 h-4" /> Terug naar de homepage
            </button>
        </div>

      </div>
    </div>
  );
};