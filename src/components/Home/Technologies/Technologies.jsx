import "./Technologies.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaBrain,
  FaCloud,
  FaChartLine,
  FaCodeBranch,
  FaWifi,
  FaShieldAlt,
  FaLaptopCode,
  FaLink,
} from "react-icons/fa";

import { SiSap } from "react-icons/si";
import { MdViewInAr } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    id: "ai-ml",
    icon: FaBrain,
    title: "AI & ML",
  },
  {
    id: "cloud",
    icon: FaCloud,
    title: "Cloud",
  },
  {
    id: "data-analytics",
    icon: FaChartLine,
    title: "Data Analytics",
  },
  {
    id: "devops",
    icon: FaCodeBranch,
    title: "DevOps",
  },
  {
    id: "iot",
    icon: FaWifi,
    title: "IoT",
  },
  {
    id: "cyber-security",
    icon: FaShieldAlt,
    title: "Cyber Security",
  },
  {
    id: "blockchain",
    icon: FaLink,
    title: "Blockchain",
  },
  {
    id: "ar-vr",
    icon: MdViewInAr,
    title: "AR / VR",
  },
  {
    id: "sap",
    icon: SiSap,
    title: "SAP",
  },
  {
    id: "enterprise-apps",
    icon: FaLaptopCode,
    title: "Enterprise Apps",
  },
];

function Technologies() {
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
        .from(".home-technologies__title", {
          opacity: 0,
          y: 30,
          duration: 0.45,
          ease: "power2.out",
        })

        .from(
          ".home-technologies__line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2"
        )

        .from(
          ".home-technologies__card",
          {
            opacity: 0,
            y: 25,
            duration: 0.35,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="home-technologies"
      ref={sectionRef}
      aria-labelledby="home-technologies-title"
    >
      <div className="container">

        <h2
          id="home-technologies-title"
          className="home-technologies__title"
        >
          Technologies We{" "}
          <span>Leverage</span>
        </h2>

        <div className="home-technologies__line" />

        <div className="home-technologies__grid">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <article
                className="home-technologies__card"
                key={tech.id}
              >
                <div
                  className="home-technologies__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {tech.title}
                </h3>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Technologies;