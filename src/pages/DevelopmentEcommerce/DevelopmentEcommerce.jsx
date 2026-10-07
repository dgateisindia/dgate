import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaCheckCircle,
  FaChevronDown,
  FaShoppingCart,
  FaCode,
  FaCreditCard,
} from "react-icons/fa";

import Navbar
  from "../../components/Home/Navbar/Navbar";

import Footer
  from "../../components/Home/Footer/Footer";

import "./DevelopmentEcommerce.css";


/* =========================================================
   MAIN E-COMMERCE IMAGE

   Only one image is used on this page.
========================================================= */

/* =========================================================
   E-COMMERCE FEATURE IMAGE
========================================================= */

const ecommerceImage =
  "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1800&q=90";

const fallbackEcommerceImage =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=90";
/* =========================================================
   FAQ
========================================================= */

const faqs = [

  {
    question:
      "What is e-commerce development?",

    answer:
      "E-commerce development involves designing and building an online store where customers can discover products, add them to a cart, make secure payments and complete purchases. We combine user experience, technology, integrations and performance optimization to create scalable stores.",
  },


  {
    question:
      "Which e-commerce platforms do you work with?",

    answer:
      "We work with platforms such as Shopify and WooCommerce and can also build custom e-commerce solutions when the business requires greater flexibility, custom workflows or specialized integrations.",
  },


  {
    question:
      "How long does e-commerce development take?",

    answer:
      "The timeline depends on the number of products, design requirements, integrations and platform. A focused store can be launched relatively quickly, while larger custom implementations require additional planning, development and testing.",
  },


  {
    question:
      "Will my store be mobile-friendly?",

    answer:
      "Yes. Every store is designed with responsive layouts and mobile-first considerations so customers can browse, search, purchase and complete checkout comfortably across phones, tablets and desktops.",
  },


  {
    question:
      "Can you integrate payments and shipping?",

    answer:
      "Yes. We can integrate payment gateways, shipping providers, tax rules, inventory systems, CRM tools and other business services depending on the requirements of your store.",
  },


  {
    question:
      "Do you offer post-launch support?",

    answer:
      "Yes. We can provide ongoing maintenance, performance optimization, conversion improvements, analytics support and technical assistance after launch.",
  },

];


/* =========================================================
   WHAT WE OFFER
========================================================= */

const offers = [

  {
    id: "strategy",

    icon:
      <FaShoppingCart />,

    title:
      "E-commerce Strategy & Architecture",

    points: [
      "Business & product discovery",
      "Platform selection & technology roadmap",
      "Conversion-focused store architecture",
    ],
  },


  {
    id: "development",

    icon:
      <FaCode />,

    title:
      "Custom E-commerce Development",

    points: [
      "Shopify / WooCommerce development",
      "Custom features & third-party integrations",
      "Scalable, secure & high-performance builds",
    ],
  },


  {
    id: "integrations",

    icon:
      <FaCreditCard />,

    title:
      "Payment, Logistics & Integrations",

    points: [
      "Payment gateway & checkout integration",
      "Shipping, tax & inventory management",
      "ERP, CRM & marketplace integrations",
    ],
  },

];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [

  {
    number: "01",

    title:
      "Discovery & Strategy",

    description:
      "Understand business goals, products, audience and choose the right e-commerce platform.",
  },


  {
    number: "02",

    title:
      "UX/UI & Store Design",

    description:
      "Design conversion-focused layouts, product journeys and mobile-first shopping experiences.",
  },


  {
    number: "03",

    title:
      "Development & Integrations",

    description:
      "Build the store, integrate payments, shipping, inventory and third-party tools.",
  },


  {
    number: "04",

    title:
      "Launch & Optimization",

    description:
      "Go live, test performance, optimize speed, SEO and conversions for sustainable growth.",
  },

];


/* =========================================================
   DEVELOPMENT E-COMMERCE PAGE
========================================================= */

