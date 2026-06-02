import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[140vh] pt-40 overflow-hidden flex flex-col items-start px-[8.333%]">
      {/* Dynamic Light Leak */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] light-leak-saffron opacity-50" />
      
      <div className="relative z-10 w-full">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="h-px w-20 bg-brand-saffron" />
            <span className="mono-meta text-brand-saffron">Odisha Culinary Archives</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="massive-text text-white tracking-tighter">
              SWAD <br/> ODISHA
            </h1>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="lg:col-start-7 lg:col-span-5 space-y-12 text-left"
          >
            <p className="text-2xl md:text-4xl font-['Playfair_Display'] italic text-brand-gold leading-tight">
              A cinematic journey through the authentic flavors of tradition.
            </p>
            
            <div className="flex flex-col gap-4 max-w-sm">
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Handcrafted by keepers of tradition, delivered to the modern doorstep. Experience the soul of Odia heritage.
              </p>
              <div className="h-px w-full bg-white/10" />
              <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                 <span>Lat: 20.2961° N</span>
                 <span>Lon: 85.8245° E</span>
              </div>
            </div>

            <div className="flex gap-12 pt-8">
              <button 
                onClick={() => scrollTo('#menu')}
                className="group relative overflow-hidden h-16 w-16 rounded-full border border-white/20 flex items-center justify-center transition-all hover:border-brand-saffron hover:scale-110"
              >
                <div className="absolute inset-0 bg-brand-saffron translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-white">Menu</span>
              </button>
              <button 
                onClick={() => scrollTo('#about')}
                className="group flex flex-col justify-center gap-2"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] group-hover:text-brand-saffron transition-colors">Our Story</span>
                <div className="h-[1px] w-0 bg-brand-saffron group-hover:w-full transition-all duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Monogram Parallax */}
      <motion.div 
        style={{ y: 100 }}
        className="absolute bottom-0 right-0 pointer-events-none opacity-[0.02]"
      >
        <span className="text-[40vw] font-black leading-none select-none">SO</span>
      </motion.div>
    </section>
  );
};
