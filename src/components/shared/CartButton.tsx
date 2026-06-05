import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { CartDrawer } from '@/sections/Cart/CartDrawer';

export const CartButton: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[var(--gold)] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group">
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-white text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[var(--gold)]">
              {cartCount}
            </span>
          )}
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-20 group-hover:opacity-40" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 border-l border-white/5 bg-black">
        <CartDrawer />
      </SheetContent>
    </Sheet>
  );
};
