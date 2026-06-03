import React from 'react';

export const HUDFrame: React.FC = () => {
  return (
    <div className="fixed inset-4 border-[1.5px] border-[var(--gold)] pointer-events-none z-[9999]">
      {/* Corner Ticks */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-[var(--gold)] translate-x-[-1.5px] translate-y-[-1.5px]" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-[var(--gold)] translate-x-[1.5px] translate-y-[-1.5px]" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-[var(--gold)] translate-x-[-1.5px] translate-y-[1.5px]" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-[var(--gold)] translate-x-[1.5px] translate-y-[1.5px]" />
    </div>
  );
};
