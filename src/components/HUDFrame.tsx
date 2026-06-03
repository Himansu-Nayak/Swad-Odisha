import React from 'react';

export const HUDFrame: React.FC = () => {
  return (
    <div className="fixed inset-4 border-[1.5px] border-[var(--gold)] pointer-events-none z-[9999]">
      {/* Corner Ticks */}
      <span className="hud-frame-tick top-[-1.5px] left-[-1.5px] border-t-[1.5px] border-l-[1.5px]" />
      <span className="hud-frame-tick top-[-1.5px] right-[-1.5px] border-t-[1.5px] border-r-[1.5px]" />
      <span className="hud-frame-tick bottom-[-1.5px] left-[-1.5px] border-b-[1.5px] border-l-[1.5px]" />
      <span className="hud-frame-tick bottom-[-1.5px] right-[-1.5px] border-b-[1.5px] border-r-[1.5px]" />
    </div>
  );
};
