import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Loader2, Info, AlertTriangle, Cpu, ExternalLink, Search } from 'lucide-react';
import { SHOPS } from '../constants';

export const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [searchLinks, setSearchLinks] = useState<{shopId: string, query: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSearchLink = (type: string, query: string) => {
    const encoded = encodeURIComponent(query);
    switch (type.toLowerCase()) {
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
      case 'coolblue': return `https://www.coolblue.nl/zoeken?query=${encoded}`;
      case 'amazon': return `https://www.amazon.nl/s?k=${encoded}&tag=kiesjeshop-21`;
      default: return '#';
    }
  };

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAdvice(null);
    setSearchLinks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `
        Jij bent de shopping expert van Kiesjeshop.nl.
        Een bezoeker stelt de volgende vraag: "${query}"
        
        STAP 1: Geef een kort, krachtig advies (max 2 zinnen) over welke shop (bol, Coolblue of Amazon) het beste past.
        
        STAP 2: Identificeer het specifieke product of de categorie waar de gebruiker naar zoekt.
        
        STAP 3: Eindig je antwoord ALTIJD met een nieuwe regel in dit exacte formaat:
        SEARCH_ACTION: [ShopNaam]|[Zoekterm]
        
        Voorbeeld: "SEARCH_ACTION: bol|draadloze oortjes" of "SEARCH_ACTION: Coolblue|wasmachine"
        
        Richtlijnen:
        - Coolblue: Voor service, installatie, witgoed, high-end elektronica.
        - Amazon: Voor de laagste prijs, kabels, gadgets, internationaal aanbod.
        - bol: Voor boeken, speelgoed, breed assortiment, snelle Select-levering.
        - Gebruik NOOIT bol.com, maar altijd 'bol'.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [{ text: promptText }] }, 
      });
      
      const fullText = response.text || "";
      
      // Parse de SEARCH_ACTION
      const actionMatch = fullText.match(/SEARCH_ACTION:\s*(bol|coolblue|amazon)\s*\|\s*(.*)/i);
      let cleanAdvice = fullText;
      let links: {shopId: string, query: string}[] = [];

      if (actionMatch) {
        cleanAdvice = fullText.replace(/SEARCH_ACTION: .*/i, '').trim();
        links.push({
          shopId: actionMatch[1].toLowerCase(),
          query: actionMatch[2].trim()
        });
      }

      setAdvice(cleanAdvice);
      setSearchLinks(links);

    } catch (err: any) {
      console.error("AI Error:", err);
      setError("Er ging iets mis bij het ophalen van het advies. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  const renderAdviceWithLinks = (text: string) => {
    const regex = /(bol|Coolblue|Amazon)/gi;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase();
      const shop = SHOPS.find(s => s.id === (lowerPart === 'bol' ? 'bol' : lowerPart === 'coolblue' ? 'coolblue' : 'amazon'));

      if (shop) {
        return (
          <a 
            key={index}
            href={shop.ctaLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`font-bold hover:underline underline-offset-2 ${shop.color}`}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="bg-indigo-900 text-white rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-800/50 px-4 py-1.5 rounded-full text-sm font-medium text-indigo-200 mb-4 border border-indigo-700">
          <Sparkles className="w-4 h-4" />
          <span>Persoonlijk AI Advies</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Keuzestress? Krijg direct antwoord.</h2>
        <p className="text-indigo-200 mb-8">Type wat je zoekt en wij vertellen binnen 3 seconden waar je de beste deal scoort.</p>

        <form onSubmit={handleAskAi} className="relative max-w-lg mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bijv: Ik zoek een goede laptop voor werk..." 
            className="w-full pl-6 pr-14 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 backdrop-blur-sm transition-all"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="absolute right-2 top-2 p-2 bg-white text-indigo-900 rounded-full hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </form>

        <div className="mt-3 flex items-center justify-center gap-1.5 opacity-50">
            <Cpu className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Powered by Google Gemini</span>
        </div>

        {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-200 bg-red-900/50 py-2 px-4 rounded-lg border border-red-500/30">
                <AlertTriangle className="w-4 h-4" />
                <span>{error}</span>
            </div>
        )}

        {advice && (
          <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg">
             <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-indigo-300 shrink-0 mt-1" />
                <div className="w-full">
                    <h3 className="font-bold text-lg mb-2 text-white">Ons advies:</h3>
                    <p className="text-indigo-50 leading-relaxed text-lg mb-6">
                      {renderAdviceWithLinks(advice)}
                    </p>

                    {searchLinks.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3">Direct naar de resultaten:</p>
                        <div className="flex flex-wrap gap-3">
                          {searchLinks.map((link, i) => {
                            const shop = SHOPS.find(s => s.id === link.shopId);
                            if (!shop) return null;
                            return (
                              <a
                                key={i}
                                href={getSearchLink(link.shopId, link.query)}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-md hover:shadow-lg ${shop.buttonColor}`}
                              >
                                <Search className="w-4 h-4" />
                                Zoek '{link.query}' bij {shop.name}
                                <ExternalLink className="w-4 h-4 opacity-50" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};