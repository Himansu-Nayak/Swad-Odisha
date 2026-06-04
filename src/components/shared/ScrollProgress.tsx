import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--gold)',
        transformOrigin: 'left center',
        zIndex: 10000,
        scaleX: scrollYProgress
      }}
    />
  );
};
