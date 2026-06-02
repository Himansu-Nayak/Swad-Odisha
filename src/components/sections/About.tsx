import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Home Chefs", value: 50, suffix: "+" },
  { label: "Orders Delivered", value: 2000, suffix: "+" },
  { label: "Districts Served", value: 8, suffix: "" }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value.toLocaleString()}{suffix}
    </motion.span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-charcoal overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">03 — The Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white leading-tight">
                Crafted with Love, <br />
                <span className="text-brand-gold italic">Honoring Heritage.</span>
              </h2>
              <div className="space-y-8 text-lg text-brand-warm/60 leading-relaxed font-light max-w-lg">
                <p>
                  Swad Odisha was born from a simple belief: the best Odia food is made at home. 
                  We partner with home chefs across Bhubaneswar to bring you food cooked with love, 
                  not in a factory kitchen.
                </p>
                <p className="font-['Caveat'] text-3xl text-brand-saffron/80">
                  "Every dish tells a story — of festivals, of family, of Odisha."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 p-10 bg-white/5 border border-white/5 rounded-none">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="text-4xl font-bold text-brand-gold tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-warm/30">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="aspect-[4/5] overflow-hidden relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000">
               <div className="absolute inset-0 bg-brand-saffron/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000" />
               <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-saffron/20 flex items-center justify-center p-12 text-center border border-white/10">
                  <p className="text-3xl font-['Playfair_Display'] font-bold text-white uppercase tracking-tighter italic opacity-40">Tradition in every bite.</p>
               </div>
            </div>
            
            {/* Parallax floating elements */}
            <motion.div 
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-48 h-48 bg-brand-saffron/10 blur-[60px] rounded-full"
            />
            <motion.div 
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gold/10 blur-[60px] rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
