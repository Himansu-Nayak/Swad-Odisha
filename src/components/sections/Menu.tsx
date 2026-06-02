import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { toast } from 'sonner';

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

  return (
    <section id="menu" className="py-32 bg-brand-charcoal overflow-hidden">
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-brand-saffron text-sm font-bold uppercase tracking-[0.4em]">02 — The Menu</span>
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-white leading-tight">
              Taste what <br />
              <span className="text-brand-gold italic">Odisha is made of.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] font-bold py-2 transition-all relative ${
                  activeCategory === cat 
                    ? 'text-brand-saffron' 
                    : 'text-brand-warm/30 hover:text-brand-warm/60'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="cat-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-brand-saffron" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-0">
        <motion.div 
          layout
          className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-[10%] snap-x"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-[320px] md:min-w-[400px] snap-center group bg-white/5 backdrop-blur-md overflow-hidden border border-white/5 hover:border-brand-saffron/20 transition-all flex flex-col h-[500px]"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-charcoal to-brand-charcoal/50 flex items-center justify-center p-12 text-center border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="text-white/40 font-['Playfair_Display'] font-bold text-3xl group-hover:text-brand-saffron transition-colors duration-700">{item.name}</span>
                  
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                      {item.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                </div>

                <div className="p-10 space-y-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-brand-gold font-bold font-mono tracking-tighter text-xl">₹{item.price}</span>
                  </div>
                  <p className="text-brand-warm/40 font-light leading-relaxed text-sm line-clamp-3">
                    {item.description}
                  </p>
                  <div className="pt-6 mt-auto">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full h-14 border border-brand-saffron/20 hover:border-brand-saffron bg-brand-saffron/5 hover:bg-brand-saffron text-brand-saffron hover:text-white text-xs uppercase tracking-[0.3em] font-bold transition-all duration-300"
                    >
                      Add to Cart
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
