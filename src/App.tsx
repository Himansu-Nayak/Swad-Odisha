import { useEffect, useState, useCallback, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { SideNav } from './components/SideNav';
import { Hero } from './sections/Hero';
import { Chefs } from './sections/Chefs';
import { Menu } from './sections/Menu';
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
      {/* Top HUD */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex items-center gap-8">
           <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-3xl shadow-2xl">
              <img src={logoImg} className="w-4/5 h-3/5 object-contain mix-blend-screen opacity-80" alt="Logo HUD" />
           </div>
           
           <div className="hud-text flex flex-col gap-2 text-white">
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
           <div className="hud-text text-right opacity-30 text-[8px] leading-relaxed text-white">
              COORD: 20.2961° N, 85.8245° E <br/>
              ARCHIVE_HASH: 0x8824_OD_INTL
           </div>
        </div>
      </div>

      <div className="flex justify-between items-end pointer-events-auto">
        <div className="hud-text flex flex-col gap-1 opacity-20 text-white">
          <span>TIME_NODE: {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST</span>
          <span>STABILITY: OPTIMIZED_99.9%</span>
        </div>
        <div className="flex flex-col items-end gap-2 text-white">
           <div className="hud-text text-right flex flex-col gap-1">
            <span className="text-[#c9a96e] font-black tracking-[0.5em]">ODISHA_CULTURAL_ARCHIVE</span>
            <span className="opacity-20 text-[7px] uppercase tracking-[1.2em] text-right">Living_Heritage_Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => (
  <motion.div
    key="content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="relative"
  >
    <StarfieldCanvas />
    <HUDFrame />
    <div id="noise-layer" />
    <div id="grid-layer" className="fixed inset-0 z-0 pointer-events-none grid grid-cols-12 gap-px px-[5vw] opacity-10">
      {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/10 h-full" />)}
    </div>

    <HUDOverlay />
    <SideNav />
    <Toaster position="bottom-right" theme="dark" />
    
    <WebGLScene />
    
    <main className="relative z-10 pointer-events-none">
       <div className="pointer-events-auto">
         <Hero />
         <Chefs />
         <Menu />
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
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);
    
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);

    const onMouseMove = (e: MouseEvent) => {
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (dot && ring) {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power3.out" });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(onScroll);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen text-[#f0e6d3] font-['Inter'] overflow-x-hidden">
      <div id="cursor-dot" className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF4D00] rounded-full z-[10001] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" />
      <div id="cursor-ring" className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" />

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
