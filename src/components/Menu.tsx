import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Star, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { toast } from 'sonner'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
  rating: number
  isVeg: boolean
  isSpicy?: boolean
}

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { addToCart } = useCart()

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'rice', name: 'Rice & Curry' },
    { id: 'sweets', name: 'Sweets' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' }
  ]

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Pakhala Bhata",
      description: "Traditional fermented rice dish served with accompaniments",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      category: "rice",
      rating: 4.8,
      isVeg: true
    },
    {
      id: 2,
      name: "Dalma",
      description: "Signature lentil curry with mixed vegetables",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      category: "rice",
      rating: 4.9,
      isVeg: true,
      isSpicy: true
    },
    {
      id: 3,
      name: "Chhena Poda",
      description: "Baked cottage cheese dessert with cardamom",
      price: "₹80",
      image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NzQ5OTkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
      category: "sweets",
      rating: 4.7,
      isVeg: true
    },
    {
      id: 4,
      name: "Rasagola",
      description: "Soft spongy balls in sweet syrup",
      price: "₹60",
      image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NzQ5OTkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
      category: "sweets",
      rating: 4.6,
      isVeg: true
    },
    {
      id: 5,
      name: "Kheer Sagar",
      description: "Sweet milk-based dessert with rice",
      price: "₹70",
      image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NzQ5OTkwMHww&ixlib=rb-4.0.3&q=80&w=1080",
      category: "sweets",
      rating: 4.5,
      isVeg: true
    },
    {
      id: 6,
      name: "Aloo Dum",
      description: "Spiced potato curry in rich gravy",
      price: "₹130",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      category: "rice",
      rating: 4.4,
      isVeg: true,
      isSpicy: true
    },
    {
      id: 7,
      name: "Gupchup",
      description: "Crispy hollow puris with spicy water",
      price: "₹50",
      image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwY3VycnklMjBkYWx8ZW58MXx8fHwxNzU3NTMxODcxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      category: "snacks",
      rating: 4.3,
      isVeg: true,
      isSpicy: true
    },
    {
      id: 8,
      name: "Masala Chai",
      description: "Traditional spiced tea blend",
      price: "₹25",
      image: "https://images.unsplash.com/photo-1730272739732-dec07617854f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBraXRjaGVuJTIwc3BpY2VzfGVufDF8fHx8MTc1NzUzMTg3Nnww&ixlib=rb-4.0.3&q=80&w=1080",
      category: "beverages",
      rating: 4.2,
      isVeg: true
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-orange-500">Menu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of authentic Odia dishes, 
            each prepared with traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Tilt key={item.id} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={2000}>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow group border-none">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex gap-1">
                    {item.isVeg && (
                      <div className="w-5 h-5 border border-green-500 flex items-center justify-center bg-white">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    )}
                    {item.isSpicy && (
                      <div className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">🌶️</div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 shadow-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{item.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-4 bg-white">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                      <span className="font-bold text-orange-500 text-sm">{item.price}</span>
                    </div>
                    
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    
                    <button 
                      onClick={() => {
                        addToCart(item)
                        toast.success(`${item.name} added to cart!`)
                      }}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-1 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
