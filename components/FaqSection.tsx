import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Welke webshop is het goedkoopst?",
      answer: "Over het algemeen staat Amazon.nl bekend om zijn scherpe prijzen, vooral bij internationale producten en dagdeals. Bol.com heeft echter vaak goede aanbiedingen met 'Bol 7-daagse' en Coolblue concurreert niet op prijs, maar op service."
    },
    {
      question: "Waar kan ik het beste elektronica kopen?",
      answer: "Voor elektronica zoals wasmachines, laptops en TV's raden wij Coolblue aan. Hun installatieservice en deskundige advies zijn vaak de meerprijs waard. Voor kleine elektronica en kabels is Amazon vaak de voordeligste keuze."
    },
    {
      question: "Hoe snel wordt er geleverd?",
      answer: "Coolblue levert vaak de volgende dag en heeft opties voor 'VandaagNog'. Bol.com levert met Select vaak ook de volgende dag, zelfs op zondag. Amazon Prime biedt snelle, gratis levering, vaak binnen 1-2 dagen."
    },
    {
      question: "Wat is het voordeel van Bol Select of Amazon Prime?",
      answer: "Met Bol Select betaal je geen verzendkosten voor een vast bedrag per jaar. Amazon Prime biedt gratis verzending, maar geeft je ook toegang tot Prime Video (films en series) en Prime Gaming, wat het een zeer complete deal maakt."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
           <HelpCircle className="w-4 h-4" />
           <span>Veelgestelde Vragen</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Hulp bij het kiezen</h2>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:border-slate-300 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
            <p className="text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};