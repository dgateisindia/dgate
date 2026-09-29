import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  useFrame,
} from "@react-three/fiber";

import * as THREE from "three";


/* =========================================================
   SETTINGS
========================================================= */

const COUNT = 360;

const MIN_Y = -2.5;
const MAX_Y = 2.5;

const HEIGHT =
  MAX_Y - MIN_Y;


/* =========================================================
   FLOATING PARTICLES
========================================================= */

export default function FloatingParticles() {
  const pointsRef =
    useRef(null);


  /* =========================================================
     PARTICLE DATA

     Store only the values required for animation.

     We do not mutate Vector3 objects every frame.
     This is lighter and more predictable.
  ========================================================= */

  const particles = useMemo(() => {

    return Array.from(
      {
        length: COUNT,
      },
      (_, index) => {

        /*
         * Most particles stay on the left/middle area
         * so they don't overpower the marketing visual.
         */

        const leftSide =
          Math.random() < 0.78;


        const x = leftSide
          ? -4.4 + Math.random() * 4.7
          : -0.1 + Math.random() * 2.3;


        const y =
          MIN_Y +
          Math.random() * HEIGHT;


        const z =
          -0.45 +
          Math.random() * 0.9;


        return {
          id: index,

          baseX: x,

          startY: y,

          z,

          /*
           * Continuous upward speed.
           *
           * This is based on elapsed time,
           * not frame count.
           */
          speed:
            0.065 +
            Math.random() * 0.1,

          /*
           * Different phases prevent particles
           * from moving together.
           */
          phase:
            Math.random() *
            Math.PI *
            2,

          /*
           * Horizontal floating amount.
           */
          drift:
            0.025 +
            Math.random() * 0.055,

          /*
           * Slightly different wave speeds.
           */
          waveSpeed:
            0.28 +
            Math.random() * 0.3,
        };
      }
    );

  }, []);


  /* =========================================================
     POSITION BUFFER

     Initialize it immediately so Three.js does not first
     render 360 particles at position [0, 0, 0].
  ========================================================= */

  const positions =
    useMemo(() => {

      const buffer =
        new Float32Array(
          COUNT * 3
        );


      particles.forEach(
        (particle, index) => {

          const i =
            index * 3;


          buffer[i] =
            particle.baseX;

          buffer[i + 1] =
            particle.startY;

          buffer[i + 2] =
            particle.z;

        }
      );


      return buffer;

    }, [particles]);


  /* =========================================================
     OPTIMIZE DYNAMIC BUFFER
  ========================================================= */

  useEffect(() => {

    if (!pointsRef.current) {
      return;
    }


    const geometry =
      pointsRef.current.geometry;


    const positionAttribute =
      geometry.attributes.position;


    /*
     * Tell Three.js this buffer changes frequently.
     */

    positionAttribute.setUsage(
      THREE.DynamicDrawUsage
    );


    /*
     * Dynamic point positions can make a stale bounding
     * sphere unreliable. We also disable frustum culling
     * below, which prevents the whole particle system from
     * unexpectedly disappearing.
     */

    geometry.computeBoundingSphere();

  }, []);


  /* =========================================================
     CONTINUOUS ANIMATION
  ========================================================= */

  useFrame(({ clock }) => {

    if (!pointsRef.current) {
      return;
    }


    const time =
      clock.getElapsedTime();


    const geometry =
      pointsRef.current.geometry;


    const positionAttribute =
      geometry.attributes.position;


    const positionArray =
      positionAttribute.array;


    particles.forEach(
      (particle, index) => {

        const i =
          index * 3;


        /* -----------------------------------------------
           CONTINUOUS VERTICAL LOOP

           modulo means every particle returns from
           the bottom forever without stopping.
        ----------------------------------------------- */

        const travelled =
          time *
          particle.speed;


        const y =
          MIN_Y +
          (
            (
              particle.startY -
              MIN_Y +
              travelled
            ) %
            HEIGHT
          );


        /* -----------------------------------------------
           SOFT HORIZONTAL FLOAT
        ----------------------------------------------- */

        const x =
          particle.baseX +
          Math.sin(
            time *
              particle.waveSpeed +
              particle.phase
          ) *
            particle.drift;


        /* -----------------------------------------------
           WRITE POSITION
        ----------------------------------------------- */

        positionArray[i] =
          x;

        positionArray[i + 1] =
          y;

        positionArray[i + 2] =
          particle.z;

      }
    );


    positionAttribute.needsUpdate =
      true;

  });


  return (

    <points
      ref={pointsRef}

      /*
       * IMPORTANT:
       *
       * Prevent Three.js from hiding this dynamic
       * particle cloud because of an outdated
       * geometry bounding sphere.
       */
      frustumCulled={false}
    >

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />

      </bufferGeometry>


      <pointsMaterial

        color="#FFF0A8"

        size={0.025}

        transparent

        opacity={0.72}

        sizeAttenuation

        depthWrite={false}

        blending={
          THREE.AdditiveBlending
        }

      />

    </points>

  );
}