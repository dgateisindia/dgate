import "./AboutCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaHandshake, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function AboutCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      timeline
        .from(".about-cta__box", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })

        .from(
          ".about-cta__icon",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )

        .from(
          ".about-cta__button",
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="about-cta"
      ref={sectionRef}
      aria-labelledby="about-cta-title"
    >
      <div className="about-cta__box">

        <div className="about-cta__left">

          <div
            className="about-cta__icon"
            aria-hidden="true"
          >
            <FaHandshake />
          </div>

          <div className="about-cta__content">

            <h2 id="about-cta-title">
              Let's Build Something Great Together
            </h2>

            <p>
              Partner with D-GATE to accelerate your digital
              transformation journey.
            </p>

          </div>

        </div>

        <Link
          to="/contact"
          className="about-cta__button"
          aria-label="Get in touch with D-GATE"
        >
          <span>GET IN TOUCH</span>

          <FaArrowRight aria-hidden="true" />
        </Link>

      </div>
    </section>
  );
}

export default AboutCTA;