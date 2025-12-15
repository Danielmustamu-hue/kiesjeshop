import React from 'react';
import { X, Heart, Target, Users } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="relative h-40 bg-indigo-600 overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative h-full flex items-center px-8">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Over Kiesjeshop.nl</h2>
                    <p className="text-indigo-100">Ons verhaal en onze missie.</p>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Sluiten"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate prose-sm max-w-none text-slate-600">
            
            <p className="lead text-lg text-slate-800 font-medium">
                Wij geloven dat online winkelen makkelijker kan. Geen 20 tabbladen open, maar één duidelijk overzicht.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Target className="w-8 h-8 text-indigo-500 mb-3" />
                    <h4 className="font-bold text-slate-900 mb-2">Onze Missie</h4>
                    <p className="text-sm">Consumenten helpen de beste keuze te maken door webshops niet alleen op prijs, maar ook op service en levering te vergelijken.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Heart className="w-8 h-8 text-rose-500 mb-3" />
                    <h4 className="font-bold text-slate-900 mb-2">Onafhankelijk</h4>
                    <p className="text-sm">Hoewel we werken met affiliate partners, laten we onze mening niet beïnvloeden. Slechte service is slechte service, punt.</p>
                </div>
            </div>

            <h3 className="text-slate-900 font-bold">Wie zijn wij?</h3>
            <p>
              Kiesjeshop.nl is opgericht in 2025 vanuit een frustratie: waarom is het zo moeilijk om te zien of Amazon Prime sneller levert dan Bol Select? 
              Ons kleine team van e-commerce enthousiastelingen test dagelijks de levertijden, klantenservice en retourvoorwaarden van de grote spelers.
            </p>

            <h3 className="text-slate-900 font-bold mt-6">Hoe wij geld verdienen</h3>
            <p>
              Eerlijkheid duurt het langst. Wij ontvangen een kleine commissie als u via onze links iets koopt bij Bol.com, Coolblue of Amazon. 
              Dit beïnvloedt de prijs voor u niet. Het stelt ons in staat om de hosting te betalen en deze site reclamevrij (geen banners!) te houden.
            </p>

             <h3 className="text-slate-900 font-bold mt-6">Redactionele Formule</h3>
            <p>
              Onze koopgidsen worden geschreven door mensen, ondersteund door data. Wij maken geen gebruik van automatische 'content spinners'. 
              Elk artikel is gecheckt op feitelijke juistheid op het moment van publiceren.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
           <span className="text-xs text-slate-400">Gevestigd te Amstelveen, NL</span>
           <button 
             onClick={onClose}
             className="px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors font-semibold text-sm shadow-sm"
           >
             Sluiten
           </button>
        </div>

      </div>
    </div>
  );
};