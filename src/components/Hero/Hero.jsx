import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./Hero.css";
import { heroBg, heroMobile } from "../../assets/images/hero";
import HeroCanvas from "./HeroCanvas";

function Hero() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      x: -30,
      opacity: 0.3,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        buttonRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section className="hero">
      <picture>
        <source media="(max-width:768px)" srcSet={heroMobile} />
        <img src={heroBg} alt="Hero" className="hero-bg" />
      </picture>

      <HeroCanvas />

      <div className="hero-content">
        <h1 ref={titleRef}>
          Engineering Solutions
          <br />
          That Drive
          <span> Innovation</span>
        </h1>

        <p ref={textRef}>
          DGATE is a trusted engineering services company delivering
          software, product engineering and technology solutions that
          help businesses transform and grow.
        </p>

        <div className="hero-buttons" ref={buttonRef}>
          <button className="primary-btn">
            EXPLORE SERVICES →
          </button>

          <button className="secondary-btn">
            ABOUT US →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;