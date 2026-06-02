import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CartSidebar } from '../sections/CartSidebar';

import { motion, useScroll } from 'framer-motion';

export const Header: React.FC = () => {
  const { cartCount } = useCart();
  const { scrollYProgress } = useScroll();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-brand-saffron/20 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <div className="container mx-auto px-4 h-32 flex items-start justify-between py-10 pointer-events-auto">
        {/* Top Left: Logo */}
        <div className="flex flex-col gap-1 group cursor-pointer" onClick={() => scrollTo('#home')}>
          <div className="font-['Playfair_Display'] font-black text-xl text-white tracking-tighter leading-none">
            SWAD <br/> ODISHA
          </div>
          <span className="text-[8px] text-brand-saffron font-bold uppercase tracking-[0.4em]">Est. 2024</span>
        </div>

        {/* Top Right: Minimal Nav */}
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex items-center gap-10 border-r border-white/10 pr-12 h-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-brand-warm/30 hover:text-brand-saffron font-bold text-[9px] uppercase tracking-[0.3em] transition-all hover:tracking-[0.4em]"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Sheet>
              <SheetTrigger asChild>
                <button className="relative text-white/40 hover:text-brand-saffron transition-colors group">
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-[9px] font-black text-brand-saffron">
                      [{cartCount}]
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 border-l-brand-saffron/20 bg-brand-charcoal">
                <CartSidebar />
              </SheetContent>
            </Sheet>

            <div className="hidden sm:flex flex-col items-end">
               <span className="text-[8px] text-brand-warm/20 uppercase tracking-widest font-bold">Local Time</span>
               <span className="text-[10px] text-white font-mono font-bold tracking-tighter">
                  {new Date().toLocaleTimeString('en-IN', { hour12: false, hour: '2-digit', minute: '2-digit' })} IST
               </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />
      <div className="fixed right-8 top-0 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />
    </header>
  );
};
