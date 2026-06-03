import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { gsap } from 'gsap';

export const ProcessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 40%',
            end: 'bottom 80%',
            scrub: 1
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    "BROWSE MENU",
    "PLACE ORDER",
    "CHEF PREPARES",
    "DELIVERED HOT"
  ];

  return (
    <section ref={containerRef} style={{ minHeight: '100vh', background: 'var(--bg)', padding: '80px 10vw', position: 'relative' }}>
      <SectionLabel label="— HOW IT WORKS —" />

      <div style={{ position: 'relative', marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '100px' }}>
        {/* The drawing line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', background: 'var(--gold-dim)', zIndex: 0 }} />
        <div ref={lineRef} style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '2px', background: 'var(--gold)', zIndex: 1, transformOrigin: 'top' }} />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              width: '100%',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* The giant background number */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, -10%)',
              fontFamily: 'var(--font-display)',
              fontSize: '180px',
              color: 'var(--text)',
              opacity: 0.04,
              pointerEvents: 'none'
            }}>
              0{i + 1}
            </div>

            <div style={{ 
              width: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
              paddingRight: i % 2 === 0 ? '60px' : 0,
              paddingLeft: i % 2 !== 0 ? '60px' : 0,
              gap: '20px',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
            }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', margin: 0, color: 'var(--gold)' }}>
                {step}
              </h3>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
