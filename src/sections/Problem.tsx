import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="relative h-screen bg-transparent flex items-center justify-center px-[8vw] overflow-hidden">
      <div className="absolute top-[10%] left-[8vw] text-[40vh] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter italic">
        0
      </div>

      <div className="relative z-10 text-center space-y-12">
        <SectionLabel label="02 — THE VOID" />
        
        <div className="space-y-4">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="text-8xl md:text-[15vw] font-black text-white leading-none"
           >
             0
           </motion.div>
           <p className="hud-text text-white/40">Authentic Odia dishes on mainstream platforms.</p>
        </div>

        <div className="h-px w-64 bg-white/10 mx-auto" />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-['Playfair_Display'] italic text-[#FF4D00]"
        >
          Until now.
        </motion.p>
      </div>
    </section>
  );
};
