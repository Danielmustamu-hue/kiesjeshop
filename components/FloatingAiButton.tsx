import React from 'react';
import { Sparkles } from 'lucide-react';

interface FloatingAiButtonProps {
  visible: boolean;
  onClick: () => void;
}

export const FloatingAiButton: React.FC<FloatingAiButtonProps> = ({ visible, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-40 
        flex items-center gap-2 
        bg-indigo-600 text-white 
        px-4 py-3 rounded-full 
        shadow-xl shadow-indigo-600/30 
        hover:bg-indigo-700 hover:scale-105 active:scale-95
        transition-all duration-300 ease-in-out
        border border-indigo-400/30
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
      `}
      aria-label="Vraag AI Advies"
    >
      <Sparkles className="w-5 h-5 animate-pulse" />
      <span className="font-bold text-sm">Hulp nodig?</span>
    </button>
  );
};