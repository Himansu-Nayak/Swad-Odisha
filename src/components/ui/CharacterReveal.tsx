import React from 'react';
import { motion } from 'framer-motion';

export const CharacterReveal: React.FC<{ text: string; className?: string; delay?: number }> = ({ text, className, delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
  };

  return (
    <motion.h2
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "flex", marginRight: "0.25em" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={child} style={{ display: "inline-block" }}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};
