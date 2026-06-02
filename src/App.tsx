import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { SideNav } from './components/layout/SideNav';
import { CustomCursor } from './components/ui/CustomCursor';
import { CinematicLoader } from './components/ui/CinematicLoader';
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
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div id="noise-overlay" />
      <div id="grid-overlay">
        {[...Array(12)].map((_, i) => <div key={i} />)}
      </div>

      <CustomCursor />
      <SideNav />
      <Toaster position="top-center" theme="dark" invert />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <CinematicLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : null}
      </AnimatePresence>

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
