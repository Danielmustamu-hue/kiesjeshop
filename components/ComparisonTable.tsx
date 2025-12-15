import React from 'react';
import { Check, X, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Snel Overzicht</h2>
        <p className="text-slate-600">De feiten op een rij.</p>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-100">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-6 py-4 font-extrabold">Functie</th>
              <th scope="col" className="px-6 py-4 text-blue-700 font-bold">Bol.com</th>
              <th scope="col" className="px-6 py-4 text-orange-600 font-bold">Coolblue</th>
              <th scope="col" className="px-6 py-4 text-slate-800 font-bold">Amazon.nl</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Retourtermijn</td>
              <td className="px-6 py-4">30 dagen</td>
              <td className="px-6 py-4 font-semibold text-green-600">30 dagen</td>
              <td className="px-6 py-4">30 dagen</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Gratis verzending vanaf</td>
              <td className="px-6 py-4">€20,-</td>
              <td className="px-6 py-4 font-semibold text-green-600">Gratis (meeste producten)</td>
              <td className="px-6 py-4">€20,- (of Prime)</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Abonnement</td>
              <td className="px-6 py-4">Select (ca. €12/jaar)</td>
              <td className="px-6 py-4"><Minus className="w-4 h-4 text-slate-400" /></td>
              <td className="px-6 py-4 font-semibold text-green-600">Prime (ca. €4,99/mnd + Video)</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Klantenservice</td>
              <td className="px-6 py-4">Goed (Chatbot + Mens)</td>
              <td className="px-6 py-4 font-semibold text-green-600">Uitstekend (Winnaar)</td>
              <td className="px-6 py-4">Redelijk (Automated)</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Eigen bezorgdienst</td>
              <td className="px-6 py-4"><X className="w-4 h-4 text-red-400" /> (PostNL/DHL)</td>
              <td className="px-6 py-4"><Check className="w-4 h-4 text-green-500" /> (CoolblueFietst/Bus)</td>
              <td className="px-6 py-4"><X className="w-4 h-4 text-red-400" /> (DHL/Partners)</td>
            </tr>
             <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-900">Fysieke winkels</td>
              <td className="px-6 py-4"><X className="w-4 h-4 text-red-400" /></td>
              <td className="px-6 py-4"><Check className="w-4 h-4 text-green-500" /> (Ja, meerdere)</td>
              <td className="px-6 py-4"><X className="w-4 h-4 text-red-400" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};