import React from 'react';
import { motion } from 'framer-motion';
import { Menu, AudioLines, Play } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';

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

      {/* Odisha Map SVG Graphic */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: 'clamp(380px, 52vw, 780px)',
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 400 420"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 40px rgba(201,169,110,0.25))' }}
        >
          {/* Odisha state boundary — approximate SVG path */}
          <path
            d="
              M 180 10
              L 210 8
              L 245 18
              L 270 14
              L 295 28
              L 318 22
              L 335 40
              L 345 62
              L 338 85
              L 355 100
              L 360 122
              L 350 140
              L 360 158
              L 355 178
              L 340 192
              L 345 215
              L 330 235
              L 318 255
              L 310 278
              L 295 295
              L 278 310
              L 265 332
              L 248 348
              L 230 362
              L 215 378
              L 200 390
              L 188 378
              L 172 365
              L 155 348
              L 138 330
              L 120 312
              L 105 295
              L 88 278
              L 75 258
              L 62 238
              L 55 215
              L 48 192
              L 40 170
              L 35 148
              L 42 128
              L 38 108
              L 50 88
              L 62 72
              L 78 58
              L 95 48
              L 115 38
              L 138 24
              L 158 14
              Z
            "
            fill="none"
            stroke="#c9a96e"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Filled version behind stroke for depth */}
          <path
            d="
              M 180 10
              L 210 8
              L 245 18
              L 270 14
              L 295 28
              L 318 22
              L 335 40
              L 345 62
              L 338 85
              L 355 100
              L 360 122
              L 350 140
              L 360 158
              L 355 178
              L 340 192
              L 345 215
              L 330 235
              L 318 255
              L 310 278
              L 295 295
              L 278 310
              L 265 332
              L 248 348
              L 230 362
              L 215 378
              L 200 390
              L 188 378
              L 172 365
              L 155 348
              L 138 330
              L 120 312
              L 105 295
              L 88 278
              L 75 258
              L 62 238
              L 55 215
              L 48 192
              L 40 170
              L 35 148
              L 42 128
              L 38 108
              L 50 88
              L 62 72
              L 78 58
              L 95 48
              L 115 38
              L 138 24
              L 158 14
              Z
            "
            fill="rgba(201,169,110,0.06)"
          />
          {/* Internal district boundary lines — major ones only, subtle */}
          <line x1="180" y1="10"  x2="200" y2="390" stroke="rgba(201,169,110,0.12)" strokeWidth="0.8"/>
          <line x1="40"  y1="170" x2="355" y2="178" stroke="rgba(201,169,110,0.12)" strokeWidth="0.8"/>
          <line x1="62"  y1="238" x2="330" y2="235" stroke="rgba(201,169,110,0.10)" strokeWidth="0.8"/>
          <line x1="88"  y1="278" x2="310" y2="278" stroke="rgba(201,169,110,0.10)" strokeWidth="0.8"/>
          <line x1="120" y1="312" x2="278" y2="310" stroke="rgba(201,169,110,0.10)" strokeWidth="0.8"/>
          {/* Glow pulse circle at capital Bhubaneswar approx position */}
          <circle cx="255" cy="245" r="5" fill="#c9a96e" opacity="0.9">
            <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="255" cy="245" r="3" fill="#c9a96e" opacity="1"/>
          {/* Label: Bhubaneswar */}
          <text x="262" y="242" fill="rgba(201,169,110,0.7)" fontSize="10" fontFamily="'Space Mono', monospace" letterSpacing="1">BBSR</text>
        </svg>
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
