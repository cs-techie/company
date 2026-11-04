import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value, prefix = '', suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract numerical value from string (e.g. "$12M+" -> 12, "99.9%" -> 99.9, "150+" -> 150)
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(numericMatch[0]);
    const isFloat = value.includes('.');
    const startTime = performance.now();

    const updateCounter = (now) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      setDisplayValue(isFloat ? currentNum.toFixed(1) : Math.floor(currentNum));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(isFloat ? targetNum.toFixed(1) : targetNum);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  // Extract static prefix/suffix surrounding the number
  const prefixMatch = value.match(/^[^\d.]*/)?.[0] || '';
  const suffixMatch = value.match(/[^\d.]*$/)?.[0] || '';

  return (
    <span ref={ref} className="inline-block">
      {prefixMatch}{displayValue}{suffixMatch}
    </span>
  );
}
