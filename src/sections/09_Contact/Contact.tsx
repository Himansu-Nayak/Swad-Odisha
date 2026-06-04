import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@components/shared/SectionWrapper';
import { DecorativeRule } from '@components/shared/DecorativeRule';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" bg="#060c05">
      <div className="mb-20">
        <DecorativeRule label="BUILT BY" />
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-[clamp(48px,7vw,96px)] font-[var(--font-display)] text-[var(--color-text)] leading-[0.85] m-0 uppercase">
            HIMANSU NAYAK
          </h2>
          <p className="font-mono text-[12px] text-[var(--color-gold)] uppercase tracking-[0.1em]">
            MCA 2024–26 · RCM Bhubaneswar · Full-Stack Developer
          </p>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed max-w-xl font-[var(--font-body)]">
            Passionate about bridging cultural heritage with cutting-edge web technologies. Specializing in high-performance React architectures and immersive digital experiences.
          </p>
          
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-12 h-12 border border-[var(--color-gold-dim)] rounded-full flex items-center justify-center text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-[var(--color-gold-dim)] rounded-full flex items-center justify-center text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-[var(--color-gold-dim)] rounded-full flex items-center justify-center text-[var(--color-gold)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex flex-wrap gap-3"
        >
          {['React', 'TypeScript', 'Tailwind', 'GSAP', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Vite', 'Three.js'].map((skill, i) => (
            <div key={i} className="border border-[var(--color-gold)] rounded-full px-6 py-2 font-mono text-[11px] text-[var(--color-text)] uppercase tracking-widest bg-[var(--color-gold)]/5 hover:bg-[var(--color-gold)]/20 transition-colors">
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
