import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0.05);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create floating geometries with elegant colors
    const geometries = [];
    
    const colors = [0xd4a574, 0xc9a961, 0x3d2686, 0x2d1b69, 0xf0ad4e];
    
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.IcosahedronGeometry(Math.random() * 0.6 + 0.4, 4);
      const material = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        emissive: colors[i % colors.length],
        emissiveIntensity: 0.2,
        wireframe: Math.random() > 0.7,
        opacity: 0.8,
        transparent: true
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      mesh.velocity = {
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008
      };

      scene.add(mesh);
      geometries.push(mesh);
    }

    // Sophisticated lighting
    const light1 = new THREE.PointLight(0xd4a574, 0.8, 120);
    light1.position.set(8, 8, 8);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x3d2686, 0.6, 120);
    light2.position.set(-8, -8, 8);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      geometries.forEach((mesh, i) => {
        mesh.rotation.x += mesh.velocity.x;
        mesh.rotation.y += mesh.velocity.y;
        mesh.position.z += mesh.velocity.z;

        // Bounce boundaries
        if (Math.abs(mesh.position.x) > 10) mesh.velocity.x *= -1;
        if (Math.abs(mesh.position.y) > 10) mesh.velocity.y *= -1;
        if (Math.abs(mesh.position.z) > 10) mesh.velocity.z *= -1;
      });

      camera.position.x += (mouseX * 2.5 - camera.position.x) * 0.04;
      camera.position.y += (mouseY * 2.5 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
}
