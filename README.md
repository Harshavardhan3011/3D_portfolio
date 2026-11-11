# Harsha Vardhan — 3D Developer Portfolio

A cinematic, anime-inspired portfolio combining my identity as a developer and gamer. Built with React, Vite and Three.js, this website features interactive 3D scenes, motion effects, a skill matrix, project showcases and a dedicated gaming section.

![Harsha Vardhan Personal Developer Portfolio Preview](src/assets/portfolioimg)

**[View Live Portfolio](https://portfolio-beta-livid-zahsjif86i.vercel.app/)** | **[GitHub Repository](https://github.com/Harshavardhan3011/3D_portfolio)**

---

## ✨ Key Features

- **Cinematic Introduction:** Animated loading screen, intro showcase and enter-world transition.
- **3D Experience:** Interactive Three.js and React Three Fiber components.
- **Developer Profile:** About section featuring profile and education information.
- **Interactive Skill Matrix:** Categorized technical skills and interactive elements.
- **Project Showcase:** Project cards with screenshots, technology tags and detailed modals.
- **Gaming Arena:** Dedicated gaming section featuring gaming-related media.
- **Resume Section:** Resume presentation and downloadable PDF.
- **Contact Terminal:** Contact form and professional social links.
- **Animations:** GSAP, Framer Motion, scroll effects and hover interactions.
- **Interactive UI:** Command palette, cursor glow, achievement notifications and theme switching.
- **Responsive Interface:** Layouts designed for desktop and mobile screens.

## 🧰 Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 19, JavaScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3, CSS |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Animations | Framer Motion, Motion, GSAP, AOS |
| Routing | React Router DOM 7 |
| State Management | Zustand |
| Icons | Lucide React, React Icons |
| Sliders | React Slick, Slick Carousel |
| Contact Form | EmailJS |
| Deployment | Vercel |

## 📂 Project Structure

```text
3D_portfolio/
├── public/
│   ├── assets/
│   └── harsha_vardhan_resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── 3d/
│   │   ├── animation/
│   │   ├── fallback/
│   │   ├── gaming/
│   │   ├── interactions/
│   │   ├── intro/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## 🚀 Installation and Setup

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Harshavardhan3011/3D_portfolio.git
```

### 2. Navigate into the project

```bash
cd 3D_portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite, usually:

`http://localhost:5173`

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

## 📜 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview production build |

The production files are generated inside the `dist/` directory.

## ✉️ EmailJS Configuration

The contact page uses the EmailJS browser SDK.

**Important:** The current source contains placeholder credentials for:

- Service ID
- Template ID
- Public Key

Replace these with your actual EmailJS credentials in `src/pages/Contact.jsx` before relying on the contact form.

Also verify that failed email requests display an error rather than a success message.

## 🌐 Deployment

This project is configured for Vercel deployment.

- **Live Website:** https://portfolio-beta-livid-zahsjif86i.vercel.app/
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

The `vercel.json` file includes a rewrite rule to support client-side routing.

## 🎮 Gaming Identity – DxC Zoro

Gaming is an important part of my creative identity and inspires the visual language of this portfolio. The website includes a dedicated **Gaming Arena** where that side of my work and interests comes to life.

![Harsha Vardhan Gaming Profile – DxC Zoro](src/assets/portfolioimg)

## 👨‍💻 About the Developer

I'm **Harsha Vardhan**, a developer interested in building interactive web experiences, practical applications and modern user interfaces.

This portfolio represents my technical skills, development projects and creative interests.

### Connect With Me

- **GitHub:** https://github.com/Harshavardhan3011
- **LinkedIn:** https://www.linkedin.com/in/harshavardhanv/
- **Email:** harshavardhanvesalapu1@gmail.com

---

<p align="center">
  Built with React, Three.js and continuous learning.
</p>
