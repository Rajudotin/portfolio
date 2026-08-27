import React from 'react';

interface RajuLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export const RajuLogo: React.FC<RajuLogoProps> = ({
  className = '',
  size = 28,
  color = 'currentColor'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-label="Raju.in Logo"
    >
      {/* Group with slight counter-clockwise tilt matching reference aesthetic */}
      <g transform="rotate(-8 50 50)">
        {/* Heavy stylized 'r' path with rounded slab terminals */}
        <path
          d="M 28,82 C 24,82 20,80 20,76 C 20,73 23,70 27,69 L 32,68 L 26,28 C 24,28 20,30 18,32 C 16,33 13,31 13,27 C 13,22 18,17 26,16 C 36,15 42,20 44,28 C 50,18 60,14 70,16 C 79,18 84,25 82,35 C 80,42 74,45 68,43 C 63,41 61,37 63,31 C 64,28 62,24 57,23 C 51,22 44,27 41,37 L 36,70 L 42,71 C 46,72 48,75 48,78 C 48,82 43,83 38,83 Z"
          fill={color}
        />
        {/* Solid circular dot at the bottom right */}
        <circle cx="76" cy="76" r="8" fill={color} />
      </g>
    </svg>
  );
};

