import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import Particles from "./Particles";

export default function HeroCanvas() {
  return (
    <div className="hero-canvas">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <Particles />

        <EffectComposer>
          <Bloom
            intensity={1.4}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}