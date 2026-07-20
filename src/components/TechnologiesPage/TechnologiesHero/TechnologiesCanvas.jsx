import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {

    const ref = useRef();

    const count = 220;

    const positions = useMemo(() => {

        const array = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {

            array[i * 3] = (Math.random() - 0.5) * 14;

            array[i * 3 + 1] = (Math.random() - 0.5) * 8;

            array[i * 3 + 2] = (Math.random() - 0.5) * 8;

        }

        return array;

    }, []);

    useFrame((state) => {

        if (!ref.current) return;

        ref.current.rotation.y =
            state.clock.elapsedTime * 0.02;

    });

    return (

        <points ref={ref}>

            <bufferGeometry>

                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />

            </bufferGeometry>

            <pointsMaterial

                color="#FFE08A"

                size={0.03}

                transparent

                opacity={0.55}

                depthWrite={false}

            />

        </points>

    );

}

function TechNode({

    position,

    color = "#FDB913",

    scale = 1

}) {

    const mesh = useRef();

    useFrame((state) => {

        if (!mesh.current) return;

        mesh.current.rotation.y += 0.01;

        mesh.current.position.y =
            position[1] +
            Math.sin(
                state.clock.elapsedTime +
                position[0]
            ) * 0.08;

    });

    return (

        <Float

            speed={2}

            floatIntensity={0.4}

            rotationIntensity={0.2}

        >

            <mesh

                ref={mesh}

                position={position}

                scale={scale}

            >

                <icosahedronGeometry
                    args={[0.12, 0]}
                />

                <meshStandardMaterial

                    color={color}

                    emissive={color}

                    emissiveIntensity={1.4}

                    metalness={0.8}

                    roughness={0.25}

                />

            </mesh>

        </Float>

    );

}

function Connections() {

    const ref = useRef();

    const geometry = useMemo(() => {

        const points = [

            new THREE.Vector3(-2.2, 1.2, 0),

            new THREE.Vector3(-0.8, 0.4, 0),

            new THREE.Vector3(1.0, 1.5, 0),

            new THREE.Vector3(2.3, 0.2, 0),

            new THREE.Vector3(0.8, -1.2, 0),

            new THREE.Vector3(-1.8, -1.3, 0),

            new THREE.Vector3(-2.2, 1.2, 0),

        ];

        return new THREE.BufferGeometry().setFromPoints(points);

    }, []);

    useFrame((state) => {

        if (!ref.current) return;

        ref.current.rotation.z =
            Math.sin(state.clock.elapsedTime * 0.15) * 0.05;

        ref.current.rotation.y =
            state.clock.elapsedTime * 0.04;

    });

    return (

        <line ref={ref} geometry={geometry}>

            <lineBasicMaterial

                color="#FFD770"

                transparent

                opacity={0.45}

            />

        </line>

    );

}

function Scene() {

    const group = useRef();

    useFrame(({ mouse }) => {

        if (!group.current) return;

        group.current.rotation.y = THREE.MathUtils.lerp(

            group.current.rotation.y,

            mouse.x * 0.18,

            0.05

        );

        group.current.rotation.x = THREE.MathUtils.lerp(

            group.current.rotation.x,

            -mouse.y * 0.10,

            0.05

        );

    });

    return (

        <group ref={group}>

            <Particles />

            <Connections />

            {/* Technology Nodes */}

            <TechNode

                position={[-2.2,1.2,0]}

                color="#FDB913"

            />

            <TechNode

                position={[-0.8,0.4,0]}

                color="#FFFFFF"

                scale={0.9}

            />

            <TechNode

                position={[1.0,1.5,0]}

                color="#FFE08A"

            />

            <TechNode

                position={[2.3,0.2,0]}

                color="#8FD7FF"

            />

            <TechNode

                position={[0.8,-1.2,0]}

                color="#FFFFFF"

                scale={0.8}

            />

            <TechNode

                position={[-1.8,-1.3,0]}

                color="#FDB913"

            />

        </group>

    );

}

export default function TechnologiesCanvas() {

    return (

        <Canvas

            camera={{

                position:[0,0,6],

                fov:45,

            }}

            dpr={[1,2]}

            gl={{

                antialias:true,

                alpha:true,

            }}

        >


            <ambientLight

                intensity={1.2}

            />

            <directionalLight

                position={[4,5,5]}

                intensity={1.8}

                color="#ffffff"

            />

            <pointLight

                position={[2,2,3]}

                intensity={18}

                color="#FDB913"

            />

            <pointLight

                position={[-3,-2,2]}

                intensity={10}

                color="#ffffff"

            />

            <pointLight

                position={[0,-3,3]}

                intensity={8}

                color="#8FD7FF"

            />
            <Scene/>

        </Canvas>

    );

}