import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md">
              <Sparkles className="w-4 h-4 text-cyan-200" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {personalInfo.name} <span className="text-slate-400 font-normal">({personalInfo.chineseName})</span>
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'en' ? 'Microsoft Cloud Campus Ambassador & AI Engineer' : '微軟雲端校園大使 & AI 應用工程師'}
              </p>
            </div>
          </div>

          {/* Center: Tech Stack Note */}
          <div className="text-xs text-slate-400 text-center flex items-center gap-1">
            <span>{lang === 'en' ? 'Designed & Developed with' : '以'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>{lang === 'en' ? 'using React, Vite & Tailwind CSS' : 'React、Vite 與 Tailwind CSS 精心打造'}</span>
          </div>

          {/* Right: Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer group"
          >
            <span>{lang === 'en' ? 'Back to top' : '返回頂部'}</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};