import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { toast } from 'sonner';
import { CharacterReveal } from '../ui/CharacterReveal';

const categories = ['All', 'Veg', 'Non-Veg', 'Sweets', 'Specials'];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredItems = MENU_ITEMS.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`Added ${item.name} to cart!`, {
      style: { background: '#FF6B35', color: '#fff' }
    });
  };

  const spiceGlows: Record<string, string> = {
    'Veg': 'rgba(34, 197, 94, 0.1)',
    'Non-Veg': 'rgba(239, 68, 68, 0.1)',
    'Sweets': 'rgba(247, 201, 72, 0.1)',
    'Specials': 'rgba(255, 107, 53, 0.1)'
  };

  return (
    <section id="menu" className="py-32 bg-brand-charcoal overflow-hidden relative">
      {/* Structural Background Labels */}
      <div className="absolute top-10 left-10 text-[120px] font-black text-white/[0.02] pointer-events-none select-none">DISCOVER</div>
      <div className="absolute bottom-10 right-10 text-[120px] font-black text-white/[0.02] pointer-events-none select-none">HERITAGE</div>

      <div className="container mx-auto px-4 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">02 — The Selection</span>
            <CharacterReveal 
              text="Taste what Odisha is made of." 
              className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white leading-tight text-left"
              delay={0.2}
            />
          </motion.div>

          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold py-2 transition-all relative ${
                  activeCategory === cat 
                    ? 'text-brand-saffron' 
                    : 'text-brand-warm/30 hover:text-brand-warm/60'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="cat-underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-saffron" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-0 relative z-10">
        <motion.div 
          layout
          className="flex gap-8 overflow-x-auto pb-20 no-scrollbar px-[10%] snap-x"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-[320px] md:min-w-[420px] snap-center group bg-white/[0.03] backdrop-blur-3xl overflow-hidden border border-white/5 hover:border-brand-saffron/30 transition-all duration-700 flex flex-col h-[550px]"
              >
                <div 
                  className="relative h-72 overflow-hidden flex items-center justify-center p-12 text-center border-b border-white/5 transition-colors duration-700"
                  style={{ backgroundColor: spiceGlows[item.category] || 'transparent' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
                  <span className="text-white/20 font-['Playfair_Display'] font-black text-4xl group-hover:text-brand-saffron transition-all duration-1000 group-hover:scale-110 tracking-tighter uppercase">{item.name}</span>
                  
                  <div className="absolute top-8 left-8 flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">
                       Data: {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-12 space-y-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-3xl font-['Playfair_Display'] font-black text-white leading-none">
                      {item.name}
                    </h3>
                    <span className="text-brand-gold font-mono font-bold tracking-tighter text-2xl">₹{item.price}</span>
                  </div>
                  <p className="text-brand-warm/40 font-light leading-relaxed text-sm line-clamp-3 italic">
                    "{item.description}"
                  </p>
                  <div className="pt-8 mt-auto">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full h-16 border border-white/10 hover:border-brand-saffron bg-transparent hover:bg-brand-saffron text-white text-[10px] uppercase tracking-[0.5em] font-black transition-all duration-500 overflow-hidden relative group/btn"
                    >
                      <span className="relative z-10">Add to System</span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
