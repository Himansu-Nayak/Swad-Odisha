import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const SideNav: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dots = [0, 1, 2, 3, 4, 5];

  return (
    <div className="fixed left-12 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-8">
      <div className="w-[1px] h-48 bg-white/10 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-brand-saffron origin-top"
          style={{ height: '100%', scaleY }}
        />
      </div>
      
      <div className="flex flex-col gap-4">
        {dots.map((dot) => (
          <div key={dot} className="w-1.5 h-1.5 rounded-full border border-white/20" />
        ))}
      </div>

      <div className="[writing-mode:vertical-lr] text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold rotate-180">
        Scroll to Explore
      </div>
    </div>
  );
};
