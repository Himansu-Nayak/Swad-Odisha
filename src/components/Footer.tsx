import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import swadodishaLogo from '@/assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png'
import { TrackOrderModal } from './TrackOrderModal'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={swadodishaLogo}
                alt="Swadodisha Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Swadodisha</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bringing you the authentic flavors of Odisha with traditional recipes 
              and modern presentation. Every dish tells a story of our rich heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/mr_himansu243" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
              <li>
                <TrackOrderModal>
                  <button className="text-gray-300 hover:text-orange-500 transition-colors">Track Order</button>
                </TrackOrderModal>
              </li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Specialties</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Pakhala Bhata</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Dalma</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Chhena Poda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Rasagola</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Traditional Sweets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Festive Meals</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Chandrashekharpur</p>
                  <p className="text-gray-300">Bhubaneswar, Odisha</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">+91 7846805157</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-300">himansunayak183@gmail.com</p>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Opening Hours</h4>
              <p className="text-sm text-gray-300">Mon-Sat: 11:00 AM - 10:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Swadodisha. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}