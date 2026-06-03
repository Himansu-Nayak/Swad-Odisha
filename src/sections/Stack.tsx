import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

const STACK = [
  { name: "React 18", category: "Engine" },
  { name: "TypeScript", category: "Purity" },
  { name: "Three.js", category: "Void" },
  { name: "GSAP", category: "Inertia" },
  { name: "Framer Motion", category: "Beats" },
  { name: "Tailwind CSS", category: "Structure" }
];

export const Stack: React.FC = () => {
  return (
    <section id="stack" className="relative py-60 bg-[#050301] px-[8vw] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
      
      <div className="absolute bottom-0 right-[5vw] text-[25vw] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter">
        STACK
      </div>

      <div className="relative z-10 space-y-40">
         <SectionLabel label="06 — SYSTEM ARCHITECTURE" />

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {STACK.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="bg-[#050301] p-16 group hover:bg-white/[0.02] transition-colors relative"
              >
                 {/* Corner Ticks */}
                 <span className="hud-frame-tick top-0 left-0 border-t border-l opacity-20" />
                 <span className="hud-frame-tick top-0 right-0 border-t border-r opacity-20" />
                 
                 <span className="mono-label text-[var(--gold)]/40 group-hover:text-[var(--gold)] transition-colors tracking-[0.6em] text-[9px]">{item.category}</span>
                 <h3 className="text-5xl font-black text-white mt-6 uppercase tracking-tighter">{item.name}</h3>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
