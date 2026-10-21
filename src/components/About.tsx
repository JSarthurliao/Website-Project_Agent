import React from 'react';
import { GraduationCap, Award, Cloud, Cpu, Compass, BookOpen, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { education } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Background & Story' : '關於我與學習背景'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Bridging Cloud Power with AI Intelligence' : '以雲端賦能，以人工智慧創新'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? 'Combining academic computer science rigor with hands-on cloud ambassador evangelism.'
              : '融合紮實的計算機科學理論與微軟雲端校園大使實戰推廣經驗。'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cloud className="w-5 h-5 text-cyan-400" />
                <span>{lang === 'en' ? 'My Technical Journey' : '我的技術探索之路'}</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {lang === 'en' ? (
                  <>
                    As a Computer Science student and <strong>Microsoft Cloud Campus Ambassador</strong>, I thrive at the intersection of scalable distributed infrastructure and cutting-edge artificial intelligence. I believe the future of software engineering lies in <em>Agentic Systems</em> — software that doesn't just display data, but perceives, reasons, and executes actions autonomously to amplify human productivity.
                  </>
                ) : (
                  <>
                    身為資訊工程學系學生與<strong>微軟雲端校園大使 (Microsoft Cloud Campus Ambassador)</strong>，我熱衷於深耕分散式雲端架構與前瞻人工智慧的交集。我深信未來的軟體典範將建立在 <em>Agentic AI (智慧代理架構)</em> 之上——不僅止於展示資訊，更能自主推理、調用工具並協同執行複雜任務，為人類工作流帶來實質賦能。
                  </>
                )}
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {lang === 'en' ? (
                  <>
                    Through workshops, hackathons, and enterprise lab internships, I have architected RAG knowledge bases with Azure OpenAI, built resilient CI/CD pipelines, and led over 500+ peers in hands-on cloud labs.
                  </>
                ) : (
                  <>
                    透過持續主辦校園技術工作坊、參加黑客松競賽與前瞻實驗室實習，我曾利用 Azure OpenAI 深度架構企業級 RAG 知識庫、搭建高可靠 CI/CD 容器化流程，並帶領超過 500 位校園學員完成雲端實戰動手做。
                  </>
                )}
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Cpu className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {lang === 'en' ? 'Agentic AI Architecture' : '自主 Agent 系統設計'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {lang === 'en' ? 'LangGraph, Multi-Agent routing & Semantic Kernel' : '熟悉 LangGraph、多智能體協調與記憶機制'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Cloud className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {lang === 'en' ? 'Cloud Native Engineering' : '雲端原生工程'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {lang === 'en' ? 'Azure Container Apps, Serverless & Infrastructure as Code' : 'Azure 容器化服務、無伺服器與自動化部屬'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Honors */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {lang === 'en' ? 'Education' : '學歷背景'}
                    </h3>
                    <p className="text-xs text-slate-400">{education.period}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {education.gpa}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">
                  {education.degree[lang]}
                </h4>
                <p className="text-xs sm:text-sm text-cyan-400 mt-0.5">
                  {education.institution[lang]}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-800">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Honors & Leadership' : '學術榮譽與社團領導'}</span>
                </div>
                <ul className="space-y-2">
                  {education.honors?.[lang].map((honor, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{lang === 'en' ? 'Core Coursework' : '核心主修課程'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Data Structures & Algorithms',
                    'Operating Systems',
                    'Computer Networks',
                    'Cloud Computing',
                    'Machine Learning & Deep Learning',
                    'Database Systems'
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs border border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};