import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "vst-beauty-academy",
    number: "01",
    name: "VST Beauty Care & Academy",
    category: "Mobile Application / Product",
    badge: "Flagship Mobile Product",
    shortDescription:
      'A unified mobile application designed around "One App, One Account, Two Experiences" — seamlessly bridging customer beauty services and student academy management.',
    fullDescription:
      "VST Beauty Care & Academy is a multi-persona mobile product architecture that replaces fragmented applications with a single, role-based mobile experience. Users maintain a single account context while switching between personal grooming & beauty service discovery and comprehensive academy course management.",
    role: "Lead Product Designer & Mobile Engineer",
    responsibilities: [
      "Architected the unified dual-experience (Customer + Student) user model",
      "Designed mobile design system and component hierarchy",
      "Implemented screen flows for service booking, availability selection, and branch discovery",
      "Engineered student portal components for course tracking, assignments, schedules, and certificates",
      "Structured modular state management for future backend REST API integration",
    ],
    tags: [
      "React Native / Mobile UI",
      "TypeScript",
      "Dual-Role UX",
      "Product Architecture",
      "Component System",
    ],
    slug: "vst-beauty-academy",
    visualType: "vst",
    problem:
      "Traditional beauty care businesses operating an academy face high user friction when requiring customers and students to install separate applications or maintain isolated login credentials. This fragments brand equity and creates administrative complexity.",
    solution:
      "Engineered a unified application architecture that dynamically adapts the navigation, UI components, and state based on the active role within a single user account context. Customers access service discovery and appointment booking, while students access course tracking, schedules, and learning materials.",
    architectureApproach:
      "Role-Based Unified Account Model: A single authentication context hydrates either the Customer Experience flow (Discover -> Book -> Manage) or the Student Experience flow (Join -> Learn -> Track -> Complete) without requiring app switching.",
    keyFeatures: [
      {
        title: "Customer Service Discovery & Booking",
        description:
          "Comprehensive beauty service directory including personal grooming, bridal preparation, pre-wedding packages, and special occasions with real-time branch discovery and availability selection.",
        items: [
          "Service catalog with category filtering and detailed service breakdowns",
          "Branch location finder with interactive map preview",
          "Interactive availability selector & appointment scheduling",
          "Appointment lifecycle management (upcoming, past, cancellation requests)",
          "Enquiry form, customer reviews, and push notification center",
        ],
      },
      {
        title: "Student Academy Portal",
        description:
          "Integrated learning & administrative dashboard for enrolled academy students to track academic progress, access course materials, and manage fees.",
        items: [
          "Academy course catalog & digital application submission",
          "Enrolled student dashboard with real-time course progress indicator",
          "Interactive class schedules and attendance logging overview",
          "Digital assignment submissions and instructor feedback center",
          "Fee breakdown, payment receipt generation, and digital certificates",
        ],
      },
    ],
    customerExperience: [
      "Discover Services & Special Packages",
      "Select Branch & Check Specialist Availability",
      "Book & Manage Appointments Seamlessly",
      "Submit Enquiries & Receive Notifications",
    ],
    studentExperience: [
      "Explore Academy Courses & Apply Online",
      "Access Class Schedules & Learning Materials",
      "Submit Assignments & Track Attendance",
      "View Fee Receipts & Download Certificates",
    ],
    technologies: [
      {
        category: "Frontend & Mobile",
        items: [
          "React Native / Mobile UI Architecture",
          "TypeScript",
          "Component-Driven Layouts",
        ],
      },
      {
        category: "State & UX",
        items: [
          "Role-Based Access Control (RBAC)",
          "Unified Navigation Context",
          "Mock API Layer",
        ],
      },
      {
        category: "Design System",
        items: [
          "Custom UI Component Library",
          "Responsive Layout Boundaries",
          "Dark/Light Neutral Palette",
        ],
      },
    ],
    designDecisions: [
      "Zero App-Switching Friction: Kept both customer and student interfaces in a single binary using dynamic routing.",
      "Neutral Base Design with Brand Highlights: Allowed beauty media and course cards to take visual precedence.",
      "Modular Mock Architecture: Structured data models to map 1:1 with REST API endpoints for upcoming backend integration.",
    ],
    currentStatus:
      "Frontend-focused mobile product design and component implementation using structured local mock data, engineered for seamless REST API backend integration.",
    futureBackendDirection:
      "Future roadmap includes Node.js/Express backend integration, JWT-based RBAC authentication, real-time push notifications, payment gateway integration, and live branch slot syncing.",
  },
  {
    id: "ai-attendance",
    number: "02",
    name: "AI Attendance System",
    category: "AI / Software Product",
    badge: "AI Recognition Engine",
    shortDescription:
      "An automated computer-vision facial recognition system for real-time identity verification, biometric attendance logging, and administrative reporting.",
    fullDescription:
      "The AI Attendance System is a software product designed to automate traditional attendance tracking. Utilizing deep learning facial recognition models via InsightFace and OpenCV, the platform extracts 512-dimensional facial embeddings to perform real-time identification, log timestamped attendance records, and present analytics via an interactive administrative dashboard.",
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
      "Developed an end-to-end computer-vision pipeline that captures video frames or images, detects facial landmarks, computes mathematical embedding vectors, matches them against registered records using cosine similarity thresholds, and logs verified attendance in real time.",
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
        title: "Biometric Face Recognition Engine",
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
      "Functional backend AI microservice implementation with FastAPI API endpoints, InsightFace embedding recognition, Redis caching, and verification logging workflows.",
  },
  {
    id: "gym-website",
    number: "03",
    name: "Gym Website",
    category: "Web / Frontend / UI",
    badge: "Web & UI Platform",
    shortDescription:
      "A high-impact, fully responsive fitness center website (FitForge Gym) featuring dynamic program discovery, trainer showcases, and lead-generation booking flows.",
    fullDescription:
      "FitForge Gym is a modern web application built to deliver a premium brand experience for a fitness center. Featuring sharp typography, fluid responsive layouts, structured program cards, trainer spotlight sections, and clear membership tier presentation, the website converts casual visitors into qualified membership leads.",
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
          'High-contrast headline typography with action CTAs ("Join Now", "Explore Programs")',
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
      "Complete frontend implementation with responsive component hierarchy, structured data models, and interactive lead-generation interfaces.",
  },
];
