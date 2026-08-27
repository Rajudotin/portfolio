import React from "react";
import { Dumbbell, Users, ChevronRight, Zap, Flame } from "lucide-react";

export const GymVisualPreview: React.FC<{ isCompact?: boolean }> = ({
  isCompact = false,
}) => {
  return (
    <div
      className={`w-full bg-[#141414] text-[#F5F5F5] rounded-xl overflow-hidden p-6 sm:p-8 border border-[#262626] relative group transition-all duration-300 ${isCompact ? "min-h-[280px]" : "min-h-[360px]"}`}
    >
      {/* Background Graphic Accent */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#E63946]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between mb-6 border-b border-[#262626] pb-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E63946]" />
          <span className="text-xs uppercase tracking-widest font-mono text-[#A3A3A3]">
            FITFORGE GYM PLATFORM
          </span>
        </div>
        <span className="text-xs font-mono text-[#E63946] bg-[#E63946]/10 px-2.5 py-1 rounded-full border border-[#E63946]/20">
          REACT 19 + TAILWIND
        </span>
      </div>

      {/* Mock Hero & Feature Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        {/* Module 1: High Impact Hero */}
        <div className="bg-[#1F1F1F] border border-[#2E2E2E] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-1.5 text-[#E63946] text-xs font-semibold mb-2">
              <Flame className="w-4 h-4" />
              <span>HIGH IMPACT HERO</span>
            </div>
            <h5 className="text-sm font-bold tracking-tight text-[#FFFFFF]">
              FORGE YOUR BODY
            </h5>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Editorial photography hero with responsive CTAs.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#2E2E2E] flex items-center justify-between text-[11px] text-[#D4D4D4]">
            <span>Lead Gen Booking</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E63946]" />
          </div>
        </div>

        {/* Module 2: Programs Showcase */}
        <div className="bg-[#1F1F1F] border border-[#2E2E2E] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-1.5 text-[#E63946] text-xs font-semibold mb-2">
              <Dumbbell className="w-4 h-4" />
              <span>TRAINING MODULES</span>
            </div>
            <h5 className="text-sm font-bold tracking-tight text-[#FFFFFF]">
              STRENGTH & HIIT
            </h5>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Structured program cards & class schedules.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#2E2E2E] flex items-center justify-between text-[11px] text-[#D4D4D4]">
            <span>Program Matrix</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E63946]" />
          </div>
        </div>

        {/* Module 3: Trainer Spotlight & Tiers */}
        <div className="bg-[#1F1F1F] border border-[#2E2E2E] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-1.5 text-[#E63946] text-xs font-semibold mb-2">
              <Users className="w-4 h-4" />
              <span>TRAINER SPOTLIGHT</span>
            </div>
            <h5 className="text-sm font-bold tracking-tight text-[#FFFFFF]">
              EXPERT COACHING
            </h5>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Trainer bio spotlights & transparent pricing.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#2E2E2E] flex items-center justify-between text-[11px] text-[#D4D4D4]">
            <span>Membership Tiers</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E63946]" />
          </div>
        </div>
      </div>

      {/* Responsive Bar */}
      <div className="mt-5 bg-[#0D0D0D] border border-[#262626] rounded-md px-4 py-3 flex items-center justify-between relative z-10 font-mono text-xs text-[#A3A3A3]">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-[#E63946]" />
          <span>Mobile-First Touch Target Optimization</span>
        </div>
        <span className="text-[#F5F5F5]">360px → 1440px</span>
      </div>
    </div>
  );
};
