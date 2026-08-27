import React from "react";
import { projectsData } from "../data/projectsData";
import { CaseStudyLayout } from "../components/casestudy/CaseStudyLayout";
import { VstVisualPreview } from "../components/work/VstVisualPreview";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Smartphone,
  ShieldCheck,
  Layers,
  Server,
} from "lucide-react";

export const VstCaseStudyPage: React.FC = () => {
  const project =
    projectsData.find((p) => p.id === "vst-beauty-academy") || projectsData[0];
  const nextProject = projectsData[1]; // AI Attendance System

  return (
    <CaseStudyLayout project={project} nextProject={nextProject}>
      {/* 1. Feature Visual Banner */}
      <section className="space-y-4">
        <VstVisualPreview />
      </section>

      {/* 2. Overview & Product Goal */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            01 / OVERVIEW & GOAL
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-[#52524E] leading-relaxed">
          <h3 className="text-2xl font-display text-[#161616]">
            Solving Application Fragmentation with Dual-Persona UX Architecture
          </h3>
          <p>{project.fullDescription}</p>

          <div className="bg-[#F2EFE8] border border-[#E8E5DC] p-6 rounded-lg space-y-3">
            <h4 className="text-sm font-semibold text-[#161616] font-mono">
              CORE PRODUCT RULE
            </h4>
            <p className="text-sm text-[#161616] italic font-serif text-lg">
              "A customer and a student do NOT use separate applications. The
              same application supports both experiences through a unified
              account and role-based experience model."
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Dual-Experience Architecture Diagram */}
      <section className="space-y-6 border-b border-[#E8E5DC] pb-12">
        <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C]">
          02 / DUAL-EXPERIENCE MODEL
        </h2>

        {/* Conceptual Diagram */}
        <div className="bg-[#161616] text-[#FAF9F5] p-6 sm:p-8 rounded-xl border border-[#262624] space-y-8">
          <div className="text-center max-w-md mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5C158]">
              UNIFIED AUTHENTICATION MODEL
            </span>
            <div className="mt-2 bg-[#262624] border border-[#3A3A36] px-4 py-3 rounded-lg flex items-center justify-center space-x-2">
              <Smartphone className="w-4 h-4 text-[#E5C158]" />
              <span className="font-semibold text-sm">
                Single User Account & Credentials
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Customer Column */}
            <div className="bg-[#222220] border border-[#333330] p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2 text-[#E5C158] font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>CUSTOMER EXPERIENCE</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A19A] border-b border-[#333330] pb-2">
                <span>DISCOVER</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span>BOOK</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span>MANAGE</span>
              </div>
              <ul className="space-y-2 text-xs text-[#C5C5BE]">
                {project.customerExperience?.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Column */}
            <div className="bg-[#222220] border border-[#333330] p-6 rounded-lg space-y-4">
              <div className="flex items-center space-x-2 text-[#64B5F6] font-semibold text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>STUDENT EXPERIENCE</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A19A] border-b border-[#333330] pb-2">
                <span>JOIN</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span>LEARN</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span>TRACK</span>
              </div>
              <ul className="space-y-2 text-xs text-[#C5C5BE]">
                {project.studentExperience?.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#64B5F6] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Detailed Feature Modules */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            03 / KEY FEATURES
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          {project.keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] border border-[#E8E5DC] p-6 rounded-lg space-y-4"
            >
              <h3 className="text-lg font-semibold text-[#161616] flex items-center space-x-2">
                <span className="font-mono text-xs text-[#82827C]">
                  0{idx + 1}.
                </span>
                <span>{feature.title}</span>
              </h3>
              <p className="text-sm text-[#52524E] leading-relaxed">
                {feature.description}
              </p>
              {feature.items && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {feature.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs text-[#52524E] flex items-center space-x-2 bg-[#F2EFE8] px-3 py-2 rounded"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161616] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. Design & Technical Decisions */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            04 / ARCHITECTURE & DESIGN
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-[#52524E] leading-relaxed">
            {project.architectureApproach}
          </p>
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase text-[#161616]">
              KEY DESIGN DECISIONS
            </h4>
            <div className="space-y-2">
              {project.designDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 text-sm text-[#52524E] bg-[#F2EFE8]/60 p-4 rounded-lg border border-[#E8E5DC]"
                >
                  <Layers className="w-4 h-4 text-[#161616] shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Current Status & Future Backend Direction */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            05 / STATUS & BACKEND ROADMAP
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="bg-[#FAF9F5] border border-[#E8E5DC] p-6 rounded-lg space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#82827C]">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>CURRENT IMPLEMENTATION STATUS</span>
            </div>
            <p className="text-sm text-[#161616] font-medium">
              {project.currentStatus}
            </p>
          </div>

          <div className="bg-[#161616] text-[#FAF9F5] p-6 rounded-lg space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5C158]">
              <Server className="w-4 h-4" />
              <span>FUTURE BACKEND INTEGRATION DIRECTION</span>
            </div>
            <p className="text-sm text-[#C5C5BE] leading-relaxed">
              {project.futureBackendDirection}
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};
