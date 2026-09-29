import "./Stats.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaUsers,
  FaGlobe,
  FaAward,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: "experience",
    icon: FaBriefcase,
    value: 20,
    suffix: "+",
    title: "Years Team Experience",
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
    icon: FaBuilding,
    value: 500,
    suffix: "+",
    title: "Global Clients",
  },
  {
    id: "countries",
    icon: FaGlobe,
    value: 25,
    suffix: "+",
    title: "Countries Served",
  },
  {
    id: "retention",
    icon: FaAward,
    value: 98,
    suffix: "%",
    title: "Client Retention",
  },
];

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const counters =
        sectionRef.current.querySelectorAll(
          ".home-stats__counter"
        );

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        counters.forEach((counter) => {
          counter.textContent =
            counter.dataset.value +
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

            const counterObject = {
              value: 0,
            };

            gsap.to(counterObject, {
              value: target,
              duration: 1.8,
              ease: "power2.out",

              onUpdate: () => {
                counter.textContent =
                  Math.floor(
                    counterObject.value
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
      className="home-stats"
      ref={sectionRef}
      aria-label="D-GATE company statistics"
    >
      <div className="container">

        <div className="home-stats__grid">

          {statsData.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="home-stats__card"
                key={item.id}
              >
                <div
                  className="home-stats__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <div className="home-stats__content">

                  <h3
                    className="home-stats__counter"
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

export default Stats;