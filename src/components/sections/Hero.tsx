import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-brand-warm flex items-center">
      {/* Pattachitra-inspired background border decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 right-0 h-16 bg-[radial-gradient(circle_at_center,_var(--brand-saffron)_1px,_transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[radial-gradient(circle_at_center,_var(--brand-saffron)_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-brand-saffron/10 text-brand-saffron font-semibold text-sm tracking-wide uppercase"
            >
              Odisha's Premium Food Startup
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-charcoal leading-tight">
              The Taste of Odisha, <br />
              <span className="text-brand-saffron">Delivered to Your Door.</span>
            </h1>
            <p className="text-xl text-brand-charcoal/70 max-w-lg leading-relaxed">
              From Pakhala Bhata to Chhena Poda — handcrafted by home chefs, delivered fresh. Experience the authentic soul of Odisha.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo('#menu')}
              className="bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-brand-saffron/20 transition-transform hover:scale-105"
            >
              Explore Menu <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollTo('#about')}
              className="border-brand-saffron text-brand-saffron hover:bg-brand-saffron/5 rounded-full px-8 h-14 text-lg font-bold transition-transform hover:scale-105"
            >
              Our Story
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-brand-charcoal/5">
            <div>
              <p className="text-2xl font-bold text-brand-charcoal">50+</p>
              <p className="text-sm text-brand-charcoal/50">Home Chefs</p>
            </div>
            <div className="w-px h-10 bg-brand-charcoal/10" />
            <div>
              <p className="text-2xl font-bold text-brand-charcoal">2k+</p>
              <p className="text-sm text-brand-charcoal/50">Happy Foodies</p>
            </div>
            <div className="w-px h-10 bg-brand-charcoal/10" />
            <div>
              <p className="text-2xl font-bold text-brand-charcoal">4.9/5</p>
              <p className="text-sm text-brand-charcoal/50">Avg Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-saffron to-brand-gold rounded-full blur-3xl opacity-20 animate-pulse" />
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02} transitionSpeed={2000}>
            <div className="relative z-10 p-4">
              <div className="aspect-square rounded-full bg-gradient-to-br from-brand-saffron to-brand-gold p-2 shadow-2xl flex items-center justify-center overflow-hidden">
                 <div className="w-full h-full rounded-full border-8 border-brand-warm/30 flex items-center justify-center bg-brand-warm/10 backdrop-blur-sm">
                    {/* Placeholder for Hero Image */}
                    <div className="text-center text-brand-warm">
                      <p className="text-4xl font-bold opacity-80 uppercase tracking-widest">Premium</p>
                      <p className="text-2xl font-medium opacity-60">Odia Cuisine</p>
                    </div>
                 </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">🥬</div>
                <div>
                  <p className="font-bold text-sm">Pakhala Bhata</p>
                  <p className="text-[10px] text-green-600 font-bold uppercase">100% Authentic</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-brand-saffron/10 rounded-lg flex items-center justify-center text-xl">🔥</div>
                <div>
                  <p className="font-bold text-sm">Chhena Poda</p>
                  <p className="text-[10px] text-brand-saffron font-bold uppercase">Must Try!</p>
                </div>
              </motion.div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Background Decorative Motif */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] -mr-48 -mb-48" />
    </section>
  );
};
