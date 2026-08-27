import React from "react";
import { Camera, Cpu, Database, CheckCircle, ShieldCheck } from "lucide-react";

export const AiAttendanceVisualPreview: React.FC<{ isCompact?: boolean }> = ({
  isCompact = false,
}) => {
  return (
    <div
      className={`w-full bg-[#0F141C] text-[#F0F4F8] rounded-xl overflow-hidden p-6 sm:p-8 border border-[#1E293B] relative group transition-all duration-300 ${isCompact ? "min-h-[280px]" : "min-h-[360px]"}`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf805_1px,transparent_1px),linear-gradient(to_bottom,#38bdf805_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Header Pipeline Bar */}
      <div className="flex items-center justify-between mb-6 border-b border-[#1E293B] pb-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-mono text-[#94A3B8]">
            AI INFERENCE ENGINE
          </span>
        </div>
        <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-full border border-[#38BDF8]/20">
          InsightFace + OpenCV
        </span>
      </div>

      {/* Pipeline Visual Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative z-10">
        {/* Step 1: Capture */}
        <div className="bg-[#1E293B]/60 border border-[#334155] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#38BDF8] mb-1">
              01 / INPUT
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#F8FAFC]">
              <Camera className="w-4 h-4 text-[#38BDF8]" />
              <span>Frame Capture</span>
            </div>
          </div>
          <p className="text-[11px] text-[#94A3B8] mt-3">
            OpenCV video feed / image frame
          </p>
        </div>

        {/* Step 2: Extract Embeddings */}
        <div className="bg-[#1E293B]/60 border border-[#334155] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#38BDF8] mb-1">
              02 / EMBEDDING
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#F8FAFC]">
              <Cpu className="w-4 h-4 text-[#38BDF8]" />
              <span>512-D Feature Vector</span>
            </div>
          </div>
          <p className="text-[11px] text-[#94A3B8] mt-3">
            InsightFace ONNX extraction
          </p>
        </div>

        {/* Step 3: Match */}
        <div className="bg-[#1E293B]/60 border border-[#334155] rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#38BDF8] mb-1">
              03 / MATCH
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#F8FAFC]">
              <Database className="w-4 h-4 text-[#38BDF8]" />
              <span>Redis Vector Lookup</span>
            </div>
          </div>
          <p className="text-[11px] text-[#94A3B8] mt-3">
            Cosine similarity threshold
          </p>
        </div>

        {/* Step 4: Record */}
        <div className="bg-[#064E3B]/40 border border-[#059669]/40 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#34D399] mb-1">
              04 / LOGGED
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#F0FDF4]">
              <CheckCircle className="w-4 h-4 text-[#34D399]" />
              <span>Attendance Verified</span>
            </div>
          </div>
          <p className="text-[11px] text-[#A7F3D0] mt-3">
            Timestamped DB log entry
          </p>
        </div>
      </div>

      {/* Realtime Terminal Status */}
      <div className="mt-5 bg-[#090D14] border border-[#1E293B] rounded-md px-4 py-3 flex items-center justify-between relative z-10 font-mono text-xs text-[#94A3B8]">
        <div className="flex items-center space-x-2 overflow-hidden">
          <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
          <span className="truncate text-[#E2E8F0]">
            POST /api/v1/attendance/verify — 200 OK
          </span>
        </div>
        <span className="text-[#38BDF8] shrink-0">FastAPI Async</span>
      </div>
    </div>
  );
};
