import React, { useState, useEffect, useRef } from "react";
import { RajuLogo } from "./RajuLogo";
import { Trophy } from "lucide-react";

export const LogoFootballGame: React.FC = () => {
  const [posX, setPosX] = useState(20);
  const [posY, setPosY] = useState(40);
  const [rotation, setRotation] = useState(0);
  const [goalScored, setGoalScored] = useState(false);
  const isKicking = useRef(false);

  // Smooth ambient juggling physics when idle
  useEffect(() => {
    let frameId: number;
    let time = 0;

    const animateIdle = () => {
      if (!isKicking.current) {
        time += 0.05;
        // Natural juggling arc
        const newX = 20 + Math.sin(time * 0.8) * 15;
        const newY = 40 + Math.abs(Math.sin(time * 2.5)) * -22;
        const newRot = (time * 120) % 360;

        setPosX(newX);
        setPosY(newY);
        setRotation(newRot);
      }
      frameId = requestAnimationFrame(animateIdle);
    };

    frameId = requestAnimationFrame(animateIdle);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Kick the logo football into the goal post!
  const handleKickBall = () => {
    if (isKicking.current) return;
    isKicking.current = true;
    setGoalScored(false);

    let startX = posX;
    let startY = posY;
    let targetX = 82; // Goal line X position
    let targetY = 32; // Goal center Y position
    let progress = 0;

    const kickInterval = setInterval(() => {
      progress += 0.06;
      if (progress >= 1) {
        clearInterval(kickInterval);
        setPosX(targetX);
        setPosY(targetY);
        setGoalScored(true);

        // Reset back to juggle after goal celebration
        setTimeout(() => {
          setGoalScored(false);
          isKicking.current = false;
        }, 2200);
      } else {
        // Parabolic kick arc
        const currentX = startX + (targetX - startX) * progress;
        const currentY =
          startY +
          (targetY - startY) * progress -
          Math.sin(progress * Math.PI) * 30;
        const currentRot = progress * 720;

        setPosX(currentX);
        setPosY(currentY);
        setRotation(currentRot);
      }
    }, 16);
  };

  return (
    <div
      onClick={handleKickBall}
      className="my-3 relative w-full h-28 bg-[#161616] border border-[#2E2E2C] rounded-xl overflow-hidden cursor-pointer group hover:border-[#E5C158]/60 transition-colors shadow-inner"
      title="Click or hover to kick the logo ball into the goal!"
    >
      {/* Mini Soccer Pitch Marking Lines */}
      <div className="absolute inset-0 border border-[#FAF9F5]/10 rounded-xl pointer-events-none" />

      {/* Center Pitch Circle */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-16 h-16 border border-[#FAF9F5]/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-full bg-[#FAF9F5]/10 pointer-events-none" />

      {/* Goal Post Box on Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 border-t-2 border-b-2 border-l-2 border-[#E5C158] bg-[#E5C158]/10 rounded-l-md pointer-events-none flex items-center justify-center">
        <div className="text-[9px] font-mono text-[#E5C158] uppercase font-bold rotate-90 tracking-widest opacity-80">
          GOAL
        </div>
      </div>

      {/* Goal Celebration Splash */}
      {goalScored && (
        <div className="absolute inset-0 bg-[#E5C158]/20 backdrop-blur-xs flex items-center justify-center animate-in fade-in duration-200 z-20">
          <div className="bg-[#121212] border border-[#E5C158] px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-xl animate-bounce">
            <Trophy className="w-4 h-4 text-[#E5C158]" />
            <span className="text-xs font-mono font-bold text-[#FAF9F5]">
              GOAL! LET'S WORK TOGETHER!
            </span>
          </div>
        </div>
      )}

      {/* Raju Logo Football (Bouncing / Kicking Logo Ball) */}
      <div
        className="absolute z-10 transition-transform duration-75"
        style={{
          left: `${posX}%`,
          top: `${posY}%`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="w-10 h-10 rounded-full bg-[#E5C158] text-[#121212] flex items-center justify-center shadow-[0_4px_12px_rgba(229,193,88,0.4)] border border-[#FAF9F5]/30 group-hover:scale-110 transition-transform">
          <RajuLogo size={24} className="text-[#121212]" />
        </div>
      </div>

      {/* Interactive Helper Prompt Pill */}
      <div className="absolute bottom-1.5 left-2 text-[9px] font-mono text-[#A1A19A] uppercase tracking-wider bg-[#121212]/80 px-2 py-0.5 rounded border border-[#2E2E2C]">
        CLICK LOGO TO KICK ⚽
      </div>
    </div>
  );
};
