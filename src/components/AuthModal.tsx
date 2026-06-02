import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useAuth } from '../context/AuthContext'

export function AuthModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated login
    login(email, name || email.split('@')[0])
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {isLogin ? 'Login to Swadodisha' : 'Create an Account'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input 
                placeholder="Himansu Nayak" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <Input 
              type="email" 
              placeholder="himansu@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input type="password" placeholder="••••••••" required />
          </div>

          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          
          <div className="text-center">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-orange-500 hover:underline"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
