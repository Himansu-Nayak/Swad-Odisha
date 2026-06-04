import React from 'react';
import { useCart } from '@hooks/useCart';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { SheetHeader, SheetTitle, SheetClose } from '@components/ui/sheet';
import { ScrollArea } from '@components/ui/scroll-area';
import { Separator } from '@components/ui/separator';
import { CartItem } from '@types';

export const CartDrawer: React.FC = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const deliveryFee = 40;
  const gst = cartTotal * 0.05;
  const grandTotal = cartTotal + deliveryFee + gst;

  if (cart.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-8 bg-black">
        <div className="w-32 h-32 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center text-[var(--color-gold)]/20 animate-pulse">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black uppercase text-white tracking-tighter">Archive Empty</h3>
          <p className="text-white/30 italic font-mono text-[10px]">No artifacts selected for preservation.</p>
        </div>
        <SheetClose asChild>
          <button className="py-4 px-12 border border-[var(--color-gold)] text-[var(--color-gold)] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[var(--color-gold)] hover:text-black transition-all">
            Return_To_Vault
          </button>
        </SheetClose>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-black">
      <SheetHeader className="p-8 border-b border-white/5">
        <div className="flex items-center justify-between">
          <SheetTitle className="text-3xl font-black uppercase text-white tracking-tighter italic">Order_State</SheetTitle>
          <button onClick={clearCart} className="text-red-500/40 hover:text-red-500 transition-colors font-mono text-[10px] uppercase">
            Purge_All
          </button>
        </div>
      </SheetHeader>

      <ScrollArea className="flex-grow p-8">
        <div className="space-y-10">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="flex gap-8 group">
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
                   <p className="text-[var(--color-gold)] font-mono font-bold tracking-tighter text-lg">₹{item.price}</p>
                   <div className="flex items-center gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:border-[var(--color-gold)] hover:text-white transition-all"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-black font-mono text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 hover:border-[var(--color-gold)] hover:text-white transition-all"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-8 border-t border-white/5 space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
            <span>Subtotal</span>
            <span className="text-white">₹{cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
            <span>Preservation_Fee</span>
            <span className="text-white">₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
            <span>Tax_Index_5%</span>
            <span className="text-white">₹{gst.toFixed(2)}</span>
          </div>
          <Separator className="bg-white/5 my-4" />
          <div className="flex justify-between items-end">
            <span className="text-lg font-black uppercase text-white tracking-tighter">Grand_Total</span>
            <span className="text-3xl font-mono font-black text-[var(--color-gold)] tracking-tighter">₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full h-20 bg-[var(--color-gold)] text-black text-[12px] font-black uppercase tracking-[0.5em] shadow-[0_0_40px_rgba(201,169,110,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
          Execute_Payment
        </button>
      </div>
    </div>
  );
};
