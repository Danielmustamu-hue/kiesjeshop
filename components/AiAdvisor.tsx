
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Cpu, ExternalLink, Search } from 'lucide-react';
import { SHOPS } from '../constants';

export const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [searchLinks, setSearchLinks] = useState<{shopId: string, query: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const getSearchLink = (type: string, query: string) => {
    const encoded = encodeURIComponent(query);
    switch (type.toLowerCase()) {
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=Advisor&subid=Algemeen-AI-Hulp`;
      case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3D${encoded}`;
      case 'amazon': return `https://amzn.to/4oOzyrm`; 
      default: return '#';
    }
  };

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setAdvice(null);
    setSearchLinks([]);

    try {
      // Directe initialisatie zonder vertragende checks
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `Jij bent de Senior Shopping Strategist van Kiesjeshop.nl. 
      Vraag van klant: "${query}" 
      
      STRIKTE PROTOCOLLEN:
      - Antwoord als expert in het Nederlands (maximaal 3 tot 4 krachtige zinnen).
      - Gebruik de 'Problem-Agitate-Solve' methode: noem kort het belang van de juiste keuze.
      - Adviseer specifiek waarom bol, Amazon of Coolblue de winnaar is voor DIT product.
      - Eindig ALTIJD met de technische marker: SEARCH_ACTION: [ShopId]|[Zoekterm]
      - Toegestane ShopIds: bol, amazon, coolblue. Kies de partner met de beste fit.
      - Gebruik GEEN andere markers of winkelnamen in de SEARCH_ACTION.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText, 
        config: {
          temperature: 0.7,
        }
      });
      
      const fullText = response.text || "";
      
      // Stap 1: Robuuste stripping van de technische marker
      let cleanAdvice = fullText;
      const markerKeywords = ['SEARCH_ACTION', 'SEARCH_ACTION:', 'SEARCH_ACTION :'];
      for (const keyword of markerKeywords) {
        const index = fullText.toUpperCase().indexOf(keyword);
        if (index !== -1) {
          cleanAdvice = fullText.substring(0, index).trim();
          break;
        }
      }

      // Stap 2: Extractie voor de conversie-knoppen en CTA tekst
      const actionMatch = fullText.match(/SEARCH_ACTION\s*:\s*([^|]+)\s*\|\s*(.*)/i);
      
      if (actionMatch) {
        const foundShopId = actionMatch[1].trim().toLowerCase();
        const foundQuery = actionMatch[2].trim();
        
        // Valideer partner
        if (['bol', 'coolblue', 'amazon'].includes(foundShopId)) {
          setSearchLinks([{ shopId: foundShopId, query: foundQuery }]);
          
          const shopDisplay = foundShopId === 'amazon' ? 'Amazon' : (foundShopId === 'bol' ? 'bol' : 'Coolblue');
          // Voeg conversie-CTA toe aan de tekst-bubble
          cleanAdvice += `\n\nBekijk de beste prijs en voorraad bij ${shopDisplay}:`;
        }
      }
      
      setAdvice(cleanAdvice);
    } catch (err: any) {
      setAdvice("Excuses, onze neurale engine is momenteel overbezet. Probeer het over 10 seconden nog eens.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white h-full p-6 md:p-24 relative flex flex-col items-center justify-center overflow-y-auto scrollbar-hide">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-full max-w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-8 md:py-0">
        <div className="inline-flex items-center gap-3 bg-orange-500/10 px-4 py-2 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-6 md:mb-10 border border-orange-500/20">
          <Cpu className="w-4 h-4" />
          <span>Neural Shopping Engine</span>
        </div>
        
        <h2 className="text-3xl md:text-7xl font-black mb-4 tracking-tighter">AI Consultant<span className="text-brand-orange">.</span></h2>
        <p className="text-slate-400 mb-8 md:mb-16 text-base md:text-xl font-medium max-w-xl mx-auto px-2">Onbevooroordeeld koopadvies gebaseerd op real-time marktdata van bol, Amazon en Coolblue.</p>

        <form onSubmit={handleAskAi} className="relative group mb-8 md:mb-16 px-2 w-full max-w-2xl mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Welke airfryer raden jullie aan?" 
            className="w-full px-6 md:px-10 py-5 md:py-7 rounded-2xl md:rounded-[2.5rem] bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-brand-orange/20 focus:bg-white/10 transition-all text-base md:text-xl font-medium shadow-3xl"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="mt-4 md:mt-0 md:absolute md:right-3 md:top-3 w-full md:w-auto px-8 h-14 md:h-[calc(100%-1.5rem)] bg-white text-slate-950 rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all active:scale-95 disabled:opacity-30 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Adviseer Me <Sparkles className="w-4 h-4" /></>}
          </button>
        </form>

        {advice && (
          <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 text-left animate-in fade-in zoom-in-95 duration-500 shadow-3xl mx-2">
             <div className="flex flex-col gap-6 md:gap-10">
                <div className="text-lg md:text-2xl font-bold text-white leading-relaxed tracking-tight whitespace-pre-wrap">
                  {advice}
                </div>

                {searchLinks.length > 0 && (
                  <div className="pt-6 md:pt-10 border-t border-white/10 flex flex-wrap gap-3 md:gap-5">
                    {searchLinks.map((link, i) => {
                      const shop = SHOPS.find(s => s.id === link.shopId);
                      if (!shop) return null;
                      return (
                        <a
                          key={i}
                          href={getSearchLink(link.shopId, link.query)}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className={`flex-grow md:flex-grow-0 flex items-center justify-center gap-4 px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black text-[9px] md:text-[11px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl ${shop.buttonColor}`}
                        >
                          <Search className="w-4 h-4" /> Bekijk nu bij {shop.name} <ExternalLink className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
