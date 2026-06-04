import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import { HUDFrame } from './components/HUDFrame'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { ScrollProgress } from './components/ScrollProgress'
import { HeroSection } from './sections/HeroSection'
import { StorySection } from './sections/StorySection'
import { ProblemSection } from './sections/ProblemSection'
import { MenuSection } from './sections/MenuSection'
import { ChefsSection } from './sections/ChefsSection'
import { ProcessSection } from './sections/ProcessSection'
import { StackSection } from './sections/StackSection'
import { StatsSection } from './sections/StatsSection'
import { AboutSection } from './sections/AboutSection'
import { FooterSection } from './sections/FooterSection'
import { CinematicLoader } from './components/ui/CinematicLoader'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {loading && <CinematicLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <StarfieldCanvas />
      <HUDFrame />
      <ScrollProgress />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <StorySection />
        <ProblemSection />
        <MenuSection />
        <ChefsSection />
        <ProcessSection />
        <StackSection />
        <StatsSection />
        <AboutSection />
        <FooterSection />
      </main>
    </CartProvider>
  )
}
