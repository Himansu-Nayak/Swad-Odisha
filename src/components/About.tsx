import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Heart, Users, Award } from 'lucide-react'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, translateZ: -100 },
    visible: {
      opacity: 1,
      y: 0,
      translateZ: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  }

  return (
    <section id="about" className="py-20 bg-white overflow-hidden perspective-[1000px]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative transform-gpu"
          >
            <div className="relative group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730272739732-dec07617854f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBraXRjaGVuJTIwc3BpY2VzfGVufDF8fHx8MTc1NzUzMTg3Nnww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Traditional spices and cooking"
                className="w-full h-[500px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-shadow duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* 3D Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
            >
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs uppercase tracking-widest font-semibold">Years of Heritage</p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                Our Story of 
                <span className="text-orange-500"> Tradition</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Swadodisha was born from a deep love for Odia cuisine and a desire to share 
                the incredible flavors of Odisha with the world. Our journey began with 
                traditional family recipes that have been carefully preserved and perfected 
                over generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the famous Pakhala Bhata and Dalma to the sweet delicacies like Rasagola 
                and Chhena Poda, we bring you authentic tastes that tell the story of our 
                rich cultural heritage.
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <motion.div variants={itemVariants} className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Made with Love</h3>
                <p className="text-sm text-gray-600">Every dish is prepared with care and passion</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Family Recipes</h3>
                <p className="text-sm text-gray-600">Traditional recipes from Odia families</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Authentic Taste</h3>
                <p className="text-sm text-gray-600">Original flavors that honor tradition</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-orange-50 p-6 rounded-xl"
            >
              <blockquote className="text-lg italic text-gray-700">
                "Food is not just nourishment, it's a celebration of culture, family, and tradition. 
                At Swadodisha, we believe every meal should tell a story."
              </blockquote>
              <cite className="block mt-3 text-orange-600 font-semibold">- The Swadodisha Family</cite>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}