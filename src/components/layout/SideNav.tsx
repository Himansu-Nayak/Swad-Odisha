import React from 'react';

export const SideNav: React.FC = () => {
  const sections = [
    { id: "01", name: "Archives", href: "#home" },
    { id: "02", name: "Keepers", href: "#keepers" },
    { id: "03", name: "Artifacts", href: "#menu" },
    { id: "04", name: "Philosophy", href: "#about" },
    { id: "05", name: "Signal", href: "#testimonials" }
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-[5vw] z-[1002] flex flex-col items-center justify-between py-[10vh] mix-blend-difference pointer-events-none">
       <div className="hud-text rotate-90 origin-center whitespace-nowrap opacity-20">Archives_001_Active</div>
       
       <div className="flex flex-col gap-12 pointer-events-auto">
          {sections.map((s, i) => (
             <div key={i} onClick={() => scrollTo(s.href)} className="group relative flex items-center justify-center cursor-pointer">
                <span className="text-[10px] font-black text-white/10 group-hover:text-[#FF4D00] transition-colors">{s.id}</span>
                <div className="absolute left-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 hud-text text-[#FF4D00] bg-black px-2 py-1">
                   {s.name}
                </div>
             </div>
          ))}
       </div>

       <div className="hud-text rotate-90 origin-center whitespace-nowrap opacity-20 tracking-[1em]">Protocol_8824</div>
    </div>
  );
};
