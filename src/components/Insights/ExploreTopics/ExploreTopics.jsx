import "./ExploreTopics.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  FaLightbulb,
  FaMobileAlt,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaEnvelopeOpenText,
  FaNewspaper,
  FaWhatsapp,
  FaBell,
  FaBroadcastTower,
  FaArrowRight,
} from "react-icons/fa";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   DGATE SERVICE TOPICS
========================================================= */

const topics = [

  {
    id: "branding-creative",
    title:
      "Branding & Creative",
    label:
      "Brand Insights",
    Icon:
      FaLightbulb,
  },

  {
    id: "app-development",
    title:
      "App Development",
    label:
      "App Insights",
    Icon:
      FaMobileAlt,
  },

  {
    id: "web-development",
    title:
      "Web Development",
    label:
      "Web Insights",
    Icon:
      FaCode,
  },

  {
    id: "digital-marketing",
    title:
      "Digital Marketing",
    label:
      "Marketing Insights",
    Icon:
      FaBullhorn,
  },

  {
    id: "performance-marketing",
    title:
      "Performance Marketing",
    label:
      "Growth Insights",
    Icon:
      FaChartLine,
  },

  {
    id: "email-marketing",
    title:
      "Email Marketing",
    label:
      "Email Insights",
    Icon:
      FaEnvelopeOpenText,
  },

  {
    id: "digital-pr",
    title:
      "Digital PR",
    label:
      "PR Insights",
    Icon:
      FaNewspaper,
  },

  {
    id: "whatsapp-marketing",
    title:
      "WhatsApp Marketing",
    label:
      "Messaging Insights",
    Icon:
      FaWhatsapp,
  },

  {
    id: "push-notification-marketing",
    title:
      "Push Notifications",
    label:
      "Retention Insights",
    Icon:
      FaBell,
  },

  {
    id: "traditional-marketing",
    title:
      "Traditional Marketing",
    label:
      "Offline Insights",
    Icon:
      FaBroadcastTower,
  },

];


/* =========================================================
   COMPONENT
========================================================= */

function ExploreTopics() {

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
              ".insights-topics__heading",
              {
                opacity: 0,

                duration:
                  0.4,

                ease:
                  "power2.out",

                clearProps:
                  "opacity",
              }
            )

            .from(
              ".insights-topics__card",
              {
                opacity: 0,

                duration:
                  0.4,

                stagger:
                  0.06,

                ease:
                  "power2.out",

                clearProps:
                  "opacity",
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
      id="explore-topics"
      className="insights-topics"
      ref={sectionRef}
      aria-labelledby="insights-topics-title"
    >

      <div className="container">


        {/* HEADING */}

        <div
          className="insights-topics__heading"
        >

          <h2
            id="insights-topics-title"
          >
            Explore by Service
          </h2>


          <div
            className="insights-topics__line"
            aria-hidden="true"
          />

        </div>


        {/* SERVICE GRID */}

        <div
          className="insights-topics__grid"
        >

          {topics.map(
            (topic) => {

              const Icon =
                topic.Icon;


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


                  <div
                    className="insights-topics__bottom"
                  >

                    <span>
                      {topic.label}
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

            }
          )}

        </div>

      </div>

    </section>

  );

}


export default ExploreTopics;