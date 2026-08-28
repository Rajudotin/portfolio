import React, { useEffect, useRef } from "react";

// Intricate particle mesh coordinates (Latitude & Longitude in degrees)
const continentMesh: { lat: number; lon: number }[] = [
  // India (Primary Region)
  { lat: 20.5937, lon: 78.9629 }, { lat: 28.6139, lon: 77.209 }, { lat: 19.076, lon: 72.8777 },
  { lat: 13.0827, lon: 80.2707 }, { lat: 22.5726, lon: 88.3639 }, { lat: 25.3176, lon: 82.9739 },

  // Asia / East Asia
  { lat: 35.8617, lon: 104.1954 }, { lat: 39.9042, lon: 116.4074 }, { lat: 36.2048, lon: 138.2529 },
  { lat: 1.3521, lon: 103.8198 },   { lat: 13.7563, lon: 100.5018 }, { lat: 25.2048, lon: 55.2708 },
  { lat: 31.7683, lon: 35.2137 },   { lat: 34.0209, lon: 71.5249 },  { lat: 23.8103, lon: 90.4125 },

  // Europe
  { lat: 48.8566, lon: 2.3522 },   { lat: 51.5074, lon: -0.1278 }, { lat: 52.52, lon: 13.405 },
  { lat: 41.9028, lon: 12.4964 },  { lat: 40.4168, lon: -3.7038 },  { lat: 59.3293, lon: 18.0686 },
  { lat: 55.7558, lon: 37.6173 },  { lat: 50.4501, lon: 30.5234 },  { lat: 47.3769, lon: 8.5417 },

  // North America
  { lat: 40.7128, lon: -74.006 },  { lat: 34.0522, lon: -118.2437 }, { lat: 41.8781, lon: -87.6298 },
  { lat: 45.4215, lon: -75.6972 }, { lat: 49.2827, lon: -123.1207 }, { lat: 19.4326, lon: -99.1332 },
  { lat: 25.7617, lon: -80.1918 }, { lat: 32.7767, lon: -96.797 },   { lat: 47.6062, lon: -122.3321 },

  // South America
  { lat: -23.5505, lon: -46.6333 }, { lat: -22.9068, lon: -43.1729 }, { lat: -34.6037, lon: -58.3816 },
  { lat: -4.5709, lon: -74.2973 },  { lat: -12.0464, lon: -77.0428 }, { lat: -33.4489, lon: -70.6693 },

  // Africa
  { lat: 30.0444, lon: 31.2357 },  { lat: -26.2041, lon: 28.0473 }, { lat: 6.5244, lon: 3.3792 },
  { lat: -1.2921, lon: 36.8219 },  { lat: 33.5731, lon: -7.5898 },  { lat: -33.9249, lon: 18.4241 },

  // Australia
  { lat: -33.8688, lon: 151.2093 }, { lat: -37.8136, lon: 144.9631 }, { lat: -31.9505, lon: 115.8605 },
  { lat: -27.4705, lon: 153.026 },  { lat: -41.2865, lon: 174.7762 }
];

export const InteractiveWorldGlobeCanvas: React.FC<{ size?: number }> = ({
  size = 180,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = size * 1.2);
    const height = (canvas.height = size * 1.2);
    const radius = size * 0.4;
    const perspective = 300;

    // Check prefers-reduced-motion user accessibility preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Construct Delicate Particle Mesh Lines (Latitude & Longitude Dotted Lines)
    const meshPoints: { x: number; y: number; z: number; isContinent?: boolean }[] = [];

    // Latitude Dotted Parallel Lines (-75° to +75°)
    for (let lat = -75; lat <= 75; lat += 12) {
      for (let lon = -180; lon < 180; lon += 6) {
        const latRad = (lat * Math.PI) / 180;
        const lonRad = (lon * Math.PI) / 180;
        meshPoints.push({
          x: Math.cos(latRad) * Math.sin(lonRad) * radius,
          y: -Math.sin(latRad) * radius,
          z: Math.cos(latRad) * Math.cos(lonRad) * radius,
          isContinent: false
        });
      }
    }

    // Continent Particle Overlay for recognizable landmass outlines
    continentMesh.forEach((c) => {
      const latRad = (c.lat * Math.PI) / 180;
      const lonRad = (c.lon * Math.PI) / 180;
      meshPoints.push({
        x: Math.cos(latRad) * Math.sin(lonRad) * radius,
        y: -Math.sin(latRad) * radius,
        z: Math.cos(latRad) * Math.cos(lonRad) * radius,
        isContinent: true
      });
    });

    let rotX = 0.22;
    let rotY = 0;

    const render = () => {
      // 100% Transparent Background Clearing
      ctx.clearRect(0, 0, width, height);

      // Respect reduced motion setting
      if (!prefersReducedMotion) {
        rotY += 0.0035;
      }

      const floatY = prefersReducedMotion
        ? 0
        : Math.sin(Date.now() * 0.002) * 6; // Gentle up and down floating bobbing

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const cx = width / 2;
      const cy = height / 2 + floatY;

      // Project Monochrome / Grey Particle Mesh
      const projected = meshPoints.map((pt) => {
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.z * cosY + pt.x * sinY;

        let y1 = pt.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + pt.y * sinX;

        const scale = perspective / (perspective + z2);
        const screenX = cx + x1 * scale;
        const screenY = cy + y1 * scale;
        const alpha = Math.max(0.08, (z2 + radius) / (2 * radius));

        return { screenX, screenY, scale, alpha, z: z2, isContinent: pt.isContinent };
      });

      // Painter's algorithm depth sorting
      projected.sort((a, b) => a.z - b.z);

      // Draw Monochrome / Grey Particle Mesh Dots & Dotted Lines
      projected.forEach((p) => {
        if (p.z > -radius * 0.5) {
          ctx.beginPath();
          const dotRadius = p.isContinent ? 1.6 * p.scale : 1.0 * p.scale;
          ctx.arc(p.screenX, p.screenY, dotRadius, 0, Math.PI * 2);

          if (p.isContinent) {
            ctx.fillStyle = `rgba(235, 235, 235, ${p.alpha * 0.95})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
            ctx.shadowBlur = 3;
          } else {
            ctx.fillStyle = `rgba(160, 160, 160, ${p.alpha * 0.55})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size]);

  return (
    <div className="relative flex items-center justify-center my-1 pointer-events-auto">
      {/* 100% Transparent Canvas Container */}
      <canvas
        ref={canvasRef}
        className="relative z-10 hover:scale-105 transition-transform duration-300 bg-transparent"
        aria-label="Interactive Floating 3D Monochrome Particle Mesh Globe"
        role="img"
      />
    </div>
  );
};
