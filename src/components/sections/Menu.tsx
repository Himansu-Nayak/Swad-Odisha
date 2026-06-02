import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { Button } from '../ui/button';
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
      style: { background: '#E8593C', color: '#fff' }
    });
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-brand-charcoal">
              Explore Our <span className="text-brand-saffron">Traditional Menu</span>
            </h2>
            <p className="text-brand-charcoal/60 text-lg max-w-xl">
              Handpicked delicacies from across the heart of Odisha, prepared fresh for you.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-saffron text-white shadow-lg shadow-brand-saffron/20' 
                    : 'bg-brand-warm text-brand-charcoal hover:bg-brand-gold/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-brand-charcoal/5 shadow-lg hover:shadow-2xl transition-all flex flex-col h-full"
              >
                {/* Image Placeholder with Saffron Gradient */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-saffron to-brand-gold flex items-center justify-center p-6 text-center">
                  <span className="text-white font-bold text-xl drop-shadow-md">{item.name}</span>
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-0" 
                      onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-[10px] font-bold text-brand-charcoal uppercase tracking-wider">
                      {item.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-saffron transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-brand-saffron font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-4 mt-auto">
                    <Button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-brand-warm hover:bg-brand-saffron hover:text-white text-brand-saffron border border-brand-saffron/20 group-hover:border-brand-saffron transition-all rounded-xl py-6"
                    >
                      Add to Cart
                    </Button>
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
