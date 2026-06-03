import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

const STATS = [
  { label: "Artifacts_Archived", val: 50, suffix: "+" },
  { label: "Nodes_Active", val: 10, suffix: "+" },
  { label: "Stability_Index", val: 4.9, suffix: "/5" }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => {
    if (value % 1 === 0) return Math.round(latest).toString() + suffix;
    return latest.toFixed(1) + suffix;
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  useEffect(() => {
    return rounded.onChange(v => setDisplayValue(v));
  }, [rounded]);

  return <motion.span>{displayValue}</motion.span>;
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative py-60 bg-transparent px-[8vw] overflow-hidden">
      <div className="absolute top-[20%] left-[-5%] text-[20vw] font-black text-white/[0.01] pointer-events-none select-none leading-none">
        DATA
      </div>

      <div className="relative z-10 space-y-32">
         <SectionLabel label="07 — METRICS & OUTPUT" />

         <div className="grid md:grid-cols-3 gap-20">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                 <div className="text-8xl font-black text-white tracking-tighter">
                    <Counter value={s.val} suffix={s.suffix} />
                 </div>
                 <div className="hud-text text-[#FF4D00]">{s.label}</div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
