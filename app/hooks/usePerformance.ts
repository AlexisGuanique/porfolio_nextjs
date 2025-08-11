'use client';

import { useState, useEffect } from 'react';

export function usePerformance() {
  const [shouldShowStarrySky, setShouldShowStarrySky] = useState(true);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      // Verificar preferencia guardada
      const savedPreference = localStorage.getItem('disableStarrySky');
      
      if (savedPreference === 'true') {
        setShouldShowStarrySky(false);
        setIsLowPerformance(true);
        return;
      }

      // Detectar dispositivos de bajo rendimiento
      const memory = (navigator as any).deviceMemory;
      const cores = (navigator as any).hardwareConcurrency;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      const hasLowMemory = memory && memory < 4;
      const hasLowCores = cores && cores < 4;
      
      if (isMobile || hasLowMemory || hasLowCores) {
        setShouldShowStarrySky(false);
        setIsLowPerformance(true);
        localStorage.setItem('disableStarrySky', 'true');
      }
    };

    checkPerformance();
  }, []);

  const toggleStarrySky = () => {
    const newValue = !shouldShowStarrySky;
    setShouldShowStarrySky(newValue);
    setIsLowPerformance(!newValue);
    localStorage.setItem('disableStarrySky', (!newValue).toString());
  };

  return {
    shouldShowStarrySky,
    isLowPerformance,
    toggleStarrySky
  };
} 