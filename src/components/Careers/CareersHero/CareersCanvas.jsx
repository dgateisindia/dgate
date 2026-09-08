import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import { Line } from "@react-three/drei";

import {
  useMemo,
  useRef,
} from "react";


/* =========================================================
   NETWORK DATA
========================================================= */

const NODE_POSITIONS = [
  [-3.8, 1.8, 0],
  [-2.6, 2.3, 0],
  [-1.2, 1.7, 0],
  [0.2, 2.2, 0],
  [1.7, 1.5, 0],
  [3.1, 2, 0],

  [-3.1, 0.3, 0],
  [-1.8, 0.7, 0],
  [-0.3, 0.1, 0],
  [1.2, 0.6, 0],
  [2.8, 0.2, 0],

  [-2.7, -1.3, 0],
  [-1.1, -0.9, 0],
  [0.5, -1.5, 0],
  [2.1, -1, 0],
  [3.4, -1.5, 0],
];


const CONNECTIONS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],

  [0, 6],
  [1, 7],
  [2, 7],
  [2, 8],
  [3, 8],
  [3, 9],
  [4, 9],
  [4, 10],
  [5, 10],

  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],

  [6, 11],
  [7, 12],
  [8, 12],
  [8, 13],
  [9, 13],
  [9, 14],
  [10, 14],
  [10, 15],

  [11, 12],
  [12, 13],
  [13, 14],
  [14, 15],
];


/* =========================================================
   CAREER NETWORK
========================================================= */

function CareerNetwork() {
  const groupRef = useRef(null);

  const points = useMemo(
    () => NODE_POSITIONS,
    []
  );

  const connections = useMemo(
    () => CONNECTIONS,
    []
  );


  useFrame((state) => {
    if (!groupRef.current) return;

    const time =
      state.clock.getElapsedTime();

    groupRef.current.rotation.z =
      Math.sin(time * 0.18) * 0.008;

    groupRef.current.position.y =
      Math.sin(time * 0.35) * 0.04;
  });


  return (
    <group ref={groupRef}>

      {/* CONNECTIONS */}

      {connections.map(
        ([start, end], index) => (
          <Line
            key={`${start}-${end}`}
            points={[
              points[start],
              points[end],
            ]}
            color="#FDB913"
            lineWidth={0.65}
            transparent
            opacity={0.34}
          />
        )
      )}


      {/* NODES */}

      {points.map(
        (position, index) => {
          const largeNode =
            index % 4 === 0;

          return (
            <mesh
              key={`career-node-${position.join("-")}`}
              position={position}
            >
              <sphereGeometry
                args={[
                  largeNode
                    ? 0.09
                    : 0.055,
                  12,
                  12,
                ]}
              />

              <meshBasicMaterial
                color="#FDB913"
                transparent
                opacity={
                  largeNode
                    ? 0.9
                    : 0.62
                }
              />
            </mesh>
          );
        }
      )}

    </group>
  );
}


/* =========================================================
   CANVAS
========================================================= */

function CareersCanvas() {
  return (
    <div
      className="careers-page-hero__canvas"
      aria-hidden="true"
    >
      <Canvas
        orthographic
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 10],
          zoom: 75,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <CareerNetwork />
      </Canvas>
    </div>
  );
}


export default CareersCanvas;