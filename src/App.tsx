import { useEffect, useState, useCallback, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { SideNav } from './components/SideNav';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Problem } from './sections/Problem';
import { Chefs } from './sections/Chefs';
import { Menu } from './sections/Menu';
import { HowItWorks } from './sections/HowItWorks';
import { Stack } from './sections/Stack';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { Footer } from './sections/Footer';
import { Toaster } from 'sonner';
import { WebGLScene } from './components/canvas/WebGLScene';
import { CinematicLoader } from './components/ui/CinematicLoader';
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import { CartSidebar } from './components/CartSidebar';
import { useCart } from './hooks/useCart';
import { HUDFrame } from './components/HUDFrame';
import { StarfieldCanvas } from './components/StarfieldCanvas';

import logoImg from './assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png';

gsap.registerPlugin(ScrollTrigger);

const HUDOverlay = () => {
  const { cartCount } = useCart();
  
  return (
    <div className="fixed inset-0 z-[1001] pointer-events-none p-[5vw] flex flex-col justify-between mix-blend-difference">
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex items-center gap-8">
           <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-3xl shadow-2xl">
              <img src={logoImg} className="w-4/5 h-3/5 object-contain mix-blend-screen opacity-80" alt="Logo HUD" />
           </div>
           
           <div className="hud-text flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-[#FF4D00] animate-pulse rounded-full" />
               <span className="text-[#FF4D00] font-black tracking-[0.2em]">PRESERVATION_ACTIVE</span>
            </div>
            <span className="opacity-30 tracking-[1em] text-[7px]">SYSTEM_ARCHIVE_NODE_V4</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6">
           <Sheet>
              <SheetTrigger asChild>
                <button className="relative text-white group cursor-pointer h-14 flex items-center gap-6 bg-black/40 px-6 border border-white/5 rounded-full hover:border-[#FF4D00]/40 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 group-hover:text-[#FF4D00] transition-all">Vault</span>
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    {cartCount > 0 && (
                      <span className="absolute -top-3 -right-3 text-[10px] font-black text-[#FF4D00] tabular-nums bg-black px-1.5 border border-[#FF4D00]/30 shadow-lg">
                        {cartCount.toString().padStart(2, '0')}
                      </span>
                    )}
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 border-l-white/5 bg-[#020202] text-white">
                <CartSidebar />
              </SheetContent>
           </Sheet>
           <div className="hud-text text-right opacity-30 text-[8px] leading-relaxed">
              COORD: 20.2961° N, 85.8245° E <br/>
              ARCHIVE_HASH: 0x8824_OD_INTL
           </div>
        </div>
      </div>

      <div className="flex justify-between items-end pointer-events-auto">
        <div className="hud-text flex flex-col gap-1 opacity-20">
          <span>TIME_NODE: {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST</span>
          <span>STABILITY: OPTIMIZED_99.9%</span>
        </div>
        <div className="flex flex-col items-end gap-2">
           <div className="hud-text text-right flex flex-col gap-1">
            <span className="text-brand-gold font-black tracking-[0.5em]">ODISHA_CULTURAL_ARCHIVE</span>
            <span className="opacity-20 text-[7px] uppercase tracking-[1.2em] text-right">Living_Heritage_Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileOverlay = () => (
  <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-10 text-center md:hidden">
     <div className="space-y-8">
        <div className="font-['Playfair_Display'] text-[#FF4D00] text-4xl font-black italic tracking-tighter">
          Cinematic Archive.
        </div>
        <p className="hud-text leading-relaxed opacity-60">
           This experience is highly optimized for desktop viewports. Please view on a larger screen to explore the Odia culinary soul.
        </p>
        <div className="h-px w-20 bg-[#FF4D00]/20 mx-auto" />
     </div>
  </div>
);

const MainContent = () => (
  <motion.div
    key="content"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    className="relative"
  >
    <div id="noise-layer" />
    <div id="grid-layer" className="fixed inset-0 z-0 pointer-events-none grid grid-cols-12 gap-px px-[5vw] opacity-10">
      {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/10 h-full" />)}
    </div>

    <div className="fixed inset-0 pointer-events-none z-[1000] bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />

    <StarfieldCanvas />
    <HUDFrame />
    <HUDOverlay />
    <SideNav />
    <Toaster position="bottom-right" theme="dark" richColors />
    
    <WebGLScene />
    
    <main className="relative z-10">
       <div className="pointer-events-none [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_div.pointer-events-auto]:pointer-events-auto">
         <Hero />
         <Story />
         <Problem />
         <Chefs />
         <Menu />
         <HowItWorks />
         <Stack />
         <Stats />
         <About />
         <Testimonials />
       </div>
    </main>
    <Footer />
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  const handleComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const onMouseMove = (e: MouseEvent) => {
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (dot && ring) {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power3.out" });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-[#000000] min-h-screen selection:bg-[#FF4D00]/30 font-['Inter'] text-[#F5F0E8] overflow-x-hidden">
      <MobileOverlay />
      
      <div id="cursor-dot" className="fixed top-0 left-0 w-2 h-2 bg-[#FF4D00] rounded-full z-[10001] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" />
      <div id="cursor-ring" className="fixed top-0 left-0 w-12 h-12 border border-white/20 rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <CinematicLoader key="loader" onComplete={handleComplete} />
        ) : (
          <MainContent />
        )}
      </AnimatePresence>
    </div>
  );
}
