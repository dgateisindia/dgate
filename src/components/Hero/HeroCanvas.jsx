import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Particles from "./Particles";
import FloatingParticles from "./FloatingParticles";


export default function HeroCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
        dpr={[1, 2]}
      >
        <FloatingParticles/>
        <Particles />
        

        <EffectComposer>
          <Bloom
            intensity={0.9}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}