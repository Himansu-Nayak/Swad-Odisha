import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Disc, Power, LayoutGrid, X } from 'lucide-react';
import { OdishaMapSVG as OdishaMap } from '@/components/shared/OdishaMapSVG';
import { BracketButton } from '@/components/shared/BracketButton';
import { StarfieldCanvas } from '@/components/shared/StarField';

const NAV_SECTIONS = [
  { id: 'hero', label: '01_ARCHIVE_ROOT' },
  { id: 'about', label: '02_PHILOSOPHY' },
  { id: 'menu', label: '03_ARTIFACTS' },
  { id: 'districts', label: '04_REGIONS' },
  { id: 'chefs', label: '05_KEEPERS' },
  { id: 'process', label: '06_PROTOCOL' },
  { id: 'testimonials', label: '07_SIGNAL' },
  { id: 'contact', label: '08_CONNECT' },
];

export function Hero() {
  const [showIndex, setShowIndex] = React.useState(false);

  const scrollTo = (id: string) => {
    setShowIndex(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'block',
      }}
    >
      {/* Background Layer */}
      <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: -2 }} />
      <StarfieldCanvas />

      {/* TOP HUD BAR */}
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '36px 48px', 
      }}>
        {/* Left Icons - 3 buttons */}
        <div className="flex gap-4 pointer-events-auto">
          <button onClick={() => setShowIndex(true)} className="nav-btn group">
            <Menu size={14} className="text-white/40 group-hover:text-gold transition-colors" />
          </button>
          <button className="nav-btn group">
            <Disc size={14} className="text-white/40 group-hover:text-gold transition-colors animate-spin-slow" />
          </button>
          <button className="nav-btn group">
            <LayoutGrid size={14} className="text-white/40 group-hover:text-gold transition-colors" />
          </button>
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-center">
          <span className="font-display text-sm tracking-[0.6em] text-gold font-bold">SWAD ODISHA</span>
          <span className="hud-label !text-[7px] tracking-[0.8em]">SYSTEM_ESTABLISHED_2025</span>
        </div>

        {/* Right Action */}
        <div className="flex gap-4 pointer-events-auto">
          <button className="nav-btn group px-4 !w-auto rounded-full border-white/5">
            <span className="hud-label text-[8px] group-hover:text-gold transition-colors mr-2">SYS_POWER</span>
            <Power size={12} className="text-white/40 group-hover:text-gold" />
          </button>
        </div>
      </nav>

      {/* ODISHA WATERMARK IDENTITY */}
      <h1 
        style={{
          fontSize: 'clamp(160px, 28vw, 420px)',
          fontWeight: 950,
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textAlign: 'center',
          position: 'absolute',
          top: '44%', // Shifted slightly UP from center as requested
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          background: 'linear-gradient(180deg, rgba(200, 140, 60, 0.3) 0%, rgba(180, 110, 40, 0.18) 40%, rgba(140, 80, 20, 0.1) 80%, rgba(100, 50, 10, 0.05) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'odishaEntrance 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards, odishaPulse 6s ease-in-out 2.8s infinite'
        }}
      >
        ODISHA
      </h1>

      <style>{`
        @keyframes odishaEntrance {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.96); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes odishaPulse {
          0%   { opacity: 0.7;  transform: translate(-50%, -50%) scale(1.000); }
          50%  { opacity: 1.0;  transform: translate(-50%, -50%) scale(1.008); }
          100% { opacity: 0.7;  transform: translate(-50%, -50%) scale(1.000); }
        }
      `}</style>

      {/* ODISHA MAP: Centered */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 2,
          width: 'clamp(480px, 60vw, 880px)',
          height: 'auto',
          pointerEvents: 'none',
        }}
        initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.9 }}
        animate={{ 
          x: "-50%", 
          y: ["-50%", "-52%", "-50%"],
          opacity: 1, 
          scale: 1 
        }}
        transition={{ 
          opacity: { duration: 1.5 },
          scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } 
        }}
      >
        <OdishaMap interactive={false} />
      </motion.div>

      {/* INFO ROW */}
      <div style={{
        position: 'absolute',
        bottom: '26%',
        left: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '0 120px',
      }}>
        <div className="flex flex-col gap-1">
          <span className="hud-label">PLATFORM</span>
          <span className="hud-value">SWAD_ODISHA</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="hud-label">YEAR</span>
          <span className="hud-value">2025</span>
        </div>
      </div>

      {/* DIVIDER */}
      <div style={{
        position: 'absolute',
        bottom: '22%',
        left: 0,
        right: 0,
        height: '1px',
        background: 'rgba(255,255,255,0.1)',
        zIndex: 10,
      }} />

      {/* SYSTEM ACTIONS */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <BracketButton 
          label="ACCESS_SYSTEM_INDEX" 
          onClick={() => setShowIndex(true)} 
        />
        <div 
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="font-mono text-[8px] text-gold/40 tracking-[0.5em] group-hover:text-gold transition-colors">INITIATE_DESCENT</span>
          <div className="w-[1px] h-8 bg-gold/20 group-hover:bg-gold/50 transition-colors" />
        </div>
      </div>

      {/* BOTTOM LABEL */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.28em',
        color: 'rgba(201,169,110,0.28)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        BEST EXPERIENCED ON DESKTOP
      </div>

      {/* FULLSCREEN SECTION INDEX OVERLAY */}
      <AnimatePresence>
        {showIndex && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(8,8,8,0.99)',
              backdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            <button 
              onClick={() => setShowIndex(false)}
              className="absolute top-12 right-12 nav-btn !w-auto px-6 rounded-full group flex gap-3"
            >
              <span className="font-mono text-[10px] text-white/40 group-hover:text-gold">TERMINATE_OVERLAY</span>
              <X size={14} className="text-white/40 group-hover:text-gold" />
            </button>

            <div className="flex flex-col gap-4 items-center">
              <span className="hud-label !text-gold/40 mb-8">SYSTEM_DIRECTORIES_V1.0</span>
              {NAV_SECTIONS.map((section, idx) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => scrollTo(section.id)}
                  className="group relative py-2"
                >
                  <span className="font-display text-4xl md:text-7xl text-white/10 group-hover:text-white group-hover:italic group-hover:translate-x-4 transition-all duration-500 uppercase block">
                    {section.label.split('_')[1]}
                  </span>
                  <span className="absolute -left-16 top-1/2 -translate-y-1/2 font-mono text-[10px] text-gold/20 group-hover:text-gold opacity-100 transition-colors">
                    {section.label.split('_')[0]}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-20 flex flex-col items-center gap-4">
               <div className="w-48 h-[1px] bg-white/5" />
               <span className="font-mono text-[7px] text-white/10 tracking-[1.2em]">SWAD_ODISHA_MAINFRAME</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
