const fs = require('fs');

const pathData = JSON.parse(fs.readFileSync('odisha_paths.json', 'utf8'));

// Mapping for the 30 districts with food
const districtsInput = [
  { id: 'mayurbhanj', name: 'Mayurbhanj', mappedName: 'Mayurbhanj', food: 'Chakuli Pitha', foodEmoji: '🥞', color: '#8B4513' },
  { id: 'balasore', name: 'Balasore', mappedName: 'Baleshwar', food: 'Mudhi Mansa', foodEmoji: '🍖', color: '#A0522D' },
  { id: 'keonjhar', name: 'Keonjhar', mappedName: 'Keonjhar', food: 'Bamboo Shoot Curry', foodEmoji: '🎋', color: '#6B8E23' },
  { id: 'sundargarh', name: 'Sundargarh', mappedName: 'Sundargarh', food: 'Pakhala Bhata', foodEmoji: '🍚', color: '#556B2F' },
  { id: 'jharsuguda', name: 'Jharsuguda', mappedName: 'Jharsuguda', food: 'Chungdi Malai', foodEmoji: '🦐', color: '#8FBC8F' },
  
  { id: 'sambalpur', name: 'Sambalpur', mappedName: 'Sambalpur', food: 'Malpua', foodEmoji: '🫓', color: '#CD853F' },
  { id: 'bargarh', name: 'Bargarh', mappedName: 'Baragarh', food: 'Bara Ghuguni', foodEmoji: '🫘', color: '#DAA520' },
  { id: 'deogarh', name: 'Deogarh', mappedName: 'Deogarh', food: 'Arisa Pitha', foodEmoji: '🍩', color: '#B8860B' },
  { id: 'angul', name: 'Angul', mappedName: 'Angul', food: 'Chhena Jhili', foodEmoji: '🍮', color: '#C5A028' },
  { id: 'dhenkanal', name: 'Dhenkanal', mappedName: 'Dhenkanal', food: 'Chhena Poda', foodEmoji: '🍰', color: '#B5651D' },
  
  { id: 'bhadrak', name: 'Bhadrak', mappedName: 'Bhadrak', food: 'Kakara Pitha', foodEmoji: '🥮', color: '#4682B4' },
  { id: 'jajpur', name: 'Jajpur', mappedName: 'Jajpur', food: 'Rasabali', foodEmoji: '🍯', color: '#5F9EA0' },
  { id: 'kendrapara', name: 'Kendrapara', mappedName: 'Kendrapara', food: 'Chenna Gaja', foodEmoji: '🧁', color: '#008B8B' },
  { id: 'jagatsinghpur', name: 'Jagatsinghpur', mappedName: 'Jagatsinghpur', food: 'Kheer', foodEmoji: '🍶', color: '#2E8B57' },
  { id: 'cuttack', name: 'Cuttack', mappedName: 'Cuttack', food: 'Dahibara Aludum', foodEmoji: '🥙', color: '#3CB371' },
  
  { id: 'sonepur', name: 'Sonepur', mappedName: 'Sonepur', food: 'Manda Pitha', foodEmoji: '🫔', color: '#9ACD32' },
  { id: 'bolangir', name: 'Bolangir', mappedName: 'Bolangir', food: 'Chenna Malpua', foodEmoji: '🥞', color: '#6B8E23' },
  { id: 'boudh', name: 'Boudh', mappedName: 'Boudh', food: 'Santula', foodEmoji: '🥗', color: '#808000' },
  { id: 'nayagarh', name: 'Nayagarh', mappedName: 'Nayagarh', food: 'Chhena Poda', foodEmoji: '🍰', color: '#6B4226' },
  { id: 'khurda', name: 'Khurda', mappedName: 'Khordha', food: 'Pahala Rasgulla', foodEmoji: '🍡', color: '#8B6914' },
  { id: 'puri', name: 'Puri', mappedName: 'Puri', food: 'Khaja', foodEmoji: '🧇', color: '#CD6600' },
  
  { id: 'kalahandi', name: 'Kalahandi', mappedName: 'Kalahandi', food: 'Maize Roti', foodEmoji: '🌽', color: '#A52A2A' },
  { id: 'kandhamal', name: 'Kandhamal', mappedName: 'Kandhamal', food: 'Turmeric Rice', foodEmoji: '🍛', color: '#B22222' },
  { id: 'gajapati', name: 'Gajapati', mappedName: 'Gajapati', food: 'Bamboo Rice', foodEmoji: '🍙', color: '#800000' },
  { id: 'ganjam', name: 'Ganjam', mappedName: 'Ganjam', food: 'Patrapoda', foodEmoji: '🍃', color: '#8B0000' },
  { id: 'rayagada', name: 'Rayagada', mappedName: 'Rayagada', food: 'Red Ant Chutney', foodEmoji: '🌶️', color: '#6B0000' },
  { id: 'koraput', name: 'Koraput', mappedName: 'Koraput', food: 'Dali', foodEmoji: '🫕', color: '#500000' },
  { id: 'nabarangpur', name: 'Nabarangpur', mappedName: 'Nabarangpur', food: 'Mahua Ladoo', foodEmoji: '🍬', color: '#3D0000' },
  { id: 'malkangiri', name: 'Malkangiri', mappedName: 'Malkangiri', food: 'Mushroom Curry', foodEmoji: '🍄', color: '#2A0000' },
  { id: 'nuapada', name: 'Nuapada', mappedName: 'Nuapada', food: 'Chila', foodEmoji: '🥞', color: '#704214' }
];

