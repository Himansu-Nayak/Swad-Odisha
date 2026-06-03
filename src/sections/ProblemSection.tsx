import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const ProblemSection: React.FC = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      background: 'var(--bg)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      padding: '0 10vw'
    }}>
      <div style={{ position: 'absolute', top: '10%', width: '100%' }}>
        <SectionLabel label="— THE PROBLEM —" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '60vw',
          lineHeight: 0.8,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        0
      </motion.div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '24px', fontWeight: 600, maxWidth: '600px', lineHeight: 1.5 }}
        >
          Authentic Odia dishes on mainstream delivery platforms.
        </motion.p>
        
        <div style={{ width: '2px', height: '80px', background: 'var(--gold)' }} />
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: '80px', color: 'var(--gold)', margin: 0 }}
        >
          Until now.
        </motion.h2>
      </div>
    </section>
  );
};
