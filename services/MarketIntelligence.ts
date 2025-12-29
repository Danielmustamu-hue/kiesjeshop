
import { GoogleGenAI } from "@google/genai";

export interface MarketSignal {
  message: string;
  type: 'price' | 'stock' | 'system' | 'deal';
  shop: 'bol' | 'amazon' | 'coolblue';
  url: string;
}

/**
 * Valideert en transformeert de URL. Als een link onbetrouwbaar lijkt, 
 * maken we er een veilige zoek-link van.
 */
const finalizeUrl = (rawUrl: string, shop: string, message: string): string => {
  let url = rawUrl.trim();
  const shopLower = shop.toLowerCase();

  // 1. Herken of de URL een "hallucinatie" is (bijv. te kort of vreemde tekens)
  const looksLikeProductPage = url.includes('/p/') || url.includes('/dp/') || url.includes('/product/');
  
  // 2. Als de URL onbetrouwbaar lijkt, genereer een geverifieerde zoek-link
  if (!looksLikeProductPage || url.length < 15) {
    const query = encodeURIComponent(message.split('-')[0].trim()); // Pak productnaam uit de boodschap
    if (shopLower === 'bol') url = `https://www.bol.com/nl/nl/s/?searchtext=${query}`;
    if (shopLower === 'amazon') url = `https://www.amazon.nl/s?k=${query}`;
    if (shopLower === 'coolblue') url = `https://www.coolblue.nl/zoeken?query=${query}`;
  }

  // 3. Forceer NL domeinen (voorkom .de of .com 404's)
  if (shopLower === 'amazon' && url.includes('amazon.de')) url = url.replace('amazon.de', 'amazon.nl');
  if (shopLower === 'amazon' && url.includes('amazon.com')) url = url.replace('amazon.com', 'amazon.nl');

  // 4. Wrap met Affiliate ID's
  const encodedUrl = encodeURIComponent(url);
  switch (shopLower) {
    case 'bol':
      return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=${encodedUrl}&name=LiveDeal`;
    case 'coolblue':
      return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=${encodedUrl}`;
    case 'amazon':
      // Amazon tag toevoegen
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}tag=kiesjeshop-21`;
    default:
      return url;
  }
};

export const fetchLiveMarketData = async (): Promise<{signals: MarketSignal[], sources: {uri: string, title: string}[]}> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const prompt = `
      Zoek naar 5 ACTUELE tech deals van VANDAAG UITSLUITEND op de NEDERLANDSE markt (.nl).
      Zoek bij bol.com, Amazon.nl of Coolblue.nl. 
      
      BELANGRIJK: 
      - De prijzen moeten in EURO zijn.
      - Gebruik de EXACTE URL die je in de Nederlandse zoekresultaten vindt. 
      - Als je GEEN directe product-URL kunt vinden die werkt op de .NL site, gebruik dan een zoek-URL (bijv. amazon.nl/s?k=productnaam).
      - Verzin NOOIT een product-ID of ASIN.
      
      Antwoord in dit JSON formaat:
      [
        {"message": "Exacte Productnaam + deal info in Euro", "type": "deal", "shop": "bol|amazon|coolblue", "url": "URL"}
      ]
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0, // Minimale creativiteit voor maximale precisie
      },
    });

    const text = response.text || "[]";
    const jsonMatch = text.match(/\[.*\]/s);
    let signals: MarketSignal[] = [];
    
    if (jsonMatch) {
      const rawSignals = JSON.parse(jsonMatch[0]) as MarketSignal[];
      signals = rawSignals.map(s => ({
        ...s,
        url: finalizeUrl(s.url, s.shop, s.message)
      }));
    }

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        uri: chunk.web.uri,
        title: chunk.web.title
      }));

    return { signals, sources };
  } catch (error) {
    console.error("Fout bij ophalen marktdata:", error);
    return { signals: [], sources: [] };
  }
};
