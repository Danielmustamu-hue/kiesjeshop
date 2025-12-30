
import React from 'react';
import { X, Cpu, ArrowRight, Search, Sparkles } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultant: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose, onOpenConsultant }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-slate-100">
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-12 md:p-16 text-center">
          <div className="bg-orange-600 w-20 h-20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-orange-600/30">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-6">
            Nog niks kunnen vinden?
          </h2>
          
          <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
            Laat onze <span className="text-orange-600 font-black">AI Consultant</span> het zware werk doen. Vertel wat je zoekt en wij analyseren direct bol, Amazon en Coolblue voor je.
          </p>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                onOpenConsultant();
                onClose();
              }}
              className="w-full bg-slate-950 text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-orange-400" /> Start Gratis Consult
            </button>
            
            <button 
              onClick={onClose}
              className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              Nee bedankt, ik kijk nog even rond
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
           <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <Search className="w-3.5 h-3.5" /> 14.5k Producten Real-time Gemonitord
           </div>
        </div>
      </div>
    </div>
  );
};
