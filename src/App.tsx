import { useState } from 'react';
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
import { AnimatePresence } from 'framer-motion';
import { SideNav } from './components/layout/SideNav';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-charcoal text-brand-warm selection:bg-brand-saffron/30 selection:text-brand-saffron font-['Inter']">
        <CustomCursor />
        <SideNav />
        <AnimatePresence>
          {isLoading && <CinematicLoader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>
        
        {!isLoading && (
          <>
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
          </>
        )}
      </div>
    </CartProvider>
  );
}
