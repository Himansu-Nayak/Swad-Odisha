import React, { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

const StatCounter = ({ end, suffix }: { end: number, suffix: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 12vw, 140px)', color: 'var(--gold)', lineHeight: 1 }}>
      {value}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section style={{ minHeight: '60vh', background: 'var(--bg)', padding: '60px 10vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '60px' }}>
        <SectionLabel label="— THE NUMBERS —" />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', flex: 1, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
           <StatCounter end={50} suffix="+" />
           <span className="mono-label">Authentic Dishes</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
           <StatCounter end={3} suffix="" />
           <span className="mono-label">Cities Served</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
           <StatCounter end={100} suffix="%" />
           <span className="mono-label">Handcrafted</span>
        </div>
      </div>
    </section>
  );
};
