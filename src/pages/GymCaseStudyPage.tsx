import React from "react";
import { projectsData } from "../data/projectsData";
import { CaseStudyLayout } from "../components/casestudy/CaseStudyLayout";
import { GymVisualPreview } from "../components/work/GymVisualPreview";
import { Layout, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export const GymCaseStudyPage: React.FC = () => {
  const project =
    projectsData.find((p) => p.id === "gym-website") || projectsData[2];
  const nextProject = projectsData[0]; // Loop back to Project 01 (VST)

  return (
    <CaseStudyLayout project={project} nextProject={nextProject}>
      {/* Live Website Banner Bar */}
      {project.liveUrl && (
        <div className="bg-[#141414] text-[#F5F5F5] p-4 sm:p-5 rounded-xl border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#CCFF00] animate-ping" />
            <div>
              <span className="text-xs font-mono text-[#CCFF00] font-bold block uppercase tracking-wider">
                LIVE PRODUCTION WEBSITE
              </span>
              <span className="text-xs font-mono text-[#A3A3A3]">
                FitForge Athletic Club • 24/7 Access Platform
              </span>
            </div>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#121212] bg-[#CCFF00] hover:bg-[#D8FF33] rounded transition-all duration-200 shadow-sm"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#121212]" />
          </a>
        </div>
      )}

      {/* 1. Feature Visual Banner */}
      <section className="space-y-4">
        <GymVisualPreview />
      </section>

      {/* 2. Overview & Design Direction */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            01 / OVERVIEW & DESIGN DIRECTION
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-[#52524E] leading-relaxed">
          <h3 className="text-2xl font-display text-[#161616]">
            Crafting a High-Impact Digital Fitness Platform (FitForge Gym)
          </h3>
          <p>{project.fullDescription}</p>

          <div className="bg-[#F2EFE8] border border-[#E8E5DC] p-6 rounded-lg space-y-2">
            <h4 className="text-xs font-mono font-semibold text-[#161616] uppercase">
              DESIGN OBJECTIVE
            </h4>
            <p className="text-sm text-[#161616]">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* 3. Homepage Experience & Key Modules */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            02 / HOMEPAGE EXPERIENCE
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

      {/* 4. Responsive Experience & Technology */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            03 / RESPONSIVE UI & TECH
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-[#FAF9F5] border border-[#E8E5DC] p-5 rounded-lg"
              >
                <span className="text-xs font-mono font-semibold text-[#82827C] block mb-3 uppercase">
                  {tech.category}
                </span>
                <ul className="space-y-2 text-xs text-[#161616] font-medium">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase text-[#161616]">
              KEY FRONTEND DECISIONS
            </h4>
            <div className="space-y-2">
              {project.designDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 text-sm text-[#52524E] bg-[#F2EFE8]/60 p-4 rounded-lg border border-[#E8E5DC]"
                >
                  <Layout className="w-4 h-4 text-[#161616] shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Current Implementation Status */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            04 / CURRENT STATUS
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="bg-[#141414] text-[#F5F5F5] p-6 rounded-lg border border-[#262626] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#CCFF00]">
              <ShieldCheck className="w-4 h-4" />
              <span>FRONTEND STATUS</span>
            </div>
            <p className="text-sm text-[#D4D4D4] leading-relaxed">
              {project.currentStatus}
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};
