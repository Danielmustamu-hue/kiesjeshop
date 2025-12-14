import React from 'react';
import { ShieldCheck, Zap, Heart, MousePointerClick } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-green-200">
           <ShieldCheck className="w-4 h-4" />
           <span>100% Transparant</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Waarom Kiesjeshop.nl?
        </h2>
        <p className="text-lg text-slate-600">
          Geen onzin, gewoon direct weten waar je aan toe bent.
        </p>
      </div>

      {/* Trust Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Snel & Simpel</h3>
            <p className="text-slate-600 leading-relaxed">
                Geen eindeloze tabbladen meer openen. Wij zetten de belangrijkste verschillen tussen Bol, Coolblue en Amazon direct naast elkaar.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Eerlijk Advies</h3>
            <p className="text-slate-600 leading-relaxed">
                Onze AI-assistent kijkt objectief naar jouw vraag. Zoeken naar service? Dan raden we Coolblue aan. Zoeken naar prijs? Dan vaak Amazon.
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow text-center">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MousePointerClick className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Bestellen</h3>
            <p className="text-slate-600 leading-relaxed">
                Eén klik en je bent op de juiste pagina bij de webshop van jouw keuze. Veilig en vertrouwd afrekenen bij de winkel zelf.
            </p>
        </div>

      </div>
    </div>
  );
};