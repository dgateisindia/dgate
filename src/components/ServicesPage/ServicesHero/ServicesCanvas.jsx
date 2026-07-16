import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
  Line,
} from "@react-three/drei";

import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= Rotating Cube ================= */

function RotatingCube() {

  const cubeRef = useRef();

  useFrame((state, delta) => {

    cubeRef.current.rotation.x += delta * 0.4;
    cubeRef.current.rotation.y += delta * 0.6;

  });

  return (

    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >

      <mesh ref={cubeRef}>

        <boxGeometry args={[1.5, 1.5, 1.5]} />

        <meshStandardMaterial
          color="#FDB913"
          wireframe
        />

      </mesh>

    </Float>

  );

}

/* ================= Floating Nodes ================= */

function Nodes() {

  const points = useMemo(() => {

    return [
      [-2, 1.3, 0],
      [-1, -1, 0],
      [0.8, 1.5, 0],
      [2, 0.3, 0],
      [1.4, -1.5, 0],
      [-2.2, -1.4, 0],
    ];

  }, []);

  return (

    <>

      {points.map((point, index) => (

        <mesh
          key={index}
          position={point}
        >

          <sphereGeometry args={[0.08, 32, 32]} />

          <meshStandardMaterial
            color="#FDB913"
            emissive="#FDB913"
            emissiveIntensity={1}
          />

        </mesh>

      ))}

      <Line
        points={points}
        color="#FDB913"
        lineWidth={1}
      />

    </>

  );

}

/* ================= Scene ================= */

function Scene() {

  return (

    <>

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-5, -5, 5]}
        intensity={2}
        color="#FDB913"
      />

      <Stars
        radius={20}
        depth={30}
        count={150}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      <RotatingCube />

      <Nodes />

    </>

  );

}

/* ================= Canvas ================= */

function ServicesCanvas() {

  return (

    <div className="services-canvas">

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >

        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </div>

  );

}

export default ServicesCanvas;