import { ShopData } from '../types';

export interface ProductOffer {
  shopId: 'bol' | 'coolblue' | 'amazon';
  price: number;
  deliveryText: string;
  link: string;
  isBestPrice?: boolean;
}

export interface ProductComparison {
  id: string;
  name: string;
  category: string; // 'Elektronica', 'Wonen', 'Gaming'
  image: string;
  description: string;
  lastUpdate: string; // NIEUW: Datum van de prijscheck
  offers: ProductOffer[];
}

export const PRODUCTS: ProductComparison[] = [
  {
    id: 'sony-xm5',
    name: 'Sony WH-1000XM5',
    category: 'Elektronica',
    // Sony Headphones (Working)
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600',
    description: 'De beste Noise Cancelling koptelefoon van dit moment.',
    lastUpdate: 'Vandaag',
    offers: [
      {
        shopId: 'amazon',
        price: 319.00,
        deliveryText: 'Gratis bezorgd (Prime)',
        link: 'https://www.amazon.nl/s?k=Sony+WH-1000XM5&tag=kiesjeshop-21',
        isBestPrice: true
      },
      {
        shopId: 'bol',
        price: 329.00,
        deliveryText: 'Morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fsony%2Bwh-1000xm5%2F&name=SonyXM5'
      },
      {
        shopId: 'coolblue',
        price: 349.00,
        deliveryText: 'Morgen in huis + Gratis retour',
        link: 'https://www.coolblue.nl/zoeken?query=Sony+WH-1000XM5'
      }
    ]
  },
  {
    id: 'airfryer-xxl',
    name: 'Philips Airfryer XXL',
    category: 'Wonen',
    // Afbeelding van friet (Zeer stabiele link) - Impliceert airfryer resultaat
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600', 
    description: 'Voor het hele gezin gezonder frituren en bakken.',
    lastUpdate: 'Vandaag',
    offers: [
      {
        shopId: 'amazon',
        price: 189.95,
        deliveryText: '2-3 dagen levertijd',
        link: 'https://www.amazon.nl/s?k=Philips+Airfryer+XXL&tag=kiesjeshop-21',
        isBestPrice: true
      },
      {
        shopId: 'bol',
        price: 199.00,
        deliveryText: 'Vandaag besteld, morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fphilips%2Bairfryer%2Bxxl%2F&name=Airfryer'
      },
      {
        shopId: 'coolblue',
        price: 209.00,
        deliveryText: 'VandaagNog® mogelijk',
        link: 'https://www.coolblue.nl/zoeken?query=Philips+Airfryer+XXL'
      }
    ]
  },
  {
    id: 'dyson-v15',
    name: 'Dyson V15 Detect',
    category: 'Huishouden',
    // Afbeelding van iemand die stofzuigt (Stabiele link)
    image: 'https://images.unsplash.com/photo-1527515673510-813d31432f74?auto=format&fit=crop&q=80&w=600',
    description: 'De krachtigste draadloze stofzuiger met laser die onzichtbaar stof toont.',
    lastUpdate: 'Gisteren',
    offers: [
      {
        shopId: 'amazon',
        price: 629.00,
        deliveryText: 'Gratis bezorgd',
        link: 'https://www.amazon.nl/s?k=Dyson+V15+Detect&tag=kiesjeshop-21',
        isBestPrice: true
      },
      {
        shopId: 'bol',
        price: 649.00,
        deliveryText: 'Morgen in huis',
        link: 'https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2Fdyson%2Bv15%2Bdetect%2F&name=DysonV15'
      },
      {
        shopId: 'coolblue',
        price: 669.00,
        deliveryText: 'Morgen in huis',
        link: 'https://www.coolblue.nl/zoeken?query=Dyson+V15+Detect'
      }
    ]
  }
];