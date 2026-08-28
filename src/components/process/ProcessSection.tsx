import React from "react";

interface SdlcStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

const sdlcSteps: SdlcStep[] = [
  {
    number: "01",
    phase: "PHASE 01",
    title: "Requirement Analysis",
    description: "Gathering project goals, scope, user personas, and technical requirements.",
  },
  {
    number: "02",
    phase: "PHASE 02",
    title: "System Architecture",
    description: "Designing database schemas, REST API endpoints, microservices, and UI layouts.",
  },
  {
    number: "03",
    phase: "PHASE 03",
    title: "Implementation",
    description: "Writing clean, type-safe code using React, Node.js, Python, and React Native.",
  },
  {
    number: "04",
    phase: "PHASE 04",
    title: "Testing & QA",
    description: "Executing unit tests, performance tuning, LCP audits, and mobile responsiveness.",
  },
  {
    number: "05",
    phase: "PHASE 05",
    title: "Deployment & CI/CD",
    description: "Automating cloud build pipelines and hosting production builds on Vercel/Railway.",
  },
  {
    number: "06",
    phase: "PHASE 06",
    title: "Maintenance & Support",
    description: "Monitoring live API health, performance metrics, security patches, and updates.",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E8E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-[#E8E5DC] pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#82827C] block mb-1">
              SDLC WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-display tracking-tight text-[#161616]">
              Software Development Life Cycle
            </h2>
          </div>
          <span className="text-xs font-mono text-[#82827C] mt-2 sm:mt-0">
            6-phase engineering process for web, mobile & AI products.
          </span>
        </div>

        {/* 6-Phase SDLC Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sdlcSteps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-2xl space-y-2.5 hover:border-[#161616] hover:shadow-xs transition-all duration-200 group"
            >
              <div className="flex items-center justify-between border-b border-[#E8E5DC] pb-2.5">
                <span className="font-mono text-xs font-bold text-[#D97706]">
                  {step.number}
                </span>
                <span className="text-[10px] font-mono uppercase text-[#82827C] tracking-wider font-bold">
                  {step.phase}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-[#161616] group-hover:text-[#52524E] transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-[#52524E] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
