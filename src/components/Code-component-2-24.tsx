import { ImageWithFallback } from './figma/ImageWithFallback'
import { Heart, Users, Award } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730272739732-dec07617854f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBraXRjaGVuJTIwc3BpY2VzfGVufDF8fHx8MTc1NzUzMTg3Nnww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Traditional spices and cooking"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Made with Love</h3>
                <p className="text-sm text-gray-600">Every dish is prepared with care and passion</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Family Recipes</h3>
                <p className="text-sm text-gray-600">Traditional recipes from Odia families</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800">Authentic Taste</h3>
                <p className="text-sm text-gray-600">Original flavors that honor tradition</p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <blockquote className="text-lg italic text-gray-700">
                "Food is not just nourishment, it's a celebration of culture, family, and tradition. 
                At Swadodisha, we believe every meal should tell a story."
              </blockquote>
              <cite className="block mt-3 text-orange-600 font-semibold">- The Swadodisha Family</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}