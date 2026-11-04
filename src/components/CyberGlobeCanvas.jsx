import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberGlobeCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let renderer, globeGeometry, globeMaterial, ringGeometry, ringMaterial, handleMouseMove, handleResize;
    let timerId;

    const init = () => {
      const container = mountRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;

      // 1. Scene & Camera Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      // 2. Cyber Globe Core Sphere (Point Cloud Grid)
      const globeRadius = 8;
      const particleCount = 1000;
      globeGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const primaryTeal = new THREE.Color(0x1F514C);
      const oceanCyan = new THREE.Color(0x0D9488);

      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const x = globeRadius * Math.cos(theta) * Math.sin(phi);
        const y = globeRadius * Math.sin(theta) * Math.sin(phi);
        const z = globeRadius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        const mixRatio = (y / globeRadius + 1) / 2;
        const c = primaryTeal.clone().lerp(oceanCyan, mixRatio);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      globeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      globeGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      globeMaterial = new THREE.PointsMaterial({
        size: 0.25,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });

      const globeMesh = new THREE.Points(globeGeometry, globeMaterial);
      scene.add(globeMesh);

      // 3. Cyber Arc Trajectories
      const arcGroup = new THREE.Group();

      const createArc = (startVec, endVec, colorHex) => {
        const mid = startVec.clone().add(endVec).multiplyScalar(0.5);
        const distance = startVec.distanceTo(endVec);
        mid.normalize().multiplyScalar(globeRadius + distance * 0.4);

        const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec);
        const points = curve.getPoints(40);
        const curveGeometry = new THREE.BufferGeometry().setFromPoints(points);

        const curveMaterial = new THREE.LineBasicMaterial({
          color: colorHex,
          transparent: true,
          opacity: 0.35,
        });

        return new THREE.Line(curveGeometry, curveMaterial);
      };

      const hubs = [
        new THREE.Vector3( -5.5, 3.2, 5.2 ),
        new THREE.Vector3( 1.2, 5.1, 5.8 ),
        new THREE.Vector3( 6.8, 2.1, 3.5 ),
        new THREE.Vector3( 4.5, -2.1, 6.1 ),
        new THREE.Vector3( -3.2, -4.5, 5.1 ),
      ];

      for (let i = 0; i < hubs.length - 1; i++) {
        const arc = createArc(hubs[i], hubs[i + 1], 0x0D9488);
        arcGroup.add(arc);
      }
      scene.add(arcGroup);

      // 4. Orbital Satellites & Glowing Tech Rings
      ringGeometry = new THREE.TorusGeometry(globeRadius + 2.5, 0.04, 12, 80);
      ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x1F514C,
        transparent: true,
        opacity: 0.25,
      });

      const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh1.rotation.x = Math.PI / 3;
      ringMesh1.rotation.y = Math.PI / 6;
      scene.add(ringMesh1);

      const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial);
      ringMesh2.rotation.x = -Math.PI / 4;
      ringMesh2.rotation.y = -Math.PI / 3;
      scene.add(ringMesh2);

      let targetRotationX = 0;
      let targetRotationY = 0;

      handleMouseMove = (event) => {
        const rect = container.getBoundingClientRect();
        const x = (event.clientX - rect.left) / width - 0.5;
        const y = (event.clientY - rect.top) / height - 0.5;
        targetRotationY = x * Math.PI * 0.8;
        targetRotationX = y * Math.PI * 0.4;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        globeMesh.rotation.y += 0.002 + (targetRotationY - globeMesh.rotation.y) * 0.03;
        globeMesh.rotation.x += (targetRotationX - globeMesh.rotation.x) * 0.03;

        arcGroup.rotation.y = globeMesh.rotation.y;
        arcGroup.rotation.x = globeMesh.rotation.x;

        ringMesh1.rotation.z += 0.003;
        ringMesh2.rotation.z -= 0.002;

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
    timerId = setTimeout(init, 40);

    return () => {
      clearTimeout(timerId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      const container = mountRef.current;
      if (container && renderer && renderer.domElement) {
        try { container.removeChild(renderer.domElement); } catch (e) {}
      }
      if (globeGeometry) globeGeometry.dispose();
      if (globeMaterial) globeMaterial.dispose();
      if (ringGeometry) ringGeometry.dispose();
      if (ringMaterial) ringMaterial.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none z-1 ${className}`} />;
}
