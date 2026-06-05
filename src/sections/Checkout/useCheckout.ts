import { useState, useEffect } from 'react';

export type CheckoutStep = 'address' | 'payment' | 'confirmed';
export type PaymentMethod = 'cod' | 'emi' | 'upi' | 'card';

export interface Address {
  name: string;
  phone: string;
  email: string;
  line1: string;
  line2: string;
  city: string;
  pincode: string;
}

export interface EMIPlan {
  months: number;
  monthlyAmount: number;
  totalAmount: number;
  interest: string;
}

const defaultAddress: Address = {
  name: '',
  phone: '',
  email: '',
  line1: '',
  line2: '',
  city: '',
  pincode: ''
};

// Singleton State to allow shared state without a Provider
let isOpenGlobal = false;
let stepGlobal: CheckoutStep = 'address';
let addressGlobal: Address = defaultAddress;
let paymentMethodGlobal: PaymentMethod = 'cod';
let selectedEMIPlanGlobal: EMIPlan | null = null;
let orderIdGlobal = '';

const listeners = new Set<() => void>();
const notify = () => listeners.forEach(l => l());

export function getEMIPlans(total: number): EMIPlan[] {
  return [
    {
      months: 3,
      monthlyAmount: Math.ceil(total / 3),
      totalAmount: Math.ceil(total * 1.0),
      interest: '0%'
    },
    {
      months: 6,
      monthlyAmount: Math.ceil((total * 1.015) / 6),
      totalAmount: Math.ceil(total * 1.015),
      interest: '1.5%'
    },
    {
      months: 12,
      monthlyAmount: Math.ceil((total * 1.04) / 12),
      totalAmount: Math.ceil(total * 1.04),
      interest: '4%'
    }
  ];
}

export const useCheckout = () => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const l = () => forceUpdate(f => f + 1);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const open = () => { isOpenGlobal = true; notify(); };
  const close = () => { isOpenGlobal = false; notify(); };
  const setAddress = (addr: Address) => { addressGlobal = addr; notify(); };
  const setPaymentMethod = (m: PaymentMethod) => { paymentMethodGlobal = m; notify(); };
  const setEMIPlan = (plan: EMIPlan) => { selectedEMIPlanGlobal = plan; notify(); };
  const goToPayment = () => { stepGlobal = 'payment'; notify(); };
  const goToAddress = () => { stepGlobal = 'address'; notify(); };
  const placeOrder = () => {
    orderIdGlobal = Math.random().toString(36).substring(2, 9).toUpperCase();
    stepGlobal = 'confirmed';
    notify();
  };
  const reset = () => {
    stepGlobal = 'address';
    addressGlobal = defaultAddress;
    paymentMethodGlobal = 'cod';
    selectedEMIPlanGlobal = null;
    orderIdGlobal = '';
    notify();
  };

  // Register global accessor for existing files that can't add imports
  if (typeof window !== 'undefined') {
    (window as any).setCheckoutOpen = (v: boolean) => {
      if (v) open();
      else close();
    };
  }

  return {
    isOpen: isOpenGlobal,
    step: stepGlobal,
    address: addressGlobal,
    paymentMethod: paymentMethodGlobal,
    selectedEMIPlan: selectedEMIPlanGlobal,
    orderId: orderIdGlobal,
    open,
    close,
    setAddress,
    setPaymentMethod,
    setEMIPlan,
    goToPayment,
    goToAddress,
    placeOrder,
    reset,
    getEMIPlans
  };
};
