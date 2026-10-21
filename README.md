# Modern Personal Portfolio & Resume Single-Page Website

A high-performance, responsive single-page portfolio & resume built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. Specially customized for Arthur Liao (Microsoft Learn Cloud Campus Ambassador, AI Agent builder, and Full-Stack Developer).

---

## 🌟 Key Features

- **🌐 Instant Bilingual Toggle**: One-click switch between **繁體中文** and **English** with persistent `localStorage` preference.
- **⚡ Microsoft Azure & AI Aesthetic**: Fluent dark-mode glassmorphic design system with modern cyan/blue radial gradients.
- **📄 Interactive Resume Modal & PDF Print**: In-browser curriculum vitae modal with instant print/save to PDF functionality.
- **🔍 Real-Time Skills Search**: Interactive search filter across 20+ technologies and proficiency meters.
- **📂 Categorized Projects Showcase**: Filter by *AI & Agents*, *Cloud & Azure*, and *Full Stack*, with architecture highlights, tags, and repo links.
- **🎉 Interactive Contact Form**: Real-time client-side validation with celebratory confetti effects powered by `canvas-confetti`.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and ultra-wide desktop displays.

---

## 📁 Project Architecture

```
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Core single-page layout
│   ├── index.css               # Tailwind directives & glassmorphic styles
│   ├── types/
│   │   └── index.ts            # TypeScript data interfaces
│   ├── data/
│   │   └── portfolioData.ts    # Centralized bilingual portfolio content
│   └── components/
│       ├── Navbar.tsx          # Sticky glassmorphism header & navigation
│       ├── Hero.tsx            # Impact hero section with quick stats
│       ├── About.tsx           # Bio, academic honors & core pillars
│       ├── Experience.tsx      # Interactive career & ambassador timeline
│       ├── Skills.tsx          # Categorized skills matrix with search
│       ├── Projects.tsx        # Project showcase with category filters
│       ├── Certifications.tsx  # Microsoft & industry credentials
│       ├── Contact.tsx         # Interactive contact form with confetti
│       ├── ResumeModal.tsx     # Full CV preview & print modal
│       ├── Footer.tsx          # Brand footer & social links
│       ├── Icons.tsx           # Vector SVG icons (GitHub, LinkedIn)
│       └── BackToTop.tsx       # Floating smooth-scroll button
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production artifacts will be generated in the `dist/` directory.

---

## ✏️ How to Customize Your Content

All data is separated cleanly in [src/data/portfolioData.ts](src/data/portfolioData.ts):
- Update `personalInfo` (name, email, social links, bio)
- Add or modify `projects`
- Add or modify `experiences` (work history, ambassador roles)
- Update `skillCategories` and proficiency levels
- Update `certifications` (Azure credentials, verification links)