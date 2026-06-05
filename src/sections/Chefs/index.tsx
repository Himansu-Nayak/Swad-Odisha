import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { CHEFS } from '@/constants';
import Tilt from 'react-parallax-tilt';

export const Chefs: React.FC = () => {
  return (
    <SectionWrapper id="chefs" bg="#060c05">
      <div className="mb-20">
        <DecorativeRule label="HOME CHEFS" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CHEFS.map((chef: any, i: number) => (
          <motion.div
            key={chef.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2500}>
              <div className="group border border-[var(--gold)]/40 bg-black/40 p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden transition-all duration-500 hover:border-[var(--gold)] hover:bg-black/60">
                 {/* Decorative background light */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[var(--gold)]/5 blur-[60px] rounded-full group-hover:bg-[var(--gold)]/10 transition-colors" />

                 {/* Abstract Avatar */}
                 <div className="w-24 h-24 rounded-full border border-[var(--gold-dim)] p-2 group-hover:border-[var(--gold)] transition-colors">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="font-[var(--font-display)] text-4xl text-black">{chef.name[0]}</span>
                    </div>
                 </div>

                 <div className="flex flex-col gap-2 relative z-10">
                    <h3 className="font-[var(--font-display)] text-4xl text-[var(--text)] leading-tight group-hover:text-[var(--gold)] transition-colors">{chef.name}</h3>
                    <p className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-[0.2em]">
                      {chef.city}
                    </p>
                 </div>
                 
                 <p className="text-sm text-[var(--text-muted)] font-[var(--font-body)] leading-relaxed italic">
                   "{chef.bio}"
                 </p>

                 <div className="font-mono text-[11px] text-[var(--gold)] uppercase tracking-[0.3em] mt-4 border-t border-[var(--gold-dim)] pt-4 w-full">
                   {chef.specialty}
                 </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
