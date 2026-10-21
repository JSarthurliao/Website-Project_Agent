import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Building2 } from 'lucide-react';
import { Language } from '../types';
import { experiences } from '../data/portfolioData';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Track Record' : '專業經歷與歷程'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Experience & Leadership' : '實習歷練與校園大使影響力'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? 'Proven background driving developer communities and engineering cloud-scale software.'
              : '具備微軟校園技術推廣、AI 軟體工程實習與自主專案實戰經驗。'}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700/80 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-transform">
                {exp.featured ? (
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all hover:border-cyan-500/40">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role[lang]}
                      </h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                        exp.type === 'Ambassador'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : exp.type === 'Internship'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium text-sm">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company[lang]}</span>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location[lang]}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-300">
                  {exp.description[lang].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};