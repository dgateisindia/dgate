import "./WhyWorkHere.css";

import { useEffect, useRef } from "react";

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
    icon: <FaChartLine />,
    title: "Career Growth",
    description:
      "Continuous learning and growth opportunities",
  },
  {
    icon: <FaUsers />,
    title: "Great Culture",
    description:
      "Collaborative, inclusive and respectful workplace",
  },
  {
    icon: <FaHeartbeat />,
    title: "Wellness First",
    description:
      "Health & wellness programs for you and your family",
  },
  {
    icon: <FaAward />,
    title: "Recognition",
    description:
      "Celebrate achievements and reward excellence",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Work-Life Balance",
    description:
      "Flexible schedules and work-life integration",
  },
];

function WhyWorkHere() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* Heading Animation */

      gsap.from(".why-work-heading", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });


      /* Benefits Stagger Animation */

      gsap.from(".why-work-item", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".why-work-list",
          start: "top 88%",
          once: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);


  return (

    <section
      className="why-work-section"
      ref={sectionRef}
    >

      <div className="why-work-container">


        {/* =========================
            HEADING
        ========================== */}

        <div className="why-work-heading">

          <h2>
            Why You’ll Love Working Here
          </h2>

          <div className="why-work-line"></div>

        </div>


        {/* =========================
            BENEFITS
        ========================== */}

        <div className="why-work-list">

          {benefits.map((benefit, index) => (

            <div
              className="why-work-item"
              key={index}
            >

              {/* Icon */}

              <div className="why-work-icon">

                {benefit.icon}

              </div>


              {/* Content */}

              <div className="why-work-content">

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default WhyWorkHere;