import {
  useEffect,
  useRef,
} from "react";

import * as THREE from "three";


/* =========================================================
   FIXED NETWORK POINTS
========================================================= */

const NETWORK_POINTS = [
  [-3.7, 1.8, 0.4],
  [-2.7, 2.1, -0.3],
  [-1.7, 1.5, 0.5],
  [-0.6, 2.2, -0.2],
  [0.6, 1.7, 0.4],
  [1.8, 2.0, -0.3],
  [3.1, 1.4, 0.3],

  [-3.2, 0.3, -0.2],
  [-2.1, 0.6, 0.4],
  [-1.0, 0.1, -0.4],
  [0.2, 0.5, 0.3],
  [1.3, 0.0, -0.2],
  [2.5, 0.5, 0.4],
  [3.6, 0.0, -0.3],

  [-3.5, -1.4, 0.3],
  [-2.4, -0.9, -0.4],
  [-1.3, -1.5, 0.2],
  [-0.2, -0.8, -0.3],
  [0.9, -1.4, 0.4],
  [2.0, -0.8, -0.2],
  [3.2, -1.3, 0.3],

  [-2.1, -2.0, 0.2],
  [0.0, -2.1, -0.3],
  [2.2, -2.0, 0.2],
];


/* =========================================================
   COMPONENT
========================================================= */

function InsightsCanvas() {
  const mountRef = useRef(null);


  useEffect(() => {
    const container =
      mountRef.current;

    if (!container) return;


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /* =====================================================
       SCENE
    ===================================================== */

    const scene =
      new THREE.Scene();


    const camera =
      new THREE.PerspectiveCamera(
        45,
        container.clientWidth /
          container.clientHeight,
        0.1,
        100
      );


    camera.position.z = 8;


    /* =====================================================
       RENDERER
    ===================================================== */

    const renderer =
      new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference:
          "high-performance",
      });


    renderer.setPixelRatio(
      Math.min(
        window.devicePixelRatio || 1,
        1.5
      )
    );


    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );


    renderer.setClearColor(
      0x000000,
      0
    );


    container.appendChild(
      renderer.domElement
    );


    /* =====================================================
       NETWORK GROUP
    ===================================================== */

    const networkGroup =
      new THREE.Group();


    scene.add(networkGroup);


    /* =====================================================
       POINT POSITIONS
    ===================================================== */

    const positions = [];


    const pointVectors =
      NETWORK_POINTS.map(
        ([x, y, z]) => {

          positions.push(
            x,
            y,
            z
          );


          return new THREE.Vector3(
            x,
            y,
            z
          );
        }
      );


    /* =====================================================
       PARTICLE GEOMETRY
    ===================================================== */

    const particleGeometry =
      new THREE.BufferGeometry();


    particleGeometry.setAttribute(
      "position",

      new THREE.Float32BufferAttribute(
        positions,
        3
      )
    );


    /* =====================================================
       PARTICLE MATERIAL
    ===================================================== */

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0xfdb913,
        size: 0.08,
        transparent: true,
        opacity: 0.82,
        sizeAttenuation: true,
      });


    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );


    networkGroup.add(
      particles
    );


    /* =====================================================
       CONNECTION LINES
    ===================================================== */

    const linePositions = [];


    for (
      let i = 0;
      i < pointVectors.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < pointVectors.length;
        j++
      ) {

        const distance =
          pointVectors[i].distanceTo(
            pointVectors[j]
          );


        if (distance < 1.9) {

          linePositions.push(
            pointVectors[i].x,
            pointVectors[i].y,
            pointVectors[i].z,

            pointVectors[j].x,
            pointVectors[j].y,
            pointVectors[j].z
          );

        }

      }

    }


    const lineGeometry =
      new THREE.BufferGeometry();


    lineGeometry.setAttribute(
      "position",

      new THREE.Float32BufferAttribute(
        linePositions,
        3
      )
    );


    const lineMaterial =
      new THREE.LineBasicMaterial({
        color: 0xfdb913,
        transparent: true,
        opacity: 0.2,
      });


    const lines =
      new THREE.LineSegments(
        lineGeometry,
        lineMaterial
      );


    networkGroup.add(
      lines
    );


    /* =====================================================
       ANIMATION
       INTERNAL THREE.JS ONLY
    ===================================================== */

    let animationFrameId;


    const animate = () => {

      animationFrameId =
        requestAnimationFrame(
          animate
        );


      networkGroup.rotation.y +=
        0.00045;


      networkGroup.rotation.z +=
        0.0001;


      renderer.render(
        scene,
        camera
      );
    };


    if (reduceMotion) {

      renderer.render(
        scene,
        camera
      );

    } else {

      animate();

    }


    /* =====================================================
       RESIZE
    ===================================================== */

    const handleResize = () => {

      const width =
        container.clientWidth;


      const height =
        container.clientHeight;


      if (!width || !height) return;


      camera.aspect =
        width / height;


      camera.updateProjectionMatrix();


      renderer.setSize(
        width,
        height
      );

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {

      if (animationFrameId) {

        cancelAnimationFrame(
          animationFrameId
        );

      }


      window.removeEventListener(
        "resize",
        handleResize
      );


      particleGeometry.dispose();

      particleMaterial.dispose();

      lineGeometry.dispose();

      lineMaterial.dispose();

      renderer.dispose();


      if (
        renderer.domElement &&
        container.contains(
          renderer.domElement
        )
      ) {

        container.removeChild(
          renderer.domElement
        );

      }

    };

  }, []);


  return (
    <div
      ref={mountRef}
      className="insights-page-hero__canvas"
      aria-hidden="true"
    />
  );
}


export default InsightsCanvas;