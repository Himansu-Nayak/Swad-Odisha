import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

const stackItems = [
  "React 18", "TypeScript", "Vite 6", "Tailwind CSS", 
  "Framer Motion", "GSAP", "Three.js", "Lenis"
];

export const StackSection: React.FC = () => {
  return (
    <section style={{ minHeight: '70vh', background: '#060c05', padding: '80px 10vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel label="— BUILT WITH —" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', flex: 1, alignContent: 'center' }}>
        {stackItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            whileHover={{ y: -5, boxShadow: '0 0 20px rgba(201,169,110,0.2)', borderColor: 'var(--gold)' }}
            style={{
              border: '1px solid var(--gold-dim)',
              padding: '40px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.5)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
