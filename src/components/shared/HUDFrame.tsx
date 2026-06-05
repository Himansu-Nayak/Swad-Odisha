import React from 'react';
import { motion } from 'framer-motion';

export function HUDFrame() {
  return (
    <>
      {/* Scanline Effect */}
      <div className="scanline fixed inset-0 z-[var(--hud-z)] opacity-[0.03] pointer-events-none" />

      {/* Top Border */}
      <div className="hud-border top-0 left-0 w-full h-[1px]" />
      {/* Bottom Border */}
      <div className="hud-border bottom-0 left-0 w-full h-[1px]" />
      {/* Left Border */}
      <div className="hud-border top-0 left-0 h-full w-[1px]" />
      {/* Right Border */}
      <div className="hud-border top-0 right-0 h-full w-[1px]" />

      {/* Corner Brackets */}
      <div className="fixed top-8 left-8 w-4 h-4 border-t border-l border-white/20 z-[var(--hud-z)]" />
      <div className="fixed top-8 right-8 w-4 h-4 border-t border-r border-white/20 z-[var(--hud-z)]" />
      <div className="fixed bottom-8 left-8 w-4 h-4 border-b border-l border-white/20 z-[var(--hud-z)]" />
      <div className="fixed bottom-8 right-8 w-4 h-4 border-b border-r border-white/20 z-[var(--hud-z)]" />
    </>
  );
}
