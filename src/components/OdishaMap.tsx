import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface District {
  id: string
  name: string
  food: string
  foodEmoji: string
  path: string
  labelX: number
  labelY: number
  color: string
}

const districts: District[] = [
  // NORTHERN BELT
  {
    id: 'mayurbhanj', name: 'Mayurbhanj', food: 'Chakuli Pitha', foodEmoji: '🥞',
    color: '#8B4513',
    path: 'M 295 18 L 355 22 L 390 35 L 408 55 L 415 80 L 400 105 L 375 118 L 345 122 L 318 115 L 298 95 L 288 70 L 290 45 Z',
    labelX: 348, labelY: 70
  },
  {
    id: 'balasore', name: 'Balasore', food: 'Mudhi Mansa', foodEmoji: '🍖',
    color: '#A0522D',
    path: 'M 355 22 L 395 18 L 420 30 L 432 55 L 425 80 L 408 55 L 390 35 Z',
    labelX: 400, labelY: 48
  },
  {
    id: 'keonjhar', name: 'Keonjhar', food: 'Bamboo Shoot Curry', foodEmoji: '🎋',
    color: '#6B8E23',
    path: 'M 240 30 L 295 18 L 290 45 L 298 95 L 278 115 L 252 118 L 228 100 L 220 72 L 228 48 Z',
    labelX: 258, labelY: 72
  },
  {
    id: 'sundargarh', name: 'Sundargarh', food: 'Pakhala Bhata', foodEmoji: '🍚',
    color: '#556B2F',
    path: 'M 148 25 L 200 20 L 240 30 L 228 48 L 220 72 L 200 95 L 175 105 L 148 98 L 130 75 L 132 48 Z',
    labelX: 185, labelY: 62
  },
  {
    id: 'jharsuguda', name: 'Jharsuguda', food: 'Chungdi Malai', foodEmoji: '🦐',
    color: '#8FBC8F',
    path: 'M 100 48 L 148 25 L 132 48 L 130 75 L 112 80 L 95 68 Z',
    labelX: 118, labelY: 58
  },
  // UPPER MIDDLE BELT
  {
    id: 'sambalpur', name: 'Sambalpur', food: 'Malpua', foodEmoji: '🫓',
    color: '#CD853F',
    path: 'M 95 68 L 112 80 L 130 75 L 148 98 L 175 105 L 185 128 L 168 148 L 145 158 L 118 152 L 95 138 L 80 115 L 82 90 Z',
    labelX: 130, labelY: 118
  },
  {
    id: 'bargarh', name: 'Bargarh', food: 'Bara Ghuguni', foodEmoji: '🫘',
    color: '#DAA520',
    path: 'M 60 85 L 95 68 L 82 90 L 80 115 L 62 125 L 48 108 L 52 92 Z',
    labelX: 68, labelY: 102
  },
  {
    id: 'deogarh', name: 'Deogarh', food: 'Arisa Pitha', foodEmoji: '🍩',
    color: '#B8860B',
    path: 'M 175 105 L 200 95 L 228 100 L 252 118 L 248 140 L 228 150 L 205 148 L 185 128 Z',
    labelX: 215, labelY: 128
  },
  {
    id: 'angul', name: 'Angul', food: 'Chhena Jhili', foodEmoji: '🍮',
    color: '#C5A028',
    path: 'M 252 118 L 278 115 L 318 115 L 328 138 L 315 158 L 290 165 L 268 158 L 248 140 Z',
    labelX: 288, labelY: 140
  },
  {
    id: 'dhenkanal', name: 'Dhenkanal', food: 'Chhena Poda', foodEmoji: '🍰',
    color: '#B5651D',
    path: 'M 318 115 L 345 122 L 375 118 L 388 138 L 375 158 L 352 165 L 328 158 L 315 158 L 328 138 Z',
    labelX: 350, labelY: 142
  },
  // COASTAL UPPER
  {
    id: 'bhadrak', name: 'Bhadrak', food: 'Kakara Pitha', foodEmoji: '🥮',
    color: '#4682B4',
    path: 'M 375 118 L 400 105 L 428 112 L 435 135 L 420 155 L 398 158 L 388 138 Z',
    labelX: 408, labelY: 138
  },
  {
    id: 'jajpur', name: 'Jajpur', food: 'Rasabali', foodEmoji: '🍯',
    color: '#5F9EA0',
    path: 'M 375 158 L 398 158 L 420 155 L 430 175 L 415 195 L 392 198 L 372 185 L 368 168 Z',
    labelX: 400, labelY: 178
  },
  {
    id: 'kendrapara', name: 'Kendrapara', food: 'Chenna Gaja', foodEmoji: '🧁',
    color: '#008B8B',
    path: 'M 415 195 L 435 190 L 448 210 L 440 230 L 422 235 L 408 218 Z',
    labelX: 428, labelY: 215
  },
  {
    id: 'jagatsinghpur', name: 'Jagatsinghpur', food: 'Kheer', foodEmoji: '🍶',
    color: '#2E8B57',
    path: 'M 408 218 L 422 235 L 418 252 L 400 258 L 388 242 L 390 225 Z',
    labelX: 405, labelY: 240
  },
  {
    id: 'cuttack', name: 'Cuttack', food: 'Dahibara Aludum', foodEmoji: '🥙',
    color: '#3CB371',
    path: 'M 352 165 L 375 158 L 368 168 L 372 185 L 392 198 L 390 225 L 388 242 L 368 248 L 345 238 L 335 215 L 340 192 L 345 175 Z',
    labelX: 368, labelY: 205
  },
  // MIDDLE BELT
  {
    id: 'sonepur', name: 'Sonepur', food: 'Manda Pitha', foodEmoji: '🫔',
    color: '#9ACD32',
    path: 'M 62 125 L 80 115 L 95 138 L 88 158 L 68 162 L 52 148 Z',
    labelX: 72, labelY: 143
  },
  {
    id: 'bolangir', name: 'Bolangir', food: 'Chenna Malpua', foodEmoji: '🥞',
    color: '#6B8E23',
    path: 'M 52 148 L 68 162 L 88 158 L 95 138 L 118 152 L 125 175 L 108 192 L 82 195 L 60 180 L 48 165 Z',
    labelX: 85, labelY: 172
  },
  {
    id: 'boudh', name: 'Boudh', food: 'Santula', foodEmoji: '🥗',
    color: '#808000',
    path: 'M 118 152 L 145 158 L 168 148 L 185 128 L 205 148 L 228 150 L 238 172 L 218 188 L 195 192 L 170 185 L 145 178 L 125 175 Z',
    labelX: 178, labelY: 168
  },
  {
    id: 'nayagarh', name: 'Nayagarh', food: 'Chhena Poda', foodEmoji: '🍰',
    color: '#6B4226',
    path: 'M 290 165 L 315 158 L 335 215 L 345 238 L 325 252 L 302 245 L 282 228 L 278 205 L 285 185 Z',
    labelX: 310, labelY: 208
  },
  {
    id: 'khurda', name: 'Khurda', food: 'Pahala Rasgulla', foodEmoji: '🍡',
    color: '#8B6914',
    path: 'M 345 238 L 368 248 L 372 265 L 358 280 L 338 278 L 325 265 L 325 252 Z',
    labelX: 348, labelY: 262
  },
  {
    id: 'puri', name: 'Puri', food: 'Khaja', foodEmoji: '🧇',
    color: '#CD6600',
    path: 'M 358 280 L 372 265 L 385 272 L 395 290 L 385 310 L 368 312 L 352 298 L 345 282 Z',
    labelX: 370, labelY: 292
  },
  // LOWER MIDDLE
  {
    id: 'kalahandi', name: 'Kalahandi', food: 'Maize Roti', foodEmoji: '🌽',
    color: '#A52A2A',
    path: 'M 60 180 L 82 195 L 108 192 L 125 210 L 118 235 L 98 252 L 72 255 L 50 240 L 45 215 L 50 195 Z',
    labelX: 82, labelY: 220
  },
  {
    id: 'kandhamal', name: 'Kandhamal', food: 'Turmeric Rice', foodEmoji: '🍛',
    color: '#B22222',
    path: 'M 195 192 L 218 188 L 238 172 L 265 178 L 278 205 L 282 228 L 265 242 L 240 248 L 215 238 L 198 218 Z',
    labelX: 238, labelY: 215
  },
  {
    id: 'gajapati', name: 'Gajapati', food: 'Bamboo Rice', foodEmoji: '🍙',
    color: '#800000',
    path: 'M 302 318 L 325 312 L 345 328 L 340 355 L 318 368 L 295 358 L 285 338 Z',
    labelX: 315, labelY: 340
  },
  {
    id: 'ganjam', name: 'Ganjam', food: 'Patrapoda', foodEmoji: '🍃',
    color: '#8B0000',
    path: 'M 240 260 L 265 242 L 282 228 L 302 245 L 325 265 L 338 278 L 345 282 L 352 298 L 368 312 L 360 335 L 345 328 L 325 312 L 302 318 L 285 338 L 265 330 L 245 312 L 228 290 L 225 268 Z',
    labelX: 295, labelY: 302
  },
  {
    id: 'rayagada', name: 'Rayagada', food: 'Red Ant Chutney', foodEmoji: '🌶️',
    color: '#6B0000',
    path: 'M 145 270 L 170 255 L 198 260 L 215 280 L 215 305 L 198 322 L 175 328 L 150 318 L 132 298 L 130 275 Z',
    labelX: 172, labelY: 295
  },
  {
    id: 'koraput', name: 'Koraput', food: 'Dali', foodEmoji: '🫕',
    color: '#500000',
    path: 'M 130 275 L 150 318 L 175 328 L 198 322 L 215 305 L 228 325 L 225 348 L 205 365 L 178 372 L 152 358 L 128 338 L 115 312 L 118 288 Z',
    labelX: 168, labelY: 335
  },
  {
    id: 'nabarangpur', name: 'Nabarangpur', food: 'Mahua Ladoo', foodEmoji: '🍬',
    color: '#3D0000',
    path: 'M 82 252 L 98 252 L 118 270 L 130 275 L 118 288 L 115 312 L 95 320 L 70 308 L 55 285 L 60 262 Z',
    labelX: 88, labelY: 290
  },
  {
    id: 'malkangiri', name: 'Malkangiri', food: 'Mushroom Curry', foodEmoji: '🍄',
    color: '#2A0000',
    path: 'M 95 320 L 115 312 L 128 338 L 152 358 L 145 378 L 120 388 L 95 378 L 75 358 L 68 335 L 72 318 Z',
    labelX: 108, labelY: 352
  },
  // NUAPADA
  {
    id: 'nuapada', name: 'Nuapada', food: 'Chila', foodEmoji: '🥞',
    color: '#704214',
    path: 'M 45 215 L 72 255 L 82 252 L 60 262 L 55 285 L 38 270 L 30 248 L 35 225 Z',
    labelX: 52, labelY: 250
  },
]

