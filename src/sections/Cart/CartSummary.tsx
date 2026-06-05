import React from 'react';
import { Separator } from '@/components/ui/separator';

interface CartSummaryProps {
  cartTotal: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ cartTotal }) => {
  const deliveryFee = cartTotal >= 499 ? 0 : 49;
  const packagingFee = 10;
  const gst = cartTotal * 0.05;
  const grandTotal = cartTotal + deliveryFee + packagingFee + gst;

  return (
    <div className="p-8 border-t border-white/5 space-y-8">
      <div className="space-y-3">
        <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
          <span>Subtotal</span>
          <span className="text-white">₹{cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
          <span>Delivery_Fee</span>
          <span className="text-white">{deliveryFee === 0 ? <span className="text-green-400">FREE</span> : `₹${deliveryFee.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
          <span>Packaging_Index</span>
          <span className="text-white">₹{packagingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase">
          <span>Tax_Index_5%</span>
          <span className="text-white">₹{gst.toFixed(2)}</span>
        </div>
        <Separator className="bg-white/5 my-4" />
        <div className="flex justify-between items-end">
          <span className="text-lg font-black uppercase text-white tracking-tighter">Grand_Total</span>
          <span className="text-3xl font-mono font-black text-[var(--gold)] tracking-tighter">₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
      <button 
        onClick={() => (window as any).setCheckoutOpen(true)}
        className="w-full h-20 bg-[var(--gold)] text-black text-[12px] font-black uppercase tracking-[0.5em] shadow-[0_0_40px_rgba(201,169,110,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
      >
        Initialize_Checkout
      </button>
    </div>
  );
};
