import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { Menu } from './components/sections/Menu';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { DeliveryBanner } from './components/sections/DeliveryBanner';
import { Footer } from './components/layout/Footer';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'sonner';

import { ParticleCanvas } from './components/sections/ParticleCanvas';
import { ChefScenes } from './components/sections/ChefScenes';
import { CustomCursor } from './components/ui/CustomCursor';
import { CinematicLoader } from './components/ui/CinematicLoader';
import { AnimatePresence, motion } from 'framer-motion';
import { SideNav } from './components/layout/SideNav';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      console.error("Caught error:", e);
      setHasError(true);
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-[#0d0a08] text-[#FF6B35] flex items-center justify-center p-12 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter">System Recovery</h1>
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.5em]">A cinematic error occurred. Please refresh the viewport.</p>
        </div>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0d0a08] text-[#F5F0E8] font-['Inter'] selection:bg-brand-saffron/30">
        <CustomCursor />
        <SideNav />
        
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
              <ParticleCanvas />
              <Toaster position="top-center" theme="dark" />
              <Header />
              <main className="relative z-10">
                <Hero />
                <WhyUs />
                <ChefScenes />
                <Menu />
                <About />
                <Testimonials />
              </main>
              <DeliveryBanner />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CartProvider>
  );
}
