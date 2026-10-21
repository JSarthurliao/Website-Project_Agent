import React, { useState } from 'react';
import { Mail, Send, Check, Copy, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with nice confetti celebration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti explosion
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Get In Touch' : '聯絡與合作'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? "Let's Build Something Amazing" : '期待與您交流與合作'}
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            {lang === 'en'
              ? "Whether you have an internship opportunity, workshop invite, or a project in mind, I'd love to connect!"
              : '無論是實習工作機會、雲端技術工作坊邀請或專案技術交流，隨時歡迎與我聯繫！'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>{lang === 'en' ? 'Contact Details' : '直接聯繫方式'}</span>
                </h3>
                <p className="text-sm text-slate-300">
                  {lang === 'en'
                    ? 'Feel free to shoot me an email directly or connect across developer platforms.'
                    : '您可以直接發送電子郵件或於社群平台建立聯繫。'}
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <p className="text-sm text-slate-200 font-mono truncate">{personalInfo.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-700/80">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm text-slate-200 font-medium">{personalInfo.location[lang]}</p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {lang === 'en' ? 'Professional Profiles' : '社群與專業個人檔案'}
                </p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60">
              
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'en' ? 'Message Sent Successfully!' : '訊息已順利送出！'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    {lang === 'en'
                      ? 'Thank you for reaching out. I will get back to your inquiry promptly.'
                      : '非常感謝您的來信，我將儘速回覆您的訊息！'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {lang === 'en' ? 'Your Name' : '姓名 / 稱呼'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'en' ? 'John Doe' : '您的稱呼'}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {lang === 'en' ? 'Your Email' : '電子信箱'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {lang === 'en' ? 'Subject / Topic' : '主旨 / 洽詢項目'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === 'en' ? 'Internship Inquiry / Cloud Workshop / Collaboration' : '實習機會 / 工作坊邀請 / 專案交流'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {lang === 'en' ? 'Message' : '詳細訊息內容'} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Write your message here...' : '請留下您的訊息或合作想法...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'en' ? 'Sending...' : '發送中...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'en' ? 'Send Message' : '立即送出訊息'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};