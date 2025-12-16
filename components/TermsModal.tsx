import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-900">Algemene Voorwaarden</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="prose prose-slate prose-sm max-w-none text-slate-600">
            <p className="font-medium text-slate-900 italic mb-4">Gebruik van Kiesjeshop.nl</p>
            
            <h3 className="text-slate-900 font-bold mt-6 text-base">1. Rol van de Website en Contact</h3>
            <p>
              Deze website, kiesjeshop.nl, wordt beheerd door Daniel Mustamu, gevestigd te Amstelveen (hierna: "de Beheerder"). 
              De Beheerder fungeert uitsluitend als onafhankelijke vergelijker en affiliate doorverwijzer naar de externe webshops Coolblue, Bol.com en Amazon. 
              Wij zijn géén verkoper, leverancier of contractpartij bij de aankoop.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">2. Prijzen, Productinformatie en Aansprakelijkheid</h3>
            <p>
              De getoonde prijzen, details en voorraadinformatie op kiesjeshop.nl zijn afkomstig van de genoemde webshops. 
              Deze informatie is indicatief en wordt verstrekt onder voorbehoud van fouten of wijzigingen.
            </p>
            <p>
              Wij aanvaarden geen aansprakelijkheid voor onjuiste informatie. 
              Raadpleeg altijd de externe webshop voor de meest actuele en bindende informatie voordat u een aankoop doet.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">3. Doorverwijzing en Externe Voorwaarden</h3>
            <p>
              Door te klikken op een vergelijkingslink op kiesjeshop.nl, verlaat u onze website. 
              De koopovereenkomst wordt uitsluitend gesloten tussen u en de webshop (Coolblue, Bol.com of Amazon). 
              Op uw aankoop zijn de Algemene Voorwaarden van die specifieke webshop van toepassing, inclusief hun beleid ten aanzien van betaling, levering, garantie, herroepingsrecht en retouren.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">4. Aansprakelijkheid en Geschillen</h3>
            <p>
              De Beheerder van kiesjeshop.nl is niet aansprakelijk voor enige schade die voortvloeit uit de aankoop bij de externe webshops. 
              Voor alle vragen, klachten of geschillen met betrekking tot uw bestelling dient u direct contact op te nemen met de webshop waar u de aankoop heeft gedaan.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">5. Contact Beheerder</h3>
            <p>
              Voor vragen over deze Algemene Voorwaarden kunt u contact opnemen via <a href="mailto:info@kiesjeshop.nl" className="text-indigo-600 font-medium hover:underline">info@kiesjeshop.nl</a>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 sm:py-6 border-t border-slate-100 bg-slate-50 flex justify-end">
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