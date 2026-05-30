import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const SAFFRON = "#ff7a26";
const SAFFRON_HOT = "#ff8a3d";
const CYAN = "#22d3ee";
const MAGENTA = "#ec4899";
const GOLD = "#d4af37";

/* Module-level triangle definitions — never re-created */
const T = (pts: [number, number][], z: number, color: string) => {
  const positions = new Float32Array(pts.length * 2 * 3);
  // Build line-segments: edges between consecutive points + closing edge
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    const off = i * 6;
    positions[off] = a[0];
    positions[off + 1] = a[1];
    positions[off + 2] = z;
    positions[off + 3] = b[0];
    positions[off + 4] = b[1];
    positions[off + 5] = z;
  }
  return { positions, color };
};

const TRIANGLES = [
  // upward (Shiva) — saffron / gold
  T([[0, 1.8], [1.6, -0.6], [-1.6, -0.6]], 0, SAFFRON),
  T([[0, 1.5], [1.3, -0.45], [-1.3, -0.45]], 0.02, SAFFRON_HOT),
  T([[0, 1.2], [1.05, -0.35], [-1.05, -0.35]], 0.04, GOLD),
  T([[0, 0.95], [0.85, -0.28], [-0.85, -0.28]], 0.06, GOLD),
  // downward (Shakti) — cyan / magenta
  T([[0, -1.8], [1.6, 0.6], [-1.6, 0.6]], 0.08, CYAN),
  T([[0, -1.5], [1.3, 0.45], [-1.3, 0.45]], 0.1, CYAN),
  T([[0, -1.2], [1.05, 0.35], [-1.05, 0.35]], 0.12, MAGENTA),
  T([[0, -0.95], [0.85, 0.28], [-0.85, 0.28]], 0.14, MAGENTA),
  T([[0, -0.7], [0.6, 0.2], [-0.6, 0.2]], 0.16, CYAN),
];

/* A single line-loop triangle — uses native R3F line via createElement */
function TriEdge({ tri }: { tri: { positions: Float32Array; color: string } }) {
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(tri.positions, 3));
    return g;
  }, [tri]);
  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial color={tri.color} transparent opacity={0.95} />
    </lineSegments>
  );
}

/* Sri Yantra — 9 interlocking triangles */
function SriYantra3D() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.05;
  });

  return (
    <group ref={ref}>
      {TRIANGLES.map((t, i) => (
        <TriEdge key={i} tri={t} />
      ))}

      {/* Outer rings */}
      <mesh>
        <torusGeometry args={[2.6, 0.012, 16, 200]} />
        <meshStandardMaterial color={SAFFRON} emissive={SAFFRON} emissiveIntensity={1.4} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.8, 0.008, 16, 220]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.1} metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Bindu */}
      <mesh>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

/* Petal ring — small spheres */
function LotusDots({
  radius = 3.0,
  count = 16,
  color = GOLD,
  direction = -1,
}: {
  radius?: number;
  count?: number;
  color?: string;
  direction?: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.07 * direction;
  });
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      arr.push([Math.cos(a) * radius, Math.sin(a) * radius, 0.18]);
    }
    return arr;
  }, [radius, count]);

  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function OuterIcosa() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.12;
      ref.current.rotation.y += dt * 0.08;
    }
  });
  return (
    <mesh ref={ref} scale={3.4}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function StarField() {
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      const r = 4 + Math.random() * 5;
      const a = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(a);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(a);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.028} color={GOLD} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color={SAFFRON} />
        <pointLight position={[-6, -3, 4]} intensity={1.2} color={CYAN} />
        <pointLight position={[0, 4, 5]} intensity={0.8} color={MAGENTA} />

        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.45}>
          <SriYantra3D />
          <LotusDots radius={3.05} count={16} color={GOLD} direction={-1} />
          <LotusDots radius={3.32} count={24} color={SAFFRON} direction={1} />
        </Float>

        <OuterIcosa />
        <StarField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.06}
        />
      </Suspense>
    </Canvas>
  );
}
