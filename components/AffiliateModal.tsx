
import React, { useEffect } from 'react';
import { X, Info, HelpCircle, CheckCircle } from 'lucide-react';

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AffiliateModal: React.FC<AffiliateModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-indigo-600 p-2 rounded-xl"><Info className="w-5 h-5 text-white" /></div>
             <h2 className="text-2xl font-black text-slate-900 tracking-tight">Affiliate Verklaring</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-all"><X className="w-6 h-6 text-slate-400" /></button>
        </div>

        <div className="p-10 overflow-y-auto">
          <div className="prose prose-slate prose-base max-w-none text-slate-600 font-medium leading-relaxed">
            <p className="text-lg text-slate-900 font-bold mb-6">Transparantie is de basis van ons platform.</p>
            
            <p>
              Kiesjeshop.nl is een onafhankelijk platform. Wij verkopen zelf geen producten. In plaats daarvan helpen we je de beste keuze te maken tussen giganten als <strong>bol</strong>, <strong>Amazon.nl</strong> en <strong>Coolblue</strong>.
            </p>

            <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 my-8">
               <h4 className="font-black text-indigo-900 mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5" /> Hoe verdienen wij geld?</h4>
               <p className="text-sm text-indigo-800">
                 Wanneer je via een link op onze website naar een webshop gaat en daar een aankoop doet, ontvangen wij een kleine commissie (meestal tussen de 1% en 8%) van de webshop.
               </p>
            </div>

            <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Geen extra kosten:</strong> De prijs van het product blijft voor jou exact hetzelfde. Je betaalt niets extra.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Onafhankelijk advies:</strong> Onze AI en redactie kijken naar service-scores en data, niet naar commissie-hoogtes.</span>
               </li>
               <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Geen reclames:</strong> Door dit model kunnen we de website vrij houden van irritante banners en pop-ups.</span>
               </li>
            </ul>

            <p>
              Door via onze links te winkelen, steun je direct het onderhoud van dit platform en onze onafhankelijke redactie. Bedankt voor je vertrouwen!
            </p>
          </div>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="bg-slate-950 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all">Begrepen</button>
        </div>
      </div>
    </div>
  );
};
