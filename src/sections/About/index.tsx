import React from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { motion } from 'framer-motion';
import { AboutVisual } from './AboutVisual';
import { OdissiDancer } from '@/components/shared/OdissiDancerSVG';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" bg="#0a1a0a" className="justify-center">
      {/* Background Mural - Contained within section */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
        <div className="w-[min(90vw,1000px)] h-auto">
          <OdissiDancer />
        </div>
      </div>
      
      <div className="absolute top-20 left-0 w-full z-20">
        <DecorativeRule label="THE STORY" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl"
        >
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontStyle: 'italic', 
            fontWeight: 400, 
            color: 'var(--text)', 
            lineHeight: 1.4,
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            "Pakhala is not just rice soaked in water. It is a summer morning in Odisha."
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-gold/40" />
            <span className="font-mono text-[10px] text-gold tracking-[0.5em] uppercase opacity-60">Ancient_Wisdom_Archives</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-12 z-10 hidden md:block">
        <AboutVisual />
      </div>
    </SectionWrapper>
  );
};
