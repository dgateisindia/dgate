import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NETWORK_COUNT = 95;
const FLOAT_COUNT = 150;
const CONNECTIONS = 3;

export default function Particles() {
  const networkRef = useRef(null);
  const glowRef = useRef(null);
  const linesRef = useRef(null);
  const floatingRef = useRef(null);

  const network = useMemo(() => {
    const particles = [];

    for (let i = 0; i < NETWORK_COUNT; i++) {
      particles.push({
        position: new THREE.Vector3(
          // Wider horizontal spread
          -2.3 + Math.random() * 5.5,

          // Taller vertical spread
          -1.85 + Math.random() * 3.7,

          // Small depth variation
          (Math.random() - 0.5) * 0.3
        ),

        velocity: new THREE.Vector3(
          // Visible but smooth movement
          (Math.random() - 0.5) * 0.0015,
          (Math.random() - 0.5) * 0.0015,
          0
        ),
      });
    }

    return particles;
  }, []);

  const floatingParticles = useMemo(() => {
    const particles = [];

    for (let i = 0; i < FLOAT_COUNT; i++) {
      particles.push({
        position: new THREE.Vector3(
          // Wide spread across hero
          -3.2 + Math.random() * 7,

          -2 + Math.random() * 4,

          (Math.random() - 0.5) * 0.5
        ),

        speed:
          0.0007 +
          Math.random() * 0.0015,

        phase:
          Math.random() *
          Math.PI *
          2,
      });
    }

    return particles;
  }, []);

  const networkPositions = useMemo(
    () =>
      new Float32Array(
        NETWORK_COUNT * 3
      ),
    []
  );

  const floatingPositions = useMemo(
    () =>
      new Float32Array(
        FLOAT_COUNT * 3
      ),
    []
  );

  const linePositions = useMemo(
    () =>
      new Float32Array(
        NETWORK_COUNT *
          CONNECTIONS *
          6
      ),
    []
  );

  useFrame(({ clock }) => {
    if (
      !networkRef.current ||
      !glowRef.current ||
      !linesRef.current ||
      !floatingRef.current
    ) {
      return;
    }

    const time =
      clock.elapsedTime;

    let lineIndex = 0;

    network.forEach(
      (particle, i) => {
        particle.position.add(
          particle.velocity
        );

        if (
          particle.position.x <
            -2.3 ||
          particle.position.x >
            3.2
        ) {
          particle.velocity.x *=
            -1;
        }

        if (
          particle.position.y <
            -1.85 ||
          particle.position.y >
            1.85
        ) {
          particle.velocity.y *=
            -1;
        }

        networkPositions[
          i * 3
        ] = particle.position.x;

        networkPositions[
          i * 3 + 1
        ] = particle.position.y;

        networkPositions[
          i * 3 + 2
        ] = particle.position.z;
      }
    );

    linePositions.fill(0);

    for (
      let i = 0;
      i < network.length;
      i++
    ) {
      const neighbours = [];

      for (
        let j = 0;
        j < network.length;
        j++
      ) {
        if (i === j) continue;

        const distance =
          network[
            i
          ].position.distanceTo(
            network[j].position
          );

        if (distance < 0.9) {
          neighbours.push({
            index: j,
            distance,
          });
        }
      }

      neighbours.sort(
        (a, b) =>
          a.distance -
          b.distance
      );

      const limit = Math.min(
        CONNECTIONS,
        neighbours.length
      );

      for (
        let k = 0;
        k < limit;
        k++
      ) {
        const current =
          network[i];

        const neighbour =
          network[
            neighbours[k].index
          ];

        linePositions[
          lineIndex++
        ] =
          current.position.x;

        linePositions[
          lineIndex++
        ] =
          current.position.y;

        linePositions[
          lineIndex++
        ] =
          current.position.z;

        linePositions[
          lineIndex++
        ] =
          neighbour.position.x;

        linePositions[
          lineIndex++
        ] =
          neighbour.position.y;

        linePositions[
          lineIndex++
        ] =
          neighbour.position.z;
      }
    }

    floatingParticles.forEach(
      (particle, i) => {

        particle.position.y +=
          particle.speed;

        particle.position.x +=
          Math.sin(
            time * 0.4 +
              particle.phase
          ) * 0.0008;

        if (
          particle.position.y >
          2.1
        ) {
          particle.position.y =
            -2.1;

          particle.position.x =
            -3.2 +
            Math.random() * 7;
        }

        floatingPositions[
          i * 3
        ] = particle.position.x;

        floatingPositions[
          i * 3 + 1
        ] = particle.position.y;

        floatingPositions[
          i * 3 + 2
        ] = particle.position.z;
      }
    );

    const networkAttribute =
      networkRef.current
        .geometry
        .attributes
        .position;

    networkAttribute.array.set(
      networkPositions
    );

    networkAttribute.needsUpdate =
      true;

    const glowAttribute =
      glowRef.current
        .geometry
        .attributes
        .position;

    glowAttribute.array.set(
      networkPositions
    );

    glowAttribute.needsUpdate =
      true;

    const lineAttribute =
      linesRef.current
        .geometry
        .attributes
        .position;

    lineAttribute.array.set(
      linePositions
    );

    lineAttribute.needsUpdate =
      true;

    linesRef.current.geometry.setDrawRange(
      0,
      lineIndex / 3
    );

  
    const floatingAttribute =
      floatingRef.current
        .geometry
        .attributes
        .position;

    floatingAttribute.array.set(
      floatingPositions
    );

    floatingAttribute.needsUpdate =
      true;
  });

  return (
    <>
      /*glow behaid dots*/

      <points ref={glowRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={
              networkPositions
            }
            count={
              NETWORK_COUNT
            }
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#FFD54A"
          size={0.095}
          transparent
          opacity={0.22}
          sizeAttenuation
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
          toneMapped={false}
        />
      </points>

      /*bright dots*/

      <points ref={networkRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={
              networkPositions
            }
            count={
              NETWORK_COUNT
            }
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#FFF8C7"
          size={0.042}
          transparent
          opacity={1}
          sizeAttenuation
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
          toneMapped={false}
        />
      </points>
      
      /*thin yelloe line*/

      <lineSegments
        ref={linesRef}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={
              linePositions
            }
            count={
              linePositions.length /
              3
            }
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#FFE66D"
          transparent
          opacity={0.32}
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
          toneMapped={false}
        />
      </lineSegments>

      /*small moving particles*/

      <points
        ref={floatingRef}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={
              floatingPositions
            }
            count={
              FLOAT_COUNT
            }
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="#FFF3A0"
          size={0.018}
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={
            THREE.AdditiveBlending
          }
          toneMapped={false}
        />
      </points>
    </>
  );
}