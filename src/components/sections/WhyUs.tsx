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
    <section className="py-24 bg-brand-warm/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-brand-charcoal">
            Why Choose <span className="text-brand-saffron">Swad Odisha</span>?
          </h2>
          <p className="text-brand-charcoal/60 text-lg">
            We are more than just a delivery service; we are a bridge to the flavors you grew up with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-charcoal/5 border border-brand-charcoal/5 hover:border-brand-saffron/20 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-saffron/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{feature.title}</h3>
              <p className="text-brand-charcoal/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
