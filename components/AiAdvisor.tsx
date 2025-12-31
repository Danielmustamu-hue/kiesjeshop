
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
// Fixed: Changed 'lucide-center' to 'lucide-react' as it's the correct library for these icons.
import { Sparkles, Loader2, Cpu, ExternalLink, Search, Info, AlertCircle, Zap, ShieldCheck, BrainCircuit } from 'lucide-react';
import { SHOPS } from '../constants';

// Fixed: Using the global AIStudio type and matching the readonly modifier to resolve 
// modifier mismatch and type collision errors with the global environment.
declare global {
  interface Window {
    readonly aistudio: AIStudio;
  }
}

export const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [searchLinks, setSearchLinks] = useState<{shopId: string, query: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorType, setErrorType] = useState<'none' | 'rate-limit' | 'general'>('none');
  const [hasOwnKey, setHasOwnKey] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const checkKeyStatus = async () => {
    try {
      if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasOwnKey(hasKey);
      }
    } catch (e) {
      console.debug("AI Studio context not available");
    }
  };

  const handleUpgradeKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Assume the key selection was successful after triggering openSelectKey() to mitigate race condition.
      setHasOwnKey(true);
    }
  };

  const getSearchLink = (type: string, query: string) => {
    const encoded = encodeURIComponent(query);
    switch (type.toLowerCase()) {
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=Advisor&subid=Algemeen-AI-Hulp`;
      case 'coolblue': return `https://www.awin1.com/cread.php?awinmid=85161&awinaffid=2694054&ued=https%3A%2F%2Fwww.coolblue.nl%2Fzoeken%3Fquery%3D${encoded}`;
      case 'amazon': return `https://www.amazon.nl/s?k=${encoded}&tag=kiesjeshop-21`; 
      default: return '#';
    }
  };

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setAdvice(null);
    setSearchLinks([]);
    setErrorType('none');
    setIsThinking(true);

    try {
      // Create new instance right before making an API call to ensure it always uses the most up-to-date API key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `
        Je bent de Lead Strategist van Kiesjeshop.nl. 
        Geef een diepgaand strategisch koopadvies voor: "${query}".
        
        GEBRUIK JE REASONING (THINKING) CAPACITEIT OM:
        1. De beste prijs-kwaliteit verhouding te bepalen tussen bol, amazon en coolblue.
        2. Service-voordelen (zoals installatie of retourgemak) mee te wegen.
        3. Een concreet eindoordeel te geven voor 2026.
        
        ANTWOORD IN MAX 4 ZINNEN.
        Eindig ALTIJD met de trigger: SEARCH_ACTION: [ShopId]|[Zoekterm]
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: promptText, 
        config: { 
          thinkingConfig: { thinkingBudget: 32768 }, // High budget for pro model reasoning
          temperature: 0.7,
          tools: [{ googleSearch: {} }]
        }
      });
      
      setIsThinking(false);
      const fullText = response.text || "";
      let cleanAdvice = fullText;
      const markerKeywords = ['SEARCH_ACTION', 'SEARCH_ACTION:'];
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
        setSearchLinks([{ shopId: foundShopId, query: foundQuery }]);
      }
      
      setAdvice(cleanAdvice);
    } catch (err: any) {
      setIsThinking(false);
      if (err?.message?.includes('429') || err?.status === 429) {
        setErrorType('rate-limit');
        setAdvice("Capaciteit bereikt! Gebruik je eigen Tier 1 key voor onbeperkt advies, of gebruik de knoppen hieronder:");
        setSearchLinks([
          { shopId: 'bol', query: query },
          { shopId: 'amazon', query: query },
          { shopId: 'coolblue', query: query }
        ]);
      } else if (err?.message?.includes("Requested entity was not found.")) {
        // If the request fails due to key selection issues, reset key selection state
        setHasOwnKey(false);
        setErrorType('general');
        setAdvice("API Sleutel fout. Selecteer a.u.b. een geldige Tier 1 sleutel via de knop hierboven.");
      } else {
        setErrorType('general');
        setAdvice("Er is een technische storing opgetreden. Onze excuses.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-900 h-full p-6 md:p-12 lg:p-24 relative flex flex-col items-center justify-center overflow-y-auto scrollbar-hide">
      
      {/* Premium Badge */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
         {hasOwnKey ? (
           <div className="bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full border border-emerald-200 text-[9px] font-black uppercase tracking-widest flex items-center gap-2 animate-pulse">
              <ShieldCheck className="w-3.5 h-3.5" /> Premium Intelligence (Tier 1) Active
           </div>
         ) : (
           <button 
             onClick={handleUpgradeKey}
             className="bg-slate-50 text-slate-400 hover:text-brand-pink px-4 py-1.5 rounded-full border border-slate-200 text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-all"
           >
              <Zap className="w-3.5 h-3.5" /> Unlock Pro Thinking Mode
           </button>
         )}
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-8">
        <div className="inline-flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink mb-6 border border-slate-100">
          <BrainCircuit className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
          <span>Shopping Strategist 2026</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter text-slate-900 leading-none">AI Adviseur<span className="brand-text-gradient">.</span></h2>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-10">Real-time vergelijking op basis van Tier 1 Data</p>
        
        <form onSubmit={handleAskAi} className="relative mb-12 w-full max-w-2xl mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Wat zoek je? (bijv. iPhone 16 Pro)" 
            className="w-full px-6 py-6 md:py-8 pr-4 rounded-2xl md:rounded-[3rem] bg-slate-50 border border-slate-200 text-slate-900 text-lg md:text-2xl font-bold shadow-xl focus:bg-white focus:border-brand-pink/30 outline-none transition-all"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="mt-4 md:mt-0 md:absolute md:right-4 md:top-4 w-full md:w-auto px-10 h-16 md:h-[calc(100%-2rem)] bg-slate-900 text-white rounded-xl md:rounded-[2.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-brand-pink transition-all active:scale-95 disabled:opacity-30"
          >
            {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Start Analyse'}
          </button>
        </form>

        {isThinking && (
          <div className="flex items-center justify-center gap-4 mb-8 animate-pulse">
             <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce" style={{animationDelay: '200ms'}}></div>
                <div className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce" style={{animationDelay: '400ms'}}></div>
             </div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Strategisch onderzoek bezig...</span>
          </div>
        )}

        {advice && (
          <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-12 text-left animate-in fade-in zoom-in-95 duration-500 shadow-2xl relative">
             <div className="absolute -top-4 -right-4 bg-brand-pink text-white p-2.5 rounded-xl shadow-lg">
                <Sparkles className="w-5 h-5" />
             </div>
             
             <div className="flex flex-col gap-6">
                {errorType === 'rate-limit' && (
                  <div className="flex items-center gap-2 text-rose-600 font-black text-[10px] uppercase tracking-widest mb-2">
                    <AlertCircle className="w-4 h-4" /> Systeemcapaciteit Bereikt (Tier 1 Aanbevolen)
                  </div>
                )}
                
                <div className="text-lg md:text-2xl font-bold text-slate-900 leading-relaxed tracking-tight">
                  {advice}
                </div>

                {searchLinks.length > 0 && (
                  <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {searchLinks.map((link, i) => {
                      const shop = SHOPS.find(s => s.id === link.shopId);
                      if (!shop) return null;
                      return (
                        <a
                          key={i}
                          href={getSearchLink(link.shopId, link.query)}
                          target="_blank"
                          rel="nofollow"
                          className={`flex items-center justify-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-md active:scale-95 ${shop.buttonColor}`}
                        >
                          <Search className="w-4 h-4" /> {errorType === 'rate-limit' ? `Zoek op ${shop.name}` : `Bekijk bij ${shop.name}`} <ExternalLink className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
             </div>
          </div>
        )}
      </div>
      
      {/* Billing Documentation Link */}
      <div className="mt-12 text-center">
         <a 
           href="https://ai.google.dev/gemini-api/docs/billing" 
           target="_blank" 
           className="text-[9px] font-black text-slate-300 hover:text-slate-900 uppercase tracking-widest transition-all"
         >
           Hoe werkt Tier 1 Billing? Lees de doc.
         </a>
      </div>
    </div>
  );
};
