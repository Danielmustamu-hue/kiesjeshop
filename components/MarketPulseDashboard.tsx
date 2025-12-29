
import React from 'react';
import { BarChart3, TrendingDown, Gauge, Zap, Info, RefreshCcw, Loader2 } from 'lucide-react';

interface MarketPulseDashboardProps {
  onRefresh?: () => void;
  isLoading?: boolean;
}

export const MarketPulseDashboard: React.FC<MarketPulseDashboardProps> = ({ onRefresh, isLoading }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sentiment Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600">
              <TrendingDown className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Gunstig</span>
          </div>
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Prijs-Index</h4>
          <p className="text-2xl font-black text-slate-950 tracking-tighter mb-4">-4.2% <span className="text-slate-400 text-sm font-medium">vs vorige week</span></p>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[70%] rounded-full"></div>
          </div>
        </div>

        {/* Speed Card */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl group">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-white/10 p-3 rounded-2xl text-indigo-400">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest border border-indigo-400/30 px-3 py-1 rounded-full">Optimal</span>
          </div>
          <h4 className="text-sm font-black text-white/60 uppercase tracking-tight mb-2">Netwerk Snelheid</h4>
          <p className="text-2xl font-black text-white tracking-tighter mb-4">98.9% <span className="text-white/30 text-sm font-medium">Uptime</span></p>
          <div className="flex gap-1">
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i < 9 ? 'bg-indigo-500' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </div>

        {/* Service Gauge */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-orange-50 p-3 rounded-2xl text-orange-600">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
            </div>
          </div>
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Service Trust Score</h4>
          <p className="text-2xl font-black text-slate-950 tracking-tighter mb-1">9.2/10</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
            <Info className="w-3 h-3" /> Gebaseerd op 12.5k datapunten
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button 
          onClick={onRefresh}
          disabled={isLoading}
          className="group flex items-center gap-3 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-600 hover:text-white px-8 py-4 rounded-2xl border border-indigo-600/20 transition-all font-black text-[10px] uppercase tracking-[0.2em] disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Scanning Web...
            </>
          ) : (
            <>
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Update Live Insights
            </>
          )}
        </button>
      </div>
    </div>
  );
};
