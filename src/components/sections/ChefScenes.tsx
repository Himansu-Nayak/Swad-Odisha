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
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 w-[300vw]">
          {chefs.map((chef, i) => (
            <div key={i} className="group relative h-screen w-screen flex-shrink-0 flex items-center justify-center overflow-hidden border-r border-white/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.05)_0%,_transparent_70%)]" />
              
              <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">Keeper of Tradition — 0{i + 1}</span>
                    <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] font-black text-white leading-none uppercase">
                      {chef.name.split(' ')[0]} <br />
                      <span className="text-brand-gold italic">{chef.name.split(' ')[1]}</span>
                    </h2>
                  </motion.div>

                  <div className="space-y-6 max-w-md">
                    <div className="flex items-center gap-4">
                      <div className="h-px w-12 bg-brand-saffron" />
                      <span className="text-brand-saffron font-bold uppercase tracking-widest text-xs">{chef.location}</span>
                      <span className="text-brand-gold">{chef.rating}</span>
                    </div>
                    <p className="text-2xl font-['Playfair_Display'] text-white/90 leading-tight">
                      "{chef.story}"
                    </p>
                    <p className="text-brand-warm/40 uppercase tracking-[0.2em] text-xs font-bold">
                      Signature: {chef.dish}
                    </p>
                  </div>
                </div>

                <div className="relative aspect-square flex items-center justify-center">
                   <div className="absolute inset-0 bg-brand-saffron/10 blur-[120px] rounded-full scale-75 animate-pulse" />
                   <div className="w-3/4 h-3/4 border border-white/10 rounded-full flex items-center justify-center relative z-10 group-hover:border-brand-saffron/30 transition-colors duration-1000">
                      <div className="w-5/6 h-5/6 border border-white/5 rounded-full flex items-center justify-center">
                         <span className="text-white/10 font-['Playfair_Display'] font-black text-9xl group-hover:text-brand-saffron/20 transition-colors duration-1000">SO</span>
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
