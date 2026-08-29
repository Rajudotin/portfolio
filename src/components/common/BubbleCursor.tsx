import React, { useEffect, useRef, useState } from "react";

export const BubbleCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Target mouse coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  // Lerped ring coordinates for smooth trailing movement
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable custom cursor on touch screens
    const isTouchDevice = matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update inner dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.closest(
            "a, button, input, textarea, select, [role='button'], .cursor-pointer",
          ) !== null;
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth Lerp Animation Loop for outer bubble ring
    let animationFrameId: number;
    const animate = () => {
      const lerpFactor = 0.15; // Fluid trailing speed
      ringPos.current.x +=
        (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y +=
        (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Smooth Trailing Bubble Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? "w-12 h-12 bg-[#161616]/10 border-[#161616]/40 scale-125"
            : "w-8 h-8 bg-transparent border-[#161616]/30 scale-100"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Inner Precision Pointer Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-100 ${
          isHovered ? "w-2 h-2 bg-[#E5C158]" : "w-1.5 h-1.5 bg-[#161616]"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
};
