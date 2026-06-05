import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { useLenis } from '@/hooks/useLenis'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Menu } from '@/sections/Menu'
import { Districts } from '@/sections/Districts'
import { Chefs } from '@/sections/Chefs'
import { HowItWorks } from '@/sections/HowItWorks'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'
import { CartButton } from '@/components/shared/CartButton'
import { HUDFrame } from '@/components/shared/HUDFrame'
import { Footer } from '@/components/layout/Footer'
import { CheckoutModal } from '@/sections/Checkout/CheckoutModal'

import { CulturalBackground } from '@/components/shared/CulturalBackground'
import { CustomCursor } from '@/components/shared/CustomCursor'

function AppInner() {
  useLenis()
  return (
    <main className="relative">
      <CustomCursor />
      <CulturalBackground />
      <HUDFrame />
      
      <Hero />
      <About />
      <Menu />
      <Districts />
      <Chefs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
      
      <CartButton />
      <CheckoutModal />
    </main>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </AuthProvider>
  )
}
