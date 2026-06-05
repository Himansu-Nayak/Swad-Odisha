import React from 'react';
import { motion } from 'framer-motion';

export const AboutVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
    >
      <div style={{
        width: 'clamp(280px, 30vw, 500px)',
        aspectRatio: '1',
        borderRadius: '50%',
        background: 'radial-gradient(circle at center, #1a2a16 0%, #060c05 70%)',
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
         {/* Abstract plate children */}
         <div style={{ width: '70%', height: '70%', borderRadius: '50%', border: '1px dashed rgba(201,169,110,0.2)' }} />
         <div style={{ position: 'absolute', width: '20px', height: '20px', background: 'var(--gold)', borderRadius: '50%', top: '20%', left: '30%' }} />
         <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#4ade80', borderRadius: '50%', bottom: '25%', right: '35%' }} />
      </div>
    </motion.div>
  );
};
