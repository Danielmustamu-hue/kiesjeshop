import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  
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
          <h2 className="text-xl font-bold text-slate-900">Privacy- en Cookiebeleid</h2>
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
            <p className="text-sm text-slate-500 mb-6">Laatste update: 9 december 2025</p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">1. Verwerkingsverantwoordelijke</h3>
            <p>
              De verwerkingsverantwoordelijke voor dit beleid is Daniel Mustamu, beheerder van de website kiesjeshop.nl, gevestigd te Amstelveen. 
              Contact kan worden opgenomen via <a href="mailto:info@kiesjeshop.nl" className="text-indigo-600 hover:underline">info@kiesjeshop.nl</a>.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">2. Gegevensverwerking</h3>
            <p>
              Kiesjeshop.nl verwerkt geen naam, adres, of betaalgegevens. Wij verwerken uitsluitend:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Technische Gegevens:</strong> IP-adres, browserinformatie en surfgedrag (via Google Analytics).</li>
              <li><strong>Tracking Gegevens (Affiliate Cookies):</strong> Een unieke identifier voor het registreren van de doorverwijzing naar Coolblue, Bol.com en Amazon.</li>
            </ul>

            <h3 className="text-slate-900 font-bold mt-6 text-base">3. Doeleinden</h3>
            <p>De verwerking van deze gegevens dient twee doelen:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Het analyseren en verbeteren van de functionaliteit van kiesjeshop.nl (gerechtvaardigd belang).</li>
              <li>Het registreren van de doorverwijzing naar de externe webshops om onze commissie te ontvangen (gerechtvaardigd belang).</li>
            </ul>

            <h3 className="text-slate-900 font-bold mt-6 text-base">4. Cookies en Toestemming</h3>
            <p>
              Wij gebruiken cookies voor analytische en trackingdoeleinden. Voor het plaatsen van tracking cookies is uw actieve toestemming nodig via de cookiebanner. 
              Zonder toestemming worden deze cookies niet geplaatst.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">5. Delen met Derden</h3>
            <p>
              De tracking-ID wordt gedeeld met de systemen van Coolblue, Bol.com en Amazon om de doorverwijzing te registreren. 
              Deze webshops ontvangen geen persoonlijke identificerende gegevens van u. Wij delen daarnaast gegevens met Google Analytics voor statistische doeleinden.
            </p>

            <h3 className="text-slate-900 font-bold mt-6 text-base">6. Uw Rechten</h3>
            <p>
              U heeft het recht op inzage, correctie of verwijdering van de door ons verwerkte gegevens. 
              U kunt hiervoor contact opnemen via <a href="mailto:info@kiesjeshop.nl" className="text-indigo-600 hover:underline">info@kiesjeshop.nl</a>. 
              U heeft tevens het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP).
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