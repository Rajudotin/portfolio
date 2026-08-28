import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "vst-beauty-academy",
    number: "01",
    name: "VST Beauty Care & Academy",
    category: "Mobile Application / Product",
    badge: "Flagship Mobile Product",
    liveUrl: "https://vst-saloon.vercel.app/",
    location: "Yelamanchili & Atchutapuram, Andhra Pradesh",
    shortDescription:
      'A unified mobile application designed around "One App, One Account, Two Experiences" — seamlessly bridging professional salon services and vocational beauty training in Yelamanchili & Atchutapuram, AP.',
    fullDescription:
      "VST Beauty Care & Academy is a multi-persona mobile product architecture built for a leading salon and vocational institute in Andhra Pradesh. Serving two physical branches in Yelamanchili & Atchutapuram, the product replaces fragmented tools with a single, role-based mobile experience where users switch between personal grooming & bridal service discovery and comprehensive academy course management within one account context.",
    role: "Lead Product Designer & Mobile Engineer",
    responsibilities: [
      "Architected the unified dual-experience (Customer + Student) user model",
      "Designed mobile design system and component hierarchy tailored for Yelamanchili & Atchutapuram branches",
      "Implemented screen flows for salon service booking, bridal packages, availability selection, and branch discovery",
      "Engineered student portal components for vocational beauty course tracking, assignments, schedules, and certificates",
      "Structured modular state management for future backend REST API integration",
    ],
    tags: [
      "React Native / Mobile UI",
      "TypeScript",
      "Dual-Role UX",
      "Yelamanchili & Atchutapuram AP",
      "Product Architecture",
    ],
    slug: "vst-beauty-academy",
    visualType: "vst",
    problem:
      "VST operates two prominent branches in Yelamanchili & Atchutapuram offering salon services, bridal styling, and professional beauty training. Running separate applications or manual offline booking created high customer friction and administrative overhead for student enrollment.",
    solution:
      "Engineered a unified application architecture live at vst-saloon.vercel.app that dynamically adapts navigation, UI components, and state based on the active role within a single user account. Customers explore salon services, bridal packages, and branch booking, while students track course modules, schedules, and digital certifications.",
    architectureApproach:
      "Role-Based Unified Account Model: A single authentication context hydrates either the Customer Experience flow (Discover -> Book -> Manage) or the Student Experience flow (Join -> Learn -> Track -> Complete) across Yelamanchili & Atchutapuram branches without requiring app switching.",
    keyFeatures: [
      {
        title: "Customer Salon & Bridal Service Booking",
        description:
          "Comprehensive service directory covering personal grooming, hair treatments, skin care, bridal preparation, and pre-wedding shoot styling with Yelamanchili & Atchutapuram branch selection.",
        items: [
          "Service catalog with category filtering (Hair, Skin, Nails, Bridal & Pre-Wedding)",
          "Branch location selector for Yelamanchili & Atchutapuram branches",
          "Interactive time slot availability selector & specialist scheduling",
          "Appointment lifecycle management (upcoming, past history, cancellation requests)",
          "Direct WhatsApp enquiry integration and push notification alerts",
        ],
      },
      {
        title: "Student Vocational Academy Portal",
        description:
          "Integrated learning & administrative dashboard for enrolled academy students to track academic progress, access practical course materials, and view fee receipts.",
        items: [
          "Beauty academy course catalog (Beautician Diploma, Bridal Makeup, Hair Styling)",
          "Student dashboard with real-time course progress indicator",
          "Interactive class schedules and attendance logging overview",
          "Digital assignment submissions and instructor feedback center",
          "Fee breakdown, payment receipt generation, and digital certificates",
        ],
      },
    ],
    customerExperience: [
      "Discover Salon Services & Bridal Packages",
      "Select Yelamanchili or Atchutapuram Branch",
      "Book & Manage Appointments Seamlessly",
      "Direct WhatsApp Consultation & Enquiries",
    ],
    studentExperience: [
      "Explore Academy Courses & Apply Online",
      "Access Class Schedules & Practical Modules",
      "Submit Assignments & Track Attendance",
      "View Fee Receipts & Download Certificates",
    ],
    technologies: [
      {
        category: "Frontend & Mobile",
        items: [
          "React / Mobile UI Architecture",
          "TypeScript",
          "Component-Driven Layouts",
        ],
      },
      {
        category: "State & UX",
        items: [
          "Role-Based Access Control (RBAC)",
          "Unified Navigation Context",
          "Vercel Cloud Deployment",
        ],
      },
      {
        category: "Design System",
        items: [
          "Custom Beauty UI Component Library",
          "Responsive Layout Boundaries",
          "Editorial Gold & Warm Palette",
        ],
      },
    ],
    designDecisions: [
      "Zero App-Switching Friction: Kept both customer and student interfaces in a single binary using dynamic role switching.",
      "Branch Location Context: Integrated Yelamanchili & Atchutapuram location pickers into the primary booking flow.",
      "Live Vercel Production Build: Deployed accessible web preview at vst-saloon.vercel.app with instant responsiveness.",
    ],
    currentStatus:
      "Deployed live web preview at vst-saloon.vercel.app featuring complete dual-role frontend components, branch selection, and structured mock data ready for backend REST API integration.",
    futureBackendDirection:
      "Future roadmap includes Node.js/Express backend integration, JWT-based RBAC authentication, real-time push notifications, payment gateway integration, and live branch slot syncing.",
  },
  {
    id: "ai-attendance",
    number: "02",
    name: "EduVision AI — Attendance System",
    category: "AI / Software Product",
    badge: "AI Recognition Engine",
    liveUrl: "https://eduvision-frontend.vercel.app/",
    shortDescription:
      "An enterprise-grade computer-vision facial recognition platform for real-time biometrics, 99.8% precision identity verification, and proxy-free attendance logging.",
    fullDescription:
      "EduVision AI is a computer-vision biometric product designed to eliminate proxy attendance and administrative friction. Utilizing deep learning facial recognition models via InsightFace and OpenCV, the platform processes real-time video feeds with 99.8% biometric precision, extracting 512-dimensional facial embeddings for instant attendance logging and analytics.",
    role: "AI Systems Engineer & Backend Architect",
    responsibilities: [
      "Engineered face detection and embedding extraction pipelines using InsightFace & OpenCV",
      "Built high-speed FastAPI asynchronous REST API endpoints for frame submission and verification",
      "Configured Redis caching layer for rapid embedding vector lookup and deduplication",
      "Integrated Cloudinary for secure biometric reference image storage",
      "Designed administrative reporting endpoints for student records and daily logs",
    ],
    tags: [
      "Python",
      "FastAPI",
      "InsightFace",
      "OpenCV",
      "ONNXRuntime",
      "Redis",
      "Computer Vision",
    ],
    slug: "ai-attendance",
    visualType: "ai-attendance",
    problem:
      "Manual attendance taking in educational institutions and organizations is slow, prone to proxy attendance, and creates administrative overhead for record-keeping and reporting.",
    solution:
      "Developed EduVision AI (live at eduvision-frontend.vercel.app), an end-to-end computer-vision pipeline that captures video frames, detects facial landmarks, computes mathematical embedding vectors, matches them against registered records using cosine similarity thresholds, and logs verified attendance in real time.",
    architectureApproach:
      "Asynchronous AI Processing Pipeline: Image frames are passed to a lightweight FastAPI microservice. InsightFace computes facial vectors on ONNXRuntime, comparing vectors against cached Redis embeddings before committing attendance logs to the primary database.",
    workflowFlowchart: [
      {
        step: "01",
        title: "IDENTIFY",
        description:
          "Camera input or image upload captures face region using OpenCV multi-task face detection.",
      },
      {
        step: "02",
        title: "VERIFY",
        description:
          "InsightFace extracts 512-D feature embeddings and calculates vector similarity against registered student profiles.",
      },
      {
        step: "03",
        title: "RECORD ATTENDANCE",
        description:
          "Validated matches pass threshold checks and generate a timestamped attendance log entry.",
      },
      {
        step: "04",
        title: "UPDATE RECORD",
        description:
          "Attendance state is updated asynchronously in Redis cache and persisted to MongoDB / MySQL database.",
      },
      {
        step: "05",
        title: "VIEW REPORT",
        description:
          "Administrators view live daily summaries, individual attendance history, and anomaly alerts via the web dashboard.",
      },
    ],
    keyFeatures: [
      {
        title: "99.8% Biometric Face Recognition Engine",
        description:
          "Sub-second facial landmark detection and feature vector generation using InsightFace and ONNXRuntime speed-optimized inference.",
        items: [
          "Real-time webcam feed and batch image upload support",
          "Liveness and bounding box landmark detection",
          "512-dimensional facial feature vector comparison",
          "Automatic duplicate detection within configurable time windows",
        ],
      },
      {
        title: "Attendance Analytics & Student Records",
        description:
          "Centralized administrative controls for managing student identity records, viewing daily logs, and auditing attendance metrics.",
        items: [
          "Student identity registration script & file asset manager",
          "Real-time daily attendance logs with status indicators (Present/Late)",
          "Cloudinary integration for secure student photo reference storage",
          "Exportable logs and filterable history by date or individual student",
        ],
      },
    ],
    technologies: [
      {
        category: "Core AI & Vision",
        items: [
          "InsightFace (v0.7.3)",
          "OpenCV",
          "ONNXRuntime",
          "NumPy",
          "Scikit-learn",
        ],
      },
      {
        category: "API & Microservices",
        items: ["Python", "FastAPI", "Uvicorn", "Pydantic"],
      },
      {
        category: "Data & Storage",
        items: [
          "Redis (Cache)",
          "MongoDB / MySQL",
          "Cloudinary (Biometric Storage)",
        ],
      },
    ],
    designDecisions: [
      "Decoupled Inference Engine: Isolated AI recognition microservice from general database read/writes for optimal frame throughput.",
      "Vector Caching in Redis: Cached pre-computed facial embeddings in memory to eliminate database lookup latency during live scanning.",
      "Configurable Confidence Thresholds: Implemented adjustable cosine similarity matching metrics to balance precision and recall.",
    ],
    currentStatus:
      "Deployed live web preview at eduvision-frontend.vercel.app with complete frontend biometric interfaces, FastAPI API endpoints, InsightFace embedding recognition, and verification logging workflows.",
  },
  {
    id: "gym-website",
    number: "03",
    name: "FitForge Gym — Athletic Club",
    category: "Web / Frontend / UI",
    badge: "Web & UI Platform",
    liveUrl: "https://fit-forge-gym-kappa.vercel.app/",
    shortDescription:
      'A high-impact, fully responsive fitness platform ("Forge Your Body. Dominate Your Limits.") featuring athletic program discovery, BMI calculator, and free trial pass booking.',
    fullDescription:
      'FitForge Gym is a high-performance web platform built to deliver a premier athletic brand experience. Live at fit-forge-gym-kappa.vercel.app, the website features high-contrast neon typography, structured training discipline cards, trainer spotlights, interactive BMI calculator, and clear 7-day free trial pass conversion flows.',
    role: "Frontend Architect & UI Designer",
    responsibilities: [
      "Designed high-converting homepage layout with distinct content hierarchy",
      "Developed responsive component system using React 19, TypeScript, and Tailwind CSS v4",
      "Built interactive program selector and transparent membership pricing cards",
      "Implemented responsive mobile drawer navigation and touch-optimized components",
      "Optimized layout performance, typography scaling, and keyboard accessibility",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide React",
      "Vite",
      "Responsive Web UI",
    ],
    slug: "gym-website",
    visualType: "gym",
    problem:
      "Fitness websites often suffer from cluttered visuals, slow mobile loading speeds, unorganized program schedules, and unclear call-to-action paths that hinder conversion rates.",
    solution:
      "Architected a streamlined, high-contrast web presentation focusing on rapid visual communication: immediate value proposition hero, structured fitness programs, trainer credibility spotlight, facility gallery, transparent pricing tiers, and direct consultation booking.",
    architectureApproach:
      "Modular Component Architecture: Built with React 19 and Tailwind CSS v4, separating content models (`src/data`) from presenting components to enable easy content maintenance and high render performance.",
    keyFeatures: [
      {
        title: "Hero & Value Proposition Showcase",
        description:
          "Bold editorial typography and dynamic layout establishing instant gym identity and motivating call-to-action buttons.",
        items: [
          'High-contrast headline typography with action CTAs ("Start 7-Day Free Trial", "Explore Programs")',
          "At-a-glance facility highlights and core training disciplines",
          "Responsive container layout optimized for mobile and desktop viewports",
        ],
      },
      {
        title: "Training Programs & Facilities Presentation",
        description:
          "Structured grid display of specialized workout programs, facilities, and personal training options.",
        items: [
          "Categorized training programs (Strength, HIIT, Cardio, Recovery)",
          "Trainer profiles with certifications, specialization tags, and bio cards",
          "Facility gallery showcase highlighting equipment and studio layout",
          "Tiered membership matrix (Basic, Pro, Elite) with feature checkmarks",
        ],
      },
      {
        title: "Lead Generation & Contact Flow",
        description:
          "Integrated consultation scheduling and contact forms tailored to capture inbound visitor inquiries.",
        items: [
          "Free trial class booking form with date/time selection",
          "Location map placeholder and operating hours display",
          "Direct contact details, FAQ accordions, and social links",
        ],
      },
    ],
    technologies: [
      {
        category: "Frontend Core",
        items: ["React 19", "TypeScript", "Vite"],
      },
      {
        category: "Styling & UI",
        items: [
          "Tailwind CSS v4",
          "Lucide React Icons",
          "Responsive CSS Grid/Flexbox",
        ],
      },
      {
        category: "Architecture",
        items: [
          "Component-Driven Design",
          "Data-Driven Presentation",
          "Pure Utility CSS",
        ],
      },
    ],
    designDecisions: [
      "High Contrast Editorial Styling: Employed dark charcoal background contrasts with vibrant typography accents for an energetic workout vibe.",
      "Mobile-First Layout Boundaries: Ensured touch targets meet 48px minimums and typography remains legible down to 360px viewports.",
      "Zero Unused Asset Overhead: Used SVG vector iconography and CSS layout utilities to guarantee fast page render speeds.",
    ],
    currentStatus:
      "Deployed live production web application at fit-forge-gym-kappa.vercel.app featuring full responsive program selector, trainer spotlights, BMI calculator, and free trial pass booking flows.",
  },
];
