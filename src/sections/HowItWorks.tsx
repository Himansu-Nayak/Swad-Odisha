import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { title: "BROWSE MENU", desc: "Explore ancient recipes." },
  { title: "PLACE ORDER", desc: "Digital archive entry." },
  { title: "CHEF PREPARES", desc: "Handcrafted soul food." },
  { title: "DELIVERED HOT", desc: "Heritage at your door." }
];

export const HowItWorks: React.FC = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-60 bg-[#050301] px-[15vw] overflow-hidden">
       <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
       
       <div className="mb-40">
          <SectionLabel label="05 — TRANSMISSION" />
       </div>

       <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[1px] bg-white/5" />
          <motion.div 
            ref={lineRef}
            className="absolute left-[20px] top-0 bottom-0 w-[1px] bg-[var(--gold)] origin-top z-10"
          />

          <div className="space-y-40">
             {STEPS.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="flex items-center gap-20 group"
               >
                  <div className="w-10 h-10 rounded-full border border-[var(--gold)] bg-black flex items-center justify-center relative z-20 transition-all group-hover:shadow-[0_0_20px_var(--gold)]">
                     <span className="mono-label text-[10px] text-[var(--gold)]">{i + 1}</span>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-7xl md:text-8xl font-black leading-none">{step.title}</h3>
                     <p className="mono-label text-white/30 text-sm tracking-[0.6em]">{step.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};
