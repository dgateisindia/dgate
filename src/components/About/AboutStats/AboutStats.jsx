import "./AboutStats.css";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
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
    icon: <FaTrophy />,
    value: 20,
    suffix: "+",
    title: "Years of Excellence",
  },
  {
    icon: <FaUsers />,
    value: 2500,
    suffix: "+",
    title: "Engineering Experts",
  },
  {
    icon: <FaGlobe />,
    value: 500,
    suffix: "+",
    title: "Global Clients",
  },
  {
    icon: <FaMapMarkerAlt />,
    value: 25,
    suffix: "+",
    title: "Countries Worldwide",
  },
  {
    icon: <FaStar />,
    value: 98,
    suffix: "%",
    title: "Client Retention",
  },
];

function AboutStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const counters =
      sectionRef.current.querySelectorAll(".about-count");

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
          counter.innerHTML =
            Math.floor(obj.value) + suffix;
        },
      });
    });
  }, []);

  return (
    <section
      className="about-stats"
      ref={sectionRef}
    >
      <div className="about-stats-container">
        {stats.map((item, index) => (
          <div
            className="about-stat-card"
            key={index}
          >
            <div className="about-stat-icon">
              {item.icon}
            </div>

            <div className="about-stat-info">
              <h3
                className="about-count"
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

export default AboutStats;