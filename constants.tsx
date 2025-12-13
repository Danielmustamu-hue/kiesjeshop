import { ShopData, Review } from './types';

export const SHOPS: ShopData[] = [
  {
    id: 'bol',
    name: 'Bol.com',
    color: 'text-blue-600',
    logoText: 'bol',
    logoBg: 'bg-blue-100',
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
    logoBg: 'bg-blue-600 text-white',
    offerings: 'Specialisatie in Elektronica & Witgoed',
    serviceScore: 5,
    delivery: 'VandaagNog®, eigen bezorgdienst',
    usp: 'Alles voor een glimlach (Top Service)',
    // Standaard link
    ctaLink: 'https://www.coolblue.nl/', 
    pros: ['Beste klantenservice', 'Eigen installatiedienst', 'Fysieke winkels'],
  },
  {
    id: 'amazon',
    name: 'Amazon.nl',
    color: 'text-yellow-600',
    logoText: 'amazon',
    logoBg: 'bg-slate-800 text-white',
    offerings: 'Wereldwijd gigantisch aanbod',
    serviceScore: 4,
    delivery: 'Prime: Snelle, gratis levering',
    usp: 'Scherpe prijzen & Prime Video',
    // Affiliate link voor Amazon
    ctaLink: 'https://amzn.to/4oOzyrm',
    pros: ['Vaak de goedkoopste', 'Prime voordelen', 'Internationaal aanbod'],
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    shopId: 'coolblue',
    author: 'Mark de J.',
    date: '2 dagen geleden',
    rating: 5,
    text: 'Voor mijn nieuwe wasmachine toch voor Coolblue gekozen vanwege de installatieservice. De bezorgers waren ontzettend vriendelijk en namen de oude machine direct mee. Top!',
    verified: true,
  },
  {
    id: '2',
    shopId: 'bol',
    author: 'Sarah V.',
    date: '1 week geleden',
    rating: 4.5,
    text: 'Ik bestel bijna alles bij Bol. Vooral Select is handig, geen verzendkosten meer. Soms is de levering via externe partners wel wat trager, maar klantenservice lost het altijd op.',
    verified: true,
  },
  {
    id: '3',
    shopId: 'amazon',
    author: 'Timo B.',
    date: '3 dagen geleden',
    rating: 4,
    text: 'Voor kabels en kleine elektronica kijk ik altijd eerst op Amazon. Scheelt vaak echt veel geld vergeleken met de rest. De site is wel wat rommelig, maar Prime levering is razendsnel.',
    verified: true,
  },
];