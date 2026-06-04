import React from 'react';
import { cn } from '@lib/utils';

interface MenuFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CATEGORIES = ['all', 'rice', 'curry', 'sweet', 'snack'];

export const MenuFilters: React.FC<MenuFiltersProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-6 py-2 text-[10px] font-mono tracking-[0.2em] uppercase border transition-all duration-300",
            activeCategory === cat 
              ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)]" 
              : "text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-gold-dim)]"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
