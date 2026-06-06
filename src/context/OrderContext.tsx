import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Address } from '@/types';

export type OrderStatus = 'Received' | 'Preparing' | 'Cooking' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  timestamp: number;
  address: Address;
}

interface OrderContextType {
  orders: Order[];
  activeOrder: Order | null;
  addOrder: (order: Order) => void;
  setActiveOrderId: (id: string | null) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const API_URL = 'http://localhost:5000/api';

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('swad_token');
    if (token) {
      fetch(`${API_URL}/orders`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setOrders(data);
      })
      .catch(console.error);
    }
  }, []);

  // Status simulation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setOrders(prevOrders => {
        let changed = false;
        const newOrders = prevOrders.map(order => {
          if (order.status === 'Delivered') return order;
          
          const now = Date.now();
          const elapsed = (now - order.timestamp) / 1000; // seconds

          let newStatus = order.status;
          if (elapsed > 120) newStatus = 'Delivered';
          else if (elapsed > 90) newStatus = 'Out for Delivery';
          else if (elapsed > 60) newStatus = 'Cooking';
          else if (elapsed > 20) newStatus = 'Preparing';

          if (newStatus !== order.status) {
            changed = true;
            return { ...order, status: newStatus as OrderStatus };
          }
          return order;
        });

        return changed ? newOrders : prevOrders;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const addOrder = async (order: Order) => {
    const token = localStorage.getItem('swad_token');
    if (!token) {
      // Fallback for guest or if auth not required yet
      setOrders(prev => [order, ...prev]);
      setActiveOrderId(order.id);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: order.items,
          total: order.total,
          address: order.address
        })
      });
      const data = await res.json();
      setOrders(prev => [data, ...prev]);
      setActiveOrderId(data.id);
    } catch (err) {
      console.error('Failed to place order:', err);
      // Fallback to local
      setOrders(prev => [order, ...prev]);
      setActiveOrderId(order.id);
    }
  };

  const activeOrder = orders.find(o => o.id === activeOrderId) || null;

  return (
    <OrderContext.Provider value={{ orders, activeOrder, addOrder, setActiveOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
