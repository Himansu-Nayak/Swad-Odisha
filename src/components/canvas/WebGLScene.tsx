import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CinematicCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* The Thali/Plate Geometry */}
        <cylinderGeometry args={[4, 3.8, 0.2, 128]} />
        <meshStandardMaterial 
          color="#050403"
          roughness={0.8}
          metalness={0.2}
          emissive="#FF4D00"
          emissiveIntensity={0.01}
        />
        {/* Glowing Rim */}
        <mesh position={[0, 0.1, 0]}>
           <ringGeometry args={[3.9, 4, 128]} />
           <meshBasicMaterial color="#FF4D00" transparent opacity={0.1} />
        </mesh>
      </mesh>
    </Float>
  );
};

const VolumetricAtmosphere = () => {
  const count = 5000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF4D00"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const NarrativeCamera = () => {
  useFrame((state) => {
    const scrollY = window.scrollY;
    const targetY = -scrollY * 0.005;
    const targetZ = 12 + (scrollY * 0.002);
    
    // Smooth camera interpolation
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, state.camera.position.y, 0);
  });

  return null;
};

export const WebGLScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 10, 30]} />
        <ambientLight intensity={0.05} />
        <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={5} color="#FF4D00" castShadow />
        <pointLight position={[-20, -20, -20]} intensity={2} color="#EF9F27" />
        
        <CinematicCore />
        <VolumetricAtmosphere />
        <NarrativeCamera />
      </Canvas>
    </div>
  );
};
