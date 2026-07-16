import "./Technologies.css";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  { icon: <FaBrain />, title: "AI & ML" },
  { icon: <FaCloud />, title: "Cloud" },
  { icon: <FaChartLine />, title: "Data Analytics" },
  { icon: <FaCodeBranch />, title: "DevOps" },
  { icon: <FaWifi />, title: "IoT" },
  { icon: <FaShieldAlt />, title: "Cyber Security" },
  { icon: <FaLink />, title: "Blockchain" },
  { icon: <MdViewInAr />, title: "AR / VR" },
  { icon: <SiSap />, title: "SAP" },
  { icon: <FaLaptopCode />, title: "Enterprise Apps" },
];

function Technologies() {
  const sectionRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from(".section-title", {
  opacity: 0,
  y: 30,
  duration: 0.45,
  ease: "power2.out",
})
.from(
  ".title-line",
  {
    scaleX: 0,
    transformOrigin: "center",
    duration: 0.25,
    ease: "power2.out",
  },
  "-=0.2"
)
.from(
  ".tech-card",
  {
    opacity: 0,
    y: 30,
    duration: 0.3,
    stagger: 0.04,
    ease: "power2.out",
    clearProps: "all",
  },
  "-=0.1"
);
  }, sectionRef);

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, []);

  return (
    <section className="technologies" ref={sectionRef}>
      <div className="technologies-container">

        <h2 className="section-title">
          Technologies We <span>Leverage</span>
        </h2>

        <div className="title-line"></div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Technologies;