import React from "react";
import { siteConfig } from "../../data/siteConfig";
import { CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-[#FAF9F5] border-b border-[#E8E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#161616]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#82827C]">
                PRODUCT PHILOSOPHY & BACKGROUND
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display tracking-tight text-[#161616] leading-tight">
              Designing & engineering products that solve real problems.
            </h2>

            <div className="pt-4">
              <div className="inline-flex flex-col space-y-2 p-5 bg-[#F2EFE8] border border-[#E8E5DC] rounded-lg">
                <span className="text-xs font-mono font-semibold uppercase text-[#82827C]">
                  CORE COMMITMENT
                </span>
                <p className="text-sm font-serif italic text-[#161616]">
                  "Delivering production-grade, highly intuitive digital
                  experiences with total transparency and engineering rigor."
                </p>
              </div>
            </div>
          </div>

          {/* Right Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-base text-[#52524E] leading-relaxed">
            {siteConfig.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E8E5DC] font-mono text-xs text-[#161616]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Product-First Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Cross-Platform Execution (Web, Mobile, AI)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Design System & UI Rigor</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero Artificial Hype</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
