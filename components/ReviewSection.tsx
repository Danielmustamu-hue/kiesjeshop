
import React from 'react';
import { ShieldCheck, Zap, Heart, MousePointerClick, BarChart3, Search, Scale } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100">
           <ShieldCheck className="w-4 h-4" />
           <span>Onafhankelijk & Transparant</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
          Hoe wij de markt scannen<span className="brand-text-gradient">.</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium">
          Bij Kiesjeshop.nl geloven we in data, niet in mooie praatjes. Onze experts analyseren dagelijks de drie grootste retailers van Nederland op basis van drie harde criteria.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: <Scale className="w-8 h-8 text-blue-600" />,
            title: "1. Prijs-Validatie",
            desc: "Wij kijken verder dan de 'vanaf' prijs. Onze engine berekent de totale kosten inclusief verzending en eventuele verborgen toeslagen bij bol, Amazon en Coolblue."
          },
          {
            icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
            title: "2. Service Intelligence",
            desc: "Een lage prijs is niks waard zonder goede service. We wegen de retourtermijnen, garantie-afhandeling en de gemiddelde NPS-scores van de shops mee in ons advies."
          },
          {
            icon: <Search className="w-8 h-8 text-brand-pink" />,
            title: "3. Voorraad Analyse",
            desc: "Onze AI doorzoekt real-time de actuele voorraadstatus. Zo voorkomen we dat je wordt doorverwezen naar producten die pas over weken leverbaar zijn."
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 rounded-[3rem] p-10 relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100 text-center">
            <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-950 rounded-[3.5rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5"><ShieldCheck className="w-64 h-64" /></div>
        <div className="max-w-3xl relative z-10">
          <h4 className="text-3xl font-black mb-6 tracking-tight">Onze Belofte aan de Consument</h4>
          <div className="space-y-6 text-slate-400 font-medium text-lg leading-relaxed">
            <p>
              Kiesjeshop.nl is 100% onafhankelijk. Hoewel we een kleine commissie kunnen ontvangen als u via onze links een aankoop doet (zonder extra kosten voor u), heeft dit **geen enkele invloed** op onze ranking of ons advies. 
            </p>
            <p>
              Wij rangschikken producten op basis van wat voor ú de beste deal is, niet op basis van wat ons de hoogste commissie oplevert. Dat is de enige manier om uw vertrouwen — en dat van Google — te behouden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
