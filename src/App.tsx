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

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-warm selection:bg-brand-saffron/30 selection:text-brand-saffron">
        <Toaster position="top-center" />
        <Header />
        <main>
          <Hero />
          <DeliveryBanner />
          <WhyUs />
          <Menu />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
