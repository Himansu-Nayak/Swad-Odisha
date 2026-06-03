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

export default function App() {
  return (
    <CartProvider>
      <StarfieldCanvas />
      <HUDFrame />
      <ScrollProgress />
      
      {/* Mobile overlay */}
      <div className="md:hidden fixed inset-0 z-[100000] bg-[var(--bg)] flex items-center justify-center p-8 text-center border-[10px] border-[var(--gold)]">
         <p className="font-mono text-[var(--gold)] text-sm uppercase tracking-widest leading-relaxed">
            Please view on a desktop device for the full cinematic experience.
         </p>
      </div>

      <main style={{ position: 'relative', zIndex: 1 }} className="hidden md:block">
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
