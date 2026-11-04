import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let renderer, geometry, particleMaterial, linesGeometry, lineMaterial, handleMouseMove, handleResize;
    let timerId;

    const init = () => {
      const container = mountRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      // 1. Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // 2. Particle Constellation Geometry
      const particleCount = 75;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

        velocities.push({
          x: (Math.random() - 0.5) * 0.03,
          y: (Math.random() - 0.5) * 0.03,
          z: (Math.random() - 0.5) * 0.015,
        });
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      particleMaterial = new THREE.PointsMaterial({
        color: 0x0D9488,
        size: 0.7,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, particleMaterial);
      scene.add(particles);

      // Connecting Lines Material
      lineMaterial = new THREE.LineBasicMaterial({
        color: 0x1F514C,
        transparent: true,
        opacity: 0.18,
      });

      linesGeometry = new THREE.BufferGeometry();
      const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
      scene.add(linesMesh);

      let mouseX = 0;
      let mouseY = 0;

      handleMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / width - 0.5) * 4;
        mouseY = -((event.clientY - rect.top) / height - 0.5) * 4;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        particles.rotation.y += 0.0012;
        particles.rotation.x += 0.0006;

        const posAttr = geometry.attributes.position;
        const posArray = posAttr.array;

        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3] += velocities[i].x;
          posArray[i * 3 + 1] += velocities[i].y;
          posArray[i * 3 + 2] += velocities[i].z;

          if (Math.abs(posArray[i * 3]) > 25) velocities[i].x *= -1;
          if (Math.abs(posArray[i * 3 + 1]) > 15) velocities[i].y *= -1;
          if (Math.abs(posArray[i * 3 + 2]) > 15) velocities[i].z *= -1;
        }
        posAttr.needsUpdate = true;

        const linePositions = [];
        for (let i = 0; i < particleCount; i++) {
          for (let j = i + 1; j < particleCount; j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < 8) {
              linePositions.push(
                posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2],
                posArray[j * 3], posArray[j * 3 + 1], posArray[j * 3 + 2]
              );
            }
          }
        }

        linesGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );

        renderer.render(scene, camera);
      };

      animate();

      handleResize = () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);
    };

    // Defer WebGL initialization past initial DOM render
    timerId = setTimeout(init, 60);

    return () => {
      clearTimeout(timerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      const container = mountRef.current;
      if (container && renderer && renderer.domElement) {
        try { container.removeChild(renderer.domElement); } catch (e) {}
      }
      if (geometry) geometry.dispose();
      if (particleMaterial) particleMaterial.dispose();
      if (linesGeometry) linesGeometry.dispose();
      if (lineMaterial) lineMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none z-1 ${className}`} />;
}
