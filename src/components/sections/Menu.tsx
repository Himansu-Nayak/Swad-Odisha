import React from 'react';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { toast } from 'sonner';
import { SplitText } from '../ui/SplitText';

export const Menu: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`SYSTEM: ${item.name.toUpperCase()} ADDED_TO_CART`, {
      style: { background: '#000', color: '#FF4D00', border: '1px solid rgba(255,77,0,0.2)', fontSize: '9px', fontWeight: '900', letterSpacing: '0.2em' }
    });
  };

  return (
    <section id="menu" className="relative bg-black">
      {/* 21hrs.space Style: One dish per viewport "beat" */}
      {MENU_ITEMS.map((item, i) => (
        <div key={item.id} className="relative h-[120vh] w-full flex flex-col justify-center px-[8vw] border-b border-white/[0.02]">
           {/* Decorative Background Index */}
           <div className="absolute top-[10%] left-[8vw] text-[40vh] font-black text-white/[0.01] pointer-events-none select-none leading-none tracking-tighter italic">
              0{i + 1}
           </div>

           <div className="relative z-10 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-10 space-y-24">
                 <div className="space-y-6">
                    <div className="flex items-center gap-6">
                       <span className="hud-text text-brand-gold">Artifact_Collection</span>
                       <div className="h-px w-20 bg-white/10" />
                       <span className="hud-text">Ref_ID: {item.id}</span>
                    </div>
                    <SplitText 
                      text={item.name}
                      className="text-poster text-white text-left"
                      delay={0.2}
                    />
                 </div>

                 <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5 space-y-12">
                       <p className="text-3xl font-['Playfair_Display'] text-white/90 leading-tight italic">
                          "{item.description}"
                       </p>
                       
                       <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center border-t border-white/5 pt-4">
                             <span className="hud-text">Category</span>
                             <span className="hud-text text-white">{item.category}</span>
                          </div>
                          <div className="flex justify-between items-center border-t border-white/5 pt-4">
                             <span className="hud-text">Dietary_Flag</span>
                             <span className={`hud-text ${item.isVeg ? 'text-green-500' : 'text-red-500'}`}>
                                {item.isVeg ? 'VEG_PASS' : 'NON_VEG_PASS'}
                             </span>
                          </div>
                          <div className="flex justify-between items-center border-t border-white/5 pt-4">
                             <span className="hud-text">Archive_Value</span>
                             <span className="text-2xl font-mono font-black text-brand-gold">₹{item.price}</span>
                          </div>
                       </div>
                    </div>

                    <div className="lg:col-start-8 lg:col-span-4 flex items-center justify-end">
                       <button 
                         onClick={() => handleAddToCart(item)}
                         className="group relative h-24 w-full border border-white/10 hover:border-[#FF4D00] transition-all overflow-hidden"
                       >
                          <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          <span className="relative z-10 hud-text group-hover:text-white transition-colors">Add_To_System</span>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Visual Projection Area (where Three.js would zoom in) */}
           <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[30vw] h-[40vh] border border-white/[0.03] bg-white/[0.01] flex items-center justify-center">
              <span className="text-white/5 font-black text-9xl select-none">SO</span>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
        </div>
      ))}
    </section>
  );
};
