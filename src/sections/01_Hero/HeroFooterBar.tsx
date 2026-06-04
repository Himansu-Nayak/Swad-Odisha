import React from 'react';
import { motion } from 'framer-motion';

export const HeroFooterBar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      style={{ position: 'absolute', bottom: '24px', left: '50%', x: '-50%', display: 'flex', alignItems: 'center', gap: '16px', zIndex: 100 }}
    >
      <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.4)', textTransform: 'uppercase' }}>
        Scroll to explore
      </span>
      <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
    </motion.div>
  );
};
