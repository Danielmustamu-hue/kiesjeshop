
import React from 'react';
import { ShieldCheck, Zap, Heart, MousePointerClick, BarChart3, Search, Scale } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-32 border-t border-slate-50">
      <div className="text-center max-w-5xl mx-auto mb-24">
        <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100 shadow-sm">
           <ShieldCheck className="w-5 h-5" />
           <span>Onafhankelijk & Transparant</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
          Hoe wij de markt scannen<span className="brand-text-gradient">.</span>
        </h2>
        <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed">
          Bij Kiesjeshop.nl geloven we in data, niet in marketing. Onze experts analyseren dagelijks de drie grootste retailers van Nederland op basis van onvervalste criteria.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mb-32">
        {[
          {
            icon: <Scale className="w-10 h-10 text-blue-600" />,
            title: "1. Prijs-Validatie",
            desc: "Wij kijken verder dan de 'vanaf' prijs. Onze engine berekent de totale kosten inclusief verzending en eventuele verborgen toeslagen bij bol, Amazon en Coolblue."
          },
          {
            icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
            title: "2. Service Intelligence",
            desc: "Een lage prijs is niks waard zonder goede service. We wegen de retourtermijnen, garantie-afhandeling en de gemiddelde NPS-scores van de shops mee in ons advies."
          },
          {
            icon: <Search className="w-10 h-10 text-brand-pink" />,
            title: "3. Voorraad Analyse",
            desc: "Onze AI doorzoekt real-time de actuele voorraadstatus. Zo voorkomen we dat je wordt doorverwezen naar producten die pas over weken leverbaar zijn."
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-[3.5rem] p-12 lg:p-16 relative overflow-hidden group hover:bg-white hover:shadow-3xl transition-all duration-700 border border-transparent hover:border-slate-100 text-center">
            <div className="w-24 h-24 bg-white shadow-xl rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-700">
              {item.icon}
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">{item.title}</h3>
            <p className="text-slate-600 font-medium text-lg lg:text-xl leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-950 rounded-[4rem] lg:rounded-[5rem] p-10 md:p-24 lg:p-32 text-white relative overflow-hidden shadow-3xl">
        <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none"><ShieldCheck className="w-[500px] h-[500px]" /></div>
        <div className="max-w-5xl relative z-10">
          <h4 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-none text-brand-pink">Onze Belofte aan de Consument</h4>
          <div className="space-y-8 text-slate-400 font-medium text-xl lg:text-2xl leading-relaxed">
            <p>
              Kiesjeshop.nl is 100% onafhankelijk. Hoewel we een commissie ontvangen bij aankopen via onze links (zonder extra kosten voor u), heeft dit <strong className="text-white">geen enkele invloed</strong> op onze ranking of ons advies. 
            </p>
            <p>
              Wij rangschikken producten op basis van wat voor ú de beste deal is. Dat is de enige manier om uw vertrouwen en onze positie als marktleider in retail intelligence te behouden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
