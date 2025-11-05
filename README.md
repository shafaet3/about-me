# Shafaet's Personal Portfolio Website

<p align="center">
  <img src="public/images/globe.svg" width="80" alt="Portfolio Logo" />
</p>

<p align="center">
  <b>A modern, fully responsive personal portfolio built with Next.js (App Router), React 19, and Tailwind CSS 4.</b><br/>
  Showcasing skills, projects, and contact information with smooth animations and an elegant design.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-20232a?logo=react" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" /></a>
</p>

---

## 🖼️ Preview 
> 🔗 **Live Demo:** [https://shafaet-portfolio.vercel.app/](https://shafaet-portfolio.vercel.app/)  
>  
> ![Portfolio Preview](/preview_portfolio.PNG)

---

## 🌟 Features

- ⚡ **Next.js 16 (App Router)** – Server Components, optimized routing & fast rendering  
- 🎨 **Tailwind CSS 4** – Sleek, mobile-first design  
- 🪄 **Smooth animations** using AOS (Animate on Scroll)  
- 🌌 **Particle background** using tsParticles  
- 💫 **3D card effects** powered by React Parallax Tilt  
- 🧱 **Reusable components** for modular development  
- 🧭 **SEO-friendly** & fast performance  
- 💻 **TypeScript** for type safety  

---

## 🧰 Tech Stack

| Category | Tools Used |
|-----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | AOS, tsParticles |
| **Icons & UI** | React Icons, React Multi Carousel, Typewriter Effect |
| **Language** | TypeScript |
| **Linting** | ESLint (Next Config) |

---

## 📦 Dependencies Overview

| Package | Description |
|----------|-------------|
| **next** | React framework for SSR, routing, and optimization. |
| **react / react-dom** | Core React libraries for UI rendering. |
| **tailwindcss** | Utility-first CSS framework for rapid styling. |
| **aos** | Animate On Scroll library for scroll-triggered animations. |
| **@tsparticles/engine**, **@tsparticles/react**, **@tsparticles/slim** | Lightweight particle background engine. |
| **react-parallax-tilt** | Adds 3D parallax tilt effects to cards and images. |
| **typewriter-effect** | Creates typewriter-style text animations. |
| **react-icons** | Popular icon packs as React components. |
| **react-multi-carousel** | Responsive, customizable carousel slider. |
| **typescript** | Adds type safety and improved developer experience. |
| **eslint**, **eslint-config-next** | Ensures clean and consistent code style. |
| **@types/...** | TypeScript type definitions for third-party packages. |
| **babel-plugin-react-compiler** | Performance optimization for React components. |

---

## 🧱 Project Structure

Project uses **Next.js App Router**, organized into clean modular components:
```bash
portfolio/
├── app/ # Next.js App Router directory
│ ├── components/ # Reusable UI components
│ │ ├── Helper/
│ │ │ └── ScrollToTop.tsx
│ │ ├── Home/
│ │ │ ├── Blog/
│ │ │ │ ├── Blog.tsx
│ │ │ │ └── BlogCard.tsx
│ │ │ ├── ClientReview/
│ │ │ │ ├── ClientReview.tsx
│ │ │ │ └── ClientReviewCard.tsx
│ │ │ ├── Contact/
│ │ │ │ └── Contact.tsx
│ │ │ ├── Footer/
│ │ │ │ └── Footer.tsx
│ │ │ ├── Hero/
│ │ │ │ ├── Hero.tsx
│ │ │ │ └── ParticleBackground.tsx
│ │ │ ├── Navbar/
│ │ │ │ ├── MobileNav.tsx
│ │ │ │ ├── Nav.tsx
│ │ │ │ └── ResponsiveNav.tsx
│ │ │ ├── Projects/
│ │ │ │ └── Projects.tsx
│ │ │ ├── Resume/
│ │ │ │ ├── Resume.tsx
│ │ │ │ └── ResumeCard.tsx
│ │ │ ├── Services/
│ │ │ │ ├── Services.tsx
│ │ │ │ └── ServiceCard.tsx
│ │ │ ├── Skills/
│ │ │ │ └── Skills.tsx
│ │ │ └── Home.tsx
│ ├── constant/
│ │ └── constant.tsx # Constant data (skills, projects, etc.)
│ ├── favicon.ico
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout file
│ └── page.tsx # Main landing page
│
├── public/
│ ├── images/
│ │ ├── file.svg
│ │ ├── globe.svg
│ │ ├── next.svg
│ │ ├── vercel.svg
│ │ └── window.svg
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```
---

## 🧩 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server on `http://localhost:3000` |
| `npm run build` | Build the production-optimized app |
| `npm start` | Launch production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Start the development server**   
   ```bash
   npm run dev
   ```
4. **Build for production**   
   ```bash
   npm run build
   npm start
   ```
   
---

## 🧰 Tech Stack

| 🧠 | Future Enhancements |
|-----------|-------------|
| 🌙 | Dark Mode toggle |
| 🌍 | Multi-language support (i18n) |
| 💬 | Contact form integration (EmailJS / Nodemailer) |
| 📈 | Project analytics |


---

## 👨‍💻 Author

- ⚡ **Shafaet**   
- 🎨 **Software Engineer | Frontend Developer | Creator of this portfolio**  
- 📧 **shafaet3@gmail.com**    
- 💻 **License** - This project is open-source under the MIT License. 
