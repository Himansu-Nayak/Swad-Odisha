import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '@types';
import { useCart } from '@hooks/useCart';

interface DishCardProps {
  dish: MenuItem;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6 rounded-lg overflow-hidden transition-all duration-300 hover:border-[var(--color-gold)]"
    >
      <div className="aspect-square w-full mb-6 overflow-hidden rounded-md bg-zinc-900">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between items-start mb-2">
        <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
          {dish.name}
        </h3>
        <span className="text-[var(--color-gold)] font-mono text-sm">₹{dish.price}</span>
      </div>

      <p className="text-[var(--color-text-muted)] text-sm mb-6 line-clamp-2 font-[var(--font-body)]">
        {dish.description}
      </p>

      <div className="flex items-center gap-2 mb-6">
        {dish.isVeg && (
          <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-mono tracking-wider uppercase border border-green-500/20">
            VEG
          </span>
        )}
        {dish.isSpicy && (
          <span className="px-2 py-1 bg-red-500/10 text-red-500 text-[10px] font-mono tracking-wider uppercase border border-red-500/20">
            SPICY
          </span>
        )}
      </div>

      <button 
        onClick={() => addToCart(dish)}
        className="w-full py-3 border border-[var(--color-gold)] text-[var(--color-gold)] text-[10px] font-mono tracking-[0.2em] uppercase hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300"
      >
        Add to Order
      </button>
    </motion.div>
  );
};
