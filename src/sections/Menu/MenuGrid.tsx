import React from 'react';
import { DishCard } from '@/components/shared/DishCard';
import { MenuItem } from '@/types';
import { AnimatePresence } from 'framer-motion';

interface MenuGridProps {
  dishes: MenuItem[];
}

export const MenuGrid: React.FC<MenuGridProps> = ({ dishes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <AnimatePresence mode="popLayout">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </AnimatePresence>
    </div>
  );
};
