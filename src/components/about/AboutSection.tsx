import React from "react";
import { siteConfig } from "../../data/siteConfig";
import { Layout, Smartphone, Cpu, CheckCircle2, GraduationCap } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-[#FAF9F5] border-b border-[#E8E5DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[#E8E5DC] pb-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#82827C] block mb-1">
              BACKGROUND
            </span>
            <h2 className="text-2xl sm:text-4xl font-display tracking-tight text-[#161616]">
              About Me
            </h2>
          </div>
          <p className="text-xs font-mono text-[#82827C] mt-2 md:mt-0">
            Software Engineer • Full-Stack, Mobile & AI
          </p>
        </div>

        {/* 3 Core Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Domain 1: Web Platforms */}
          <div className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-2xl space-y-2.5 hover:border-[#161616] transition-colors">
            <div className="w-8 h-8 rounded-xl bg-[#F2EFE8] border border-[#E8E5DC] flex items-center justify-center text-[#161616]">
              <Layout className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#82827C] block mb-0.5 uppercase">
                WEB DEVELOPMENT
              </span>
              <h3 className="text-base font-bold font-display text-[#161616]">
                Full-Stack Web Apps
              </h3>
            </div>
            <p className="text-xs text-[#52524E] leading-relaxed">
              Building responsive React & TypeScript web applications backed by Node.js, Express, and Django REST APIs with MySQL, MongoDB, and Redis.
            </p>
          </div>

          {/* Domain 2: Mobile Products */}
          <div className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-2xl space-y-2.5 hover:border-[#161616] transition-colors">
            <div className="w-8 h-8 rounded-xl bg-[#F2EFE8] border border-[#E8E5DC] flex items-center justify-center text-[#161616]">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#82827C] block mb-0.5 uppercase">
                MOBILE DEVELOPMENT
              </span>
              <h3 className="text-base font-bold font-display text-[#161616]">
                React Native Apps
              </h3>
            </div>
            <p className="text-xs text-[#52524E] leading-relaxed">
              Developing mobile app interfaces with React Native, role-based navigation, and structured component design systems.
            </p>
          </div>

          {/* Domain 3: AI Systems */}
          <div className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-2xl space-y-2.5 hover:border-[#161616] transition-colors">
            <div className="w-8 h-8 rounded-xl bg-[#F2EFE8] border border-[#E8E5DC] flex items-center justify-center text-[#161616]">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#82827C] block mb-0.5 uppercase">
                AI & VISION
              </span>
              <h3 className="text-base font-bold font-display text-[#161616]">
                Computer Vision Systems
              </h3>
            </div>
            <p className="text-xs text-[#52524E] leading-relaxed">
              Implementing biometric face recognition pipelines (InsightFace, OpenCV) and YOLOv8 object detection models in Python.
            </p>
          </div>

        </div>

        {/* Narrative & Education Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-6 border-t border-[#E8E5DC]">
          
          <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-[#52524E] leading-relaxed">
            {siteConfig.aboutBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-3">
            {/* Real Education Card */}
            <div className="bg-[#F2EFE8] border border-[#E8E5DC] p-5 rounded-xl space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#161616] font-bold">
                <GraduationCap className="w-4 h-4 text-[#D97706]" />
                <span>EDUCATION</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#161616]">
                  Acharya Nagarjuna University, Guntur
                </h4>
                <p className="text-xs text-[#52524E] font-mono mt-0.5">
                  B.Tech in Artificial Intelligence & Machine Learning (2022 – 2026)
                </p>
                <span className="inline-block mt-2 text-xs font-mono text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded border border-[#059669]/20 font-bold">
                  CGPA: 8.2 / 10
                </span>
              </div>
            </div>

            {/* Practical engineering checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-[#161616]">
              <div className="flex items-center space-x-2 bg-[#FAF9F5] border border-[#E8E5DC] p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>REST API Architecture</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#FAF9F5] border border-[#E8E5DC] p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>SQL & NoSQL Databases</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#FAF9F5] border border-[#E8E5DC] p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>Microservice Backends</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#FAF9F5] border border-[#E8E5DC] p-2 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                <span>Live Production Hosting</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
