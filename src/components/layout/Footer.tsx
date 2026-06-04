import React from 'react';
import { DecorativeRule } from '@components/shared/DecorativeRule';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg)] py-20 px-[10vw] border-t border-[var(--gold-dim)] text-center flex flex-col items-center gap-10">
      <h2 className="text-[64px] font-[var(--font-display)] text-[var(--color-text)] m-0">
        SWAD ODISHA
      </h2>
      
      <DecorativeRule label="Bringing Odisha's soul to your plate" />
      
      <p className="font-mono text-[11px] text-[var(--color-text-muted)] tracking-[0.1em] mt-5 uppercase">
        © 2025 HIMANSU NAYAK · MCA FINAL YEAR · RCM BHUBANESWAR
      </p>
    </footer>
  );
};
