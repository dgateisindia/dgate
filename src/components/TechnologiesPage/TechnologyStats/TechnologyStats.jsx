import "./TechnologyStats.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaMicrochip,
  FaTasks,
  FaUsers,
  FaAward,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const statistics = [
  {
    id: "modern-technologies",
    icon: FaMicrochip,
    value: 15,
    suffix: "+",
    title: "Modern Technologies",
    description:
      "Advanced technology stack powering enterprise solutions.",
  },
  {
    id: "projects-delivered",
    icon: FaTasks,
    value: 50,
    suffix: "+",
    title: "Projects Delivered",
    description:
      "Successful engineering and digital transformation projects.",
  },
  {
    id: "technology-experts",
    icon: FaUsers,
    value: 20,
    suffix: "+",
    title: "Technology Experts",
    description:
      "Experienced professionals delivering innovative solutions.",
  },
  {
    id: "quality-commitment",
    icon: FaAward,
    value: 100,
    suffix: "%",
    title: "Quality Commitment",
    description:
      "Focused on excellence, reliability and customer satisfaction.",
  },
];


function TechnologyStats() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);


  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


    if (reduceMotion) {
      numberRefs.current.forEach(
        (element, index) => {
          if (!element) return;

          element.textContent =
            `${statistics[index].value}${statistics[index].suffix}`;
        }
      );

      return;
    }


    const ctx = gsap.context(() => {

      /* =====================================================
         HEADING + CARDS
         OPACITY ONLY - NO TRANSFORM
      ===================================================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });


      timeline
        .from(
          ".technologies-stats__heading",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".technologies-stats__card",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        );


      /* =====================================================
         NUMBER COUNTERS
      ===================================================== */

      numberRefs.current.forEach(
        (element, index) => {
          if (!element) return;

          const statistic = statistics[index];

          const counter = {
            value: 0,
          };


          gsap.to(counter, {
            value: statistic.value,

            duration: 1.6,

            ease: "power2.out",

            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },

            onUpdate: () => {
              element.textContent =
                `${Math.floor(counter.value)}${statistic.suffix}`;
            },

            onComplete: () => {
              element.textContent =
                `${statistic.value}${statistic.suffix}`;
            },
          });
        }
      );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  return (
    <section
      className="technologies-stats"
      ref={sectionRef}
      aria-labelledby="technologies-stats-title"
    >
      <div className="container">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="technologies-stats__heading">

          <span className="technologies-stats__tag">
            OUR IMPACT
          </span>

          <h2 id="technologies-stats-title">
            Technology Excellence
            <br />
            In Numbers
          </h2>

          <p>
            Our commitment to innovation,
            engineering excellence and modern
            technologies enables us to deliver
            scalable digital solutions for
            businesses across industries.
          </p>

        </div>


        {/* =================================================
            STATS GRID
        ================================================= */}

        <div className="technologies-stats__grid">

          {statistics.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="technologies-stats__card"
                  key={item.id}
                >

                  <div
                    className="technologies-stats__icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>


                  <h3
                    className="technologies-stats__number"
                    ref={(element) => {
                      numberRefs.current[index] =
                        element;
                    }}
                  >
                    0{item.suffix}
                  </h3>


                  <h4 className="technologies-stats__title">
                    {item.title}
                  </h4>


                  <p className="technologies-stats__text">
                    {item.description}
                  </p>

                </article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}


export default TechnologyStats;