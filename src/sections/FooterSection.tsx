import React from 'react';
import { SectionLabel } from '../components/SectionLabel';

export const FooterSection: React.FC = () => {
  return (
    <footer style={{ 
      background: 'var(--bg)', 
      padding: '60px 10vw 80px', 
      borderTop: '1px solid var(--gold-dim)', 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    }}>
      <h2 style={{ fontSize: '64px', margin: 0 }}>
        SWAD ODISHA
      </h2>
      
      <SectionLabel label="Bringing Odisha's soul to your plate" />
      
      <p style={{ 
        fontFamily: 'var(--font-mono)', 
        fontSize: '11px', 
        color: 'var(--text-dim)', 
        letterSpacing: '0.1em',
        marginTop: '20px'
      }}>
        © 2025 HIMANSU NAYAK · MCA FINAL YEAR · RCM BHUBANESWAR
      </p>
    </footer>
  );
};
