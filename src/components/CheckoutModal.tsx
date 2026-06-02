import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useCart } from '../context/CartContext'
import { CheckCircle2, CreditCard } from 'lucide-react'

export function CheckoutModal({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
  const { cartTotal, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handlePlaceOrder = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setStep(3)
      setOrderId('ORD' + Math.floor(Math.random() * 1000000))
      clearCart()
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {step === 1 && 'Delivery Details'}
            {step === 2 && 'Payment Information'}
            {step === 3 && 'Order Confirmed!'}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Delivery Address</label>
              <Input placeholder="Plot No. 123, Chandrashekharpur, Bhubaneswar" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <Input defaultValue="Bhubaneswar" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pincode</label>
                <Input placeholder="751024" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input placeholder="+91 XXXXX XXXXX" />
            </div>
            <Button onClick={() => setStep(2)} className="w-full bg-orange-500 hover:bg-orange-600">
              Continue to Payment
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 py-4">
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>Items Total</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                <span>Total Amount</span>
                <span>₹{cartTotal + 40}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Select Payment Method
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="border-2 border-orange-500 rounded-lg p-3 text-sm font-medium bg-orange-50">
                  UPI / PhonePe
                </button>
                <button className="border rounded-lg p-3 text-sm font-medium hover:border-orange-200">
                  Card Payment
                </button>
                <button className="border rounded-lg p-3 text-sm font-medium hover:border-orange-200">
                  Net Banking
                </button>
                <button className="border rounded-lg p-3 text-sm font-medium hover:border-orange-200">
                  Cash on Delivery
                </button>
              </div>
            </div>

            <Button 
              onClick={handlePlaceOrder} 
              disabled={isProcessing}
              className="w-full bg-orange-500 hover:bg-orange-600 h-12"
            >
              {isProcessing ? 'Processing Payment...' : `Pay ₹${cartTotal + 40}`}
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="py-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">Yay! Order Placed</h3>
              <p className="text-gray-600">Your order #{orderId} has been successfully placed.</p>
            </div>
            <p className="text-sm text-gray-500">
              You can track your order in the "Track Order" section using your Order ID.
            </p>
            <Button onClick={() => onOpenChange(false)} className="w-full bg-orange-500 hover:bg-orange-600">
              Back to Home
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
