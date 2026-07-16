import "./IndustriesHero.css";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import IndustriesCanvas from "./IndustriesCanvas";

import {
  industriesHeroBg,
} from "../../../assets/images/Industries/hero";

function IndustriesHero() {

  const heroRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl

      .from(".industries-breadcrumb", {

        x: -40,

        opacity: 0,

        duration: .6,

        ease: "power3.out",

      })

      .from(".industries-title", {

        y: 50,

        opacity: 0,

        duration: .8,

        ease: "power3.out",

      }, "-=.2")

      .from(".industries-line", {

        width: 0,

        duration: .45,

        ease: "power2.out",

      })

      .from(".industries-text", {

        y: 30,

        opacity: 0,

        duration: .7,

        ease: "power3.out",

      }, "-=.2")

      .from(".industries-right", {

        x: 80,

        opacity: 0,

        duration: 1,

        ease: "power3.out",

      }, "-=.5");

    }, heroRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      className="industries-hero"
      ref={heroRef}
    >

      <div className="industries-container">

        {/* ================= LEFT ================= */}

        <div className="industries-left">

          <div className="industries-breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>›</span>

            <span>Industries</span>

          </div>

          <h1 className="industries-title">

            Empowering

            <span>
              Industries Worldwide
            </span>

          </h1>

          <div className="industries-line"></div>

          <p className="industries-text">

            We partner with organizations across
            diverse industries to deliver innovative
            engineering solutions that accelerate
            digital transformation, improve operational
            efficiency, and create sustainable
            business value.

          </p>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="industries-right">

          <img
            src={industriesHeroBg}
            alt="Industries"
            className="industries-bg"
          />

          {/* White Gradient */}

          <div className="industries-overlay"></div>

          {/* Three.js Canvas */}

          <div className="industries-canvas">

            <IndustriesCanvas />

          </div>

        </div>

      </div>

    </section>

  );

}

export default IndustriesHero;