import React from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { certifications } from '../data/portfolioData';

interface CertificationsProps {
  lang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Industry Credentials' : '專業認證與評測'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Verified Certifications' : '微軟雲端與開源官方認證'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? 'Demonstrated proficiency backed by Microsoft & industry-standard credentialing programs.'
              : '通過微軟官方與業界標準考核之雲端架構與 AI 核心能力驗證。'}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-cyan-500/40 transition-all flex flex-col justify-between group hover:scale-[1.02]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${item.badgeColor}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700/50">
                    {item.issueDate}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' ? `Issued by ${item.issuer}` : `由 ${item.issuer} 官方頒發`}
                </p>

                {item.credentialId && (
                  <p className="text-xs font-mono text-slate-500 mt-3">
                    ID: {item.credentialId}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Verified Credential' : '已通過官方驗證'}</span>
                </div>

                {item.verifyUrl && (
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
                  >
                    <span>{lang === 'en' ? 'Verify' : '查看證書'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};