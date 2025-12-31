
import React from 'react';
import { BarChart3, TrendingDown, Gauge, Zap, Info, RefreshCcw, Loader2 } from 'lucide-react';

interface MarketPulseDashboardProps {
  onRefresh?: () => void;
  isLoading?: boolean;
}

export const MarketPulseDashboard: React.FC<MarketPulseDashboardProps> = ({ onRefresh, isLoading }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sentiment Card */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-8">
            <div className="bg-pink-50 p-4 rounded-2xl text-brand-pink shadow-inner">
              <TrendingDown className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black text-brand-pink uppercase tracking-widest bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100">Gunstig</span>
          </div>
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Prijs-Index</h4>
          <p className="text-3xl font-black text-slate-950 tracking-tighter mb-5">-4.2% <span className="text-slate-400 text-sm font-medium">vs vorige week</span></p>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
            <div className="brand-gradient h-full w-[70%] rounded-full"></div>
          </div>
        </div>

        {/* Speed Card */}
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3.5rem] p-10 text-white shadow-2xl group border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 brand-gradient opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="bg-white/10 p-4 rounded-2xl text-brand-pink">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-black text-brand-pink uppercase tracking-widest border border-brand-pink/30 px-4 py-1.5 rounded-full">Optimal</span>
          </div>
          <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] mb-3 relative z-10">Sync Speed</h4>
          <p className="text-3xl font-black text-white tracking-tighter mb-5 relative z-10">98.9% <span className="text-white/30 text-sm font-medium">Uptime</span></p>
          <div className="flex gap-1.5 relative z-10">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 9 ? 'brand-gradient' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </div>

        {/* Service Gauge */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-8">
            <div className="bg-orange-50 p-4 rounded-2xl text-brand-orange shadow-inner">
              <Gauge className="w-6 h-6" />
            </div>
            <div className="flex -space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-sm"></div>
              <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-[8px] font-black text-white">AZ</div>
            </div>
          </div>
          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Service Trust</h4>
          <p className="text-3xl font-black text-slate-950 tracking-tighter mb-2">9.2/10</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-brand-pink" /> 12.5k geverifieerde checks
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <button 
          onClick={onRefresh}
          disabled={isLoading}
          className="group flex items-center gap-4 brand-gradient text-white px-10 py-5 rounded-2xl shadow-xl hover:brightness-110 transition-all font-black text-[11px] uppercase tracking-[0.3em] disabled:opacity-50 active:scale-95"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Scanning Web...
            </>
          ) : (
            <>
              <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
              Ververs Market Data
            </>
          )}
        </button>
      </div>
    </div>
  );
};
