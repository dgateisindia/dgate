import "./ExploreTopics.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCompass,
  FaFileAlt,
  FaLayerGroup,
  FaBroadcastTower,
  FaArrowRight,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   TOPIC DATA
========================================================= */

const topics = [
  {
    id: "point-of-view",
    title: "Point of View",
    desc: "Sharp opinions on category shifts, brand behaviour and marketing choices.",
    articles: "2 Articles",
    Icon: FaCompass,
  },

  {
    id: "case-notes",
    title: "Case Notes",
    desc: "What a project taught us — without turning every article into a sales pitch.",
    articles: "Explore",
    Icon: FaFileAlt,
  },

  {
    id: "playbooks",
    title: "Playbooks",
    desc: "Practical frameworks for brand, content, digital and growth teams.",
    articles: "Explore",
    Icon: FaLayerGroup,
  },

  {
    id: "signals",
    title: "Signals",
    desc: "Short observations on emerging behaviours, platforms and creative patterns.",
    articles: "Explore",
    Icon: FaBroadcastTower,
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


                {topic.desc && (
                  <p className="insights-topics__desc">
                    {topic.desc}
                  </p>
                )}


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