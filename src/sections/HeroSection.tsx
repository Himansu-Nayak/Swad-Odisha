import React from 'react';
import { motion } from 'framer-motion';
import { Menu, AudioLines, Play } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';
import OdishaMap from '../components/OdishaMap';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      
      {/* Top HUD bar */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', zIndex: 10 }}
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Menu size={16} color="var(--gold)" />
          </div>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AudioLines size={16} color="var(--gold)" />
          </div>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid var(--gold-dim)', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Play size={16} color="var(--gold)" />
          </div>
        </div>

        <div style={{ flex: 1, maxWidth: '400px' }}>
          <SectionLabel label="SWAD ODISHA" />
        </div>

        <div style={{ width: '132px' }} /> {/* Right empty spacer to balance left buttons */}
      </motion.div>

      {/* Above the giant word label */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', top: '35%', width: '100%', maxWidth: '500px', zIndex: 5, transform: 'translateY(-50%)' }}
      >
         <SectionLabel label="SWAD ODISHA — THE TASTE OF" />
      </motion.div>

      {/* Giant hero word */}
      <motion.h1
        initial={{ opacity: 0, y: 100, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(18vw, 22vw, 360px)',
          lineHeight: 0.85,
          background: 'linear-gradient(180deg, #fff 0%, #bbb 55%, #666 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'absolute',
          top: '50%',
          marginTop: '-4%', /* subtle optical alignment adjustment */
          transform: 'translateY(-50%)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          margin: 0
        }}
      >
        ODISHA
      </motion.h1>

      {/* Odisha Map Visual - Nested to allow Entrance + Infinite Float */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '44%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          zIndex: 2,
          width: 'clamp(300px, 42vw, 650px)',
          height: 'auto',
        }}
      >
        <motion.div
          animate={{ y: ["0%", "-3%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%' }}
        >
          <OdishaMap />
        </motion.div>
      </motion.div>

      {/* Center info container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'absolute', 
          bottom: '28%', 
          left: 0, 
          right: 0, 
          zIndex: 5, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 0 
        }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 28px', marginBottom: '12px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>PLATFORM</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--text)' }}>Swad Odisha</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>YEAR</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--text)' }}>2025</p>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '17px', fontWeight: 600, color: 'var(--text)', maxWidth: '520px', lineHeight: 1.6, marginBottom: '16px' }}>
          Discover authentic Odia cuisine handcrafted by home chefs — from Pakhala Bhata to Chhena Poda, delivered fresh to your door.
        </p>

        <div style={{ width: '100%', height: '1px', background: 'var(--gold-dim)', marginBottom: '24px' }} />

        <BracketButton label="SCROLL TO TASTE" onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})} />
      </motion.div>

      {/* Bottom text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.8 }}
        style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.28em', color: 'rgba(201,169,110,0.3)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
      >
        BEST EXPERIENCED ON DESKTOP
      </motion.div>

    </section>
  );
};
