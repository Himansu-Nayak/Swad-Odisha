import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export const CulturalBackground: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.1, 0.02])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* BACKGROUND TEXTURE (Subtle Mud Wall feel) */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

      {/* SAMBALPURI IKAT SIDE BORDERS - Even more subtle */}
      <div className="absolute inset-y-0 left-0 w-4 bg-repeat-y opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(45deg, #8B0000 25%, transparent 25%, transparent 50%, #8B0000 50%, #8B0000 75%, transparent 75%, transparent)' , backgroundSize: '10px 10px' }} />
      <div className="absolute inset-y-0 right-0 w-4 bg-repeat-y opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(-45deg, #8B0000 25%, transparent 25%, transparent 50%, #8B0000 50%, #8B0000 75%, transparent 75%, transparent)' , backgroundSize: '10px 10px' }} />

      {/* LAYERED CULTURAL MOTIFS */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        
        {/* Pattachitra Border - Bottom */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-0 left-0 right-0 h-40 opacity-20"
        >
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <pattern id="pattachitra" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
               <path d="M0 50 Q50 0 100 50 T200 50" stroke="#C8A96E" fill="none" strokeWidth="2" />
               <circle cx="100" cy="50" r="10" stroke="#C8A96E" fill="none" />
               <path d="M80 50 L120 50 M100 30 L100 70" stroke="#C8A96E" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattachitra)" />
          </svg>
        </motion.div>

        {/* Saura/Adivasi Figures - Floating */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[20%] right-[10%] w-64 h-64 opacity-30"
        >
          <svg viewBox="0 0 100 100">
             <g transform="translate(50, 50)">
                {[0, 60, 120, 180, 240, 300].map((a) => (
                  <g key={a} transform={`rotate(${a}) translate(0, -30)`}>
                    <path d="M0 -5 L-4 5 L4 5 Z M0 5 L-4 15 L4 15 Z" stroke="#C8A96E" strokeWidth="0.5" fill="none" />
                    <circle cy="-8" r="2" stroke="#C8A96E" strokeWidth="0.5" />
                  </g>
                ))}
             </g>
          </svg>
        </motion.div>

        {/* Lotus Pond Reflection - Bottom Left */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-10 left-10 w-48 h-48 opacity-10"
        >
          <svg viewBox="0 0 100 100">
             <path d="M20 80 Q50 60 80 80" stroke="#C8A96E" fill="none" />
             <path d="M10 90 Q50 75 90 90" stroke="#C8A96E" fill="none" opacity="0.5" />
             <g transform="translate(50, 70)">
                <path d="M0 0 Q-10 -20 0 -30 Q10 -20 0 0" fill="#C8A96E" />
             </g>
          </svg>
        </motion.div>

      </motion.div>

      {/* Global Grain/Noise for Painterly Feel */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  )
}
