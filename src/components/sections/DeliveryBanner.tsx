import React from 'react';
import { Truck } from 'lucide-react';

export const DeliveryBanner: React.FC = () => {
  return (
    <div className="bg-brand-saffron py-4 overflow-hidden whitespace-nowrap relative">
      <div className="flex animate-marquee gap-12 items-center">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-white font-bold uppercase tracking-[0.2em] text-sm">
            <Truck className="w-5 h-5" />
            <span>Free delivery on orders above ₹399</span>
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <span>Currently serving Bhubaneswar, Cuttack & Puri</span>
            <div className="w-2 h-2 rounded-full bg-white/30" />
            <span>Order by 10 AM for same-day delivery</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};
