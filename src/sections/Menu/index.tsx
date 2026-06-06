import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { MenuFilters } from './MenuFilters';
import { MenuGrid } from './MenuGrid';
import { MenuItem } from '@/types';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dishes, setDishes] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(res => res.json())
      .then(data => {
        setDishes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  const filteredDishes = activeCategory === 'all' 
    ? dishes 
    : dishes.filter((dish: MenuItem) => dish.category === activeCategory);

  if (loading) {
    return (
      <SectionWrapper id="menu">
        <div className="text-center py-20 text-white opacity-50 font-mono uppercase tracking-widest">
          Loading divine delicacies...
        </div>
      </SectionWrapper>
    );
  }

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
