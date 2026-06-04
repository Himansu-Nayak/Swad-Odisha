import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '@components/shared/SectionLabel';

export const HeroSidebar: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        position: 'absolute', 
        top: '16%', 
        left: '50%',
        x: '-50%',
        width: '100%', 
        maxWidth: '600px', 
        zIndex: 10, 
        pointerEvents: 'none'
      }}
    >
       <SectionLabel label="SWAD ODISHA — AN AUTHENTIC CULINARY JOURNEY" />
    </motion.div>
  );
};
