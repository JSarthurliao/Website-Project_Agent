import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Language } from '../types';
import { projects } from '../data/portfolioData';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    { id: 'All', label: lang === 'en' ? 'All Projects' : '全部專案' },
    { id: 'AI & Agents', label: lang === 'en' ? 'AI & Agents' : 'AI 智慧代理' },
    { id: 'Cloud & Azure', label: lang === 'en' ? 'Cloud & Azure' : '微軟雲端 Azure' },
    { id: 'Full Stack', label: lang === 'en' ? 'Full Stack' : '全端應用' },
    { id: 'Open Source', label: lang === 'en' ? 'Open Source' : '開源工具' },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Portfolio Showcase' : '精選專案成果'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Featured AI & Cloud Projects' : '代表作品與技術展示'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? 'Real-world implementations leveraging Azure services, autonomous LLM agents, and modern web architectures.'
              : '實際落地之 Azure 雲端微服務、自主 Agent 協同應用與高效能前端系統。'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedFilter === opt.id
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-600/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-700/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col group hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Project Card Header Banner */}
              <div className={`h-40 bg-gradient-to-r ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 text-cyan-300 text-xs font-semibold border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 text-slate-950 text-xs font-bold shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Featured' : '焦點亮點'}</span>
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-200/90 line-clamp-1 mt-0.5">
                    {project.subtitle[lang]}
                  </p>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description[lang]}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {lang === 'en' ? 'Key Achievements & Architecture:' : '關鍵技術指標與架構：'}
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights[lang].map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Tags & Actions */}
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg border border-slate-700 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 px-3.5 py-2 rounded-lg shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};