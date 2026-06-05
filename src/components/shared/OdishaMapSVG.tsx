import React from 'react';
import { District } from '@/types';
import { DISTRICTS } from '@/constants';

interface OdishaMapSVGProps {
  interactive?: boolean;
  highlightedDistrict?: string | null;
  onDistrictClick?: (district: District) => void;
  onDistrictHover?: (district: District | null) => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  className?: string;
}

export const OdishaMapSVG: React.FC<OdishaMapSVGProps> = ({
  interactive = false,
  highlightedDistrict,
  onDistrictClick,
  onDistrictHover,
  onMouseMove,
  className
}) => {
  return (
    <svg
      viewBox="-20 -20 540 460"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: '100%', overflow: 'visible' }}
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
        {DISTRICTS.map((d: District) => (
          <path
            key={d.id}
            d={d.path}
            fill={highlightedDistrict === d.id ? '#c8a96e' : d.color}
            stroke="#c8a96e"
            strokeWidth={highlightedDistrict === d.id ? 1.5 : 0.8}
            strokeOpacity={highlightedDistrict === d.id ? 1 : 0.6}
            opacity={1}
            filter={highlightedDistrict === d.id ? 'url(#districtHover)' : undefined}
            style={{ 
              cursor: interactive ? 'pointer' : 'default', 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}
            onMouseEnter={() => interactive && onDistrictHover?.(d)}
            onMouseMove={(e: React.MouseEvent) => interactive && onMouseMove?.(e)}
            onClick={() => interactive && onDistrictClick?.(d)}
          />
        ))}
      </g>

      {DISTRICTS.map((d: District) => {
        const finalX = d.id === 'khurda' ? d.labelX - 8 : d.labelX;
        const finalY = d.id === 'khurda' ? d.labelY - 4 : d.labelY;
        
        return (
          <text
            key={`label-${d.id}`}
            x={finalX}
            y={finalY}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontFamily="'Space Mono', monospace"
            fontWeight="700"
            opacity={highlightedDistrict === d.id ? 1 : 0.8}
            style={{ 
              pointerEvents: 'none', 
              userSelect: 'none', 
              transition: 'all 0.3s ease', 
              textShadow: '0 0 4px rgba(0,0,0,0.8)' 
            }}
          >
            {d.name}
          </text>
        );
      })}

      {/* Bhubaneswar dot near Khurda label */}
      <circle cx="360" cy="210" r="2.5" fill="#c8a96e">
        <animate attributeName="r" values="1.5;4;1.5" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="360" cy="210" r="1" fill="#fff"/>
      <text x="366" y="208" fill="#c8a96e" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">BBSR</text>
    </svg>
  );
};
