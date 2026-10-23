import "./CareersHero.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import { careersHeroBg } from "../../../assets/images/Careers/hero";


function CareersHero() {
  const heroRef = useRef(null);


  /* =========================================================
     HERO ENTRANCE ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!heroRef.current) return undefined;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(
          ".careers-page-hero__tag",
          {
            opacity: 0,
            y: 16,
            duration: 0.45,
          }
        )
        .from(
          ".careers-page-hero__title",
          {
            opacity: 0,
            y: 35,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".careers-page-hero__line",
          {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
          },
          "-=0.3"
        )
        .from(
          ".careers-page-hero__description",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
          },
          "-=0.2"
        );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);


  return (
    <section
      className="careers-page-hero"
      ref={heroRef}
      aria-labelledby="careers-page-hero-title"
    >
      <img
        src={careersHeroBg}
        alt=""
        aria-hidden="true"
        className="careers-page-hero__bg"
        loading="eager"
        fetchPriority="high"
      />

      <div className="careers-page-hero__content">
        <span className="careers-page-hero__tag">
          Careers At D-GATE
        </span>

        <h1
          id="careers-page-hero-title"
          className="careers-page-hero__title"
        >
          Come make work that moves{" "}
          <span className="careers-page-hero__title-accent">
            something.
          </span>
        </h1>

        <div
          className="careers-page-hero__line"
          aria-hidden="true"
        />

        <p className="careers-page-hero__description">
          We are building a team of strategists, designers, creators, marketers, developers and problem-solvers who care about the quality of the idea and what the idea does in the real world.
        </p>
      </div>
    </section>
  );
}

export default CareersHero;
