import React from "react";
import { projectsData } from "../data/projectsData";
import { CaseStudyLayout } from "../components/casestudy/CaseStudyLayout";
import { AiAttendanceVisualPreview } from "../components/work/AiAttendanceVisualPreview";
import { Cpu, ArrowRight, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export const AiAttendanceCaseStudyPage: React.FC = () => {
  const project =
    projectsData.find((p) => p.id === "ai-attendance") || projectsData[1];
  const nextProject = projectsData[2]; // Gym Website

  return (
    <CaseStudyLayout project={project} nextProject={nextProject}>
      {/* Live Website Banner Bar */}
      {project.liveUrl && (
        <div className="bg-[#0F141C] text-[#F0F4F8] p-4 sm:p-5 rounded-xl border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-ping" />
            <div>
              <span className="text-xs font-mono text-[#38BDF8] font-bold block uppercase tracking-wider">
                LIVE PRODUCTION PLATFORM
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">
                99.8% Biometric Precision Facial Recognition
              </span>
            </div>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F141C] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded transition-all duration-200 shadow-sm"
          >
            <span>Visit Live Application</span>
            <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#0F141C]" />
          </a>
        </div>
      )}

      {/* 1. Feature Visual Banner */}
      <section className="space-y-4">
        <AiAttendanceVisualPreview />
      </section>

      {/* 2. Overview & Problem Statement */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            01 / OVERVIEW & PROBLEM
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-[#52524E] leading-relaxed">
          <h3 className="text-2xl font-display text-[#161616]">
            Automating Attendance Logging with Asynchronous Facial Inference
          </h3>
          <p>{project.fullDescription}</p>
          <div className="bg-[#F2EFE8] border border-[#E8E5DC] p-6 rounded-lg space-y-2">
            <h4 className="text-xs font-mono font-semibold text-[#161616] uppercase">
              PROBLEM STATEMENT
            </h4>
            <p className="text-sm text-[#161616]">{project.problem}</p>
          </div>
        </div>
      </section>

      {/* 3. AI Workflow Flowchart */}
      <section className="space-y-6 border-b border-[#E8E5DC] pb-12">
        <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C]">
          02 / AI RECOGNITION WORKFLOW
        </h2>

        {/* Step-by-step Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {project.workflowFlowchart?.map((flow) => (
            <div
              key={flow.step}
              className="bg-[#0F141C] text-[#F0F4F8] p-5 rounded-lg border border-[#1E293B] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#38BDF8] block mb-1">
                  {flow.step}
                </span>
                <h4 className="font-semibold text-sm text-[#F8FAFC] mb-2">
                  {flow.title}
                </h4>
                <p className="text-xs text-[#94A3B8] leading-normal">
                  {flow.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1E293B] flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Solution & Key Features */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            03 / SYSTEM SOLUTION & FEATURES
          </h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="text-base text-[#52524E] leading-relaxed">
            {project.solution}
          </p>

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

      {/* 5. Technology Stack Breakdown */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#E8E5DC] pb-12">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            04 / TECHNOLOGY & STACK
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
              KEY ARCHITECTURAL DECISIONS
            </h4>
            <div className="space-y-2">
              {project.designDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 text-sm text-[#52524E] bg-[#F2EFE8]/60 p-4 rounded-lg border border-[#E8E5DC]"
                >
                  <Cpu className="w-4 h-4 text-[#161616] shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Current Implementation Status */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#82827C] sticky top-28">
            05 / CURRENT STATUS
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="bg-[#0F141C] text-[#F0F4F8] p-6 rounded-lg border border-[#1E293B] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#34D399]">
              <ShieldCheck className="w-4 h-4" />
              <span>BACKEND SERVICE STATUS</span>
            </div>
            <p className="text-sm text-[#E2E8F0] leading-relaxed">
              {project.currentStatus}
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};
