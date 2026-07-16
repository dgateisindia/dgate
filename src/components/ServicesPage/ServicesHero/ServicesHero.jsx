import "./ServicesHero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import ServicesCanvas from "./ServicesCanvas";
import { servicesHeroBg } from "../../../assets/images/Services/hero";

function ServicesHero() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(".services-breadcrumb", {

        x: -30,

        opacity: 0,

        duration: .6,

        ease: "power3.out",

      })

      .from(".services-title", {

        y: 40,

        opacity: 0,

        duration: .8,

        ease: "power3.out",

      }, "-=.2")

      .from(".services-line", {

        width: 0,

        duration: .5,

      })

      .from(".services-text", {

        y: 30,

        opacity: 0,

        duration: .7,

        ease: "power3.out",

      }, "-=.2")

      .from(".services-canvas-wrapper", {

        x: 80,

        opacity: 0,

        duration: 1,

        ease: "power3.out",

      }, "-=.5");

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="services-hero"
      ref={sectionRef}
    >

      <div className="services-hero-container">

        {/* LEFT */}

        <div className="services-left">

          <div className="services-breadcrumb">

            <Link to="/">Home</Link>

            <span>›</span>

            <span>Services</span>

          </div>

          <h1 className="services-title">

            Our Services

          </h1>

          <div className="services-line"></div>

          <p className="services-text">

            Comprehensive engineering solutions designed to accelerate
            digital transformation, enhance innovation, and deliver
            sustainable business growth through cutting-edge technology.

          </p>

        </div>

        {/* RIGHT */}

        <div className="services-canvas-wrapper">

            <img
                src={servicesHeroBg}
                alt="Engineering"
                className="services-bg-image"
            />

            <div className="services-overlay"></div>

            <ServicesCanvas />

        </div>

      </div>

    </section>

  );

}

export default ServicesHero;