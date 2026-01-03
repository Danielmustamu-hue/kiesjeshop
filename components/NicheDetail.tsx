
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Award, Zap, PiggyBank, CheckCircle, ShoppingBag } from 'lucide-react';
import { NicheCategory } from '../data/niches';

interface NicheDetailProps {
  guide: NicheCategory;
  onBack: () => void;
}

export const NicheDetail: React.FC<NicheDetailProps> = ({ guide, onBack }) => {

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

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-brand-pink font-bold text-xs transition-colors">
            <ArrowLeft className="w-4 h-4" /> <span>Terug</span>
          </button>
          <span className="font-black text-slate-900 text-sm truncate">{guide.title}</span>
        </div>
      </div>

      <div className="relative h-[250px] sm:h-[300px]">
        <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
                <span className="bg-indigo-600 text-white text-[9px] font-black px-3 py-1 rounded-full mb-3 uppercase tracking-wider inline-block">Gids 2026</span>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-2 tracking-tighter leading-tight">{guide.title}</h1>
                <p className="text-base text-slate-200 max-w-xl font-medium line-clamp-2">{guide.seoText}</p>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid gap-8">
            {guide.products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all">
                    <div className={`p-8 md:w-1/4 flex flex-col justify-center items-center ${idx === 0 ? 'bg-amber-50' : idx === 1 ? 'bg-blue-50' : 'bg-green-50'}`}>
                        {idx === 0 && <><Award className="w-10 h-10 text-amber-500 mb-2" /><span className="text-[10px] font-black uppercase text-amber-800">Beste Keuze</span></>}
                        {idx === 1 && <><Zap className="w-10 h-10 text-blue-500 mb-2" /><span className="text-[10px] font-black uppercase text-blue-800">Slimste Keus</span></>}
                        {idx === 2 && <><PiggyBank className="w-10 h-10 text-green-500 mb-2" /><span className="text-[10px] font-black uppercase text-green-800">Beste Koop</span></>}
                    </div>
                    <div className="p-8 md:w-3/4 flex flex-col">
                        <h2 className="text-xl font-black text-slate-900 mb-2">{product.name}</h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <a href={getSearchLink('bol', product.searchQuery)} target="_blank" className="flex items-center justify-between px-4 py-3 rounded-xl bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest border border-blue-100 hover:bg-blue-600 hover:text-white transition-all"><span>bol</span> <ExternalLink className="w-3 h-3" /></a>
                            <a href={getSearchLink('amazon', product.searchQuery)} target="_blank" className="flex items-center justify-between px-4 py-3 rounded-xl bg-yellow-50 text-slate-800 text-[10px] font-black uppercase tracking-widest border border-yellow-200 hover:bg-[#FF9900] transition-all"><span>Amazon</span> <ExternalLink className="w-3 h-3" /></a>
                            <a href={getSearchLink('coolblue', product.searchQuery)} target="_blank" className="flex items-center justify-between px-4 py-3 rounded-xl bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest border border-orange-100 hover:bg-orange-500 hover:text-white transition-all"><span>Coolblue</span> <ExternalLink className="w-3 h-3" /></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
