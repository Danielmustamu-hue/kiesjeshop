import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Loader2, Info, AlertTriangle } from 'lucide-react';

// Dit vertelt TypeScript dat process.env bestaat en door Vite wordt ingevuld.
declare const process: {
  env: {
    API_KEY: string;
  }
};

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
      const apiKey = process.env.API_KEY;
      
      if (!apiKey || apiKey.trim() === '') {
        throw new Error("API_KEY ontbreekt. Configureer je .env bestand.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        Je bent een shopping expert in Nederland. Een gebruiker wil iets kopen en twijfelt tussen Bol.com, Coolblue en Amazon.nl.
        
        Vraag van de gebruiker: "${query}"
        
        Geef een kort en bondig advies (maximaal 3 zinnen) over welke winkel het beste is voor DIT specifieke doel en waarom.
        Wees objectief.
        - Coolblue: Beste voor advies, elektronica, witgoed, service.
        - Bol.com: Beste voor algemene spullen, boeken, dagelijkse dingen, Nederlandstalig.
        - Amazon.nl: Beste voor prijsvechten, niche producten, kabels, gadgets.
      `;

      // We breiden de lijst uit. De 'preview' en 'exp' modellen zijn soms instabiel of niet beschikbaar voor alle keys.
      // 'gemini-1.5-flash' is het meest stabiele productiemodel en werkt vrijwel altijd als backup.
      const modelsToTry = [
        'gemini-2.5-flash', 
        'gemini-2.0-flash-exp', 
        'gemini-1.5-flash'
      ];
      
      let lastError: any = null;
      let success = false;

      for (const modelName of modelsToTry) {
        try {
          // console.log(`Proberen met model: ${modelName}...`); 
          // (Console logs weggehaald voor schonere productie code, tenzij fout)
          
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
          });
          
          if (response.text) {
            setAdvice(response.text);
            success = true;
            break; // Stop de loop, we hebben antwoord!
          }
        } catch (err: any) {
          lastError = err;
          // Als het een 404 is (model niet gevonden) OF een 503 (service unavailable), proberen we de volgende.
          const msg = err.message ? err.message.toLowerCase() : '';
          const isRecoverable = msg.includes('404') || msg.includes('not found') || msg.includes('503') || msg.includes('overloaded');
          
          if (!isRecoverable) {
             throw err; // Bij auth errors (403) of andere fatale fouten stoppen we direct.
          }
          console.warn(`Model ${modelName} niet beschikbaar (${msg}), overschakelen naar backup...`);
        }
      }

      // Als na alle pogingen nog geen succes is, gooi de laatste error
      if (!success) {
        throw lastError || new Error("Geen antwoord ontvangen van AI.");
      }

    } catch (err: any) {
      console.error("AI Error:", err);
      
      let errorMessage = "Er ging iets mis. Probeer het later opnieuw.";
      
      if (err.message) {
        const msg = err.message.toLowerCase();
        if (msg.includes("api key") || msg.includes("api_key") || msg.includes("403")) {
           errorMessage = "API Key error. Controleer je instellingen.";
        } else if (msg.includes("404") || msg.includes("not found")) {
           errorMessage = "AI Service momenteel niet bereikbaar (404).";
        } else if (msg.includes("429") || msg.includes("quota")) {
           errorMessage = "Te veel verzoeken. De AI is even druk.";
        } else if (msg.includes("fetch") || msg.includes("network") || msg.includes("failed to fetch")) {
           errorMessage = "Netwerkfout. Controleer je internetverbinding.";
        } else {
           errorMessage = `Fout: ${err.message}`;
        }
      }
      
      setError(errorMessage);
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

        {error && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-red-200 bg-red-900/40 border border-red-500/30 py-2 px-4 rounded-lg animate-in fade-in slide-in-from-top-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
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