import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
    <Sphere ref={meshRef} args={[3, 128, 128]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#050403"
        roughness={1}
        metalness={0.0}
        emissive="#FF4D00"
        emissiveIntensity={0.05}
        transparent
        opacity={0.8}
      />
      {/* Structural Wireframe Overlay */}
      <Sphere args={[3.01, 32, 32]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.02} />
      </Sphere>
    </Sphere>
  );
};

const CinematicParticles = () => {
  const count = 3000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 30; // x
      p[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; // z
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
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

const CameraController = () => {
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      }
    });
  }, []);

  useFrame((state) => {
    const scrollY = window.scrollY;
    // Smoother camera inertia logic
    const targetY = -scrollY * 0.004;
    const targetZ = 8 + (scrollY * 0.0015);
    
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, state.camera.position.y, 0);
  });

  return null;
};

export const WebGLScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <fog attach="fog" args={['#020202', 5, 20]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#FF4D00" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#EF9F27" />
        <CinematicSphere />
        <CinematicParticles />
        <CameraController />
      </Canvas>
    </div>
  );
};
