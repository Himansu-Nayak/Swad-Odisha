import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-charcoal text-brand-warm pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-saffron rounded-lg flex items-center justify-center text-brand-warm font-bold text-xl">
                SO
              </div>
              <span className="font-bold text-2xl tracking-tighter">Swad Odisha</span>
            </div>
            <p className="text-brand-warm/60 leading-relaxed">
              Authentic Flavors of Tradition. Bringing the heritage of Odia cuisine from home kitchens to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-warm/5 flex items-center justify-center hover:bg-brand-saffron transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-warm/5 flex items-center justify-center hover:bg-brand-saffron transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-warm/5 flex items-center justify-center hover:bg-brand-saffron transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-warm/60 font-medium">
              <li><button onClick={() => scrollTo('#home')} className="hover:text-brand-saffron transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo('#menu')} className="hover:text-brand-saffron transition-colors">Menu</button></li>
              <li><button onClick={() => scrollTo('#about')} className="hover:text-brand-saffron transition-colors">About Us</button></li>
              <li><button onClick={() => {}} className="hover:text-brand-saffron transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-warm/60">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-saffron" />
                <span>swadodisha@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-saffron" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-saffron" />
                <span>Bhubaneswar, Odisha 751001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-brand-warm/60 mb-4 text-sm">Join for weekly traditional recipe stories and special offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-brand-warm/5 border-none rounded-lg px-4 py-2 flex-grow focus:ring-2 focus:ring-brand-saffron"
              />
              <button className="bg-brand-saffron hover:bg-brand-saffron/90 px-4 py-2 rounded-lg font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-warm/5 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-warm/40 text-sm">
          <p>© 2024 Swad Odisha. All rights reserved.</p>
          <p>Handcrafted in Odisha ❤️</p>
        </div>
      </div>
    </footer>
  );
};
