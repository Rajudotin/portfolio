import React, { useEffect, useRef } from 'react';

// Tech Icons SVG Data URIs for Canvas 3D Rendering
const iconDataURIs: { name: string; color: string; svg: string }[] = [
  {
    name: 'React',
    color: '#61DAFB',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" stroke-width="1.8" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" stroke-width="1.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" stroke-width="1.8" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/></svg>`
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M13.68 18.06c-.4.76-1.15 1.34-2.4 1.34-1.5 0-2.43-.76-2.82-1.74l1.32-.78c.24.45.64.88 1.4.88.75 0 1.15-.36 1.15-.98 0-.68-.45-.94-1.42-1.36l-.5-.22c-1.4-.6-2.33-1.35-2.33-2.84 0-1.44 1.12-2.5 2.76-2.5 1.25 0 2.1.48 2.66 1.48l-1.22.78c-.24-.4-.56-.7-1.37-.7-.6 0-1.04.32-1.04.78 0 .5.3.74 1.16 1.1l.5.22c1.68.72 2.64 1.46 2.64 3.08 0 .15 0 .28-.08.46zM20.5 11.2h-3.4v8.5h-1.6v-8.5h-3.4v-1.4h8.4v1.4z" fill="#FFFFFF"/></svg>`
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M18.66 18.06c-.4.76-1.15 1.34-2.4 1.34-1.5 0-2.43-.76-2.82-1.74l1.32-.78c.24.45.64.88 1.4.88.75 0 1.15-.36 1.15-.98 0-.68-.45-.94-1.42-1.36l-.5-.22c-1.4-.6-2.33-1.35-2.33-2.84 0-1.44 1.12-2.5 2.76-2.5 1.25 0 2.1.48 2.66 1.48l-1.22.78c-.24-.4-.56-.7-1.37-.7-.6 0-1.04.32-1.04.78 0 .5.3.74 1.16 1.1l.5.22c1.68.72 2.64 1.46 2.64 3.08 0 .15 0 .28-.08.46zm-5.78.36c-.48.86-1.38 1.3-2.68 1.3-1.54 0-2.62-.8-2.62-2.36v-4.52h1.6v4.46c0 .76.32 1.12 1.02 1.12.7 0 1.08-.36 1.08-1.12v-4.46h1.6v5.58z" fill="#000000"/></svg>`
  },
  {
    name: 'Tailwind',
    color: '#06B6D4',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4"/></svg>`
  },
  {
    name: 'Python',
    color: '#3776AB',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11.87 2c-4.8 0-4.5 2.08-4.5 2.08v2.15h4.58v.64H5.73S2 6.38 2 11.23s3.25 4.7 3.25 4.7h1.94v-2.7c0-3.08 2.65-3.08 2.65-3.08h4.55s2.5 0 2.5-2.43V4.6S17.47 2 11.87 2zm-2.2 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#3776AB"/><path d="M12.13 22c4.8 0 4.5-2.08 4.5-2.08v-2.15h-4.58v-.64h6.22s3.73.49 3.73-4.36-3.25-4.7-3.25-4.7h-1.94v2.7c0 3.08-2.65 3.08-2.65 3.08h-4.55s-2.5 0-2.5 2.43v2.72s-.58 2.6 5.02 2.6zm2.2-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" fill="#FFD43B"/></svg>`
  },
  {
    name: 'FastAPI',
    color: '#059669',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#059669"/><path d="M11 5l-4 8h5l-1 6 6-9h-5l1-5z" fill="#FFFFFF"/></svg>`
  },
  {
    name: 'NodeJS',
    color: '#339933',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm6.7 15.8l-6.7 3.8-6.7-3.8V9.2l6.7-3.8 6.7 3.8v8.6z" fill="#339933"/></svg>`
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 2s-6 6.5-6 12.5C6 18.5 8.7 22 12 22s6-3.5 6-7.5C18 8.5 12 2 12 2zm.5 18v-8h-1v8c-.8-.2-2.5-1.5-2.5-5.5 0-4.5 3-9 3-9s3 4.5 3 9c0 4-1.7 5.3-2.5 5.5z" fill="#47A248"/></svg>`
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.684 8.028h8.868l-.356 3.966-3.08.828-3.097-.828-.2-2.25H5.807l.386 4.606 5.8 1.581 5.8-1.581.795-8.974H8.531z" fill="#E34F26"/></svg>`
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.684 8.028h8.868l-.356 3.966-3.08.828-3.097-.828-.2-2.25H5.807l.386 4.606 5.8 1.581 5.8-1.581.795-8.974H8.531z" fill="#1572B6"/></svg>`
  },
  {
    name: 'GitHub',
    color: '#FFFFFF',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF"/></svg>`
  },
  {
    name: 'Redis',
    color: '#DC2626',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M3 6l9-4 9 4v12l-9 4-9-4V6zm9 2L6 11l6 3 6-3-6-3z" fill="#DC2626"/></svg>`
  }
];

interface Point3D {
  x: number;
  y: number;
  z: number;
  img: HTMLImageElement;
}

export const IconCloudCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 300);
    let height = (canvas.height = 300);

    const radius = 100;
    const perspective = 300;

    // Convert SVG strings into HTMLImageElement instances
    const loadedImages: HTMLImageElement[] = [];
    iconDataURIs.forEach((icon) => {
      const img = new Image();
      const encodedSvg = encodeURIComponent(icon.svg);
      img.src = `data:image/svg+xml;utf8,${encodedSvg}`;
      loadedImages.push(img);
    });

    // Create 3D points evenly distributed on sphere surface (Fibonacci sphere algorithm)
    const points: Point3D[] = [];
    const count = loadedImages.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        img: loadedImages[i]
      });
    }

    // Slowed down baseline rotation variables for ultra-smooth rotation
    let mouseX = 0.0004;
    let mouseY = 0.0004;
    let currentRotationX = 0.0004;
    let currentRotationY = 0.0004;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) * 0.00002;
      mouseY = (e.clientY - cy) * 0.00002;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 60FPS Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Slow smooth damping interpolation
      currentRotationX += (mouseY - currentRotationX) * 0.02;
      currentRotationY += (mouseX - currentRotationY) * 0.02;

      const cosX = Math.cos(currentRotationX);
      const sinX = Math.sin(currentRotationX);
      const cosY = Math.cos(currentRotationY);
      const sinY = Math.sin(currentRotationY);

      // Sort points by Z-depth for correct rendering order
      const projected = points.map((pt) => {
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.z * cosY + pt.x * sinY;

        let y1 = pt.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + pt.y * sinX;

        pt.x = x1;
        pt.y = y1;
        pt.z = z2;

        const scale = perspective / (perspective + z2);
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y1 * scale;
        const alpha = Math.max(0.2, (z2 + radius) / (2 * radius));
        const iconSize = Math.max(16, 32 * scale);

        return { screenX, screenY, scale, alpha, iconSize, img: pt.img, z: z2 };
      });

      projected.sort((a, b) => b.z - a.z);

      projected.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (p.img.complete && p.img.naturalWidth !== 0) {
          ctx.drawImage(
            p.img,
            p.screenX - p.iconSize / 2,
            p.screenY - p.iconSize / 2,
            p.iconSize,
            p.iconSize
          );
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="rounded-lg cursor-grab active:cursor-grabbing"
        aria-label="Interactive 3D Icon Cloud"
        role="img"
      />
    </div>
  );
};
