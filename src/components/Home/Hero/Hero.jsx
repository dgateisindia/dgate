import "./Hero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

      tl.from(".home-hero__tag", {
        y: 20,
        opacity: 0,
        duration: 0.5,
      })
        .from(
          ".home-hero__title",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".home-hero__description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".home-hero__actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
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

        <span className="home-hero__tag">
          IDEATE | INNOVATE | INITIATE
        </span>

        <h1
          id="home-hero-title"
          className="home-hero__title"
        >
          DGATE
          <br />
          Transformative Marketing
          <br />
          Agency in Bangalore
        </h1>

        <p className="home-hero__description">
          Bangalore-based digital agency for branding, web development,
          eCommerce, SEO &amp; AI automation. 250+ brands scaled. Get a
          free consult.
        </p>

        <div className="home-hero__actions">

          <Link
            to="/services"
            className="home-hero__button home-hero__button--primary"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="home-hero__button home-hero__button--secondary"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;