import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const SideNav: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = ["Home", "Origins", "Keepers", "Select", "Values", "Voice"];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-start gap-12">
      <div className="flex flex-col gap-6">
        {sections.map((name, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-pointer">
             <span className="text-[7px] font-black text-white/20 group-hover:text-brand-saffron transition-colors">0{i + 1}</span>
             <div className="h-[1px] w-0 bg-brand-saffron group-hover:w-4 transition-all duration-500" />
             <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">{name}</span>
          </div>
        ))}
      </div>

      <div className="w-[1px] h-32 bg-white/5 relative overflow-hidden ml-[9px]">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-brand-saffron origin-top"
          style={{ height: '100%', scaleY }}
        />
      </div>
      
      <div className="[writing-mode:vertical-lr] text-[7px] uppercase tracking-[0.8em] text-white/10 font-black rotate-180 ml-[6px]">
        Live_Feed_Active
      </div>
    </div>
  );
};
