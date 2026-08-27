import React from "react";
import { ArrowDown, ArrowUpRight, Smartphone, Cpu, Layout } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-[#E8E5DC] overflow-hidden">
      {/* Background Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16161608_1px,transparent_1px),linear-gradient(to_bottom,#16161608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Top Capability Pill Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="inline-flex items-center space-x-1.5 bg-[#F2EFE8] border border-[#E8E5DC] px-3 py-1.5 rounded-full text-xs font-mono text-[#52524E]">
            <Smartphone className="w-3.5 h-3.5 text-[#161616]" />
            <span>Mobile Products</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 bg-[#F2EFE8] border border-[#E8E5DC] px-3 py-1.5 rounded-full text-xs font-mono text-[#52524E]">
            <Cpu className="w-3.5 h-3.5 text-[#161616]" />
            <span>AI Systems</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 bg-[#F2EFE8] border border-[#E8E5DC] px-3 py-1.5 rounded-full text-xs font-mono text-[#52524E]">
            <Layout className="w-3.5 h-3.5 text-[#161616]" />
            <span>Web Platforms</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-tight text-[#161616] leading-[1.05] max-w-5xl mb-8">
          Building digital products across{" "}
          <span className="italic font-normal">web</span>,{" "}
          <span className="italic font-normal">mobile</span> &{" "}
          <span className="italic font-normal">AI</span>.
        </h1>

        {/* Supporting Copy & Action CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-lg sm:text-xl text-[#52524E] leading-relaxed text-balance">
              {siteConfig.heroSubheadline}
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-4 md:justify-end">
            <button
              onClick={() => scrollToSection("#work")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#161616] hover:bg-[#262624] rounded-md transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#161616] bg-[#FAF9F5] hover:bg-[#F2EFE8] border border-[#161616] rounded-md transition-all duration-200 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Architectural Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 pt-6 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#82827C] gap-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[#161616] font-medium">
            AVAILABLE FOR NEW PRODUCT INITIATIVES
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span>01 / VST BEAUTY CARE</span>
          <span>02 / AI ATTENDANCE</span>
          <span>03 / GYM WEBSITE</span>
        </div>
      </div>
    </section>
  );
};
