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
    <section id="about" className="py-24 bg-brand-warm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight">
                Crafted with Love, <br />
                <span className="text-brand-saffron">Honoring Heritage.</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-charcoal/70 leading-relaxed">
                <p>
                  Swad Odisha was born from a simple belief: the best Odia food is made at home. 
                  We partner with home chefs across Bhubaneswar to bring you food cooked with love, 
                  not in a factory kitchen.
                </p>
                <p>
                  Every dish tells a story — of festivals, of family traditions, and of the rich 
                  culinary landscape of Odisha. From the kitchens of grandmothers to your table, 
                  we ensure zero shortcuts in authenticity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-8 bg-white rounded-3xl shadow-xl border border-brand-charcoal/5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-brand-saffron mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-charcoal/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
               {/* Background Placeholder for Story Image */}
               <div className="w-full h-full bg-gradient-to-br from-brand-gold to-brand-saffron flex items-center justify-center p-12 text-center">
                  <p className="text-3xl font-bold text-white uppercase tracking-tighter italic">Tradition in every bite.</p>
               </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-brand-saffron rounded-full blur-[80px] opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold rounded-full blur-[80px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
