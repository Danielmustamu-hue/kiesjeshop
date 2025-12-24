import React from 'react';
import { Check, X, Minus, ArrowRight } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block text-center mb-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Snel Overzicht</h2>
        <p className="text-slate-600 font-medium">De Grote Drie direct vergeleken.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full overflow-hidden relative">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left text-slate-600 min-w-[500px] border-collapse">
            <caption className="sr-only">Vergelijking tussen bol, Coolblue en Amazon</caption>
            <thead className="text-[10px] text-slate-700 uppercase bg-slate-50/80 border-b border-slate-100">
              <tr>
                <th scope="col" className="px-4 py-5 font-black w-[25%] bg-slate-50/80 sticky left-0 z-10 border-r border-slate-100">Functie</th>
                <th scope="col" className="px-2 py-5 text-blue-700 font-black text-center">bol</th>
                <th scope="col" className="px-2 py-5 text-orange-600 font-black text-center">Coolblue</th>
                <th scope="col" className="px-2 py-5 text-yellow-600 font-black text-center">Amazon</th>
              </tr>
            </thead>
            <tbody className="text-[11px] sm:text-xs">
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Retour</th>
                <td className="px-2 py-4 text-center">30 dg</td>
                <td className="px-2 py-4 text-center">30 dg</td>
                <td className="px-2 py-4 text-center">30 dg</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Gratis verz.</th>
                <td className="px-2 py-4 text-center">v.a. €20</td>
                <td className="px-2 py-4 text-center font-bold text-green-600">Altijd</td>
                <td className="px-2 py-4 text-center text-[10px]">Prime / v.a. €25</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Abonnement</th>
                <td className="px-2 py-4 text-center">
                  <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[9px] font-black inline-block">SELECT</span>
                </td>
                <td className="px-2 py-4 text-center">
                  <div className="flex justify-center"><Minus className="w-3 h-3 text-slate-300" /></div>
                </td>
                <td className="px-2 py-4 text-center">
                  <span className="bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded-full text-[9px] font-black inline-block">PRIME</span>
                </td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Service</th>
                <td className="px-2 py-4 text-center">Goed</td>
                <td className="px-2 py-4 text-center font-bold text-orange-500 uppercase tracking-tighter">Winnaar</td>
                <td className="px-2 py-4 text-center">Standaard</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Zondag-lev.</th>
                <td className="px-2 py-4 text-center"><div className="flex justify-center"><Check className="w-4 h-4 text-green-500" /></div></td>
                <td className="px-2 py-4 text-center"><div className="flex justify-center"><Check className="w-4 h-4 text-green-500" /></div></td>
                <td className="px-2 py-4 text-center"><div className="flex justify-center"><X className="w-4 h-4 text-red-300" /></div></td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 bg-white sticky left-0 z-10 border-r border-slate-50">Afhaalptn.</th>
                <td className="px-2 py-4 text-center">Zeer veel</td>
                <td className="px-2 py-4 text-center">Gematigd</td>
                <td className="px-2 py-4 text-center">Veel</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <th scope="row" className="px-4 py-4 font-bold text-slate-900 italic bg-white sticky left-0 z-10 border-r border-slate-50">Prijsfocus</th>
                <td className="px-2 py-4 text-center">Allround</td>
                <td className="px-2 py-4 text-center">Kwaliteit</td>
                <td className="px-2 py-4 text-center font-bold text-green-600 uppercase tracking-tighter">Budget</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:hidden mt-4 text-center flex items-center justify-center gap-2">
        <ArrowRight className="w-3 h-3 text-slate-400" />
        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Swipe voor Amazon & Details</p>
        <ArrowRight className="w-3 h-3 text-slate-400" />
      </div>
    </div>
  );
};