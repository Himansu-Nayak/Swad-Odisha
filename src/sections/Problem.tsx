import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="relative h-screen bg-[#050301] flex items-center justify-center px-[8vw] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
      
      <div className="absolute top-[10%] left-[8vw] text-[45vh] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter italic">
        0
      </div>

      <div className="relative z-10 text-center space-y-20">
        <SectionLabel label="02 — THE VOID" />
        
        <div className="space-y-4">
           <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
             className="text-[20vw] font-black text-white leading-none tracking-tighter"
           >
             0
           </motion.div>
           <p className="mono-label text-white/30 tracking-[0.8em]">Authentic Odia dishes on mainstream platforms.</p>
        </div>

        <div className="h-px w-64 bg-white/10 mx-auto" />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-7xl md:text-9xl font-['Playfair_Display'] italic text-[var(--gold)]"
        >
          Until now.
        </motion.p>
      </div>
    </section>
  );
};
