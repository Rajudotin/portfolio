import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const InteractiveGlobeCanvas: React.FC<{ size?: number }> = ({
  size = 160,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = size);
    const height = (canvas.height = size);

    const radius = size * 0.35;
    const perspective = 250;

    // Generate 3D latitude & longitude points forming a white globe
    const points: Point3D[] = [];
    const latLines = 10;
    const lonLines = 14;

    for (let i = 0; i <= latLines; i++) {
      const lat = (Math.PI * i) / latLines - Math.PI / 2;
      const r = Math.cos(lat) * radius;
      const y = Math.sin(lat) * radius;

      for (let j = 0; j < lonLines; j++) {
        const lon = (2 * Math.PI * j) / lonLines;
        const x = Math.cos(lon) * r;
        const z = Math.sin(lon) * r;
        points.push({ x, y, z });
      }
    }

    // Rotation state variables
    let rotX = 0.2;
    let rotY = 0.0;
    let mouseX = 0.003;
    let mouseY = 0.001;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) * 0.00005;
      mouseY = (e.clientY - cy) * 0.00005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 60FPS Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY += 0.006 + mouseX;
      rotX += mouseY * 0.5;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project and sort 3D points
      const projected = points.map((pt) => {
        // Rotate Y
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;

        // Rotate X
        const y1 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;

        const scale = perspective / (perspective + z2);
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y1 * scale;
        const alpha = Math.max(0.15, (z2 + radius) / (2 * radius));
        const dotRadius = Math.max(1, 1.8 * scale);

        return { screenX, screenY, scale, alpha, dotRadius, z: z2 };
      });

      projected.sort((a, b) => a.z - b.z);

      // Render 3D White Globe Dots
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, p.dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.9})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.shadowBlur = p.z > 0 ? 6 : 2;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Background Soft White Radial Glow */}
      <div className="absolute inset-0 bg-radial from-white/20 via-white/5 to-transparent blur-2xl rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="relative z-10 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-300"
        aria-label="Interactive 3D White Globe"
        role="img"
      />
    </div>
  );
};
