import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import Particles from "./Particles";

export default function HeroCanvas() {
  return (
    <div
      className="home-hero__canvas"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Particles />

        <EffectComposer multisampling={0}>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}