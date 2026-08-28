import React from 'react';
import { IconCloudCanvas } from '../common/IconCloudCanvas';
import { InteractiveWorldGlobeCanvas } from '../common/InteractiveWorldGlobeCanvas';

export const BentoGridSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#121212] text-[#FAF9F5] border-b border-[#262624] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 border-b border-[#262624] pb-4 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#A1A19A] block mb-1">
              OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-4xl font-display tracking-tight text-[#FAF9F5]">
              Stack & Location
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A19A] mt-2 md:mt-0">
            A snapshot of my tools and global availability.
          </p>
        </div>

        {/* 2-Card Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Card 1: Interactive 3D Icon Cloud */}
          <div className="md:col-span-7 bg-[#1A1A1A] border border-[#2A2A28] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#3E3E3B] transition-colors group relative overflow-hidden min-h-[360px]">
            <div>
              <span className="text-xs font-mono uppercase text-[#A1A19A] block mb-1.5">
                Core Stack
              </span>
              <h3 className="text-xl sm:text-2xl font-display text-[#FAF9F5] leading-snug">
                Building web apps with React, mobile with React Native, and AI systems with Python.
              </h3>
            </div>

            {/* Interactive 3D Canvas Icon Cloud */}
            <div className="my-4 relative flex items-center justify-center flex-grow">
              <IconCloudCanvas />
            </div>

            <div className="text-xs font-mono text-[#A1A19A] flex items-center justify-between border-t border-[#2A2A28] pt-3">
              <span>REACT • REACT NATIVE • PYTHON • NODE</span>
              <span className="text-[#E5C158]">3D TECH CLOUD</span>
            </div>
          </div>

          {/* Card 2: Location & 3D Rotating Globe */}
          <div className="md:col-span-5 bg-[#161616] border border-[#2A2A28] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-colors relative overflow-hidden group min-h-[360px]">
            <div>
              <span className="text-xs font-mono text-[#82827C] block mb-1 uppercase">
                Location & Availability
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">
                Based in India
              </h4>
              <p className="text-xs text-[#A1A19A] leading-relaxed">
                Available for remote software engineering roles, full-stack projects, and international time zones.
              </p>
            </div>

            {/* Interactive 3D Rotating Globe */}
            <div className="flex justify-center items-center py-4 flex-grow">
              <InteractiveWorldGlobeCanvas size={150} />
            </div>

            <div className="text-xs font-mono text-[#A1A19A] flex items-center justify-between border-t border-[#2A2A28] pt-3">
              <span>REMOTE • GLOBAL TIMEZONES</span>
              <span className="text-[#10B981] font-bold">AVAILABLE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
