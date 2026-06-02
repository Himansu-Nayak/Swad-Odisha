import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { SheetHeader, SheetTitle, SheetClose } from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

export const CartSidebar: React.FC = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const deliveryFee = 40;
  const gst = cartTotal * 0.05;
  const grandTotal = cartTotal + deliveryFee + gst;

  if (cart.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="w-24 h-24 bg-brand-warm rounded-full flex items-center justify-center text-brand-saffron/30">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-brand-charcoal">Your cart is empty</h3>
          <p className="text-brand-charcoal/50">Looks like you haven't added any traditional flavors yet.</p>
        </div>
        <SheetClose asChild>
          <Button className="bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-full px-8">
            Go to Menu
          </Button>
        </SheetClose>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-brand-warm/30">
      <SheetHeader className="p-6 bg-white border-b">
        <div className="flex items-center justify-between">
          <SheetTitle className="text-2xl font-bold text-brand-charcoal">Your Order</SheetTitle>
          <button onClick={clearCart} className="text-brand-charcoal/40 hover:text-red-500 text-xs font-medium uppercase tracking-widest">
            Clear All
          </button>
        </div>
      </SheetHeader>

      <ScrollArea className="flex-grow p-6">
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-20 h-20 bg-brand-saffron/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-brand-saffron p-2 text-center overflow-hidden">
                {item.name}
              </div>
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-brand-charcoal leading-tight">{item.name}</h4>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-brand-charcoal/20 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-brand-saffron font-bold">₹{item.price}</p>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-lg border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-lg border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-6 bg-white border-t space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-brand-charcoal/60">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-charcoal/60">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brand-charcoal/60">
            <span>GST (5%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-lg font-bold text-brand-charcoal">
            <span>Grand Total</span>
            <span className="text-brand-saffron">₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full h-14 bg-brand-saffron hover:bg-brand-saffron/90 text-white text-lg font-bold rounded-2xl shadow-xl shadow-brand-saffron/20 transition-transform hover:scale-[1.02]">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
