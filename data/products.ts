
import { ShopData } from '../types';

export interface ProductOffer {
  shopId: 'bol' | 'coolblue' | 'amazon';
  deliveryText: string;
  link: string;
}

export interface ProductComparison {
  id: string;
  name: string;
  category: string; 
  image: string;
  description: string;
  offers: ProductOffer[];
}

export const PRODUCTS: ProductComparison[] = [
  {
    id: 'sony-xm5',
    name: 'Sony WH-1000XM5',
    category: 'Elektronica',
    // High-end minimalist audio setup
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    description: 'De absolute koning van Noise Cancelling. Perfect voor focus in de kantoortuin.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: 'Scherpste prijs (Prime)',
        link: 'https://amzn.to/4oOzyrm'
      },
      {
        shopId: 'bol',
        deliveryText: 'Morgen in huis (Select)',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fsony%2Bwh-1000xm5%2F&name=SonyXM5'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'Beste service & retour',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DSony%2BWH-1000XM5'
      }
    ]
  },
  {
    id: 'airfryer-xxl',
    name: 'Philips Airfryer XXL',
    category: 'Wonen',
    // Minimalist kitchen / Healthy living
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800', 
    description: 'Beste Maillard-reactie voor krokante resultaten zonder overtollig vet.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: 'Vaak voordeligste deals',
        link: 'https://amzn.to/4oOzyrm'
      },
      {
        shopId: 'bol',
        deliveryText: 'Gratis bezorging morgen',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fphilips%2Bairfryer%2Bxxl%2F&name=Airfryer'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'Morgen in de keuken',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DPhilips%2BAirfryer%2BXXL'
      }
    ]
  },
  {
    id: 'dyson-v15',
    name: 'Dyson V15 Detect',
    category: 'Huishouden',
    // Clean modern interior photography
    image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=800',
    description: 'Laser-technologie die onzichtbaar stof direct voor je onthult.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: 'Internationale voorraad',
        link: 'https://amzn.to/4oOzyrm'
      },
      {
        shopId: 'bol',
        deliveryText: 'Origineel NL model',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fdyson%2Bv15%2Bdetect%2F&name=DysonV15'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'Inclusief expert advies',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DDyson%2BV15%2BDetect'
      }
    ]
  }
];
