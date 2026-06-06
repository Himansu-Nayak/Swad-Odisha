import React from 'react';
import { useOrders, OrderStatus } from '@/context/OrderContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  Flame, 
  ChefHat, 
  Truck, 
  Home, 
  ArrowLeft,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';

interface OrderTrackingProps {
  orderId: string;
  onBack: () => void;
  onHome: () => void;
}

const statusSteps: { status: OrderStatus; icon: React.ReactNode; label: string; desc: string }[] = [
  { 
    status: 'Received', 
    icon: <Package size={20} />, 
    label: 'Order Received', 
    desc: 'We have received your order and it is being processed.' 
  },
  { 
    status: 'Preparing', 
    icon: <Flame size={20} />, 
    label: 'Preparing', 
    desc: 'Our chefs are gathering the freshest ingredients.' 
  },
  { 
    status: 'Cooking', 
    icon: <ChefHat size={20} />, 
    label: 'Cooking', 
    desc: 'Your dish is being cooked to perfection.' 
  },
  { 
    status: 'Out for Delivery', 
    icon: <Truck size={20} />, 
    label: 'Out for Delivery', 
    desc: 'Our delivery partner is on the way to your location.' 
  },
  { 
    status: 'Delivered', 
    icon: <Home size={20} />, 
    label: 'Delivered', 
    desc: 'Enjoy your authentic Odia meal!' 
  }
];

export const OrderTracking: React.FC<OrderTrackingProps> = ({ orderId, onBack, onHome }) => {
  const { orders } = useOrders();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Order not found</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  const currentStatusIndex = statusSteps.findIndex(s => s.status === order.status);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '10px 0'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
        <button 
          onClick={onBack}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#c8a96e', 
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <ArrowLeft size={20} />
        </button>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: '24px', 
            color: '#fff',
            margin: 0
          }}>
            Track Order
          </h3>
          <p style={{ 
            fontFamily: 'Courier New, monospace', 
            fontSize: '12px', 
            color: 'rgba(255,255,255,0.4)',
            margin: 0
          }}>
            #SO-{orderId}
          </p>
        </div>
      </div>

      {/* Real-time Status Stepper */}
      <div style={{ 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '12px', 
        padding: '24px',
        border: '1px solid rgba(255,255,255,0.06)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
          {/* Connecting Line */}
          <div style={{ 
            position: 'absolute', 
            left: '19px', 
            top: '20px', 
            bottom: '20px', 
            width: '2px', 
            background: 'rgba(255,255,255,0.05)' 
          }} />
          
          {/* Active Line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%` }}
            style={{ 
              position: 'absolute', 
              left: '19px', 
              top: '20px', 
              width: '2px', 
              background: '#c8a96e',
              boxShadow: '0 0 10px rgba(200,169,110,0.5)'
            }} 
          />

          {statusSteps.map((step, index) => {
            const isCompleted = index < currentStatusIndex;
            const isActive = index === currentStatusIndex;
            
            return (
              <div key={step.status} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: isActive ? '#c8a96e' : (isCompleted ? '#1a1a1a' : '#0a0a0a'),
                  border: `2px solid ${isActive || isCompleted ? '#c8a96e' : 'rgba(255,255,255,0.1)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? '#000' : (isCompleted ? '#c8a96e' : 'rgba(255,255,255,0.2)'),
                  boxShadow: isActive ? '0 0 15px rgba(200,169,110,0.3)' : 'none',
                  transition: 'all 0.5s ease'
                }}>
                  {step.icon}
                </div>
                <div style={{ flex: 1, textAlign: 'left', paddingTop: '4px' }}>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: 'bold', 
                    color: isActive || isCompleted ? '#fff' : 'rgba(255,255,255,0.3)',
                    margin: '0 0 4px 0'
                  }}>
                    {step.label}
                  </h4>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ 
                          fontSize: '12px', 
                          color: 'rgba(255,255,255,0.6)', 
                          margin: 0,
                          lineHeight: '1.4'
                        }}
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Details Mini-Card */}
      <div style={{ 
        background: '#1a1a1a', 
        borderRadius: '8px', 
        padding: '16px',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Delivery Details</span>
          <span style={{ fontSize: '10px', color: '#c8a96e', background: 'rgba(200,169,110,0.1)', padding: '2px 8px', borderRadius: '4px' }}>Fast Delivery</span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ color: '#c8a96e', marginTop: '2px' }}><MapPin size={14} /></div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '13px', color: '#fff', margin: '0 0 2px 0' }}>{order.address.name}</p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{order.address.line1}, {order.address.city}</p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Clock size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Estimated: 45 min</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Phone size={14} color="#4ade80" />
            <span style={{ fontSize: '11px', color: '#4ade80' }}>Call Partner</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={onHome}
        style={{
          width: '100%',
          padding: '14px',
          background: '#c8a96e',
          border: 'none',
          color: '#080808',
          borderRadius: '4px',
          fontFamily: 'Courier New, monospace',
          textTransform: 'uppercase',
          fontSize: '11px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '8px'
        }}
      >
        Done
      </button>
    </div>
  );
};
