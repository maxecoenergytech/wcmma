"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface WoodenDummyCanvasProps {
  className?: string;
}

export default function WoodenDummyCanvas({ className = "" }: WoodenDummyCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL capability safely
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060b13, 0.12);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 1.25, 4.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- MATERIALS (Aged Martial Arts Teak Wood) ---
    const woodColor = new THREE.Color(0x6e3d1b); // Deep seasoned teak
    const darkWoodColor = new THREE.Color(0x42200d); // Frame timber
    const highlightWood = new THREE.Color(0x8a4d22);

    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: woodColor,
      roughness: 0.65,
      metalness: 0.08,
    });

    const armMaterial = new THREE.MeshStandardMaterial({
      color: highlightWood,
      roughness: 0.6,
      metalness: 0.05,
    });

    const frameMaterial = new THREE.MeshStandardMaterial({
      color: darkWoodColor,
      roughness: 0.75,
      metalness: 0.05,
    });

    // --- ASSEMBLE PROCEDURAL MUK YAN JONG (WOODEN DUMMY) ---
    const dummyGroup = new THREE.Group();

    // 1. Main Trunk (Solid cylindrical log)
    const trunkGeometry = new THREE.CylinderGeometry(0.28, 0.28, 2.8, 36);
    const trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    trunkMesh.position.y = 1.35;
    dummyGroup.add(trunkMesh);

    // Trunk top cap (rounded finish)
    const capGeometry = new THREE.SphereGeometry(0.28, 36, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const capMesh = new THREE.Mesh(capGeometry, trunkMaterial);
    capMesh.position.y = 2.75;
    dummyGroup.add(capMesh);

    // 2. Upper Left Arm (Slightly angled out and up)
    const upperArmGeo = new THREE.CylinderGeometry(0.055, 0.075, 0.95, 20);
    
    const leftArm = new THREE.Mesh(upperArmGeo, armMaterial);
    leftArm.castShadow = true;
    leftArm.rotation.x = Math.PI / 2 - 0.15; // Point forward & slightly down
    leftArm.rotation.z = -0.22; // Angle outward left
    leftArm.position.set(-0.16, 1.95, 0.38);
    dummyGroup.add(leftArm);

    // 3. Upper Right Arm (Traditional Wing Chun offset: positioned slightly lower)
    const rightArm = new THREE.Mesh(upperArmGeo, armMaterial);
    rightArm.castShadow = true;
    rightArm.rotation.x = Math.PI / 2 - 0.15;
    rightArm.rotation.z = 0.22; // Angle outward right
    rightArm.position.set(0.16, 1.83, 0.38);
    dummyGroup.add(rightArm);

    // 4. Middle Center Arm (Lower centerline deflection)
    const midArmGeo = new THREE.CylinderGeometry(0.055, 0.075, 0.92, 20);
    const midArm = new THREE.Mesh(midArmGeo, armMaterial);
    midArm.castShadow = true;
    midArm.rotation.x = Math.PI / 2 - 0.08;
    midArm.position.set(0, 1.42, 0.42);
    dummyGroup.add(midArm);

    // 5. Lower Leg (Curved joint representing an opponent's rooted stance)
    // Upper leg segment (sloping forward & down)
    const legUpperGeo = new THREE.CylinderGeometry(0.07, 0.08, 0.72, 20);
    const legUpper = new THREE.Mesh(legUpperGeo, armMaterial);
    legUpper.castShadow = true;
    legUpper.rotation.x = 0.85; // Forward slope
    legUpper.position.set(0, 0.92, 0.26);
    dummyGroup.add(legUpper);

    // Knee joint
    const kneeJointGeo = new THREE.SphereGeometry(0.09, 20, 20);
    const kneeJoint = new THREE.Mesh(kneeJointGeo, armMaterial);
    kneeJoint.position.set(0, 0.65, 0.52);
    dummyGroup.add(kneeJoint);

    // Lower leg segment (dropping down towards ground)
    const legLowerGeo = new THREE.CylinderGeometry(0.065, 0.075, 0.75, 20);
    const legLower = new THREE.Mesh(legLowerGeo, armMaterial);
    legLower.castShadow = true;
    legLower.rotation.x = -0.15;
    legLower.position.set(0, 0.3, 0.46);
    dummyGroup.add(legLower);

    // 6. Support Cross-Slats (Timber beams that mount through the trunk into the wall frame)
    const slatGeo = new THREE.BoxGeometry(1.5, 0.06, 0.06);
    const topSlat = new THREE.Mesh(slatGeo, frameMaterial);
    topSlat.position.set(0, 2.3, -0.02);
    dummyGroup.add(topSlat);

    const botSlat = new THREE.Mesh(slatGeo, frameMaterial);
    botSlat.position.set(0, 0.75, -0.02);
    dummyGroup.add(botSlat);

    // 7. Rear Wall Mounting Frame / Support Pillars
    const pillarGeo = new THREE.BoxGeometry(0.12, 3.2, 0.12);
    const leftPillar = new THREE.Mesh(pillarGeo, frameMaterial);
    leftPillar.position.set(-0.68, 1.5, -0.2);
    dummyGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, frameMaterial);
    rightPillar.position.set(0.68, 1.5, -0.2);
    dummyGroup.add(rightPillar);

    // Center cross support behind trunk
    const backBarGeo = new THREE.BoxGeometry(1.6, 0.1, 0.08);
    const backBar = new THREE.Mesh(backBarGeo, frameMaterial);
    backBar.position.set(0, 1.5, -0.2);
    dummyGroup.add(backBar);

    // Position dummy slightly offset to the right on wide desktop to leave space for left text
    dummyGroup.position.set(0.65, -0.2, 0);
    scene.add(dummyGroup);

    // 8. Ground Reflection Plane (Traditional Dark Polished Training Floor)
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x080e18,
      roughness: 0.75,
      metalness: 0.15,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.25;
    floor.receiveShadow = true;
    scene.add(floor);

    // --- LIGHTING (Cinematic Martial Arts Training Hall) ---
    // Ambient soft fill
    const ambientLight = new THREE.AmbientLight(0x1a2638, 0.9);
    scene.add(ambientLight);

    // Warm key spotlight from front-right (illuminating dummy face and arms)
    const keySpot = new THREE.SpotLight(0xffdfa8, 3.8);
    keySpot.position.set(2.8, 4.2, 3.2);
    keySpot.angle = Math.PI / 4.5;
    keySpot.penumbra = 0.6;
    keySpot.castShadow = true;
    keySpot.shadow.mapSize.width = 1024;
    keySpot.shadow.mapSize.height = 1024;
    keySpot.shadow.camera.near = 1;
    keySpot.shadow.camera.far = 10;
    keySpot.shadow.bias = -0.001;
    scene.add(keySpot);

    // Deep crimson rim light from left-rear (adds dramatic heritage depth)
    const rimLight = new THREE.PointLight(0xd9463e, 2.4, 8);
    rimLight.position.set(-2.8, 2.2, -0.8);
    scene.add(rimLight);

    // Subtle warm gold bottom bounce
    const bounceLight = new THREE.PointLight(0xf59e0b, 1.2, 5);
    bounceLight.position.set(0.65, 0.2, 1.8);
    scene.add(bounceLight);

    // --- ATMOSPHERIC PARTICLES (Floating golden dust motes) ---
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = Math.random() * 3.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4 + 0.5;
      particleSpeeds[i] = 0.001 + Math.random() * 0.002;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- PARALLAX & ANIMATION LOOP ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let isVisible = true;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.25;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;

      // Adapt dummy position based on screen width
      if (w < 768) {
        // Mobile: center the dummy and push camera slightly back
        dummyGroup.position.set(0, -0.3, 0);
        camera.position.set(0, 1.2, 4.8);
      } else if (w < 1024) {
        dummyGroup.position.set(0.35, -0.25, 0);
        camera.position.set(0, 1.25, 4.5);
      } else {
        dummyGroup.position.set(0.7, -0.2, 0);
        camera.position.set(0, 1.25, 4.3);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Intersection Observer (pauses rendering when out of viewport)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse lerp
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;

        // Subtle organic breathing motion (NEVER fast spinning)
        const subtleSway = Math.sin(elapsedTime * 0.6) * 0.03;
        dummyGroup.rotation.y = -0.35 + currentMouseX * 0.5 + subtleSway;
        dummyGroup.rotation.x = currentMouseY * 0.2;

        camera.position.x = currentMouseX * 0.35;
        camera.position.y = 1.25 + currentMouseY * 0.2;
        camera.lookAt(dummyGroup.position.x * 0.3, 1.3, 0);

        // Animate particles floating gently upwards
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += particleSpeeds[i];
          // Wrap around top
          if (positions[i * 3 + 1] > 3.6) {
            positions[i * 3 + 1] = 0;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      } else {
        // Static dignified frame
        dummyGroup.rotation.y = -0.35;
        camera.lookAt(dummyGroup.position.x * 0.3, 1.3, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      cancelAnimationFrame(animId);

      // Dispose geometries and materials
      trunkGeometry.dispose();
      capGeometry.dispose();
      upperArmGeo.dispose();
      midArmGeo.dispose();
      legUpperGeo.dispose();
      kneeJointGeo.dispose();
      legLowerGeo.dispose();
      slatGeo.dispose();
      pillarGeo.dispose();
      backBarGeo.dispose();
      floorGeo.dispose();
      particleGeo.dispose();

      trunkMaterial.dispose();
      armMaterial.dispose();
      frameMaterial.dispose();
      floorMat.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* High quality CSS fallback */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#1a0f0d] to-slate-950 flex items-center justify-center">
          <div className="w-64 h-96 rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-950/40 to-slate-950 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            <span className="text-4xl mb-3 text-amber-400 font-serif font-black">木人樁</span>
            <p className="text-sm font-bold text-white">Muk Yan Jong</p>
            <p className="text-xs text-slate-400 mt-1">116 Traditional Wooden Dummy Techniques</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
