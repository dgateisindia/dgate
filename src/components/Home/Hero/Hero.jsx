import "./Hero.css";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { heroBg } from "../../../assets/images/home/hero";
import HeroCanvas from "./HeroCanvas";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(
        ".home-hero__title",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        }
      )
        .from(
          ".home-hero__description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="home-hero"
      ref={heroRef}
      aria-labelledby="home-hero-title"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="home-hero__bg"
        loading="eager"
        fetchPriority="high"
      />

      <HeroCanvas />

      <div className="home-hero__content">

        <h1
          id="home-hero-title"
          className="home-hero__title"
        >
          We transform how businesses are seen, experienced and chosen.
        </h1>
<br></br>
        <p className="home-hero__description">
          Strategy, Creativity, Digital Experience, Growth — brought together to move ambitious businesses forward.

We help brands find sharper direction, create stronger experiences, and build marketing systems that turn attention into meaningful business momentum.
        </p>
         <span className="home-hero__tag">
        Transformative Marketing Agency
        </span>

      </div>
    </section>
  );
}

export default Hero;