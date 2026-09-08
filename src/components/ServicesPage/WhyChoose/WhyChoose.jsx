import "./WhyChoose.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaUsers,
  FaAward,
  FaBullseye,
  FaShieldAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "domain-expertise",
    icon: FaUsers,
    title: "Domain Expertise",
    description:
      "Deep industry knowledge and engineering excellence across multiple business domains.",
  },
  {
    id: "innovation-driven",
    icon: FaAward,
    title: "Innovation Driven",
    description:
      "Leveraging modern technologies to build scalable and future-ready digital solutions.",
  },
  {
    id: "client-focused",
    icon: FaBullseye,
    title: "Client Focused",
    description:
      "Delivering customized engineering services aligned with business objectives.",
  },
  {
    id: "quality-assured",
    icon: FaShieldAlt,
    title: "Quality Assured",
    description:
      "Committed to quality, reliability and continuous improvement in every engagement.",
  },
];

function WhyChoose() {
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
        .from(".services-why__left", {
          x: -35,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })

        .from(
          ".services-why__card",
          {
            y: 30,
            opacity: 0,
            duration: 0.45,
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
      className="services-why"
      ref={sectionRef}
      aria-labelledby="services-why-title"
    >
      <div className="container">

        <div className="services-why__wrapper">

          <div className="services-why__left">

            <span className="services-why__tag">
              WHY D-GATE
            </span>

            <h2 id="services-why-title">
              Why Choose
              <br />
              D-GATE?
            </h2>

            <div
              className="services-why__line"
              aria-hidden="true"
            />

            <p>
              We combine engineering expertise, innovation and
              technology to deliver scalable, reliable and
              business-driven digital solutions that create
              measurable value.
            </p>

          </div>

          <div className="services-why__grid">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="services-why__card"
                  key={feature.id}
                >
                  <div
                    className="services-why__icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>

                  <div className="services-why__content">

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>

                  </div>
                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;