import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CinematicLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onCompleteRef.current(), 800);
          return 100;
        }
        return prev + Math.random() * 6;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#050403] z-[200] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex flex-col items-center gap-12">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative w-40 h-40 flex items-center justify-center border border-[var(--gold)]/20 bg-[var(--gold)]/[0.02] rounded-full overflow-hidden"
         >
            {/* Logo removed as requested */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 to-transparent" />
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full border-t border-[var(--gold)]/30"
            />
         </motion.div>

         <div className="flex flex-col items-center gap-4">
            <div className="font-[var(--font-display)] text-[var(--gold)] text-4xl font-black tracking-[0.2em] uppercase">
              SWAD ODISHA
            </div>
            <div className="w-64 h-[1px] bg-white/10 overflow-hidden relative">
               <motion.div 
                 className="absolute inset-y-0 left-0 bg-[var(--gold)]"
                 style={{ width: `${progress}%` }}
               />
            </div>
            <div className="flex justify-between w-64 px-1">
               <span className="text-[var(--gold)] font-mono text-[10px] font-black tabular-nums">
                 {Math.floor(progress)}%
               </span>
               <span className="text-white/20 uppercase tracking-[0.4em] text-[8px] font-black italic">
                 Authenticating_Soul
               </span>
            </div>
         </div>
      </div>

      <div className="fixed bottom-12 text-[8px] text-white/10 uppercase tracking-[0.4em] flex gap-16 font-black">
         <span>COORD: 20.2961° N, 85.8245° E</span>
         <span>© 2025_ARCHIVE_NODE</span>
      </div>
    </motion.div>
  );
};
