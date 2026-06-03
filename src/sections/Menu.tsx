import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';

gsap.registerPlugin(ScrollTrigger);

const DISHES = [
  { name: 'Pakhala Bhata', origin: 'Coastal Odisha', price: '₹120', id: '1' },
  { name: 'Chhena Poda', origin: 'Nayagarh', price: '₹150', id: '2' },
  { name: 'Dalma', origin: 'State-wide', price: '₹130', id: '3' },
  { name: 'Macha Besara', origin: 'Chilika', price: '₹280', id: '4' },
  { name: 'Santula', origin: 'Rural Odisha', price: '₹110', id: '5' },
  { name: 'Arisha Pitha', origin: 'Festivals', price: '₹90', id: '6' },
  { name: 'Saga Bhaja', origin: 'Heritage', price: '₹80', id: '7' },
  { name: 'Rasabali', origin: 'Kendrapara', price: '₹160', id: '8' },
];

export const Menu: React.FC = () => {
  const componentRef = useRef(null);
  const horizontalRef = useRef(null);

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

  return (
    <div ref={componentRef} className="overflow-hidden bg-[#050301]">
      <section className="h-screen flex flex-col justify-center">
         <div className="mb-20">
            <SectionLabel label="03 — THE MENU" />
         </div>
         
         <div ref={horizontalRef} className="flex h-1/2 w-full">
            {DISHES.map((dish, i) => (
              <div key={i} className="min-w-full h-full flex items-center justify-center px-20">
                 <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-20 items-center p-20 bg-[#0d0905] border border-[var(--gold)] relative group">
                    {/* Corner Ticks */}
                    <span className="hud-frame-tick top-[-1.5px] left-[-1.5px] border-t-[1.5px] border-l-[1.5px]" />
                    <span className="hud-frame-tick top-[-1.5px] right-[-1.5px] border-t-[1.5px] border-r-[1.5px]" />
                    <span className="hud-frame-tick bottom-[-1.5px] left-[-1.5px] border-b-[1.5px] border-l-[1.5px]" />
                    <span className="hud-frame-tick bottom-[-1.5px] right-[-1.5px] border-b-[1.5px] border-r-[1.5px]" />

                    <div className="aspect-square bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden">
                       <span className="text-[12vw] font-black text-white/5 uppercase select-none group-hover:scale-110 transition-transform duration-1000 tracking-tighter">
                         {dish.name.charAt(0)}
                       </span>
                       <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="space-y-10">
                       <div className="space-y-4">
                          <span className="mono-label text-[var(--gold)]">Module: {dish.origin}</span>
                          <h3 className="text-8xl md:text-9xl leading-[0.75] tracking-tighter">{dish.name}</h3>
                       </div>
                       <div className="flex items-center gap-12 pt-6">
                          <span className="text-4xl font-mono font-black text-white/40">{dish.price}</span>
                          <BracketButton>ADD TO CART</BracketButton>
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
