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
    <section id="stack" className="relative py-60 bg-transparent px-[8vw] overflow-hidden">
      <div className="absolute bottom-0 right-[5vw] text-[20vw] font-black text-white/[0.01] pointer-events-none select-none leading-none">
        TECH
      </div>

      <div className="relative z-10 space-y-32">
         <SectionLabel label="06 — SYSTEM ARCHITECTURE" />

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
            {STACK.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-12 group hover:bg-white/[0.02] transition-colors"
              >
                 <span className="mono-label text-[#FF4D00]/40 group-hover:text-[#FF4D00] transition-colors">{item.category}</span>
                 <h3 className="text-3xl font-black text-white mt-4 uppercase tracking-tighter">{item.name}</h3>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
