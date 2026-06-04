import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/ui/dialog';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useAuth } from '@hooks/useAuth';

export function AuthModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, name || email.split('@')[0]);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-[var(--font-display)] text-center text-[var(--color-gold)] uppercase tracking-widest">
            {isLogin ? 'Login to Swadodisha' : 'Create an Account'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-mono text-white/50 uppercase">Full Name</label>
              <Input 
                placeholder="Himansu Nayak" 
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required={!isLogin}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-mono text-white/50 uppercase">Email Address</label>
            <Input 
              type="email" 
              placeholder="himansu@example.com" 
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required 
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-mono text-white/50 uppercase">Password</label>
            <Input type="password" placeholder="••••••••" required className="bg-white/5 border-white/10 text-white" />
          </div>

          <Button type="submit" className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/80 text-black font-black uppercase tracking-widest h-12">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          
          <div className="text-center">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-[var(--color-gold)] hover:underline font-mono uppercase tracking-tighter"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
