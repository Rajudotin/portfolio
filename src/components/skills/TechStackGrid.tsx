import React from 'react';
import { TechIcons } from '../common/TechIcons';

interface TechItem {
  name: string;
  iconKey: string;
  color: string;
}

const techItems: TechItem[] = [
  { name: 'HTML5', iconKey: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', iconKey: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', iconKey: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', iconKey: 'TypeScript', color: '#3178C6' },
  { name: 'React 19', iconKey: 'React', color: '#61DAFB' },
  { name: 'React Native', iconKey: 'React', color: '#61DAFB' },
  { name: 'NextJS', iconKey: 'NextJS', color: '#FFFFFF' },
  { name: 'Tailwind CSS', iconKey: 'Tailwind', color: '#06B6D4' },
  { name: 'Shadcn UI', iconKey: 'Shadcn', color: '#FFFFFF' },
  { name: 'NodeJS', iconKey: 'NodeJS', color: '#339933' },
  { name: 'ExpressJS', iconKey: 'ExpressJS', color: '#FFFFFF' },
  { name: 'Python', iconKey: 'Python', color: '#3776AB' },
  { name: 'FastAPI', iconKey: 'FastAPI', color: '#059669' },
  { name: 'MongoDB', iconKey: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', iconKey: 'MySQL', color: '#4479A1' },
  { name: 'Redis', iconKey: 'Redis', color: '#DC2626' },
  { name: 'InsightFace', iconKey: 'InsightFace', color: '#E5C158' },
  { name: 'OpenCV', iconKey: 'OpenCV', color: '#5C3EE8' },
  { name: 'ONNXRuntime', iconKey: 'InsightFace', color: '#005A9E' },
  { name: 'GitHub', iconKey: 'GitHub', color: '#FFFFFF' },
  { name: 'Vite', iconKey: 'Vite', color: '#646CFF' },
  { name: 'Postman', iconKey: 'Postman', color: '#FF6C37' },
  { name: 'REST API', iconKey: 'RESTAPI', color: '#0096D6' }
];

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0C0C] text-[#FAF9F5] border-b border-[#262624] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing Geometric Accent & Header */}
        <div className="relative inline-block mb-12">
          {/* Geometric Triangle Glow Outline Accent */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 border-t-2 border-r-2 border-l-2 border-[#E5C158]/40 rotate-45 blur-xs pointer-events-none" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#E5C158]/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E5C158] uppercase block mb-2">
              BETTER THAN YESTERDAY.
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#FAF9F5] tracking-tight">
              My Tech Stack
            </h2>
          </div>
        </div>

        {/* Tech Badges Container Grid with Real SVG Brand Icons */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {techItems.map((tech) => {
            const IconComponent = TechIcons[tech.iconKey];
            return (
              <div
                key={tech.name}
                className="bg-[#1A1A1A] hover:bg-[#242422] border border-[#2A2A28] hover:border-[#4A4A46] rounded-full px-5 py-2.5 flex items-center space-x-3 text-xs sm:text-sm font-mono text-[#FAF9F5] shadow-sm hover:scale-105 transition-all duration-200 cursor-default group"
              >
                {/* Real SVG Icon */}
                {IconComponent ? (
                  <IconComponent size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: tech.color }} />
                )}
                <span className="font-semibold tracking-wide whitespace-nowrap">{tech.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
