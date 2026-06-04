import React, { useState } from 'react';
import { SectionWrapper } from '@components/shared/SectionWrapper';
import { DecorativeRule } from '@components/shared/DecorativeRule';
import { OdishaMapSVG } from '@components/shared/OdishaMapSVG';
import { District } from '@types';
import { motion, AnimatePresence } from 'framer-motion';

export const Districts: React.FC = () => {
  const [hovered, setHovered] = useState<District | null>(null);
  const [selected, setSelected] = useState<District | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const svgElement = (e.target as SVGElement).closest('svg');
    if (!svgElement) return;
    const rect = svgElement.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <SectionWrapper id="districts" bg="#050301">
      <div className="mb-20">
        <DecorativeRule label="EXPLORE REGIONS" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 relative w-full aspect-[540/460]">
          <OdishaMapSVG 
            interactive 
            highlightedDistrict={hovered?.id || selected?.id}
            onDistrictHover={setHovered}
            onDistrictClick={setSelected}
            onMouseMove={handleMouseMove}
          />
          
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(4px)' }}
                transition={{ duration: 0.2 }}
                className="absolute pointer-events-none z-50 bg-[#0f0a05]/85 backdrop-blur-md border border-[var(--color-gold-dim)] rounded px-5 py-3 shadow-2xl"
                style={{ left: tooltipPos.x + 20, top: tooltipPos.y - 60 }}
              >
                <h4 className="font-[var(--font-display)] text-2xl text-[var(--color-text)] mb-1 uppercase tracking-wider">{hovered.name}</h4>
                <div className="w-full h-px bg-[var(--color-gold-dim)] my-2" />
                <p className="font-mono text-xs text-[var(--color-gold)] flex items-center gap-2">
                  <span className="text-lg">{hovered.foodEmoji}</span> {hovered.food}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-96 min-h-[300px] flex flex-col justify-center border border-[var(--color-border)] p-10 bg-black/40 backdrop-blur-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative z-10"
              >
                <span className="text-[10px] font-mono text-[var(--color-gold)] tracking-[0.3em] uppercase block mb-4">Selected Region</span>
                <h3 className="font-[var(--font-display)] text-5xl text-[var(--color-text)] mb-6 uppercase">{selected.name}</h3>
                <p className="text-[var(--color-text-muted)] font-[var(--font-body)] leading-relaxed mb-8">
                  Experience the unique culinary heritage of {selected.name}. Known for its iconic {selected.food}, this region brings a distinct flavor profile to the Swad Odisha collective.
                </p>
                <div className="p-4 border border-[var(--color-gold-dim)] bg-[var(--color-gold)]/5 rounded">
                  <span className="text-[10px] font-mono text-[var(--color-gold)] tracking-widest uppercase block mb-2">Signature Dish</span>
                  <p className="text-[var(--color-text)] text-lg flex items-center gap-3">
                    <span className="text-2xl">{selected.foodEmoji}</span> {selected.food}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-[var(--color-text-muted)] font-mono text-xs tracking-widest uppercase">Click a district to explore its flavors</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Background watermark */}
          <div className="absolute -bottom-10 -right-10 font-[var(--font-display)] text-[120px] text-white/5 pointer-events-none select-none">
            {selected?.id.slice(0, 2).toUpperCase() || 'OD'}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
