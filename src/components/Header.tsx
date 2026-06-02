import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import swadodishaLogo from '@/assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { CartSheet } from './CartSheet'
import { AuthModal } from './AuthModal'
import { TrackOrderModal } from './TrackOrderModal'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { user, logout, isAuthenticated } = useAuth()

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
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src={swadodishaLogo}
              alt="Swadodisha Logo"
              className="h-12 w-auto"
            />
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
            <TrackOrderModal>
              <button className="text-gray-700 hover:text-orange-500 transition-colors">
                Track Order
              </button>
            </TrackOrderModal>
            
            <div className="flex items-center space-x-4 border-l pl-8 ml-4 border-gray-200">
              <CartSheet>
                <button className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </CartSheet>

              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold text-gray-800">{user?.name}</span>
                    <button onClick={logout} className="text-[10px] text-red-500 hover:underline">Logout</button>
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
              ) : (
                <AuthModal>
                  <Button variant="ghost" className="text-gray-700">Login</Button>
                </AuthModal>
              )}
              
              <Button onClick={() => scrollToSection('menu')} className="bg-orange-500 hover:bg-orange-600">
                Order Now
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <CartSheet>
              <button className="relative p-2 text-gray-700">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </CartSheet>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <TrackOrderModal>
                <button className="text-left text-gray-700 hover:text-orange-500 transition-colors">
                  Track Order
                </button>
              </TrackOrderModal>
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                {isAuthenticated ? (
                  <div className="flex items-center justify-between px-2">
                    <span className="font-medium">{user?.name}</span>
                    <button onClick={logout} className="text-red-500 text-sm">Logout</button>
                  </div>
                ) : (
                  <AuthModal>
                    <Button variant="outline" className="w-full">Login</Button>
                  </AuthModal>
                )}
                <Button onClick={() => scrollToSection('menu')} className="bg-orange-500 hover:bg-orange-600 w-full">
                  Order Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
