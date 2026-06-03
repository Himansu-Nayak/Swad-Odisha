import { useEffect, useState, useCallback, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { SideNav } from './components/layout/SideNav';
import { Hero } from './components/sections/Hero';
import { ChefScenes } from './components/sections/ChefScenes';
import { Menu } from './components/sections/Menu';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/layout/Footer';
import { Toaster } from 'sonner';
import { WebGLScene } from './components/canvas/WebGLScene';
import { CinematicLoader } from './components/ui/CinematicLoader';
import { CartProvider } from './context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import { CartSidebar } from './components/sections/CartSidebar';
import { useCart } from './hooks/useCart';

gsap.registerPlugin(ScrollTrigger);

const HUDOverlay = () => {
  const { cartCount } = useCart();
  
  return (
    <div className="fixed inset-0 z-[1001] pointer-events-none p-[5vw] flex flex-col justify-between mix-blend-difference">
      {/* Top HUD */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex items-center gap-8">
           {/* Logo Image in HUD */}
           <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/src/assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png" className="w-3/4 h-3/5 object-contain mix-blend-screen opacity-60" alt="Logo HUD" />
           </div>
           
           <div className="hud-text flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-[#FF4D00] animate-pulse" />
               <span className="text-[#FF4D00] font-black">PRESERVATION_ACTIVE</span>
            </div>
            <span className="opacity-40 tracking-[0.8em]">SWAD_ODISHA_V4.0</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6">
           <Sheet>
              <SheetTrigger asChild>
                <button className="relative text-white group cursor-pointer h-12 flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 group-hover:text-[#FF4D00] transition-all">Artifact_Vault</span>
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {cartCount > 0 && (
                      <span className="absolute -top-3 -right-3 text-[9px] font-black text-[#FF4D00] bg-white/5 px-1 rounded-sm border border-[#FF4D00]/20">
                        [{cartCount.toString().padStart(2, '0')}]
                      </span>
                    )}
                  </div>
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 border-l-white/5 bg-[#050403] text-white">
                <CartSidebar />
              </SheetContent>
           </Sheet>
           <div className="hud-text text-right opacity-30 text-[8px]">
              COORD: 20.2961° N, 85.8245° E <br/>
              ARCHIVE_HASH: 0x8824_OD_INTL
           </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end pointer-events-auto">
        <div className="hud-text flex flex-col gap-1 opacity-20">
          <span>TIME_NODE: {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST</span>
          <span>STABILITY: OPTIMIZED_99.9%</span>
        </div>
        <div className="flex flex-col items-end gap-2">
           <div className="hud-text text-right flex flex-col gap-1">
            <span className="text-brand-gold font-black tracking-[0.4em]">ODISHA_CULTURAL_ARCHIVE</span>
            <span className="opacity-20 text-[6px] uppercase tracking-[1em] text-right">Living_Heritage_Protocol</span>
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
    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
  >
    <div id="film-grain" />
    <div id="visual-grid">
      {[...Array(12)].map((_, i) => <div key={i} />)}
    </div>

    <HUDOverlay />
    <SideNav />
    <Toaster position="bottom-right" theme="dark" richColors />
    
    <WebGLScene />
    
    <main className="relative z-10">
       <div className="pointer-events-none [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_div.pointer-events-auto]:pointer-events-auto">
         <Hero />
         <ChefScenes />
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
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });
    lenisRef.current = lenis;

    // 2. Synchronize GSAP with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 3. Custom Cursor Interaction
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    
    const onMouseMove = (e: MouseEvent) => {
      if (dot && ring) {
        gsap.to(dot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
        gsap.to(ring, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative bg-[#050403] min-h-screen selection:bg-[#FF4D00]/30 font-['Inter'] text-[#F5F0E8] overflow-x-hidden">
        
        <div id="cursor-dot" className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF4D00] rounded-full z-[10001] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />
        <div id="cursor-ring" className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <CinematicLoader key="loader" onComplete={handleComplete} />
          ) : (
            <MainContent />
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}
