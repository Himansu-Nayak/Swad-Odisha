import React, { useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroMap } from './HeroMap';
import { HeroContent } from './HeroContent';
import { HeroNavbar } from './HeroNavbar';
import { HeroSidebar } from './HeroSidebar';
import { HeroFooterBar } from './HeroFooterBar';
import './hero.css';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 150 });

  const textX = useTransform(springX, [-1000, 1000], [20, -20]);
  const textY = useTransform(springY, [-1000, 1000], [20, -20]);

  const mapX = useTransform(springX, [-1000, 1000], [-40, 40]);
  const mapY = useTransform(springY, [-1000, 1000], [-40, 40]);
  const mapRotateX = useTransform(springY, [-1000, 1000], [10, -10]);
  const mapRotateY = useTransform(springX, [-1000, 1000], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', perspective: '1500px', background: 'var(--bg)' }}>
      <HeroBackground textX={textX} textY={textY} />
      <HeroMap mapX={mapX} mapY={mapY} mapRotateX={mapRotateX} mapRotateY={mapRotateY} />
      <HeroContent />
      <HeroSidebar />
      <HeroNavbar />
      <HeroFooterBar />
    </section>
  );
};
