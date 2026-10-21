import React from 'react';
import { ArrowRight, Download, Mail, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Language } from '../types';
import { personalInfo, quickStats } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Status Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-inner shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status[lang]}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {lang === 'en' ? (
                <>
                  Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
                  <br />
                  <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Empowering Ideas with <span className="text-cyan-400 underline decoration-cyan-500/40 underline-offset-8">Cloud & AI</span>
                  </span>
                </>
              ) : (
                <>
                  你好，我是 <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">{personalInfo.name}</span>
                  <span className="text-slate-400 text-2xl ml-2 font-normal">({personalInfo.chineseName})</span>
                  <br />
                  <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-bold">
                    專注於 <span className="text-cyan-400 underline decoration-cyan-500/40 underline-offset-8">雲端運算 & AI Agent</span> 創新
                  </span>
                </>
              )}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio[lang]}
            </p>

            {/* Social & Contact Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{lang === 'en' ? 'View Projects' : '瀏覽專案作品'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 transition-all hover:text-white cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'View Resume / CV' : '下載 / 預覽履歷'}</span>
              </button>

              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-cyan-400 border border-slate-700/60 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-cyan-400 border border-slate-700/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-cyan-400 border border-slate-700/60 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Code Terminal & Badges Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-2xl p-6 shadow-2xl relative border border-slate-700/60">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>arthur-agent.ts</span>
                </div>
                <div className="w-3 h-3" />
              </div>

              {/* Code Snippet */}
              <div className="mt-4 font-mono text-xs sm:text-sm space-y-2 text-slate-300 leading-relaxed">
                <p className="text-slate-500">// Microsoft Cloud Campus Ambassador</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-yellow-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">name</span>: <span className="text-emerald-400">'{personalInfo.name}'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">role</span>: <span className="text-emerald-400">'AI & Cloud Engineer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">certifications</span>: [
                  <span className="text-amber-300">'AZ-900'</span>,{' '}
                  <span className="text-amber-300">'AI-900'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">focusAreas</span>: [
                  <span className="text-cyan-300">'Azure OpenAI'</span>,{' '}
                  <span className="text-cyan-300">'LangGraph'</span>,{' '}
                  <span className="text-cyan-300">'Next.js'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">openToWork</span>: <span className="text-emerald-400">true</span>
                </p>
                <p>&#125;;</p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Validated Credentials</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Agent Ready</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 text-center group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {stat.label[lang]}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.subtext[lang]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};