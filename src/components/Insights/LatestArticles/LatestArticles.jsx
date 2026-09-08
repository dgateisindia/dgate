import "./LatestArticles.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";


/* =========================================================
   IMAGES
========================================================= */

import cloudEngineering from "../../../assets/images/Insights/latest/cloud-engineering.png";

import cyberSecurity from "../../../assets/images/Insights/latest/cyber-security.png";

import sustainableEngineering from "../../../assets/images/Insights/latest/sustainable-engineering.png";

import dataAnalytics from "../../../assets/images/Insights/latest/data-analytics.png";

import automationManufacturing from "../../../assets/images/Insights/latest/automation-manufacturing.png";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   ARTICLE DATA
========================================================= */

const articles = [
  {
    id: "cloud-engineering",
    image: cloudEngineering,
    category: "Cloud & DevOps",
    title:
      "Cloud Engineering Best Practices for Scalable Applications",
    date: "April 28, 2024",
    readTime: "5 min read",
  },

  {
    id: "cyber-security",
    image: cyberSecurity,
    category: "Cyber Security",
    title:
      "Cybersecurity in the Digital Era: Challenges & Opportunities",
    date: "April 20, 2024",
    readTime: "4 min read",
  },

  {
    id: "sustainable-engineering",
    image: sustainableEngineering,
    category: "Sustainability",
    title:
      "Sustainable Engineering: Building a Greener Tomorrow",
    date: "April 15, 2024",
    readTime: "6 min read",
  },

  {
    id: "data-analytics",
    image: dataAnalytics,
    category: "Data & Analytics",
    title:
      "Data Analytics Driving Smarter Business Decisions",
    date: "April 10, 2024",
    readTime: "5 min read",
  },

  {
    id: "automation-manufacturing",
    image: automationManufacturing,
    category: "Engineering Trends",
    title:
      "The Future of Automation in Manufacturing",
    date: "April 5, 2024",
    readTime: "4 min read",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function LatestArticles() {
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
          ".insights-latest__heading",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".insights-latest__card",
          {
            opacity: 0,
            duration: 0.4,
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
      className="insights-latest"
      ref={sectionRef}
      aria-labelledby="insights-latest-title"
    >
      <div className="container">


        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="insights-latest__header">

          <div className="insights-latest__heading">

            <h2 id="insights-latest-title">
              Latest Articles
            </h2>


            <div
              className="insights-latest__line"
              aria-hidden="true"
            />

          </div>

        </div>


        {/* ==========================================
            ARTICLES GRID
        ========================================== */}

        <div className="insights-latest__grid">

          {articles.map((article) => (

            <article
              className="insights-latest__card"
              key={article.id}
            >


              {/* IMAGE */}

              <div className="insights-latest__image-wrapper">

                <img
                  src={article.image}
                  alt={article.title}
                  className="insights-latest__image"
                  loading="lazy"
                />

              </div>


              {/* CONTENT */}

              <div className="insights-latest__content">

                <span className="insights-latest__category">
                  {article.category}
                </span>


                <h3>
                  {article.title}
                </h3>


                <div className="insights-latest__meta">

                  <span>
                    <FaCalendarAlt aria-hidden="true" />
                    {article.date}
                  </span>


                  <span>
                    <FaClock aria-hidden="true" />
                    {article.readTime}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}


export default LatestArticles;