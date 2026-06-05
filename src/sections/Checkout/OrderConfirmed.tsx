import React, { useEffect } from 'react';
import { useCheckout } from './useCheckout';
import { useCart } from '@/hooks/useCart';
import { motion } from 'framer-motion';
import { Check, Banknote, MapPin, Clock, CreditCard } from 'lucide-react';

export const OrderConfirmed: React.FC = () => {
  const { orderId, address, paymentMethod, selectedEMIPlan, close, reset } = useCheckout();
  const { clearCart, cartTotal } = useCart();

  const subtotal = cartTotal;
  const deliveryFee = subtotal >= 499 ? 0 : 49;
  const packagingFee = 10;
  const taxes = subtotal * 0.05;
  const total = subtotal + deliveryFee + packagingFee + taxes;

  useEffect(() => {
    // We could clear cart here, but the prompt says to clear it on "Back to Home" click.
    // However, usually we clear it once order is placed.
    // I'll stick to the prompt's instruction for the button click.
  }, []);

  const handleBackToHome = () => {
    clearCart();
    reset();
    close();
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      padding: '20px 0'
    }}>
      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes confettiFall {
          to { transform: translateY(200px); opacity: 0; }
        }
      `}</style>

      {/* Confetti */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              background: ['#c8a96e', '#4ade80', '#f87171', '#60a5fa'][i % 4],
              left: `${Math.random() * 100}%`,
              top: '-10px',
              animation: `confettiFall 1.5s forwards ${Math.random() * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Animated Checkmark */}
      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        <svg width="80" height="80">
          <circle 
            cx="40" cy="40" r="32" 
            fill="none" 
            stroke="#4ade80" 
            strokeWidth="2"
            strokeDasharray="202"
            strokeDashoffset="202"
            style={{ animation: 'drawCircle 0.6s ease-out forwards' }}
          />
          <path 
            d="M26 40 L36 50 L54 30" 
            fill="none" 
            stroke="#4ade80" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="40"
            strokeDashoffset="40"
            style={{ animation: 'drawCheck 0.4s ease-out 0.6s forwards' }}
          />
        </svg>
      </div>

      <h2 style={{ 
        fontFamily: 'Cormorant Garamond, serif', 
        fontSize: '28px', 
        color: 'rgba(255,255,255,0.9)', 
        marginTop: '16px',
        marginBottom: '4px'
      }}>
        Order Placed!
      </h2>
      
      <p style={{ 
        fontFamily: 'Courier New, monospace', 
        fontSize: '13px', 
        color: '#c8a96e', 
        marginBottom: '24px' 
      }}>
        Order #SO-{orderId}
      </p>

      {/* Delivery Info Card */}
      <div style={{ 
        background: '#1a1a1a', 
        borderRadius: '6px', 
        padding: '20px', 
        border: '1px solid rgba(255,255,255,0.08)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <ConfirmRow icon={<MapPin size={14} color="#c8a96e" />} label="Delivering to" value={`${address.line1}, ${address.city}`} />
        <ConfirmRow icon={<Clock size={14} color="#c8a96e" />} label="Estimated arrival" value="45–60 minutes" />
        <ConfirmRow 
          icon={<CreditCard size={14} color="#c8a96e" />} 
          label="Payment" 
          value={
            paymentMethod === 'cod' ? 'Cash on Delivery' :
            paymentMethod === 'emi' ? `EMI – ₹${selectedEMIPlan?.monthlyAmount}/mo × ${selectedEMIPlan?.months} mo` :
            paymentMethod === 'upi' ? 'UPI' : 'Card'
          } 
        />
      </div>

      {paymentMethod === 'cod' && (
        <div style={{ 
          background: 'rgba(200,169,110,0.08)', 
          border: '1px solid rgba(200,169,110,0.2)', 
          borderRadius: '6px', 
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          marginBottom: '32px'
        }}>
          <Banknote size={16} color="#c8a96e" />
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', textAlign: 'left' }}>
            Keep ₹{total.toFixed(0)} ready for our delivery partner.
          </span>
        </div>
      )}

      {paymentMethod === 'emi' && (
        <div style={{ 
          background: 'rgba(55,138,221,0.08)', 
          border: '1px solid rgba(55,138,221,0.2)', 
          borderRadius: '6px', 
          padding: '12px',
          width: '100%',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>
            Your EMI of ₹{selectedEMIPlan?.monthlyAmount}/month starts next billing cycle.
          </span>
        </div>
      )}

      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <button 
          title="Coming soon"
          disabled
          style={{
            flex: 1,
            padding: '14px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.3)',
            borderRadius: '4px',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            fontSize: '11px',
            cursor: 'not-allowed'
          }}
        >
          Track Order
        </button>
        <button 
          onClick={handleBackToHome}
          style={{
            flex: 1,
            padding: '14px',
            background: '#c8a96e',
            border: 'none',
            color: '#080808',
            borderRadius: '4px',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            fontSize: '11px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

const ConfirmRow: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', textAlign: 'left' }}>
    <div style={{ marginTop: '2px' }}>{icon}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <span style={{ fontSize: '10px', fontFamily: 'Courier New, monospace', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{label}</span>
      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>{value}</span>
    </div>
  </div>
);
