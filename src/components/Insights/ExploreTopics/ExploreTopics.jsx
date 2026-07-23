import "./ExploreTopics.css";

import { useEffect, useRef } from "react";

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

function ExploreTopics() {

  const sectionRef = useRef(null);

  /* =========================================================
     TOPIC DATA
  ========================================================= */

  const topics = [
    {
      id: 1,
      title: "AI & Machine Learning",
      articles: "12 Articles",
      icon: <FaMicrochip />,
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      articles: "15 Articles",
      icon: <FaCloud />,
    },
    {
      id: 3,
      title: "Cyber Security",
      articles: "10 Articles",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      title: "Data & Analytics",
      articles: "14 Articles",
      icon: <FaChartBar />,
    },
    {
      id: 5,
      title: "Engineering Trends",
      articles: "20 Articles",
      icon: <FaRobot />,
    },
    {
      id: 6,
      title: "Sustainability",
      articles: "8 Articles",
      icon: <FaLeaf />,
    },
  ];


  /* =========================================================
     GSAP SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".explore-topics-heading", {
        y: 20,
        opacity: 0,

        duration: 0.6,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
      });


      gsap.from(".explore-topic-card", {
        y: 30,
        opacity: 0,

        duration: 0.65,

        stagger: 0.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".explore-topics-grid",
          start: "top 90%",
          once: true,
        },
      });

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  return (

    <section
      className="explore-topics-section"
      ref={sectionRef}
    >

      <div className="explore-topics-container">


        {/* ================================================
            SECTION HEADING
        ================================================= */}

        <div className="explore-topics-heading">

          <h2>
            Explore by Topic
          </h2>

          <div className="explore-topics-line" />

        </div>


        {/* ================================================
            TOPIC CARDS
        ================================================= */}

        <div className="explore-topics-grid">

          {topics.map((topic) => (

            <article
              className="explore-topic-card"
              key={topic.id}
            >

              {/* ICON */}

              <div className="explore-topic-icon">

                {topic.icon}

              </div>


              {/* TITLE */}

              <h3>
                {topic.title}
              </h3>


              {/* BOTTOM */}

              <div className="explore-topic-bottom">

                <span>
                  {topic.articles}
                </span>

                <button
                  type="button"
                  className="explore-topic-arrow"
                  aria-label={`Explore ${topic.title}`}
                >

                  <FaArrowRight />

                </button>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ExploreTopics;