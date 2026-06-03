import React from 'react';
import { motion } from 'framer-motion';
import { SplitText } from '../ui/SplitText';
import heroAsset from '../../assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[160vh] flex flex-col items-start px-[5vw] pt-[20vh] overflow-hidden">
      {/* Structural Saffron Light Burst */}
      <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-[#FF4D00]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-start">
        <div className="flex items-center gap-10 mb-20 ml-2">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 120 }}
             transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
             className="h-px bg-[#FF4D00]" 
           />
           <span className="hud-text text-[#FF4D00] tracking-[1em]">Archive_Entrance_V1</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <SplitText 
            text="SWAD ODISHA" 
            className="text-poster text-white whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            delay={0.5}
          />
          <div className="absolute top-[20%] right-[-5%] text-white/5 font-['Playfair_Display'] font-black text-[12vw] select-none pointer-events-none italic group-hover:text-[#FF4D00]/10 transition-colors duration-1000">SO</div>
        </motion.div>

        <div className="grid grid-cols-12 gap-10 w-full mt-[10vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="col-span-12 lg:col-start-7 lg:col-span-6 space-y-20"
          >
             <h2 className="text-4xl md:text-[6vw] font-['Playfair_Display'] italic text-white/90 leading-[0.9] tracking-tighter">
                Honoring the <br/> <span className="text-[#FF4D00]">sacred recipes</span> <br/> of the east.
             </h2>
             
             <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                   <p className="text-white/20 text-xl font-light leading-snug">
                      Preserving the ephemeral soul of Odisha’s culinary heritage before it is erased by modern industry.
                   </p>
                   <button 
                     onClick={() => scrollTo('#menu')}
                     className="group h-20 w-full border border-white/10 hover:border-[#FF4D00] flex items-center justify-between px-8 transition-all overflow-hidden relative bg-black/40 backdrop-blur-xl"
                   >
                      <div className="absolute inset-0 bg-[#FF4D00] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                      <span className="relative z-10 hud-text group-hover:text-white transition-colors">Start_Preservation</span>
                      <span className="relative z-10 text-[#FF4D00] group-hover:text-white transition-colors">→</span>
                   </button>
                </div>
                <div className="flex flex-col justify-end gap-2 border-l border-white/5 pl-8">
                   <span className="hud-text text-brand-gold">Data_Set: 001_A</span>
                   <span className="hud-text text-white/10 italic">Odia_Heritage_Protocol_Active</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Cinematic Food Image (Projection) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute top-1/2 right-[-5vw] -translate-y-1/2 w-[40vw] aspect-square pointer-events-none"
      >
         <div className="relative w-full h-full border border-white/[0.03] bg-white/[0.01] backdrop-blur-3xl overflow-hidden rounded-full p-20 flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-2000">
            <img 
              src={heroAsset} 
              alt="Premium Odia Cuisine"
              className="w-full h-full object-contain mix-blend-screen animate-pulse"
            />
         </div>
      </motion.div>
    </section>
  );
};
