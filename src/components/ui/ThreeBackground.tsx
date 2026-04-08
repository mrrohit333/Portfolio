"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// A slow rotating camera container for parallax
const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse securely on client side
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Slow continuous drift
    groupRef.current.rotation.y += delta * 0.02;
    groupRef.current.rotation.x += delta * 0.01;

    // Smooth lerp towards mouse position for parallax
    const targetX = mousePosition.x * 0.1;
    const targetY = mousePosition.y * 0.1;
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
  });

  return <group ref={groupRef}>{children}</group>;
};

export const ThreeBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering Canvas on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none opacity-80 mix-blend-screen">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]} // Limit pixel ratio to 1.5 for performance
        gl={{ antialias: false, alpha: true }} // Optimize WebGL renderer
      >
        <CameraRig>
          {/* Deep distant static starfield for depth */}
          <Stars radius={50} depth={50} count={3000} factor={6} saturation={0} fade speed={1} />
          
          {/* Closer floating cyber-particles themed in Cyan */}
          <Sparkles count={400} scale={20} size={3} color="#00f0ff" speed={0.4} opacity={0.8} />
          
          {/* Closer floating cyber-particles themed in Purple */}
          <Sparkles count={300} scale={20} size={5} color="#a855f7" speed={0.2} opacity={0.6} />
        </CameraRig>
      </Canvas>
    </div>
  );
};
