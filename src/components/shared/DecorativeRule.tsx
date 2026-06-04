import React from 'react';
import { cn } from '@lib/utils';

interface DecorativeRuleProps {
  label: string;
  className?: string;
}

export const DecorativeRule: React.FC<DecorativeRuleProps> = ({ label, className }) => {
  return (
    <div className={cn('flex items-center gap-4 w-full', className)}>
      <div className="flex-1 h-px bg-[var(--gold)]/30" />
      <span className="text-[10px] tracking-[0.5em] uppercase text-[var(--gold)] font-mono whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[var(--gold)]/30" />
    </div>
  );
};
