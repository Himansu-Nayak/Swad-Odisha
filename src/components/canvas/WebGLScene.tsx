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
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Sphere ref={meshRef} args={[3, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#030303"
        roughness={0.9}
        metalness={0.1}
        wireframe={true} // Structural aesthetic
        transparent
        opacity={0.15}
      />
    </Sphere>
  );
};

const CinematicParticles = () => {
  const count = 2000;
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20; // x
      p[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      p[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z (push back)
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF4D00"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const CameraController = () => {
  useGSAP(() => {
    // Sync Three.js Camera with GSAP ScrollTrigger
    gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth scrubbing
      }
    });

    // We animate a proxy object and apply it to the camera in useFrame,
    // but the easiest way in R3F is animating the camera position directly if we have a ref.
    // However, since we are inside the canvas, we can animate window.scrollY manually or use scrollTrigger.
  }, []);

  useFrame((state) => {
    // Simple parallax based on scroll
    const scrollY = window.scrollY;
    state.camera.position.y = -scrollY * 0.005;
    state.camera.position.z = 8 + (scrollY * 0.002);
    state.camera.lookAt(0, state.camera.position.y, 0);
  });

  return null;
};

export const WebGLScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FF4D00" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#EF9F27" />
        <CinematicSphere />
        <CinematicParticles />
        <CameraController />
      </Canvas>
    </div>
  );
};
