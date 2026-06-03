import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CinematicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[3, 128, 128]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#050403"
          roughness={1}
          metalness={0.0}
          emissive="#FF4D00"
          emissiveIntensity={0.02}
          transparent
          opacity={0.9}
        />
        {/* Structural Wireframe Overlay */}
        <Sphere args={[3.01, 32, 32]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.01} />
        </Sphere>
      </Sphere>
    </group>
  );
};

const CinematicParticles = () => {
  const count = 4000; // More particles for density
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 40; // x
      p[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5; // z
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF4D00"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const CameraController = () => {
  useFrame((state) => {
    // Exact scroll-bound camera pathing
    const scrollY = window.scrollY;
    const targetY = -scrollY * 0.005;
    const targetZ = 10 + (scrollY * 0.002);
    const targetX = Math.sin(scrollY * 0.001) * 2;
    
    state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    
    state.camera.lookAt(0, state.camera.position.y, 0);
  });

  return null;
};

export const WebGLScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance" 
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 25]} />
        <ambientLight intensity={0.1} />
        <spotLight 
          position={[15, 20, 15]} 
          angle={0.2} 
          penumbra={1} 
          intensity={3} 
          color="#FF4D00" 
          castShadow 
        />
        <pointLight position={[-15, -20, -15]} intensity={1} color="#EF9F27" />
        
        <CinematicSphere />
        <CinematicParticles />
        <CameraController />
      </Canvas>
    </div>
  );
};
