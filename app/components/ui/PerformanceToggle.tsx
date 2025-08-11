'use client';

import { usePerformance } from '../../hooks/usePerformance';

export default function PerformanceToggle() {
  const { shouldShowStarrySky, isLowPerformance, toggleStarrySky } = usePerformance();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleStarrySky}
        className="p-3 bg-transparent hover:bg-white/10 text-white rounded-full transition-colors duration-200"
        title={shouldShowStarrySky ? "Activar modo rendimiento" : "Activar estrellas"}
      >
        {shouldShowStarrySky ? '⚡' : '🌙'}
      </button>
    </div>
  );
} 