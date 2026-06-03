import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import Tilt from 'react-parallax-tilt';

const CHEFS = [
  { name: 'Kamala Devi', city: 'Bhubaneswar', specialty: 'Pitha & Sweets' },
  { name: 'Sarat Panda', city: 'Cuttack', specialty: 'Seafood' },
  { name: 'Priya Mohanty', city: 'Puri', specialty: 'Mithai' }
];

export const ChefsSection: React.FC = () => {
  return (
    <section id="chefs" style={{ minHeight: '100vh', background: '#060c05', padding: '80px 10vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel label="— HOME CHEFS —" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', flex: 1, alignItems: 'center' }}>
        {CHEFS.map((chef, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
              <div style={{
                border: '1.5px solid var(--gold)',
                background: 'rgba(0,0,0,0.4)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 40px rgba(201,169,110,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                 {/* Abstract Avatar */}
                 <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold)' }} />
                 </div>

                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', margin: 0, lineHeight: 1 }}>{chef.name}</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {chef.city}
                    </p>
                 </div>
                 
                 <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '16px' }}>
                   {chef.specialty}
                 </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
