import React, { useState } from 'react';
import { Cpu, Sparkles, Cloud, Code2, Database, Layers } from 'lucide-react';
import { Language } from '../types';
import { skillCategories } from '../data/portfolioData';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : [skillCategories[activeCategory]];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Core Capabilities' : '專業技術矩陣'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Skills & Tech Stack' : '技術架構與工程能力'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? 'Hands-on proficiency honed across cloud architectures, LLM frameworks, and modern web applications.'
              : '歷經雲端架構設計、LLM 智慧體開發與全端應用實務累積之工程專業。'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
            }`}
          >
            {lang === 'en' ? 'All Skills' : '全部技術'}
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === idx
                  ? 'bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.title[lang]}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat, cIdx) => (
            <div
              key={cIdx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-700/60 transition-all hover:border-slate-600"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="font-bold text-white text-lg">
                  {cat.title[lang]}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};