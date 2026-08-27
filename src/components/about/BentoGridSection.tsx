import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Mail, Copy, Check } from 'lucide-react';
import { IconCloudCanvas } from '../common/IconCloudCanvas';
import { InteractiveWorldGlobeCanvas } from '../common/InteractiveWorldGlobeCanvas';
import { LogoFootballGame } from '../common/LogoFootballGame';

export const BentoGridSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sdlcItems = [
    {
      step: '01',
      title: 'Requirement & Planning',
      desc: 'Define product roadmap, technical architecture scope, user personas, and project goals.'
    },
    {
      step: '02',
      title: 'UI/UX & System Design',
      desc: 'Design responsive wireframes, editorial design systems, and type-safe database schemas.'
    },
    {
      step: '03',
      title: 'Full Stack & AI Dev',
      desc: 'Write clean TypeScript, React 19, React Native, Python, FastAPI & AI computer vision logic.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      desc: 'Rigorous unit/integration testing, LCP performance tuning, and WCAG AA accessibility.'
    },
    {
      step: '05',
      title: 'Deployment & CI/CD',
      desc: 'Automated Cloud build pipelines, asset optimization, and zero-downtime server hosting.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      desc: 'Continuous performance monitoring, security patches, API audits, and scale updates.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#121212] text-[#FAF9F5] border-b border-[#262624] relative overflow-hidden">
      {/* Editorial Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-[#262624] pb-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#A1A19A]">
                AT A GLANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display tracking-tight text-[#FAF9F5]">
              Product Development Bento
            </h2>
          </div>
          <p className="text-xs font-mono text-[#A1A19A] mt-3 md:mt-0">
            EXPERIENCE • CAPABILITIES • SDLC PROCESS
          </p>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Left Column, Tall Card): Interactive 3D Icon Cloud */}
          <div className="md:col-span-5 bg-[#1A1A1A] border border-[#2A2A28] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#3E3E3B] transition-colors group relative overflow-hidden min-h-[420px]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A1A19A] block mb-2">
                Tech Stack & Mindset
              </span>
              <h3 className="text-2xl sm:text-3xl font-display text-[#FAF9F5] leading-snug">
                Always excited to build real products with the latest tech.
              </h3>
            </div>

            {/* Interactive 3D Canvas Icon Cloud */}
            <div className="my-4 relative flex items-center justify-center flex-grow">
              <IconCloudCanvas />
            </div>

            <div className="text-xs font-mono text-[#A1A19A] flex items-center justify-between border-t border-[#2A2A28] pt-4">
              <span>WEB • MOBILE • AI</span>
              <span className="text-[#E5C158]">INTERACTIVE 3D CLOUD</span>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            
            {/* Top Row Split (Cards 2 & 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 2: Let's work together with Interactive Logo Football Game */}
              <div className="bg-[#1A1A1A] border border-[#2A2A28] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3E3E3B] transition-colors relative">
                <div>
                  <h4 className="text-xl font-bold font-display text-[#FAF9F5] mb-1">
                    Let's work together
                  </h4>
                  <p className="text-xs text-[#A1A19A] font-mono">
                    on your next project or product initiative
                  </p>
                </div>

                {/* Interactive Logo Football Game Mini-Pitch */}
                <LogoFootballGame />

                <button
                  onClick={handleCopyEmail}
                  className="w-full bg-[#242422] hover:bg-[#2F2F2C] border border-[#383834] rounded-lg py-2.5 px-3 flex items-center justify-between text-xs font-mono text-[#FAF9F5] transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-2 overflow-hidden">
                    <Mail className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                    <span className="truncate">{siteConfig.email}</span>
                  </div>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 ml-2" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#A1A19A] group-hover:text-[#FAF9F5] shrink-0 ml-2" />
                  )}
                </button>
              </div>

              {/* Card 3: Location & Timezone with Interactive 3D World Map Globe Canvas */}
              <div className="bg-[#1A1A1A] border border-[#2A2A28] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3E3E3B] transition-colors relative overflow-hidden group">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A1A19A] block mb-1">
                    Remote / Location
                  </span>
                  <h4 className="text-2xl font-bold font-display text-[#FAF9F5] mb-1">
                    India
                  </h4>
                  <p className="text-xs text-[#A1A19A] leading-relaxed">
                    Very flexible with time zone communications and async workflows.
                  </p>
                </div>

                {/* Interactive 3D World Map Globe Canvas */}
                <div className="my-3 flex justify-center items-center">
                  <InteractiveWorldGlobeCanvas size={140} />
                </div>

                {/* Status Bar */}
                <div className="pt-3 border-t border-[#2A2A28] flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#FAF9F5]">
                    <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-ping" />
                    <span>IST (UTC+5:30)</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                    AVAILABLE
                  </span>
                </div>
              </div>

            </div>

            {/* Card 4 (Bottom Wide Card): Currently Crafting & Full SDLC Process Marquee Ticker (Right to Left) */}
            <div className="bg-[#1A1A1A] border border-[#2A2A28] rounded-2xl p-6 sm:p-8 hover:border-[#3E3E3B] transition-colors space-y-4 overflow-hidden">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A1A19A] block mb-1">
                  Behind the Scenes • End-to-End Process
                </span>
                <h4 className="text-xl sm:text-2xl font-display text-[#FAF9F5]">
                  Currently crafting web, mobile & AI products through full SDLC phases.
                </h4>
              </div>

              {/* Continuous Auto-Scrolling Marquee Ticker (Right to Left) */}
              <div className="relative w-full overflow-hidden pt-2 pb-1">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee-rtl space-x-4">
                  {/* Duplicate 3 times for seamless continuous scroll loop */}
                  {[...sdlcItems, ...sdlcItems, ...sdlcItems].map((item, idx) => (
                    <div
                      key={idx}
                      className="min-w-[240px] max-w-[260px] bg-[#242422] border border-[#383834] rounded-xl p-4 flex flex-col justify-between hover:border-[#E5C158]/50 transition-colors shrink-0"
                    >
                      <div>
                        <span className="font-mono text-xs font-bold text-[#E5C158] block mb-1">
                          {item.step}
                        </span>
                        <h5 className="font-semibold text-xs text-[#FAF9F5] mb-1.5">
                          {item.title}
                        </h5>
                        <p className="text-[11px] text-[#A1A19A] leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
