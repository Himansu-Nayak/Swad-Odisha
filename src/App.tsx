import { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
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

const HUDOverlay = () => {
  const { cartCount } = useCart();
  
  return (
    <div className="fixed inset-0 z-[1001] pointer-events-none p-[5vw] flex flex-col justify-between mix-blend-difference">
      {/* Top HUD */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="hud-text flex flex-col gap-2">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-[#FF4D00] animate-pulse" />
             <span className="text-[#FF4D00]">LIVE_PRESERVATION_ACTIVE</span>
          </div>
          <span className="opacity-40 tracking-[0.8em]">ARCHIVE_V4.0_ODISHA</span>
        </div>

        <div className="flex flex-col items-end gap-4">
           <Sheet>
              <SheetTrigger asChild>
                <button className="relative text-white group">
                  <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-[9px] font-black text-[#FF4D00]">
                      [{cartCount.toString().padStart(2, '0')}]
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 border-l-white/5 bg-[#050403] text-white">
                <CartSidebar />
              </SheetContent>
           </Sheet>
           <div className="hud-text text-right opacity-40">
              LOC: 20.2961° N, 85.8245° E <br/>
              ALT: 45M_SEA_LEVEL
           </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end pointer-events-auto">
        <div className="hud-text flex flex-col gap-1 opacity-40">
          <span>TIME: {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST</span>
          <span>STABILITY: NOMINAL_99.8%</span>
        </div>
        <div className="hud-text text-right flex flex-col gap-1">
          <span className="text-brand-gold">REF_ID: SWAD_ODISHA_MASTER</span>
          <span className="opacity-20 italic">COPYRIGHT_2025_INTL</span>
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
       <Hero />
       {/* WhyUs merged into the story flow as a silent beat */}
       <ChefScenes />
       <Menu />
       <About />
       <Testimonials />
    </main>
    <Footer />
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

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
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (dot && ring) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        
        ring.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.23, 1, 0.32, 1)' });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <CartProvider>
      <div className="relative bg-[#050403] min-h-screen selection:bg-[#FF4D00]/30 font-['Inter'] text-[#F5F0E8] overflow-x-hidden">
        
        <div id="cursor-dot" className="fixed w-1.5 h-1.5 bg-[#FF4D00] rounded-full z-[10001] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />
        <div id="cursor-ring" className="fixed w-12 h-12 border border-white/20 rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />

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
