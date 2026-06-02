import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden flex items-center justify-center text-center">
      <div className="container mx-auto px-4 relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-brand-saffron mx-auto"
          />
          <h1 className="text-[12vw] md:text-[8vw] font-['Playfair_Display'] font-black text-white leading-none tracking-tight uppercase">
            SWAD ODISHA
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-3xl font-['Playfair_Display'] italic text-brand-gold tracking-wide">
              Authentic Flavors of Tradition
            </p>
            <p className="text-brand-warm/60 max-w-lg mx-auto text-sm md:text-base uppercase tracking-[0.3em] font-light">
              Home chefs • Ancient recipes • Delivered fresh
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg"
              onClick={() => scrollTo('#menu')}
              className="bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-none px-12 h-16 text-xs uppercase tracking-[0.2em] font-bold transition-all hover:tracking-[0.3em]"
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#about')}
              className="border-white/20 text-white hover:bg-white/5 rounded-none px-12 h-16 text-xs uppercase tracking-[0.2em] font-bold transition-all"
            >
              Our Story
            </Button>
          </div>

          <div className="relative group cursor-pointer" onClick={() => scrollTo('#menu')}>
             <div className="absolute -inset-8 bg-brand-saffron/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <svg className="w-48 h-48 md:w-64 md:h-64 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-saffron/30" strokeDasharray="4 4" />
                <path d="M50 2 A48 48 0 0 1 98 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-saffron" strokeDasharray="100" strokeDashoffset="100">
                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" />
                </path>
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-warm/40 text-[10px] uppercase tracking-[0.4em] font-bold">
                <span>Tradition</span>
                <span className="text-brand-saffron">Soul</span>
                <span>Taste</span>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-warm/20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-saffron to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};
