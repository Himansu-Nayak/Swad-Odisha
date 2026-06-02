import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chefs = [
  {
    name: "Saraswati Devi",
    location: "Cuttack",
    dish: "Pakhala Bhata Specialist",
    story: "Passed down from four generations, her fermented rice technique is a cultural treasure.",
    rating: "★★★★★"
  },
  {
    name: "Priya Nayak",
    location: "Bhubaneswar",
    dish: "Cheena Poda Expert",
    story: "Master of the clay oven, she caramelizes cottage cheese into gold.",
    rating: "★★★★★"
  },
  {
    name: "Meena Sahoo",
    location: "Puri",
    dish: "Dalma Queen",
    story: "Her spice-grinding secrets make her Dalma taste like a temple feast.",
    rating: "★★★★★"
  }
];

export const ChefScenes: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#030303]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 w-[300vw]">
          {chefs.map((chef, i) => (
            <div key={i} className="group relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
              {/* Dynamic Lens Flare */}
              <div className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] light-leak-gold opacity-30" />
              
              <div className="container mx-auto px-[8.333%] grid lg:grid-cols-12 gap-20 items-center relative z-10">
                <div className="lg:col-span-7 space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-4">
                       <span className="mono-meta text-brand-saffron tracking-[0.8em]">ARCHIVE_STORY_0{i + 1}</span>
                       <div className="h-px grow bg-white/5" />
                    </div>
                    <h2 className="text-[12vw] font-black text-white leading-[0.75] uppercase tracking-tighter">
                      {chef.name.split(' ')[0]} <br />
                      <span className="text-white/10 italic">{chef.name.split(' ')[1]}</span>
                    </h2>
                  </motion.div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <span className="text-brand-gold text-sm">{chef.rating}</span>
                          <span className="mono-meta text-white/20">Master Rating</span>
                       </div>
                       <p className="text-3xl font-['Playfair_Display'] text-white/80 leading-tight">
                          "{chef.story}"
                       </p>
                    </div>
                    <div className="flex flex-col justify-end items-start gap-4">
                       <span className="mono-meta text-brand-saffron">Region: {chef.location}</span>
                       <div className="h-px w-full bg-white/10" />
                       <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                          Specialization: {chef.dish}
                       </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex items-center justify-center">
                   <div className="relative aspect-[3/4] w-full bg-white/[0.01] border border-white/5 flex items-center justify-center group-hover:border-brand-saffron/20 transition-all duration-1000 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      <span className="text-white/[0.03] font-black text-9xl group-hover:text-white/5 transition-all duration-1000">SO</span>
                   </div>
                </div>
              </div>

              {/* Background Section Index */}
              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 text-[40vh] font-black text-white/[0.01] select-none pointer-events-none">
                 0{i + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