let outArr = "[\n";
for (let d of districtsInput) {
   let pd = pathData[d.mappedName];
   if(!pd) {
      console.error("Could not find path for " + d.mappedName);
      process.exit(1);
   }
   outArr += `  {
    id: '${d.id}', name: '${d.name}', food: '${d.food}', foodEmoji: '${d.foodEmoji}', color: '${d.color}',
    path: '${pd.path}', labelX: ${pd.labelX}, labelY: ${pd.labelY}
  },\n`;
}
outArr += "]";

const componentStr = `import { useState } from 'react'
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

const districts: District[] = ${outArr};

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
        <defs>
          <filter id="mapGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#c9a96e" floodOpacity="0.3"/>
          </filter>
          <filter id="districtHover">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ffffff" floodOpacity="0.5"/>
          </filter>
        </defs>

        <g filter="url(#mapGlow)">
          {districts.map((d) => (
            <path
              key={d.id}
              d={d.path}
              fill={d.color}
              stroke="#c9a96e"
              strokeWidth={hovered?.id === d.id ? 1.5 : 0.6}
              strokeOpacity={hovered?.id === d.id ? 1 : 0.4}
              opacity={1}
              filter={hovered?.id === d.id ? 'url(#districtHover)' : undefined}
              style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
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

        {districts.map((d) => {
          // Adjust Khurda label slightly to avoid BBSR dot collision
          const finalX = d.id === 'khurda' ? d.labelX - 8 : d.labelX;
          const finalY = d.id === 'khurda' ? d.labelY - 4 : d.labelY;
          
          return (
            <text
              key={\`label-\${d.id}\`}
              x={finalX}
              y={finalY}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="7.5"
              fontFamily="'Space Mono', monospace"
              fontWeight="700"
              opacity={hovered?.id === d.id ? 1 : 0.5}
              style={{ pointerEvents: 'none', userSelect: 'none', transition: 'all 0.3s ease' }}
            >
              {d.name}
            </text>
          );
        })}

        {hovered && (
          <text
            x={hovered.labelX}
            y={hovered.labelY + 10}
            textAnchor="middle"
            fontSize="12"
            style={{ pointerEvents: 'none' }}
          >
            {hovered.foodEmoji}
          </text>
        )}

        {/* Bhubaneswar dot near Khurda label */}
        <circle cx="360" cy="210" r="2.5" fill="#c9a96e">
          <animate attributeName="r" values="1.5;4;1.5" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="360" cy="210" r="1" fill="#fff"/>
        <text x="366" y="208" fill="#c9a96e" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">BBSR</text>
      </svg>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(4px)' }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: tooltipPos.x + 20,
              top: tooltipPos.y - 60,
              pointerEvents: 'none',
              background: 'rgba(15, 10, 5, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(201, 169, 110, 0.5)',
              borderRadius: '4px',
              padding: '12px 20px',
              zIndex: 50,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(201, 169, 110, 0.1)',
            }}
          >
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '8px', height: '8px', borderTop: '1.5px solid #c9a96e', borderLeft: '1.5px solid #c9a96e' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '8px', height: '8px', borderBottom: '1.5px solid #c9a96e', borderRight: '1.5px solid #c9a96e' }} />
            
            <p style={{ fontFamily: "'Bebas Neue'", fontSize: '22px', color: '#f0e6d3', margin: 0, letterSpacing: '0.1em', lineHeight: 1 }}>
              {hovered.name}
            </p>
            <div style={{ width: '100%', height: '1px', background: 'rgba(201, 169, 110, 0.3)', margin: '8px 0' }} />
            <p style={{ fontFamily: "'Space Mono'", fontSize: '12px', color: '#c9a96e', margin: 0, letterSpacing: '0.05em' }}>
              <span style={{ fontSize: '16px', marginRight: '8px' }}>{hovered.foodEmoji}</span>
              {hovered.food}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
`;

fs.writeFileSync('src/components/OdishaMap.tsx', componentStr);
console.log('Successfully wrote src/components/OdishaMap.tsx');
