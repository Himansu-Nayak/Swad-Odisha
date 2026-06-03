import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';
import { useCart } from '../hooks/useCart';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const DISHES = [
  { id: '1', name: 'Pakhala Bhata', origin: 'Coastal Odisha', price: '₹120', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=80' },
  { id: '2', name: 'Chhena Poda', origin: 'Nayagarh', price: '₹150', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80' },
  { id: '3', name: 'Dalma', origin: 'State-wide', price: '₹130', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80' },
  { id: '4', name: 'Macha Besara', origin: 'Chilika', price: '₹280', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1200&q=80' },
  { id: '5', name: 'Santula', origin: 'Rural Odisha', price: '₹110', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80' },
  { id: '6', name: 'Rasabali', origin: 'Kendrapara', price: '₹160', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80' },
];

export const Menu: React.FC = () => {
  const componentRef = useRef(null);
  const horizontalRef = useRef(null);
  const { addToCart } = useCart();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(horizontalRef.current, {
        xPercent: -100 * (DISHES.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (horizontalRef.current as any).offsetWidth
        }
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  const handleAdd = (dish: any) => {
    addToCart(dish);
    toast.success(`ARTIFACT: ${dish.name.toUpperCase()} SECURED`);
  };

  return (
    <div ref={componentRef} className="overflow-hidden bg-transparent">
      <section className="h-screen flex flex-col justify-center relative">
         <div className="absolute top-[10%] left-0 w-full z-20">
            <SectionLabel label="03 — THE ARTIFACTS" />
         </div>
         
         <div ref={horizontalRef} className="flex h-full w-full">
            {DISHES.map((dish, i) => (
              <div key={i} className="min-w-full h-full flex items-center justify-center px-20 relative">
                 {/* Background Index */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] font-black text-white/[0.02] italic select-none pointer-events-none">
                    0{i + 1}
                 </div>

                 <div className="w-full max-w-[1400px] grid lg:grid-cols-12 gap-20 items-center relative z-10">
                    <div className="lg:col-span-6 aspect-[16/10] bg-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                       <img 
                         src={dish.image} 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100" 
                         alt={dish.name} 
                       />
                       <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       
                       <div className="absolute top-6 left-6 mono-label text-white/40">Archive_Visual_0{dish.id}</div>
                    </div>

                    <div className="lg:col-span-6 space-y-12">
                       <div className="space-y-4">
                          <div className="flex items-center gap-4">
                             <div className="w-1 h-1 bg-[var(--gold)] rotate-45" />
                             <span className="mono-label text-[var(--gold)]">Origin: {dish.origin}</span>
                          </div>
                          <h3 className="text-[8vw] leading-[0.8] font-black tracking-tighter">{dish.name}</h3>
                       </div>
                       
                       <div className="flex items-center gap-12 pt-8">
                          <div className="flex flex-col">
                             <span className="mono-label text-white/20">Unit_Value</span>
                             <span className="text-4xl font-mono font-black text-white/60">{dish.price}</span>
                          </div>
                          <BracketButton onClick={() => handleAdd(dish)}>ADD_TO_VAULT</BracketButton>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};
