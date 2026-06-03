import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-[8vw] bg-[#050301] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
      
      <div className="absolute top-[10%] left-[-2%] text-[25vw] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter">
        SOUL
      </div>

      <div className="relative z-10 w-full max-w-[1800px] grid lg:grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-8 space-y-32">
           <div className="space-y-16">
              <div className="flex items-center gap-6">
                 <div className="h-px w-24 bg-[#FF4D00]" />
                 <SectionLabel label="08 — BUILT BY" />
              </div>

              <motion.h2 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="text-[14vw] font-black text-white uppercase leading-[0.75] tracking-[-0.08em]"
              >
                Himansu <br/> <span className="text-[#FF4D00]/20 italic">Nayak</span>
              </motion.h2>
           </div>

           <div className="grid md:grid-cols-2 gap-20 max-w-4xl pt-20 border-t border-white/5">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <span className="mono-label text-[var(--gold)] tracking-[0.5em]">Identity_Vector</span>
                    <p className="text-white/40 text-2xl font-light leading-snug">
                       MCA 2024–26 · RCM Bhubaneswar · Full-Stack Developer & Preservation Specialist.
                    </p>
                 </div>
                 <div className="flex gap-8">
                    <button className="py-4 px-10 border border-white/10 hover:border-[#FF4D00] transition-colors text-[10px] font-black uppercase tracking-[0.4em]">GitHub</button>
                    <button className="py-4 px-10 border border-white/10 hover:border-[#FF4D00] transition-colors text-[10px] font-black uppercase tracking-[0.4em]">LinkedIn</button>
                 </div>
              </div>

              <div className="flex flex-col justify-end gap-2">
                 <span className="mono-label text-white/10 tracking-[1em] text-[7px] italic">Preserving_Odisha_Since_2024</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
