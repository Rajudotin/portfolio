import React, { useState } from "react";
import { Sparkles, GraduationCap, MapPin, Calendar, Star, Clock } from "lucide-react";

export const VstVisualPreview: React.FC<{ isCompact?: boolean }> = ({
  isCompact = false,
}) => {
  const [activeMobileTab, setActiveMobileTab] = useState<"salon" | "academy">("salon");

  return (
    <div
      className={`w-full bg-transparent rounded-2xl overflow-hidden relative group transition-all duration-300 ${
        isCompact ? "min-h-[340px]" : "min-h-[380px] sm:min-h-[440px]"
      }`}
    >
      {/* BASE LAYER: Clean Desktop Web Browser Mockup (Edge to Edge) */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#2E2E2C] bg-[#1C1C1A] shadow-xl transition-transform duration-500 group-hover:scale-[1.005]">
        {/* Browser Header Bar */}
        <div className="bg-[#1C1C1A] border-b border-[#2A2A28] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="text-[10px] font-mono text-[#A1A19A] ml-2 hidden sm:inline">
              https://vst-saloon.vercel.app
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-0.5 rounded border border-[#E5C158]/20">
            LIVE WEB APP
          </span>
        </div>

        {/* Coverpage Banner Image Showcase */}
        <div className="relative w-full overflow-hidden bg-[#161616]">
          <img
            src="/images/vst_coverpage.png"
            alt="VST Beauty Care & Academy Coverpage"
            className="w-full h-auto object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* OVERLAY LAYER: Sleek Floating Mobile App Phone Mockup (Shifted Slightly Right) */}
      <div className="absolute right-0 sm:right-2 bottom-1 sm:bottom-3 w-[165px] sm:w-[195px] bg-[#121212] rounded-[36px] border-[5px] border-[#383834] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between z-20 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform duration-300">
        
        {/* Mobile Notch & Status Bar */}
        <div className="bg-[#181816] pt-2.5 px-3.5 pb-1 flex items-center justify-between border-b border-[#262624] text-[9px] font-mono text-[#A1A19A]">
          <span>9:41</span>
          <div className="w-14 h-2.5 bg-[#000000] rounded-full mx-auto" />
          <span>5G</span>
        </div>

        {/* Interactive App Screen Header Switcher */}
        <div className="bg-[#1C1C1A] px-2 py-1.5 border-b border-[#262624] flex items-center justify-around text-[9px] font-mono font-bold">
          <button
            onClick={() => setActiveMobileTab("salon")}
            className={`px-2.5 py-1 rounded-full flex items-center space-x-1 cursor-pointer transition-colors ${
              activeMobileTab === "salon"
                ? "bg-[#E5C158] text-[#121212] shadow-xs"
                : "text-[#A1A19A] hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Salon</span>
          </button>

          <button
            onClick={() => setActiveMobileTab("academy")}
            className={`px-2.5 py-1 rounded-full flex items-center space-x-1 cursor-pointer transition-colors ${
              activeMobileTab === "academy"
                ? "bg-[#64B5F6] text-[#121212] shadow-xs"
                : "text-[#A1A19A] hover:text-white"
            }`}
          >
            <GraduationCap className="w-3 h-3" />
            <span>Academy</span>
          </button>
        </div>

        {/* Taller Mobile Screen Content Body */}
        <div className="p-3 space-y-2.5 bg-[#121212] min-h-[270px] sm:min-h-[300px] text-[#FAF9F5]">
          {activeMobileTab === "salon" ? (
            <div className="space-y-2.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#E5C158]">
                <span className="flex items-center space-x-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>VST SALON</span>
                </span>
                <span className="text-[8px] text-[#10B981] font-bold">OPEN NOW</span>
              </div>

              <div className="bg-gradient-to-br from-[#242420] to-[#1A1A18] border border-[#E5C158]/40 p-2.5 rounded-xl">
                <span className="text-[8px] font-mono text-[#E5C158] block mb-0.5">BRIDAL SPECIAL</span>
                <h6 className="text-[10px] font-bold text-white leading-tight mb-1.5">
                  Beauty for Every Special Moment
                </h6>
                <span className="text-[8px] font-mono bg-[#E5C158] text-[#121212] px-2.5 py-1 rounded-lg block text-center font-bold">
                  Book Slot ✓
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-[8px] font-mono text-[#A1A19A]">
                  <span>POPULAR SERVICES</span>
                  <span className="text-[#E5C158]">₹ INR</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[8px] font-mono">
                  <div className="bg-[#1A1A18] border border-[#2A2A28] p-1.5 rounded-lg">
                    <div className="flex items-center justify-between text-white font-bold mb-0.5">
                      <span className="truncate">Bridal</span>
                      <Star className="w-2 h-2 fill-[#E5C158] text-[#E5C158]" />
                    </div>
                    <span className="text-[#E5C158] block">₹8,999</span>
                  </div>
                  <div className="bg-[#1A1A18] border border-[#2A2A28] p-1.5 rounded-lg">
                    <div className="flex items-center justify-between text-white font-bold mb-0.5">
                      <span className="truncate">Hair</span>
                      <Star className="w-2 h-2 fill-[#E5C158] text-[#E5C158]" />
                    </div>
                    <span className="text-[#E5C158] block">₹2,499</span>
                  </div>
                </div>
              </div>

              {/* Slot Indicator */}
              <div className="bg-[#1A1A18] border border-[#2A2A28] p-2 rounded-lg text-[8px] font-mono flex items-center justify-between">
                <div className="flex items-center space-x-1 text-[#A1A19A]">
                  <Calendar className="w-2.5 h-2.5 text-[#E5C158]" />
                  <span>Today 4:00 PM</span>
                </div>
                <span className="text-[#10B981] font-bold">CONFIRMED</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#64B5F6]">
                <span>STUDENT PORTAL</span>
                <span className="text-[8px] text-[#E5C158] font-bold">ACTIVE</span>
              </div>

              <div className="bg-[#16202C] border border-[#64B5F6]/40 p-2.5 rounded-xl space-y-1.5">
                <span className="text-[8px] font-mono text-[#64B5F6] block">ACADEMY DIPLOMA</span>
                <h6 className="text-[10px] font-bold text-white">Beautician Course</h6>
                <div className="w-full h-1.5 bg-[#121620] rounded-full overflow-hidden border border-[#64B5F6]/20">
                  <div className="w-[78%] h-full bg-[#64B5F6]" />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono text-[#A1A19A]">
                  <span>Modules 14/18</span>
                  <span className="text-white font-bold">78%</span>
                </div>
              </div>

              <div className="bg-[#1A1A18] border border-[#2A2A28] p-2 rounded-lg text-[8px] font-mono space-y-1">
                <div className="flex items-center space-x-1 text-[#64B5F6]">
                  <Clock className="w-2.5 h-2.5" />
                  <span className="font-bold">Today's Class</span>
                </div>
                <span className="text-[#A1A19A] block">10:00 AM — Practical Makeup</span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Bottom Home Bar */}
        <div className="bg-[#181816] py-1.5 flex justify-center border-t border-[#262624]">
          <div className="w-14 h-1 bg-white/40 rounded-full" />
        </div>
      </div>

    </div>
  );
};
