import { useEffect } from 'react';
import gsap from 'gsap';
import './FloatingShapes.css';

export default function FloatingShapes({ count = 8 }) {
  useEffect(() => {
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
      const duration = 4 + Math.random() * 5;
      const xDist = (Math.random() - 0.5) * 80;
      
      gsap.to(shape, {
        y: -30,
        x: xDist,
        opacity: 0.15,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.15
      });
    });
  }, [count]);

  return (
    <div className="floating-shapes-container">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 80 + 30}px`,
            height: `${Math.random() * 80 + 30}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '30%',
            backgroundColor: ['#d4a574', '#c9a961', '#3d2686', '#2d1b69', '#f0ad4e'][i % 5],
            opacity: Math.random() * 0.15 + 0.05,
            filter: 'blur(3px)'
          }}
        />
      ))}
    </div>
  );
}
