import React from 'react';
import { cn } from '@/lib/utils';

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
              ? "bg-[var(--gold)] text-black border-[var(--gold)]" 
              : "text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--gold-dim)]"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
