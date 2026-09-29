import "./IndustryGrid.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";


/* =========================================================
   INDUSTRY IMAGES
   USE DIRECT IMPORTS
========================================================= */

import realestate
  from "../../../assets/images/home/industries/realestate.png";

import healthcare
  from "../../../assets/images/home/industries/healthcare.png";

import fmcg
  from "../../../assets/images/home/industries/fmcg.png";

import banking
  from "../../../assets/images/home/industries/banking.png";

import retail
  from "../../../assets/images/home/industries/retail.png";

import telecom
  from "../../../assets/images/home/industries/telecom.png";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   INDUSTRIES DATA
========================================================= */

const industries = [
  {
    id: "real-estate",

    title:
      "Real Estate",

    image:
      realestate,

    description:
      "Helping real estate businesses strengthen digital presence, showcase properties effectively and generate qualified leads through modern web and marketing solutions.",
  },

  {
    id: "healthcare",

    title:
      "Healthcare",

    image:
      healthcare,

    description:
      "Creating trustworthy and user-focused digital experiences for healthcare organizations through modern websites, branding and performance-driven marketing.",
  },

  {
    id: "fmcg",

    title:
      "FMCG",

    image:
      fmcg,

    description:
      "Helping FMCG brands improve visibility, strengthen product positioning and connect with customers through branding, digital campaigns and eCommerce experiences.",
  },

  {
    id: "banking-finance",

    title:
      "Banking & Finance",

    image:
      banking,

    description:
      "Supporting finance businesses with secure, professional and conversion-focused digital experiences designed to build credibility and customer confidence.",
  },

  {
    id: "retail-ecommerce",

    title:
      "Retail & E-Commerce",

    image:
      retail,

    description:
      "Building engaging eCommerce and retail experiences that improve product discovery, customer journeys, conversions and long-term digital growth.",
  },

  {
    id: "telecom",

    title:
      "Telecom",

    image:
      telecom,

    description:
      "Helping telecom and connectivity businesses communicate complex services clearly through modern websites, digital campaigns and customer-focused experiences.",
  },
];


/* =========================================================
   INDUSTRY GRID
========================================================= */

function IndustriesGrid() {
  const sectionRef =
    useRef(null);


  /* =========================================================
     GSAP ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {
      return undefined;
    }


    const ctx =
      gsap.context(
        () => {

          /* ===============================================
             HEADING
          =============================================== */

          gsap.from(
            ".industries-heading",
            {
              y: 35,

              opacity: 0,

              duration: 0.8,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger:
                  sectionRef.current,

                start:
                  "top 78%",

                once:
                  true,
              },
            }
          );


          /* ===============================================
             CARDS
          =============================================== */

          gsap.fromTo(
            ".industry-card",

            {
              opacity: 0,

              y: 45,
            },

            {
              opacity: 1,

              y: 0,

              duration:
                0.7,

              stagger:
                0.1,

              ease:
                "power3.out",

              clearProps:
                "opacity,transform",

              scrollTrigger: {
                trigger:
                  ".industries-grid",

                start:
                  "top 82%",

                once:
                  true,
              },
            }
          );

        },

        sectionRef
      );


    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <section
      id="industries-grid"
      className="industries-grid-section"
      ref={sectionRef}
      aria-labelledby="industries-grid-title"
    >

      <div className="industries-grid-container">


        {/* =================================================
            HEADING
        ================================================= */}

        <div className="industries-heading">

          <span className="section-tag">

            OUR INDUSTRIES

          </span>


          <h2 id="industries-grid-title">

            Digital Solutions
            <br />

            Across Every Industry

          </h2>


          <p>

            DGATE Integrated Services works
            across diverse industries to
            deliver branding, web development,
            digital marketing, performance
            growth and technology solutions
            tailored to real business needs.

          </p>

        </div>


        {/* =================================================
            GRID
        ================================================= */}

        <div className="industries-grid">

          {industries.map(
            (industry) => (

              <article
                className="industry-card"
                key={industry.id}
              >

                {/* IMAGE */}

                <div className="industry-image">

                  <img
                    src={industry.image}
                    alt={`${industry.title} industry`}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />

                </div>


                {/* CONTENT */}

                <div className="industry-content">

                  <h3>

                    {industry.title}

                  </h3>


                  <p>

                    {
                      industry.description
                    }

                  </p>

                </div>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}


export default IndustriesGrid;