import React, { useId } from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  const uniqueId = useId().replace(/:/g, "");
  const gradientId = `logo_gradient_${uniqueId}`;

  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64E1FF" />
          <stop offset="100%" stopColor="#009DFF" />
        </linearGradient>
      </defs>
      
      {/* Rounded Container */}
      <rect x="5" y="5" width="90" height="90" rx="20" stroke={`url(#${gradientId})`} strokeWidth="5" />
      
      {/* Stylized 'A' */}
      {/* Right leg (Solid) */}
      <path d="M48 25 L68 75" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Left leg (Broken) */}
      {/* Top segment */}
      <path d="M48 25 L40 45" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" />
      {/* Bottom segment */}
      <path d="M34 60 L28 75" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" />
      
      {/* Crossbar (Half) */}
      <path d="M54 55 L38 55" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" />

      {/* Stylized 'I' (Vertical Bar) */}
      <line x1="80" y1="25" x2="80" y2="75" stroke={`url(#${gradientId})`} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
};

export const Logo: React.FC<{ className?: string, iconClassName?: string }> = ({ className = "", iconClassName = "w-8 h-8" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LogoIcon className={iconClassName} />
    <span className="font-light text-2xl tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-[#64E1FF] to-[#009DFF] uppercase">
      Integen AI
    </span>
  </div>
);
