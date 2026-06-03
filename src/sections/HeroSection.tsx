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
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 28px', zIndex: 10 }}>
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
      </div>

      {/* Above the giant word label */}
      <div style={{ position: 'absolute', top: '35%', width: '100%', maxWidth: '500px', zIndex: 5, transform: 'translateY(-50%)' }}>
         <SectionLabel label="SWAD ODISHA — THE TASTE OF" />
      </div>

      {/* Giant hero word */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(18vw, 22vw, 360px)',
          lineHeight: 0.85,
          background: 'linear-gradient(180deg, #fff 0%, #bbb 55%, #666 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-52%)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          margin: 0
        }}
      >
        ODISHA
      </motion.h1>

      {/* Odisha Map Visual */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: 'clamp(420px, 58vw, 860px)',
          height: 'auto',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <OdishaMap />
      </motion.div>

      {/* Center info container */}
      <div style={{ 
        position: 'absolute', 
        bottom: '28%', 
        left: 0, 
        right: 0, 
        zIndex: 5, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 0 
      }}>
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
      </div>

      {/* Bottom text */}
      <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.28em', color: 'rgba(201,169,110,0.3)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        BEST EXPERIENCED ON DESKTOP
      </div>

    </section>
  );
};
