import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const Story: React.FC = () => {
  return (
    <section id="story" className="relative h-screen bg-[#050301] flex items-center px-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
      
      <div className="grid lg:grid-cols-2 gap-20 items-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-12"
        >
          <div className="flex flex-col items-start gap-4">
             <SectionLabel label="01 — THE STORY" />
             <h2 className="text-[12vw] leading-none font-black text-white/5 absolute -left-10 top-1/2 -translate-y-1/2 select-none pointer-events-none">TASTE.</h2>
             <p className="text-3xl md:text-5xl font-light text-[#f0e6d3] italic leading-snug">
                "Pakhala is not just rice soaked in water. It is a summer morning in Odisha."
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="flex justify-center relative"
        >
          <div className="w-[35vw] aspect-square rounded-full border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center p-12">
             <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#1a0d03] to-[#4a2c0a] shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.1),_transparent)]" />
             </div>
          </div>
          {/* Corner Ticks for Section */}
          <span className="hud-frame-tick top-0 left-0 border-t-[1.5px] border-l-[1.5px]" />
          <span className="hud-frame-tick top-0 right-0 border-t-[1.5px] border-r-[1.5px]" />
          <span className="hud-frame-tick bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]" />
          <span className="hud-frame-tick bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]" />
        </motion.div>
      </div>
    </section>
  );
};
