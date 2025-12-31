
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Cpu, ExternalLink, Search, Info } from 'lucide-react';
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `Jij bent de Senior Shopping Strategist van Kiesjeshop.nl. 
      Vraag van klant: "${query}" 
      
      STRIKTE PROTOCOLLEN:
      - Antwoord als expert in het Nederlands (maximaal 3 tot 4 krachtige zinnen).
      - Adviseer specifiek waarom bol, Amazon of Coolblue de winnaar is voor DIT product.
      - Eindig ALTIWD met de technische marker: SEARCH_ACTION: [ShopId]|[Zoekterm]
      - Toegestane ShopIds: bol, amazon, coolblue. Kies de partner met de beste fit.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText, 
        config: {
          temperature: 0.7,
        }
      });
      
      const fullText = response.text || "";
      let cleanAdvice = fullText;
      const markerKeywords = ['SEARCH_ACTION', 'SEARCH_ACTION:', 'SEARCH_ACTION :'];
      for (const keyword of markerKeywords) {
        const index = fullText.toUpperCase().indexOf(keyword);
        if (index !== -1) {
          cleanAdvice = fullText.substring(0, index).trim();
          break;
        }
      }

      const actionMatch = fullText.match(/SEARCH_ACTION\s*:\s*([^|]+)\s*\|\s*(.*)/i);
      
      if (actionMatch) {
        const foundShopId = actionMatch[1].trim().toLowerCase();
        const foundQuery = actionMatch[2].trim();
        if (['bol', 'coolblue', 'amazon'].includes(foundShopId)) {
          setSearchLinks([{ shopId: foundShopId, query: foundQuery }]);
          const shopDisplay = foundShopId === 'amazon' ? 'Amazon' : (foundShopId === 'bol' ? 'bol' : 'Coolblue');
          cleanAdvice += `\n\nDirect profiteren bij ${shopDisplay}:`;
        }
      }
      
      setAdvice(cleanAdvice);
    } catch (err: any) {
      setAdvice("Onze excuses, onze neurale engine is momenteel overbezet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 h-full p-6 md:p-12 lg:p-24 relative flex flex-col items-center justify-center overflow-y-auto scrollbar-hide">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-full max-w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-8 md:py-0">
        <div className="inline-flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-6 md:mb-10 border border-slate-100">
          <Cpu className="w-5 h-5" />
          <span>Neuraal Expertsysteem</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 tracking-tighter text-slate-900 leading-none">AI Adviseur<span className="brand-text-gradient">.</span></h2>
        <p className="text-slate-500 mb-8 md:mb-16 text-base md:text-xl lg:text-2xl font-medium max-w-xl mx-auto px-2 leading-relaxed">Objectief koopadvies op basis van bol, Amazon en Coolblue gegevens.</p>

        <form onSubmit={handleAskAi} className="relative group mb-12 md:mb-16 px-2 w-full max-w-2xl mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Wat zoek je? (bijv. OLED TV)" 
            className="w-full px-6 md:px-10 py-6 md:py-8 md:pr-64 rounded-2xl md:rounded-[3rem] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-pink/10 focus:bg-white transition-all text-lg md:text-2xl font-bold shadow-xl"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="mt-4 md:mt-0 md:absolute md:right-4 md:top-4 w-full md:w-auto px-8 lg:px-10 h-16 md:h-[calc(100%-2rem)] bg-slate-900 text-white rounded-xl md:rounded-[2.5rem] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] hover:bg-brand-pink transition-all active:scale-95 disabled:opacity-30 flex items-center justify-center gap-2 shadow-xl"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Adviseer Me <Sparkles className="w-5 h-5" /></>}
          </button>
        </form>

        {advice && (
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 text-left animate-in fade-in zoom-in-95 duration-500 shadow-2xl mx-2">
             <div className="flex flex-col gap-6 md:gap-10">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-900 leading-relaxed tracking-tight whitespace-pre-wrap">
                  {advice}
                </div>

                {searchLinks.length > 0 && (
                  <div className="pt-8 border-t border-slate-200 flex flex-wrap gap-4">
                    {searchLinks.map((link, i) => {
                      const shop = SHOPS.find(s => s.id === link.shopId);
                      if (!shop) return null;
                      return (
                        <a
                          key={i}
                          href={getSearchLink(link.shopId, link.query)}
                          target="_blank"
                          rel="nofollow"
                          className={`flex-grow md:flex-grow-0 flex items-center justify-center gap-4 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl ${shop.buttonColor}`}
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

        <div className="mt-8 md:mt-12 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">
           <Info className="w-4 h-4 shrink-0" /> Onafhankelijk AI oordeel op basis van retailers-data 2025
        </div>
      </div>
    </div>
  );
};
