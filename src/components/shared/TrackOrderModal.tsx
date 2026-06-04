import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Search, Package, Bike, CheckCircle2 } from 'lucide-react';

export function TrackOrderModal({ children }: { children: React.ReactNode }) {
  const [orderId, setOrderId] = useState('');
  const [isTracked, setIsTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setIsTracked(true);
  };

  const steps = [
    { name: 'Order Received', icon: Package, status: 'completed', time: '10:30 AM' },
    { name: 'Preparing', icon: Package, status: 'current', time: '10:45 AM' },
    { name: 'Out for Delivery', icon: Bike, status: 'upcoming', time: '--' },
    { name: 'Delivered', icon: CheckCircle2, status: 'upcoming', time: '--' }
  ];

  return (
    <Dialog onOpenChange={(open: boolean) => !open && setIsTracked(false)}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-[var(--font-display)] text-[var(--color-gold)] uppercase tracking-widest text-center">Track Your Order</DialogTitle>
        </DialogHeader>

        {!isTracked ? (
          <form onSubmit={handleTrack} className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-mono text-white/50 uppercase">Order ID</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input 
                  placeholder="e.g. ORD123456" 
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={orderId}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrderId(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/80 text-black font-black uppercase tracking-widest h-12">
              Track Status
            </Button>
          </form>
        ) : (
          <div className="py-6 space-y-8">
            <div className="flex justify-between items-center bg-[var(--color-gold)]/10 p-4 rounded border border-[var(--color-gold-dim)]">
              <div>
                <p className="text-[10px] text-[var(--color-gold)] font-bold uppercase tracking-widest">Order ID</p>
                <p className="font-bold text-white">{orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-[var(--color-gold)] font-bold uppercase tracking-widest">Est. Delivery</p>
                <p className="font-bold text-white">35-45 mins</p>
              </div>
            </div>

            <div className="relative space-y-8 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-6 ml-0">
                    <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      step.status === 'completed' ? 'bg-green-500/20 border-green-500 text-green-500' : 
                      step.status === 'current' ? 'bg-[var(--color-gold)]/20 border-[var(--color-gold)] text-[var(--color-gold)] animate-pulse' : 
                      'bg-white/5 border-white/10 text-white/20'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className={`font-bold uppercase font-mono text-sm ${step.status === 'upcoming' ? 'text-white/30' : 'text-white'}`}>
                        {step.name}
                      </p>
                      <p className="text-xs text-white/50 font-mono">{step.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button onClick={() => setIsTracked(false)} variant="outline" className="w-full border-white/10 text-white/50 hover:text-white uppercase font-mono text-[10px]">
              Track Another Order
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
