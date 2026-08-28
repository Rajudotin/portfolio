import React from "react";
import { ArrowDown, ArrowUpRight, Smartphone, Cpu, Layout, MapPin } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 border-b border-[#E8E5DC] overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16161608_1px,transparent_1px),linear-gradient(to_bottom,#16161608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Human Personal Status Tag */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center space-x-2 bg-[#F2EFE8] border border-[#E8E5DC] px-3.5 py-1 rounded-full text-xs font-mono text-[#52524E]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="font-semibold text-[#161616]">Bala Venkataraju Singampalli</span>
            <span className="text-[#82827C]">• Software Engineer</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 bg-[#F2EFE8] border border-[#E8E5DC] px-3 py-1 rounded-full text-xs font-mono text-[#52524E]">
            <MapPin className="w-3.5 h-3.5 text-[#059669]" />
            <span>India</span>
          </div>
        </div>

        {/* Natural Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-[#161616] leading-[1.08] max-w-4xl mb-4">
          I build web apps, mobile products & AI systems.
        </h1>

        {/* Supporting Copy & CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-base sm:text-lg text-[#52524E] leading-relaxed text-balance">
              {siteConfig.heroSubheadline}
            </p>

            {/* Practical Focus Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center space-x-1.5 bg-[#FAF9F5] border border-[#E8E5DC] px-3 py-1 rounded-full text-xs font-mono text-[#52524E]">
                <Layout className="w-3.5 h-3.5 text-[#161616]" />
                <span>Web Platforms</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-[#FAF9F5] border border-[#E8E5DC] px-3 py-1 rounded-full text-xs font-mono text-[#52524E]">
                <Smartphone className="w-3.5 h-3.5 text-[#161616]" />
                <span>Mobile Apps</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 bg-[#FAF9F5] border border-[#E8E5DC] px-3 py-1 rounded-full text-xs font-mono text-[#52524E]">
                <Cpu className="w-3.5 h-3.5 text-[#161616]" />
                <span>AI & Vision</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-2.5 md:justify-end">
            <button
              onClick={() => scrollToSection("#work")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:translate-y-0.5"
            >
              <span>View Featured Work</span>
              <ArrowDown className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#F2EFE8] border border-[#161616] rounded-lg transition-all duration-200 cursor-pointer shadow-xs active:translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 pt-4 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#82827C] gap-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-[#161616] font-medium">
            Open for software engineering roles & projects
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <span>VST Beauty Care</span>
          <span>•</span>
          <span>EduVision AI</span>
          <span>•</span>
          <span>FitForge Gym</span>
        </div>
      </div>
    </section>
  );
};
