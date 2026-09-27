import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Eye } from 'lucide-react';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNutrient, setActiveNutrient] = useState<string>('Antioxidants');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const isRotatingRef = useRef(true);

  isRotatingRef.current = isRotating;

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Master Group for 3D interactions
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central 3D Stylized Avocado / Organic Fruit
    // Outer green flesh
    const fruitGroup = new THREE.Group();
    
    // Pear/Avocado shape using LatheGeometry or deformed sphere
    const fruitGeo = new THREE.SphereGeometry(1.6, 64, 64);
    // Deform vertices slightly to make it an organic pear/avocado silhouette
    const pos = fruitGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      // Taper top
      if (y > 0) {
        const factor = 1 - (y / 1.6) * 0.28;
        pos.setX(i, pos.getX(i) * factor);
        pos.setZ(i, pos.getZ(i) * factor);
      }
    }
    fruitGeo.computeVertexNormals();

    const fruitMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#4ade80'),
      roughness: 0.25,
      metalness: 0.05,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      transmission: 0.2, // soft translucent organic jelly feel
      thickness: 1.2,
      ior: 1.45,
    });
    const fruitMesh = new THREE.Mesh(fruitGeo, fruitMat);
    fruitGroup.add(fruitMesh);

    // Inner glowing golden pit / metabolic core
    const pitGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const pitMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f59e0b'),
      roughness: 0.2,
      metalness: 0.3,
      emissive: new THREE.Color('#fbbf24'),
      emissiveIntensity: 0.25,
    });
    const pitMesh = new THREE.Mesh(pitGeo, pitMat);
    pitMesh.position.set(0, -0.15, 0.45);
    fruitGroup.add(pitMesh);

    mainGroup.add(fruitGroup);

    // 2. Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#16a34a'),
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    ringMesh1.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#f59e0b'),
      transparent: true,
      opacity: 0.25,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.2, 0.015, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.z = Math.PI / 5;
    mainGroup.add(ringMesh2);

    // 3. Orbiting Nutrient Spheres (Vitamin C, Zinc, Omega-3, Polyphenols)
    const nutrientGroup = new THREE.Group();
    const nutrientData = [
      { name: 'Vitamin C', color: '#fbbf24', radius: 2.7, speed: 0.015, size: 0.28, phase: 0 },
      { name: 'Omega-3', color: '#38bdf8', radius: 3.1, speed: 0.011, size: 0.32, phase: 2.1 },
      { name: 'Antioxidants', color: '#ec4899', radius: 2.5, speed: 0.018, size: 0.25, phase: 4.2 },
      { name: 'Gut Probiotics', color: '#22c55e', radius: 3.3, speed: 0.009, size: 0.34, phase: 1.1 },
      { name: 'Pure Protein', color: '#a855f7', radius: 2.9, speed: 0.013, size: 0.26, phase: 3.5 },
    ];

    const nutrientMeshes: THREE.Mesh[] = [];

    nutrientData.forEach((item) => {
      const geo = new THREE.SphereGeometry(item.size, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(item.color),
        roughness: 0.1,
        metalness: 0.1,
        emissive: new THREE.Color(item.color),
        emissiveIntensity: 0.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      nutrientMeshes.push(mesh);
      nutrientGroup.add(mesh);
    });

    mainGroup.add(nutrientGroup);

    // 4. Floating Ambient Micro-particles
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#86efac'),
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdcfce7, 1.5);
    fillLight.position.set(-6, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x22c55e, 2, 20);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Mouse & Touch Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const rect = currentMount.getBoundingClientRect();

      mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
      }
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousemove', handlePointerMove);
    currentMount.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    currentMount.addEventListener('touchmove', handlePointerMove, { passive: true });
    currentMount.addEventListener('touchstart', handleMouseDown, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Autonomous gentle spin if enabled
      if (isRotatingRef.current && !isDragging) {
        fruitGroup.rotation.y = elapsedTime * 0.45;
        fruitGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
        ringMesh1.rotation.z = elapsedTime * 0.15;
        ringMesh2.rotation.z = -elapsedTime * 0.2;
      }

      // Smooth camera/group tilt following mouse
      mainGroup.rotation.y += (targetRotationY + mouseX * 0.4 - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mouseY * 0.3 - mainGroup.rotation.x) * 0.05;

      // Orbit nutrients in 3D paths
      nutrientData.forEach((item, index) => {
        const mesh = nutrientMeshes[index];
        const angle = elapsedTime * item.speed * 8 + item.phase;
        mesh.position.x = Math.cos(angle) * item.radius;
        mesh.position.z = Math.sin(angle) * item.radius;
        mesh.position.y = Math.sin(angle * 2 + index) * 0.7;

        // Bob size slightly
        const scale = 1 + Math.sin(elapsedTime * 3 + index) * 0.1;
        mesh.scale.set(scale, scale, scale);
      });

      // Animate ambient particles gently
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousemove', handlePointerMove);
      currentMount.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      currentMount.removeEventListener('touchmove', handlePointerMove);
      currentMount.removeEventListener('touchstart', handleMouseDown);
      window.removeEventListener('touchend', handleMouseUp);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
        title="Drag or touch to rotate 3D cellular nutrition model"
      />

      {/* Floating 3D Interaction Control Overlay */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm ${
            isRotating 
              ? 'bg-brand-500/10 text-brand-700 border border-brand-200 hover:bg-brand-500/20' 
              : 'bg-white/80 text-slate-600 border border-slate-200 hover:bg-white'
          } backdrop-blur-md`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow' : ''}`} />
          <span>{isRotating ? 'Auto Rotate' : 'Paused'}</span>
        </button>
      </div>

      {/* Nutrient quick indicator badges around 3D viewport */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto flex flex-wrap gap-2 justify-center sm:justify-start pointer-events-auto">
        {[
          { label: '🥑 Micronutrients', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
          { label: '✨ Bio-availability', color: 'bg-amber-50 text-amber-800 border-amber-200' },
          { label: '🧬 Gut Microbiome', color: 'bg-teal-50 text-teal-800 border-teal-200' },
        ].map((item, idx) => (
          <span
            key={idx}
            className={`text-xs px-3 py-1 rounded-full font-medium border shadow-xs backdrop-blur-md ${item.color}`}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="absolute bottom-2 right-2 hidden lg:flex items-center gap-1 text-[11px] text-slate-600 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/60 pointer-events-none">
        <Eye className="w-3 h-3 text-brand-600" />
        <span>Interactive 3D: Click & Drag to Orbit</span>
      </div>
    </div>
  );
};
