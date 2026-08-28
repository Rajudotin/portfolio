import React, { useState, useEffect, useRef } from 'react';
import { TechIcons } from '../common/TechIcons';

interface TechItem {
  name: string;
  iconKey: string;
  color: string;
}

const techItems: TechItem[] = [
  { name: 'HTML5', iconKey: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', iconKey: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', iconKey: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', iconKey: 'TypeScript', color: '#3178C6' },
  { name: 'React 19', iconKey: 'React', color: '#61DAFB' },
  { name: 'React Native', iconKey: 'React', color: '#61DAFB' },
  { name: 'NextJS', iconKey: 'NextJS', color: '#FFFFFF' },
  { name: 'Tailwind CSS', iconKey: 'Tailwind', color: '#06B6D4' },
  { name: 'Shadcn UI', iconKey: 'Shadcn', color: '#FFFFFF' },
  { name: 'NodeJS', iconKey: 'NodeJS', color: '#339933' },
  { name: 'ExpressJS', iconKey: 'ExpressJS', color: '#FFFFFF' },
  { name: 'Python', iconKey: 'Python', color: '#3776AB' },
  { name: 'FastAPI', iconKey: 'FastAPI', color: '#059669' },
  { name: 'MongoDB', iconKey: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', iconKey: 'MySQL', color: '#4479A1' },
  { name: 'Redis', iconKey: 'Redis', color: '#DC2626' },
  { name: 'InsightFace', iconKey: 'InsightFace', color: '#E5C158' },
  { name: 'OpenCV', iconKey: 'OpenCV', color: '#5C3EE8' },
  { name: 'ONNXRuntime', iconKey: 'InsightFace', color: '#005A9E' },
  { name: 'GitHub', iconKey: 'GitHub', color: '#FFFFFF' },
  { name: 'Vite', iconKey: 'Vite', color: '#646CFF' },
  { name: 'Postman', iconKey: 'Postman', color: '#FF6C37' },
  { name: 'REST API', iconKey: 'RESTAPI', color: '#0096D6' }
];

interface Shard {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vRot: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
  clipPath: string;
}

const TechPillBadge: React.FC<{ tech: TechItem }> = ({ tech }) => {
  const [shards, setShards] = useState<Shard[]>([]);
  const [isBroken, setIsBroken] = useState(false);
  const animRef = useRef<number | null>(null);
  const IconComponent = TechIcons[tech.iconKey];

  const handleTriggerBlast = () => {
    if (isBroken) return;
    setIsBroken(true);

    // Polygon shard shapes for broken icon effect
    const clipPaths = [
      'polygon(0% 0%, 100% 0%, 50% 100%)',
      'polygon(0% 0%, 100% 50%, 0% 100%)',
      'polygon(50% 0%, 100% 100%, 0% 100%)',
      'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)'
    ];

    // Generate 16 shattered fragments around the pill badge
    const newShards: Shard[] = [];
    const shardCount = 16;
    for (let i = 0; i < shardCount; i++) {
      const angle = (i * 360) / shardCount + Math.random() * 15;
      const rad = (angle * Math.PI) / 180;
      const speed = 4 + Math.random() * 6;

      newShards.push({
        id: Math.random(),
        x: 0,
        y: 0,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed - 5, // Upward initial velocity for blast arc
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 20,
        width: 6 + Math.random() * 8,
        height: 6 + Math.random() * 8,
        color: Math.random() > 0.4 ? tech.color : '#FAF9F5',
        opacity: 1,
        clipPath: clipPaths[i % clipPaths.length]
      });
    }

    setShards(newShards);

    // Gravity Physics Animation Loop
    let currentShards = [...newShards];
    let startTime = Date.now();

    const updatePhysics = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      currentShards = currentShards.map((s) => {
        const nextX = s.x + s.vx;
        const nextY = s.y + s.vy;
        const nextVy = s.vy + 0.45; // Gravity pulling downward into next section!
        const nextRot = s.rot + s.vRot;
        const nextOpacity = Math.max(0, 1 - elapsed * 0.85);

        return {
          ...s,
          x: nextX,
          y: nextY,
          vy: nextVy,
          rot: nextRot,
          opacity: nextOpacity
        };
      });

      setShards([...currentShards]);

      if (elapsed < 1.3) {
        animRef.current = requestAnimationFrame(updatePhysics);
      } else {
        // Reset badge smoothly
        setIsBroken(false);
        setShards([]);
      }
    };

    animRef.current = requestAnimationFrame(updatePhysics);
  };

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={handleTriggerBlast}
      onClick={handleTriggerBlast}
      className={`relative group bg-[#1A1A1A] hover:bg-[#242422] border border-[#2A2A28] hover:border-[#FAF9F5]/40 rounded-full px-5 py-2.5 flex items-center space-x-3 text-xs sm:text-sm font-mono text-[#FAF9F5] shadow-sm transition-all duration-300 cursor-pointer overflow-visible ${
        isBroken ? 'scale-90 border-transparent opacity-80' : 'hover:scale-110'
      }`}
    >
      {/* Expanding Shockwave Blast Ring */}
      {isBroken && (
        <span
          className="absolute inset-0 rounded-full border-2 animate-shockwave pointer-events-none z-0"
          style={{ borderColor: tech.color }}
        />
      )}

      {/* Physics Gravity Shattered Pieces Dropping Down into Next Section */}
      {isBroken &&
        shards.map((s) => (
          <span
            key={s.id}
            className="absolute pointer-events-none z-30 shadow-md"
            style={{
              width: `${s.width}px`,
              height: `${s.height}px`,
              backgroundColor: s.color,
              clipPath: s.clipPath,
              opacity: s.opacity,
              transform: `translate(${s.x}px, ${s.y}px) rotate(${s.rot}deg)`,
              top: '50%',
              left: '50%',
              marginTop: `-${s.height / 2}px`,
              marginLeft: `-${s.width / 2}px`,
              boxShadow: `0 0 6px ${s.color}`
            }}
          />
        ))}

      {/* SVG Icon (Shatters & Hides during Blast, then bounces back) */}
      <div
        className={`relative z-10 shrink-0 flex items-center justify-center transition-all duration-300 ${
          isBroken ? 'scale-0 opacity-0 rotate-180' : 'scale-100 opacity-100 group-hover:scale-125'
        }`}
      >
        {IconComponent ? (
          <IconComponent size={20} />
        ) : (
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ backgroundColor: tech.color }}
          />
        )}
      </div>

      {/* Technology Name */}
      <span
        className={`relative z-10 font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
          isBroken ? 'opacity-40 scale-95' : 'group-hover:text-white'
        }`}
      >
        {tech.name}
      </span>
    </div>
  );
};

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0C0C0C] text-[#FAF9F5] border-b border-[#262624] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Glowing Geometric Accent & Header */}
        <div className="relative inline-block mb-12">
          {/* Geometric Triangle Glow Outline Accent */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 border-t-2 border-r-2 border-l-2 border-[#E5C158]/40 rotate-45 blur-xs pointer-events-none" />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#E5C158]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E5C158] uppercase block mb-2">
              BETTER THAN YESTERDAY.
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#FAF9F5] tracking-tight">
              My Tech Stack
            </h2>
          </div>
        </div>

        {/* Tech Badges Container Grid with Shatter Blast & Gravity Drop Physics */}
        <div className="flex flex-wrap justify-center gap-3.5 max-w-5xl mx-auto px-2">
          {techItems.map((tech) => (
            <TechPillBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
