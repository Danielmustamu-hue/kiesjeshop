
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
        fixed bottom-10 left-10 z-[80] 
        flex items-center gap-3 
        bg-slate-950 text-white 
        pl-4 pr-6 py-4 rounded-3xl 
        shadow-[0_20px_50px_rgba(15,23,42,0.3)] 
        hover:bg-orange-600 hover:scale-105 active:scale-95
        transition-all duration-500 ease-in-out
        border border-white/10 group
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      aria-label="Vraag AI Consultant"
    >
      <div className="relative">
        <Cpu className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
        <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-20 animate-pulse"></div>
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Consultant</span>
        <span className="text-[8px] font-bold text-slate-400 group-hover:text-orange-100 uppercase tracking-widest mt-0.5">Vraag advies</span>
      </div>
    </button>
  );
};
