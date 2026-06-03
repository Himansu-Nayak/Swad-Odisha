import React from 'react';
import { motion } from 'framer-motion';
import { BracketButton } from '../components/BracketButton';
import { SectionLabel } from '../components/SectionLabel';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Giant Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute z-0 flex flex-col items-center"
      >
        <SectionLabel label="SWAD ODISHA — THE TASTE OF" />
        <h1 className="text-[22vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 font-black tracking-tighter">
          ODISHA
        </h1>
      </motion.div>

      {/* Clay Pot Visual */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 150 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-0 z-10 w-[75vw] aspect-square rounded-full shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
        style={{
          background: "radial-gradient(circle at 35% 35%, #4a2c0a, #1a0d03, #000000)"
        }}
      >
         {/* Animated Highlight */}
         <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none animate-pulse" />
      </motion.div>

      {/* Descriptions & HUD Labels */}
      <div className="absolute bottom-16 inset-x-20 z-20 flex flex-col items-center gap-12">
        <div className="flex justify-between w-full items-end">
           <div className="flex flex-col gap-1">
              <span className="mono-label text-white/30 text-[8px]">Platform</span>
              <span className="mono-label text-white font-bold">Swad Odisha</span>
           </div>
           
           <div className="max-w-[580px] text-center space-y-8">
              <p className="text-xl md:text-2xl font-bold text-[#f0e6d3] leading-relaxed">
                Discover authentic Odia cuisine handcrafted by home chefs — from Pakhala Bhata to Chhena Poda, delivered fresh to your door.
              </p>
              <div className="w-full h-[1px] bg-white/20" />
              <BracketButton>SCROLL TO TASTE</BracketButton>
           </div>

           <div className="flex flex-col gap-1 text-right">
              <span className="mono-label text-white/30 text-[8px]">Year</span>
              <span className="mono-label text-white font-bold">2025</span>
           </div>
        </div>
        
        <span className="mono-label text-white/20 text-[8px]">Best Experienced on Desktop</span>
      </div>
    </section>
  );
};
