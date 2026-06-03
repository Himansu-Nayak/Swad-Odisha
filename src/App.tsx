import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HUDFrame } from './components/HUDFrame';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Menu } from './sections/Menu';
import { HowItWorks } from './sections/HowItWorks';
import { About } from './components/sections/About';
import { ChefScenes } from './components/sections/ChefScenes';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const HUDBar = () => {
  return (
    <div className="fixed top-12 left-20 right-20 z-[1000] flex justify-between items-center mix-blend-difference pointer-events-none">
       <div className="flex gap-4 pointer-events-auto">
          {[1,2,3].map(i => (
             <div key={i} className="w-10 h-10 rounded-full border-[1.5px] border-[var(--gold)] flex items-center justify-center cursor-pointer hover:bg-[var(--gold)]/10 transition-colors">
                {i === 1 && <div className="grid grid-cols-3 gap-0.5 w-3 h-3"><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /><div className="bg-[var(--gold)] w-0.5 h-0.5" /></div>}
                {i === 2 && <div className="flex gap-0.5 items-center"><div className="bg-[var(--gold)] w-0.5 h-2" /><div className="bg-[var(--gold)] w-0.5 h-4" /><div className="bg-[var(--gold)] w-0.5 h-3" /></div>}
                {i === 3 && <div className="border-l-[6px] border-l-[var(--gold)] border-y-[4px] border-y-transparent ml-1" />}
             </div>
          ))}
       </div>

       <div className="flex items-center gap-6 grow px-12">
          <div className="h-[1px] grow bg-white/20" />
          <span className="mono-label text-white text-[12px] font-bold tracking-[0.6em]">SWAD ODISHA</span>
          <div className="h-[1px] grow bg-white/20" />
       </div>

       <div className="hud-text opacity-40">System_V1.0</div>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ScrollTrigger.update);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative selection:bg-[var(--gold)]/30">
        <StarfieldCanvas />
        <HUDFrame />
        <HUDBar />
        <Toaster position="bottom-right" theme="dark" />

        <main className="relative z-10">
          <Hero />
          <Story />
          <ChefScenes />
          <Menu />
          <HowItWorks />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
