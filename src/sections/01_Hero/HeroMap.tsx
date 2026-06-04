import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { OdishaMapSVG } from '@components/shared/OdishaMapSVG';

interface HeroMapProps {
  mapX: MotionValue<number>;
  mapY: MotionValue<number>;
  mapRotateX: MotionValue<number>;
  mapRotateY: MotionValue<number>;
}

export const HeroMap: React.FC<HeroMapProps> = ({ mapX, mapY, mapRotateX, mapRotateY }) => {
  return (
    <>
      {/* Hero Object Glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: 'clamp(400px, 48vw, 750px)',
          height: 'clamp(400px, 48vw, 750px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
          zIndex: 4,
          pointerEvents: 'none',
          translateX: mapX,
          translateY: mapY,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Odisha Map Visual */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.85, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '42%', 
          left: '50%',
          x: '-50%',
          y: '-50%',
          zIndex: 5,
          width: 'clamp(260px, 38vw, 620px)',
          aspectRatio: '540 / 460',
          filter: 'drop-shadow(0 60px 120px rgba(0,0,0,0.9))',
          translateX: mapX,
          translateY: mapY,
          rotateX: mapRotateX,
          rotateY: mapRotateY,
          transformStyle: 'preserve-3d',
          overflow: 'visible',
        }}
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <OdishaMapSVG />
        </motion.div>
      </motion.div>
    </>
  );
};
