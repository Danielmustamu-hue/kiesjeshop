import { ShopData, Review } from './types';

export const SHOPS: ShopData[] = [
  {
    id: 'bol',
    name: 'bol',
    color: 'text-blue-700',
    logoText: 'bol',
    logoBg: 'bg-[#F5F9FF]', // Zacht blauw, herkenbaar voor Bol
    buttonColor: 'bg-blue-800 hover:bg-blue-900 text-white',
    offerings: 'Alles-in-één (Boeken, Wonen & Meer)',
    serviceScore: 4.5,
    delivery: 'Select: Vaak morgen of zondag in huis',
    usp: 'Vertrouwd Nederlands & makkelijk retour',
    // Affiliate link voor bol
    ctaLink: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2F&name=De%20winkel%20van%20ons%20allemaal&subid=Algemeen-AI-Hulp',
    ctaText: 'Bekijk dagaanbieding',
    pros: ['Grootste assortiment van NL', '30 dagen bedenktijd', 'Gratis verzending met Select'],
  },
  {
    id: 'coolblue',
    name: 'Coolblue',
    color: 'text-orange-500',
    logoText: 'Coolblue',
    logoBg: 'bg-[#0090E3]', // De echte Coolblue blauw
    buttonColor: 'bg-orange-500 hover:bg-orange-600 text-white',
    offerings: 'Expert in Elektronica & Witgoed',
    serviceScore: 5,
    delivery: 'VandaagNog® & eigen installatie',
    usp: 'Beste service & advies (Winnaar)',
    // Standaard link
    ctaLink: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2F', 
    ctaText: 'Check huidige voorraad',
    pros: ['Gratis installatie witgoed', 'Vandaag besteld, morgen in huis', 'Fysieke winkels voor advies'],
  },
  {
    id: 'amazon',
    name: 'Amazon.nl',
    color: 'text-yellow-600',
    logoText: 'amazon',
    logoBg: 'bg-[#232F3E]', // Amazon Dark Blue
    buttonColor: 'bg-[#FF9900] hover:bg-[#FFAD33] text-slate-900', // Amazon Yellow
    offerings: 'Gigantisch aanbod & Gadgets',
    serviceScore: 4,
    delivery: 'Prime: Snelle, gratis levering',
    usp: 'Vaak de allerlaagste prijs',
    // Affiliate link voor Amazon
    ctaLink: 'https://amzn.to/4oOzyrm',
    ctaText: 'Pak de laagste prijs',
    pros: ['Scherpste prijzen (Prijsvechter)', 'Gratis bezorging met Prime', 'Internationaal aanbod'],
  },
];

// MOCK_REVIEWS verwijderd i.v.m. eerlijkheid/SEO
export const MOCK_REVIEWS: Review[] = [];