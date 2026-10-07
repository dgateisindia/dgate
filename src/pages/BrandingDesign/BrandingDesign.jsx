import "./BrandingDesign.css";

import {
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaBullseye,
  FaPenNib,
  FaSyncAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar
  from "../../components/Home/Navbar/Navbar";

import Footer
  from "../../components/Home/Footer/Footer";

import {
  successStories,
} from "../../components/Home/SuccessStories/successStoriesData";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const FALLBACK_KANAJA_IMAGE =
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=88";


/* =========================================================
   GET PROJECT IMAGE
========================================================= */

const getProjectImage =
  (project) => {

    if (!project) {
      return "";
    }

    return (
      project.image ||
      project.imageUrl ||
      project.imageURL ||
      project.src ||
      project.thumbnail ||
      project.thumbnailUrl ||
      project.cover ||
      project.coverImage ||
      project.heroImage ||
      project.banner ||
      ""
    );

  };


/* =========================================================
   BRANDING SERVICES
========================================================= */

const brandingServices = [

  {
    id: "strategy",

    icon:
      <FaBullseye />,

    title:
      "Brand Strategy & Positioning",

    items: [
      "Brand discovery & market research",
      "Brand positioning & value proposition",
      "Brand voice, tone & messaging framework",
    ],
  },

  {
    id: "identity",

    icon:
      <FaPenNib />,

    title:
      "Logo & Visual Identity",

    items: [
      "Logo design & brand mark systems",
      "Color palette & typography selection",
      "Visual identity & design language",
    ],
  },

  {
    id: "rebranding",

    icon:
      <FaSyncAlt />,

    title:
      "Rebranding & Brand Refresh",

    items: [
      "Brand audit & visual assessment",
      "Modernized brand identity redesign",
      "Brand evolution without losing equity",
    ],
  },

];


/* =========================================================
   BRANDING PROCESS
========================================================= */

const brandingProcess = [

  {
    number: "01",

    title:
      "Discover & Research",

    description:
      "Deep brand discovery, competitor analysis, audience insights and market research.",
  },

  {
    number: "02",

    title:
      "Strategy & Direction",

    description:
      "Define brand positioning, messaging, tone of voice and visual direction.",
  },

  {
    number: "03",

    title:
      "Design & Identity",

    description:
      "Create logo systems, visual identity, typography and complete brand assets.",
  },

  {
    number: "04",

    title:
      "Deliver & Launch",

    description:
      "Final brand delivery, guidelines, handover and launch-ready creative assets.",
  },

];


/* =========================================================
   FAQ
========================================================= */

const faqs = [

  {
    question:
      "What is branding and why does it matter for my business?",

    answer:
      "Branding is how your business is perceived visually, emotionally, and strategically. A strong brand builds trust, recognition, and credibility, helping you stand out in competitive markets and connect with the right audience.",
  },

  {
    question:
      "What is included in your branding design services?",

    answer:
      "Our branding services cover strategy and design, including brand positioning, logo and visual identity design, messaging, brand guidelines, and marketing and digital brand assets.",
  },

  {
    question:
      "How long does a branding project usually take?",

    answer:
      "A typical branding project takes 3 to 6 weeks depending on scope, revisions, and approvals. Complex rebranding projects may take longer to ensure strategic depth and quality.",
  },

  {
    question:
      "Will I receive all logo and brand file formats?",

    answer:
      "Yes. You receive the required formats including AI, EPS, SVG, PNG, JPG, and PDF, optimized for print, web, and digital platforms.",
  },

  {
    question:
      "What are brand guidelines and why are they important?",

    answer:
      "Brand guidelines help keep your brand consistent and professional across platforms. They cover logo usage, colors, typography, imagery, and tone of voice.",
  },

  {
    question:
      "Do you offer ongoing branding and design support?",

    answer:
      "Yes. We provide ongoing brand support, design updates, campaign creatives, and marketing assets to help maintain consistency as your business grows.",
  },

];


/* =========================================================
   BRANDING DESIGN PAGE
========================================================= */

function BrandingDesign() {


  /* =======================================================
     FIND KANAJA PROJECT
  ======================================================= */

  const kanajaProject =
    Array.isArray(successStories)

      ? (
          successStories.find(
            (project) =>
              project?.brand
                ?.toLowerCase()
                .includes("kanaja")
          ) ||
          successStories[0] ||
          null
        )

      : null;


  /* =======================================================
     KANAJA IMAGE
  ======================================================= */

  const kanajaImage =
    getProjectImage(
      kanajaProject
    ) ||
    FALLBACK_KANAJA_IMAGE;


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(
    () => {

      document.title =
        "Branding Design & Brand Identity Services | DGATE IS";


      const description =
        "DGATE Integrated Services provides branding design, brand strategy, logo design, visual identity, rebranding and brand guideline services for growing businesses.";


      let metaDescription =
        document.querySelector(
          'meta[name="description"]'
        );


      if (!metaDescription) {

        metaDescription =
          document.createElement(
            "meta"
          );


        metaDescription.setAttribute(
          "name",
          "description"
        );


        document.head.appendChild(
          metaDescription
        );

      }


      metaDescription.setAttribute(
        "content",
        description
      );


      let canonical =
        document.querySelector(
          'link[rel="canonical"]'
        );


      if (!canonical) {

        canonical =
          document.createElement(
            "link"
          );


        canonical.setAttribute(
          "rel",
          "canonical"
        );


        document.head.appendChild(
          canonical
        );

      }


      canonical.setAttribute(
        "href",
        `${window.location.origin}/branding-design`
      );

    },
    []
  );


  return (

    <>

      <Navbar />


      <main
        className="branding-design-page"
      >


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="branding-intro"
        >


          <div
            className="branding-intro__star"
            aria-hidden="true"
          />


          <div
            className="branding-intro__arc"
            aria-hidden="true"
          />


          <div
            className="
              branding-container
              branding-intro__grid
            "
          >


            <div
              className="branding-intro__heading"
            >

              <span
                className="branding-intro__eyebrow"
              >
                BRANDING &amp; DESIGN
              </span>


              <h1>

                Branding Design &amp;

                <br />

                Brand Identity

                <br />

                <span>
                  Services
                </span>

              </h1>

            </div>


            <div
              className="branding-intro__copy"
            >

              <p>

                We design powerful brand identities
                that build trust, recognition and
                emotional connection. From brand
                strategy and logo design to visual
                systems and brand guidelines, we help
                businesses create a consistent and
                memorable presence across every
                digital and offline touchpoint.

              </p>

            </div>


          </div>


        </section>


        {/* =================================================
            KANAJA FOODS IMAGE
            MOVED DIRECTLY AFTER HERO
        ================================================= */}

        <section
          className="branding-kanaja"
        >

          <div
            className="branding-container"
          >

            <figure
              className="branding-kanaja__media"
            >

              <img
                src={
                  kanajaImage
                }

                alt="Kanaja Foods branding and visual identity project"

                loading="eager"

                onError={
                  (event) => {

                    const image =
                      event.currentTarget;


                    if (
                      image.src !==
                      FALLBACK_KANAJA_IMAGE
                    ) {

                      image.src =
                        FALLBACK_KANAJA_IMAGE;

                    }

                  }
                }
              />

            </figure>

          </div>

        </section>



        {/* =================================================
            SERVICE OVERVIEW
        ================================================= */}

        <section
          className="branding-overview"
        >

          <div
            className="branding-container"
          >


            <header
              className="
                branding-section-heading
                branding-section-heading--left
              "
            >

              <span
                className="branding-section-heading__eyebrow"
              >
                SERVICE OVERVIEW
              </span>


              <h2
                className="branding-overview__title"
              >

                Branding Design –

                <span>
                  {" "}Service Overview
                </span>

              </h2>

            </header>


            <div
              className="branding-overview__divider"
            />


            <div
              className="branding-overview__grid"
            >


              <div
                className="branding-overview__copy"
              >

                <p>

                  Branding design is the foundation
                  of how your business is seen,
                  remembered, and trusted. At DGATE,
                  we combine strategic thinking with
                  creative execution to build brand
                  identities that clearly communicate
                  your values, differentiate you from
                  competitors, and create lasting
                  emotional connections with your
                  audience.

                </p>


                <p>

                  Our branding solutions go beyond
                  logos and colors. We design complete
                  visual systems including typography,
                  imagery, tone of voice, video
                  production, and video editing,
                  together with comprehensive brand
                  guidelines that maintain consistency
                  across websites, marketing campaigns,
                  social media, video content, and
                  offline materials.

                </p>

              </div>


              <div
                className="branding-approach"
              >

                <h3>
                  Our Approach to Branding Design
                </h3>


                <div
                  className="branding-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Discovery &amp; Brand Research
                    </strong>

                    <span>
                      Deep brand discovery, competitor
                      analysis, audience insights, and
                      market research.
                    </span>

                  </p>

                </div>


                <div
                  className="branding-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Brand Strategy &amp; Concept Development
                    </strong>

                    <span>
                      Define brand positioning,
                      messaging, tone of voice, and
                      visual direction.
                    </span>

                  </p>

                </div>


                <div
                  className="branding-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Visual Identity Design
                    </strong>

                    <span>
                      Create logo systems, visual
                      identity, typography, and
                      complete brand assets.
                    </span>

                  </p>

                </div>


                <div
                  className="branding-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Brand Guidelines &amp; Implementation
                    </strong>

                    <span>
                      Deliver a complete brand system
                      with clear usage guidelines for
                      consistent application across
                      every platform.
                    </span>

                  </p>

                </div>


              </div>


            </div>


            {/* =================================================
                WHAT WE OFFER
            ================================================= */}

            <section
              className="branding-offer"
            >


              <header
                className="branding-section-heading"
              >

                <span
                  className="branding-section-heading__eyebrow"
                >
                  OUR EXPERTISE
                </span>


                <h2>

                  What We Offer in

                  <span>
                    {" "}Branding Design
                  </span>

                </h2>

              </header>


              <div
                className="branding-offer__grid"
              >


                {brandingServices.map(
                  (service) => (

                    <article
                      key={
                        service.id
                      }

                      className="branding-offer__card"
                    >


                      <div
                        className="branding-offer__icon"
                      >
                        {service.icon}
                      </div>


                      <h3>
                        {service.title}
                      </h3>


                      <div
                        className="branding-offer__line"
                      />


                      <ul>

                        {service.items.map(
                          (item) => (

                            <li
                              key={item}
                            >
                              {item}
                            </li>

                          )
                        )}

                      </ul>


                    </article>

                  )
                )}


              </div>


            </section>


          </div>


        </section>


        {/* =================================================
            PROCESS
        ================================================= */}

        <section
          className="branding-process"
        >


          <div
            className="branding-process__grid-bg"
            aria-hidden="true"
          />


          <div
            className="branding-container"
          >


            <header
              className="branding-process__header"
            >


              <span
                className="branding-pill"
              >
                OUR PROCESS
              </span>


              <h2>

                Our Branding Process

                <br />

                <span>
                  From Insight to Impact
                </span>

              </h2>


            </header>


            <div
              className="branding-process__timeline"
            >


              {brandingProcess.map(
                (step) => (

                  <article
                    className="branding-process__step"

                    key={
                      step.number
                    }
                  >


                    <span
                      className="branding-process__number"
                    >
                      {step.number}
                    </span>


                    <h3>
                      {step.title}
                    </h3>


                    <p>
                      {step.description}
                    </p>


                  </article>

                )
              )}


            </div>


          </div>


        </section>


        {/* =================================================
            FAQ
        ================================================= */}

        <section
          className="branding-faq-section"
        >


          <div
            className="
              branding-container
              branding-faq-section__inner
            "
          >


            <header
              className="branding-faq-header"
            >


              <span
                className="
                  branding-pill
                  branding-pill--light
                "
              >
                BRANDING FAQS
              </span>


              <h2>

                Common Branding

                <br />

                <span>
                  Questions
                </span>

              </h2>


            </header>


            <div
              className="branding-faq-list"
            >


              {faqs.map(
                (faq) => (

                  <details
                    key={
                      faq.question
                    }
                  >


                    <summary>


                      <span>
                        {faq.question}
                      </span>


                      <span
                        className="branding-faq-list__arrow"

                        aria-hidden="true"
                      >
                        +
                      </span>


                    </summary>


                    <p>
                      {faq.answer}
                    </p>


                  </details>

                )
              )}


            </div>


          </div>


        </section>


      </main>


      <Footer />


    </>

  );

}


export default BrandingDesign;