import React, { createContext, useContext, useState } from 'react'

interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: any) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id)
      if (existingItem) {
        return prevCart.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart(prevCart => 
      prevCart.map(item => item.id === id ? { ...item, quantity } : item)
    )
  }

  const clearCart = () => setCart([])

  const cartTotal = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('₹', ''))
    return total + (price * item.quantity)
  }, 0)

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
