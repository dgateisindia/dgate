import "./LatestArticles.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";


/* =========================================================
   IMAGES
========================================================= */

import appDevelopment
  from "../../../assets/images/Insights/latest/latest-app-development.png";

import webDevelopment
  from "../../../assets/images/Insights/latest/latest-web-development.png";

import digitalMarketing
  from "../../../assets/images/Insights/latest/latest-digital-marketing.png";

import performanceMarketing
  from "../../../assets/images/Insights/latest/latest-performance-marketing.png";

import whatsappMarketing
  from "../../../assets/images/Insights/latest/latest-whatsapp-marketing.png";

import emailMarketing
  from "../../../assets/images/Insights/latest/latest-email-marketing.png";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   ARTICLE DATA
========================================================= */

const articles = [
  {
    id: "app-development",
    image: appDevelopment,
    category: "App Development",
    title:
      "What Makes a Mobile App Fast, Simple and Scalable",
    date: "September 28, 2026",
    readTime: "5 min read",
  },

  {
    id: "web-development",
    image: webDevelopment,
    category: "Web Development",
    title:
      "Why High-Performance Websites Convert More Visitors",
    date: "September 24, 2026",
    readTime: "5 min read",
  },

  {
    id: "digital-marketing",
    image: digitalMarketing,
    category: "Digital Marketing",
    title:
      "Building a Digital Marketing Strategy That Drives Growth",
    date: "September 20, 2026",
    readTime: "6 min read",
  },

  {
    id: "performance-marketing",
    image: performanceMarketing,
    category: "Performance Marketing",
    title:
      "Turning Ad Spend into Measurable Business Results",
    date: "September 16, 2026",
    readTime: "5 min read",
  },

  {
    id: "whatsapp-marketing",
    image: whatsappMarketing,
    category: "WhatsApp Marketing",
    title:
      "Using WhatsApp to Improve Lead Engagement and Conversions",
    date: "September 12, 2026",
    readTime: "4 min read",
  },

  {
    id: "email-marketing",
    image: emailMarketing,
    category: "Email Marketing",
    title:
      "How Automated Email Campaigns Nurture Leads Effectively",
    date: "September 8, 2026",
    readTime: "5 min read",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function LatestArticles() {

  const sectionRef =
    useRef(null);


  useEffect(() => {

    if (!sectionRef.current) {
      return;
    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {
      return;
    }


    const ctx =
      gsap.context(
        () => {

          const timeline =
            gsap.timeline({
              scrollTrigger: {
                trigger:
                  sectionRef.current,

                start:
                  "top 86%",

                once:
                  true,
              },
            });


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

        },
        sectionRef
      );


    return () =>
      ctx.revert();

  }, []);


  return (

    <section
      className="insights-latest"
      ref={sectionRef}
      aria-labelledby="insights-latest-title"
    >

      <div className="container">

        <div
          className="insights-latest__header"
        >

          <div
            className="insights-latest__heading"
          >

            <h2
              
            >
              Latest Insights
            </h2>


            <div
              className="insights-latest__line"
              aria-hidden="true"
            />

          </div>

        </div>


        <div
          className="insights-latest__grid"
        >

          {articles.map(
            (article) => (

              <article
                className="insights-latest__card"
                key={article.id}
              >

                <div
                  className="insights-latest__image-wrapper"
                >

                  <img
                    src={article.image}
                    alt={article.title}
                    className="insights-latest__image"
                    loading="lazy"
                  />

                </div>


                <div
                  className="insights-latest__content"
                >

                  <span
                    className="insights-latest__category"
                  >
                    {article.category}
                  </span>


                  <h3>
                    {article.title}
                  </h3>


                  <div
                    className="insights-latest__meta"
                  >

                    <span>
                      <FaCalendarAlt
                        aria-hidden="true"
                      />

                      {article.date}
                    </span>


                    <span>
                      <FaClock
                        aria-hidden="true"
                      />

                      {article.readTime}
                    </span>

                  </div>

                </div>

              </article>

            )
          )}

        </div>

      </div>

    </section>

  );

}


export default LatestArticles;