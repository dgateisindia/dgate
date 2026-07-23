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
    title: "Automotive",
    image: automotive,
    description:
      "Accelerating next-generation mobility through digital engineering, connected systems and intelligent manufacturing.",
  },
  {
    title: "Healthcare",
    image: healthcare,
    description:
      "Delivering secure, compliant and patient-centric healthcare solutions powered by innovation and technology.",
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    description:
      "Transforming factories with Industry 4.0, automation and smart manufacturing solutions.",
  },
  {
    title: "Banking & Finance",
    image: banking,
    description:
      "Building secure digital banking platforms and intelligent financial technology solutions.",
  },
  {
    title: "Retail & E-Commerce",
    image: retail,
    description:
      "Creating personalized customer experiences through scalable commerce and retail technologies.",
  },
  {
    title: "Telecommunications",
    image: telecom,
    description:
      "Empowering connected enterprises with next-generation communication and networking solutions.",
  },
  {
    title: "Energy & Utilities",
    image: energy,
    description:
      "Supporting sustainable energy transformation with modern engineering and digital innovation.",
  },
  {
    title: "Logistics & Transportation",
    image: logistics,
    description:
      "Optimizing supply chains with intelligent logistics, automation and real-time visibility.",
  },
];

function IndustriesGrid() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".industries-heading", {

        y: 40,

        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {

          trigger: sectionRef.current,

          start: "top 75%",

          once: true,

        },

      });

      gsap.fromTo(

        ".industry-card",

        {
          opacity: 0,
          y: 60,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "opacity,transform",

          scrollTrigger: {

            trigger: ".industries-grid",

            start: "top 80%",

            once: true,

          },

        }

      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      id="industries-grid"
      className="industries-grid-section"
      ref={sectionRef}
    >

      <div className="industries-grid-container">

        {/* ================= Heading ================= */}

        <div className="industries-heading">

          <span className="section-tag">

            OUR INDUSTRIES

          </span>

          <h2>

            Engineering Excellence
            <br />
            Across Every Industry

          </h2>

          <p>

            D-GATE partners with organizations across
            diverse industries to deliver innovative
            engineering solutions that improve efficiency,
            accelerate digital transformation and create
            sustainable business growth.

          </p>

        </div>

        {/* ================= Grid ================= */}

        <div className="industries-grid">

          {industries.map((industry, index) => (

            <div
              className="industry-card"
              key={index}
            >

              <div className="industry-image">

                <img
                  src={industry.image}
                  alt={industry.title}
                />

              </div>

              <div className="industry-content">

                <h3>

                  {industry.title}

                </h3>

                <p>

                  {industry.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default IndustriesGrid;