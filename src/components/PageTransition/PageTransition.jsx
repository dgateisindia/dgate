import React, {
  useLayoutEffect,
  useRef,
} from "react";

import { gsap } from "gsap";

import "./PageTransition.css";


function PageTransition({
  onComplete,
}) {
  const containerRef =
    useRef(null);

  const topRef =
    useRef(null);

  const bottomRef =
    useRef(null);

  const titleRef =
    useRef(null);


  useLayoutEffect(() => {
    const container =
      containerRef.current;

    const title =
      titleRef.current;

    const top =
      topRef.current;

    const bottom =
      bottomRef.current;


    if (
      !container ||
      !title ||
      !top ||
      !bottom
    ) {
      return undefined;
    }


    const previousOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    const context =
      gsap.context(() => {

        const letters =
          gsap.utils.toArray(
            ".transition-letter"
          );


        /* =====================================================
           RESET
        ===================================================== */

        gsap.set(
          container,
          {
            visibility:
              "visible",

            opacity:
              1,

            pointerEvents:
              "all",
          }
        );


        gsap.set(
          top,
          {
            yPercent:
              0,
          }
        );


        gsap.set(
          bottom,
          {
            yPercent:
              0,
          }
        );


        gsap.set(
          title,
          {
            opacity:
              1,

            scale:
              1,
          }
        );


        gsap.set(
          letters,
          {
            opacity:
              0,

            y:
              35,

            scale:
              0.96,

            color:
              "#ffffff",
          }
        );


        /* =====================================================
           TIMELINE (Total duration: 2.0 seconds)
        ===================================================== */

        const timeline =
          gsap.timeline({

            defaults: {
              overwrite:
                "auto",
            },

            onComplete:
              () => {

                document.body.style.overflow =
                  previousOverflow;


                if (onComplete) {
                  onComplete();
                }

              },

          });


        /* =====================================================
           1. SHOW LETTERS ONE BY ONE (0.50s)
           - 6 letters, 0.04s stagger + 0.30s duration = 0.50s
        ===================================================== */

        timeline.to(
          letters,
          {
            opacity:
              1,

            y:
              0,

            scale:
              1,

            duration:
              0.3,

            stagger:
              0.04,

            ease:
              "power3.out",
          }
        );


        /* =====================================================
           SMALL PAUSE (0.08s) -> Total at 0.58s
        ===================================================== */

        timeline.to(
          {},
          {
            duration:
              0.08,
          }
        );


        /* =====================================================
           2. COLOR CHANGE ONE BY ONE (0.50s) -> Total at 1.08s
           - 6 letters, 0.06s stagger + 0.20s duration = 0.50s
        ===================================================== */

        timeline.to(
          letters,
          {
            color:
              "#8a8a8a",

            duration:
              0.2,

            stagger:
              0.06,

            ease:
              "power2.inOut",
          }
        );


        /* =====================================================
           3. FINAL TEXT PULSE (0.24s) -> Total at 1.32s
        ===================================================== */

        timeline.to(
          letters,
          {
            scale:
              1.025,

            duration:
              0.12,

            ease:
              "power2.out",
          }
        );


        timeline.to(
          letters,
          {
            scale:
              1,

            duration:
              0.12,

            ease:
              "power2.inOut",
          }
        );


        /* =====================================================
           4. FADE D-GATE BEFORE PANELS OPEN (0.18s) -> Total at 1.50s
        ===================================================== */

        timeline.to(
          title,
          {
            opacity:
              0,

            scale:
              0.96,

            duration:
              0.18,

            ease:
              "power2.in",
          }
        );


        /* =====================================================
           5. OPEN SCREEN (0.50s) -> Total at 2.00s
        ===================================================== */

        timeline.to(
          top,
          {
            yPercent:
              -100,

            duration:
              0.5,

            ease:
              "power4.inOut",
          }
        );


        timeline.to(
          bottom,
          {
            yPercent:
              100,

            duration:
              0.5,

            ease:
              "power4.inOut",
          },

          "<"
        );


        /* =====================================================
           HIDE TRANSITION
        ===================================================== */

        timeline.set(
          container,
          {
            visibility:
              "hidden",

            pointerEvents:
              "none",
          }
        );

      }, container);


    return () => {

      context.revert();


      document.body.style.overflow =
        previousOverflow;

    };

  }, [onComplete]);


  return (
    <div
      ref={containerRef}
      className="page-transition"
      aria-hidden="true"
    >

      {/* TOP HALF */}

      <div
        ref={topRef}
        className="
          transition-panel
          transition-top
        "
      />


      {/* BOTTOM HALF */}

      <div
        ref={bottomRef}
        className="
          transition-panel
          transition-bottom
        "
      />


      {/* =====================================================
          COMPLETE D-GATE TEXT
      ===================================================== */}

      <div
        ref={titleRef}
        className="transition-title"
      >

        <span className="transition-letter">
          D
        </span>

        <span className="transition-letter transition-hyphen">
          -
        </span>

        <span className="transition-letter">
          G
        </span>

        <span className="transition-letter">
          A
        </span>

        <span className="transition-letter">
          T
        </span>

        <span className="transition-letter">
          E
        </span>

      </div>

    </div>
  );
}


export default PageTransition;
