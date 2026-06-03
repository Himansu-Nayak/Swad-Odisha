import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';

gsap.registerPlugin(ScrollTrigger);

const DISHES = [
  { name: 'Pakhala Bhata', origin: 'Coastal Odisha', price: '₹120' },
  { name: 'Chhena Poda', origin: 'Nayagarh', price: '₹150' },
  { name: 'Dalma', origin: 'State-wide', price: '₹130' },
  { name: 'Macha Besara', origin: 'Chilika', price: '₹280' },
  { name: 'Santula', origin: 'Rural Odisha', price: '₹110' },
  { name: 'Arisha Pitha', origin: 'Festivals', price: '₹90' },
  { name: 'Saga Bhaja', origin: 'Heritage', price: '₹80' },
  { name: 'Rasabali', origin: 'Kendrapara', price: '₹160' },
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
          snap: 1 / (DISHES.length - 1),
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
            <SectionLabel label="03 — THE ARTIFACTS" />
         </div>
         
         <div ref={horizontalRef} className="flex h-1/2 w-full">
            {DISHES.map((dish, i) => (
              <div key={i} className="min-w-full h-full flex items-center justify-center px-20">
                 <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-20 items-center">
                    <div className="aspect-square bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                       <span className="text-[10vw] font-black text-white/5 uppercase select-none group-hover:scale-110 transition-transform duration-1000">{dish.name.split(' ')[0]}</span>
                       <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-8">
                       <div className="space-y-2">
                          <span className="mono-label text-[var(--gold)]">Origin: {dish.origin}</span>
                          <h3 className="text-7xl md:text-8xl leading-none">{dish.name}</h3>
                       </div>
                       <div className="flex items-center gap-12">
                          <span className="text-3xl font-mono font-bold text-white/40">{dish.price}</span>
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
