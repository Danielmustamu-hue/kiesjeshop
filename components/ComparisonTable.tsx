
import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-slate-950 tracking-tighter mb-4">Benchmarks<span className="brand-text-gradient">.</span></h2>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">Technische specificaties van de Big 3.</p>
      </div>

      <div className="intelligence-card p-10 overflow-hidden border border-slate-100/50">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse">
            <thead className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50">
              <tr>
                <th className="px-8 py-8 w-1/3">Feature</th>
                <th className="px-4 py-8 text-center text-blue-500">bol</th>
                <th className="px-4 py-8 text-center text-brand-orange">Coolblue</th>
                <th className="px-4 py-8 text-center text-yellow-600">Amazon</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-slate-700">
              <tr className="border-b border-slate-50">
                <td className="px-8 py-8">Gratis Verzending</td>
                <td className="px-4 py-8 text-center">v.a. €20</td>
                <td className="px-4 py-8 text-center text-emerald-500">ALTIJD</td>
                <td className="px-4 py-8 text-center">Prime / v.a. €25</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="px-8 py-8">Abonnement Model</td>
                <td className="px-4 py-8 text-center"><span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black tracking-widest uppercase">Select</span></td>
                <td className="px-4 py-8 text-center"><Minus className="w-4 h-4 mx-auto text-slate-200" /></td>
                <td className="px-4 py-8 text-center"><span className="px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-[9px] font-black tracking-widest uppercase">Prime</span></td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="px-8 py-8">Service Focus</td>
                <td className="px-4 py-8 text-center">Allround</td>
                <td className="px-4 py-8 text-center text-brand-pink uppercase tracking-widest text-[10px]">Premium Expert</td>
                <td className="px-4 py-8 text-center">Prijs-vechter</td>
              </tr>
              <tr>
                <td className="px-8 py-8">Zondag Levering</td>
                <td className="px-4 py-8 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-4 py-8 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                <td className="px-4 py-8 text-center"><X className="w-5 h-5 mx-auto text-slate-200" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