export default function OdishaMap() {
  const [hovered, setHovered] = useState<District | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg
        viewBox="0 0 500 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Drop shadow filter */}
        <defs>
          <filter id="mapGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#c9a96e" floodOpacity="0.3"/>
          </filter>
          <filter id="districtHover">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.5"/>
          </filter>
        </defs>

        {/* Outer state glow */}
        <g filter="url(#mapGlow)">
          {districts.map((d) => (
            <path
              key={d.id}
              d={d.path}
              fill={d.color}
              stroke="#c9a96e"
              strokeWidth={hovered?.id === d.id ? 2.5 : 1}
              opacity={hovered?.id === d.id ? 1 : 0.82}
              filter={hovered?.id === d.id ? 'url(#districtHover)' : undefined}
              style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => {
                setHovered(d)
                const rect = (e.target as SVGElement).closest('svg')!.getBoundingClientRect()
                setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
              }}
              onMouseMove={(e) => {
                const rect = (e.target as SVGElement).closest('svg')!.getBoundingClientRect()
                setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
              }}
            />
          ))}
        </g>

        {/* District name labels */}
        {districts.map((d) => (
          <text
            key={`label-${d.id}`}
            x={d.labelX}
            y={d.labelY}
            textAnchor="middle"
            fill="#f0e6d3"
            fontSize="7"
            fontFamily="'Space Mono', monospace"
            fontWeight="700"
            opacity={hovered?.id === d.id ? 1 : 0.75}
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {d.name}
          </text>
        ))}

        {/* Food emoji labels on hover */}
        {hovered && (
          <text
            x={hovered.labelX}
            y={hovered.labelY + 11}
            textAnchor="middle"
            fontSize="9"
            style={{ pointerEvents: 'none' }}
          >
            {hovered.foodEmoji}
          </text>
        )}

        {/* Bhubaneswar capital pulse dot */}
        <circle cx="368" cy="248" r="4" fill="#c9a96e">
          <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="368" cy="248" r="2.5" fill="#fff"/>
        <text x="374" y="245" fill="#c9a96e" fontSize="7" fontFamily="'Space Mono', monospace">BBSR</text>
      </svg>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute',
              left: tooltipPos.x + 14,
              top: tooltipPos.y - 40,
              pointerEvents: 'none',
              background: 'rgba(5,3,1,0.95)',
              border: '1.5px solid #c9a96e',
              padding: '10px 16px',
              zIndex: 20,
              whiteSpace: 'nowrap',
            }}
          >
            <p style={{ fontFamily: "'Bebas Neue'", fontSize: '18px', color: '#f0e6d3', margin: 0, letterSpacing: '0.08em' }}>
              {hovered.name}
            </p>
            <p style={{ fontFamily: "'Space Mono'", fontSize: '11px', color: '#c9a96e', margin: '4px 0 0', letterSpacing: '0.05em' }}>
              {hovered.foodEmoji} {hovered.food}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
