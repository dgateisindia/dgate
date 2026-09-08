import "./WhyWorkHere.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaChartLine,
  FaUsers,
  FaHeartbeat,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const benefits = [
  {
    id: "career-growth",
    icon: FaChartLine,
    title: "Career Growth",
    description:
      "Continuous learning and growth opportunities",
  },
  {
    id: "great-culture",
    icon: FaUsers,
    title: "Great Culture",
    description:
      "Collaborative, inclusive and respectful workplace",
  },
  {
    id: "wellness-first",
    icon: FaHeartbeat,
    title: "Wellness First",
    description:
      "Health & wellness programs for you and your family",
  },
  {
    id: "recognition",
    icon: FaAward,
    title: "Recognition",
    description:
      "Celebrate achievements and reward excellence",
  },
  {
    id: "work-life-balance",
    icon: FaCalendarCheck,
    title: "Work-Life Balance",
    description:
      "Flexible schedules and work-life integration",
  },
];


function WhyWorkHere() {
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
          start: "top 85%",
          once: true,
        },
      });


      /* ===============================================
         FADE ONLY
         NO X / Y / SCALE
      =============================================== */

      timeline
        .from(
          ".careers-why-work__heading",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".careers-why-work__item",
          {
            opacity: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  return (
    <section
      className="careers-why-work"
      ref={sectionRef}
      aria-labelledby="careers-why-work-title"
    >
      <div className="container">


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="careers-why-work__heading">

          <h2 id="careers-why-work-title">
            Why You&apos;ll Love Working Here
          </h2>

          <div
            className="careers-why-work__line"
            aria-hidden="true"
          />

        </div>


        {/* ==========================================
            BENEFITS
        ========================================== */}

        <div className="careers-why-work__list">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="careers-why-work__item"
                key={benefit.id}
              >

                <div
                  className="careers-why-work__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>


                <div className="careers-why-work__content">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}


export default WhyWorkHere;