
import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Snel Overzicht</h2>
        <p className="text-slate-600">De feiten op een rij.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 w-full overflow-hidden">
        <table className="w-full text-left text-slate-600 table-fixed border-collapse">
          <caption className="sr-only">Vergelijking tussen bol, Coolblue en Amazon</caption>
          <thead className="text-[10px] text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-3 py-4 font-black w-[35%]">Functie</th>
              <th scope="col" className="px-2 py-4 text-blue-700 font-bold text-center">bol</th>
              <th scope="col" className="px-2 py-4 text-orange-600 font-bold text-center">Coolblue</th>
            </tr>
          </thead>
          <tbody className="text-[11px] sm:text-xs">
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Retour</th>
              <td className="px-2 py-3.5 text-center">30 dg</td>
              <td className="px-2 py-3.5 text-center font-bold text-green-600">30 dg</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Gratis verz.</th>
              <td className="px-2 py-3.5 text-center">€20,-</td>
              <td className="px-2 py-3.5 text-center font-bold text-green-600 leading-tight">Ja</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Abonnement</th>
              <td className="px-2 py-3.5 text-center text-[10px]">Select</td>
              <td className="px-2 py-3.5 text-center flex justify-center"><Minus className="w-3 h-3 text-slate-300" /></td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Service</th>
              <td className="px-2 py-3.5 text-center">Goed</td>
              <td className="px-2 py-3.5 text-center font-bold text-green-600">Winnaar</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Bezorging</th>
              <td className="px-2 py-3.5 text-center flex justify-center"><X className="w-3 h-3 text-red-400" /></td>
              <td className="px-2 py-3.5 text-center"><div className="flex justify-center"><Check className="w-3 h-3 text-green-500" /></div></td>
            </tr>
             <tr className="hover:bg-slate-50/50">
              <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">Winkels</th>
              <td className="px-2 py-3.5 text-center flex justify-center"><X className="w-3 h-3 text-red-400" /></td>
              <td className="px-2 py-3.5 text-center"><div className="flex justify-center"><Check className="w-3 h-3 text-green-500" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
