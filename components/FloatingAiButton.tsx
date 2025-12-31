
import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

interface FloatingAiButtonProps {
  visible: boolean;
  onClick: () => void;
}

export const FloatingAiButton: React.FC<FloatingAiButtonProps> = ({ visible, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-8 left-8 md:bottom-12 md:left-12 z-[80] 
        flex items-center gap-4 
        bg-slate-950 text-white 
        pl-5 pr-7 py-5 rounded-[2.5rem] 
        shadow-[0_25px_60px_rgba(15,23,42,0.4)] 
        hover:bg-brand-pink hover:scale-105 active:scale-95
        transition-all duration-500 ease-in-out
        border border-white/10 group ai-btn-pulse
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      aria-label="Vraag AI Adviseur"
    >
      <div className="relative">
        <div className="bg-orange-500 p-2.5 rounded-2xl group-hover:bg-white transition-colors">
           <Cpu className="w-5 h-5 text-white group-hover:text-brand-pink transition-colors" />
        </div>
        <div className="absolute -top-1 -right-1">
          <Sparkles className="w-4 h-4 text-orange-300 animate-bounce" />
        </div>
      </div>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-black uppercase tracking-[0.2em]">Adviseur</span>
        <span className="text-[8px] font-bold text-slate-400 group-hover:text-white/80 uppercase tracking-widest mt-0.5">Vraag Direct Advies</span>
      </div>
    </button>
  );
};