function DevelopmentEcommerce() {

  const [
    openFaq,
    setOpenFaq,
  ] = useState(0);


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(
    () => {

      document.title =
        "E-commerce Website Development Company Bangalore | Shopify Agency | DGATE IS";


      const description =
        "DGATE IS provides e-commerce website development in Bangalore using Shopify, WooCommerce and custom technologies to build scalable, high-converting online stores.";


      /* META DESCRIPTION */

      let metaDescription =
        document.querySelector(
          'meta[name="description"]'
        );


      if (
        !metaDescription
      ) {

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


      /* CANONICAL */

      let canonical =
        document.querySelector(
          'link[rel="canonical"]'
        );


      if (
        !canonical
      ) {

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
        `${window.location.origin}/development-ecommerce`
      );


      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

    },
    []
  );


  /* =======================================================
     UI
  ======================================================= */

  return (

    <div
      className="development-page"
    >


      <Navbar />


      <main>


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="dev-hero"
        >


          <div
            className="
              dev-hero__background-shape
              dev-hero__background-shape--one
            "
            aria-hidden="true"
          />


          <div
            className="
              dev-hero__background-shape
              dev-hero__background-shape--two
            "
            aria-hidden="true"
          />


          <div
            className="dev-container"
          >


            <div
              className="dev-hero__content"
            >


              {/* LEFT */}

              <div
                className="dev-hero__title-area"
              >

                <span
                  className="dev-eyebrow"
                >
                  E-COMMERCE DEVELOPMENT
                </span>


                <h1>

                  E-commerce

                  <br />

                  Development

                  <br />

                  <span>
                    Solutions
                  </span>

                </h1>

              </div>


              {/* RIGHT */}

              <div
                className="dev-hero__description"
              >

                <p>

                  We build scalable, high-converting
                  e-commerce websites using Shopify,
                  WooCommerce, and custom frameworks.
                  From seamless checkout experiences
                  to performance optimization, our
                  e-commerce solutions are designed
                  to drive sales and sustainable
                  growth.

                </p>

              </div>


            </div>


          </div>


        </section>


        {/* =================================================
            MAIN E-COMMERCE IMAGE
            ONLY ONE IMAGE
        ================================================= */}

        <section
          className="dev-feature"
        >

          <div
            className="dev-container"
          >

            <figure
              className="dev-feature__media"
            >

              <img
                src={
                  ecommerceImage
                }

                alt="Modern e-commerce shopping and online payment experience"

                loading="eager"

                fetchPriority="high"

                onError={
                  (event) => {

                    const image =
                      event.currentTarget;


                    if (
                      !image.dataset.fallback
                    ) {

                      image.dataset.fallback =
                        "true";

                      image.src =
                        fallbackEcommerceImage;

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
          className="dev-overview"
        >

          <div
            className="dev-container"
          >


            <header
              className="
                dev-section-heading
                dev-section-heading--left
              "
            >

              <span
                className="dev-section-heading__eyebrow"
              >
                SERVICE OVERVIEW
              </span>


              <h2>

                E-commerce Development –

                <span>
                  {" "}Service Overview
                </span>

              </h2>

            </header>


            <div
              className="dev-section-divider"
            />


            <div
              className="dev-overview__grid"
            >


              {/* =================================================
                  LEFT
              ================================================= */}

              <div
                className="dev-overview__text"
              >

                <p>

                  E-commerce development is the process
                  of building high-performance online
                  stores that convert visitors into
                  customers. It combines strategic UX,
                  secure payment systems, fast-loading
                  architecture, and scalable technology
                  to support business growth.

                </p>


                <p>

                  At DGATE IS, we create e-commerce
                  solutions using platforms like Shopify
                  and WooCommerce, optimized for speed,
                  SEO, mobile commerce, and seamless
                  checkout experiences that increase
                  conversions and customer retention.

                </p>

              </div>


              {/* =================================================
                  RIGHT
              ================================================= */}

              <div
                className="dev-approach"
              >

                <h3>
                  Our Approach to E-commerce Development
                </h3>


                <div
                  className="dev-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Business &amp; Market Analysis
                    </strong>

                    <span>

                      Understanding your products,
                      audience, market and competitors.

                    </span>

                  </p>

                </div>


                <div
                  className="dev-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      UX-Focused Store Design
                    </strong>

                    <span>

                      Designing intuitive layouts
                      and optimized customer journeys.

                    </span>

                  </p>

                </div>


                <div
                  className="dev-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Secure Development &amp; Integrations
                    </strong>

                    <span>

                      Payment gateways, shipping,
                      CRM and automation integrations.

                    </span>

                  </p>

                </div>


                <div
                  className="dev-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Testing, Launch &amp; Optimization
                    </strong>

                    <span>

                      Speed, security, CRO and continuous
                      performance improvements.

                    </span>

                  </p>

                </div>


              </div>


            </div>


            {/* =================================================
                WHAT WE OFFER
            ================================================= */}

            <section
              className="dev-offer"
            >


              <header
                className="dev-section-heading-center"
              >

                <span
                  className="dev-section-heading__eyebrow"
                >
                  OUR EXPERTISE
                </span>


                <h2>

                  What We Offer in

                  <span>
                    {" "}E-commerce
                  </span>

                </h2>

              </header>


              <div
                className="dev-offer__grid"
              >


                {offers.map(
                  (offer) => (

                    <article
                      className="dev-offer-card"
                      key={offer.id}
                    >


                      <div
                        className="dev-offer-card__icon"
                      >
                        {offer.icon}
                      </div>


                      <h3>
                        {offer.title}
                      </h3>


                      <div
                        className="dev-offer-card__line"
                      />


                      <ul>

                        {offer.points.map(
                          (point) => (

                            <li
                              key={point}
                            >
                              {point}
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
          className="dev-process"
        >


          <div
            className="dev-process__grid"
            aria-hidden="true"
          />


          <div
            className="
              dev-container
              dev-process__inner
            "
          >


            <div
              className="dev-process__badge"
            >

              E-COMMERCE PROCESS

            </div>


            <h2>

              Our E-commerce Development Process

              <br />

              <span>
                From Store to Scale
              </span>

            </h2>


            <div
              className="dev-process__steps"
            >


              {processSteps.map(
                (step) => (

                  <article
                    className="dev-process-step"

                    key={
                      step.number
                    }
                  >


                    <div
                      className="dev-process-step__number"
                    >
                      {step.number}
                    </div>


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
          className="dev-faq"
        >


          <div
            className="dev-container"
          >


            <div
              className="dev-faq__badge"
            >
              E-COMMERCE FAQS
            </div>


            <h2>

              Common Questions About

              <br />

              <span>
                E-commerce Development
              </span>

            </h2>


            <div
              className="dev-faq__list"
            >


              {faqs.map(
                (faq, index) => {

                  const isOpen =
                    openFaq === index;


                  return (

                    <div
                      className={`
                        dev-faq-item
                        ${
                          isOpen
                            ? "dev-faq-item--open"
                            : ""
                        }
                      `}

                      key={
                        faq.question
                      }
                    >


                      <button
                        type="button"

                        onClick={
                          () =>
                            setOpenFaq(
                              isOpen
                                ? -1
                                : index
                            )
                        }

                        aria-expanded={
                          isOpen
                        }
                      >

                        <span>
                          {faq.question}
                        </span>


                        <FaChevronDown />

                      </button>


                      <div
                        className="dev-faq-answer"
                      >

                        <p>
                          {faq.answer}
                        </p>

                      </div>


                    </div>

                  );

                }
              )}


            </div>


          </div>


        </section>


      </main>


      <Footer />


    </div>

  );

}


export default DevelopmentEcommerce;