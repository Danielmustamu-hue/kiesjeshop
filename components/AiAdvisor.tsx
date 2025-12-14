import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Loader2, Info, AlertTriangle, Cpu } from 'lucide-react';

export const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAdvice(null);

    try {
      // Initialiseer Gemini direct met de environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const promptText = `
        Je bent een shopping expert in Nederland. Adviseer de gebruiker.
        Vraag: "${query}"
        Opties: Bol.com (algemeen), Coolblue (service/elektronica), Amazon.nl (prijs).
        Geef advies in max 3 zinnen.
      `;

      // Model aanroep
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [{ text: promptText }] }, 
      });
      
      if (response.text) {
        setAdvice(response.text);
      } else {
        throw new Error("Geen antwoord ontvangen van de assistent.");
      }

    } catch (err: any) {
      console.error("AI Error:", err);
      let msg = "Er ging iets mis. Probeer het later opnieuw.";
      const errorString = String(err);
      
      // Vereenvoudigde error handling
      if (err.message && (err.message.includes("API Key") || err.message.includes("403"))) {
         msg = "Configuratiefout: API Key ongeldig of ontbreekt.";
      } else if (errorString.includes("404")) {
         msg = "Service niet beschikbaar (404).";
      } else if (errorString.includes("429")) {
         msg = "Te druk. Probeer het morgen weer.";
      }
      
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-indigo-900 text-white rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-800/50 px-4 py-1.5 rounded-full text-sm font-medium text-indigo-200 mb-4 border border-indigo-700">
          <Sparkles className="w-4 h-4" />
          <span>AI Shopping Hulp</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Twijfel je nog? Vraag het de expert.</h2>
        <p className="text-indigo-200 mb-8">Vertel ons wat je wilt kopen, en wij vertellen je direct welke webshop de beste keuze is.</p>

        <form onSubmit={handleAskAi} className="relative max-w-lg mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bijv: Ik zoek een nieuwe wasmachine..." 
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

        <div className="mt-3 flex items-center justify-center gap-1.5 opacity-50 hover:opacity-80 transition-opacity">
            <Cpu className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Powered by Google Gemini</span>
        </div>

        {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-200 bg-red-900/50 py-2 px-4 rounded-lg animate-in fade-in border border-red-500/30">
                <AlertTriangle className="w-4 h-4" />
                <span>{error}</span>
            </div>
        )}

        {advice && (
          <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-6 text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-indigo-300 shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-lg mb-1">Advies op maat:</h3>
                    <p className="text-indigo-100 leading-relaxed">{advice}</p>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};