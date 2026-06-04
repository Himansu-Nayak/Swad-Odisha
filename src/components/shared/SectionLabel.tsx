import React from 'react';

interface SectionLabelProps {
  label: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, width: '100%' }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--gold-dim)' }} />
      <span style={{ 
        fontFamily: 'var(--font-mono)', 
        fontSize: '11px', 
        letterSpacing: '0.32em', 
        color: 'var(--gold)', 
        textTransform: 'uppercase', 
        padding: '0 20px', 
        whiteSpace: 'nowrap' 
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--gold-dim)' }} />
    </div>
  );
};
