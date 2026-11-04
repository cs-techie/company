import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  // Motion values bypass React state re-renders
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(rawY, { stiffness: 250, damping: 25 });
  const rotateY = useSpring(rawX, { stiffness: 250, damping: 25 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // 4 degrees tilt
    rawX.set(x * 8);
    rawY.set(-y * 8);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        willChange: 'transform',
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
