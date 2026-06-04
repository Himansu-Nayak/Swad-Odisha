export interface User {
  name: string
  email: string
}

export interface MenuItem {
  id: string
  name: string
  odiName?: string          // Odia script name
  category: 'rice' | 'curry' | 'sweet' | 'snack' | 'drink' | 'bread' | 'all'
  price: number
  description: string
  isVeg: boolean
  isSpicy?: boolean
  isSignature?: boolean
  image: string
  district?: string
  chef?: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Chef {
  id: string
  name: string
  district: string
  specialty: string
  rating: number
  image: string
  bio: string
}

export interface District {
  id: string
  name: string
  odiName?: string
  food: string
  foodEmoji: string
  color: string            // fill color on map
  path: string             // SVG path data for the district shape
  labelX: number
  labelY: number
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  dish: string
  avatar?: string
}

export interface ProcessStep {
  id: number
  title: string
  desc: string
  icon: any
}

export interface TechStackItem {
  name: string
  category: string
  icon: string
}
