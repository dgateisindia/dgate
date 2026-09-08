import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import { Float } from "@react-three/drei";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";


const TECH_NODES = [
  {
    position: [-2.2, 1.2, 0],
    color: "#FDB913",
    scale: 1,
  },
  {
    position: [-0.8, 0.4, 0],
    color: "#FFFFFF",
    scale: 0.9,
  },
  {
    position: [1, 1.5, 0],
    color: "#FFE08A",
    scale: 1,
  },
  {
    position: [2.3, 0.2, 0],
    color: "#8FD7FF",
    scale: 1,
  },
  {
    position: [0.8, -1.2, 0],
    color: "#FFFFFF",
    scale: 0.8,
  },
  {
    position: [-1.8, -1.3, 0],
    color: "#FDB913",
    scale: 1,
  },
];


/* =========================================================
   PARTICLES
========================================================= */

function Particles() {
  const ref = useRef(null);

  const positions = useMemo(() => {
    const count = 150;

    const array =
      new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      array[i * 3] =
        (Math.random() - 0.5) * 14;

      array[i * 3 + 1] =
        (Math.random() - 0.5) * 8;

      array[i * 3 + 2] =
        (Math.random() - 0.5) * 8;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#FFE08A"
        size={0.03}
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}


/* =========================================================
   NODE
========================================================= */

function TechNode({
  position,
  color,
  scale,
}) {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y +=
      delta * 0.35;

    meshRef.current.position.y =
      position[1] +
      Math.sin(
        state.clock.elapsedTime +
        position[0]
      ) * 0.06;
  });

  return (
    <Float
      speed={1.5}
      floatIntensity={0.3}
      rotationIntensity={0.1}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
      >
        <icosahedronGeometry
          args={[0.12, 0]}
        />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}


/* =========================================================
   CONNECTIONS
========================================================= */

function Connections() {
  const ref = useRef(null);

  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(-2.2, 1.2, 0),
      new THREE.Vector3(-0.8, 0.4, 0),
      new THREE.Vector3(1, 1.5, 0),
      new THREE.Vector3(2.3, 0.2, 0),
      new THREE.Vector3(0.8, -1.2, 0),
      new THREE.Vector3(-1.8, -1.3, 0),
      new THREE.Vector3(-2.2, 1.2, 0),
    ];

    return new THREE.BufferGeometry()
      .setFromPoints(points);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime * 0.15
      ) * 0.04;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.025;
  });

  return (
    <line
      ref={ref}
      geometry={geometry}
    >
      <lineBasicMaterial
        color="#FFD770"
        transparent
        opacity={0.4}
      />
    </line>
  );
}


/* =========================================================
   SCENE
========================================================= */

function Scene() {
  const groupRef = useRef(null);

  useFrame(({ mouse }) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.12,
        0.04
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.07,
        0.04
      );
  });

  return (
    <group ref={groupRef}>

      <Particles />

      <Connections />

      {TECH_NODES.map(
        ({
          position,
          color,
          scale,
        }) => (
          <TechNode
            key={position.join("-")}
            position={position}
            color={color}
            scale={scale}
          />
        )
      )}

    </group>
  );
}


/* =========================================================
   CANVAS
========================================================= */

function TechnologiesCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1.1} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={1.5}
        color="#ffffff"
      />

      <pointLight
        position={[2, 2, 3]}
        intensity={7}
        color="#FDB913"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={4}
        color="#ffffff"
      />

      <pointLight
        position={[0, -3, 3]}
        intensity={3}
        color="#8FD7FF"
      />

      <Scene />
    </Canvas>
  );
}

export default TechnologiesCanvas;