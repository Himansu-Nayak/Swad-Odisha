import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex gap-8 group">
      <div className="w-24 h-24 bg-white/[0.03] border border-white/5 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={item.name} />
      </div>
      <div className="flex-grow space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-black uppercase text-white leading-none">{item.name}</h4>
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-white/10 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between">
           <p className="text-[var(--gold)] font-mono font-bold tracking-tighter text-lg">₹{item.price}</p>
           <div className="flex items-center gap-4">
              <button 
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:border-[var(--gold)] hover:text-white transition-all"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="font-black font-mono text-sm w-4 text-center">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, 1)}
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:border-[var(--gold)] hover:text-white transition-all"
              >
                <Plus className="w-3 h-3" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
