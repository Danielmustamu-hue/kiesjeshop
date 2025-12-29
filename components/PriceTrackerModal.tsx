
import React, { useState } from 'react';
import { X, Bell, Mail, TrendingDown, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { ProductComparison } from '../data/products';
import { API_CONFIG } from '../config';

interface PriceTrackerModalProps {
  product: ProductComparison;
  isOpen: boolean;
  onClose: () => void;
}

export const PriceTrackerModal: React.FC<PriceTrackerModalProps> = ({ product, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(API_CONFIG.PRICE_ALERT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          product: product.name,
          targetPrice: targetPrice,
          type: 'Price Alert Request',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(onClose, 2500);
      } else {
        throw new Error('API failure');
      }
    } catch (err) {
      console.error('Price alert error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-10">
          <div className="flex justify-between items-start mb-8">
            <div className="bg-indigo-600 p-3 rounded-2xl">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Alert Geactiveerd!</h3>
              <p className="text-slate-500 font-medium">De AI houdt {product.name} voor je in de gaten.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-black text-slate-950 tracking-tighter mb-2">Prijsalert instellen.</h2>
              <p className="text-slate-500 font-medium mb-8">Ontvang direct een mail zodra de prijs bij bol of Amazon daalt.</p>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
                <img src={product.image} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-black text-slate-900 leading-tight">{product.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.category}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-5 top-5 w-5 h-5 text-slate-400" />
                  <input 
                    required
                    type="email" 
                    placeholder="E-mailadres" 
                    className={`w-full pl-14 pr-6 py-5 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${status === 'error' ? 'border-rose-500' : 'border-slate-200'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <TrendingDown className="absolute left-5 top-5 w-5 h-5 text-slate-400" />
                  <input 
                    required
                    type="number" 
                    placeholder="Doelprijs (bijv. 299)" 
                    className={`w-full pl-14 pr-6 py-5 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${status === 'error' ? 'border-rose-500' : 'border-slate-200'}`}
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                  />
                </div>

                <button 
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Activeer Alert'}
                </button>
              </form>

              {status === 'error' && (
                <p className="mt-4 text-center text-rose-500 text-xs font-bold uppercase tracking-widest">
                  Kon alert niet instellen. Probeer het opnieuw.
                </p>
              )}

              <div className="mt-8 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">100% AVG-proof • Geen Spam</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
