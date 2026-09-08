import "./AboutStats.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaTrophy,
  FaUsers,
  FaGlobe,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    id: "experience",
    icon: FaTrophy,
    value: 20,
    suffix: "+",
    title: "Years of Excellence",
  },
  {
    id: "experts",
    icon: FaUsers,
    value: 2500,
    suffix: "+",
    title: "Engineering Experts",
  },
  {
    id: "clients",
    icon: FaGlobe,
    value: 500,
    suffix: "+",
    title: "Global Clients",
  },
  {
    id: "countries",
    icon: FaMapMarkerAlt,
    value: 25,
    suffix: "+",
    title: "Countries Worldwide",
  },
  {
    id: "retention",
    icon: FaStar,
    value: 98,
    suffix: "%",
    title: "Client Retention",
  },
];

function AboutStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const counters =
        sectionRef.current.querySelectorAll(
          ".about-stats__counter"
        );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        counters.forEach((counter) => {
          counter.textContent =
            Number(
              counter.dataset.value
            ).toLocaleString() +
            counter.dataset.suffix;
        });

        return;
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,

        onEnter: () => {
          counters.forEach((counter) => {
            const target = Number(
              counter.dataset.value
            );

            const suffix =
              counter.dataset.suffix || "";

            const obj = { value: 0 };

            gsap.to(obj, {
              value: target,
              duration: 1.8,
              ease: "power2.out",

              onUpdate: () => {
                counter.textContent =
                  Math.floor(
                    obj.value
                  ).toLocaleString() +
                  suffix;
              },

              onComplete: () => {
                counter.textContent =
                  target.toLocaleString() +
                  suffix;
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-stats"
      ref={sectionRef}
      aria-label="D-GATE company statistics"
    >
      <div className="container">

        <div className="about-stats__grid">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="about-stats__card"
                key={item.id}
              >
                <div
                  className="about-stats__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <div className="about-stats__info">

                  <h3
                    className="about-stats__counter"
                    data-value={item.value}
                    data-suffix={item.suffix}
                  >
                    0{item.suffix}
                  </h3>

                  <p>
                    {item.title}
                  </p>

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default AboutStats;