import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Menu, AudioLines, Play } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';
import OdishaMap from '../components/OdishaMap';

export const HeroSection: React.FC = () => {
  // Parallax setup inspired by 21hrs.space
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 150 });

  // Map mouse position to movement ranges
  // Background text moves less (parallax effect)
  const textX = useTransform(springX, [-1000, 1000], [20, -20]);
  const textY = useTransform(springY, [-1000, 1000], [20, -20]);

  // Foreground map moves more + tilt
  const mapX = useTransform(springX, [-1000, 1000], [-40, 40]);
  const mapY = useTransform(springY, [-1000, 1000], [-40, 40]);
  const mapRotateX = useTransform(springY, [-1000, 1000], [10, -10]);
  const mapRotateY = useTransform(springX, [-1000, 1000], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', perspective: '1500px', background: 'var(--bg)' }}>
      
      {/* Top HUD bar */}
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

      {/* Above the giant word label - HUD STYLE (Restored) */}
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

      {/* Giant hero word - THE BACKGROUND ANCHOR (21hrs inspired) */}
      <motion.div
        style={{
          position: 'absolute',
          top: '42%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          translateX: textX,
          translateY: textY,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'visible', // Ensure no clipping
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
            fontSize: 'clamp(100px, 15vw, 260px)', // Slightly smaller for even safer fit
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

      {/* Hero Object Glow (21hrs inspired) */}
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

      {/* Odisha Map Visual - THE HERO OBJECT (Strictly in front) */}
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
          width: 'clamp(260px, 38vw, 620px)', // Slightly reduced width for safety margin
          aspectRatio: '540 / 460', // Updated aspect ratio to match expanded viewBox
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
          <OdishaMap />
        </motion.div>
      </motion.div>

      {/* Info container - PUSHED TO THE EXTREME BOTTOM / HUD STYLE */}
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

      {/* Bottom status indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        style={{ position: 'absolute', bottom: '24px', left: '50%', x: '-50%', display: 'flex', alignItems: 'center', gap: '16px' }}
      >
        <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.4)', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
        <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </motion.div>

    </section>
  );
};
