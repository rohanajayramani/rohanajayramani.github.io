import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const SAFFRON = "#ff8a3d";
const GOLD = "#d4af37";
const DEEP_GOLD = "#b8932a";
const INDIGO = "#4f3fc3";
const CREAM = "#fde9c3";

/* Glass core — a dodecahedron with transmission material */
function GlassCore() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.18;
      ref.current.rotation.y += dt * 0.24;
    }
  });
  return (
    <mesh ref={ref} scale={0.95}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshTransmissionMaterial
        backside
        backsideThickness={1}
        thickness={0.4}
        transmission={1}
        roughness={0.05}
        chromaticAberration={0.04}
        anisotropy={0.6}
        ior={1.5}
        color={CREAM}
        attenuationColor={SAFFRON}
        attenuationDistance={0.6}
        clearcoat={1}
        clearcoatRoughness={0.05}
      />
    </mesh>
  );
}

/* A ring of dots (chakra-style) */
function ChakraRing({
  radius = 2,
  count = 24,
  thickness = 0.04,
  color = GOLD,
  emissive = 0.6,
  speed = 0.2,
  axis = [0, 0, 1] as [number, number, number],
  tilt = 0,
}: {
  radius?: number;
  count?: number;
  thickness?: number;
  color?: string;
  emissive?: number;
  speed?: number;
  axis?: [number, number, number];
  tilt?: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const meshRef = useRef<THREE.InstancedMesh>(null!);

  useMemo(() => {
    // initial positions
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      dummy.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      const s = 0.9 + (i % 3) * 0.25;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    }
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count, radius, dummy]);

  useFrame((_, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += axis[0] * speed * dt;
      groupRef.current.rotation.y += axis[1] * speed * dt;
      groupRef.current.rotation.z += axis[2] * speed * dt;
    }
  });

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      <instancedMesh ref={meshRef} args={[undefined as unknown as THREE.BufferGeometry, undefined as unknown as THREE.Material, count]}>
        <sphereGeometry args={[thickness, 10, 10]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissive}
          metalness={0.6}
          roughness={0.25}
        />
      </instancedMesh>
    </group>
  );
}

/* Thin torus ring — outer mandala edge */
function MandalaRing({
  radius = 2.7,
  tube = 0.012,
  color = GOLD,
  emissive = 0.4,
  speed = 0.06,
  tilt = 0,
}: {
  radius?: number;
  tube?: number;
  color?: string;
  emissive?: number;
  speed?: number;
  tilt?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += speed * dt;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, tube, 32, 220]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissive}
        metalness={0.7}
        roughness={0.25}
      />
    </mesh>
  );
}

/* 12 thin lotus petals — slim, refined, layered behind the core */
function LotusPetals({
  count = 12,
  radius = 1.5,
  length = 0.42,
  width = 0.05,
  color = SAFFRON,
  speed = 0.04,
  z = -0.2,
}: {
  count?: number;
  radius?: number;
  length?: number;
  width?: number;
  color?: string;
  speed?: number;
  z?: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed;
  });
  return (
    <group ref={ref} position={[0, 0, z]}>
      {Array.from({ length: count }).map((_, i) => {
        const a = (i / count) * Math.PI * 2;
        const x = Math.cos(a) * radius;
        const y = Math.sin(a) * radius;
        return (
          <mesh key={i} position={[x, y, 0]} rotation={[0, 0, a - Math.PI / 2]}>
            <boxGeometry args={[width, length, width]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.65}
              metalness={0.6}
              roughness={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.8], fov: 42 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <pointLight position={[6, 6, 6]} intensity={0.9} color={SAFFRON} />
        <pointLight position={[-6, -3, 3]} intensity={0.6} color={INDIGO} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color={GOLD} />
        <directionalLight position={[2, 6, 4]} intensity={0.5} color={CREAM} />

        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <GlassCore />
        </Float>

        {/* 3 layered rings of lotus petals around the core */}
        <LotusPetals count={8} radius={1.55} length={0.36} width={0.045} color={SAFFRON} speed={0.05} />
        <LotusPetals count={12} radius={1.95} length={0.32} width={0.04} color={GOLD} speed={-0.04} z={-0.05} />
        <LotusPetals count={16} radius={2.35} length={0.28} width={0.035} color={DEEP_GOLD} speed={0.03} z={-0.1} />

        <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.4}>
          {/* concentric mandala rings — gold filaments */}
          <ChakraRing radius={2.7} count={32} thickness={0.038} color={GOLD} speed={0.1} axis={[0, 0, 1]} />
          <ChakraRing radius={3.15} count={48} thickness={0.028} color={DEEP_GOLD} speed={-0.07} axis={[0, 0, 1]} tilt={0.2} />
          <ChakraRing radius={3.6} count={64} thickness={0.02} color={SAFFRON} speed={0.045} axis={[0.15, 0.15, 1]} tilt={-0.18} />
          <MandalaRing radius={4.05} tube={0.01} color={GOLD} emissive={0.6} speed={0.04} tilt={0.4} />
          <MandalaRing radius={4.35} tube={0.007} color={SAFFRON} emissive={0.5} speed={-0.03} tilt={-0.4} />
        </Float>

        <Sparkles count={140} scale={9} size={2} speed={0.25} color={GOLD} opacity={0.7} />
        <Sparkles count={60} scale={7} size={3} speed={0.18} color={CREAM} opacity={0.4} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          enableDamping
          dampingFactor={0.06}
        />
      </Suspense>
    </Canvas>
  );
}
