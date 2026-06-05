import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bg?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  className, 
  children,
  bg = 'var(--bg)'
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative w-full min-h-screen py-32 px-12 md:px-24 flex flex-col overflow-hidden', className)}
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: bg, zIndex: -2 }} 
      />

      {/* Decorative side line for each section */}
      <div className="absolute left-12 top-0 w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="absolute right-12 top-0 w-[1px] h-full bg-white/5 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
};
