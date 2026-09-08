import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Sparkles,
  RoundedBox,
  Line,
} from "@react-three/drei";

import { useRef } from "react";


function Hud() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.25
      ) * 0.15;
  });

  return (
    <group
      ref={groupRef}
      position={[1.3, 0.6, 0]}
      scale={1.05}
    >
      <Float
        speed={1.5}
        floatIntensity={0.35}
        rotationIntensity={0.15}
      >

        {/* MAIN GLASS PANEL */}

        <RoundedBox
          args={[1.2, 0.8, 0.03]}
          radius={0.04}
        >
          <meshStandardMaterial
            color="#8ad8ff"
            transparent
            opacity={0.16}
            emissive="#59d2ff"
            emissiveIntensity={2.2}
          />
        </RoundedBox>


        {/* GRAPH */}

        <Line
          points={[
            [-0.45, -0.15, 0.03],
            [-0.2, 0.08, 0.03],
            [0, 0, 0.03],
            [0.22, 0.22, 0.03],
            [0.45, 0.12, 0.03],
          ]}
          color="#8fe3ff"
          lineWidth={2}
        />


        {/* RIGHT PANEL */}

        <RoundedBox
          args={[0.45, 0.28, 0.03]}
          position={[0.85, 0.35, 0.15]}
          radius={0.03}
        >
          <meshStandardMaterial
            color="#9de6ff"
            transparent
            opacity={0.18}
            emissive="#6ad9ff"
            emissiveIntensity={2.2}
          />
        </RoundedBox>


        {/* LEFT PANEL */}

        <RoundedBox
          args={[0.35, 0.22, 0.03]}
          position={[-0.9, -0.15, 0.12]}
          radius={0.03}
        >
          <meshStandardMaterial
            color="#8fdfff"
            transparent
            opacity={0.18}
            emissive="#5cd6ff"
            emissiveIntensity={2.2}
          />
        </RoundedBox>

      </Float>


      <Sparkles
        count={80}
        scale={7}
        size={2}
        speed={0.25}
        color="#7fdcff"
      />

    </group>
  );
}


function IndustriesCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 3]}
        intensity={3}
        color="#66d7ff"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={1.8}
        color="#ffffff"
      />

      <Hud />
    </Canvas>
  );
}

export default IndustriesCanvas;