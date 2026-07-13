'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, MeshDistortMaterial, Sphere, Icosahedron, Torus, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

// Floating distorted sphere - the "AI core"
function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#a855f7"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#7c3aed"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

// Inner wireframe icosahedron
function WireCore() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = -t * 0.3;
    mesh.current.rotation.z = t * 0.2;
  });
  return (
    <Icosahedron ref={mesh} args={[1.9, 1]}>
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
    </Icosahedron>
  );
}

// Orbiting torus rings
function OrbitRings() {
  const g1 = useRef<THREE.Mesh>(null!);
  const g2 = useRef<THREE.Mesh>(null!);
  const g3 = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    g1.current.rotation.x = t * 0.4;
    g1.current.rotation.y = t * 0.2;
    g2.current.rotation.x = -t * 0.3;
    g2.current.rotation.z = t * 0.25;
    g3.current.rotation.y = t * 0.5;
    g3.current.rotation.z = -t * 0.15;
  });
  return (
    <group>
      <Torus ref={g1} args={[2.6, 0.015, 16, 100]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.6} />
      </Torus>
      <Torus ref={g2} args={[3.1, 0.012, 16, 100]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </Torus>
      <TorusKnot ref={g3} args={[3.6, 0.01, 100, 16]}>
        <meshBasicMaterial color="#ec4899" transparent opacity={0.4} />
      </TorusKnot>
    </group>
  );
}

// Particle field
function ParticleField({ count = 1800 }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute in a sphere shell
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = t * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c4b5fd"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Small floating geometric shapes
function FloatingShapes() {
  const shapes = useMemo(() => {
    const items: { pos: [number, number, number]; color: string; scale: number; type: 'box' | 'octa' | 'tetra' }[] = [];
    const colors = ['#a855f7', '#22d3ee', '#ec4899', '#8b5cf6', '#06b6d4'];
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2;
      const radius = 4.5 + Math.random() * 2.5;
      items.push({
        pos: [Math.cos(angle) * radius, (Math.random() - 0.5) * 6, Math.sin(angle) * radius - 1],
        color: colors[i % colors.length],
        scale: 0.15 + Math.random() * 0.25,
        type: (['box', 'octa', 'tetra'] as const)[i % 3],
      });
    }
    return items;
  }, []);

  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
          <mesh position={s.pos} scale={s.scale}>
            {s.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {s.type === 'octa' && <octahedronGeometry args={[1, 0]} />}
            {s.type === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
            <meshStandardMaterial
              color={s.color}
              emissive={s.color}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
              wireframe={i % 3 === 0}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Hero3D({ className = '' }: { className?: string }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[0, 5, -10]} intensity={0.8} color="#ec4899" />
        <CoreOrb />
        <WireCore />
        <OrbitRings />
        <FloatingShapes />
        <ParticleField count={1800} />
        <fog attach="fog" args={['#0a0712', 8, 18]} />
      </Canvas>
    </div>
  );
}
