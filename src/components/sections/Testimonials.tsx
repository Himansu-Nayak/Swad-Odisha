import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Das",
    city: "Bhubaneswar",
    text: "The Pakhala Bhata took me right back to my childhood summers at my grandmother's house. Pure bliss!",
    rating: 5
  },
  {
    name: "Rahul Mohanty",
    city: "Cuttack",
    text: "Chhena Poda is the best I've had outside of a home kitchen. The smoky caramelization is perfect.",
    rating: 5
  },
  {
    name: "Sunita Pattnaik",
    city: "Puri",
    text: "Ordered the Machha Besara for a family dinner. Everyone was impressed by the authentic mustard kick.",
    rating: 4.9
  },
  {
    name: "Bikash Sahoo",
    city: "Rourkela",
    text: "The Pitha Platter is a festival on a plate. Arisha Pitha was crispy and just the right amount of sweet.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">04 — Community</span>
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white">
              Loved by the <span className="text-brand-gold italic">Soul.</span>
            </h2>
          </div>

          <div className="grid gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative p-12 bg-white/5 border border-white/5 group hover:border-brand-saffron/20 transition-all duration-700"
              >
                <Quote className="absolute top-8 right-12 w-24 h-24 text-brand-saffron/5 group-hover:text-brand-saffron/10 transition-colors" />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(t.rating) ? 'fill-brand-gold text-brand-gold' : 'text-white/10'}`} />
                  ))}
                </div>

                <p className="text-3xl font-['Playfair_Display'] text-white/80 mb-10 leading-tight italic max-w-2xl">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-6">
                   <div className="h-px w-8 bg-brand-saffron/30" />
                   <div>
                      <h4 className="font-bold text-white tracking-widest text-xs uppercase">{t.name}</h4>
                      <p className="text-[10px] text-brand-warm/30 font-bold uppercase tracking-[0.2em]">{t.city}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
