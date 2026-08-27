import React, { useEffect, useRef } from "react";

// Continent & India coordinate clusters (lat/lon in degrees)
const worldLandmarks: {
  lat: number;
  lon: number;
  name?: string;
  isIndia?: boolean;
}[] = [
  // India (Highlighted in Gold)
  { lat: 20.5937, lon: 78.9629, name: "India", isIndia: true },
  { lat: 28.6139, lon: 77.209, isIndia: true },
  { lat: 19.076, lon: 72.8777, isIndia: true },
  { lat: 13.0827, lon: 80.2707, isIndia: true },

  // Asia
  { lat: 35.8617, lon: 104.1954 },
  { lat: 36.2048, lon: 138.2529 },
  { lat: 1.3521, lon: 103.8198 },
  { lat: 25.2048, lon: 55.2708 },
  { lat: 31.7683, lon: 35.2137 },

  // Europe
  { lat: 48.8566, lon: 2.3522 },
  { lat: 51.5074, lon: -0.1278 },
  { lat: 52.52, lon: 13.405 },
  { lat: 41.9028, lon: 12.4964 },
  { lat: 55.7558, lon: 37.6173 },

  // North America
  { lat: 40.7128, lon: -74.006 },
  { lat: 34.0522, lon: -118.2437 },
  { lat: 45.4215, lon: -75.6972 },
  { lat: 19.4326, lon: -99.1332 },

  // South America
  { lat: -23.5505, lon: -46.6333 },
  { lat: -34.6037, lon: -58.3816 },
  { lat: -4.5709, lon: -74.2973 },

  // Africa
  { lat: 30.0444, lon: 31.2357 },
  { lat: -26.2041, lon: 28.0473 },
  { lat: 6.5244, lon: 3.3792 },
  { lat: -1.2921, lon: 36.8219 },

  // Australia
  { lat: -33.8688, lon: 151.2093 },
  { lat: -37.8136, lon: 144.9631 },
];

export const InteractiveWorldGlobeCanvas: React.FC<{ size?: number }> = ({
  size = 150,
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

    const radius = size * 0.38;
    const perspective = 260;

    // Convert lat/lon coordinates into 3D sphere points
    const points = worldLandmarks.map((lm) => {
      const latRad = (lm.lat * Math.PI) / 180;
      const lonRad = (lm.lon * Math.PI) / 180;

      const x = Math.cos(latRad) * Math.sin(lonRad) * radius;
      const y = -Math.sin(latRad) * radius;
      const z = Math.cos(latRad) * Math.cos(lonRad) * radius;

      return { x, y, z, isIndia: lm.isIndia };
    });

    // Add extra grid wireframe points for world map density
    for (let lat = -60; lat <= 60; lat += 25) {
      for (let lon = -180; lon < 180; lon += 30) {
        const latRad = (lat * Math.PI) / 180;
        const lonRad = (lon * Math.PI) / 180;
        const x = Math.cos(latRad) * Math.sin(lonRad) * radius;
        const y = -Math.sin(latRad) * radius;
        const z = Math.cos(latRad) * Math.cos(lonRad) * radius;
        points.push({ x, y, z, isIndia: false });
      }
    }

    let rotX = 0.2;
    let rotY = -1.2; // Angle pointing towards Asia / India
    let mouseX = 0.002;
    let mouseY = 0.001;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) * 0.00004;
      mouseY = (e.clientY - cy) * 0.00004;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY += 0.005 + mouseX;
      rotX += mouseY * 0.5;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected = points.map((pt) => {
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.z * cosY + pt.x * sinY;

        let y1 = pt.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + pt.y * sinX;

        const scale = perspective / (perspective + z2);
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y1 * scale;
        const alpha = Math.max(0.1, (z2 + radius) / (2 * radius));

        return { screenX, screenY, scale, alpha, isIndia: pt.isIndia, z: z2 };
      });

      projected.sort((a, b) => a.z - b.z);

      projected.forEach((p) => {
        ctx.beginPath();
        if (p.isIndia) {
          ctx.arc(p.screenX, p.screenY, 3.5 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = "#E5C158";
          ctx.shadowColor = "#E5C158";
          ctx.shadowBlur = 10;
        } else {
          ctx.arc(p.screenX, p.screenY, 1.8 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.85})`;
          ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 3;
        }
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
      <div className="absolute inset-0 bg-radial from-white/15 via-[#E5C158]/10 to-transparent blur-2xl rounded-full pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="relative z-10 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-300"
        aria-label="Interactive 3D World Map Globe"
        role="img"
      />
    </div>
  );
};
