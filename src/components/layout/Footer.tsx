import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white/40 pt-60 pb-20 px-[8vw] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 text-[30vw] font-black text-white/[0.01] leading-none select-none translate-y-1/2">
         ODISHA
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 space-y-12">
          <div className="flex flex-col gap-2">
            <div className="font-['Playfair_Display'] font-black text-3xl text-white tracking-tighter">
              SWAD ODISHA
            </div>
            <span className="hud-text text-[#FF4D00]">Authentic_Heritage_Archive</span>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-sm">
            Preserving the sacred flavors of Odisha through the hands of home keepers.
          </p>
          <div className="flex gap-10 border-t border-white/5 pt-10">
             <span className="hud-text hover:text-white cursor-pointer transition-colors">Instagram</span>
             <span className="hud-text hover:text-white cursor-pointer transition-colors">Facebook</span>
             <span className="hud-text hover:text-white cursor-pointer transition-colors">WhatsApp</span>
          </div>
        </div>

        <div className="lg:col-start-7 lg:col-span-6 grid grid-cols-2 gap-20">
           <div className="space-y-10">
              <span className="hud-text text-white">Contact_Node</span>
              <ul className="space-y-4 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                 <li className="flex gap-4"><span className="text-[#FF4D00]">E</span> swadodisha@gmail.com</li>
                 <li className="flex gap-4"><span className="text-[#FF4D00]">P</span> +91 98765 43210</li>
                 <li className="flex gap-4"><span className="text-[#FF4D00]">A</span> Bhubaneswar, Odisha 751001</li>
              </ul>
           </div>

           <div className="flex flex-col justify-between items-end text-right">
              <div className="space-y-4">
                 <span className="hud-text">Archive_Integrity</span>
                 <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">Built by Himansu Nayak <br/> RCM Bhubaneswar</p>
              </div>
              <p className="hud-text opacity-20 mt-auto pt-20">© 2024 SWAD_ODISHA_INTL</p>
           </div>
        </div>
      </div>
    </footer>
  );
};
