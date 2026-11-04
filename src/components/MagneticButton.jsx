import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  to,
  as: Component = 'button',
  ...props
}) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 250, damping: 20 });
  const y = useSpring(rawY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < 60) {
      const pull = Math.min(distance / 60, 1);
      rawX.set((distanceX / 60) * 6 * pull);
      rawY.set((distanceY / 60) * 6 * pull);
    } else {
      rawX.set(0);
      rawY.set(0);
    }
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
      style={{ x, y, willChange: 'transform' }}
      whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: 'easeOut' } }}
      whileTap={{ scale: 0.96, transition: { duration: 0.15 } }}
      className="inline-block"
    >
      <Component className={className} onClick={onClick} to={to} {...props}>
        {children}
      </Component>
    </motion.div>
  );
}
