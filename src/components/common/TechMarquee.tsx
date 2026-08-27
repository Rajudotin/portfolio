import React from 'react';

const techList = [
  'REACT 19',
  'TYPESCRIPT',
  'TAILWIND CSS V4',
  'REACT NATIVE',
  'PYTHON',
  'FASTAPI',
  'INSIGHTFACE',
  'OPENCV',
  'ONNXRUNTIME',
  'REDIS',
  'MONGODB',
  'MYSQL',
  'NODE.JS',
  'EXPRESS',
  'VITE',
  'REST APIS'
];

export const TechMarquee: React.FC = () => {
  // Duplicate array to ensure seamless infinite loop
  const doubleTechList = [...techList, ...techList];

  return (
    <div className="w-full bg-[#141414] text-[#FAF9F5] py-4 sm:py-5 border-y border-[#2A2A28] overflow-hidden select-none shadow-xs">
      <div className="flex w-max animate-marquee items-center">
        {doubleTechList.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 px-8 font-sans text-sm sm:text-base font-semibold tracking-widest uppercase text-[#FAF9F5] hover:text-[#E5C158] transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C158] shrink-0" />
            <span className="whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
