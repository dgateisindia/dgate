import "./Stats.css";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
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
    icon: <FaBriefcase className="stat-icon" />,
    value: 20,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: <FaUsers className="stat-icon" />,
    value: 2500,
    suffix: "+",
    title: "Engineering Experts",
  },
  {
    icon: <FaBuilding className="stat-icon" />,
    value: 500,
    suffix: "+",
    title: "Global Clients",
  },
  {
    icon: <FaGlobe className="stat-icon" />,
    value: 25,
    suffix: "+",
    title: "Countries Served",
  },
  {
    icon: <FaAward className="stat-icon" />,
    value: 98,
    suffix: "%",
    title: "Client Retention",
  },
];

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters =
      sectionRef.current.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const target = Number(counter.dataset.value);
      const suffix = counter.dataset.suffix;

      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power2.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },

        onUpdate: () => {
          counter.textContent =
            Math.floor(obj.value) + suffix;
        },
      });
    });
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-card" key={index}>
            {item.icon}

            <div>
              <h3
                className="counter"
                data-value={item.value}
                data-suffix={item.suffix}
              >
                0{item.suffix}
              </h3>

              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;