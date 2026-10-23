import "./AboutCTA.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function AboutCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      timeline
        .from(".about-cta__box", {
          y: 35,
          opacity: 0,
          duration: 0.7,
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
          "-=0.35"
        )

        .from(
          ".about-cta__button",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-cta"
      ref={sectionRef}
      aria-labelledby="about-cta-title"
    >
      <div className="container">

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
                Have a business challenge worth rethinking?
              </h2>

              <p>
                Let’s find the change that creates the next opportunity.
              </p>

            </div>

          </div>

          <Link
            to="/contact"
            className="about-cta__button"
            aria-label="Talk to D-GATE"
          >
            <span>Talk to D-GATE</span>

            <FaArrowRight aria-hidden="true" />
          </Link>
``
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;