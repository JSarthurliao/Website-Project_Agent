import React from 'react';
import { X, Printer, Mail, MapPin, Globe } from 'lucide-react';
import { Language } from '../types';
import { personalInfo, education, experiences, certifications, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base">
              {lang === 'en' ? 'Resume Preview' : '履歷預覽'}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
              Arthur_Liao_CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'en' ? 'Print / Save PDF' : '列印 / 存為 PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-200 font-sans text-sm print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-white print:text-black">
              {personalInfo.name} <span className="text-slate-400 text-xl font-normal">({personalInfo.chineseName})</span>
            </h1>
            <p className="text-cyan-400 font-medium text-base mt-1 print:text-blue-700">
              {personalInfo.title[lang]}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location[lang]}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                Microsoft Learn Student Ambassador
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-slate-800 pb-1 print:text-blue-700 print:border-black">
              {lang === 'en' ? 'Professional Summary' : '專業概要'}
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm print:text-slate-800">
              {personalInfo.bio[lang]}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1 print:text-blue-700 print:border-black">
              {lang === 'en' ? 'Education' : '學歷'}
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-start font-semibold text-white print:text-black">
                <span>{education.institution[lang]}</span>
                <span className="text-xs text-slate-400 print:text-slate-600">{education.period}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-cyan-300 print:text-blue-600">
                <span>{education.degree[lang]}</span>
                <span className="font-mono">{education.gpa}</span>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-slate-700">
                {education.honors?.[lang].map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1 print:text-blue-700 print:border-black">
              {lang === 'en' ? 'Work & Leadership Experience' : '工作與領導經驗'}
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-sm print:text-black">
                      {exp.role[lang]} <span className="font-normal text-slate-400">| {exp.company[lang]}</span>
                    </h3>
                    <span className="text-xs text-slate-400 print:text-slate-600 shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                    {exp.description[lang].map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1 print:text-blue-700 print:border-black">
              {lang === 'en' ? 'Technical Competencies' : '專業技術'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 print:border-slate-300">
                  <p className="font-bold text-white mb-1.5 print:text-black">{cat.title[lang]}:</p>
                  <p className="text-slate-300 leading-relaxed print:text-slate-700">
                    {cat.skills.map(s => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-slate-800 pb-1 print:text-blue-700 print:border-black">
              {lang === 'en' ? 'Certifications' : '專業認證'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 print:border-slate-300">
                  <p className="font-bold text-white print:text-black">{cert.title}</p>
                  <p className="text-slate-400 text-[11px] print:text-slate-600">{cert.issuer} • {cert.issueDate}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-800/80 border-t border-slate-700 text-xs text-slate-400">
          <span>{personalInfo.name} • Portfolio 2025</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close Preview' : '關閉'}
          </button>
        </div>

      </div>
    </div>
  );
};