import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection({ children, depth = 0.5, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false
      },
      y: window.innerHeight * depth * 0.3,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [depth]);

  return (
    <div
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
