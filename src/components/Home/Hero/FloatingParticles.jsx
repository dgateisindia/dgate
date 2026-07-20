import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 320;

export default function FloatingParticles() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < COUNT; i++) {
      const left = Math.random() < 0.8;

      arr.push({
        position: new THREE.Vector3(
          left
            ? -4 + Math.random() * 4
            : Math.random() * 1.8,

          -2.2 + Math.random() * 4.5,

          (Math.random() - 0.5) * 0.6
        ),

        speed:
          0.0003 +
          Math.random() * 0.0008,

        offset:
          Math.random() * 100,
      });
    }

    return arr;
  }, []);

  const positions = useMemo(
    () => new Float32Array(COUNT * 3),
    []
  );

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const t = clock.elapsedTime;

    particles.forEach((particle, i) => {
      particle.position.y +=
        particle.speed;

      particle.position.x +=
        Math.sin(
          t * 0.25 +
          particle.offset
        ) * 0.0007;

      if (particle.position.y > 2.4) {
        particle.position.y = -2.4;
      }

      positions[i * 3] =
        particle.position.x;

      positions[i * 3 + 1] =
        particle.position.y;

      positions[i * 3 + 2] =
        particle.position.z;
    });

    pointsRef.current.geometry.attributes.position.needsUpdate =
      true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#FFF3B0"
        size={0.022}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
