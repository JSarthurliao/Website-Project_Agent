import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, Sparkles, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : '關於我' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : '經歷' },
    { href: '#skills', label: lang === 'en' ? 'Skills' : '專業技能' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : '精選專案' },
    { href: '#certifications', label: lang === 'en' ? 'Certifications' : '專業認證' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : '聯絡我' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-cyan-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:to-cyan-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-cyan-400 font-medium tracking-wide">
                {lang === 'en' ? 'Microsoft Ambassador' : '微軟雲端校園大使'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? '中文' : 'EN'}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'Resume' : '履歷預覽'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="p-2 text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700/80"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700/80"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 font-medium text-sm transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Resume' : '預覽履歷'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};