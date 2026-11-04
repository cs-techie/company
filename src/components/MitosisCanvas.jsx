import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MitosisCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Mitosis Cell System Creation
    const numCells = 16;
    const cells = [];
    const pointsPerCell = 64;

    const tealColor = new THREE.Color(0x1F514C);
    const mintColor = new THREE.Color(0xEDFFE3);

    for (let c = 0; c < numCells; c++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(pointsPerCell * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Dual Line / Mesh representation for cell wall
      const material = new THREE.LineBasicMaterial({
        color: c % 2 === 0 ? mintColor : tealColor,
        transparent: true,
        opacity: 0.75,
        linewidth: 2,
      });

      const line = new THREE.LineLoop(geometry, material);

      // Inner Glowing Core Point
      const coreGeometry = new THREE.BufferGeometry();
      const corePositions = new Float32Array(6); // 2 nuclei points
      coreGeometry.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
      
      const coreMaterial = new THREE.PointsMaterial({
        color: 0xEDFFE3,
        size: 0.6,
        transparent: true,
        opacity: 0.9,
      });
      const nuclei = new THREE.Points(coreGeometry, coreMaterial);

      const cellGroup = new THREE.Group();
      cellGroup.add(line);
      cellGroup.add(nuclei);
      scene.add(cellGroup);

      // Orbital parameters
      const orbitRadius = 6 + Math.random() * 8;
      const orbitSpeed = (0.3 + Math.random() * 0.4) * (Math.random() > 0.5 ? 1 : -1);
      const orbitAngle = Math.random() * Math.PI * 2;
      const phaseOffset = Math.random() * Math.PI * 2;

      cells.push({
        group: cellGroup,
        line,
        nuclei,
        orbitRadius,
        orbitSpeed,
        orbitAngle,
        phaseOffset,
        baseRadius: 1.2 + Math.random() * 0.6,
      });
    }

    // Mouse Tracking for Interactive Camera Sway
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 4;
      mouseY = -((e.clientY - rect.top) / height - 0.5) * 4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3. Animation Loop (Mitosis Morphing Logic)
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Camera sway
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (mouseY - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      cells.forEach((cell) => {
        // Orbit motion in a circular fashion
        cell.orbitAngle += cell.orbitSpeed * 0.015;
        const x = Math.cos(cell.orbitAngle) * cell.orbitRadius;
        const y = Math.sin(cell.orbitAngle) * (cell.orbitRadius * 0.6);
        const z = Math.sin(cell.orbitAngle * 2) * 2;
        cell.group.position.set(x, y, z);

        // Mitosis Phase Cycle: 0 -> 1 -> 0
        // Phase: 0 = Single Circle, 0.5 = Elongated & Pinched (Dumbbell), 1.0 = Split into 2 Child Circles
        const cycle = (Math.sin(time * 0.8 + cell.phaseOffset) + 1) / 2; // 0 to 1

        const posAttr = cell.line.geometry.attributes.position;
        const posArr = posAttr.array;

        const nAttr = cell.nuclei.geometry.attributes.position;
        const nArr = nAttr.array;

        const R = cell.baseRadius;
        const separation = cycle * R * 1.4; // Distance between splitting nuclei

        // Nuclei positions
        nArr[0] = -separation; nArr[1] = 0; nArr[2] = 0;
        nArr[3] = separation;  nArr[4] = 0; nArr[5] = 0;
        nAttr.needsUpdate = true;

        // Morph cell boundary points (Metaball / Mitosis equation)
        for (let i = 0; i < pointsPerCell; i++) {
          const angle = (i / pointsPerCell) * Math.PI * 2;
          
          // Deform circle -> dumbbell -> two circles based on cycle
          let r;
          if (cycle < 0.3) {
            // Stage 1: Expanding Circle
            r = R * (1 + cycle * 0.3 * Math.cos(2 * angle));
          } else if (cycle < 0.7) {
            // Stage 2: Mitosis Cleavage Furrow (Pinch in center)
            const pinchFactor = Math.abs(Math.sin(angle));
            const pinchDepth = (cycle - 0.3) * 2.2;
            r = R * (1 + 0.4 * Math.cos(2 * angle) - pinchDepth * Math.pow(pinchFactor, 3));
          } else {
            // Stage 3: Two separating child circles contour
            const childOffset = (cycle - 0.7) * 3.3;
            const dist1 = Math.sqrt(Math.pow(R * Math.cos(angle) - childOffset, 2) + Math.pow(R * Math.sin(angle), 2));
            const dist2 = Math.sqrt(Math.pow(R * Math.cos(angle) + childOffset, 2) + Math.pow(R * Math.sin(angle), 2));
            r = Math.min(dist1, dist2);
          }

          const px = Math.cos(angle) * (r + separation * 0.5);
          const py = Math.sin(angle) * r;
          const pz = Math.sin(angle * 3) * 0.2;

          posArr[i * 3] = px;
          posArr[i * 3 + 1] = py;
          posArr[i * 3 + 2] = pz;
        }

        posAttr.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 4. Resize Handler
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      cells.forEach((c) => {
        c.line.geometry.dispose();
        c.line.material.dispose();
        c.nuclei.geometry.dispose();
        c.nuclei.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`absolute inset-0 pointer-events-none z-1 ${className}`} />;
}
