
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
      case 'bol': return `https://partner.bol.com/click/click?p=2&t=url&s=1491898&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fs%2F${encoded}%2F&name=${encoded}`;
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

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const promptText = `Jij bent de ultra-efficiënte shopping expert van Kiesjeshop.nl. GEBRUIK ZO MIN MOGELIJK WOORDEN. Wees extreem kortaf maar feitelijk. Maximaal 20 woorden. Vraag: "${query}" Eindig met: SEARCH_ACTION: [ShopNaam]|[Zoekterm]`;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: promptText }] }], 
      });
      const fullText = response.text || "";
      const actionMatch = fullText.match(/SEARCH_ACTION:\s*(bol|coolblue|amazon)\s*\|\s*(.*)/i);
      let cleanAdvice = fullText;
      if (actionMatch) {
        cleanAdvice = fullText.split('SEARCH_ACTION:')[0].trim();
        setSearchLinks([{ shopId: actionMatch[1].toLowerCase(), query: actionMatch[2].trim() }]);
      }
      setAdvice(cleanAdvice);
    } catch (err: any) {
      setAdvice("Error bij het verwerken van uw aanvraag.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white h-full p-12 md:p-24 relative flex flex-col items-center justify-center">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-full max-w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[160px]"></div>
      
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 bg-indigo-500/10 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-10 border border-indigo-500/20">
          <Cpu className="w-4 h-4" />
          <span>Neural Comparison Engine</span>
        </div>
        
        <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter">AI Consultant<span className="text-brand-indigo">.</span></h2>
        <p className="text-slate-400 mb-16 text-xl font-medium max-w-xl mx-auto">Analyseer prijsverschillen en productreviews met onze real-time assistent.</p>

        <form onSubmit={handleAskAi} className="relative group mb-16">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bijv: Welke oortjes hebben de beste bas onder €150?" 
            className="w-full px-10 py-7 rounded-[2.5rem] bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:ring-4 focus:ring-brand-indigo/20 focus:bg-white/10 transition-all text-xl font-medium shadow-3xl"
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="absolute right-3 top-3 px-10 h-[calc(100%-1.5rem)] bg-white text-slate-950 rounded-[2rem] font-black text-[11px] uppercase tracking-widest hover:bg-brand-indigo hover:text-white transition-all active:scale-95 disabled:opacity-30"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Consult"}
          </button>
        </form>

        {advice && (
          <div className="bg-white/5 border border-white/10 rounded-[3.5rem] p-12 text-left animate-in fade-in zoom-in-95 duration-500 shadow-3xl">
             <div className="flex flex-col gap-10">
                <div className="text-3xl font-black text-white leading-tight tracking-tight">
                  {advice}
                </div>

                {searchLinks.length > 0 && (
                  <div className="pt-10 border-t border-white/10 flex flex-wrap gap-5">
                    {searchLinks.map((link, i) => {
                      const shop = SHOPS.find(s => s.id === link.shopId);
                      if (!shop) return null;
                      return (
                        <a
                          key={i}
                          href={getSearchLink(link.shopId, link.query)}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className={`flex items-center gap-4 px-10 py-5 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl ${shop.buttonColor}`}
                        >
                          <Search className="w-4 h-4" /> {shop.name}: {link.query} <ExternalLink className="w-4 h-4" />
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
