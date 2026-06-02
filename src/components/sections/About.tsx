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
    <section id="about" className="py-60 bg-[#030303] overflow-hidden px-[8.333%] relative">
      {/* Structural Backdrop */}
      <div className="absolute top-20 right-[8.333%] text-[15vw] font-black text-white/[0.02] uppercase leading-none select-none">
         Values
      </div>

      <div className="grid lg:grid-cols-12 gap-24 relative z-10 w-full">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-20"
          >
            <div className="space-y-12">
               <div className="flex items-center gap-6">
                  <div className="h-[2px] w-24 bg-brand- gold" />
                  <span className="mono-meta text-brand-gold">03 — Philosophical Foundation</span>
               </div>
               
               <h2 className="text-7xl md:text-[12vw] font-black text-white uppercase leading-[0.8] tracking-tighter">
                  Love <br/> & Heritage.
               </h2>

               <div className="grid lg:grid-cols-2 gap-12 mt-20">
                  <p className="text-white/40 text-xl font-light leading-relaxed">
                     Swad Odisha was born from a simple belief: the best food is made at home. 
                     We partner with home chefs to bring you food cooked with soul.
                  </p>
                  <p className="font-['Caveat'] text-4xl text-brand-saffron/60 leading-tight">
                     "Every dish tells a story — of festivals, of family, of Odisha."
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-12 pt-20 border-t border-white/5">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-4">
                  <div className="text-5xl font-black text-white tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mono-meta text-white/20">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center">
           <div className="relative group">
              <div className="absolute inset-0 bg-brand-saffron/10 blur-[100px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-1000" />
              <div className="relative z-10 border border-white/5 aspect-[3/4] flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent opacity-60" />
                 <span className="text-white/10 font-['Playfair_Display'] font-black text-8xl rotate-90 select-none uppercase tracking-widest">Culture</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
