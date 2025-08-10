'use client';

import { useEffect, useState } from 'react';

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<Array<{ id: number; size: 'small' | 'medium' | 'large' | 'giant' }>>([]);

  useEffect(() => {
    // Generar 25 meteoritos con diferentes tamaños
    const meteorArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: (Math.random() < 0.3 ? 'small' : Math.random() < 0.6 ? 'medium' : Math.random() < 0.85 ? 'large' : 'giant') as 'small' | 'medium' | 'large' | 'giant'
    }));
    setMeteors(meteorArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`meteor ${meteor.size}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower; 