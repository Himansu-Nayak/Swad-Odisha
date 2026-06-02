import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button') || target.tagName === 'A' || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-brand-saffron rounded-full pointer-events-none z-[100] blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 4 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.1 }}
      />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99]">
         {isHovering && (
           <motion.span
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="absolute text-[8px] font-black uppercase tracking-widest text-brand-charcoal mix-blend-normal bg-brand-warm px-2 py-1"
             style={{ left: mousePosition.x + 20, top: mousePosition.y + 20 }}
           >
             Action
           </motion.span>
         )}
      </div>
    </>
  );
};
