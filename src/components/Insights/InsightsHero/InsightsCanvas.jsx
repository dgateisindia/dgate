import { useEffect, useRef } from "react";

import * as THREE from "three";

function InsightsCanvas() {

  const mountRef = useRef(null);

  useEffect(() => {

    const container = mountRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    const networkGroup = new THREE.Group();

    scene.add(networkGroup);

    const particleCount = 24;

    const positions = [];

    const particlePositions = [];


    for (let i = 0; i < particleCount; i++) {

      const x =
        (Math.random() - 0.5) * 9;

      const y =
        (Math.random() - 0.5) * 5.5;

      const z =
        (Math.random() - 0.5) * 2;


      positions.push(
        x,
        y,
        z
      );


      particlePositions.push(
        new THREE.Vector3(
          x,
          y,
          z
        )
      );

    }


    const particleGeometry =
      new THREE.BufferGeometry();


    particleGeometry.setAttribute(

      "position",

      new THREE.Float32BufferAttribute(
        positions,
        3
      )

    );


    const particleMaterial =
      new THREE.PointsMaterial({

        color: 0xffb000,

        size: 0.085,

        transparent: true,

        opacity: 0.85,

        sizeAttenuation: true,

      });


    const particles =
      new THREE.Points(

        particleGeometry,

        particleMaterial

      );


    networkGroup.add(particles);

    const linePositions = [];


    for (
      let i = 0;
      i < particlePositions.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < particlePositions.length;
        j++
      ) {

        const distance =

          particlePositions[i]
            .distanceTo(
              particlePositions[j]
            );


        if (distance < 2.1) {

          linePositions.push(

            particlePositions[i].x,
            particlePositions[i].y,
            particlePositions[i].z,

            particlePositions[j].x,
            particlePositions[j].y,
            particlePositions[j].z

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

        color: 0xffb000,

        transparent: true,

        opacity: 0.22,

      });


    const lines =
      new THREE.LineSegments(

        lineGeometry,

        lineMaterial

      );


    networkGroup.add(lines);


    let mouseX = 0;

    let mouseY = 0;


    const handleMouseMove = (event) => {

      const rect =
        container.getBoundingClientRect();


      mouseX =

        ((event.clientX - rect.left) /
          rect.width -
          0.5) *
        2;


      mouseY =

        ((event.clientY - rect.top) /
          rect.height -
          0.5) *
        2;

    };


    container.addEventListener(
      "mousemove",
      handleMouseMove
    );


    let animationFrameId;


    const animate = () => {

      animationFrameId =
        requestAnimationFrame(animate);


      networkGroup.rotation.y +=
        0.0007;


      networkGroup.rotation.z +=
        0.00015;


      networkGroup.rotation.x +=

        (
          mouseY * 0.025 -
          networkGroup.rotation.x
        ) *
        0.025;


      networkGroup.rotation.y +=

        (
          mouseX * 0.02 -
          networkGroup.rotation.y
        ) *
        0.004;


      renderer.render(
        scene,
        camera
      );

    };


    animate();


    const handleResize = () => {

      if (!container) return;


      const width =
        container.clientWidth;

      const height =
        container.clientHeight;


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

    return () => {

      cancelAnimationFrame(
        animationFrameId
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


      container.removeEventListener(
        "mousemove",
        handleMouseMove
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

      className="insights-three-canvas"

      aria-hidden="true"

    />

  );

}

export default InsightsCanvas;