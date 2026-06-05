import React from 'react';
import { useCart } from '@/hooks/useCart';
import { ShoppingBag } from 'lucide-react';
import { SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

export const CartDrawer: React.FC = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-8 bg-black">
        <div className="w-32 h-32 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center text-[var(--gold)]/20 animate-pulse">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-black uppercase text-white tracking-tighter">Archive Empty</h3>
          <p className="text-white/30 italic font-mono text-[10px]">No artifacts selected for preservation.</p>
        </div>
        <SheetClose asChild>
          <button className="py-4 px-12 border border-[var(--gold)] text-[var(--gold)] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[var(--gold)] hover:text-black transition-all">
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
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          ))}
        </div>
      </ScrollArea>

      <CartSummary cartTotal={cartTotal} />
    </div>
  );
};
