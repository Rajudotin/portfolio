import React from 'react';
import { TechIcons } from '../common/TechIcons';

interface TechItem {
  name: string;
  iconKey: string;
  color: string;
}

interface TechGroup {
  category: string;
  description: string;
  items: TechItem[];
}

const groupedTech: TechGroup[] = [
  {
    category: "FRONTEND & MOBILE",
    description: "Web interfaces & cross-platform mobile apps",
    items: [
      { name: 'React 19', iconKey: 'React', color: '#61DAFB' },
      { name: 'React Native', iconKey: 'React', color: '#61DAFB' },
      { name: 'TypeScript', iconKey: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', iconKey: 'JavaScript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', iconKey: 'Tailwind', color: '#06B6D4' },
      { name: 'HTML5', iconKey: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', iconKey: 'CSS3', color: '#1572B6' },
      { name: 'Vite', iconKey: 'Vite', color: '#646CFF' },
    ]
  },
  {
    category: "BACKEND & DATABASES",
    description: "APIs, microservices & database management",
    items: [
      { name: 'NodeJS', iconKey: 'NodeJS', color: '#339933' },
      { name: 'ExpressJS', iconKey: 'ExpressJS', color: '#FFFFFF' },
      { name: 'Python', iconKey: 'Python', color: '#3776AB' },
      { name: 'Django', iconKey: 'Python', color: '#092E20' },
      { name: 'FastAPI', iconKey: 'FastAPI', color: '#059669' },
      { name: 'REST API', iconKey: 'RESTAPI', color: '#0096D6' },
      { name: 'MySQL', iconKey: 'MySQL', color: '#4479A1' },
      { name: 'MongoDB', iconKey: 'MongoDB', color: '#47A248' },
      { name: 'Redis', iconKey: 'Redis', color: '#DC2626' },
    ]
  },
  {
    category: "AI & COMPUTER VISION",
    description: "Facial recognition, speech AI & vision models",
    items: [
      { name: 'InsightFace', iconKey: 'InsightFace', color: '#E5C158' },
      { name: 'OpenCV', iconKey: 'OpenCV', color: '#5C3EE8' },
      { name: 'YOLOv8', iconKey: 'Python', color: '#10B981' },
      { name: 'Whisper AI', iconKey: 'Python', color: '#64B5F6' },
      { name: 'ONNXRuntime', iconKey: 'InsightFace', color: '#005A9E' },
    ]
  },
  {
    category: "TOOLS & DEPLOYMENT",
    description: "Version control, testing & cloud hosting",
    items: [
      { name: 'Git & GitHub', iconKey: 'GitHub', color: '#FFFFFF' },
      { name: 'Vercel Cloud', iconKey: 'NextJS', color: '#FFFFFF' },
      { name: 'Railway & Render', iconKey: 'NextJS', color: '#805AD5' },
      { name: 'Postman', iconKey: 'Postman', color: '#FF6C37' },
    ]
  }
];

export const TechStackGrid: React.FC = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-[#0C0C0C] text-[#FAF9F5] border-b border-[#262624] relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E5C158] uppercase block mb-1">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#FAF9F5] tracking-tight mb-2">
            Tools & Frameworks
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#A1A19A] leading-relaxed">
            All technologies and frameworks I use to build full-stack web applications, mobile products, and AI systems.
          </p>
        </div>

        {/* Grouped Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groupedTech.map((group) => (
            <div
              key={group.category}
              className="bg-[#161616] border border-[#2A2A28] p-5 sm:p-6 rounded-2xl space-y-3 hover:border-[#383834] transition-colors"
            >
              <div className="border-b border-[#262624] pb-2.5">
                <span className="text-xs font-mono font-bold text-[#E5C158] tracking-wider uppercase block">
                  {group.category}
                </span>
                <p className="text-xs text-[#82827C] font-mono mt-0.5">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => {
                  const IconComponent = TechIcons[tech.iconKey];
                  return (
                    <div
                      key={tech.name}
                      className="bg-[#222220] border border-[#333330] hover:border-[#FAF9F5]/40 rounded-xl px-3 py-1.5 flex items-center space-x-2 text-xs font-mono text-[#FAF9F5] transition-all cursor-default shadow-xs"
                    >
                      {IconComponent ? (
                        <IconComponent size={14} />
                      ) : (
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: tech.color }}
                        />
                      )}
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
