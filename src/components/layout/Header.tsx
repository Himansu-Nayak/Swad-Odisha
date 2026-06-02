import React from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CartSidebar } from '../sections/CartSidebar';

export const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-saffron/10 transition-transform duration-300">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('#home')}>
          <div className="font-['Playfair_Display'] font-bold text-2xl text-brand-saffron tracking-tight">
            SWAD ODISHA
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-brand-warm/60 hover:text-brand-saffron font-medium text-xs uppercase tracking-[0.2em] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="relative p-2 text-brand-charcoal hover:text-brand-saffron transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-saffron text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-warm">
                    {cartCount}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md p-0 border-l-brand-saffron/20">
              <CartSidebar />
            </SheetContent>
          </Sheet>

          <Button 
            onClick={() => scrollTo('#menu')}
            className="hidden sm:flex bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-full px-6"
          >
            Order Now
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-brand-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-warm border-b border-brand-saffron/10 absolute top-20 left-0 right-0 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-brand-charcoal/70 hover:text-brand-saffron font-medium py-2"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo('#menu')}
            className="w-full bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-full"
          >
            Order Now
          </Button>
        </div>
      )}
    </header>
  );
};
