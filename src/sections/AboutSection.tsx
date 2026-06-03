import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';
import { Github, Linkedin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section style={{ minHeight: '70vh', background: '#060c05', padding: '80px 10vw', display: 'flex', flexDirection: 'column', gap: '80px' }}>
      <SectionLabel label="— BUILT BY —" />

      <div style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <h2 style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.85, margin: 0 }}>
            HIMANSU NAYAK
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            MCA 2024–26 · RCM Bhubaneswar · Full-Stack Developer
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: 1.6, maxWidth: '500px' }}>
            Passionate about bridging cultural heritage with cutting-edge web technologies. Specializing in high-performance React architectures and immersive digital experiences.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            <a href="#" style={{ 
              width: '48px', height: '48px', 
              border: '1.5px solid var(--gold-dim)', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,169,110,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gold-dim)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <Github size={20} />
            </a>
            <a href="#" style={{ 
              width: '48px', height: '48px', 
              border: '1.5px solid var(--gold-dim)', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,169,110,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gold-dim)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ flex: 1, minWidth: '300px', display: 'flex', flexWrap: 'wrap', gap: '12px', alignContent: 'center' }}
        >
          {['React', 'TypeScript', 'Tailwind', 'GSAP', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'].map((skill, i) => (
            <div key={i} style={{
              border: '1px solid var(--gold)',
              borderRadius: '999px',
              padding: '8px 24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
