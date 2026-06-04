import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from '@context/CartContext';
import { AuthProvider } from '@context/AuthContext';
import { Navbar } from '@components/layout/Navbar';
import { Footer } from '@components/layout/Footer';
import { Hero } from '@sections/01_Hero/Hero';
import { About } from '@sections/02_About/About';
import { Menu } from '@sections/03_Menu/Menu';
import { Districts } from '@sections/04_Districts/Districts';
import { Chefs } from '@sections/05_Chefs/Chefs';
import { HowItWorks } from '@sections/06_HowItWorks/HowItWorks';
import { Testimonials } from '@sections/07_Testimonials/Testimonials';
import { Contact } from '@sections/09_Contact/Contact';
import { CartButton } from '@components/shared/CartButton';
import { LoadingScreen } from '@components/shared/LoadingScreen';
import { HUDFrame } from '@components/shared/HUDFrame';
import { ScrollProgress } from '@components/shared/ScrollProgress';
import { useLenis } from '@hooks/useLenis';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <AuthProvider>
      <CartProvider>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <HUDFrame />
        <ScrollProgress />
        <Navbar />
        
        <main className="relative z-[1]">
          <Hero />
          <About />
          <Testimonials />
          <Menu />
          <Districts />
          <Chefs />
          <HowItWorks />
          <Contact />
        </main>
        
        <Footer />
        <CartButton />
      </CartProvider>
    </AuthProvider>
  );
}
