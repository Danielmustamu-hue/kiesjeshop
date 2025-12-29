
import React, { useState, useEffect } from 'react';
import { Terminal, Activity, Zap, ArrowDownCircle, AlertCircle, RefreshCcw } from 'lucide-react';

interface MarketSignal {
  message: string;
  type: 'price' | 'stock' | 'system' | 'deal';
  shop: 'bol' | 'amazon' | 'coolblue';
}

const SIGNALS: MarketSignal[] = [
  { message: "Prijsdaling gedetecteerd: Sony WH-1000XM5 (-€12)", type: 'price', shop: 'amazon' },
  { message: "Voorraad update: Philips Airfryer XXL nu leverbaar", type: 'stock', shop: 'bol' },
  { message: "Nieuwe service-score geanalyseerd: Coolblue (9.8/10)", type: 'system', shop: 'coolblue' },
  { message: "Flash Deal: Dyson V15 tijdelijk scherpst geprijsd", type: 'deal', shop: 'amazon' },
  { message: "bol Select: Zondagbezorging bevestigd voor regio Amstelveen", type: 'system', shop: 'bol' },
  { message: "Prijs-match: Apple Watch Series 9 gesynchroniseerd", type: 'price', shop: 'coolblue' },
  { message: "Nieuwe review data verwerkt voor: Aranet4 Home", type: 'system', shop: 'amazon' },
  { message: "Stock Alert: Keychron K2 bijna uitverkocht", type: 'stock', shop: 'bol' }
];

export const LiveMarketTicker: React.FC = () => {
  const [activeSignals, setActiveSignals] = useState<MarketSignal[]>(SIGNALS.slice(0, 5));
  const [totalAnalyzed, setTotalAnalyzed] = useState(14200);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSignal = SIGNALS[Math.floor(Math.random() * SIGNALS.length)];
      setActiveSignals(prev => [nextSignal, ...prev].slice(0, 5));
      setTotalAnalyzed(prev => prev + Math.floor(Math.random() * 5) + 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getSignalIcon = (type: string) => {
    switch (type) {
      case 'price': return <ArrowDownCircle className="w-3 h-3 text-emerald-400" />;
      case 'stock': return <AlertCircle className="w-3 h-3 text-amber-400" />;
      case 'deal': return <Zap className="w-3 h-3 text-indigo-400" />;
      default: return <RefreshCcw className="w-3 h-3 text-slate-400 animate-spin-slow" />;
    }
  };

  const getShopColor = (shop: string) => {
    switch (shop) {
      case 'bol': return 'text-blue-400';
      case 'amazon': return 'text-yellow-500';
      case 'coolblue': return 'text-orange-500';
      default: return 'text-white';
    }
  };

  return (
    <div className="flex flex-col h-full font-mono relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">Terminal V2.5</span>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-white tracking-tighter tabular-nums">
            {totalAnalyzed.toLocaleString()}
          </span>
          <span className="block text-[7px] font-black text-indigo-400 uppercase tracking-widest">Data Points Scanned</span>
        </div>
      </div>

      {/* Signal Feed */}
      <div className="flex-grow space-y-4 overflow-hidden mask-fade-bottom">
        {activeSignals.map((signal, i) => (
          <div 
            key={i} 
            className={`flex items-start gap-3 transition-all duration-1000 animate-in slide-in-from-left-4 fade-in
              ${i === 0 ? 'opacity-100 scale-100' : i === 1 ? 'opacity-60 scale-95' : 'opacity-30 scale-90'}`}
          >
            <div className="mt-1 shrink-0">{getSignalIcon(signal.type)}</div>
            <div className="flex flex-col">
              <span className={`text-[8px] font-black uppercase tracking-widest ${getShopColor(signal.shop)}`}>
                {signal.shop}
              </span>
              <span className="text-[10px] text-white/90 leading-tight font-medium">
                {signal.message}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between opacity-50">
        <div className="flex items-center gap-2 text-[8px] font-bold text-indigo-300">
          <Terminal className="w-3 h-3" />
          <span className="uppercase tracking-widest">Latency: 14ms</span>
        </div>
        <div className="text-[8px] font-black uppercase tracking-widest text-indigo-300">
          Amsterdam-Zuid Node
        </div>
      </div>
    </div>
  );
};
