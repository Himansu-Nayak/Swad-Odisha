import React, { useState, useEffect } from 'react';
import { MenuItem } from '@/types';
import { Plus, Edit2, Trash2, Save, X, UtensilsCrossed } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/menu';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'orders'>('menu');
  const [dishes, setDishes] = useState<MenuItem[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<MenuItem>>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === 'menu') fetchDishes();
    else fetchOrders();
  }, [activeTab]);

  const fetchDishes = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setDishes(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch dishes:', err);
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    const token = localStorage.getItem('swad_token');
    try {
      const res = await fetch('http://localhost:5000/api/orders/all', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    const token = localStorage.getItem('swad_token');
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) fetchOrders();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleEdit = (dish: MenuItem) => {
    setEditingId(dish.id);
    setEditForm(dish);
  };

  const handleSave = async (id: string) => {
    const token = localStorage.getItem('swad_token');
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editForm)
      });
      if (res.ok) {
        setEditingId(null);
        fetchDishes();
      }
    } catch (err) {
      console.error('Failed to save:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    const token = localStorage.getItem('swad_token');
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) fetchDishes();
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const handleAdd = async () => {
    const token = localStorage.getItem('swad_token');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editForm)
      });
      if (res.ok) {
        setShowAddForm(false);
        setEditForm({});
        fetchDishes();
      }
    } catch (err) {
      console.error('Failed to add:', err);
    }
  };

  if (loading) return <div className="text-white p-20 font-mono">LOADING DATABASE...</div>;

  return (
    <div className="min-h-screen bg-[#080808] text-white p-8 pt-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <UtensilsCrossed className="text-[#c8a96e]" size={32} />
            <div>
              <h1 className="text-3xl font-serif italic tracking-tight">Admin Console</h1>
              <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => setActiveTab('menu')}
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${activeTab === 'menu' ? 'text-[#c8a96e] border-b border-[#c8a96e]' : 'text-white/40 hover:text-white'}`}
                >
                  Menu Management
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${activeTab === 'orders' ? 'text-[#c8a96e] border-b border-[#c8a96e]' : 'text-white/40 hover:text-white'}`}
                >
                  Order Management
                </button>
              </div>
            </div>
          </div>
          {activeTab === 'menu' && (
            <button 
              onClick={() => { setShowAddForm(true); setEditForm({ category: 'curry', isVeg: true }); }}
              className="flex items-center gap-2 bg-[#c8a96e] text-black px-6 py-3 rounded-sm font-mono text-xs font-bold hover:bg-[#d4b882] transition-colors"
            >
              <Plus size={16} /> ADD NEW DISH
            </button>
          )}
        </header>

        {activeTab === 'menu' ? (
          <>
            {showAddForm && (
              <div className="mb-12 bg-white/5 border border-[#c8a96e]/30 p-8 rounded-sm">
                <h2 className="text-xl font-serif mb-6">Create New Menu Item</h2>
                <div className="grid grid-cols-2 gap-6">
                  <input 
                    placeholder="Dish Name" 
                    className="bg-black border border-white/10 p-3 rounded-sm outline-none focus:border-[#c8a96e]"
                    value={editForm.name || ''}
                    onChange={e => setEditForm({...editForm, name: e.target.value})}
                  />
                  <input 
                    placeholder="Price (₹)" 
                    type="number"
                    className="bg-black border border-white/10 p-3 rounded-sm outline-none focus:border-[#c8a96e]"
                    value={editForm.price || ''}
                    onChange={e => setEditForm({...editForm, price: Number(e.target.value)})}
                  />
                  <select 
                    className="bg-black border border-white/10 p-3 rounded-sm outline-none focus:border-[#c8a96e]"
                    value={editForm.category}
                    onChange={e => setEditForm({...editForm, category: e.target.value as any})}
                  >
                    <option value="rice">Rice</option>
                    <option value="curry">Curry</option>
                    <option value="sweet">Sweet</option>
                    <option value="snack">Snack</option>
                    <option value="drink">Drink</option>
                  </select>
                  <input 
                    placeholder="Image URL" 
                    className="bg-black border border-white/10 p-3 rounded-sm outline-none focus:border-[#c8a96e]"
                    value={editForm.image || ''}
                    onChange={e => setEditForm({...editForm, image: e.target.value})}
                  />
                  <textarea 
                    placeholder="Description" 
                    className="bg-black border border-white/10 p-3 rounded-sm outline-none focus:border-[#c8a96e] col-span-2 h-24"
                    value={editForm.description || ''}
                    onChange={e => setEditForm({...editForm, description: e.target.value})}
                  />
                </div>
                <div className="flex gap-4 mt-8">
                  <button onClick={handleAdd} className="bg-[#c8a96e] text-black px-8 py-3 rounded-sm font-bold text-xs font-mono">SAVE DISH</button>
                  <button onClick={() => setShowAddForm(false)} className="bg-white/10 px-8 py-3 rounded-sm text-xs font-mono">CANCEL</button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4">
              {dishes.map(dish => (
                <div key={dish.id} className="bg-white/5 border border-white/5 p-6 flex items-center justify-between hover:border-white/10 transition-all">
                  {editingId === dish.id ? (
                    <div className="flex-1 grid grid-cols-3 gap-4 mr-8">
                      <input value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} className="bg-black border border-white/20 p-2 text-sm" />
                      <input value={editForm.price} onChange={e => setEditForm({...editForm, price: Number(e.target.value)})} className="bg-black border border-white/20 p-2 text-sm" />
                      <div className="flex gap-2">
                        <button onClick={() => handleSave(dish.id)} className="p-2 bg-[#c8a96e] text-black rounded-sm"><Save size={18} /></button>
                        <button onClick={() => setEditingId(null)} className="p-2 bg-white/10 rounded-sm"><X size={18} /></button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-6">
                        <img src={dish.image} className="w-16 h-16 object-cover rounded-sm grayscale hover:grayscale-0 transition-all" alt={dish.name} />
                        <div>
                          <h3 className="text-lg font-serif">{dish.name}</h3>
                          <p className="text-xs text-[#c8a96e] font-mono uppercase tracking-widest">{dish.category} • ₹{dish.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => handleEdit(dish)} className="p-2 border border-white/10 rounded-sm text-white/40 hover:text-white hover:border-white/20 transition-all">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(dish.id)} className="p-2 border border-white/10 rounded-sm text-red-500/40 hover:text-red-500 hover:border-red-500/20 transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {orders.length === 0 ? (
              <div className="text-center py-20 bg-white/5 border border-white/5 rounded-sm">
                <p className="text-white/40 font-mono text-sm uppercase tracking-widest">No orders found in the database</p>
              </div>
            ) : (
              orders.map(order => (
                <div key={order.id} className="bg-white/5 border border-white/10 p-8 rounded-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-serif text-[#c8a96e]">Order #SO-{order.id}</h3>
                      <p className="text-xs font-mono text-white/40 mt-1 uppercase tracking-widest">
                        Placed: {new Date(order.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <select 
                      value={order.status}
                      onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                      className="bg-[#c8a96e] text-black font-mono text-xs font-bold px-4 py-2 rounded-sm outline-none cursor-pointer"
                    >
                      <option value="Received">RECEIVED</option>
                      <option value="Preparing">PREPARING</option>
                      <option value="Cooking">COOKING</option>
                      <option value="Out for Delivery">OUT FOR DELIVERY</option>
                      <option value="Delivered">DELIVERED</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Items Ordered</h4>
                      <div className="flex flex-col gap-3">
                        {order.items.map((item: any, i: number) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="text-white/80">{item.name} <span className="text-white/30">×{item.quantity}</span></span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                        <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-[#c8a96e]">
                          <span>TOTAL AMOUNT</span>
                          <span>₹{order.total}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Customer & Delivery</h4>
                      <p className="text-sm font-bold text-white/90">{order.address.name}</p>
                      <p className="text-sm text-white/60 mt-1">{order.address.line1}</p>
                      <p className="text-sm text-white/60">{order.address.city}, {order.address.pincode}</p>
                      <p className="text-xs font-mono text-[#c8a96e] mt-4 uppercase">{order.address.phone}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
