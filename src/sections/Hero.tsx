import React from 'react';
import { motion } from 'framer-motion';
import { BracketButton } from '../components/BracketButton';
import { SectionLabel } from '../components/SectionLabel';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Giant Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <SectionLabel label="SWAD ODISHA — THE TASTE OF" />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="text-huge leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888888] font-black tracking-tighter"
          style={{ zIndex: 0 }}
        >
          ODISHA
        </motion.h1>
      </div>

      {/* Clay Pot Visual (Sphere) */}
      <motion.div
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 150 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-0 z-10 w-[70vw] aspect-square rounded-full shadow-[0_50px_100px_rgba(0,0,0,1)]"
        style={{
          background: "radial-gradient(circle at 35% 35%, #4a2c0a, #1a0d03, #000000)",
          boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8), 0 50px 100px rgba(0,0,0,0.8)"
        }}
      >
         {/* Animated Highlight */}
         <motion.div 
           animate={{ opacity: [0.1, 0.3, 0.1] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" 
         />
      </motion.div>

      {/* HUD Labels & Description */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-20 pb-24">
        <div className="flex justify-between items-end w-full">
           <div className="flex flex-col gap-1">
              <span className="mono-label text-white/30 text-[8px]">Platform</span>
              <span className="mono-label text-white font-bold text-[11px]">Swad Odisha</span>
           </div>
           
           <div className="max-w-[580px] text-center flex flex-col items-center gap-8 mb-4">
              <p className="text-xl font-bold text-[#f0e6d3] leading-relaxed">
                Discover authentic Odia cuisine handcrafted by home chefs — from Pakhala Bhata to Chhena Poda, delivered fresh to your door.
              </p>
              <div className="w-[120%] h-[1.5px] bg-[var(--border)]" />
              <BracketButton>SCROLL TO TASTE</BracketButton>
           </div>

           <div className="flex flex-col gap-1 text-right">
              <span className="mono-label text-white/30 text-[8px]">Year</span>
              <span className="mono-label text-white font-bold text-[11px]">2025</span>
           </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mono-label text-white/20 text-[8px]">
          Best Experienced on Desktop
        </div>
      </div>
    </section>
  );
};
