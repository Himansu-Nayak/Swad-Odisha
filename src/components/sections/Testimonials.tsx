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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-brand-charcoal">
            Loved by Our <span className="text-brand-saffron">Community</span>
          </h2>
          <p className="text-brand-charcoal/60">
            Don't just take our word for it — hear from those who've experienced the magic of Swad Odisha.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-brand-warm/50 p-8 rounded-[2.5rem] snap-center border border-brand-charcoal/5 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-saffron/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(t.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-charcoal/20'}`} />
                ))}
              </div>
              <p className="text-lg text-brand-charcoal/80 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-brand-charcoal">{t.name}</h4>
                <p className="text-sm text-brand-charcoal/40 font-medium uppercase tracking-widest">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
