import React, { useState } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { MenuFilters } from './MenuFilters';
import { MenuGrid } from './MenuGrid';
import { DISHES } from '@/constants';
import { MenuItem } from '@/types';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all' 
    ? DISHES 
    : DISHES.filter((dish: MenuItem) => dish.category === activeCategory);

  return (
    <SectionWrapper id="menu">
      <div className="mb-20">
        <DecorativeRule label="CURATED MENU" />
      </div>
      
      <MenuFilters 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <MenuGrid dishes={filteredDishes} />
    </SectionWrapper>
  );
};
