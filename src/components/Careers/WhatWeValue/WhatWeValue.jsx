import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhatWeValue.css";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    id: "curiosity",
    title: "Curiosity",
    desc: "Ask better questions before reaching for familiar answers.",
  },
  {
    id: "craft",
    title: "Craft",
    desc: "Care about the detail because the detail changes the experience.",
  },
  {
    id: "ownership",
    title: "Ownership",
    desc: "Take responsibility for the work, the collaboration and the outcome.",
  },
  {
    id: "openness",
    title: "Openness",
    desc: "Strong ideas get stronger when they can be challenged.",
  },
  {
    id: "momentum",
    title: "Momentum",
    desc: "Move with intent. Learn quickly. Improve continuously.",
  },
];

function WhatWeValue() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".what-we-value__header", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".what-we-value__box", {
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="what-we-value-section"
      ref={sectionRef}
      aria-labelledby="what-we-value-title"
    >
      <div className="container">
        {/* SECTION HEADER */}
        <div className="what-we-value__header">
          <h2 id="what-we-value-title" className="what-we-value__title">
            What we <span>value</span>
          </h2>

          <div className="what-we-value__line" aria-hidden="true" />

          <p className="what-we-value__lead">
            The standards that shape how we think, create and grow together.
          </p>
        </div>

        {/* VALUE CARDS */}
        <div className="what-we-value__grid">
          {values.map((val) => (
            <div className="what-we-value__box" key={val.id}>
              {/* HEADER: TITLE */}
              <div className="what-we-value__box-header">
                <h3 className="what-we-value__box-title">{val.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="what-we-value__box-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeValue;
