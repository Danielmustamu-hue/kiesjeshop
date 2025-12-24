
import { ShopData } from '../types';

export interface ProductOffer {
  shopId: 'bol' | 'coolblue' | 'amazon';
  deliveryText: string;
  link: string;
}

export interface ProductComparison {
  id: string;
  name: string;
  category: string; // 'Elektronica', 'Wonen', 'Gaming'
  image: string;
  description: string;
  offers: ProductOffer[];
}

export const PRODUCTS: ProductComparison[] = [
  {
    id: 'sony-xm5',
    name: 'Sony WH-1000XM5',
    category: 'Elektronica',
    // Sony Headphones
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600',
    description: 'De beste Noise Cancelling koptelefoon van dit moment.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: 'Gratis bezorgd (Prime)',
        link: 'https://www.amazon.nl/s?k=Sony+WH-1000XM5&tag=kiesjeshop-21'
      },
      {
        shopId: 'bol',
        deliveryText: 'Morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fsony%2Bwh-1000xm5%2F&name=SonyXM5'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'Morgen in huis + Gratis retour',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DSony%2BWH-1000XM5'
      }
    ]
  },
  {
    id: 'airfryer-xxl',
    name: 'Philips Airfryer XXL',
    category: 'Wonen',
    // Airfryer resultaat (Friet)
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600', 
    description: 'Voor het hele gezin gezonder frituren en bakken.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: '2-3 dagen levertijd',
        link: 'https://www.amazon.nl/s?k=Philips+Airfryer+XXL&tag=kiesjeshop-21'
      },
      {
        shopId: 'bol',
        deliveryText: 'Vandaag besteld, morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fphilips%2Bairfryer%2Bxxl%2F&name=Airfryer'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'VandaagNog® mogelijk',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DPhilips%2BAirfryer%2BXXL'
      }
    ]
  },
  {
    id: 'dyson-v15',
    name: 'Dyson V15 Detect',
    category: 'Huishouden',
    // Afbeelding van een schoon vloerkleed met hond (symbool voor zuigkracht/huisdieren) - zeer stabiele URL
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80&w=600',
    description: 'De krachtigste draadloze stofzuiger met laser die onzichtbaar stof toont.',
    offers: [
      {
        shopId: 'amazon',
        deliveryText: 'Gratis bezorgd',
        link: 'https://www.amazon.nl/s?k=Dyson+V15+Detect&tag=kiesjeshop-21'
      },
      {
        shopId: 'bol',
        deliveryText: 'Morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fdyson%2Bv15%2Bdetect%2F&name=DysonV15'
      },
      {
        shopId: 'coolblue',
        deliveryText: 'Morgen in huis',
        link: 'https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3DDyson%2BV15%2BDetect'
      }
    ]
  }
];
