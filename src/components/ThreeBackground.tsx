import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-4, 2, -5]} scale={0.8}>
          <MeshDistortMaterial color="#F27D26" attach="material" distort={0.3} speed={2} roughness={0.2} metalness={0.1} opacity={0.6} transparent />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[1.2, 0.3, 16, 32]} position={[5, -1, -8]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#E4E3E0" roughness={0.4} metalness={0.1} opacity={0.5} transparent />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[0.6, 32, 32]} position={[3, 3, -4]}>
          <MeshDistortMaterial color="#ffffff" attach="material" distort={0.4} speed={3} roughness={0.1} metalness={0.8} opacity={0.4} transparent />
        </Sphere>
      </Float>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
