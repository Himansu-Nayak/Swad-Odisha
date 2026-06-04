import React from 'react';
import { motion } from 'framer-motion';
import { Menu, AudioLines, Play } from 'lucide-react';
import { SectionLabel } from '@components/shared/SectionLabel';

export const HeroNavbar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 40px', zIndex: 100 }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <Menu size={18} color="var(--gold)" />
        </div>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <AudioLines size={18} color="var(--gold)" />
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: '300px' }}>
        <SectionLabel label="SWAD ODISHA" />
      </div>

      <div style={{ width: '112px', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
          <Play size={18} color="var(--gold)" />
        </div>
      </div>
    </motion.div>
  );
};
