import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Authentic
                <span className="text-orange-500 block">Odia Flavors</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the rich culinary heritage of Odisha with our traditional recipes, 
                passed down through generations and prepared with love and authentic spices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToMenu}
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3"
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-3"
              >
                Our Story
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-600">Traditional Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756741987051-a6a38f28838b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGZvb2QlMjB0aGFsaXxlbnwxfHx8fDE3NTc1MzE4Njh8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Traditional Odia Thali"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}