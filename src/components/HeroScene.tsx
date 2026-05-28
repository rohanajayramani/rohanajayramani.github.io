import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Knot() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.08;
      ref.current.rotation.y += dt * 0.12;
    }
  });
  return (
    <mesh ref={ref} scale={0.78}>
      <torusKnotGeometry args={[1.05, 0.3, 220, 32, 2, 3]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#22d3ee"
        emissiveIntensity={0.35}
        roughness={0.3}
        metalness={0.55}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

function Particles() {
  const ref = useRef<Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.05;
    }
  });

  const particles = Array.from({ length: 90 }).map((_, i) => {
    const r = 2.6 + (i % 5) * 0.18;
    const theta = (i / 90) * Math.PI * 2;
    const phi = (i % 17) * 0.34;
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta),
      s: 0.018 + ((i * 37) % 18) / 1100,
    };
  });

  return (
    <group ref={ref}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#fde68a"} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#22d3ee" />
        <pointLight position={[-5, -3, -3]} intensity={0.5} color="#f472b6" />
        <directionalLight position={[2, 5, 4]} intensity={0.4} color="#fde68a" />
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
          <Knot />
        </Float>
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          enableDamping
          dampingFactor={0.06}
        />
      </Suspense>
    </Canvas>
  );
}
