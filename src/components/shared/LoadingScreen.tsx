import React from 'react';
import { CinematicLoader } from '@components/ui/CinematicLoader';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return <CinematicLoader onComplete={onComplete} />;
};
