
import React, { useEffect } from 'react';
import { X, Mail, MessageSquare, Clock, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        
        {/* Header */}
        <div className="relative h-48 bg-slate-900 overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-orange/20"></div>
            <div className="relative h-full flex flex-col justify-center px-10">
                <div className="bg-white/10 w-fit p-3 rounded-2xl border border-white/10 mb-4 backdrop-blur-md">
                    <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tighter">Support & Vragen</h2>
                <p className="text-slate-400 font-medium text-sm">We staan klaar om je onafhankelijk te adviseren.</p>
            </div>
            <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/10"
            >
                <X className="w-6 h-6" />
            </button>
        </div>

        {/* Body */}
        <div className="p-10 overflow-y-auto">
          <div className="space-y-6">
            
            {/* E-mail Hero */}
            <a href="mailto:info@kiesjeshop.nl" className="group flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-brand-pink/30 hover:bg-white transition-all shadow-sm">
                <div className="bg-white p-5 rounded-2xl shadow-sm group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <Mail className="w-8 h-8" />
                </div>
                <div className="flex-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Stuur een bericht</span>
                    <span className="text-xl font-black text-slate-900 group-hover:text-brand-pink transition-colors">info@kiesjeshop.nl</span>
                    <p className="text-xs text-slate-400 mt-1 font-bold">Voor zakelijke vragen en support.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-brand-pink group-hover:translate-x-1 transition-all" />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Responstijd Card */}
                <div className="flex flex-col gap-4 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100">
                    <div className="bg-white p-3 rounded-xl w-fit shadow-sm">
                        <Clock className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Reactiesnelheid</span>
                        <p className="text-sm font-black text-slate-900">Binnen 24 uur</p>
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">Op werkdagen van 09:00 tot 17:00.</p>
                    </div>
                </div>

                {/* FAQ Quick Link */}
                <button 
                    onClick={() => {
                        onClose();
                        const faqSection = document.getElementById('faq');
                        if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex flex-col gap-4 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 text-left hover:bg-white hover:border-brand-pink/20 transition-all group"
                >
                    <div className="bg-white p-3 rounded-xl w-fit shadow-sm group-hover:text-brand-pink transition-colors">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Zelfhulp</span>
                        <p className="text-sm font-black text-slate-900">Veelgestelde vragen</p>
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">Vind direct antwoord op algemene vragen.</p>
                    </div>
                </button>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-10 bg-slate-50 border-t border-slate-100 mt-auto">
           <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Kiesjeshop.nl is een volledig digitaal platform</span>
           </div>
        </div>

      </div>
    </div>
  );
};
