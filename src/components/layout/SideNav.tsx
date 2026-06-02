import React from 'react';

export const SideNav: React.FC = () => {
  const sections = ["Home", "Keepers", "Select", "Philosophical", "Community"];

  return (
    <div className="fixed left-0 top-0 h-screen w-[5vw] z-[1002] flex flex-col items-center justify-between py-[10vh] mix-blend-difference pointer-events-none">
       <div className="hud-text rotate-90 origin-center whitespace-nowrap opacity-20">Archives_001_Active</div>
       
       <div className="flex flex-col gap-12 pointer-events-auto">
          {sections.map((n, i) => (
             <div key={i} className="group relative flex items-center justify-center cursor-pointer">
                <span className="text-[10px] font-black text-white/10 group-hover:text-[#FF4D00] transition-colors">0{i + 1}</span>
                <div className="absolute left-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 hud-text text-[#FF4D00] bg-black px-2 py-1">
                   {n}
                </div>
             </div>
          ))}
       </div>

       <div className="hud-text rotate-90 origin-center whitespace-nowrap opacity-20 tracking-[1em]">Protocol_8824</div>
    </div>
  );
};
