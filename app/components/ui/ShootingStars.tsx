'use client';

import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function ShootingStars() {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const generateShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 40, // Solo en la parte superior
        delay: Math.random() * 1, // Reducido de 2s a 1s
        duration: Math.random() * 1.5 + 1, // Entre 1-2.5 segundos (reducido)
      };
      
      setShootingStars(prev => [...prev, newStar]);
      
      // Remover la estrella después de la animación
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newStar.id));
      }, (newStar.delay + newStar.duration) * 1000);
    };

    // Generar una estrella fugaz cada 8-15 segundos (reducido de 3-8s)
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% de probabilidad (reducido de 70%)
        generateShootingStar();
      }
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 'var(--z-stars)' }}>
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `shooting-star ${star.duration}s ease-out ${star.delay}s both`,
          }}
        />
      ))}
    </div>
  );
} 