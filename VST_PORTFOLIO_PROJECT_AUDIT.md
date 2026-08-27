# VST Portfolio Project Audit & Architecture Blueprint

**Project Name:** Developer Portfolio Website  
**Path:** `p:\dev\freelance\portfolio`  
**Date:** August 27, 2026  
**Role:** Lead Product Designer, UX Architect & Senior Frontend Engineer  

---

## 1. Current Project State
* **Status:** Clean slate / Empty directory (`p:\dev\freelance\portfolio`).
* **Environment:** Windows OS, Node.js environment ready for Vite + React + TypeScript scaffolding.
* **Context:** Brand-new, dedicated portfolio project built to showcase product development expertise across **Web**, **Mobile**, and **AI**. Completely decoupled from legacy codebases while grounding project case studies in authentic technical implementations.

---

## 2. Framework & Target Versions
The portfolio will use a modern, lightweight, high-performance stack:
* **UI Library:** `React 19` (Latest stable release)
* **Language:** `TypeScript` (Strict mode enabled for full type safety)
* **Build Tool:** `Vite` (Fast HMR, optimized production bundler)
* **Styling Engine:** `Tailwind CSS v4` (Utility-first styling with custom CSS design tokens)
* **Icons:** `Lucide React` (Clean, minimalist stroke iconography)
* **Routing:** `React Router` v7 (Lightweight client-side routing for `/` and dedicated case studies)

---

## 3. Existing Dependencies
* **Installed Packages:** None (0 dependencies currently).
* **Target Dependencies to Install (Phase 2):**
  * `react`, `react-dom`
  * `typescript`, `@types/react`, `@types/react-dom`
  * `tailwindcss`, `@tailwindcss/vite` (or PostCSS integration)
  * `react-router-dom`
  * `lucide-react`
  * `clsx`, `tailwind-merge`

---

## 4. Existing Files
* No source files currently exist in `p:\dev\freelance\portfolio`.
* Scaffolding will create:
  * `package.json`
  * `vite.config.ts`
  * `tsconfig.json`
  * `index.html`
  * `src/` directory tree

---

## 5. Existing Assets & Real Project Source Audits
To ensure **100% Content Truth**, project data and technical details have been audited from actual inspects on the local system:

1. **Project 01 — VST Beauty Care & Academy (Mobile Application / Product)**
   * **Source Audit:** Dual-experience architecture specifications.
   * **Core Architecture:** Unified Single App + Single Account supporting Customer Experience (Discovery, Booking, Appointments, Enquiries) and Student Experience (Course Discovery, Dashboard, Schedule, Assignments, Certificates).
   * **Truth Status:** Frontend-focused UI design with structured mock data; engineered for future REST API backend integration.

2. **Project 02 — AI Attendance System (AI / Software Product)**
   * **Source Audit:** Inspected `p:\dev\edvision_26\backend\ai_services`.
   * **Core Architecture:** Real-time facial identification engine built with `Python`, `FastAPI`, `InsightFace (v0.7.3)`, `OpenCV`, `ONNXRuntime`, `Scikit-learn`, `Redis`, `MongoDB`, `MySQL`, and `Cloudinary`.
   * **Workflow:** Face Detection -> Feature Embedding Extraction -> Vector Matching -> Attendance Logging -> Record Storage -> Admin Reporting.

3. **Project 03 — Gym Website (Web / Frontend / UI)**
   * **Source Audit:** Inspected `p:\dev\freelance\FitForge Gym\frontend`.
   * **Core Architecture:** Modern fitness platform ("FitForge Gym") built with `React 19`, `TypeScript`, `Tailwind CSS`, `Lucide React`. Features responsive hero section, program cards, trainer profiles, facility showcases, membership matrix, and lead-gen booking forms.

---

## 6. Routing Status
* **Current Status:** Not configured.
* **Proposed Routing Structure:**
  * `/` — Home (Hero, Selected Work, Skills/Capabilities, About, Contact, Footer)
  * `/work/vst-beauty-academy` — Dedicated Case Study: VST Beauty Care & Academy
  * `/work/ai-attendance` — Dedicated Case Study: AI Attendance System
  * `/work/gym-website` — Dedicated Case Study: Gym Website (FitForge Gym)

