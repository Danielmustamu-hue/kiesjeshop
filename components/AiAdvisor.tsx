
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
      case 'amazon': return `https://amzn.to/4oOzyrm`; // Protocol link
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
      const promptText = `Jij bent de shopping expert van Kiesjeshop.nl. 
      Vraag: "${query}" 
      Geef een feitelijk advies van maximaal 25 woorden. 
      Eindig je antwoord ALTIJD exact in dit formaat: SEARCH_ACTION: [ShopId]|[Zoekterm]
      Toegestane ShopIds: bol, amazon, coolblue. Gebruik GEEN andere namen.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText, 
      });
      
      const fullText = response.text || "";
      
      // Stap 1: Altijd de tekst strippen vanaf "SEARCH_ACTION" om technische codes in de UI te voorkomen
      let cleanAdvice = fullText;
      if (fullText.toUpperCase().includes('SEARCH_ACTION:')) {
        cleanAdvice = fullText.split(/SEARCH_ACTION:/i)[0].trim();
      }

      // Stap 2: De marker extraheren voor de knoppen
      const actionMatch = fullText.match(/SEARCH_ACTION:\s*(bol|coolblue|amazon)\s*\|\s*(.*)/i);
      if (actionMatch) {
        setSearchLinks([{ shopId: actionMatch[1].toLowerCase(), query: actionMatch[2].trim() }]);
      }
      
      setAdvice(cleanAdvice);
    } catch (err: any) {
      setAdvice("Excuses, mijn neurale systeem heeft even een storing. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white h-full p-8 md:p-24 relative flex flex-col items-center justify-center overflow-y-auto">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-full max-w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[160px]"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center pt-12 md:pt-0">
        <div className="inline-flex items-center gap-3 bg-orange-500/10 px-4 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-8 md:mb-10 border border-orange-500/20">
          <Cpu className="w-4 h-4" />
          <span>Neural Engine</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter">AI Consultant<span className="text-brand-orange">.</span></h2>
        <p className="text-slate-400 mb-10 md:mb-16 text-lg md:text-xl font-medium max-w-xl mx-auto px-4">Analyseer prijsverschillen en productreviews met onze real-time assistent.</p>

        <form onSubmit={handleAskAi} className="relative group mb-10 md:mb-16 px-2">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Wat zoek je?" 
            className="w-full px-6 md:px-10 py-5 md:py-7 rounded-2xl md:rounded-[2.5rem] bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-brand-orange/20 focus:bg-white/10 transition-all text-lg md:text-xl font-medium shadow-3xl"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="mt-4 md:mt-0 md:absolute md:right-3 md:top-3 w-full md:w-auto px-10 h-14 md:h-[calc(100%-1.5rem)] bg-white text-slate-950 rounded-xl md:rounded-[2rem] font-black text-[11px] uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all active:scale-95 disabled:opacity-30"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Consult"}
          </button>
        </form>

        {advice && (
          <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[3.5rem] p-8 md:p-12 text-left animate-in fade-in zoom-in-95 duration-500 shadow-3xl mx-2">
             <div className="flex flex-col gap-8 md:gap-10">
                <div className="text-xl md:text-3xl font-black text-white leading-tight tracking-tight">
                  {advice}
                </div>

                {searchLinks.length > 0 && (
                  <div className="pt-6 md:pt-10 border-t border-white/10 flex flex-wrap gap-4 md:gap-5">
                    {searchLinks.map((link, i) => {
                      const shop = SHOPS.find(s => s.id === link.shopId);
                      if (!shop) return null;
                      return (
                        <a
                          key={i}
                          href={getSearchLink(link.shopId, link.query)}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className={`flex-grow md:flex-grow-0 flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl ${shop.buttonColor}`}
                        >
                          <Search className="w-4 h-4" /> {shop.name} <ExternalLink className="w-4 h-4" />
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
