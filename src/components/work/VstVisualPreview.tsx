import React from "react";
import {
  Smartphone,
  UserCheck,
  GraduationCap,
  Calendar,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const VstVisualPreview: React.FC<{ isCompact?: boolean }> = ({
  isCompact = false,
}) => {
  return (
    <div
      className={`w-full bg-[#181817] text-[#FAF9F5] rounded-xl overflow-hidden p-6 sm:p-8 border border-[#2D2D2A] relative group transition-all duration-300 ${isCompact ? "min-h-[280px]" : "min-h-[360px]"}`}
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header Accent Badge */}
      <div className="flex items-center justify-between mb-6 border-b border-[#2A2A27] pb-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
          <span className="text-xs uppercase tracking-widest font-mono text-[#A1A19A]">
            ONE APP • ONE ACCOUNT
          </span>
        </div>
        <span className="text-xs font-mono text-[#E5C158] bg-[#E5C158]/10 px-2.5 py-1 rounded-full border border-[#E5C158]/20">
          DUAL UX ARCHITECTURE
        </span>
      </div>

      {/* Dual Experience Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {/* Customer Experience Card */}
        <div className="bg-[#222220] border border-[#333330] rounded-lg p-5 hover:border-[#444440] transition-colors">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-md bg-[#E5C158]/10 text-[#E5C158]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-[#FAF9F5]">
                Customer Experience
              </h4>
              <p className="text-xs text-[#A1A19A]">
                Beauty Services & Grooming
              </p>
            </div>
          </div>
          <div className="space-y-2 text-xs text-[#C5C5BE]">
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Service & Bridal Discovery</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <Calendar className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Branch Finder & Slot Booking</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <UserCheck className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Appointment Management</span>
            </div>
          </div>
        </div>

        {/* Student Experience Card */}
        <div className="bg-[#222220] border border-[#333330] rounded-lg p-5 hover:border-[#444440] transition-colors">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-md bg-[#64B5F6]/10 text-[#64B5F6]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-[#FAF9F5]">
                Student Experience
              </h4>
              <p className="text-xs text-[#A1A19A]">
                Academy & Learning Portal
              </p>
            </div>
          </div>
          <div className="space-y-2 text-xs text-[#C5C5BE]">
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <BookOpen className="w-3.5 h-3.5 text-[#64B5F6]" />
              <span>Course Catalog & Enrollment</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <Calendar className="w-3.5 h-3.5 text-[#64B5F6]" />
              <span>Schedules & Class Attendance</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#1A1A18] px-3 py-2 rounded border border-[#2D2D2A]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#64B5F6]" />
              <span>Assignments & Certificates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Model Footer Bar */}
      <div className="mt-5 bg-[#121211] border border-[#282825] rounded-md px-4 py-3 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <Smartphone className="w-4 h-4 text-[#A1A19A]" />
          <span className="text-xs font-mono text-[#D4D4CE]">
            Role-Based Auth State
          </span>
        </div>
        <div className="flex items-center space-x-3 text-xs text-[#888882] font-mono">
          <span className="text-[#E5C158]">customer</span>
          <span>↔</span>
          <span className="text-[#64B5F6]">student</span>
        </div>
      </div>
    </div>
  );
};
