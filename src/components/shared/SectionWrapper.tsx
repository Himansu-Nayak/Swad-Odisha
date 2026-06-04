import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@lib/utils';

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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={cn('relative w-full py-24 px-6 md:px-16 overflow-hidden', className)}
      style={{ background: bg, minHeight: '100vh' }}
    >
      {children}
    </motion.section>
  );
};
