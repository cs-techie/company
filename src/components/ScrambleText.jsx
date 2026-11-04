import React, { useState, useEffect } from 'react';

const CHARS = '0123456789ABCDEF#$%/&<>[]*+?';

export default function ScrambleText({ text, duration = 600, className = '' }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }

    let frame = 0;
    const totalFrames = Math.max(15, Math.floor(duration / 30));
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const revealedLength = Math.floor(text.length * progress);

      const nextText = text
        .split('')
        .map((char, i) => {
          if (i < revealedLength) return char;
          if (char === ' ' || char === ':' || char === '[' || char === ']') return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (frame >= totalFrames) {
        setDisplayText(text);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}
