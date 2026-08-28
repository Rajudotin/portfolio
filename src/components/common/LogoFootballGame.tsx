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
      className="my-3 relative w-full h-28 bg-[#161616] border border-white/20 rounded-xl overflow-hidden cursor-pointer group hover:border-white transition-colors shadow-inner"
      title="Click or hover to kick the logo ball into the goal!"
    >
      {/* Mini Soccer Pitch Marking Lines (Crisp Pure White) */}
      <div className="absolute inset-0 border border-white/30 rounded-xl pointer-events-none" />

      {/* Center Pitch Circle & Center Line (Pure White) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-16 h-16 border border-white/30 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-full bg-white/30 pointer-events-none" />

      {/* Goal Post Box on Right Side (Pure White Accent) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 border-t-2 border-b-2 border-l-2 border-white bg-white/10 rounded-l-md pointer-events-none flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <div className="text-[9px] font-mono text-white uppercase font-bold rotate-90 tracking-widest">
          GOAL
        </div>
      </div>

      {/* Goal Celebration Splash */}
      {goalScored && (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs flex items-center justify-center animate-in fade-in duration-200 z-20">
          <div className="bg-white text-[#121212] border border-white px-3.5 py-1.5 rounded-full flex items-center space-x-2 shadow-2xl animate-bounce">
            <Trophy className="w-4 h-4 text-[#121212]" />
            <span className="text-xs font-mono font-bold text-[#121212]">
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
        <div className="w-10 h-10 rounded-full bg-white text-[#121212] flex items-center justify-center shadow-[0_4px_16px_rgba(255,255,255,0.5)] border border-white group-hover:scale-110 transition-transform">
          <RajuLogo size={24} className="text-[#121212]" />
        </div>
      </div>

      {/* Interactive Helper Prompt Pill */}
      <div className="absolute bottom-1.5 left-2 text-[9px] font-mono text-white uppercase tracking-wider bg-black/80 px-2 py-0.5 rounded border border-white/30">
        CLICK LOGO TO KICK ⚽
      </div>
    </div>
  );
};
