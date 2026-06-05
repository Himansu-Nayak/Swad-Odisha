import { motion } from 'framer-motion'

export function OdissiDancer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative w-full h-full flex justify-center items-center"
    >
      {/* Cinematic Rim Lighting & Sunset Background Glow */}
      <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_center,rgba(200,169,110,0.18)_0%,transparent_70%)] pointer-events-none mix-blend-screen z-0" />
      <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_bottom,rgba(139,0,0,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen z-0" />

      <svg
        viewBox="0 0 1000 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[1000px] z-10"
      >
        <defs>
          {/* Enhanced Crimson & Gold Gradients */}
          <linearGradient id="silk-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A0000" />
            <stop offset="30%" stopColor="#8B0000" />
            <stop offset="70%" stopColor="#A52A2A" />
            <stop offset="100%" stopColor="#4A0000" />
          </linearGradient>
          
          <linearGradient id="gold-bright" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F9E29C" />
            <stop offset="50%" stopColor="#C8A96E" />
            <stop offset="100%" stopColor="#8B6B32" />
          </linearGradient>

          {/* Hyper-Detailed Rim Light Filter */}
          <filter id="rim-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feSpecularLighting surfaceScale="6" specularConstant="1.2" specularExponent="35" lightingColor="#F9E29C" in="blur" result="specOut">
              <fePointLight x="500" y="100" z="400" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceGraphic" operator="in" result="specChar" />
            <feComposite in="SourceGraphic" in2="specChar" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>

          {/* Sambalpuri Ikat Texture Pattern */}
          <pattern id="ikat-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M0 5 L5 0 L10 5 L5 10 Z" fill="#C8A96E" fillOpacity="0.2" />
          </pattern>
        </defs>

        {/* LAYER 1: THE KONARK SUN TEMPLE WHEEL (Deep Detail) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          transform="translate(500, 550)"
        >
          <circle r="460" stroke="#C8A96E" strokeWidth="1" opacity="0.2" />
          <circle r="450" stroke="#C8A96E" strokeWidth="4" opacity="0.4" />
          <circle r="435" stroke="#C8A96E" strokeWidth="1" opacity="0.1" />
          
          {/* Main Spokes with Carvings */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path d="M0 -80 L0 -430" stroke="#C8A96E" strokeWidth="12" opacity="0.2" />
              <path d="M-10 -150 L10 -150 Q0 -250 -10 -150" fill="#C8A96E" opacity="0.1" />
              {/* Symbolic Jagannath Wheel Eye */}
              <circle cy="-300" r="15" stroke="#C8A96E" strokeWidth="1" opacity="0.3" />
              <path d="M-5 -300 L5 -300 M0 -305 L0 -295" stroke="#C8A96E" strokeWidth="0.5" opacity="0.5" />
            </g>
          ))}

          {/* Outer Rim Details (Wheel Spokes) */}
          <circle r="445" stroke="#C8A96E" strokeWidth="15" strokeDasharray="1 12" opacity="0.15" />
          <circle r="455" stroke="#C8A96E" strokeWidth="2" strokeDasharray="5 5" opacity="0.1" />
        </motion.g>

        {/* LAYER 2: THE ODISSI DANCER (Hyper-Detailed) */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          filter="url(#rim-light)"
        >
          {/* SAMBALPURI PATRU SAREE (Crimson & Gold) */}
          <path
            d="
              M500,220 
              C535,220 560,245 560,280 
              C560,315 535,340 500,340 
              C465,340 440,315 440,280 
              C440,245 465,220 500,220 
              
              M500,340 L500,370 
              
              /* ICONIC TRIBHANGA POSE (Sharp Bends) */
              C500,370 680,420 680,600 
              C680,750 580,820 500,880 
              C420,940 360,1020 360,1180 
              L280,1350 
              
              M500,880 
              C580,940 640,1020 640,1180 
              L720,1350 
              
              M500,370 
              C420,400 310,480 310,600 
              C310,750 420,820 500,880 
            "
            fill="url(#silk-crimson)"
            stroke="#C8A96E"
            strokeWidth="0.5"
          />

          {/* SAREE TEXTURE (Ikat Overlay) */}
          <path
            d="M500,370 C500,370 680,420 680,600 C680,750 580,820 500,880 C420,940 360,1020 360,1180 L280,1350"
            fill="url(#ikat-pattern)"
            opacity="0.2"
          />

          {/* FACIAL EXPRESSION (Serene/Divine) */}
          <g transform="translate(500, 280)">
             {/* Kajal Eyes */}
             <path d="M-15 -5 Q0 -12 15 -5" stroke="black" strokeWidth="2" opacity="0.8" />
             <path d="M-15 -5 Q0 2 15 -5" stroke="black" strokeWidth="1" opacity="0.4" />
             {/* Bindi */}
             <circle cy="-15" r="3" fill="#8B0000" />
             {/* Lips (Crimson) */}
             <path d="M-8 15 Q0 22 8 15 Q0 18 -8 15" fill="#8B0000" />
          </g>

          {/* MAHURI HEADPIECE (Hyper-Filigree) */}
          <g transform="translate(500, 220)">
             <path d="M-70 0 Q0 -100 70 0" stroke="#E0E0E0" strokeWidth="3" fill="none" />
             <path d="M-50 -25 Q0 -80 50 -25" stroke="#E0E0E0" strokeWidth="1.5" fill="none" />
             {/* Detailed Silver Spikes */}
             {[-60, -40, -20, 0, 20, 40, 60].map((x) => (
               <path key={x} d={`M${x} 0 L${x*1.2} -40`} stroke="#E0E0E0" strokeWidth="0.5" opacity="0.6" />
             ))}
             {/* Jasmine Garland */}
             {[-75, -55, -35, -15, 15, 35, 55, 75].map((x, i) => (
               <circle key={i} cx={x} cy="-10" r="4" fill="white" stroke="#E0E0E0" strokeWidth="0.2" />
             ))}
          </g>

          {/* TARAKASI JEWELRY (High Filigree) */}
          <g stroke="#E0E0E0" strokeWidth="1" fill="none">
             {/* Heavy Necklaces (Haru) */}
             <path d="M450 350 Q500 420 550 350" strokeWidth="3" opacity="0.9" />
             <path d="M440 370 Q500 450 560 370" strokeWidth="1.5" opacity="0.7" />
             <path d="M430 390 Q500 480 570 390" strokeWidth="1" opacity="0.5" />
             
             {/* MEKHALA (Waist Band) - Heavy Gold */}
             <path d="M430 820 Q500 870 570 820" stroke="#C8A96E" strokeWidth="6" />
             <path d="M420 840 Q500 900 580 840" stroke="#C8A96E" strokeWidth="2" opacity="0.6" />
             {/* Filigree drops */}
             {[450, 480, 500, 520, 550].map(x => (
               <circle key={x} cx={x} cy="860" r="2" fill="#C8A96E" />
             ))}
             
             {/* NUPUR (Silver Anklets) */}
             <g transform="translate(0, 1150)">
               <path d="M340 50 L420 50" strokeWidth="6" strokeDasharray="2 2" />
               <path d="M580 50 L660 50" strokeWidth="6" strokeDasharray="2 2" />
             </g>
          </g>

          {/* MUDRAS & HANDS (Alapadma & Pataka) */}
          <g stroke="#C8A96E" strokeWidth="3" fill="none" strokeLinecap="round">
             {/* Detailed Fingers for Alapadma (Left) */}
             <g transform="translate(250, 450) rotate(-30)">
                <path d="M0 0 L-60 -40" />
                <path d="M-60 -40 Q-80 -60 -70 -80" strokeWidth="1" />
                <path d="M-60 -40 Q-90 -40 -100 -60" strokeWidth="1" />
                <path d="M-60 -40 Q-90 -20 -100 0" strokeWidth="1" />
             </g>
             
             {/* Right Hand Pataka Mudra */}
             <g transform="translate(750, 450) rotate(30)">
                <path d="M0 0 L60 -40" />
                <path d="M60 -40 L90 -100" />
                <path d="M60 -40 L100 -90" strokeWidth="1" opacity="0.7" />
                <path d="M60 -40 L110 -80" strokeWidth="1" opacity="0.5" />
             </g>
          </g>

          {/* GOLD BORDERS (Sambalpuri Ikat Weave) */}
          <path 
            d="M310 600 Q500 650 680 600" 
            stroke="url(#gold-bright)" 
            strokeWidth="15" 
            strokeDasharray="8 4" 
          />
          <path 
            d="M280 1350 L720 1350" 
            stroke="url(#gold-bright)" 
            strokeWidth="20" 
            strokeDasharray="10 5" 
          />
        </motion.g>

        {/* LAYER 3: ADIVASI & PATTACHITRA ELEMENTS */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 2 }}
        >
          {/* Saura Figures (Adibasi Paintings) */}
          <g transform="translate(100, 800) scale(1.2)">
             {[0, 40, 80].map(x => (
               <g key={x} transform={`translate(${x}, 0)`}>
                 <path d="M20 10 L10 25 L30 25 Z M20 25 L10 40 L30 40 Z" stroke="#C8A96E" strokeWidth="1.5" />
                 <circle cx="20" cy="7" r="4" stroke="#C8A96E" strokeWidth="1" />
               </g>
             ))}
          </g>

          {/* Diya Lamps (Glowing) */}
          {[150, 850].map((x, i) => (
            <g key={i} transform={`translate(${x}, 1050)`}>
               <path d="M-30 0 Q0 30 30 0 Z" fill="#8B4513" />
               <motion.path 
                 d="M-5 -10 Q0 -40 5 -10 Z" 
                 fill="#FFD700" 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
               <circle r="20" fill="url(#gold-glow)" opacity="0.2" />
            </g>
          ))}
        </motion.g>
        
        <defs>
          <radialGradient id="gold-glow">
            <stop offset="0%" stopColor="#C8A96E" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-20" />
    </motion.div>
  )
}
