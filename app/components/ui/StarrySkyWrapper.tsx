'use client';

import { usePerformance } from '../../hooks/usePerformance';
import StarrySky from './StarrySky';
import ShootingStars from './ShootingStars';
import Constellations from './Constellations';

interface StarrySkyWrapperProps {
  children: React.ReactNode;
}

export default function StarrySkyWrapper({ children }: StarrySkyWrapperProps) {
  const { shouldShowStarrySky } = usePerformance();

  return (
    <>
      {shouldShowStarrySky && (
        <>
          <StarrySky />
          <ShootingStars />
          <Constellations />
        </>
      )}
      {children}
    </>
  );
} 