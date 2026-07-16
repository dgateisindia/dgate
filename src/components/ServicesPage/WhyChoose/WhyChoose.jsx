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
    icon: <FaUsers />,
    title: "Domain Expertise",
    description:
      "Deep industry knowledge and engineering excellence across multiple business domains.",
  },
  {
    icon: <FaAward />,
    title: "Innovation Driven",
    description:
      "Leveraging modern technologies to build scalable and future-ready digital solutions.",
  },
  {
    icon: <FaBullseye />,
    title: "Client Focused",
    description:
      "Delivering customized engineering services aligned with business objectives.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assured",
    description:
      "Committed to quality, reliability and continuous improvement in every engagement.",
  },
];

function WhyChoose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-left", {
        x: -50,
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
        ".why-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: ".why-right",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-container">

        <div className="why-left">
          <span className="why-tag">
            WHY D-GATE
          </span>

          <h2>
            Why Choose
            <br />
            D-GATE?
          </h2>

          <div className="why-line"></div>

          <p>
            We combine engineering expertise,
            innovation and technology to deliver
            scalable, reliable and business-driven
            digital solutions that create measurable value.
          </p>
        </div>

        <div className="why-right">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {feature.icon}
              </div>

              <div className="why-content">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;