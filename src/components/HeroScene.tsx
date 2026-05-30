import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const SAFFRON = "#ff7a26";
const SAFFRON_HOT = "#ff8a3d";
const CYAN = "#22d3ee";
const MAGENTA = "#ec4899";
const GOLD = "#d4af37";

/* Build line-segment positions for a closed polygon (triangle) */
const triEdges = (pts: [number, number][], z: number, color: string) => {
  const positions = new Float32Array(pts.length * 2 * 3);
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
  triEdges([[0, 1.8], [1.6, -0.6], [-1.6, -0.6]], 0, SAFFRON),
  triEdges([[0, 1.5], [1.3, -0.45], [-1.3, -0.45]], 0.02, SAFFRON_HOT),
  triEdges([[0, 1.2], [1.05, -0.35], [-1.05, -0.35]], 0.04, GOLD),
  triEdges([[0, 0.95], [0.85, -0.28], [-0.85, -0.28]], 0.06, GOLD),
  triEdges([[0, -1.8], [1.6, 0.6], [-1.6, 0.6]], 0.08, CYAN),
  triEdges([[0, -1.5], [1.3, 0.45], [-1.3, 0.45]], 0.1, CYAN),
  triEdges([[0, -1.2], [1.05, 0.35], [-1.05, 0.35]], 0.12, MAGENTA),
  triEdges([[0, -0.95], [0.85, 0.28], [-0.85, 0.28]], 0.14, MAGENTA),
  triEdges([[0, -0.7], [0.6, 0.2], [-0.6, 0.2]], 0.16, CYAN),
];

function Edges({ tri }: { tri: { positions: Float32Array; color: string } }) {
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

/* Chakra spoke wheel — many radial lines, rotates slowly behind everything */
function ChakraSpokes({
  count = 48,
  inner = 2.0,
  outer = 4.6,
  color = GOLD,
  z = -0.6,
  speed = 0.04,
  opacity = 0.4,
}: {
  count?: number;
  inner?: number;
  outer?: number;
  color?: string;
  z?: number;
  speed?: number;
  opacity?: number;
}) {
  const ref = useRef<THREE.LineSegments>(null!);
  const geom = useMemo(() => {
    const positions = new Float32Array(count * 2 * 3);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const off = i * 6;
      positions[off] = Math.cos(a) * inner;
      positions[off + 1] = Math.sin(a) * inner;
      positions[off + 2] = z;
      positions[off + 3] = Math.cos(a) * outer;
      positions[off + 4] = Math.sin(a) * outer;
      positions[off + 5] = z;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count, inner, outer, z]);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += speed * dt;
  });

  return (
    <lineSegments ref={ref} geometry={geom}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </lineSegments>
  );
}

/* Concentric thin ring */
function Ring({
  radius,
  tube = 0.008,
  color = GOLD,
  emissive = 0.9,
  speed = 0.04,
  tilt = 0,
}: {
  radius: number;
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
      <torusGeometry args={[radius, tube, 16, 220]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={emissive} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

/* Sri Yantra core */
function SriYantra3D() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.05;
  });
  return (
    <group ref={ref}>
      {TRIANGLES.map((t, i) => (
        <Edges key={i} tri={t} />
      ))}
      <mesh>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}

/* Petal ring of glowing dots */
function LotusDots({
  radius = 3.0,
  count = 16,
  color = GOLD,
  direction = -1,
  size = 0.035,
}: {
  radius?: number;
  count?: number;
  color?: string;
  direction?: number;
  size?: number;
}) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.06 * direction;
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
          <sphereGeometry args={[size, 10, 10]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.9} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function OuterIcosa() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.1;
      ref.current.rotation.y += dt * 0.07;
    }
  });
  return (
    <mesh ref={ref} scale={4.0}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.13} />
    </mesh>
  );
}

function StarField() {
  const positions = useMemo(() => {
    const arr = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const r = 4.5 + Math.random() * 5;
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
      <PointMaterial size={0.026} color={GOLD} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.6], fov: 42 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color={SAFFRON} />
        <pointLight position={[-6, -3, 4]} intensity={1.2} color={CYAN} />
        <pointLight position={[0, 4, 5]} intensity={0.8} color={MAGENTA} />

        {/* Back chakra spoke wheels (two layers, counter-rotating) */}
        <ChakraSpokes count={64} inner={2.2} outer={4.8} color={GOLD} z={-0.8} speed={0.03} opacity={0.28} />
        <ChakraSpokes count={32} inner={1.9} outer={4.4} color={SAFFRON} z={-0.7} speed={-0.05} opacity={0.22} />

        <Float speed={1.0} rotationIntensity={0.22} floatIntensity={0.4}>
          <SriYantra3D />
          <LotusDots radius={2.55} count={12} color={SAFFRON} direction={-1} size={0.04} />
          <LotusDots radius={3.05} count={18} color={GOLD} direction={1} />
          <LotusDots radius={3.55} count={28} color={CYAN} direction={-1} size={0.028} />

          {/* concentric rings */}
          <Ring radius={2.7} tube={0.01} color={SAFFRON} emissive={1.2} speed={0.05} />
          <Ring radius={2.95} tube={0.008} color={GOLD} emissive={1.0} speed={-0.04} tilt={0.15} />
          <Ring radius={3.9} tube={0.009} color={CYAN} emissive={1.0} speed={0.03} tilt={0.3} />
          <Ring radius={4.2} tube={0.006} color={MAGENTA} emissive={0.9} speed={-0.025} tilt={-0.3} />
        </Float>

        <OuterIcosa />
        <StarField />

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
