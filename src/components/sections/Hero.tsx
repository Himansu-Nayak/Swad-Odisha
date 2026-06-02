import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[160vh] flex flex-col items-start px-10 md:px-20 pt-[25vh] overflow-hidden">
      {/* Cinematic Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[80vw] h-[80vw] bg-brand-saffron/10 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] bg-brand-gold/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-10 space-y-12">
          <div className="flex items-center gap-5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-brand-saffron" 
            />
            <span className="mono-meta text-brand-saffron tracking-[0.8em]">Archive_Protocol_01</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="massive-text text-white"
          >
            SWAD <br/> ODISHA
          </motion.h1>

          <div className="grid grid-cols-12 gap-5 pt-20">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1.5 }}
               className="col-span-12 lg:col-start-7 lg:col-span-5 space-y-12"
             >
                <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] italic text-brand-gold leading-[1.1]">
                  Capturing the ephemeral soul of <br/> Odia culinary heritage.
                </h2>
                <div className="space-y-6 max-w-md">
                   <p className="text-white/40 text-lg font-light leading-relaxed">
                      Beyond delivery. An immersive preservation of ancient recipes, slow-cooked by the keepers of tradition.
                   </p>
                   <div className="h-px w-full bg-white/10" />
                   <div className="flex justify-between items-center mono-meta opacity-50">
                      <span>Ref_20.29N_85.82E</span>
                      <span>Checksum_Verified</span>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Interaction Indicator */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-brand-saffron to-transparent mx-auto" />
        <span className="mono-meta block mt-4 rotate-90 origin-left ml-1 translate-x-1">Vertical_Scroll</span>
      </motion.div>
    </section>
  );
};
