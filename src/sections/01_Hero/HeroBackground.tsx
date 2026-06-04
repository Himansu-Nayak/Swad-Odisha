import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { StarfieldCanvas } from '@components/shared/StarfieldCanvas';

interface HeroBackgroundProps {
  textX: MotionValue<number>;
  textY: MotionValue<number>;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ textX, textY }) => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <StarfieldCanvas />
      </div>
      
      <motion.div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          translateX: textX,
          translateY: textY,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'visible',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(40px)' }}
          animate={{ opacity: 0.4, scale: 1, filter: 'blur(0px)' }}
          transition={{ 
            duration: 2.2, 
            ease: [0.23, 1, 0.32, 1], 
            delay: 0.1 
          }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(100px, 15vw, 260px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg, #fff 0%, rgba(200,200,200,0.1) 80%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            textAlign: 'center',
            letterSpacing: '0.05em',
            fontWeight: 900,
          }}
        >
          ODISHA
        </motion.h1>
      </motion.div>
    </>
  );
};
