export type Language = 'en' | 'zh';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface QuickStat {
  label: { en: string; zh: string };
  value: string;
  subtext: { en: string; zh: string };
}

export interface ExperienceItem {
  id: string;
  role: { en: string; zh: string };
  company: { en: string; zh: string };
  period: string;
  location: { en: string; zh: string };
  type: 'Ambassador' | 'Internship' | 'Leadership' | 'Research';
  description: {
    en: string[];
    zh: string[];
  };
  skills: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: { en: string; zh: string };
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    description?: { en: string; zh: string };
  }[];
}

export interface ProjectItem {
  id: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  category: 'AI & Agents' | 'Cloud & Azure' | 'Full Stack' | 'Open Source';
  tags: string[];
  highlights: { en: string[]; zh: string[] };
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  badgeColor: string;
}

export interface EducationItem {
  degree: { en: string; zh: string };
  institution: { en: string; zh: string };
  period: string;
  gpa?: string;
  honors?: { en: string[]; zh: string[] };
}