import React from 'react';

interface SectionLabelProps {
  label: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <div className="h-[1px] w-20 bg-white/20" />
      <span className="mono-label text-white tracking-[0.5em]">{label}</span>
      <div className="h-[1px] w-20 bg-white/20" />
    </div>
  );
};
