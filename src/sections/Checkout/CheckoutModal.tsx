import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { useCheckout } from './useCheckout';
import { AddressForm } from './AddressForm';
import { PaymentSelect } from './PaymentSelect';
import { OrderConfirmed } from './OrderConfirmed';

const slideIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

export const CheckoutModal: React.FC = () => {
  const { isOpen, step, close } = useCheckout();

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <motion.div
            key="checkout-panel"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              maxWidth: '560px',
              width: '100%',
              background: '#111111',
              border: '1px solid rgba(200,169,110,0.15)',
              borderRadius: '8px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            {/* Top Bar */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',
              top: 0,
              background: '#111111',
              zIndex: 10
            }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <StepIndicator step={1} active={step === 'address'} completed={step !== 'address'} label="Address" icon={<MapPin size={10} />} />
                <StepIndicator step={2} active={step === 'payment'} completed={step === 'confirmed'} label="Payment" icon={<CreditCard size={10} />} />
                <StepIndicator step={3} active={step === 'confirmed'} completed={step === 'confirmed'} label="Done" icon={<CheckCircle size={10} />} />
              </div>

              {step !== 'confirmed' && (
                <button onClick={close} style={{
                  color: 'rgba(255,255,255,0.4)',
                }} className="hover:text-white transition-colors">
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <AnimatePresence mode="wait">
                {step === 'address' && (
                  <motion.div
                    key="address"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AddressForm />
                  </motion.div>
                )}
                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PaymentSelect />
                  </motion.div>
                )}
                {step === 'confirmed' && (
                  <motion.div
                    key="confirmed"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <OrderConfirmed />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface StepProps {
  step: number;
  active: boolean;
  completed: boolean;
  label: string;
  icon: React.ReactNode;
}

const StepIndicator: React.FC<StepProps> = ({ active, completed, label }) => {
  const color = active || completed ? '#c8a96e' : 'rgba(255,255,255,0.2)';
  const bg = active ? '#c8a96e' : 'transparent';
  const textColor = active ? '#000000' : color;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        border: `1px solid ${color}`,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        color: textColor,
        transition: 'all 0.3s ease'
      }}>
        {completed ? '✓' : ''}
      </div>
      <span style={{
        fontFamily: 'Courier New, monospace',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '9px',
        color: active ? '#ffffff' : color,
        fontWeight: active ? 'bold' : 'normal'
      }}>
        {label}
      </span>
    </div>
  );
};
