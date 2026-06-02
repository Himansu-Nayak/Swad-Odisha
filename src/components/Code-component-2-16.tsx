import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Swadodisha</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact
            </button>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Order Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </button>
              <Button className="bg-orange-500 hover:bg-orange-600 w-fit">
                Order Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}