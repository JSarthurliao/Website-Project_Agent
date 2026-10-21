import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-800/90 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 border border-slate-700/80 hover:border-cyan-400 shadow-xl backdrop-blur-md transition-all transform hover:-translate-y-1"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};