---

## 7. Styling Status
* **Current Status:** Not configured.
* **Proposed Editorial Design System:**
  * **Typography:** Premium serif headline display (`Playfair Display` or `Instrument Serif` font pairing via Google Fonts) paired with modern sans-serif body UI (`DM Sans` or `Inter`).
  * **Color Palette:** Restrained, editorial warm light theme:
    * Background: `Off-white / Warm Gray` (`#FBFBF9` / `#F3F3F0`)
    * Primary Text / Elements: `Deep Charcoal / Near Black` (`#121212` / `#1A1A1A`)
    * Secondary Text: `Muted Slate Neutral` (`#5A5A5A`)
    * Border / Divider: `Soft Warm Neutral` (`#E5E5E0`)
    * Accent: `Subtle Muted Ink Accent` (`#2A2D34` / Project-specific case study accents)
  * **Spacing:** Generous whitespace scale (8px grid base) with high-contrast typography hierarchy and clear structural divides.

---

## 8. Problems Found
1. **Clean Slate Challenge:** Zero initial files require carefully planned scaffolding so no bloat or unneeded boilerplate is introduced.
2. **Avoiding Template Cliché:** Generic developer templates heavily rely on noisy gradients, neon glows, glassmorphism, 3D Canvas blobs, and fake metric badges. The solution is an **editorial, product-first architectural aesthetic**.

---

## 9. What Can Be Reused
* Real technical architecture patterns from local project audits (`FitForge Gym` UI code structure, `edvision_26` AI service workflows, and VST dual-experience specifications).
* Asset guidelines and component structure patterns.

---

## 10. What Should Be Removed / Excluded
* ❌ NO fake client logos or fake company badges
* ❌ NO fake metrics, fake accuracy %, fake revenue numbers
* ❌ NO generic AI marketing hype ("rockstar", "ninja", "passionate developer")
* ❌ NO unnecessary sections (pricing tables, fake testimonials, blog, fun facts)
* ❌ NO 3D canvas blobs or distracting heavy animations

---

## 11. Proposed Architecture
Clean, modular directory structure under `src/`:

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/              # SVG diagrams, clean project presentation assets
│   ├── components/
│   │   ├── common/          # Button, Container, SectionHeader, Tag, Navbar, Footer
│   │   ├── hero/            # Editorial Hero component
│   │   ├── work/            # Selected Work grid & Alternating Project Cards
│   │   ├── casestudy/       # Reusable case study layout elements & diagrams
│   │   ├── skills/          # Categorized Capabilities breakdown
│   │   ├── about/           # Product-focused About section
│   │   └── contact/         # Direct contact CTA & social links
│   ├── data/
│   │   ├── projectsData.ts  # Single source of truth for the 3 featured projects
│   │   ├── skillsData.ts    # Grouped capabilities (Product Dev, Frontend, AI, Design)
│   │   └── siteConfig.ts    # Contact info, social links, meta descriptions
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── VstCaseStudyPage.tsx
│   │   ├── AiAttendanceCaseStudyPage.tsx
│   │   └── GymCaseStudyPage.tsx
│   ├── styles/
│   │   └── index.css        # Tailwind directives & typography font imports
│   ├── types/
│   │   └── index.ts         # TypeScript definitions for projects & content
│   ├── utils/
│   │   └── scrollToTop.ts   # Navigation scroll behavior
│   ├── App.tsx              # Router configuration
│   └── main.tsx             # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 12. Proposed Information Architecture

```
[ NAVIGATION ] (Logo | Work | About | Contact | "Let's Talk" CTA)
      │
[ HERO SECTION ] ("Building digital products across web, mobile & AI.")
      │
[ SELECTED WORK ] (Editorial Alternating Layout - Exactly 3 Projects)
   ├── 01 VST Beauty Care & Academy (Mobile Application / Product)
   ├── 02 AI Attendance System (AI / Software Product)
   └── 03 Gym Website (Web / Frontend / UI)
      │
[ SKILLS & CAPABILITIES ] (Grouped: Product Dev | Frontend | AI | Design)
      │
[ ABOUT ] (Concise, authentic positioning: Product Architecture & Engineering)
      │
[ CONTACT ] ("Have a product in mind? Let's build something useful.")
      │
[ FOOTER ] (Minimalist links & copyright)
```

