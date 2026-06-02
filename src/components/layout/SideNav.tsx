import React from 'react';
import { motion } from 'framer-motion';

export const SideNav: React.FC = () => {
  const sections = [
    { id: "01", name: "Archives" },
    { id: "02", name: "Keepers" },
    { id: "03", name: "Library" },
    { id: "04", name: "Philosophy" },
    { id: "05", name: "Signal" }
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-[1000] hidden xl:flex flex-col gap-12 blend-diff">
      <div className="flex flex-col gap-6">
        {sections.map((s, i) => (
          <div key={i} className="group flex items-center gap-6 cursor-pointer">
            <span className="text-[9px] font-black text-white/20 group-hover:text-brand-saffron transition-colors">
              {s.id}
            </span>
            <div className="h-[1px] w-0 bg-brand-saffron group-hover:w-8 transition-all duration-700" />
            <span className="mono-meta text-white/5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700">
              {s.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="h-40 w-px bg-white/5 relative overflow-hidden ml-[9px]">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-brand-saffron origin-top"
          animate={{ height: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="[writing-mode:vertical-lr] mono-meta text-[7px] rotate-180 ml-[6px] opacity-30">
        System_State_Nominal
      </div>
    </div>
  );
};
