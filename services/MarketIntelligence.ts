
import { GoogleGenAI } from "@google/genai";

export interface MarketSignal {
  message: string;
  type: 'price' | 'stock' | 'system' | 'deal';
  shop: 'bol' | 'amazon' | 'coolblue';
  url: string;
}

const FALLBACK_SIGNALS: MarketSignal[] = [
  {
    message: "Aranet4 Home 2026 - Nu de laagste prijs van het jaar",
    type: 'price',
    shop: 'bol',
    url: "https://www.bol.com/nl/nl/s/?searchtext=Aranet4+Home"
  },
  {
    message: "MacBook Air M3 (Winter Deal) - Direct leverbaar",
    type: 'stock',
    shop: 'coolblue',
    url: "https://www.coolblue.nl/zoeken?query=MacBook+Air+M3"
  },
  {
    message: "Sony WH-1000XM5 - Amazon Choice Editie 2026",
    type: 'deal',
    shop: 'amazon',
    url: "https://amzn.to/4oOzyrm"
  }
];

const finalizeUrl = (rawUrl: string, shop: string, message: string): string => {
  let url = rawUrl.trim();
  const shopLower = shop.toLowerCase();
  const looksLikeProductPage = url.includes('/p/') || url.includes('/dp/') || url.includes('/product/') || url.includes('amazon.nl/s');
  
  if (!looksLikeProductPage || url.length < 15) {
    const query = encodeURIComponent(message.split('-')[0].trim());
    if (shopLower === 'bol') url = `https://www.bol.com/nl/nl/s/?searchtext=${query}`;
    if (shopLower === 'amazon') url = `https://www.amazon.nl/s?k=${query}`;
    if (shopLower === 'coolblue') url = `https://www.coolblue.nl/zoeken?query=${query}`;
  }

  if (shopLower === 'amazon' && url.includes('amazon.de')) url = url.replace('amazon.de', 'amazon.nl');
  const encodedUrl = encodeURIComponent(url);
  
  switch (shopLower) {
    case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=${encodedUrl}&name=LiveDeal`;
    case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=${encodedUrl}`;
    case 'amazon': return url.includes('tag=') ? url : `${url}${url.includes('?') ? '&' : '?'}tag=kiesjeshop-21`;
    default: return url;
  }
};

async function withRetry<T>(fn: () => Promise<T>, retries = 2, delay = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    const isRateLimit = error?.message?.includes('429') || error?.status === 429;
    if (retries > 0 && isRateLimit) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return withRetry(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

export const fetchLiveMarketData = async (): Promise<{signals: MarketSignal[], sources: {uri: string, title: string}[]}> => {
  try {
    return await withRetry(async () => {
      // Gebruik gemini-3-pro-preview voor high-end markt intelligence nu de gebruiker Tier 1 heeft.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `Je bent de Lead Strategist van Kiesjeshop.nl. Analyseer de Nederlandse tech-markt (bol.com, amazon.nl, coolblue.nl) op 31 dec 2025. 
      Vind 5 geverifieerde prijsdalingen of stock-updates. 
      Geef het resultaat in dit JSON formaat: [{"message": "Product - Info", "type": "deal|price|stock", "shop": "bol|amazon|coolblue", "url": "..."}]`;

      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: { 
          thinkingConfig: { thinkingBudget: 16000 },
          temperature: 0.1,
          tools: [{ googleSearch: {} }] 
        },
      });

      const text = response.text || "[]";
      const jsonMatch = text.match(/\[.*\]/s);
      let signals: MarketSignal[] = [];
      
      if (jsonMatch) {
        signals = (JSON.parse(jsonMatch[0]) as MarketSignal[]).map(s => ({
          ...s,
          url: finalizeUrl(s.url, s.shop, s.message)
        }));
      }

      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.filter((c:any) => c.web).map((c:any) => ({
        uri: c.web.uri,
        title: c.web.title
      })) || [];

      return { signals: signals.length > 0 ? signals : FALLBACK_SIGNALS, sources };
    });
  } catch (error) {
    return { 
      signals: FALLBACK_SIGNALS.map(s => ({ ...s, url: finalizeUrl(s.url, s.shop, s.message) })), 
      sources: [] 
    };
  }
};
