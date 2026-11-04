import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  variant = 'rise',
  delay = 0,
  className = '',
}) {
  const duration = 0.6;
  const ease = [0.16, 1, 0.3, 1]; // Smooth cubic-bezier easeOut

  if (variant === 'reveal-mask') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration,
            ease,
            delay: delay / 1000,
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Guaranteed visible scroll entrance animation (50px upward slide + opacity fade-in)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration,
        ease,
        delay: delay / 1000,
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
