import React from "react";

export const TechIcons: Record<
  string,
  React.FC<{ size?: number; className?: string }>
> = {
  HTML5: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.684 8.028h8.868l-.356 3.966-3.08.828-3.097-.828-.2-2.25H5.807l.386 4.606 5.8 1.581 5.8-1.581.795-8.974H8.531z"
        fill="#E34F26"
      />
    </svg>
  ),
  CSS3: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.657-12.984.002.684 8.028h8.868l-.356 3.966-3.08.828-3.097-.828-.2-2.25H5.807l.386 4.606 5.8 1.581 5.8-1.581.795-8.974H8.531z"
        fill="#1572B6"
      />
    </svg>
  ),
  JavaScript: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M18.66 18.06c-.4.76-1.15 1.34-2.4 1.34-1.5 0-2.43-.76-2.82-1.74l1.32-.78c.24.45.64.88 1.4.88.75 0 1.15-.36 1.15-.98 0-.68-.45-.94-1.42-1.36l-.5-.22c-1.4-.6-2.33-1.35-2.33-2.84 0-1.44 1.12-2.5 2.76-2.5 1.25 0 2.1.48 2.66 1.48l-1.22.78c-.24-.4-.56-.7-1.37-.7-.6 0-1.04.32-1.04.78 0 .5.3.74 1.16 1.1l.5.22c1.68.72 2.64 1.46 2.64 3.08 0 .15 0 .28-.08.46zm-5.78.36c-.48.86-1.38 1.3-2.68 1.3-1.54 0-2.62-.8-2.62-2.36v-4.52h1.6v4.46c0 .76.32 1.12 1.02 1.12.7 0 1.08-.36 1.08-1.12v-4.46h1.6v5.58z"
        fill="#000000"
      />
    </svg>
  ),
  TypeScript: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M13.68 18.06c-.4.76-1.15 1.34-2.4 1.34-1.5 0-2.43-.76-2.82-1.74l1.32-.78c.24.45.64.88 1.4.88.75 0 1.15-.36 1.15-.98 0-.68-.45-.94-1.42-1.36l-.5-.22c-1.4-.6-2.33-1.35-2.33-2.84 0-1.44 1.12-2.5 2.76-2.5 1.25 0 2.1.48 2.66 1.48l-1.22.78c-.24-.4-.56-.7-1.37-.7-.6 0-1.04.32-1.04.78 0 .5.3.74 1.16 1.1l.5.22c1.68.72 2.64 1.46 2.64 3.08 0 .15 0 .28-.08.46zM20.5 11.2h-3.4v8.5h-1.6v-8.5h-3.4v-1.4h8.4v1.4z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  React: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(0 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  ),
  NextJS: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      <path
        d="M15.5 8v8l-6-8v8"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Tailwind: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#06B6D4"
      />
    </svg>
  ),
  NodeJS: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm6.7 15.8l-6.7 3.8-6.7-3.8V9.2l6.7-3.8 6.7 3.8v8.6z"
        fill="#339933"
      />
    </svg>
  ),
  ExpressJS: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 8h5v2H6v4h3v2H4V8zm7 0h2l1.5 4L16 8h2l-2.5 6L18 20h-2l-1.5-4-1.5 4h-2l2.5-6L11 8z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  Python: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M11.87 2c-4.8 0-4.5 2.08-4.5 2.08v2.15h4.58v.64H5.73S2 6.38 2 11.23s3.25 4.7 3.25 4.7h1.94v-2.7c0-3.08 2.65-3.08 2.65-3.08h4.55s2.5 0 2.5-2.43V4.6S17.47 2 11.87 2zm-2.2 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
        fill="#3776AB"
      />
      <path
        d="M12.13 22c4.8 0 4.5-2.08 4.5-2.08v-2.15h-4.58v-.64h6.22s3.73.49 3.73-4.36-3.25-4.7-3.25-4.7h-1.94v2.7c0 3.08-2.65 3.08-2.65 3.08h-4.55s-2.5 0-2.5 2.43v2.72s-.58 2.6 5.02 2.6zm2.2-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
        fill="#FFD43B"
      />
    </svg>
  ),
  FastAPI: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#059669" />
      <path d="M11 5l-4 8h5l-1 6 6-9h-5l1-5z" fill="#FFFFFF" />
    </svg>
  ),
  MongoDB: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2s-6 6.5-6 12.5C6 18.5 8.7 22 12 22s6-3.5 6-7.5C18 8.5 12 2 12 2zm.5 18v-8h-1v8c-.8-.2-2.5-1.5-2.5-5.5 0-4.5 3-9 3-9s3 4.5 3 9c0 4-1.7 5.3-2.5 5.5z"
        fill="#47A248"
      />
    </svg>
  ),
  MySQL: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 3C7 3 3 5 3 8v8c0 3 4 5 9 5s9-2 9-5V8c0-3-4-5-9-5zm0 2c4 0 7 1.3 7 3s-3 3-7 3-7-1.3-7-3 3-3 7-3zm0 14c-4 0-7-1.3-7-3v-2.2c1.8 1.3 4.3 2.2 7 2.2s5.2-.9 7-2.2V16c0 1.7-3 3-7 3z"
        fill="#4479A1"
      />
    </svg>
  ),
  Redis: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 6l9-4 9 4v12l-9 4-9-4V6zm9 2L6 11l6 3 6-3-6-3z"
        fill="#DC2626"
      />
    </svg>
  ),
  InsightFace: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        width="24"
        height="24"
        rx="5"
        fill="#121212"
        stroke="#E5C158"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="9" r="1.5" fill="#E5C158" />
      <circle cx="15" cy="9" r="1.5" fill="#E5C158" />
      <path
        d="M8 15c1.5 2 6.5 2 8 0"
        stroke="#E5C158"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  OpenCV: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="7" r="4" fill="#EE2C2C" />
      <circle cx="7" cy="16" r="4" fill="#5C3EE8" />
      <circle cx="17" cy="16" r="4" fill="#00C957" />
    </svg>
  ),
  GitHub: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  Vite: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M21.5 3.5l-9.5 18-9.5-18h19z" fill="#646CFF" />
      <path d="M12 6l3 7h-6l3-7z" fill="#FFD43B" />
    </svg>
  ),
  Postman: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path
        d="M16 11l-5 4-3-2"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  RESTAPI: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
        fill="#0096D6"
      />
    </svg>
  ),
  Shadcn: ({ size = 18, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 20L20 4M4 12L12 4"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};
