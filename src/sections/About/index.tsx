import React from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { motion } from 'framer-motion';
import { AboutVisual } from './AboutVisual';
import { OdissiDancer } from '@/components/shared/OdissiDancerSVG';

const STORY_SEGMENTS = [
  { text: "ଓଡ଼ିଶାର ପ୍ରତିଟି ରୋଷେଇଘର ଏକ କାହାଣୀ କୁହେ । 🏠✨", delay: 0 },
  { text: "ଏହା କେବଳ ଖାଦ୍ୟ ନୁହେଁ, ଏହା ଆମର ପରମ୍ପରା ଓ ସଂସ୍କୃତି । 🌾🏺", delay: 0.8 },
  { text: "ସ୍ୱାଦ ଓଡ଼ିଶା - ମାଟିର ବାସ୍ନା, ମନର ତୃପ୍ତି । 🥘❤️", delay: 1.6 },
];

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" bg="#0a1a0a" className="justify-center">
      {/* Background Mural - Contained within section */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[min(90vw,1000px)] h-auto">
          <OdissiDancer />
        </div>
      </div>
      
      <div className="absolute top-20 left-0 w-full z-20">
        <DecorativeRule label="THE STORY / ଆମ କାହାଣୀ" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
        <div className="max-w-4xl space-y-12">
          {STORY_SEGMENTS.map((segment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: segment.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-odia text-[clamp(28px,5vw,48px)] font-light leading-relaxed text-white/90" 
                 style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}>
                {segment.text}
              </p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <div className="w-24 h-[1px] bg-gold/40" />
            <span className="font-mono text-[10px] text-gold tracking-[0.8em] uppercase">
              Ancient_Wisdom_Archives
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-12 z-10 hidden md:block">
        <AboutVisual />
      </div>
    </SectionWrapper>
  );
};
