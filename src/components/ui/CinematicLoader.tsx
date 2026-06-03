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
           className="relative w-40 h-40 flex items-center justify-center border border-white/5 bg-white/[0.01] rounded-full overflow-hidden"
         >
            <img 
              src="/src/assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png" 
              className="w-4/5 h-4/5 object-contain mix-blend-screen opacity-20 animate-pulse"
              alt="Loading Logo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
         </motion.div>

         <div className="flex flex-col items-center gap-4">
            <div className="font-['Playfair_Display'] text-[#FF4D00] text-3xl font-black tracking-widest uppercase">
              SWAD ODISHA
            </div>
            <div className="w-64 h-[1px] bg-white/10 overflow-hidden relative">
               <motion.div 
                 className="absolute inset-y-0 left-0 bg-[#FF4D00]"
                 style={{ width: `${progress}%` }}
               />
            </div>
            <div className="flex justify-between w-64 px-1">
               <span className="text-white font-mono text-[9px] font-black tabular-nums">
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
