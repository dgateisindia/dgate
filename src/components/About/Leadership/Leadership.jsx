import "./Leadership.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

import worldMap from "../../../assets/images/about/world-map.png";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    id: "managing-director",
    name: "Leader Name",
    role: "Managing Director",
    linkedin: null,
  },
  {
    id: "ceo",
    name: "Leader Name",
    role: "Chief Executive Officer",
    linkedin: null,
  },
  {
    id: "cto",
    name: "Leader Name",
    role: "Chief Technology Officer",
    linkedin: null,
  },
  {
    id: "coo",
    name: "Leader Name",
    role: "Chief Operations Officer",
    linkedin: null,
  },
];

const locations = [
  {
    id: "north-america",
    label: "North America",
    className: "about-leadership__pin--north-america",
  },
  {
    id: "south-america",
    label: "South America",
    className: "about-leadership__pin--south-america",
  },
  {
    id: "europe",
    label: "Europe",
    className: "about-leadership__pin--europe",
  },
  {
    id: "middle-east",
    label: "Middle East",
    className: "about-leadership__pin--middle-east",
  },
  {
    id: "india",
    label: "India",
    className: "about-leadership__pin--india",
  },
  {
    id: "asia-pacific",
    label: "Asia Pacific",
    className: "about-leadership__pin--asia",
  },
];

function Leadership() {
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
        .from(".about-leadership__heading", {
          y: 30,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
        })

        .from(
          ".about-leadership__card",
          {
            y: 30,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        )

        .from(
          ".about-leadership__map",
          {
            x: 35,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.25"
        )

        .from(
          ".about-leadership__pin",
          {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-leadership"
      ref={sectionRef}
    >
      <div className="container">

        <div className="about-leadership__layout">

          {/* LEADERSHIP */}
          <div className="about-leadership__section">

            <div className="about-leadership__heading">

              <h2>
                Leadership Team
              </h2>

              <div
                className="about-leadership__line"
                aria-hidden="true"
              />

              <p>
                Experienced leaders driving innovation and growth.
              </p>

            </div>

            <div className="about-leadership__grid">

              {leaders.map((leader) => (
                <article
                  className="about-leadership__card"
                  key={leader.id}
                >

                  <div
                    className="about-leadership__photo"
                    aria-hidden="true"
                  >
                    <FaUserTie />
                  </div>

                  <h3>
                    {leader.name}
                  </h3>

                  <p className="about-leadership__role">
                    {leader.role}
                  </p>

                  {leader.linkedin && (
                    <a
                      className="about-leadership__linkedin"
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} LinkedIn profile`}
                    >
                      <FaLinkedinIn />
                    </a>
                  )}

                </article>
              ))}

            </div> 
            

            <Link
              to="/contact"
              className="about-leadership__button"
            >
              MEET THE TEAM
            </Link>

          </div>


          {/* GLOBAL PRESENCE */}
          <div className="about-leadership__section">

            <div className="about-leadership__heading">

              <h2>
                Global Presence
              </h2>

              <div
                className="about-leadership__line"
                aria-hidden="true"
              />

              <p>
                Delivering excellence across the globe.
              </p>

            </div>

            <div className="about-leadership__map">

              <img
                src={worldMap}
                alt="World map showing D-GATE global presence"
                loading="lazy"
              />

              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`about-leadership__pin ${location.className}`}
                  aria-label={location.label}
                >
                  <FaMapMarkerAlt aria-hidden="true" />

                  <span>
                    {location.label}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Leadership;