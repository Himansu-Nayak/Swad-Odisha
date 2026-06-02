import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { SideNav } from './components/layout/SideNav';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { ChefScenes } from './components/sections/ChefScenes';
import { Menu } from './components/sections/Menu';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/layout/Footer';
import { Toaster } from 'sonner';

export default function App() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onMouseMove = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
        
        cursorRingRef.current.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 500, fill: 'forwards' });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <div id="noise-layer" />
      <div id="grid-layer">
        {[...Array(12)].map((_, i) => <div key={i} />)}
      </div>

      <div id="cursor-dot" ref={cursorDotRef} />
      <div id="cursor-ring" ref={cursorRingRef} />

      <SideNav />
      <Toaster position="bottom-right" theme="dark" />
      
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <ChefScenes />
        <Menu />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
