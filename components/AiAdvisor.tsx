import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Send, Loader2, Info, AlertTriangle, ShieldAlert } from 'lucide-react';

export const AiAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBlockingError, setIsBlockingError] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAdvice(null);
    setIsBlockingError(false);

    try {
      // 1. API Key Check
      const apiKey = process.env.API_KEY;
      if (!apiKey || apiKey.length < 5) {
        throw new Error("API Key ontbreekt. Configureer de .env file.");
      }

      // 2. Initialisatie
      const ai = new GoogleGenAI({ apiKey });
      
      const promptText = `
        Je bent een shopping expert in Nederland. Adviseer de gebruiker.
        Vraag: "${query}"
        Opties: Bol.com (algemeen), Coolblue (service/elektronica), Amazon.nl (prijs).
        Geef advies in max 3 zinnen.
      `;

      // 3. Model Strategie: Stabiliteit eerst
      const modelsToTry = [
        'gemini-1.5-flash',      // Production Stable
        'gemini-2.0-flash-exp',  // Experimental (soms sneller/beter)
        'gemini-1.5-pro'         // High Intelligence Fallback
      ];
      
      let success = false;
      let lastErrorMsg = '';

      for (const modelName of modelsToTry) {
        try {
          // Vereenvoudigde aanroep volgens @google/genai documentatie
          // We sturen 'contents' als string om complexiteitsfouten te vermijden
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptText, 
          });
          
          if (response.text) {
            setAdvice(response.text);
            success = true;
            break; 
          }
        } catch (err: any) {
          const msg = err?.message || String(err);
          // console.warn(`Model ${modelName} faalde:`, msg); // (Optioneel voor dev)
          lastErrorMsg = msg;
          
          // Script error = Browser blokkade (CORS/AdBlock). 
          // Dit is meestal fataal voor alle modellen, dus we kunnen hier stoppen of doorgaan.
          // We proberen door te gaan voor de zekerheid.
        }
      }

      if (!success) {
        // Specifieke afhandeling voor de "Script error"
        if (lastErrorMsg.includes("Script error")) {
            setIsBlockingError(true);
            throw new Error("Verbinding geblokkeerd.");
        } else if (lastErrorMsg.includes("404")) {
            throw new Error("AI Service niet gevonden (404).");
        } else if (lastErrorMsg.includes("429")) {
            throw new Error("Te druk. Probeer het later.");
        } else {
            throw new Error("Geen antwoord ontvangen.");
        }
      }

    } catch (err: any) {
      console.error("AI Error:", err);
      
      let displayMsg = err.message || "Er ging iets mis.";
      
      if (isBlockingError || displayMsg.includes("Script error") || displayMsg.includes("Failed to fetch")) {
          displayMsg = "Verbinding geblokkeerd door browser.";
          setIsBlockingError(true);
      }
      
      setError(displayMsg);
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
            <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm text-red-100 bg-red-900/50 border border-red-500/30 py-4 px-6 rounded-xl animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 font-bold">
                  {isBlockingError ? <ShieldAlert className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                  <span>{error}</span>
                </div>
                {isBlockingError && (
                    <div className="text-xs text-red-200/80 text-center max-w-sm">
                        <p>Dit komt vaak door een <strong>AdBlocker</strong> (bv. uBlock) of <strong>Cookie-instellingen</strong>.</p>
                        <p className="mt-1">Schakel je AdBlocker uit voor deze site of accepteer cookies om de AI te gebruiken.</p>
                    </div>
                )}
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