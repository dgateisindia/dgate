import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  RoundedBox,
  Line,
} from "@react-three/drei";

import { useRef } from "react";

function Hud() {

  const group = useRef();

  useFrame((state) => {

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.15;

  });

  return (

    <group
      ref={group}
      position={[1.3,0.6,0]}
      scale={1.05}
    >

      <Float
        speed={2}
        floatIntensity={0.45}
        rotationIntensity={0.2}
      >

        {/* Main Panel */}

        <RoundedBox
          args={[1.2,.8,.03]}
          radius={.04}
        >

          <meshStandardMaterial

            color="#8ad8ff"

            transparent

            opacity={0.16}

            emissive="#59d2ff"

            emissiveIntensity={3}

          />

        </RoundedBox>

        {/* Chart */}

        <Line

          points={[
            [-.45,-.15,0.03],
            [-.20,.08,0.03],
            [0,.00,0.03],
            [.22,.22,0.03],
            [.45,.12,0.03],
          ]}

          color="#8fe3ff"

          lineWidth={2}

        />

        {/* Small Panel */}

        <RoundedBox

          args={[.45,.28,.03]}

          position={[.85,.35,.15]}

          radius={.03}

        >

          <meshStandardMaterial

            color="#9de6ff"

            transparent

            opacity={0.18}

            emissive="#6ad9ff"

            emissiveIntensity={3}

          />

        </RoundedBox>

        {/* Left Panel */}

        <RoundedBox

          args={[.35,.22,.03]}

          position={[-.9,-.15,.12]}

          radius={.03}

        >

          <meshStandardMaterial

            color="#8fdfff"

            transparent

            opacity={0.18}

            emissive="#5cd6ff"

            emissiveIntensity={3}

          />

        </RoundedBox>

      </Float>

      <Sparkles

        count={120}

        scale={7}

        size={2}

        speed={0.35}

        color="#7fdcff"

      />

    </group>

  );

}

export default function IndustriesCanvas() {

  return (

    <Canvas

      camera={{

        position:[0,0,6],

        fov:45,

      }}

      gl={{

        alpha:true,

        antialias:true,

      }}

    >

      <ambientLight intensity={1.8} />

      <pointLight

        position={[3,3,3]}

        intensity={5}

        color="#66d7ff"

      />

      <pointLight

        position={[-3,-2,2]}

        intensity={2.5}

        color="#ffffff"

      />

      <Hud />

    </Canvas>

  );

}

function HudPanel() {

  const group = useRef();

  const graph = useRef();

  const status1 = useRef();
  const status2 = useRef();
  const status3 = useRef();

  useFrame((state) => {

    const t = state.clock.elapsedTime;

    if (group.current) {

      group.current.rotation.y = Math.sin(t * 0.5) * 0.08;

      group.current.position.y = Math.sin(t) * 0.05;

    }

    if (graph.current) {

      graph.current.scale.y = 1 + Math.sin(t * 2) * 0.08;

    }

    if (status1.current)
      status1.current.material.emissiveIntensity =
        2 + Math.sin(t * 3) * .8;

    if (status2.current)
      status2.current.material.emissiveIntensity =
        2 + Math.sin(t * 3 + 1) * .8;

    if (status3.current)
      status3.current.material.emissiveIntensity =
        2 + Math.sin(t * 3 + 2) * .8;

  });

  return (

    <group
      ref={group}
      position={[1.2,0.45,0]}
    >

      <Float
        speed={2}
        floatIntensity={0.4}
        rotationIntensity={0.15}
      >

        {/* Glass Panel */}

        <RoundedBox
          args={[2.2,1.45,.03]}
          radius={0.05}
        >

          <meshPhysicalMaterial
            color="#74ddff"
            transparent
            opacity={0.16}
            transmission={1}
            thickness={0.35}
            roughness={0}
            emissive="#6dd8ff"
            emissiveIntensity={2.5}
          />

        </RoundedBox>

        {/* Animated Graph */}

        <group
          ref={graph}
          position={[-0.25,0.05,.04]}
        >

          <Line
            points={[
              [-0.55,-0.25,0],
              [-0.35,-0.05,0],
              [-0.10,-0.18,0],
              [0.15,0.18,0],
              [0.45,0.05,0],
            ]}
            color="#8fe7ff"
            lineWidth={3}
          />

        </group>

        {/* Status Box */}

        <RoundedBox
          args={[0.45,0.28,.03]}
          position={[0.65,0.35,.05]}
          radius={0.03}
        >

          <meshStandardMaterial
            ref={status1}
            color="#8edcff"
            emissive="#7adfff"
            emissiveIntensity={2}
            transparent
            opacity={0.22}
          />

        </RoundedBox>

        {/* Status Box */}

        <RoundedBox
          args={[0.45,0.28,.03]}
          position={[0.65,-0.05,.05]}
          radius={0.03}
        >

          <meshStandardMaterial
            ref={status2}
            color="#8edcff"
            emissive="#7adfff"
            emissiveIntensity={2}
            transparent
            opacity={0.22}
          />

        </RoundedBox>

        {/* Status Box */}

        <RoundedBox
          args={[0.45,0.28,.03]}
          position={[0.65,-0.45,.05]}
          radius={0.03}
        >

          <meshStandardMaterial
            ref={status3}
            color="#8edcff"
            emissive="#7adfff"
            emissiveIntensity={2}
            transparent
            opacity={0.22}
          />

        </RoundedBox>

      </Float>

    </group>

  );

}