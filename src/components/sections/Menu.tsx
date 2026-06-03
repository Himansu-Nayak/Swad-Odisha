import React from 'react';
import { useCart } from '../../hooks/useCart';
import { MENU_ITEMS } from '../../data/menu';
import { MenuItem } from '../../types';
import { toast } from 'sonner';
import { SplitText } from '../ui/SplitText';
import { motion } from 'framer-motion';

export const Menu: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`SYSTEM: ${item.name.toUpperCase()} ADDED_TO_CART`, {
      style: { background: '#000', color: '#FF4D00', border: '1px solid rgba(255,77,0,0.2)', fontSize: '9px', fontWeight: '900', letterSpacing: '0.2em' }
    });
  };

  return (
    <section id="menu" className="relative bg-transparent">
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
                       <span className="hud-text text-brand-gold font-bold">Artifact_Collection</span>
                       <div className="h-px w-20 bg-white/10" />
                       <span className="hud-text">Ref_ID: {item.id.padStart(2, '0')}</span>
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
                         className="group relative h-24 w-full border border-white/10 hover:border-[#FF4D00] transition-all overflow-hidden bg-black/40 backdrop-blur-md"
                       >
                          <div className="absolute inset-0 bg-[#FF4D00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                          <span className="relative z-10 hud-text group-hover:text-white transition-colors">Add_To_System</span>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Visual Projection Area with REAL IMAGE */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[35vw] h-[45vh] border border-white/[0.05] bg-white/[0.01] flex items-center justify-center overflow-hidden group shadow-2xl"
           >
              {item.image ? (
                <>
                  <div className="absolute inset-0 bg-brand-saffron/10 mix-blend-overlay z-10 pointer-events-none" />
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </>
              ) : (
                <span className="text-white/5 font-black text-9xl select-none italic">SO</span>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner marks for image frame */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />
           </motion.div>
        </div>
      ))}
    </section>
  );
};
