import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';

const StatCounter = ({ end, suffix }: { end: number, suffix: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(end);
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => setValue(Math.floor(latest)));
  }, [springValue]);

  return (
    <span ref={ref} className="font-[var(--font-display)] text-[clamp(80px,12vw,140px)] text-[var(--gold)] leading-none">
      {value}{suffix}
    </span>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials">
      <div className="mb-20">
        <DecorativeRule label="THE IMPACT" />
      </div>

      {/* Problem Logic */}
      <div className="flex flex-col items-center text-center gap-10 mb-32 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-[var(--font-display)] text-[50vw] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none select-none"
        >
          0
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="font-[var(--font-body)] text-2xl font-semibold max-w-[600px] leading-relaxed relative z-10"
        >
          Authentic Odia dishes were missing on mainstream delivery platforms.
        </motion.p>
        
        <div className="w-[2px] h-20 bg-[var(--gold)] relative z-10" />
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-[var(--font-display)] text-7xl md:text-8xl text-[var(--gold)] m-0 relative z-10"
        >
          Until now.
        </motion.h2>
      </div>

      {/* Stats Logic */}
      <div className="flex flex-wrap justify-around gap-12 items-center">
        <div className="flex flex-col items-center gap-2">
           <StatCounter end={50} suffix="+" />
           <span className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest">Authentic Dishes</span>
        </div>
        <div className="flex flex-col items-center gap-2">
           <StatCounter end={3} suffix="" />
           <span className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest">Cities Served</span>
        </div>
        <div className="flex flex-col items-center gap-2">
           <StatCounter end={100} suffix="%" />
           <span className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest">Handcrafted</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
