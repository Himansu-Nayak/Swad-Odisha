import React from 'react';
import { motion } from 'framer-motion';
import { Menu, AudioLines, Play, ChevronDown } from 'lucide-react';
import OdishaMap from '../components/OdishaMap';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* LAYER 2 - "ODISHA" WATERMARK (z-index: 1) */}
      {/* (Layer 1 is StarfieldCanvas rendered globally in App.tsx) */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(120px, 18vw, 220px)',
          fontWeight: 900,
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,1)', // Opacity controlled by framer motion
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          margin: 0,
          whiteSpace: 'nowrap'
        }}
      >
        ODISHA
      </motion.h1>

      {/* LAYER 3 - ODISHA MAP (z-index: 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          zIndex: 2,
          width: 'clamp(380px, 45vw, 580px)',
          height: 'auto',
          filter: 'drop-shadow(0 0 40px rgba(200,120,40,0.3))'
        }}
      >
        <OdishaMap />
      </motion.div>

      {/* LAYER 4 - UI CONTENT (z-index: 3 and above) */}
      
      {/* TOP NAV BAR (z-index: 100) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
          padding: '20px 28px',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Menu size={16} color="var(--text)" />
          </button>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <AudioLines size={16} color="var(--text)" />
          </button>
          <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Play size={16} color="var(--text)" />
          </button>
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
            SWAD ODISHA
          </span>
          <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <div style={{ width: '152px' }} /> {/* Spacer to center the logo perfectly */}
      </motion.div>

      {/* CENTER CONTENT BLOCK (z-index: 10) */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', left: '50%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 10, 
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        width: '100%', pointerEvents: 'none' 
      }}>
        
        {/* 1. Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px' }}
        >
          <div style={{ height: '1px', width: '40px', background: 'var(--gold-dim)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.5em', textTransform: 'uppercase' }}>
            SWAD ODISHA — THE TASTE OF ODISHA
          </span>
          <div style={{ height: '1px', width: '40px', background: 'var(--gold-dim)' }} />
        </motion.div>

        {/* 2. Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            padding: '20px 28px',
            borderRadius: '4px',
            maxWidth: '480px',
            border: '1px solid rgba(255,255,255,0.03)',
            marginBottom: '80px',
            pointerEvents: 'auto'
          }}
        >
          <p style={{ 
            textAlign: 'center', 
            fontFamily: 'var(--font-body)', 
            fontSize: 'clamp(13px, 1.4vw, 16px)', 
            color: 'rgba(255,255,255,0.75)', 
            lineHeight: 1.8, 
            margin: 0 
          }}>
            Discover authentic Odia cuisine handcrafted by home chefs — from Pakhala Bhata to Chhena Poda, delivered fresh to your door.
          </p>
        </motion.div>

        {/* 3. CTA Button & Chevron */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', pointerEvents: 'auto' }}
        >
          <motion.button
            whileHover={{ backgroundColor: 'rgba(200,160,80,0.15)', borderColor: 'rgba(200,160,80,1)' }}
            style={{
              background: 'transparent',
              border: '1px solid rgba(200,160,80,0.6)',
              padding: '14px 36px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--gold)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})}
          >
            SCROLL TO TASTE
          </motion.button>
          
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} color="var(--gold)" style={{ opacity: 0.6 }} />
          </motion.div>
        </motion.div>
      </div>

      {/* LEFT SIDEBAR LABEL */}
      <div style={{ position: 'fixed', left: '28px', bottom: '120px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>PLATFORM</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Swad Odisha</span>
      </div>

      {/* RIGHT SIDEBAR LABEL */}
      <div style={{ position: 'fixed', right: '28px', bottom: '120px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>YEAR</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>2025</span>
      </div>

      {/* FOOTER BAR */}
      <div style={{ position: 'fixed', bottom: '20px', left: 0, width: '100%', zIndex: 100, textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
          BEST EXPERIENCED ON DESKTOP
        </span>
      </div>

      {/* CORNER BRACKETS */}
      <div style={{ position: 'fixed', left: '20px', bottom: '20px', width: '20px', height: '20px', borderLeft: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', zIndex: 90 }} />
      <div style={{ position: 'fixed', left: '20px', top: '20px', width: '20px', height: '20px', borderLeft: '1px solid rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.2)', zIndex: 90 }} />

    </section>
  );
};
