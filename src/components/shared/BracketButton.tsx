import React from 'react';
import { motion } from 'framer-motion';

interface BracketButtonProps {
  label: string;
  onClick?: () => void;
}

export const BracketButton: React.FC<BracketButtonProps> = ({ label, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(201,169,110,0.35)' }}
      style={{
        position: 'relative',
        background: 'rgba(0,0,0,0.5)',
        border: '1.5px solid var(--gold)',
        color: 'var(--text)',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        padding: '14px 44px',
        cursor: 'pointer'
      }}
    >
      {/* 4 corner spans */}
      <span style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px' }}>
        <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1.5px', background: 'var(--gold)' }} />
        <span style={{ position: 'absolute', top: 0, left: 0, width: '1.5px', height: '100%', background: 'var(--gold)' }} />
      </span>
      <span style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px' }}>
        <span style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '1.5px', background: 'var(--gold)' }} />
        <span style={{ position: 'absolute', top: 0, right: 0, width: '1.5px', height: '100%', background: 'var(--gold)' }} />
      </span>
      <span style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px' }}>
        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1.5px', background: 'var(--gold)' }} />
        <span style={{ position: 'absolute', bottom: 0, left: 0, width: '1.5px', height: '100%', background: 'var(--gold)' }} />
      </span>
      <span style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px' }}>
        <span style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '1.5px', background: 'var(--gold)' }} />
        <span style={{ position: 'absolute', bottom: 0, right: 0, width: '1.5px', height: '100%', background: 'var(--gold)' }} />
      </span>

      {label}
    </motion.button>
  );
};
