
import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Target } from 'lucide-react';

export const SeoContent: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="inline-flex items-center gap-3 bg-orange-50 text-orange-700 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.4em] mb-8 border border-orange-100">
          <Target className="w-3 h-3" /> Report 2026
        </div>

        <div className="prose prose-slate prose-base max-w-none">
          <h2 className="text-3xl font-black text-slate-950 tracking-tighter mb-6 leading-tight">
            De verborgen kosten van "De Laagste Prijs".
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 font-medium">
            Je opent tien tabbladen. Je vergelijkt de prijzen bij bol, struint door Amazon en kijkt bij Coolblue. Je denkt dat je de beste deal hebt, maar de werkelijkheid is vaak een dure les in consumentenpsychologie.
          </p>

          <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-4">
            De Frustratie van de Markt.
          </h3>
          <p className="mb-6 text-sm text-slate-500 leading-relaxed">
            De markt is verzadigd. Prijselasticiteit is hoog, maar de transparantie is lager dan ooit. Je koopkracht in 2026 staat onder druk, en elke miskoop is een aanslag op je budget en tijd. 
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 my-10">
             <h4 className="text-base font-black mb-4 flex items-center gap-3">
                <Zap className="w-4 h-4 text-orange-600" /> Wist je dat?
             </h4>
             <ul className="space-y-3 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-2">
                   <div className="w-1 h-1 bg-orange-600 rounded-full mt-1.5"></div>
                   <span>De service-score weegt zwaarder voor tevredenheid dan 5% prijsverschil.</span>
                </li>
                <li className="flex items-start gap-2">
                   <div className="w-1 h-1 bg-orange-600 rounded-full mt-1.5"></div>
                   <span>Real-time tracking bespaart gemiddeld 12% op elektronica.</span>
                </li>
             </ul>
          </div>

          <div className="mt-12 p-8 bg-slate-950 rounded-[2rem] text-white">
             <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                <h4 className="text-xl font-black">Verdict: Kies Slimmer.</h4>
             </div>
             <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Winkelen in 2026 gaat niet over wie de goedkoopste is, maar over wie de beste waarde biedt. Onze data is real-time en ongezouten.
             </p>
             <a href="https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2F&name=Advies&subid=Algemeen-AI-Hulp" className="inline-flex items-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-[9px] uppercase tracking-widest hover:brightness-110 transition-all">
                Beste Koop bij bol <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};
