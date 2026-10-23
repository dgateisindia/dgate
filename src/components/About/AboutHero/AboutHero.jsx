import "./AboutHero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { aboutHero } from "../../../assets/images/about";

function AboutHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".about-page-hero__title", {
        y: 45,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".about-page-hero__description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".about-page-hero__button",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.25"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-page-hero"
      ref={heroRef}
      aria-labelledby="about-page-hero-title"
    >
      <img
        src={aboutHero}
        alt=""
        aria-hidden="true"
        className="about-page-hero__bg"
        loading="eager"
        fetchPriority="high"
      />

      <div className="about-page-hero__content">
        <h1
          id="about-page-hero-title"
          className="about-page-hero__title"
        >
          We are here to make businesses more meaningful in the market.
        </h1>

        <p className="about-page-hero__description">
          D-GATE is a transformative marketing agency built around one belief: the strongest growth happens when strategy, creativity, experience and performance move together.
        </p>

        <Link
          to="/portfolio"
          className="about-page-hero__button"
          aria-label="View D-GATE portfolio"
        >
          Our Story
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default AboutHero;
