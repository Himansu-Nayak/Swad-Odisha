import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Search, Package, Bike, CheckCircle2 } from 'lucide-react'

export function TrackOrderModal({ children }: { children: React.ReactNode }) {
  const [orderId, setOrderId] = useState('')
  const [isTracked, setIsTracked] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderId) setIsTracked(true)
  }

  const steps = [
    { name: 'Order Received', icon: Package, status: 'completed', time: '10:30 AM' },
    { name: 'Preparing', icon: Package, status: 'current', time: '10:45 AM' },
    { name: 'Out for Delivery', icon: Bike, status: 'upcoming', time: '--' },
    { name: 'Delivered', icon: CheckCircle2, status: 'upcoming', time: '--' }
  ]

  return (
    <Dialog onOpenChange={(open) => !open && setIsTracked(false)}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Track Your Order</DialogTitle>
        </DialogHeader>

        {!isTracked ? (
          <form onSubmit={handleTrack} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Order ID</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="e.g. ORD123456" 
                  className="pl-10"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Track Status
            </Button>
          </form>
        ) : (
          <div className="py-6 space-y-8">
            <div className="flex justify-between items-center bg-orange-50 p-4 rounded-lg">
              <div>
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Order ID</p>
                <p className="font-bold text-gray-800">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Est. Delivery</p>
                <p className="font-bold text-gray-800">35-45 mins</p>
              </div>
            </div>

            <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="relative flex items-start gap-6 ml-0">
                    <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                      step.status === 'completed' ? 'bg-green-500 text-white' : 
                      step.status === 'current' ? 'bg-orange-500 text-white animate-pulse' : 
                      'bg-gray-100 text-gray-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className={`font-bold ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-800'}`}>
                        {step.name}
                      </p>
                      <p className="text-xs text-gray-500">{step.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button onClick={() => setIsTracked(false)} variant="outline" className="w-full">
              Track Another Order
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
