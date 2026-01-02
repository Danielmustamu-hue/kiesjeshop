
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
    <div className="animate-in fade-in duration-1000 max-w-[1920px] mx-auto px-10 md:px-12 py-24">
      <section className="mb-32 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-4 bg-orange-50 text-orange-700 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.5em] mb-12 border border-orange-100 shadow-sm">
          <BarChart3 className="w-5 h-5" /> Marktanalyse 2025
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-12">
          De Anatomie van de <span className="brand-text-gradient">Grote Drie.</span>
        </h1>
        
        <div className="prose prose-slate prose-2xl max-w-none text-left">
          <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Het Probleem: De online shopper verdrinkt in een oceaan van loze prijsbeloftes en agressieve marketing.
          </p>
          <p className="text-slate-600 mb-12 leading-relaxed text-xl lg:text-2xl font-medium">
            <strong>Kiesjeshop.nl</strong> ontleedt de drie reuzen van de Benelux. Wij kijken voorbij de slogans en analyseren de logistieke ruggengraat, prijsstabiliteit en de daadwerkelijke service-waarde van <strong>bol</strong>, <strong>Amazon.nl</strong> en <strong>Coolblue</strong>.
          </p>
        </div>
      </section>

      {/* Visual Service Intelligence Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-48">
        <div className="bg-white p-12 lg:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-2xl transition-all duration-700">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-blue-50 text-blue-600 rounded-[2rem] lg:rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
            <Box className="w-10 h-10 lg:w-12 lg:h-12" />
          </div>
          <h4 className="text-xl lg:text-2xl font-black uppercase tracking-[0.2em] mb-3">Voorraad Check</h4>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">Real-time monitoring van duizenden SKU's en API-feeds bij de Grote Drie.</p>
        </div>
        <div className="bg-white p-12 lg:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-2xl transition-all duration-700">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-orange-50 text-orange-600 rounded-[2rem] lg:rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
            <Truck className="w-10 h-10 lg:w-12 lg:h-12" />
          </div>
          <h4 className="text-xl lg:text-2xl font-black uppercase tracking-[0.2em] mb-3">Logistiek</h4>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">Diepgaande vergelijking van bezorgvensters, last-mile delivery en zondagservice.</p>
        </div>
        <div className="bg-white p-12 lg:p-16 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-2xl transition-all duration-700">
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] lg:rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
            <CreditCard className="w-10 h-10 lg:w-12 lg:h-12" />
          </div>
          <h4 className="text-xl lg:text-2xl font-black uppercase tracking-[0.2em] mb-3">Betaal-gemak</h4>
          <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed">Inzicht in service-factoren zoals achteraf betalen en de snelheid van retour-teruggaves.</p>
        </div>
      </div>

      <div className="space-y-56">
        
        {/* bol Section */}
        <section id="bol-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 bg-blue-600 rounded-[4.5rem] p-12 md:p-24 lg:p-32 text-white shadow-3xl relative overflow-hidden group hover:brightness-105 transition-all duration-1000">
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:rotate-12 transition-transform duration-1000 pointer-events-none"><ShoppingBag className="w-[500px] h-[500px]" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2.5 rounded-full w-fit mb-12 border border-white/20 text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <Star className="w-5 h-5 fill-white" /> De Markt-Dominator
              </div>
              <h2 className="text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter mb-10 leading-none drop-shadow-2xl">bol</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl opacity-90 leading-relaxed font-medium mb-16 max-w-xl">
                Het complete Nederlandse ecosysteem. bol is de onbetwiste leider in consumentenvertrouwen en lokaal gemak.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all shadow-inner">
                  <span className="block text-3xl font-black mb-2">bol Select</span>
                  <p className="text-sm lg:text-base opacity-70 leading-relaxed">Onbeperkt gratis bezorging en punten sparen voor extra retail-voordelen.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all shadow-inner">
                  <span className="block text-3xl font-black mb-2">Service Punten</span>
                  <p className="text-sm lg:text-base opacity-70 leading-relaxed">Retourneren zonder doos of label bij duizenden AH locaties in het land.</p>
                </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.bol} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-5 bg-white text-blue-600 px-16 py-8 rounded-2xl font-black text-[13px] lg:text-[15px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-3xl active:scale-95"
              >
                Check dagaanbiedingen bij bol <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 pt-12">
            <h3 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-none">Strategische Analyse: bol</h3>
            <div className="space-y-8 text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed">
              <p>Wanneer kies je voor bol? De kracht van bol ligt in de <strong>naadloze integratie</strong> in de Nederlandse dagelijkse routine. Voor de shopper die waarde hecht aan een 'alles-onder-één-dak' ervaring zonder verrassingen.</p>
              <ul className="space-y-6 pt-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-500 shrink-0 mt-1 shadow-sm" />
                  <span><strong>Lifestyle Autoriteit:</strong> Het breedste assortiment in wonen, boeken en speelgoed van de Benelux.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-500 shrink-0 mt-1 shadow-sm" />
                  <span><strong>Marktkennis:</strong> Prijzen zijn stabiel en volgen de Nederlandse marktbewegingen uiterst nauwgezet.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Amazon Section */}
        <section id="amazon-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 pt-12 order-2 lg:order-1 text-right">
            <h3 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-none text-slate-900">Amazon.nl: De Prijs-Aggressor</h3>
            <div className="space-y-8 text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed">
              <p>Amazon is de globale kracht die de markt in 2025 domineert op brute prijskracht. Voor de <strong>rationele shopper</strong> die de laagste euro-prijs boven de lokale factor stelt.</p>
              <ul className="space-y-6 pt-6">
                <li className="flex items-end justify-end gap-4">
                  <span className="text-right"><strong>Globale Logistiek:</strong> De snelste en breedste toegang tot internationale tech-merken.</span>
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 shrink-0 mt-1 shadow-sm" />
                </li>
                <li className="flex items-end justify-end gap-4">
                  <span className="text-right"><strong>Prime Ecosysteem:</strong> Verreweg de beste waarde met inbegrip van video, muziek en gaming.</span>
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500 shrink-0 mt-1 shadow-sm" />
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#232F3E] rounded-[4.5rem] p-12 md:p-24 lg:p-32 text-white shadow-3xl relative overflow-hidden group hover:brightness-110 transition-all duration-1000 order-1 lg:order-2">
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><Globe className="w-[500px] h-[500px]" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2.5 rounded-full w-fit mb-12 border border-white/20 text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-500" /> Prijs-Leider 2025
              </div>
              <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-10 leading-none uppercase drop-shadow-2xl">amazon<span className="text-yellow-500">.nl</span></h2>
              <p className="text-2xl md:text-3xl lg:text-4xl opacity-90 leading-relaxed font-medium mb-16 max-w-xl">
                Ongeëvenaarde schaalvoordelen. Amazon biedt prijzen waar de lokale concurrentie vaak alleen van kan dromen.
              </p>
              
              <div className="flex flex-col gap-8 mb-16">
                 <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                    <Clock className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500" />
                    <span className="text-lg lg:text-xl font-bold">Flitsbezorging voor miljoenen artikelen via Prime.</span>
                 </div>
                 <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                    <Truck className="w-8 h-8 lg:w-10 lg:h-10 text-yellow-500" />
                    <span className="text-lg lg:text-xl font-bold">Gratis internationale verzending bij drempelwaardes.</span>
                 </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.amazon} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-5 bg-[#FF9900] text-slate-900 px-16 py-8 rounded-2xl font-black text-[13px] lg:text-[15px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-3xl active:scale-95"
              >
                Pak de Amazon deal <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Coolblue Section */}
        <section id="coolblue-analysis" className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 bg-[#0090E3] rounded-[4.5rem] p-12 md:p-24 lg:p-32 text-white shadow-3xl relative overflow-hidden group hover:brightness-110 transition-all duration-1000">
            <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:translate-x-10 transition-transform duration-1000 pointer-events-none"><Zap className="w-[500px] h-[500px] text-orange-500" /></div>
            <div className="relative z-10">
              <div className="bg-white/10 px-6 py-2.5 rounded-full w-fit mb-12 border border-white/20 text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                <Star className="w-5 h-5 text-orange-400" /> Beste Service NPS
              </div>
              <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-10 leading-none italic text-orange-500 drop-shadow-2xl">Coolblue</h2>
              <p className="text-2xl md:text-3xl lg:text-4xl opacity-90 leading-relaxed font-medium mb-16 max-w-xl">
                "Alles voor een glimlach". Coolblue is de absolute koning van de specialistische ontzorging en advies.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-16">
                 <div className="text-center p-8 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all shadow-inner">
                    <span className="block text-5xl lg:text-6xl font-black mb-2 text-orange-500">9.2</span>
                    <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-widest opacity-60">NPS Score 2025</span>
                 </div>
                 <div className="text-center p-8 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all shadow-inner">
                    <span className="block text-4xl lg:text-5xl font-black mb-2">Eigen</span>
                    <span className="text-[11px] lg:text-[13px] font-black uppercase tracking-widest opacity-60">Bezorging®</span>
                 </div>
              </div>

              <a 
                href={AFFILIATE_LINKS.coolblue} 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-5 bg-orange-500 text-white px-16 py-8 rounded-2xl font-black text-[13px] lg:text-[15px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-3xl active:scale-95"
              >
                Check Coolblue service <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 pt-12">
            <h3 className="text-5xl lg:text-6xl font-black tracking-tight mb-10 leading-none text-slate-900">De Coolblue Strategie</h3>
            <div className="space-y-8 text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed">
              <p>Voor producten waarbij de service-ervaring zwaarder weegt dan de prijs. Coolblue wint bij witgoed en complexe tech door hun eigen getrainde installateurs.</p>
              <ul className="space-y-6 pt-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500 shrink-0 mt-1 shadow-sm" />
                  <span><strong>Expert Advies:</strong> Eigen diepgaande video-reviews en specialisten in 25+ fysieke winkels.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-orange-500 shrink-0 mt-1 shadow-sm" />
                  <span><strong>Duurzaamheid:</strong> Voorloper in elektrische 'pakketfiets' bezorging en refurb-opties.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="my-56">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none">Benchmarks & Harde Data<span className="brand-text-gradient">.</span></h2>
          <p className="text-slate-500 font-medium text-2xl lg:text-3xl">De technische specificaties van de Big 3 direct naast elkaar vergeleken.</p>
        </div>
        
        <div className="intelligence-card p-6 md:p-16 lg:p-24 overflow-hidden border border-slate-100/50 bg-white shadow-3xl rounded-[4rem] lg:rounded-[5rem]">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-50">
                <tr>
                  <th className="px-10 py-12 w-1/3">Analyse Criteria</th>
                  <th className="px-6 py-12 text-center text-blue-600">bol</th>
                  <th className="px-6 py-12 text-center text-yellow-600">Amazon.nl</th>
                  <th className="px-6 py-12 text-center text-orange-600">Coolblue</th>
                </tr>
              </thead>
              <tbody className="text-lg lg:text-xl font-bold text-slate-700">
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-10 group-hover:text-brand-pink transition-colors">Gratis Verzending</td>
                  <td className="px-6 py-10 text-center">v.a. €20</td>
                  <td className="px-6 py-10 text-center">v.a. €25 (of Prime)</td>
                  <td className="px-6 py-10 text-center text-emerald-500 font-black uppercase tracking-widest text-sm lg:text-base">ALTIJD GRATIS</td>
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-10 group-hover:text-brand-pink transition-colors">Levering op Zondag</td>
                  <td className="px-6 py-10 text-center"><ShieldCheck className="w-7 h-7 lg:w-9 lg:h-9 mx-auto text-emerald-500" /></td>
                  <td className="px-6 py-10 text-center"><AlertCircle className="w-7 h-7 lg:w-9 lg:h-9 mx-auto text-slate-300" /></td>
                  <td className="px-6 py-10 text-center"><ShieldCheck className="w-7 h-7 lg:w-9 lg:h-9 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-10 py-10 group-hover:text-brand-pink transition-colors">Platform DNA</td>
                  <td className="px-6 py-10 text-center">Totaal Ecosysteem</td>
                  <td className="px-6 py-10 text-center">Internationale Prijsvechter</td>
                  <td className="px-6 py-10 text-center text-blue-500 font-black">Specialistische Service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="p-16 md:p-32 lg:p-40 brand-gradient rounded-[5rem] lg:rounded-[6rem] text-white text-center shadow-[0_60px_120px_rgba(255,61,119,0.3)]">
        <h3 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-12 leading-[0.85]">Het Eindoordeel<span className="text-slate-900">.</span></h3>
        <p className="text-2xl md:text-4xl lg:text-5xl opacity-90 mb-16 max-w-5xl mx-auto font-medium leading-tight">
          Onze data-analyse voor 2025 is glashelder: 
          <br /><br />
          <span className="font-black text-white underline decoration-yellow-500 decoration-8 underline-offset-8">De Laagste Prijs?</span> Kies <a href={AFFILIATE_LINKS.amazon} target="_blank" className="hover:text-yellow-500 transition-colors">Amazon</a>. 
          <br />
          <span className="font-black text-white underline decoration-blue-900 decoration-8 underline-offset-8">Het Hoogste Gemak?</span> Kies <a href={AFFILIATE_LINKS.bol} target="_blank" className="hover:text-blue-900 transition-colors">bol</a>. 
          <br />
          <span className="font-black text-white underline decoration-orange-600 decoration-8 underline-offset-8">De Beste Zekerheid?</span> Kies <a href={AFFILIATE_LINKS.coolblue} target="_blank" className="hover:text-orange-600 transition-colors">Coolblue</a>.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-white text-brand-pink px-20 py-8 lg:px-24 lg:py-10 rounded-full font-black text-[14px] lg:text-[18px] uppercase tracking-[0.5em] hover:scale-110 active:scale-95 transition-all shadow-3xl flex items-center justify-center gap-4 mx-auto"
        >
           Start uw vergelijking nu <Sparkles className="w-6 h-6 lg:w-8 lg:h-8" />
        </button>
      </section>

      <div className="mt-24 text-center">
         <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.6em] leading-relaxed max-w-4xl mx-auto">
           Wettelijke Disclaimer: Kiesjeshop.nl ontvangt een commissie bij aankopen via onze links. Uw prijs blijft te allen tijde hetzelfde.
         </p>
      </div>
    </div>
  );
};
