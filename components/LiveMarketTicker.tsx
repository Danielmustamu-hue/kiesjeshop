
import React from 'react';
import { Terminal, RefreshCcw, ArrowDownCircle, AlertCircle, Zap, Globe, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { MarketSignal } from '../services/MarketIntelligence';

interface LiveMarketTickerProps {
  signals: MarketSignal[];
  sources: {uri: string, title: string}[];
  loading?: boolean;
}

export const LiveMarketTicker: React.FC<LiveMarketTickerProps> = ({ signals, sources, loading }) => {
  const getSignalIcon = (type: string) => {
    switch (type) {
      case 'price': return <ArrowDownCircle className="w-4 h-4 text-emerald-400" />;
      case 'stock': return <AlertCircle className="w-4 h-4 text-amber-400" />;
      case 'deal': return <Zap className="w-4 h-4 text-indigo-400" />;
      default: return <Globe className="w-4 h-4 text-slate-400" />;
    }
  };

  const getShopColor = (shop: string) => {
    const s = shop.toLowerCase();
    if (s.includes('bol')) return 'text-blue-400';
    if (s.includes('amazon')) return 'text-yellow-500';
    if (s.includes('coolblue')) return 'text-orange-500';
    return 'text-white';
  };

  return (
    <div className="flex flex-col h-full font-mono relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${loading ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">
            {loading ? 'Analyzing Live Data...' : 'Intelligence Feed'}
          </span>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2">
             <span className="text-3xl font-black text-white tracking-tighter tabular-nums">
               {loading ? '--' : signals.length}
             </span>
          </div>
          <span className="block text-[7px] font-black text-indigo-400 uppercase tracking-widest">Gevonden Deals</span>
        </div>
      </div>

      <div className="flex-grow space-y-3 overflow-y-auto pr-2 scrollbar-hide mask-fade-bottom max-h-[220px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40 py-10">
             <RefreshCcw className="w-8 h-8 animate-spin text-indigo-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-center leading-relaxed px-4">
                AI doorzoekt bol, Amazon & Coolblue...
             </span>
          </div>
        ) : signals.length > 0 ? (
          signals.map((signal, i) => (
            <a 
              key={i} 
              href={signal.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all animate-in slide-in-from-left-4 fade-in shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
              title={`Bekijk deal op ${signal.shop}`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="mt-1 shrink-0">{getSignalIcon(signal.type)}</div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black uppercase tracking-widest ${getShopColor(signal.shop)}`}>
                      {signal.shop}
                    </span>
                    <span className="text-[7px] font-black text-emerald-500 uppercase tracking-tighter bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" /> Verified
                    </span>
                  </div>
                  <span className="text-[11px] text-white/90 leading-tight font-bold truncate pr-4">
                    {signal.message}
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="text-[8px] font-black text-white/30 uppercase tracking-widest opacity-0 group-hover/item:opacity-100 transition-opacity">
                  Nu Bekijken
                </span>
                <div className="bg-white/10 p-2 rounded-xl group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="text-[10px] text-slate-500 italic py-10 text-center px-4 leading-relaxed">
            Geen nieuwe prijsdalingen gedetecteerd in de afgelopen 60 minuten.
          </div>
        )}
      </div>

      {sources.length > 0 && (
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
              Live Bronnen (Google Search):
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {sources.slice(0, 2).map((source, i) => (
              <a 
                key={i} 
                href={source.uri} 
                target="_blank" 
                rel="nofollow" 
                className="text-[7px] text-indigo-400/60 hover:text-white transition-colors truncate max-w-[120px] flex items-center gap-1"
              >
                <Globe className="w-2.5 h-2.5" /> {source.title.split('|')[0].trim()}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
