import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese or toggleable to English
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />

    </div>
  );
};

export default App;