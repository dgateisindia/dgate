import "./Leadership.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";

import worldMap from "../../../assets/images/about/world-map.png";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Leader Name",
    role: "Managing Director",
    linkedin: "#",
  },
  {
    name: "Leader Name",
    role: "Chief Executive Officer",
    linkedin: "#",
  },
  {
    name: "Leader Name",
    role: "Chief Technology Officer",
    linkedin: "#",
  },
  {
    name: "Leader Name",
    role: "Chief Operations Officer",
    linkedin: "#",
  },
];

function Leadership() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".lp-heading", {
        y: 30,
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
        ".leader-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".leaders-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.from(".presence-map", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".presence-map",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".map-pin", {
        scale: 0,
        opacity: 0,
        duration: .45,
        stagger: .12,
        ease: "back.out(1.8)",
        scrollTrigger: {
          trigger: ".presence-map",
          start: "top 80%",
          once: true,
        },
      });

    }, sectionRef);
    
    ScrollTrigger.refresh();
    return () => ctx.revert();

  }, []);

  return (

    <section
      className="leadership-presence"
      ref={sectionRef}
    >

      <div className="lp-container">

        {/* ================= LEFT ================= */}

        <div className="leadership-section">

          <div className="lp-heading">

            <h2>Leadership Team</h2>

            <div className="heading-line"></div>

            <p>
              Experienced leaders driving innovation and growth
            </p>

          </div>

          <div className="leaders-grid">

            {leaders.map((leader, index) => (

              <div
                className="leader-card"
                key={index}
              >

                <div className="leader-photo">
                  {/* Photo Placeholder */}
                </div>

                <h3>{leader.name}</h3>

                <span>{leader.role}</span>

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            ))}

          </div>

          <button className="meet-btn">

            Meet The Team

          </button>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="presence-section">

          <div className="lp-heading">

            <h2>Global Presence</h2>

            <div className="heading-line"></div>

            <p>
              Delivering excellence across the globe
            </p>

          </div>

          <div className="presence-map">

            <img
              src={worldMap}
              alt="World Map"
            />

            <div
              className="map-pin north-america"
            >
              <FaMapMarkerAlt />
              <span>North America</span>
            </div>

            <div
              className="map-pin south-america"
            >
              <FaMapMarkerAlt />
              <span>South America</span>
            </div>

            <div
              className="map-pin europe"
            >
              <FaMapMarkerAlt />
              <span>Europe</span>
            </div>

            <div
              className="map-pin middle-east"
            >
              <FaMapMarkerAlt />
              <span>Middle East</span>
            </div>

            <div
              className="map-pin india"
            >
              <FaMapMarkerAlt />
              <span>India</span>
            </div>

            <div
              className="map-pin asia"
            >
              <FaMapMarkerAlt />
              <span>Asia Pacific</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Leadership;