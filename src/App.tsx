import { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
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
import { WebGLScene } from './components/canvas/WebGLScene';
import { CinematicLoader } from './components/ui/CinematicLoader';
import { CartProvider } from './context/CartContext';

export default function App() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7,
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
      <div className="relative bg-[#050403] min-h-screen selection:bg-[#FF4D00]/30 font-['Inter'] text-[#F5F0E8]">
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <CinematicLoader key="loader" onComplete={handleComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div id="film-grain" />
              <div id="visual-grid">
                {[...Array(12)].map((_, i) => <div key={i} />)}
              </div>

              {/* Persistent HUD (Heads-Up Display) Parity with 21hrs.space */}
              <div className="fixed inset-0 z-[1001] pointer-events-none p-[5vw] flex flex-col justify-between blend-diff">
                 <div className="flex justify-between items-start">
                    <div className="hud-text flex flex-col gap-1">
                       <span>Status: preservation_active</span>
                       <span>Mode: cultural_archive_v4.0</span>
                    </div>
                    <div className="hud-text text-right flex flex-col gap-1">
                       <span>Loc: 20.2961° N, 85.8245° E</span>
                       <span>Bhubaneswar, Odisha</span>
                    </div>
                 </div>
                 <div className="flex justify-between items-end">
                    <div className="hud-text flex flex-col gap-1">
                       <span>Time: {new Date().toLocaleTimeString('en-IN', { hour12: false })} IST</span>
                       <span>Cycle: tradition_restored</span>
                    </div>
                    <div className="hud-text text-right flex flex-col gap-1">
                       <span>Ref: swad_odisha_original</span>
                       <span>Checksum: 8824_Verified</span>
                    </div>
                 </div>
              </div>

              <div id="cursor-dot" ref={cursorDotRef} className="fixed w-1.5 h-1.5 bg-[#FF4D00] rounded-full z-[10001] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />
              <div id="cursor-ring" ref={cursorRingRef} className="fixed w-12 h-12 border border-white/20 rounded-full z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 blend-diff" />

              <SideNav />
              <Toaster position="bottom-right" theme="dark" />
              
              <WebGLScene />
              
              <Header />
              <main className="relative z-10 pointer-events-none">
                 <div className="pointer-events-auto">
                   <Hero />
                   <WhyUs />
                   <ChefScenes />
                   <Menu />
                   <About />
                   <Testimonials />
                 </div>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}
