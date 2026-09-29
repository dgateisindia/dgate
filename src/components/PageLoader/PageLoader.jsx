import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

import "./PageLoader.css";

const PageLoader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const lettersRef = useRef([]);
  const lineRef = useRef(null);

  const location = useLocation();

  useLayoutEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      /* =====================================
         INITIAL STATE
      ===================================== */

      gsap.set(loader, {
        display: "flex",
        opacity: 1,
      });

      gsap.set(logoRef.current, {
        scale: 0.7,
        opacity: 0,
      });

      gsap.set(lettersRef.current, {
        y: 120,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });


      /* =====================================
         LOGO APPEARS
      ===================================== */

      tl.to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });


      /* =====================================
         D-GATE LETTERS
      ===================================== */

      tl.to(
        lettersRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.2"
      );


      /* =====================================
         LINE
      ===================================== */

      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.3"
      );


      /* =====================================
         SMALL DELAY
      ===================================== */

      tl.to({}, {
        duration: 0.35,
      });


      /* =====================================
         EXIT ANIMATION
      ===================================== */

      tl.to(loader, {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
      });


      /* =====================================
         HIDE LOADER
      ===================================== */

      tl.set(loader, {
        display: "none",
      });

    }, loaderRef);

    return () => {
      ctx.revert();
    };

  }, [location.pathname]);


  return (
    <div
      ref={loaderRef}
      className="page-loader"
    >

      {/* =====================================
          LOGO
      ===================================== */}

      <div
        ref={logoRef}
        className="loader-logo"
      >

        <div className="loader-logo-box">
          DG
        </div>

        <div className="loader-logo-name">
          D-GATE
        </div>

      </div>


      {/* =====================================
          D-GATE
      ===================================== */}

      <div className="loader-title">

        {["D", "-", "G", "A", "T", "E"].map(
          (letter, index) => (
            <span
              key={index}
              ref={(el) => {
                lettersRef.current[index] = el;
              }}
              className="loader-letter"
            >
              {letter}
            </span>
          )
        )}

      </div>


      {/* =====================================
          LINE
      ===================================== */}

      <div
        ref={lineRef}
        className="loader-line"
      ></div>


      {/* =====================================
          TEXT
      ===================================== */}

      <div className="loader-subtitle">
        IDEATE • INNOVATE • INITIATE
      </div>

    </div>
  );
};

export default PageLoader;