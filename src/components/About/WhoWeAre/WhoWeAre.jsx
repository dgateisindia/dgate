import "./WhoWeAre.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaCheckCircle } from "react-icons/fa";

import { office } from "../../../assets/images/about";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Innovation at the Core",
  "Long-term Partnerships",
  "Commitment to Quality",
  "Empowering Businesses",
];

function WhoWeAre() {
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
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .from(".about-who__image", {
          x: -50,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        })

        .from(
          ".about-who__content",
          {
            x: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        )

        .from(
          ".about-who__feature",
          {
            y: 18,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-story"
      className="about-who"
      ref={sectionRef}
      aria-labelledby="about-who-title"
    >
      <div className="container">

        <div className="about-who__layout">

          <div className="about-who__image">
            <img
              src={office}
              alt="D-GATE office workspace"
              loading="lazy"
            />
          </div>

          <div className="about-who__content">

            <span className="about-who__tag">
              WHO WE ARE
            </span>

            <h2 id="about-who-title">
              Building Innovation.
              <br />
              Delivering Excellence.
            </h2>

            <p>
              Established in 2003, D-GATE Integrated Services has
              grown into a global technology company, delivering
              innovative engineering solutions to clients across
              industries.
            </p>
            <p>
              Our journey is built on a foundation of trust,
              innovation, and a relentless focus on creating value
              for our clients.
            </p>

            <div className="about-who__features">

              {features.map((feature) => (
                <div
                  className="about-who__feature"
                  key={feature}
                >
                  <FaCheckCircle aria-hidden="true" />

                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;