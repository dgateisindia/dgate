import "./ExploreTopics.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaMicrochip,
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   TOPIC DATA
========================================================= */

const topics = [
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    articles: "12 Articles",
    Icon: FaMicrochip,
  },

  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    articles: "15 Articles",
    Icon: FaCloud,
  },

  {
    id: "cyber-security",
    title: "Cyber Security",
    articles: "10 Articles",
    Icon: FaShieldAlt,
  },

  {
    id: "data-analytics",
    title: "Data & Analytics",
    articles: "14 Articles",
    Icon: FaChartBar,
  },

  {
    id: "engineering-trends",
    title: "Engineering Trends",
    articles: "20 Articles",
    Icon: FaRobot,
  },

  {
    id: "sustainability",
    title: "Sustainability",
    articles: "8 Articles",
    Icon: FaLeaf,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function ExploreTopics() {
  const sectionRef = useRef(null);


  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 86%",
          once: true,
        },
      });


      /* ===============================================
         FADE ONLY
         NO X / Y / SCALE / ROTATE
      =============================================== */

      timeline
        .from(
          ".insights-topics__heading",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".insights-topics__card",
          {
            opacity: 0,
            duration: 0.4,
            stagger: 0.06,
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
      id="explore-topics"
      className="insights-topics"
      ref={sectionRef}
      aria-labelledby="insights-topics-title"
    >
      <div className="container">


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="insights-topics__heading">

          <h2 id="insights-topics-title">
            Explore by Topic
          </h2>


          <div
            className="insights-topics__line"
            aria-hidden="true"
          />

        </div>


        {/* ==========================================
            TOPIC GRID
        ========================================== */}

        <div className="insights-topics__grid">

          {topics.map((topic) => {

            const Icon = topic.Icon;

            return (
              <article
                className="insights-topics__card"
                key={topic.id}
              >

                <div
                  className="insights-topics__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>


                <h3>
                  {topic.title}
                </h3>


                <div className="insights-topics__bottom">

                  <span>
                    {topic.articles}
                  </span>


                  <span
                    className="insights-topics__arrow"
                    aria-hidden="true"
                  >
                    <FaArrowRight />
                  </span>

                </div>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}


export default ExploreTopics;