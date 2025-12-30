
import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Target } from 'lucide-react';

export const SeoContent: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-3 bg-orange-50 text-orange-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-orange-100">
          <Target className="w-4 h-4" /> Market Intelligence Report 2025
        </div>

        <div className="prose prose-slate prose-xl max-w-none">
          {/* PROBLEM */}
          <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-8 leading-tight">
            De verborgen kosten van "De Laagste Prijs": Waarom we massaal de verkeerde keuzes maken.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
            Je opent tien tabbladen. Je vergelijkt de prijzen bij bol, struint door de deals van Amazon en kijkt of Coolblue weer een blauwe maandag heeft. Je denkt dat je de beste deal hebt gevonden, maar de werkelijkheid is vaak een dure les in consumentenpsychologie en logistieke ruis. In de complexe e-commerce markt van 2025 is de "laagste prijs" slechts het topje van de ijsberg.
          </p>

          {/* AGITATE */}
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-6">
            De Frustratie van de Omni-Channel Markt.
          </h3>
          <p className="mb-8">
            De markt is verzadigd. Prijselasticiteit is nog nooit zo hoog geweest, maar de transparantie is lager dan ooit. Je koopt een product bij een prijsvechter op Amazon, om er vervolgens achter te komen dat de verzendkosten en de retourvoorwaarden je voordeel volledig verdampen. Of erger nog: je bestelt bij bol en krijgt een product van een externe verkoper die de service-normen van de Gigant uit Utrecht niet haalt. De uren die je verliest met het analyseren van deze data zijn onbetaalbaar. Je koopkracht in 2025 staat onder druk, en elke miskoop is een directe aanslag op je budget en je tijd.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 my-16">
             <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-orange-600" /> Wist je dat?
             </h4>
             <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
                   <span>40% van de online shoppers spijt heeft van hun aankoop door onduidelijke service-voorwaarden.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
                   <span>De service-score van een webshop zwaarder weegt voor de klanttevredenheid dan een prijsverschil van 5%.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></div>
                   <span>Real-time price tracking je gemiddeld 12% bespaart op high-end elektronica.</span>
                </li>
             </ul>
          </div>

          {/* SOLVE */}
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-6">
            Intelligence Driven Shopping: De Toekomst van Kiesjeshop.nl.
          </h3>
          <p className="mb-12">
            Bij Kiesjeshop.nl geloven we niet in het simpelweg kopiëren van prijzen. Onze missie is **Market Intelligence**. Wij gebruiken neurale netwerken en real-time data-analyse om de Grote 3 (bol, Amazon, Coolblue) te ontleden. Wij kijken niet alleen naar het getal onder de streep, maar wegen ook de **Service Trust Score**, de leveringssnelheid en de prijsstabiliteit mee. Onze AI Advisor fungeert als je digitale filter in de ruis van de markt. 
          </p>

          <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Strategische Keuzes: bol, Amazon of Coolblue?
          </h3>
          <p className="mb-8">
            *   **bol:** De vertrouwde alleskunner. Ideaal voor de consument die waarde hecht aan een Nederlands ecosysteem, uitstekende retour-integratie bij Albert Heijn en een gigantisch assortiment.
            *   **Amazon Nederland:** De prijsvechter. Sinds hun agressieve intrede op de Nederlandse markt in 2020 zijn zij vaak de onbetwiste winnaar op prijs, zeker voor internationale tech-merken.
            *   **Coolblue:** De service-kampioen. Wanneer je koopt voor de lange termijn (witgoed, laptops, high-end audio), is de service van Pieter Zwart en de zijnen vaak de kleine meerprijs waard.
          </p>

          <div className="mt-20 p-12 bg-slate-950 rounded-[3rem] text-white">
             <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-10 h-10 text-emerald-400" />
                <h4 className="text-2xl font-black">Final Verdict: Kies Slimmer.</h4>
             </div>
             <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Winkelen in 2025 gaat niet meer over wie de goedkoopste is, maar over wie de beste waarde biedt. Gebruik Kiesjeshop.nl als je onafhankelijke gids. Onze data is real-time, ons advies is ongezouten en onze focus ligt op jouw besparing.
             </p>
             <a 
               href="https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2F&name=De%20winkel%20van%20ons%20allemaal&subid=Algemeen-AI-Hulp" 
               className="inline-flex items-center gap-4 bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all"
             >
                Bekijk de Beste Koop van Vandaag bij bol <ArrowRight className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
