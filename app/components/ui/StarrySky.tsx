'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'normal' | 'special' | 'bright';
}

export default function StarrySky() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generar estrellas aleatorias - REDUCIDO de 200 a 80
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 80; // Reducido significativamente

      for (let i = 0; i < starCount; i++) {
        const starType = Math.random() > 0.85 ? 'bright' : Math.random() > 0.7 ? 'special' : 'normal';
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1, // Reducido de 1-4px a 1-3px
          opacity: Math.random() * 0.6 + 0.3, // Reducido rango de opacidad
          type: starType,
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Regenerar estrellas cada 2 minutos en lugar de 45 segundos
    const interval = setInterval(generateStars, 120000);

    return () => clearInterval(interval);
  }, []);

  const getStarClass = (type: string) => {
    switch (type) {
      case 'bright':
        return 'star-bright';
      case 'special':
        return 'star-special';
      default:
        return 'star';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 'var(--z-stars)' }}>
      {/* Estrellas dinámicas optimizadas */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${getStarClass(star.type)}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            backgroundColor: star.type === 'bright' ? '#fef3c7' : star.type === 'special' ? '#93c5fd' : '#ffffff',
          }}
        />
      ))}
      
      {/* Solo estrellas fijas más importantes - REDUCIDO de 20+ a 8 */}
      <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-yellow-300 rounded-full star-bright" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full star-special" />
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-blue-200 rounded-full star-special" />
      <div className="absolute bottom-80 left-20 w-1.5 h-1.5 bg-yellow-300 rounded-full star-bright" />
      <div className="absolute top-1/4 right-5 w-1.5 h-1.5 bg-yellow-200 rounded-full star-bright" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-100 rounded-full star-bright" />
      <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-white rounded-full star" />
      <div className="absolute bottom-1/6 right-1/6 w-1 h-1 bg-white rounded-full star-special" />
    </div>
  );
} 