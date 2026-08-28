export interface Project {
  id: string;
  number: string;
  name: string;
  category:
    | "Mobile Application / Product"
    | "AI / Software Product"
    | "Web / Frontend / UI";
  badge: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  responsibilities: string[];
  tags: string[];
  slug: string;
  visualType: "vst" | "ai-attendance" | "gym";
  liveUrl?: string;
  location?: string;
  problem: string;
  solution: string;
  architectureApproach: string;
  keyFeatures: {
    title: string;
    description: string;
    items?: string[];
  }[];
  workflowFlowchart?: {
    step: string;
    title: string;
    description: string;
  }[];
  customerExperience?: string[];
  studentExperience?: string[];
  technologies: {
    category: string;
    items: string[];
  }[];
  designDecisions: string[];
  currentStatus: string;
  futureBackendDirection?: string;
  linkText?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
