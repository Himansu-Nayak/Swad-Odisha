import React from 'react';
import { motion } from 'framer-motion';
import { Users, ScrollText, Timer } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-brand-saffron" />,
    title: "Home Chef Network",
    description: "50+ trained home chefs across Bhubaneswar delivering authentic home-cooked meals."
  },
  {
    icon: <ScrollText className="w-8 h-8 text-brand-saffron" />,
    title: "Authentic Recipes",
    description: "Recipes sourced from Odia grandmothers, with zero shortcuts and 100% tradition."
  },
  {
    icon: <Timer className="w-8 h-8 text-brand-saffron" />,
    title: "Fresh Daily",
    description: "Cooked fresh each morning, no reheating, and delivered to your doorstep by noon."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-60 relative overflow-hidden bg-[#030303] px-[8.333%]">
      {/* Cinematic Background Label */}
      <div className="absolute top-0 right-[-10%] text-[25vw] font-black text-white/[0.01] pointer-events-none select-none uppercase tracking-tighter">
         Legacy
      </div>

      <div className="relative z-10 w-full grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6 space-y-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
               <div className="w-2 h-2 bg-brand-saffron rotate-45" />
               <span className="mono-meta text-brand-saffron">Origins & Ethics</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] uppercase">
              The Real Taste <br />
              <span className="text-brand-gold italic">Is Vanishing.</span>
            </h2>
            <p className="text-white/30 text-xl font-light leading-relaxed max-w-lg">
              We found the keepers of tradition — mothers and grandmothers who still grind spices by hand and cook over slow flames.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-end space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group border-t border-white/10 pt-12 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                 <span className="mono-meta text-white/20">Module 0{index + 1}</span>
                 <div className="text-brand-saffron opacity-0 group-hover:opacity-100 transition-opacity">
                    {feature.icon}
                 </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-white/20 text-sm leading-relaxed max-w-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
