import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@components/shared/SectionWrapper';
import { DecorativeRule } from '@components/shared/DecorativeRule';
import { PROCESS_STEPS } from '@constants';
import { gsap } from 'gsap';

export const HowItWorks: React.FC = () => {
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

  return (
    <SectionWrapper id="process" bg="var(--bg)">
      <div ref={containerRef} className="relative w-full h-full">
        <DecorativeRule label="HOW IT WORKS" />

        <div className="relative mt-32 flex flex-col items-center gap-32">
          {/* Progress Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[var(--color-gold-dim)] z-0" />
          <div 
            ref={lineRef} 
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[var(--color-gold)] z-1 origin-top" 
          />

          {PROCESS_STEPS.map((step: any, i: number) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex items-center w-full relative z-10 ${
                i % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Background Number */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 font-[var(--font-display)] text-[200px] text-[var(--color-text)] opacity-[0.03] pointer-events-none select-none">
                0{step.id}
              </div>

              <div className={`w-full md:w-1/2 flex items-center gap-10 ${
                i % 2 === 0 ? 'flex-row pr-12 md:pr-24 text-right justify-end' : 'flex-row-reverse pl-12 md:pl-24 text-left justify-start'
              }`}>
                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xl text-[var(--color-gold)] tracking-widest uppercase m-0">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] font-[var(--font-body)] max-w-[280px]">
                    {step.desc}
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-[var(--bg)] border-2 border-[var(--color-gold)] flex items-center justify-center relative flex-shrink-0 group hover:bg-[var(--color-gold)] transition-colors duration-500">
                   <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] group-hover:bg-black transition-colors" />
                   {/* Decorative Ring */}
                   <div className="absolute inset-[-6px] rounded-full border border-[var(--color-gold)]/20 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
