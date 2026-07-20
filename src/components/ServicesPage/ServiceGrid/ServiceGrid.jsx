import "./ServiceGrid.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLaptopCode,
  FaCogs,
  FaCheckCircle,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaShieldAlt,
  FaProjectDiagram,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Digital Engineering",
    description:
      "Accelerate digital transformation through innovative engineering solutions.",
  },
  {
    icon: <FaCogs />,
    title: "Product Engineering",
    description:
      "Design and develop reliable products from concept to deployment.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Engineering",
    description:
      "Deliver software with high quality using modern testing strategies.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Engineering",
    description:
      "Build scalable and secure cloud-native applications and platforms.",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    description:
      "Leverage AI and automation to improve business efficiency.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Engineering",
    description:
      "Transform raw data into meaningful business insights.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    description:
      "Protect enterprise systems through modern security practices.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "IT Consulting",
    description:
      "Expert guidance for technology strategy and digital transformation.",
  },
];

function ServiceGrid() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".service-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
        ".service-card",

        {
          opacity: 0,
          y: 50,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "opacity,transform",

          scrollTrigger: {
            trigger: ".services-grid",
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

    <section
      className="service-grid-section"
      ref={sectionRef}
    >

      <div className="service-container">

        <div className="service-heading">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Engineering Excellence
            <br />
            Across Every Domain
          </h2>

          <p>
            We provide end-to-end engineering and technology
            services that empower businesses to innovate,
            modernize and grow with confidence.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ServiceGrid;