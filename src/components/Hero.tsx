import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import Tilt from 'react-parallax-tilt'

export function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])

  const scrollToMenu = () => {
    const element = document.getElementById('menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden perspective-[1000px]">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50, translateZ: -100 }}
            animate={{ opacity: 1, x: 0, translateZ: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              >
                Authentic
                <span className="text-orange-500 block">Odia Flavors</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Experience the rich culinary heritage of Odisha with our traditional recipes, 
                passed down through generations and prepared with love and authentic spices.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={scrollToMenu}
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3 shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:translate-y-[-2px] transition-transform"
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-3"
              >
                Our Story
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-gray-800 drop-shadow-md">50+</div>
                <div className="text-sm text-gray-600">Traditional Dishes</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-gray-800 drop-shadow-md">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-gray-800 drop-shadow-md">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative perspective-[1000px] transform-gpu"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
              className="relative z-10 preserve-3d"
            >
              <div className="shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden transform-gpu translate-z-[50px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGZvb2QlMjB0aGFsaXxlbnwxfHx8fDE3NTc1MzE4Njh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Traditional Odia Thali"
                  className="w-full h-[600px] object-cover scale-105"
                />
              </div>
            </Tilt>
            {/* Decorative elements */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-orange-300 rounded-full opacity-40 blur-2xl z-0"
            ></motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-300 rounded-full opacity-40 blur-2xl z-0"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}