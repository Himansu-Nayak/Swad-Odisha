import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className, delay = 0 }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        y: 100, 
        opacity: 0, 
        rotateX: -90 
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Reveal when 85% into viewport
        }
      }
    );
  }, { scope: containerRef });

  return (
    <h2 ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap overflow-hidden mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="char inline-block origin-bottom">
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
};
