import "./TechnologyGrid.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaBrain,
  FaCloud,
  FaChartLine,
  FaInfinity,
  FaWifi,
  FaShieldAlt,
  FaLaptopCode,
  FaCube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const technologies = [
  {
    id: "ai-machine-learning",
    icon: FaBrain,
    title: "AI & Machine Learning",
    description:
      "Build intelligent applications using predictive analytics, machine learning models and AI-driven automation.",
  },

  {
    id: "cloud-computing",
    icon: FaCloud,
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure and cloud-native solutions powered by modern platforms and services.",
  },

  {
    id: "data-analytics",
    icon: FaChartLine,
    title: "Data Analytics",
    description:
      "Transform business data into meaningful insights through visualization, analytics and reporting.",
  },

  {
    id: "devops",
    icon: FaInfinity,
    title: "DevOps",
    description:
      "Accelerate software delivery using CI/CD pipelines, automation and continuous monitoring.",
  },

  {
    id: "internet-of-things",
    icon: FaWifi,
    title: "Internet of Things",
    description:
      "Connect smart devices and sensors for real-time monitoring, automation and intelligent operations.",
  },

  {
    id: "cyber-security",
    icon: FaShieldAlt,
    title: "Cyber Security",
    description:
      "Protect digital assets with secure architecture, threat detection and compliance-driven security.",
  },

  {
    id: "enterprise-applications",
    icon: FaLaptopCode,
    title: "Enterprise Applications",
    description:
      "Modern enterprise software solutions that improve productivity, collaboration and business processes.",
  },

  {
    id: "emerging-technologies",
    icon: FaCube,
    title: "Emerging Technologies",
    description:
      "Explore blockchain, AR/VR, automation and next-generation technologies to drive innovation.",
  },
];


function TechnologyGrid() {
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
        .from(
          ".technologies-grid__heading",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".technologies-grid__card",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="technology-stack"
      className="technologies-grid"
      ref={sectionRef}
      aria-labelledby="technologies-grid-title"
    >
      <div className="container">

        <div className="technologies-grid__heading">

          <span className="technologies-grid__tag">
            OUR TECHNOLOGIES
          </span>

          <h2 id="technologies-grid-title">
            Technologies We Leverage
          </h2>

          <p>
            We combine cutting-edge technologies,
            engineering expertise and scalable
            digital platforms to deliver innovative
            solutions across industries.
          </p>

        </div>


        <div className="technologies-grid__grid">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <article
                className="technologies-grid__card"
                key={tech.id}
              >

                <div
                  className="technologies-grid__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {tech.title}
                </h3>

                <p>
                  {tech.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}


export default TechnologyGrid;