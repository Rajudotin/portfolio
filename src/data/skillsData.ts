import { SkillCategory } from "../types";

export const skillsCategories: SkillCategory[] = [
  {
    title: "FRONTEND & MOBILE",
    description:
      "Building high-performance, accessible, type-safe web platforms and dual-role mobile applications.",
    iconName: "Code",
    skills: [
      "React 19",
      "React Native",
      "TypeScript",
      "JavaScript (Vanilla JS)",
      "Tailwind CSS v4",
      "HTML5 & CSS3",
      "Vite",
      "Responsive Layout Systems",
    ],
  },
  {
    title: "BACKEND & DATABASES",
    description:
      "Architecting microservices, RESTful API gateways, and polyglot database persistence pipelines.",
    iconName: "Layers",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "FastAPI",
      "REST API Design",
      "MySQL",
      "MongoDB",
      "Redis Vector Cache",
    ],
  },
  {
    title: "AI & COMPUTER VISION",
    description:
      "Integrating deep learning facial recognition models, object detection pipelines, and speech recognition.",
    iconName: "Cpu",
    skills: [
      "InsightFace (ArcFace)",
      "OpenCV",
      "YOLOv8",
      "OpenAI Whisper",
      "PyTorch",
      "ONNXRuntime",
      "Cloudinary Storage",
    ],
  },
  {
    title: "TOOLS & DEPLOYMENT",
    description:
      "Streamlining automated build pipelines, containerized microservices, and multi-cloud hosting.",
    iconName: "Layout",
    skills: [
      "Git & GitHub",
      "Docker",
      "Nginx Gateway",
      "Vercel Cloud",
      "Railway",
      "Render",
      "Postman",
      "ffmpeg",
    ],
  },
];
