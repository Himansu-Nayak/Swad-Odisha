import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Star } from 'lucide-react'

interface Dish {
  id: number
  name: string
  description: string
  price: string
  image: string
  rating: number
  isVeg: boolean
}

export function FeaturedDishes() {
  const featuredDishes: Dish[] = [
    {
      id: 1,
      name: "Pakhala Bhata",
      description: "Traditional fermented rice dish served with accompaniments, perfect for hot summer days",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      rating: 4.8,
      isVeg: true
    },
    {
      id: 2,
      name: "Dalma",
      description: "Signature Odia lentil curry with vegetables, a complete nutritious meal",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      rating: 4.9,
      isVeg: true
    },
    {
      id: 3,
      name: "Chhena Poda",
      description: "Famous Odia dessert made with cottage cheese, sugar, and cardamom",
      price: "₹80",
      image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NzQ5OTkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
      rating: 4.7,
      isVeg: true
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured <span className="text-orange-500">Dishes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved traditional Odia dishes, each prepared with 
            authentic ingredients and time-honored techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  {dish.isVeg && (
                    <div className="w-6 h-6 border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{dish.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
                    <span className="text-lg font-bold text-orange-500">{dish.price}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                  
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}