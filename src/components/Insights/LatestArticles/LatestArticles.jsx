import "./LatestArticles.css";

import { useEffect, useRef } from "react";

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
    id: 1,

    image: cloudEngineering,

    category: "Cloud & DevOps",

    title:
      "Cloud Engineering Best Practices for Scalable Applications",

    date: "April 28, 2024",

    readTime: "5 min read",
  },

  {
    id: 2,

    image: cyberSecurity,

    category: "Cyber Security",

    title:
      "Cybersecurity in the Digital Era: Challenges & Opportunities",

    date: "April 20, 2024",

    readTime: "4 min read",
  },

  {
    id: 3,

    image: sustainableEngineering,

    category: "Sustainability",

    title:
      "Sustainable Engineering: Building a Greener Tomorrow",

    date: "April 15, 2024",

    readTime: "6 min read",
  },

  {
    id: 4,

    image: dataAnalytics,

    category: "Data & Analytics",

    title:
      "Data Analytics Driving Smarter Business Decisions",

    date: "April 10, 2024",

    readTime: "5 min read",
  },

  {
    id: 5,

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


  /* =======================================================
     GSAP SCROLL ANIMATION
  ======================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* Heading */

      gsap.from(
        ".latest-heading-group",
        {
          y: 25,

          opacity: 0,

          duration: 0.65,

          ease: "power3.out",

          scrollTrigger: {

            trigger: sectionRef.current,

            start: "top 88%",

            once: true,

          },
        }
      );


      /* Article Cards */

      gsap.from(
        ".latest-article-card",
        {
          y: 35,

          opacity: 0,

          duration: 0.7,

          stagger: 0.1,

          ease: "power3.out",

          scrollTrigger: {

            trigger: ".latest-articles-grid",

            start: "top 88%",

            once: true,

          },
        }
      );

    }, sectionRef);


    return () => {

      ctx.revert();

    };

  }, []);


  return (

    <section
      className="latest-articles-section"
      ref={sectionRef}
    >

      <div className="latest-articles-container">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="latest-articles-header">

          <div className="latest-heading-group">

            <h2>
              Latest Articles
            </h2>

            <div className="latest-heading-line" />

          </div>

        </div>


        {/* =================================================
            ARTICLES GRID
        ================================================= */}

        <div className="latest-articles-grid">

          {articles.map((article) => (

            <article
              className="latest-article-card"
              key={article.id}
            >


              {/* ===========================================
                  IMAGE
              =========================================== */}

              <div className="latest-article-image-wrapper">

                <img

                  src={article.image}

                  alt={article.title}

                  className="latest-article-image"

                />

              </div>


              {/* ===========================================
                  CONTENT
              =========================================== */}

              <div className="latest-article-content">


                {/* CATEGORY */}

                <span className="latest-article-category">

                  {article.category}

                </span>


                {/* TITLE */}

                <h3>

                  {article.title}

                </h3>


                {/* META */}

                <div className="latest-article-meta">

                  <span>

                    <FaCalendarAlt />

                    {article.date}

                  </span>


                  <span>

                    <FaClock />

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