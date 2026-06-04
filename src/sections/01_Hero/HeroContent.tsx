import React from 'react';
import { motion } from 'framer-motion';
import { BracketButton } from '@components/shared/BracketButton';

export const HeroContent: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        position: 'absolute', 
        bottom: '8%', 
        left: 0, 
        right: 0, 
        zIndex: 20, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 0 
      }}
    >
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 100px', marginBottom: '32px' }}>
        <div style={{ borderLeft: '1.5px solid var(--gold)', paddingLeft: '32px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '4px' }}>CULTURAL IDENTITY</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: '#fff', letterSpacing: '0.05em' }}>Heritage Cuisine</p>
        </div>
        <div style={{ textAlign: 'right', borderRight: '1.5px solid var(--gold)', paddingRight: '32px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '4px' }}>HANDCRAFTED BY</p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: '#fff', letterSpacing: '0.05em' }}>Home Chef Collective</p>
        </div>
      </div>
      
      <div style={{ width: '100%', maxWidth: '900px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.3) 50%, transparent 100%)', marginBottom: '40px' }} />

      <BracketButton label="EXPLORE THE STORY" onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})} />
    </motion.div>
  );
};
