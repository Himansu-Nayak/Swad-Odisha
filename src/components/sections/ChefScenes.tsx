import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

const chefs = [
  {
    name: "Saraswati",
    last: "Devi",
    location: "Cuttack (20.46°N 85.87°E)",
    dish: "Pakhala Bhata Specialist",
    story: "Four generations of tradition. Her spice-grinding technique is a cultural treasure.",
    id: "ID_ARCH_88"
  },
  {
    name: "Priya",
    last: "Nayak",
    location: "Bhubaneswar (20.29°N 85.82°E)",
    dish: "Cheena Poda Expert",
    story: "Master of the clay oven. Transforming cottage cheese into caramelized gold.",
    id: "ID_ARCH_24"
  },
  {
    name: "Meena",
    last: "Sahoo",
    location: "Puri (19.81°N 85.83°E)",
    dish: "Dalma Queen",
    story: "Spice-grinding secrets from the temple kitchens, slow-cooked for the soul.",
    id: "ID_ARCH_16"
  }
];

export const ChefScenes: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section id="keepers" ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          {chefs.map((chef, i) => (
            <div key={i} className="relative h-screen w-screen flex-shrink-0 flex flex-col justify-center px-[8vw] border-r border-white/[0.03]">
               {/* Massive Index Marker */}
               <div className="absolute top-[10%] left-[8vw] text-[35vh] font-black text-white/[0.015] pointer-events-none select-none leading-none tracking-tighter italic">
                  0{i + 1}
               </div>

               <div className="relative z-10 grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8 space-y-20">
                     <div className="space-y-4 text-left">
                        <div className="flex items-center gap-6">
                           <span className="hud-text text-[#FF4D00]">The_Keepers</span>
                           <div className="h-px grow bg-white/5" />
                           <span className="hud-text">{chef.id}</span>
                        </div>
                        <SplitText 
                          text={`${chef.name} ${chef.last}`}
                          className="text-[12vw] font-black text-white leading-[0.75] uppercase tracking-tighter text-left"
                          delay={0.2}
                        />
                     </div>

                     <div className="grid md:grid-cols-2 gap-20">
                        <div className="space-y-8">
                           <p className="text-3xl font-['Playfair_Display'] text-white/90 leading-tight italic">
                              "{chef.story}"
                           </p>
                           <div className="flex items-center gap-4">
                              <span className="text-[#EF9F27]">★★★★★</span>
                              <span className="hud-text">Archive_Quality_Pass</span>
                           </div>
                        </div>
                        <div className="flex flex-col justify-end items-start gap-4">
                           <div className="h-px w-full bg-white/10" />
                           <span className="hud-text text-[#FF4D00]">{chef.location}</span>
                           <span className="text-sm font-light text-white/40 uppercase tracking-[0.2em]">{chef.dish}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
