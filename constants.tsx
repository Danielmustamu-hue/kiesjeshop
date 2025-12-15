import { ShopData, Review } from './types';

export const SHOPS: ShopData[] = [
  {
    id: 'bol',
    name: 'Bol.com',
    color: 'text-blue-700',
    logoText: 'bol',
    logoBg: 'bg-[#F5F9FF]', // Zacht blauw, herkenbaar voor Bol
    buttonColor: 'bg-blue-800 hover:bg-blue-900 text-white',
    offerings: 'Extreem breed (De winkel van ons allemaal)',
    serviceScore: 4.5,
    delivery: 'Select: Veelal morgen in huis',
    usp: 'Vertrouwd Nederlands, focus op partners',
    // Affiliate link voor Bol.com
    ctaLink: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2F&name=De%20winkel%20van%20ons%20allemaal&subid=Algemeen-AI-Hulp',
    pros: ['Enorm assortiment', 'Makkelijk retourneren', 'Select voordeel'],
  },
  {
    id: 'coolblue',
    name: 'Coolblue',
    color: 'text-orange-500',
    logoText: 'Coolblue',
    logoBg: 'bg-[#0090E3]', // De echte Coolblue blauw
    buttonColor: 'bg-orange-500 hover:bg-orange-600 text-white',
    offerings: 'Specialisatie in Elektronica & Witgoed',
    serviceScore: 5,
    delivery: 'VandaagNog®, eigen bezorgdienst',
    usp: 'Alles voor een glimlach (Top Service)',
    // Standaard link
    ctaLink: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2F', 
    pros: ['Beste klantenservice', 'Eigen installatiedienst', 'Fysieke winkels'],
  },
  {
    id: 'amazon',
    name: 'Amazon.nl',
    color: 'text-yellow-600',
    logoText: 'amazon',
    logoBg: 'bg-[#232F3E]', // Amazon Dark Blue
    buttonColor: 'bg-[#FF9900] hover:bg-[#FFAD33] text-slate-900', // Amazon Yellow
    offerings: 'Wereldwijd gigantisch aanbod',
    serviceScore: 4,
    delivery: 'Prime: Snelle, gratis levering',
    usp: 'Scherpe prijzen & Prime Video',
    // Affiliate link voor Amazon
    ctaLink: 'https://amzn.to/4oOzyrm',
    pros: ['Vaak de goedkoopste', 'Prime voordelen', 'Internationaal aanbod'],
  },
];

// MOCK_REVIEWS verwijderd i.v.m. eerlijkheid/SEO
export const MOCK_REVIEWS: Review[] = [];