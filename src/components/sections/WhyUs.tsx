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
    <section className="py-32 relative overflow-hidden bg-brand-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-4"
            >
              <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">01 — Origins</span>
              <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white leading-tight">
                Real Odia food has <br />
                <span className="text-brand-gold italic">almost disappeared.</span>
              </h2>
              <p className="text-brand-warm/60 text-lg leading-relaxed max-w-md font-light">
                Hotel menus serve watered-down versions. Restaurants chase trends. The original recipes — passed down from grandmothers — were slowly vanishing. We refused to let that happen.
              </p>
            </motion.div>
          </div>

          <div className="md:w-1/2 grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm p-8 border border-white/5 hover:border-brand-saffron/30 transition-all group flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-none flex items-center justify-center bg-brand-saffron/10 text-brand-saffron group-hover:scale-110 transition-transform flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-wide">{feature.title}</h3>
                  <p className="text-brand-warm/40 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
