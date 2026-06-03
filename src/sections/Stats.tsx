import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

const STATS = [
  { label: "Artifacts_Archived", val: "50+", suffix: "" },
  { label: "Nodes_Active", val: "10", suffix: "" },
  { label: "Stability_Index", val: "100", suffix: "%" }
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative py-60 bg-[#050301] px-[8vw] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[var(--border)]" />
      
      <div className="absolute top-[20%] left-[-5%] text-[30vw] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter italic">
        DATA
      </div>

      <div className="relative z-10 space-y-40">
         <SectionLabel label="07 — METRICS & OUTPUT" />

         <div className="grid md:grid-cols-3 gap-20">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="space-y-6"
              >
                 <div className="text-huge font-black text-[var(--gold)] tracking-tighter">
                    {s.val}{s.suffix}
                 </div>
                 <div className="mono-label text-white/40 tracking-[0.6em]">{s.label}</div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
