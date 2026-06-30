import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTIONS = 3;

export default function Particles() {
  const pointsRef = useRef();
  const linesRef = useRef();

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {

  let x;

  const zone = Math.random();

  // -------------------------
  // LEFT (70%)
  // -------------------------
  if (zone < 0.70) {

    x = -3.8 + Math.random() * 2.4;

  }

  // -------------------------
  // CENTER (25%)
  // -------------------------
  else if (zone < 0.95) {

    x = -1.2 + Math.random() * 2.2;

  }

  // -------------------------
  // RIGHT (5%)
  // -------------------------
  else {

    x = 3.2 + Math.random() * 0.8;

  }

  arr.push({

    position: new THREE.Vector3(

      x,

      -1.9 + Math.random() * 3.8,

      (Math.random() - 0.5) * 0.7

    ),

    velocity: new THREE.Vector3(

      (Math.random() - 0.5) * 0.0012,

      (Math.random() - 0.5) * 0.0012,

      (Math.random() - 0.5) * 0.0003

    )

  });

}



    return arr;
  }, []);

  const pointPositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    []
  );

  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * CONNECTIONS * 6),
    []
  );

  useFrame(() => {
    let lineIndex = 0;

    particles.forEach((particle, i) => {
      particle.position.add(particle.velocity);

      if (particle.position.x > 4.5 || particle.position.x < -4.2)
        particle.velocity.x *= -1;

      if (particle.position.y > 1.5 || particle.position.y < -1.5)
        particle.velocity.y *= -1;

      pointPositions[i * 3] = particle.position.x;
      pointPositions[i * 3 + 1] = particle.position.y;
      pointPositions[i * 3 + 2] = particle.position.z;
    });

    for (let i = 0; i < particles.length; i++) {
      const neighbours = [];

      for (let j = 0; j < particles.length; j++) {
        if (i === j) continue;

        neighbours.push({
          index: j,
          distance: particles[i].position.distanceTo(
            particles[j].position
          ),
        });
      }

      neighbours.sort((a, b) => a.distance - b.distance);


      for (let k = 0; k < CONNECTIONS; k++) {

  const neighbour = particles[neighbours[k].index];

  const distance = particles[i].position.distanceTo(
    neighbour.position
  );

  // Don't draw long lines
  if (distance > 0.75) continue;

  // Don't connect particles on the far right
  if (
    particles[i].position.x > 2.3 ||
    neighbour.position.x > 2.3
  ) {
    continue;
  }

  linePositions[lineIndex++] = particles[i].position.x;
  linePositions[lineIndex++] = particles[i].position.y;
  linePositions[lineIndex++] = particles[i].position.z;

  linePositions[lineIndex++] = neighbour.position.x;
  linePositions[lineIndex++] = neighbour.position.y;
  linePositions[lineIndex++] = neighbour.position.z;
}

    
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);

    linesRef.current.geometry.attributes.position.array.set(
      linePositions
    );

    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={pointPositions}
            count={PARTICLE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
            color="#FFD54A"
            size={0.055}
            transparent
            opacity={1}
            sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#FFE36B"
          transparent
          opacity={0.18}
        />
      </lineSegments>
    </>
  );
}