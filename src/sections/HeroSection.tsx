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

      {/* Odisha Map SVG Graphic - Solid Texture */}
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
          <defs>
            <radialGradient id="clayTexture" cx="35%" cy="35%" r="70%">
               <stop offset="0%" stopColor="#4a2c0a" />
               <stop offset="30%" stopColor="#1a0d03" />
               <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>
          
          <path
            d="M 180,10 C 186.00,9.60 197.00,6.40 210,8 C 223.00,9.60 233.00,16.80 245,18 C 257.00,19.20 260.00,12.00 270,14 C 280.00,16.00 285.40,26.40 295,28 C 304.60,29.60 310.00,19.60 318,22 C 326.00,24.40 329.60,32.00 335,40 C 340.40,48.00 344.40,53.00 345,62 C 345.60,71.00 336.00,77.40 338,85 C 340.00,92.60 350.60,92.60 355,100 C 359.40,107.40 361.00,114.00 360,122 C 359.00,130.00 350.00,132.80 350,140 C 350.00,147.20 359.00,150.40 360,158 C 361.00,165.60 359.00,171.20 355,178 C 351.00,184.80 342.00,184.60 340,192 C 338.00,199.40 347.00,206.40 345,215 C 343.00,223.60 335.40,227.00 330,235 C 324.60,243.00 322.00,246.40 318,255 C 314.00,263.60 314.60,270.00 310,278 C 305.40,286.00 301.40,288.60 295,295 C 288.60,301.40 284.00,302.60 278,310 C 272.00,317.40 271.00,324.40 265,332 C 259.00,339.60 255.00,342.00 248,348 C 241.00,354.00 236.60,356.00 230,362 C 223.40,368.00 221.00,372.40 215,378 C 209.00,383.60 205.40,390.00 200,390 C 194.60,390.00 193.60,383.00 188,378 C 182.40,373.00 178.60,371.00 172,365 C 165.40,359.00 161.80,355.00 155,348 C 148.20,341.00 145.00,337.20 138,330 C 131.00,322.80 126.60,319.00 120,312 C 113.40,305.00 111.40,301.80 105,295 C 98.60,288.20 94.00,285.40 88,278 C 82.00,270.60 80.20,266.00 75,258 C 69.80,250.00 66.00,246.60 62,238 C 58.00,229.40 57.80,224.20 55,215 C 52.20,205.80 51.00,201.00 48,192 C 45.00,183.00 42.60,178.80 40,170 C 37.40,161.20 34.60,156.40 35,148 C 35.40,139.60 41.40,136.00 42,128 C 42.60,120.00 36.40,116.00 38,108 C 39.60,100.00 45.20,95.20 50,88 C 54.80,80.80 56.40,78.00 62,72 C 67.60,66.00 71.40,62.80 78,58 C 84.60,53.20 87.60,52.00 95,48 C 102.40,44.00 106.40,42.80 115,38 C 123.60,33.20 129.40,28.80 138,24 C 146.60,19.20 154.00,16.00 158,14 Z"
            fill="url(#clayTexture)"
            stroke="#c9a96e"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
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
