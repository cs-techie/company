import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CubeCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create 3D Wireframe Cube Lattice
    const boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    const boxMaterial = new THREE.MeshBasicMaterial({
      color: 0x1F514C,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cubeMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(cubeMesh);

    // Inner Glowing Core Octahedron
    const coreGeometry = new THREE.OctahedronGeometry(2.5);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xEDFFE3,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      cubeMesh.rotation.x += 0.005;
      cubeMesh.rotation.y += 0.007;

      coreMesh.rotation.x -= 0.008;
      coreMesh.rotation.z += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      boxGeometry.dispose();
      boxMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full pointer-events-none ${className}`} />;
}
