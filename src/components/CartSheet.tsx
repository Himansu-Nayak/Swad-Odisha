import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Button } from './ui/button'
import { CheckoutModal } from './CheckoutModal'

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Cart ({cartCount})
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <ShoppingCart className="w-12 h-12 text-gray-300" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-orange-500 font-bold">{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>
              <p className="text-sm text-gray-500">Taxes and shipping calculated at checkout</p>
              <Button 
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg"
              >
                Proceed to Checkout
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onOpenChange={setIsCheckoutOpen} 
      />
    </>
  )
}
