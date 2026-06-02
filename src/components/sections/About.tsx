import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[140vh] flex flex-col items-center justify-center px-[8vw] bg-[#000000] overflow-hidden">
      <div className="absolute top-[10%] left-[-2%] text-[20vw] font-black text-white/[0.015] pointer-events-none select-none leading-none tracking-tighter">
        SOUL
      </div>

      <div className="relative z-10 w-full max-w-[1800px] grid lg:grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-8 space-y-32">
           <div className="space-y-16">
              <div className="flex items-center gap-6">
                 <div className="h-px w-20 bg-[#FF4D00]" />
                 <span className="text-meta text-[#FF4D00]">The_Philosophical_Core</span>
              </div>

              <motion.h2 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="text-[12vw] font-black text-white uppercase leading-[0.8] tracking-[-0.08em]"
              >
                Heart <br/> Over <br/> Scale.
              </motion.h2>
           </div>

           <div className="grid md:grid-cols-2 gap-20 max-w-4xl">
              <div className="space-y-8">
                 <p className="text-white/40 text-2xl font-light leading-snug">
                    Swad Odisha exists to protect the recipes that are being erased by convenience. We are a digital sanctuary for home-cooked love.
                 </p>
                 <div className="h-px w-full bg-white/10" />
                 <p className="font-['Caveat'] text-5xl text-[#FF4D00]/50 leading-tight">
                    "We don't cook for customers. We cook for family."
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
