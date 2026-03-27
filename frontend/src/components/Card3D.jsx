import { useRef, useEffect, useState } from 'react';
import './Card3D.css';

export default function Card3D({ children, className = '' }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      if (!isHovering) return;

      const rect = card.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
      `;
    };

    const onMouseLeave = () => {
      setIsHovering(false);
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    if (isHovering) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isHovering]);

  return (
    <div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
}
