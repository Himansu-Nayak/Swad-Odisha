import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider, AuthProvider, OrderProvider } from '@/context'
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
import { AdminDashboard } from '@/sections/Admin/Dashboard'

function HomePage() {
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

function AppInner() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <AppInner />
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
