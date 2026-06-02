import React from 'react';

export const SideNav: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[8vw] z-[1001] flex flex-col items-center justify-between py-[15vh] blend-diff">
       <div className="text-meta rotate-90 origin-center whitespace-nowrap">Archives_Active</div>
       <div className="flex flex-col gap-8">
          {[1,2,3,4,5].map((i) => (
             <div key={i} className="text-[10px] font-black text-white/20 hover:text-[#FF4D00] cursor-pointer transition-colors">0{i}</div>
          ))}
       </div>
       <div className="text-meta rotate-90 origin-center whitespace-nowrap">2024_Protocol</div>
    </div>
  );
};
