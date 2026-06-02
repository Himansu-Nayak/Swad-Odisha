import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[200vh] flex flex-col items-start px-[8vw] pt-[30vh]">
      <div className="absolute top-[15vh] right-[8vw] text-right space-y-2 mix-blend-difference z-20">
        <p className="text-meta">Archive_ID: 2024.OD.01</p>
        <p className="text-meta">Location: 20.29°N 85.82°E</p>
      </div>

      <div className="relative z-10 space-y-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="text-title leading-[0.75] tracking-[-0.08em]">
            SWAD <br /> ODISHA
          </h1>
        </motion.div>

        <div className="grid grid-cols-12 gap-5 w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="col-span-12 lg:col-start-7 lg:col-span-5 space-y-12"
          >
            <p className="text-4xl md:text-6xl font-['Playfair_Display'] italic text-white/90 leading-none">
              A cinematic preservation of Odisha's <span className="text-[#FF4D00]">living soul</span>.
            </p>
            
            <div className="space-y-8 max-w-md">
              <p className="text-white/30 text-lg font-light leading-snug tracking-tight">
                We capture the ephemeral flavors of tradition before they vanish. Handcrafted by mothers, delivered to the modern doorstep.
              </p>
              <div className="flex items-center gap-10">
                <button className="group relative py-4 px-10 border border-white/20 hover:border-[#FF4D00] transition-colors overflow-hidden">
                  <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">Initialize_System</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Extreme Parallax Elements */}
      <motion.div 
        style={{ y: 200 }}
        className="absolute bottom-[20vh] left-[-5vw] pointer-events-none opacity-[0.03]"
      >
        <span className="text-[50vw] font-black leading-none">HERITAGE</span>
      </motion.div>
    </section>
  );
};
