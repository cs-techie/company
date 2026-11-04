import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SphereCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let renderer, sphereGeometry, wireframeMaterial, torusGeometry, torusMaterial, handleResize;
    let timerId;

    const init = () => {
      const container = mountRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.z = 18;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // Create 3D Wireframe Icosahedron Sphere
      sphereGeometry = new THREE.IcosahedronGeometry(7, 2);
      wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xEDFFE3,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const sphereMesh = new THREE.Mesh(sphereGeometry, wireframeMaterial);
      scene.add(sphereMesh);

      // Inner Glowing Ring
      torusGeometry = new THREE.TorusGeometry(8.5, 0.05, 12, 80);
      torusMaterial = new THREE.MeshBasicMaterial({
        color: 0x1F514C,
        transparent: true,
        opacity: 0.4,
      });
      const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
      torusMesh.rotation.x = Math.PI / 3;
      scene.add(torusMesh);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        sphereMesh.rotation.y += 0.003;
        sphereMesh.rotation.x += 0.0015;
        torusMesh.rotation.z += 0.004;

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

    // Defer initialization to unblock initial DOM render frame
    timerId = setTimeout(init, 80);

    return () => {
      clearTimeout(timerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      const container = mountRef.current;
      if (container && renderer && renderer.domElement) {
        try { container.removeChild(renderer.domElement); } catch (e) {}
      }
      if (sphereGeometry) sphereGeometry.dispose();
      if (wireframeMaterial) wireframeMaterial.dispose();
      if (torusGeometry) torusGeometry.dispose();
      if (torusMaterial) torusMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} />;
}