---

## 13. Three-Project Content Structure

### Project 01 — VST Beauty Care & Academy
* **Category:** Mobile Application / Product
* **Tagline:** "One App. One Account. Two Experiences."
* **Core Philosophy:** Role-based dual experience sharing a single user account context.
* **Customer Experience:** Service discovery, personal grooming, bridal & pre-wedding packages, branch finder, appointment booking & management, enquiries, notifications.
* **Student Experience:** Course discovery & application, enrolled student dashboard, class schedules, attendance tracking, assignments, fee receipts, course certificates.
* **Status:** Frontend-focused mobile UI architecture engineered for future API integration.

### Project 02 — AI Attendance System
* **Category:** AI / Software Product
* **Tagline:** "Automated Face Recognition & Attendance Tracking"
* **Core Philosophy:** High-performance facial recognition pipeline integrating AI inference with real-time record management.
* **AI Workflow:** `Identify (Camera/Upload)` -> `Verify (InsightFace Embeddings)` -> `Record Attendance` -> `Update Database (MySQL/Mongo/Redis)` -> `View Dashboard Report`.
* **Status:** Fully functional backend service architecture (`FastAPI` + `InsightFace` + `OpenCV`) with dynamic logging.

### Project 03 — Gym Website (FitForge Gym)
* **Category:** Web / Frontend / UI
* **Tagline:** "Modern Responsive Fitness & Lead-Generation Platform"
* **Core Philosophy:** High-impact digital presence with strong visual hierarchy and conversion-oriented UI patterns.
* **Key Features:** Program showcases, trainer spotlight, facility tour, transparent membership matrix, interactive class schedule, responsive mobile navigation.
* **Status:** Complete frontend implementation (`React 19` + `TypeScript` + `Tailwind CSS`).

---

## 14. Implementation Roadmap (Phases 1-9)

| Phase | Description | Deliverable |
| :--- | :--- | :--- |
| **Phase 1 (Current)** | Audit & Architecture Blueprint | `VST_PORTFOLIO_PROJECT_AUDIT.md` |
| **Phase 2** | Scaffolding, Routing & Design System | Vite + React + TS + Tailwind v4 + Fonts + Router setup |
| **Phase 3** | Core Navigation, Hero & Selected Work | Nav, Editorial Hero, 3-Project Alternating Cards |
| **Phase 4** | Dedicated Case Study Pages | VST, AI Attendance, & Gym Website case study routes |
| **Phase 5** | Skills, About, Contact & Footer | Capabilities breakdown, authentic About, Contact CTA |
| **Phase 6** | Responsive Optimization | 360px+ to 1440px+ breakpoint audit & fluid layouts |
| **Phase 7** | Subtle Motion & Interactions | Fast, purpose-driven micro-interactions & entrance reveals |
| **Phase 8** | Accessibility, Performance & SEO | WCAG AA compliance, semantic HTML, ARIA, Meta tags |
| **Phase 9** | Final QA & Polish | Cross-browser testing, code linting & final walkthrough |

---

## 15. Risks & Mitigation Strategies
* **Risk 1: Over-engineering / Heavy dependencies**  
  * *Mitigation:* Stick strictly to React, Tailwind, Lucide React, and React Router. Avoid heavy 3D canvas or bulky visual libraries.
* **Risk 2: Unintentional exaggeration or fake data**  
  * *Mitigation:* Strictly adhere to the **Content Truth Rule**. All case study descriptions reflect audited code and design facts.
* **Risk 3: Poor mobile readability or navigation overflow**  
  * *Mitigation:* Design mobile-first using high touch targets (48px+), responsive typography, and clean collapsible drawer navigation.

---

## 16. Final Recommendations
1. Approve this audit report to initiate **Phase 2 (Project Scaffolding & Design System Setup)**.
2. Initialize Vite + React 19 + TypeScript stack in `p:\dev\freelance\portfolio`.
3. Configure Tailwind CSS v4 and Google Fonts (`Playfair Display` + `DM Sans` or `Inter`) for editorial layout polish.

