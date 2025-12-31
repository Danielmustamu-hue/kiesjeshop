
import React, { useEffect } from 'react';
import { ShoppingBag, Zap, Globe, ShieldCheck, ArrowUpRight, Star, Clock, Truck, HelpCircle, CheckCircle2, AlertCircle, BarChart3, TrendingUp, Sparkles, Box, CreditCard } from 'lucide-react';
import { AFFILIATE_LINKS, SHOPS } from '../constants';

interface TheBigThreeProps {
  onNavigate: (view: any) => void;
}

export const TheBigThree: React.FC<TheBigThreeProps> = ({ onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welke van de Grote 3 is het goedkoopst?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amazon.nl is statistisch gezien vaak de goedkoopste voor tech en gadgets. bol is competitief in lifestyle en boeken, terwijl Coolblue focust op waarde en service boven de laagste prijs."
          }
        },
        {
          "@type": "Question",
          "name": "Is bol Select de moeite waard vergeleken met Amazon Prime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "bol Select is ideaal voor wie veel bestelt en houdt van avond- of zondagbezorging. Amazon Prime biedt naast verzending ook streamingdiensten, wat voor veel gebruikers meer 'value for money' geeft."
          }
        },
        {
          "@type": "Question",
          "name": "Waarom kiezen voor Coolblue bij witgoed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Coolblue heeft een eigen bezorg- en installatieservice die superieur is aan externe koeriersdiensten. Voor grote apparaten is de ontzorging van Coolblue vaak de kleine meerprijs waard."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { 
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].innerHTML.includes("FAQPage")) document.head.removeChild(scripts[i]);
      }
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-1000 max-w-7xl mx-auto px-6 py-20">
      <section className="mb-32 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-orange-50 text-orange-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-orange-100">
          <BarChart3 className="w-4 h-4" /> Marktanalyse 2025
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-12">
          De Anatomie van de <span className="brand-text-gradient">Grote Drie.</span>
        </h1>
        
        <div className="prose prose-slate prose-xl max-w-none text-left">
          <p className="text-2xl font-bold text-slate-900 mb-6">
            Het Probleem: De online shopper verdrinkt in een oceaan van loze prijsbeloftes.
          </p>
          <p className="text-slate-600 mb-12 leading-relaxed">
            <strong>Kiesjeshop.nl</strong> ontleedt de drie reuzen van de Benelux. Wij kijken voorbij de marketing en analyseren de logistieke infrastructuur, prijsstabiliteit en de daadwerkelijke service-waarde van <strong>bol</strong>, <strong>Amazon.nl</strong> en <strong>Coolblue</strong>.
          </p>
        </div>
      </section>

      {/* Visual Service Intelligence Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Box className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-2">Voorraad Check</h4>
          <p className="text-sm text-slate-500 font-medium">Real-time monitoring van duizenden SKU's bij bol en Amazon.</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
            <Truck className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-2">Logistiek</h4>
          <p className="text-sm text-slate-500 font-medium">Vergelijking van bezorgvensters en zondagleveringen.</p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <CreditCard className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-2">Betaal-gemak</h4>
          <p className="text-sm text-slate-500 font-medium">Inzicht in achteraf betalen en retour-teruggave snelheid.</p>
        </div>
      </div>

      <div className="space-y-40">
        
        {/* bol Section */}
        <section id="bol-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 bg-blue-600 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group hover:brightness-105 transition-all duration-700">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000"><ShoppingBag className="w-72 h-72" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2 rounded-full w-fit mb-10 border border-white/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                <Star className="w-4 h-4 fill-white" /> De Markt-Dominator
              </div>
              <h2 className="text-7xl font-black tracking-tighter mb-8 leading-none drop-shadow-lg">bol</h2>
              <p className="text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                Het complete Nederlandse ecosysteem. Met meer dan 30 miljoen artikelen is bol de onbetwiste leider in consumentenvertrouwen.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="block text-3xl font-black mb-1">bol Select</span>
                  <p className="text-xs opacity-70 leading-relaxed">Onbeperkt gratis bezorging en punten sparen voor extra korting.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="block text-3xl font-black mb-1">Service Punten</span>
                  <p className="text-xs opacity-70 leading-relaxed">Retourneren zonder doos of label bij duizenden AH locaties.</p>
                </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.bol} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                Check dagaanbiedingen bij bol <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 pt-8">
            <h3 className="text-4xl font-black tracking-tight mb-8">Strategische Analyse: bol</h3>
            <div className="space-y-6 text-lg text-slate-600 font-medium">
              <p>Wanneer kies je voor bol? De kracht van bol ligt in de <strong>naadloze integratie</strong> in de Nederlandse dagelijkse routine. Voor de shopper die waarde hecht aan een 'alles-onder-één-dak' ervaring.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Lifestyle Autoriteit:</strong> Het breedste assortiment in wonen, boeken en speelgoed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <span><strong>Marktkennis:</strong> Prijzen zijn stabiel en volgen de Nederlandse markt nauwgezet.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Amazon Section */}
        <section id="amazon-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 pt-8 order-2 lg:order-1 text-right">
            <h3 className="text-4xl font-black tracking-tight mb-8">Amazon.nl: De Prijs-Aggressor</h3>
            <div className="space-y-6 text-lg text-slate-600 font-medium">
              <p>Amazon is de globale kracht die de markt in 2025 domineert op prijs. Voor de <strong>rationele shopper</strong> die de laagste euro-prijs boven de lokale factor stelt.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-end justify-end gap-3">
                  <span className="text-right"><strong>Globale Logistiek:</strong> Snelste toegang tot internationale merken.</span>
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                </li>
                <li className="flex items-end justify-end gap-3">
                  <span className="text-right"><strong>Prime Ecosysteem:</strong> De beste waarde met video en gaming.</span>
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#232F3E] rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group hover:brightness-110 transition-all duration-700 order-1 lg:order-2">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000"><Globe className="w-72 h-72" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2 rounded-full w-fit mb-10 border border-white/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                <Zap className="w-4 h-4 text-yellow-500" /> Prijs-Leider 2025
              </div>
              <h2 className="text-7xl font-black tracking-tighter mb-8 leading-none uppercase drop-shadow-lg">amazon<span className="text-yellow-500">.nl</span></h2>
              <p className="text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                Ongeëvenaarde schaalvoordelen. Amazon biedt prijzen waar de concurrentie vaak alleen van kan dromen.
              </p>
              
              <div className="flex flex-col gap-6 mb-12">
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Clock className="w-6 h-6 text-yellow-500" />
                    <span className="text-sm font-bold">Flitsbezorging voor miljoenen artikelen.</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Truck className="w-6 h-6 text-yellow-500" />
                    <span className="text-sm font-bold">Gratis internationale verzending.</span>
                 </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.amazon} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#FF9900] text-slate-900 px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                Pak de Amazon deal <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Coolblue Section */}
        <section id="coolblue-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 bg-[#0090E3] rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group hover:brightness-110 transition-all duration-700">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:translate-x-10 transition-transform duration-1000"><Zap className="w-72 h-72 text-orange-500" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2 rounded-full w-fit mb-10 border border-white/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                <Star className="w-4 h-4 text-orange-400" /> Beste Service NPS
              </div>
              <h2 className="text-7xl font-black tracking-tighter mb-8 leading-none italic text-orange-500 drop-shadow-lg">Coolblue</h2>
              <p className="text-2xl opacity-90 leading-relaxed font-medium mb-12 max-w-lg">
                "Alles voor een glimlach". Coolblue is de koning van de specialistische ontzorging.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-12">
                 <div className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="block text-4xl font-black mb-1">9.2</span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">NPS Score</span>
                 </div>
                 <div className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="block text-4xl font-black mb-1">Eigen</span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Bezorging</span>
                 </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.coolblue} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-4 bg-orange-500 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                Check Coolblue service <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 pt-8">
            <h3 className="text-4xl font-black tracking-tight mb-8">De Coolblue Strategie</h3>
            <div className="space-y-6 text-lg text-slate-600 font-medium">
              <p>Voor producten waarbij de service belangrijker is dan de prijs. Coolblue wint bij witgoed door hun eigen installateurs.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                  <span><strong>Expert Advies:</strong> Eigen video-reviews en specialisten in fysieke winkels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                  <span><strong>Duurzaamheid:</strong> Koploper in elektrische bezorging.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="my-40">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4">Benchmarks & Harde Data<span className="brand-text-gradient">.</span></h2>
          <p className="text-slate-500 font-medium text-lg">De technische specificaties van de Big 3 direct naast elkaar.</p>
        </div>
        
        <div className="intelligence-card p-4 md:p-10 overflow-hidden border border-slate-100/50 bg-white shadow-xl">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50">
                <tr>
                  <th className="px-8 py-10 w-1/3">Criteria</th>
                  <th className="px-4 py-10 text-center text-blue-600">bol</th>
                  <th className="px-4 py-10 text-center text-yellow-600">Amazon</th>
                  <th className="px-4 py-10 text-center text-orange-600">Coolblue</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold text-slate-700">
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-8 group-hover:text-brand-pink transition-colors">Gratis Verzending</td>
                  <td className="px-4 py-8 text-center">v.a. €20</td>
                  <td className="px-4 py-8 text-center">v.a. €25 (of Prime)</td>
                  <td className="px-4 py-8 text-center text-emerald-500 font-black">ALTIJD GRATIS</td>
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-8 group-hover:text-brand-pink transition-colors">Levering op Zondag</td>
                  <td className="px-4 py-8 text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="px-4 py-8 text-center"><AlertCircle className="w-5 h-5 mx-auto text-slate-300" /></td>
                  <td className="px-4 py-8 text-center"><ShieldCheck className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-8 group-hover:text-brand-pink transition-colors">Platform Kracht</td>
                  <td className="px-4 py-8 text-center">Ecosysteem</td>
                  <td className="px-4 py-8 text-center">Prijsvechter</td>
                  <td className="px-4 py-8 text-center text-blue-500 font-black">Service-expert</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="p-12 md:p-24 brand-gradient rounded-[4rem] text-white text-center shadow-[0_50px_100px_rgba(255,61,119,0.2)]">
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">Het Eindoordeel<span className="text-slate-900">.</span></h3>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Onze data-analyse voor 2025 is helder: 
          <br /><br />
          <span className="font-black text-white underline decoration-yellow-500 decoration-4">De Laagste Prijs?</span> Kies <a href={AFFILIATE_LINKS.amazon} target="_blank" className="hover:text-yellow-500 transition-colors">Amazon</a>. 
          <br />
          <span className="font-black text-white underline decoration-blue-800 decoration-4">Het Hoogste Gemak?</span> Kies <a href={AFFILIATE_LINKS.bol} target="_blank" className="hover:text-blue-800 transition-colors">bol</a>. 
          <br />
          <span className="font-black text-white underline decoration-orange-500 decoration-4">De Beste Zekerheid?</span> Kies <a href={AFFILIATE_LINKS.coolblue} target="_blank" className="hover:text-orange-500 transition-colors">Coolblue</a>.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-white text-brand-pink px-14 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto"
        >
           Start uw vergelijking nu <Sparkles className="w-4 h-4" />
        </button>
      </section>

      <div className="mt-20 text-center">
         <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em] leading-relaxed max-w-2xl mx-auto">
           Wettelijke Disclaimer: Kiesjeshop.nl ontvangt een commissie bij aankopen via onze links. Uw prijs blijft hetzelfde.
         </p>
      </div>
    </div>
  );
};
