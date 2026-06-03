import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '../components/SectionLabel';
import { BracketButton } from '../components/BracketButton';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  { name:'Pakhala Bhata', origin:'Cuttack · Coastal', price:'₹80', emoji:'🍚' },
  { name:'Chhena Poda', origin:'Nayagarh · Central', price:'₹60', emoji:'🍮' },
  { name:'Dalma', origin:'Classic · Odisha', price:'₹90', emoji:'🥘' },
  { name:'Macha Besara', origin:'Coastal · Puri', price:'₹150', emoji:'🐟' },
  { name:'Santula', origin:'Western · Sambalpur', price:'₹70', emoji:'🥗' },
  { name:'Arisha Pitha', origin:'Festive · Statewide', price:'₹120', emoji:'🫓' },
  { name:'Saga Bhaja', origin:'Everyday · Odisha', price:'₹50', emoji:'🌿' },
  { name:'Rasabali', origin:'Kendrapara · Temple', price:'₹65', emoji:'🍯' },
];

export const MenuSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth + 80),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${track.scrollWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="menu" style={{ height: '100vh', overflow: 'hidden', position: 'relative', background: '#050301' }}>
      
      <div style={{ position: 'absolute', top: '10%', width: '100%', zIndex: 10 }}>
        <SectionLabel label="— THE MENU —" />
      </div>

      <div ref={trackRef} style={{ display: 'flex', height: '100%', alignItems: 'center', gap: '28px', padding: '0 10vw', willChange: 'transform' }}>
        {dishes.map((dish, i) => (
          <div key={i} style={{
            width: '280px',
            flexShrink: 0,
            border: '1.5px solid var(--gold-dim)',
            background: 'rgba(13,9,5,0.95)',
            padding: '36px 28px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold)';
            e.currentTarget.style.boxShadow = '0 0 32px rgba(201,169,110,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold-dim)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{ fontSize: '56px', lineHeight: 1 }}>{dish.emoji}</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '44px', lineHeight: 0.9, textTransform: 'uppercase' }}>
                {dish.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.15em' }}>
                {dish.origin}
              </p>
            </div>
            
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: 'var(--gold)', marginTop: 'auto' }}>
              {dish.price}
            </div>

            <div style={{ marginTop: '12px' }}>
              <BracketButton label="ADD" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
