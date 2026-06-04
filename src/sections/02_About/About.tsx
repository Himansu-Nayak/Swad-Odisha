import React from 'react';
import { SectionWrapper } from '@components/shared/SectionWrapper';
import { DecorativeRule } from '@components/shared/DecorativeRule';
import { motion } from 'framer-motion';
import { AboutVisual } from './AboutVisual';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="story" bg="#060c05">
      <div className="absolute top-20 left-0 w-full">
        <DecorativeRule label="THE STORY" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-20 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '30px', 
            fontStyle: 'italic', 
            fontWeight: 400, 
            color: 'var(--text)', 
            lineHeight: 1.4 
          }}>
            "Pakhala is not just rice soaked in water. It is a summer morning in Odisha."
          </p>
        </motion.div>

        <AboutVisual />
      </div>
    </SectionWrapper>
  );
};
