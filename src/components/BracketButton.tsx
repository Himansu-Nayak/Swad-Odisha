import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BracketButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const BracketButton: React.FC<BracketButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative py-4 px-10 border-[1.5px] border-[var(--gold)] bg-black/60 mono-label transition-all hover:shadow-[0_0_20px_rgba(201,169,110,0.5)] group overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Corner Ticks */}
      <span className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-[var(--gold)] group-hover:scale-125 transition-transform" />
      <span className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-[var(--gold)] group-hover:scale-125 transition-transform" />
      <span className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-[var(--gold)] group-hover:scale-125 transition-transform" />
      <span className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-[var(--gold)] group-hover:scale-125 transition-transform" />
      
      <span className="relative z-10">{children}</span>
    </button>
  );
};
