import "./ContactHero.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import { contactHeroBg } from "../../../assets/images/Contact/hero";


function ContactHero() {
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
          ".contact-page-hero__tag",
          {
            opacity: 0,
            y: 16,
            duration: 0.45,
          }
        )
        .from(
          ".contact-page-hero__title",
          {
            opacity: 0,
            y: 35,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".contact-page-hero__line",
          {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
          },
          "-=0.3"
        )
        .from(
          ".contact-page-hero__description",
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
      className="contact-page-hero"
      ref={heroRef}
      aria-labelledby="contact-page-hero-title"
    >
      <img
        src={contactHeroBg}
        alt=""
        aria-hidden="true"
        className="contact-page-hero__bg"
        loading="eager"
        fetchPriority="high"
      />

      <div className="contact-page-hero__content">
        <span className="contact-page-hero__tag">
          Let&apos;s Connect
        </span>

        <h1
          id="contact-page-hero-title"
          className="contact-page-hero__title"
        >
          Bring us the
          <br />
          challenge{" "}
          <span className="contact-page-hero__title-accent">
            , not the brief.
          </span>
        </h1>

        <div
          className="contact-page-hero__line"
          aria-hidden="true"
        />

        <p className="contact-page-hero__description">
          Tell us what is changing in your business, what feels stuck, or what you want the market to understand differently. We can begin there
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
