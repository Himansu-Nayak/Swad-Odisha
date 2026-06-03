import React from 'react';

interface SectionLabelProps {
  label: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div className="flex items-center gap-6 justify-center w-full">
      <div className="h-[1px] grow bg-[var(--border)] max-w-[80px]" />
      <span className="mono-label text-[var(--gold)]">{label}</span>
      <div className="h-[1px] grow bg-[var(--border)] max-w-[80px]" />
    </div>
  );
};
