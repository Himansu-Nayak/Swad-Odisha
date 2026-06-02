import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen py-[20vh] bg-[#020202] px-10 md:px-20 overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] massive-text font-black text-white/[0.015] pointer-events-none select-none leading-none">
        ETHOS
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7 space-y-24">
           <div className="space-y-12">
              <div className="flex items-center gap-6">
                 <div className="h-[1px] w-24 bg-brand-gold/30" />
                 <span className="mono-meta text-brand-gold">04 — Philosophical Core</span>
              </div>

              <motion.h2 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[10vw] font-black text-white uppercase leading-[0.8] tracking-tighter"
              >
                Soul <br/> Over <br/> Scale.
              </motion.h2>
           </div>

           <div className="grid md:grid-cols-2 gap-20">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-8"
              >
                 <p className="text-white/40 text-xl font-light leading-relaxed">
                    Swad Odisha exists to protect the recipes that are being erased by industrial convenience. We are a digital sanctuary for home-cooked love.
                 </p>
                 <div className="h-px w-full bg-white/5" />
                 <p className="font-['Caveat'] text-4xl text-brand-saffron/40 leading-tight">
                    "We don't cook for customers. We cook for family."
                 </p>
              </motion.div>
              
              <div className="flex flex-col justify-end space-y-12">
                 <div className="space-y-4">
                    <span className="mono-meta text-white/20">Data_Points</span>
                    <div className="flex flex-col gap-4">
                       {[
                         { label: "Home Chefs", val: "50+" },
                         { label: "Orders", val: "2K+" },
                         { label: "Rating", val: "4.9" }
                       ].map((s, i) => (
                         <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                            <span className="text-[10px] font-black uppercase text-white/20">{s.label}</span>
                            <span className="text-2xl font-black text-white">{s.val}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
           <div className="relative w-full aspect-[3/4] border border-white/5 bg-white/[0.01] backdrop-blur-3xl p-10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute inset-0 bg-brand-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="flex justify-between items-start mono-meta opacity-30">
                 <span>Preservation_Active</span>
                 <span>ID: 8824</span>
              </div>
              <div className="relative text-center">
                 <span className="text-[12vw] font-black text-white/5 group-hover:text-white/10 transition-colors duration-1000">SO</span>
              </div>
              <div className="mono-meta text-center opacity-30">
                 The_Taste_Of_Odisha
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
