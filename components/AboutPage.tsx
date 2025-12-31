
import React from 'react';
import { Target, Heart, ShieldCheck, Users, Zap, ShoppingBag, ArrowRight } from 'lucide-react';
import { AFFILIATE_LINKS } from '../constants';

interface AboutPageProps {
  onNavigate: (view: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000 max-w-5xl mx-auto px-6 py-24">
      {/* Intro - PAS Methode */}
      <section className="mb-32">
        <div className="inline-flex items-center gap-3 bg-pink-50 text-brand-pink px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-pink-100">
          <Users className="w-4 h-4" /> De mensen achter de data
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-12 leading-[0.9]">
          Expertise die u helpt<br /> <span className="brand-text-gradient">slimmer te kiezen.</span>
        </h1>
        
        <div className="prose prose-slate prose-xl max-w-none">
          <p className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            Het Probleem: De online markt is een oerwoud van nep-kortingen en agressieve algoritmes.
          </p>
          <p className="text-slate-600 mb-12 leading-relaxed">
            Bezoekers worden dagelijks overspoeld met "laagste prijs" beloftes die bij nader inzien gepaard gaan met vage retourvoorwaarden, trage leveringen of verborgen kosten. (Agitate) In een wereld waar bol, Amazon en Coolblue constant strijden om uw aandacht, is het bijna onmogelijk geworden om objectief te bepalen waar u daadwerkelijk de beste waarde krijgt. (Solve) <strong>Kiesjeshop.nl</strong> is opgericht om die transparantie terug te brengen.
          </p>
        </div>
      </section>

      {/* Missie & Visie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/40 border border-slate-50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform"><Target className="w-32 h-32" /></div>
          <div className="brand-gradient p-4 rounded-2xl w-fit mb-8 shadow-lg shadow-brand-pink/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight mb-6">Onze Missie</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Het empoweren van de Nederlandse consument door real-time intelligence te bieden. Wij vergelijken niet alleen prijzen, wij vergelijken <strong>ervaringen</strong>. Onze missie is dat elke aankoop via ons platform resulteert in maximale tevredenheid bij bol, Amazon of Coolblue.
          </p>
        </div>

        <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-slate-900/40 relative overflow-hidden group border border-white/5">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform"><ShieldCheck className="w-32 h-32" /></div>
          <div className="bg-white/10 p-4 rounded-2xl w-fit mb-8">
            <Heart className="w-6 h-6 text-brand-pink" />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-6">Onze Visie</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            De autoriteit worden op het gebied van e-commerce vergelijkingen in de Benelux. Wij voorzien een toekomst waarin AI en menselijke expertise samenwerken om de meest betrouwbare koopadviezen te genereren, onafhankelijk van marketingbudgetten van shops.
          </p>
        </div>
      </div>

      {/* E-E-A-T Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 text-center">
        {[
          { label: 'Geverifieerde Checks', value: '14.5k+' },
          { label: 'AI Consults', value: '50k+' },
          { label: 'Expert Reviews', value: '1.2k' },
          { label: 'Markt Ervaring', value: '10j+' }
        ].map((stat, i) => (
          <div key={i}>
            <span className="block text-4xl font-black text-slate-950 tracking-tighter mb-2">{stat.value}</span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Team / Trusted Links */}
      <div className="bg-slate-50 rounded-[4rem] p-16 text-center border border-slate-100">
        <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Geverifieerde Partners</h3>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto font-medium">Wij werken uitsluitend samen met de meest betrouwbare retailers van Nederland.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={AFFILIATE_LINKS.bol} target="_blank" className="bg-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-blue-600 shadow-xl hover:scale-105 transition-all">bol</a>
          <a href={AFFILIATE_LINKS.amazon} target="_blank" className="bg-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-yellow-600 shadow-xl hover:scale-105 transition-all">Amazon.nl</a>
          <a href={AFFILIATE_LINKS.coolblue} target="_blank" className="bg-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-orange-600 shadow-xl hover:scale-105 transition-all">Coolblue</a>
        </div>
        <button 
          onClick={() => onNavigate('home')}
          className="mt-16 inline-flex items-center gap-4 brand-gradient text-white px-12 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl hover:brightness-110 active:scale-95 transition-all"
        >
          Start uw Vergelijking <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
