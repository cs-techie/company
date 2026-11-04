import React from 'react';

export default function ShimmerText({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#EDFFE3] to-white bg-[length:200%_auto] animate-shimmer ${className}`}
      style={{
        animation: 'shimmer 4s linear infinite',
      }}
    >
      {children}
    </span>
  );
}
