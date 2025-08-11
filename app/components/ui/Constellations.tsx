'use client';

import { useEffect, useState } from 'react';

interface Constellation {
  id: number;
  points: Array<{ x: number; y: number }>;
  opacity: number;
}

export default function Constellations() {
  const [constellations, setConstellations] = useState<Constellation[]>([]);

  useEffect(() => {
    const generateConstellations = () => {
      const newConstellations: Constellation[] = [];
      const constellationCount = 4; // Reducido de 8 a 4

      for (let i = 0; i < constellationCount; i++) {
        const pointCount = Math.floor(Math.random() * 3) + 2; // 2-4 puntos (reducido de 3-6)
        const points = [];
        
        // Generar puntos para la constelación
        for (let j = 0; j < pointCount; j++) {
          points.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
          });
        }
        
        newConstellations.push({
          id: i,
          points,
          opacity: Math.random() * 0.2 + 0.1, // Opacidad entre 0.1-0.3 (reducido)
        });
      }
      
      setConstellations(newConstellations);
    };

    generateConstellations();

    // Regenerar constelaciones cada 3 minutos en lugar de 1 minuto
    const interval = setInterval(generateConstellations, 180000);

    return () => clearInterval(interval);
  }, []);

  const drawConstellation = (points: Array<{ x: number; y: number }>) => {
    if (points.length < 2) return null;

    const lines = [];
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];
      
      const length = Math.sqrt(
        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
      );
      
      if (length < 25) { // Reducido de 30 a 25 para menos líneas
        lines.push(
          <line
            key={`${start.x}-${start.y}-${end.x}-${end.y}`}
            x1={`${start.x}%`}
            y1={`${start.y}%`}
            x2={`${end.x}%`}
            y2={`${end.y}%`}
            stroke="rgba(255, 255, 255, 0.1)" // Reducido de 0.15 a 0.1
            strokeWidth="0.3" // Reducido de 0.5 a 0.3
            className="constellation-line"
          />
        );
      }
    }
    
    return lines;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 'var(--z-stars)' }}>
      <svg className="w-full h-full absolute inset-0">
        {constellations.map((constellation) => (
          <g key={constellation.id} style={{ opacity: constellation.opacity }}>
            {drawConstellation(constellation.points)}
          </g>
        ))}
      </svg>
    </div>
  );
} 