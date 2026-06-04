import React from 'react';

export const HUDFrame: React.FC = () => {
  return (
    <div className="fixed inset-[14px] border-[1.5px] border-[rgba(201,169,110,0.25)] pointer-events-none z-[9999]">
      {/* Corner Ticks */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />
    </div>
  );
};
