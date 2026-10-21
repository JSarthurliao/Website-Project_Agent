import { QuickStat, ExperienceItem, SkillCategory, ProjectItem, CertificationItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'JS_arthurliao',
  chineseName: '廖哲賢',
  title: {
    en: 'AI Engineer & Microsoft Cloud Campus Ambassador',
    zh: 'AI 應用工程師 & 微軟雲端校園大使'
  },
  bio: {
    en: 'Passionate computer science student, Microsoft Learn Cloud Campus Ambassador, and AI developer building intelligent agent workflows, cloud-native applications, and scalable web solutions. Focused on bridging cutting-edge LLMs with practical human-centric software.',
    zh: '微軟雲端校園大使 (Microsoft Cloud Campus Ambassador) 與 AI 開發者，熱衷於探索大型語言模型 (LLM) 與自主 Agent 架構、雲端原生應用與現代化 Web 技術，致力於打造直覺且具影響力的智能解決方案。'
  },
  location: {
    en: 'Taipei, Taiwan',
    zh: '台灣 台北'
  },
  status: {
    en: '🟢 Available for 2025/2026 AI & Cloud Engineering Internships',
    zh: '🟢 積極尋求 2025/2026 AI 與雲端工程實習機會'
  },
  email: 'arthurjsliao@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const quickStats: QuickStat[] = [
  {
    label: { en: 'Cloud Workshops Led', zh: '主辦雲端技術工作坊' },
    value: '8+',
    subtext: { en: '500+ student attendees', zh: '累計逾 500+ 位學員' }
  },
  {
    label: { en: 'Projects Shipped', zh: '已交付專案' },
    value: '15+',
    subtext: { en: 'AI Agents, Azure & Web', zh: '涵蓋 AI Agent、Azure 與全端' }
  },
  {
    label: { en: 'Certifications', zh: '專業雲端證照' },
    value: '3x',
    subtext: { en: 'Microsoft Azure & AI', zh: '微軟官方 Azure 與 AI 認證' }
  },
  {
    label: { en: 'Hackathon Awards', zh: '黑客松競賽獲獎' },
    value: '3+',
    subtext: { en: 'Innovation & AI Track', zh: 'AI 創新組與最佳技術獎' }
  }
];

