import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CinematicLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-brand-charcoal z-[200] flex flex-col items-center justify-center space-y-12"
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="font-['Playfair_Display'] text-brand-saffron text-2xl font-bold tracking-widest"
         >
           SWAD ODISHA
         </motion.div>
         <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-white/10 overflow-hidden">
            <motion.div 
              className="h-full bg-brand-saffron"
              style={{ width: `${progress}%` }}
            />
         </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
         <span className="text-white font-mono text-5xl font-black tabular-nums">
           {Math.floor(progress)}
         </span>
         <span className="text-brand-warm/20 uppercase tracking-[0.5em] text-[10px] font-bold">
           Initializing Tradition
         </span>
      </div>

      <div className="fixed bottom-12 text-[10px] text-brand-warm/20 uppercase tracking-[0.3em] flex gap-12 font-bold">
         <span>Bhubaneswar • 20.2961° N, 85.8245° E</span>
         <span>© 2025 Culture Hub</span>
      </div>
    </motion.div>
  );
};
