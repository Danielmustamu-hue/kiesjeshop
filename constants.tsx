
import { ShopData, Review } from './types';

export const AFFILIATE_LINKS = {
  bol: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2F&name=De%20winkel%20van%20ons%20allemaal&subid=Algemeen-AI-Hulp',
  amazon: 'https://amzn.to/4oOzyrm',
  coolblue: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2F'
};

export const SHOPS: ShopData[] = [
  {
    id: 'bol',
    name: 'bol',
    color: 'text-blue-400',
    logoText: 'bol',
    logoBg: 'bg-blue-600',
    buttonColor: 'bg-blue-800 hover:bg-blue-900 text-white',
    offerings: 'Alles-in-één (Boeken, Wonen & Meer)',
    serviceScore: 4.5,
    delivery: 'Select: Vaak morgen of zondag in huis',
    usp: 'Vertrouwd Nederlands & makkelijk retour',
    ctaLink: AFFILIATE_LINKS.bol,
    ctaText: 'Bekijk dagaanbieding',
    pros: ['Grootste assortiment van NL', '30 dagen bedenktijd', 'Gratis verzending met Select'],
  },
  {
    id: 'coolblue',
    name: 'Coolblue',
    color: 'text-orange-500',
    logoText: 'Coolblue',
    logoBg: 'bg-[#0090E3]', 
    buttonColor: 'bg-orange-500 hover:bg-orange-600 text-white',
    offerings: 'Expert in Elektronica & Witgoed',
    serviceScore: 5,
    delivery: 'VandaagNog® & eigen installatie',
    usp: 'Beste service & advies (Winnaar)',
    ctaLink: AFFILIATE_LINKS.coolblue, 
    ctaText: 'Check huidige voorraad',
    pros: ['Gratis installatie witgoed', 'Vandaag besteld, morgen in huis', 'Fysieke winkels voor advies'],
  },
  {
    id: 'amazon',
    name: 'Amazon.nl',
    color: 'text-yellow-600',
    logoText: 'amazon',
    logoBg: 'bg-[#232F3E]', 
    buttonColor: 'bg-[#FF9900] hover:bg-[#FFAD33] text-slate-900', 
    offerings: 'Gigantisch aanbod & Gadgets',
    serviceScore: 4,
    delivery: 'Prime: Snelle, gratis levering',
    usp: 'Vaak de allerlaagste prijs',
    ctaLink: AFFILIATE_LINKS.amazon,
    ctaText: 'Pak de laagste prijs',
    pros: ['Scherpste prijzen (Prijsvechter)', 'Gratis bezorging met Prime', 'Internationaal aanbod'],
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    shopId: 'coolblue',
    author: 'Mark van D.',
    date: '3 feb 2025',
    rating: 5,
    text: 'Voor mijn wasmachine vergelijk ik altijd via Kiesjeshop. Uiteindelijk bij Coolblue uitgekomen voor de installatie. Top service!',
    verified: true
  },
  {
    id: 'rev-2',
    shopId: 'amazon',
    author: 'Anouk T.',
    date: '28 jan 2025',
    rating: 4,
    text: 'De AI advisor hielp me herinneren dat Amazon Prime sneller was voor mijn specifieke kabeltjes. Bespaarde me toch weer 5 euro.',
    verified: true
  },
  {
    id: 'rev-3',
    shopId: 'bol',
    author: 'Jasper de R.',
    date: '15 jan 2025',
    rating: 5,
    text: 'Heel fijn overzicht. Je ziet direct waar bol Select het verschil maakt t.o.v. de rest.',
    verified: true
  }
];
