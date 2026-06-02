import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedDishes } from './components/FeaturedDishes'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Toaster } from 'sonner'
import { Button } from './components/ui/button'

function OrderNowSection() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-orange-600 text-white text-center">
      <div className="container mx-auto px-4 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Taste Tradition?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Order your favorite Odia dishes now and experience the authentic flavors 
          delivered right to your doorstep.
        </p>
        <Button 
          onClick={scrollToMenu}
          size="lg" 
          className="bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-6 rounded-full font-bold shadow-xl transition-transform hover:scale-105"
        >
          Order Now
        </Button>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <OrderNowSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}