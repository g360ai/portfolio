import React from 'react';

export const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 220 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="G3GO Logo"
    >
      {/* 
        G3GO Logo Vector Construction
        Colors: 
        - Brand Cyan: #06b6d4
        - Adaptive: currentColor (Black in light mode, White in dark mode)
      */}
      <g strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        
        {/* 1. G - Cyan */}
        {/* Geometric circular G shape */}
        <path 
          d="M 48 18 A 20 20 0 1 0 48 42" 
          stroke="#06b6d4"
        />
        <path 
          d="M 48 30 H 30" 
          stroke="#06b6d4"
        />

        {/* 2. 3 - Adaptive (Black/White) */}
        {/* Geometric 3 shape */}
        <path 
          d="M 72 12 H 96 L 84 26 M 84 26 A 16 16 0 1 1 70 48" 
          stroke="currentColor"
        />

        {/* 3. G - Adaptive (Black/White) */}
        <path 
          d="M 148 18 A 20 20 0 1 0 148 42" 
          stroke="currentColor"
        />
        <path 
          d="M 148 30 H 130" 
          stroke="currentColor"
        />

        {/* 4. Connecting Line - Cyan */}
        {/* Connects the middle G to the O */}
        <path 
          d="M 130 30 H 170" 
          stroke="#06b6d4"
        />

        {/* 5. O - Split Color */}
        {/* Left Arc: Cyan */}
        <path 
          d="M 190 10 A 20 20 0 0 0 190 50" 
          stroke="#06b6d4"
        />
        {/* Right Arc: Adaptive */}
        <path 
          d="M 190 10 A 20 20 0 0 1 190 50" 
          stroke="currentColor"
        />
      </g>
    </svg>
  );
};