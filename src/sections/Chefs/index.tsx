import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { DecorativeRule } from '@/components/shared/DecorativeRule';
import { CHEFS } from '@/constants';
import Tilt from 'react-parallax-tilt';
import { ShieldCheck, Award } from 'lucide-react';

export const Chefs: React.FC = () => {
  return (
    <SectionWrapper id="chefs" bg="#060c05">
      <div className="mb-24">
        <DecorativeRule label="THE KEEPERS / ମାଷ୍ଟର ଚେଫ୍" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {CHEFS.map((chef: any, i: number) => (
          <motion.div
            key={chef.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2500}>
              <div className="group border border-gold/30 bg-black/40 p-10 flex flex-col items-center text-center gap-6 relative overflow-hidden transition-all duration-500 hover:border-gold/60 hover:bg-black/60 rounded-xl backdrop-blur-sm">
                 {/* Decorative background light */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/15 transition-colors" />

                 {/* Avatar with Emoji */}
                 <div className="w-24 h-24 rounded-full border border-gold/20 p-2 group-hover:border-gold/50 transition-colors relative">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/10 transition-all">
                      <span className="text-4xl">👨‍🍳</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-black border border-gold/30 rounded-full p-1 group-hover:border-gold transition-colors">
                      <Award size={14} className="text-gold" />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2 relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="font-mono text-[9px] text-gold tracking-widest uppercase opacity-60">Master Keeper</span>
                    </div>
                    <h3 className="font-display text-4xl text-white leading-tight group-hover:text-gold transition-colors italic">
                      {chef.name}
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
                      <p className="font-mono text-[10px] text-gold uppercase tracking-[0.2em]">
                        {chef.city}
                      </p>
                    </div>
                 </div>
                 
                 <p className="text-sm text-white/40 font-body leading-relaxed italic border-l border-gold/20 pl-6 text-left">
                   "{chef.bio}"
                 </p>

                 <div className="flex flex-col w-full gap-4 mt-4">
                    <div className="font-mono text-[11px] text-gold uppercase tracking-[0.3em] border-t border-gold/10 pt-4 w-full">
                      {chef.specialty}
                    </div>
                    <div className="flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                       <ShieldCheck size={14} className="text-gold" />
                       <span className="font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">Verified_Custodian</span>
                    </div>
                 </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
