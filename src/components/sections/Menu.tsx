import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { toast } from 'sonner';
import { CharacterReveal } from '../ui/CharacterReveal';
import { Plus } from 'lucide-react';

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
      style: { background: '#FF6B35', color: '#fff', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }
    });
  };

  return (
    <section id="menu" className="py-40 bg-[#030303] overflow-hidden relative">
      <div className="container mx-auto px-[8.333%] mb-32 relative z-10">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-brand-gold">
               <span className="mono-meta">Active Archive</span>
               <div className="h-[1px] w-12 bg-brand-gold/30" />
               <span className="mono-meta">02 — The Selection</span>
            </div>
            <CharacterReveal 
              text="Taste what Odisha is made of." 
              className="text-6xl md:text-[10vw] font-black text-white leading-none text-left uppercase tracking-tighter"
              delay={0.2}
            />
          </motion.div>

          <div className="flex flex-wrap gap-12 border-t border-white/5 pt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`mono-meta py-4 transition-all relative ${
                  activeCategory === cat 
                    ? 'text-brand-saffron' 
                    : 'text-white/20 hover:text-white/60'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="cat-line" className="absolute top-0 left-0 right-0 h-[2px] bg-brand-saffron" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[8.333%] relative z-10">
        <motion.div 
          layout
          className="flex gap-20 overflow-x-auto pb-40 no-scrollbar snap-x"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="min-w-[45vw] snap-center group flex flex-col gap-12 relative"
              >
                {/* Floating Dish Projection */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-brand-saffron/20 transition-colors duration-700">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,107,53,0.03)_0%,_transparent_70%)]" />
                   
                   <span className="text-white/5 font-black text-[12vw] uppercase tracking-tighter select-none group-hover:text-brand-saffron/10 transition-colors duration-1000">
                      {item.name.split(' ')[0]}
                   </span>

                   <div className="absolute top-12 left-12 flex flex-col gap-2">
                      <span className="mono-meta text-brand-gold">Metadata_ID_{item.id}</span>
                      <div className="flex items-center gap-2">
                         <div className={`w-1 h-1 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                         <span className="mono-meta text-white/20">{item.category}</span>
                      </div>
                   </div>

                   <button 
                     onClick={() => handleAddToCart(item)}
                     className="absolute bottom-12 right-12 h-14 w-14 rounded-full border border-white/10 flex items-center justify-center bg-brand-charcoal/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:border-brand-saffron group/btn"
                   >
                      <Plus className="w-5 h-5 text-white/40 group-hover/btn:text-brand-saffron transition-colors" />
                   </button>
                </div>

                <div className="grid grid-cols-12 gap-8">
                   <div className="col-span-8 space-y-6">
                      <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
                         {item.name}
                      </h3>
                      <p className="text-white/30 text-lg font-light leading-tight max-w-md">
                         {item.description}
                      </p>
                   </div>
                   <div className="col-span-4 flex flex-col items-end justify-start">
                      <span className="text-3xl font-mono font-black text-brand-gold tracking-tighter">₹{item.price}</span>
                      <span className="mono-meta mt-2 text-white/10">Unit Price</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background Section Number */}
      <div className="absolute bottom-[-5%] left-[-5%] text-[30vw] font-black text-white/[0.01] pointer-events-none select-none leading-none">
         02
      </div>
    </section>
  );
};
