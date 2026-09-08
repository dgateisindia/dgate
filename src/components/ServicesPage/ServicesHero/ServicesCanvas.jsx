import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Stars,
  Line,
} from "@react-three/drei";

import { useRef } from "react";

import * as THREE from "three";


const NODE_POINTS = [
  [-2, 1.3, 0],
  [-1, -1, 0],
  [0.8, 1.5, 0],
  [2, 0.3, 0],
  [1.4, -1.5, 0],
  [-2.2, -1.4, 0],
];


/* =========================================================
   ROTATING CUBE
========================================================= */

function RotatingCube() {
  const cubeRef = useRef(null);

  useFrame((_, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x +=
      delta * 0.3;

    cubeRef.current.rotation.y +=
      delta * 0.45;
  });

  return (
    <Float
      speed={1.6}
      rotationIntensity={0.7}
      floatIntensity={1.4}
    >
      <mesh ref={cubeRef}>

        <boxGeometry
          args={[1.5, 1.5, 1.5]}
        />

        <meshStandardMaterial
          color="#FDB913"
          wireframe
        />

      </mesh>
    </Float>
  );
}


/* =========================================================
   NETWORK NODES
========================================================= */

function Nodes() {
  return (
    <>
      {NODE_POINTS.map((point) => (
        <mesh
          key={point.join("-")}
          position={point}
        >
          <sphereGeometry
            args={[0.08, 16, 16]}
          />

          <meshStandardMaterial
            color="#FDB913"
            emissive="#FDB913"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      <Line
        points={NODE_POINTS}
        color="#FDB913"
        lineWidth={1}
      />
    </>
  );
}


/* =========================================================
   SCENE
========================================================= */

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={1.5}
        color="#FDB913"
      />

      <Stars
        radius={20}
        depth={30}
        count={100}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <RotatingCube />

      <Nodes />
    </>
  );
}


/* =========================================================
   CANVAS
========================================================= */

function ServicesCanvas() {
  return (
    <div
      className="services-page-hero__canvas"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default ServicesCanvas;