import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { useCheckout, PaymentMethod, EMIPlan } from './useCheckout';
import { CheckCircle, Lock, Banknote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PaymentSelect: React.FC = () => {
  const { cart, cartTotal } = useCart();
  const { 
    paymentMethod, setPaymentMethod, 
    selectedEMIPlan, setEMIPlan, 
    getEMIPlans, goToAddress, placeOrder, reset 
  } = useCheckout();

  const [upiId, setUpiId] = useState('');
  
  const subtotal = cartTotal;
  const deliveryFee = subtotal >= 499 ? 0 : 49;
  const packagingFee = 10;
  const taxes = subtotal * 0.05;
  const total = subtotal + deliveryFee + packagingFee + taxes;

  const emiPlans = getEMIPlans(total);

  const isPlaceOrderDisabled = 
    !paymentMethod || 
    (paymentMethod === 'emi' && !selectedEMIPlan) || 
    (paymentMethod === 'upi' && !upiId.trim());

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', minHeight: '400px' }}>
      {/* Left Column: Payment Methods */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3 style={{
          fontFamily: 'Courier New, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '4px'
        }}>
          Payment Method
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <PaymentCard 
            id="cod"
            title="Cash on Delivery"
            badge="No Extra Charge"
            badgeType="success"
            selected={paymentMethod === 'cod'}
            onSelect={() => setPaymentMethod('cod')}
          >
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={14} color="#4ade80" />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Pay ₹{total.toFixed(0)} in cash when your order arrives.</span>
              </div>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginLeft: '22px' }}>Our delivery partner will carry change.</span>
            </div>
          </PaymentCard>

          <PaymentCard 
            id="emi"
            title="EMI"
            badge="No Cost Available"
            badgeType="gold"
            selected={paymentMethod === 'emi'}
            onSelect={() => setPaymentMethod('emi')}
          >
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {emiPlans.map(plan => (
                <div 
                  key={plan.months}
                  onClick={() => setEMIPlan(plan)}
                  style={{
                    border: '1px solid',
                    borderColor: selectedEMIPlan?.months === plan.months ? '#c8a96e' : 'rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    padding: '12px',
                    cursor: 'pointer',
                    background: selectedEMIPlan?.months === plan.months ? 'rgba(200,169,110,0.05)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{plan.months} Months</span>
                    <span style={{ 
                      fontSize: '9px', 
                      padding: '2px 6px', 
                      borderRadius: '4px',
                      background: plan.interest === '0%' ? 'rgba(74,222,128,0.1)' : 'rgba(251,191,36,0.1)',
                      color: plan.interest === '0%' ? '#4ade80' : '#fbbf24',
                      border: `1px solid ${plan.interest === '0%' ? 'rgba(74,222,128,0.2)' : 'rgba(251,191,36,0.2)'}`
                    }}>
                      {plan.interest} interest
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ color: '#c8a96e', fontSize: '15px', fontWeight: '900' }}>₹{plan.monthlyAmount}/mo</span>
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>Total: ₹{plan.totalAmount}</span>
                  </div>
                </div>
              ))}
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginTop: '4px' }}>
                EMI processed via Razorpay at checkout
              </span>
            </div>
          </PaymentCard>

          <PaymentCard 
            id="upi"
            title="UPI"
            badge="Instant"
            badgeType="info"
            selected={paymentMethod === 'upi'}
            onSelect={() => setPaymentMethod('upi')}
          >
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input 
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                value={upiId}
                onChange={e => setUpiId(e.target.value)}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  padding: '10px 12px',
                  color: '#ffffff',
                  fontSize: '13px',
                  width: '100%',
                  outline: 'none'
                }}
              />
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>You'll be redirected to your UPI app</span>
            </div>
          </PaymentCard>

          <PaymentCard 
            id="card"
            title="Credit / Debit Card"
            badge="Visa / MC / RuPay"
            badgeType="default"
            selected={paymentMethod === 'card'}
            onSelect={() => setPaymentMethod('card')}
          >
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={12} color="rgba(255,255,255,0.3)" />
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
                Secure card entry handled by Razorpay payment gateway
              </span>
            </div>
          </PaymentCard>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
        <h3 style={{
          fontFamily: 'Courier New, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '20px'
        }}>
          Order Summary
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '180px', overflowY: 'auto', marginBottom: '20px', gap: '12px' }}>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ maxWidth: '150px', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', verticalAlign: 'bottom' }}>{item.name}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '6px' }}>×{item.quantity}</span>
              </span>
              <span>₹{(item.price * item.quantity).toFixed(0)}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          <SummaryRow label="Subtotal" value={`₹${subtotal.toFixed(0)}`} />
          <SummaryRow 
            label="Delivery" 
            value={deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`} 
            valueColor={deliveryFee === 0 ? '#4ade80' : undefined} 
          />
          <SummaryRow label="Packaging" value="₹10" />
          <SummaryRow label="GST (5%)" value={`₹${taxes.toFixed(0)}`} />
          
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '8px 0' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Total</span>
            <span style={{ fontSize: '20px', fontWeight: '900', color: '#c8a96e' }}>₹{total.toFixed(0)}</span>
          </div>

          {paymentMethod === 'emi' && selectedEMIPlan && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '11px', color: 'rgba(200,169,110,0.6)' }}>EMI Option</span>
              <span style={{ fontSize: '11px', color: 'rgba(200,169,110,0.6)' }}>₹{selectedEMIPlan.monthlyAmount} × {selectedEMIPlan.months} mo</span>
            </div>
          )}
        </div>

        <div style={{ 
          background: 'rgba(255,255,255,0.04)', 
          border: '1px solid rgba(255,255,255,0.08)', 
          borderRadius: '20px', 
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: 'auto'
        }}>
          <span style={{ fontSize: '12px' }}>🕐</span>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>45–60 min delivery</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
        <div 
          onClick={goToAddress}
          style={{ 
            fontSize: '11px', 
            color: 'rgba(255,255,255,0.3)', 
            cursor: 'pointer', 
            alignSelf: 'flex-start',
            marginBottom: '-8px'
          }}
          className="hover:text-white transition-colors"
        >
          ← Back to address
        </div>
        <button 
          disabled={isPlaceOrderDisabled}
          onClick={placeOrder}
          style={{
            width: '100%',
            padding: '16px',
            background: isPlaceOrderDisabled ? 'rgba(200,169,110,0.2)' : '#c8a96e',
            color: isPlaceOrderDisabled ? 'rgba(8,8,8,0.5)' : '#080808',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: isPlaceOrderDisabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            border: 'none'
          }}
          onMouseEnter={(e) => !isPlaceOrderDisabled && (e.currentTarget.style.background = '#d4b882')}
          onMouseLeave={(e) => !isPlaceOrderDisabled && (e.currentTarget.style.background = '#c8a96e')}
        >
          {paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Payment'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.2)' }}>
          <Lock size={10} />
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>256-bit SSL encrypted checkout</span>
        </div>
      </div>
    </div>
  );
};

const PaymentCard: React.FC<{
  id: PaymentMethod;
  title: string;
  badge: string;
  badgeType: 'success' | 'gold' | 'info' | 'default';
  selected: boolean;
  onSelect: () => void;
  children?: React.ReactNode;
}> = ({ title, badge, badgeType, selected, onSelect, children }) => {
  const badgeColors = {
    success: { bg: 'rgba(74,222,128,0.1)', text: '#4ade80', border: 'rgba(74,222,128,0.2)' },
    gold: { bg: 'rgba(200,169,110,0.1)', text: '#c8a96e', border: 'rgba(200,169,110,0.2)' },
    info: { bg: 'rgba(96,165,250,0.1)', text: '#60a5fa', border: 'rgba(96,165,250,0.2)' },
    default: { bg: 'rgba(255,255,255,0.05)', text: 'rgba(255,255,255,0.4)', border: 'rgba(255,255,255,0.1)' }
  };

  const colors = badgeColors[badgeType];

  return (
    <div 
      onClick={onSelect}
      style={{
        border: '1px solid',
        borderColor: selected ? '#c8a96e' : 'rgba(255,255,255,0.08)',
        borderRadius: '6px',
        padding: '14px 16px',
        cursor: 'pointer',
        background: selected ? 'rgba(200,169,110,0.06)' : 'transparent',
        transition: 'all 0.2s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            border: `1px solid ${selected ? '#c8a96e' : 'rgba(255,255,255,0.2)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {selected && <div style={{ width: '6px', height: '6px', background: '#c8a96e', borderRadius: '50%' }} />}
          </div>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: selected ? 'bold' : 'normal' }}>{title}</span>
        </div>
        <span style={{ 
          fontSize: '10px', 
          padding: '2px 8px', 
          borderRadius: '20px', 
          background: colors.bg, 
          color: colors.text, 
          border: `1px solid ${colors.border}` 
        }}>
          {badge}
        </span>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SummaryRow: React.FC<{ label: string, value: string, valueColor?: string }> = ({ label, value, valueColor }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
    <span style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
    <span style={{ color: valueColor || 'rgba(255,255,255,0.6)' }}>{value}</span>
  </div>
);
