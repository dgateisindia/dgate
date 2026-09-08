import "./Journey.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaFlag,
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    id: "2003",
    year: "2003",
    icon: FaFlag,
    text: "Company Founded",
  },
  {
    id: "2008",
    year: "2008",
    icon: FaBuilding,
    text: "Global Delivery Centers",
  },
  {
    id: "2013",
    year: "2013",
    icon: FaUsers,
    text: "Expansion to New Markets",
  },
  {
    id: "2018",
    year: "2018",
    icon: FaHandshake,
    text: "100+ Global Clients",
  },
  {
    id: "2023",
    year: "2023+",
    icon: FaRocket,
    text: "Continuing the Journey",
  },
];

function Journey() {
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
        .from(".about-journey__title", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        })

        .from(
          ".about-journey__timeline-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.2"
        )

        .from(
          ".about-journey__item",
          {
            y: 30,
            opacity: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-journey"
      ref={sectionRef}
      aria-labelledby="about-journey-title"
    >
      <div className="container">

        <div className="about-journey__title">

          <h2 id="about-journey-title">
            OUR JOURNEY
          </h2>

          <div
            className="about-journey__title-line"
            aria-hidden="true"
          />

        </div>

        <div className="about-journey__wrapper">

          <div
            className="about-journey__timeline-line"
            aria-hidden="true"
          />

          <div className="about-journey__items">

            {journeyData.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-journey__item"
                  key={item.id}
                >

                  <div
                    className="about-journey__icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>

                  <div className="about-journey__content">

                    <h3>
                      {item.year}
                    </h3>

                    <p>
                      {item.text}
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

export default Journey;