export const education: EducationItem = {
  degree: {
    en: 'B.S. in Computer Science and Information Engineering',
    zh: '資訊工程學系 學士'
  },
  institution: {
    en: 'National University / College of Engineering',
    zh: '國立大學 資訊工程學院'
  },
  period: '2022 - 2026 (Expected)',
  gpa: '3.88 / 4.00 (Top 5%)',
  honors: {
    en: [
      'Presidential Academic Excellence Award (2023, 2024)',
      'Dean\'s List Scholar',
      'Campus Open Source & Tech Club Lead'
    ],
    zh: [
      '書卷獎 / 學業優異獎 (2023, 2024)',
      '院長榮譽榜 (Dean\'s List)',
      '校園開源技術社團核心幹部'
    ]
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: 'msla',
    role: {
      en: 'Microsoft Cloud Campus Ambassador',
      zh: '微軟雲端校園大使 (Microsoft Ambassador)'
    },
    company: {
      en: 'Microsoft Taiwan',
      zh: '台灣微軟 (Microsoft Taiwan)'
    },
    period: '2024 - Present',
    location: { en: 'Taipei, Taiwan', zh: '台北，台灣' },
    type: 'Ambassador',
    featured: true,
    description: {
      en: [
        'Organized campus-wide technical workshops on Azure OpenAI Service, GitHub Copilot, and cloud architecture, impacting 500+ university students.',
        'Mentored student developers during hackathons and guided them in deploying serverless solutions using Azure Container Apps and Functions.',
        'Collaborated with Microsoft FTEs and MVP community to create developer learning modules and practical hands-on labs.'
      ],
      zh: [
        '策劃並主講校園雲端工作坊，聚焦 Azure OpenAI、GitHub Copilot 與雲端架構設計，影響超過 500 名大專院校學生。',
        '於黑客松與技術黑客營擔任技術導師，指導學員運用 Azure Container Apps 與 Serverless 技術快速落地原型。',
        '與微軟專業同仁及 MVP 社群密切合作，共同編寫繁體中文技術教案與雲端實作 Lab。'
      ]
    },
    skills: ['Microsoft Azure', 'Azure OpenAI', 'GitHub Copilot', 'Public Speaking', 'Community Leadership']
  },
  {
    id: 'ai-intern',
    role: {
      en: 'AI Software Engineer Intern',
      zh: 'AI 軟體工程實習生'
    },
    company: {
      en: 'NextGen Cloud Labs',
      zh: '前瞻雲端智慧實驗室'
    },
    period: '2024.06 - 2024.09',
    location: { en: 'Taipei / Remote', zh: '台北 / 遠端' },
    type: 'Internship',
    description: {
      en: [
        'Architected a Multi-Agent RAG system integrating LangChain and Azure Cosmos DB for enterprise document retrieval, reducing query latency by 42%.',
        'Developed RESTful endpoints with FastAPI and implemented JWT authentication and role-based access control (RBAC).',
        'Configured automated CI/CD pipelines via GitHub Actions with automated linting, unit testing, and Docker image publishing.'
      ],
      zh: [
        '架構 Multi-Agent RAG 智慧知識庫系統，整合 LangChain 與 Azure Cosmos DB，大幅提升檢索精準度並降低 42% 查詢延遲。',
        '採用 FastAPI 開發高效能 RESTful API，並實作安全 JWT 身份驗證與角色權限管控 (RBAC)。',
        '建置 GitHub Actions CI/CD 自動化流程，涵蓋代碼品質檢查、單元測試以及 Docker 容器映像檔自動部屬。'
      ]
    },
    skills: ['Python', 'FastAPI', 'LangChain', 'Azure Cosmos DB', 'Docker', 'CI/CD']
  },
  {
    id: 'lab-research',
    role: {
      en: 'Undergraduate AI Researcher',
      zh: '智慧計算實驗室 大專生研究員'
    },
    company: {
      en: 'Intelligent Systems Lab',
      zh: '大學智慧系統與網路實驗室'
    },
    period: '2023 - 2024',
    location: { en: 'Taipei, Taiwan', zh: '台北，台灣' },
    type: 'Research',
    description: {
      en: [
        'Investigated autonomous agent decision-making algorithms and memory mechanisms using tree-of-thoughts prompting and vector databases.',
        'Co-authored research findings submitted to national computer conference on agentic workflows and human-in-the-loop validation.'
      ],
      zh: [
        '深入研究自主 Agent 決策演算法與記憶體持久化機制，結合思維樹 (Tree-of-Thoughts) 與向量資料庫優化複雜任務拆解。',
        '共同撰寫學術研究論文，探討結合人類反饋之 Agentic Workflows 與多步推理評測。'
      ]
    },
    skills: ['PyTorch', 'Vector DB', 'Prompt Engineering', 'Academic Research']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'AI & Autonomous Agents', zh: '人工智慧與智能 Agent' },
    icon: 'Sparkles',
    skills: [
      { name: 'Azure OpenAI & GPT-4o', level: 95 },
      { name: 'LangChain & LangGraph', level: 90 },
      { name: 'Semantic Kernel (MSFT)', level: 88 },
      { name: 'RAG & Vector Search', level: 92 },
      { name: 'Prompt Engineering', level: 95 }
    ]
  },
  {
    title: { en: 'Cloud & DevOps', zh: '雲端運算與 DevOps' },
    icon: 'Cloud',
    skills: [
      { name: 'Microsoft Azure', level: 92 },
      { name: 'Docker & Containers', level: 88 },
      { name: 'GitHub Actions (CI/CD)', level: 85 },
      { name: 'Azure Container Apps', level: 85 },
      { name: 'Terraform / Bicep', level: 75 }
    ]
  },
  {
    title: { en: 'Full-Stack Web Dev', zh: '全端開發技術' },
    icon: 'Code2',
    skills: [
      { name: 'React & Next.js', level: 90 },
      { name: 'TypeScript / JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Node.js & Express', level: 86 },
      { name: 'Python (FastAPI / Flask)', level: 90 }
    ]
  },
  {
    title: { en: 'Databases & Tools', zh: '資料庫與開發工具' },
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL & pgvector', level: 88 },
      { name: 'Azure Cosmos DB', level: 85 },
      { name: 'Git & GitHub Workflow', level: 95 },
      { name: 'Linux / Bash Scripting', level: 82 },
      { name: 'VS Code & Dev Containers', level: 95 }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'agent-copilot',
    title: {
      en: 'CampusAgent Copilot',
      zh: 'CampusAgent 校園智慧助理'
    },
    subtitle: {
      en: 'Autonomous Multi-Agent Academic Assistant powered by Azure OpenAI',
      zh: '基於 Azure OpenAI 的多智能體校園課業與活動導航助手'
    },
    description: {
      en: 'An intelligent autonomous agent system that helps university students navigate syllabus requirements, course scheduling, and campus cloud resources using LangGraph and Azure OpenAI GPT-4o.',
      zh: '整合 LangGraph 多 Agent 協同架構與 Azure OpenAI，提供學生即時課程大綱問答、跨學期選課建議與校園雲端學習資源導航。'
    },
    category: 'AI & Agents',
    tags: ['Azure OpenAI', 'LangGraph', 'TypeScript', 'FastAPI', 'Tailwind CSS'],
    highlights: {
      en: [
        'Sub-second RAG response using Azure Cognitive Search and semantic re-ranking',
        'Stateful multi-turn conversation memory with Redis caching',
        'Deployed to 3 campus student clubs with over 450+ weekly active queries'
      ],
      zh: [
        '結合 Azure Cognitive Search 語意重新排序，實現亞秒級精準 RAG 檢索',
        '基於 Redis 快取建置長短程多輪對話記憶機制',
        '已導入 3 個校園社團，每週服務超過 450+ 筆主動查詢'
      ]
    },
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
    gradient: 'from-blue-600 via-cyan-500 to-indigo-600'
  },
  {
    id: 'azure-doc-lens',
    title: {
      en: 'Azure DocLens RAG',
      zh: 'Azure DocLens 智能技術文件檢索'
    },
    subtitle: {
      en: 'Multimodal Document Analysis & Embedding Pipeline',
      zh: '多模態雲端架構圖與技術文件檢索系統'
    },
    description: {
      en: 'A cloud-native document intelligence pipeline that parses PDF architecture diagrams and technical specifications, converting complex diagrams into searchable vector embeddings.',
      zh: '雲端原生多模態文檔智慧解析管道，能直接萃取 PDF 架構圖表與規格說明，轉化為高維向量以支援語意化提問。'
    },
    category: 'Cloud & Azure',
    tags: ['Azure AI Document', 'Python', 'pgvector', 'Docker', 'React'],
    highlights: {
      en: [
        'Automated OCR and visual layout extraction for complex cloud diagrams',
        'Hybrid BM25 + dense vector search yielding 94% Top-3 retrieval recall'
      ],
      zh: [
        '自動化 OCR 與版面分析，能精準辨識雲端架構圖拓撲結構',
        '混合檢索 (BM25 + 向量相似度) 達到 94% Top-3 召回率'
      ]
    },
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: true,
    gradient: 'from-indigo-600 via-purple-600 to-pink-500'
  },
  {
    id: 'cloud-ambassador-portal',
    title: {
      en: 'Microsoft Ambassador Workshop Hub',
      zh: '微軟雲端校園大使 工作坊學習平台'
    },
    subtitle: {
      en: 'Interactive Hands-on Lab & Registration Portal',
      zh: '校園工作坊報名與互動式動手做 Lab 平台'
    },
    description: {
      en: 'An all-in-one event management platform for university cloud workshops featuring real-time seat availability, live code sandboxes, and automated certificate issuance.',
      zh: '專為校園雲端工作坊量身打造的活動平台，整合即時名額追蹤、線上動手做程式沙盒與研習證書自動簽發。'
    },
    category: 'Full Stack',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    highlights: {
      en: [
        'Handled 600+ concurrent users during Microsoft Tech Day registration without downtime',
        'Dynamic SVG certificate generator with verifiable cryptographic hashes'
      ],
      zh: [
        '微軟技術日報名高峰承受 600+ 併發流量零當機',
        '動態產生具備加密數位驗證碼之研習電子證書'
      ]
    },
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500'
  },
  {
    id: 'prompt-eval-bench',
    title: {
      en: 'PromptBench Studio',
      zh: 'PromptBench 提示詞評測工作台'
    },
    subtitle: {
      en: 'Open Source LLM Evaluation & Regression Test Runner',
      zh: '開源大模型 Prompt 品質評測與回歸測試工具'
    },
    description: {
      en: 'A developer tool to benchmark prompt templates against multiple LLM providers (Azure OpenAI, Claude, Ollama) with automated scoring on accuracy and token efficiency.',
      zh: '針對多款大語言模型 (Azure OpenAI、Claude、本地 Ollama) 之提示詞評測工具，提供自動化準確率、Token 成本與延遲對比。'
    },
    category: 'Open Source',
    tags: ['React', 'FastAPI', 'Azure OpenAI', 'Chart.js', 'Vite'],
    highlights: {
      en: [
        'Side-by-side model diffing with cost calculation and token metrics',
        'Export test suites into standard CI/CD evaluation workflows'
      ],
      zh: [
        '多模型輸出平行對比，精確計算 Token 消耗與金錢成本',
        '支援測試套件匯出至 CI/CD 流程以防 Prompt 改版退化'
      ]
    },
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com',
    featured: false,
    gradient: 'from-amber-500 via-orange-500 to-rose-500'
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'az-900',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    issueDate: '2024',
    credentialId: 'MS-AZ900-2024-AL',
    verifyUrl: 'https://learn.microsoft.com',
    badgeColor: 'border-blue-500 text-blue-400 bg-blue-500/10'
  },
  {
    id: 'ai-900',
    title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    issueDate: '2024',
    credentialId: 'MS-AI900-2024-AL',
    verifyUrl: 'https://learn.microsoft.com',
    badgeColor: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'gh-foundations',
    title: 'GitHub Foundations Certified',
    issuer: 'GitHub',
    issueDate: '2024',
    credentialId: 'GH-FD-2024-AL',
    verifyUrl: 'https://github.com',
    badgeColor: 'border-purple-500 text-purple-400 bg-purple-500/10'
  }
];