import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/SectionLabel';

export const StorySection: React.FC = () => {
  return (
    <section id="story" style={{ 
      minHeight: '100vh', 
      background: '#060c05', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '80px 10vw', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: '10%', width: '100%', left: 0 }}>
        <SectionLabel label="— THE STORY —" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '80px', marginTop: '10vh' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: 1 }}
        >
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '30px', 
            fontStyle: 'italic', 
            fontWeight: 400, 
            color: 'var(--text)', 
            lineHeight: 1.4 
          }}>
            "Pakhala is not just rice soaked in water. It is a summer morning in Odisha."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: 'clamp(280px, 30vw, 500px)',
            aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #1a2a16 0%, #060c05 70%)',
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
             {/* Abstract plate children */}
             <div style={{ width: '70%', height: '70%', borderRadius: '50%', border: '1px dashed rgba(201,169,110,0.2)' }} />
             <div style={{ position: 'absolute', width: '20px', height: '20px', background: 'var(--gold)', borderRadius: '50%', top: '20%', left: '30%' }} />
             <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#4ade80', borderRadius: '50%', bottom: '25%', right: '35%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
