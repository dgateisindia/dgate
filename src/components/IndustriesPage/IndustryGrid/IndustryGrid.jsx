import "./IndustryGrid.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  automotive,
  banking,
  healthcare,
  manufacturing,
  retail,
  telecom,
  energy,
  logistics,
} from "../../../assets/images/Industries/industries";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: "automotive",
    title: "Automotive",
    image: automotive,
    description:
      "Accelerating next-generation mobility through digital engineering, connected systems and intelligent manufacturing.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    image: healthcare,
    description:
      "Delivering secure, compliant and patient-centric healthcare solutions powered by innovation and technology.",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: manufacturing,
    description:
      "Transforming factories with Industry 4.0, automation and smart manufacturing solutions.",
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    image: banking,
    description:
      "Building secure digital banking platforms and intelligent financial technology solutions.",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    image: retail,
    description:
      "Creating personalized customer experiences through scalable commerce and retail technologies.",
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    image: telecom,
    description:
      "Empowering connected enterprises with next-generation communication and networking solutions.",
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    image: energy,
    description:
      "Supporting sustainable energy transformation with modern engineering and digital innovation.",
  },
  {
    id: "logistics-transportation",
    title: "Logistics & Transportation",
    image: logistics,
    description:
      "Optimizing supply chains with intelligent logistics, automation and real-time visibility.",
  },
];

function IndustriesGrid() {
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
        .from(".industries-page-grid__heading", {
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          clearProps: "opacity",
        })

        .from(
          ".industries-page-grid__card",
          {
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="industries-grid"
      className="industries-page-grid"
      ref={sectionRef}
      aria-labelledby="industries-grid-title"
    >
      <div className="container">

        <div className="industries-page-grid__heading">

          <span className="industries-page-grid__tag">
            OUR INDUSTRIES
          </span>

          <h2 id="industries-grid-title">
            Engineering Excellence
            <br />
            Across Every Industry
          </h2>

          <p>
            D-GATE partners with organizations across diverse
            industries to deliver innovative engineering
            solutions that improve efficiency, accelerate
            digital transformation and create sustainable
            business growth.
          </p>

        </div>


        <div className="industries-page-grid__grid">

          {industries.map((industry) => (
            <article
              className="industries-page-grid__card"
              key={industry.id}
            >

              <div className="industries-page-grid__image">

                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                />

              </div>

              <div className="industries-page-grid__content">

                <h3>
                  {industry.title}
                </h3>

                <p>
                  {industry.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default IndustriesGrid;