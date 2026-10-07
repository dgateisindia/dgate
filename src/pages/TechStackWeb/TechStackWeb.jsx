import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaChevronDown,
  FaCheckCircle,
  FaObjectGroup,
  FaBezierCurve,
  FaExpandArrowsAlt,
} from "react-icons/fa";

import Navbar
  from "../../components/Home/Navbar/Navbar";

import Footer
  from "../../components/Home/Footer/Footer";

import "./TechStackWeb.css";


/* =========================================================
   MAIN TECHNOLOGY IMAGE

   Only one image is used.
========================================================= */

const technologyImage =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=90";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackTechnologyImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90";


/* =========================================================
   DEVELOPMENT APPROACH
========================================================= */

const approachItems = [

  {
    title:
      "Frontend Engineering",

    description:
      "HTML, CSS, JavaScript, and Bootstrap for responsive, pixel-perfect user interfaces.",
  },


  {
    title:
      "Dynamic Interactions",

    description:
      "jQuery-powered animations, forms, and UI enhancements for better engagement.",
  },


  {
    title:
      "Backend & CMS Development",

    description:
      "PHP-based solutions with WordPress and Shopify for secure content and commerce.",
  },


  {
    title:
      "Optimization & Scalability",

    description:
      "Performance tuning, SEO-ready structure, and future-proof architecture.",
  },

];


/* =========================================================
   WHAT WE OFFER
========================================================= */

const offerCards = [

  {
    id: "frontend",

    icon:
      <FaObjectGroup />,

    title:
      "Modern Frontend Engineering",

    items: [
      "Clean, semantic HTML for SEO-ready structure",
      "Responsive CSS & Bootstrap layouts for all devices",
      "Interactive JavaScript & jQuery experiences",
    ],
  },


  {
    id: "backend",

    icon:
      <FaBezierCurve />,

    title:
      "Powerful Backend & CMS Solutions",

    items: [
      "PHP-driven backend development",
      "Custom WordPress themes & functionality",
      "Shopify / WooCommerce store setup, customization & scaling",
    ],
  },


  {
    id: "performance",

    icon:
      <FaExpandArrowsAlt />,

    title:
      "Performance, Scalability & Integrations",

    items: [
      "Fast-loading, optimized web architecture",
      "Secure integrations & dynamic features",
      "Scalable builds ready for future growth",
    ],
  },

];


/* =========================================================
   DEVELOPMENT FRAMEWORK
========================================================= */

const frameworkSteps = [

  {
    number: "01",

    title:
      "Tech Discovery & Planning",

    description:
      "Understand business goals and select the right mix of HTML, CSS, JavaScript, PHP, CMS, and frameworks.",
  },


  {
    number: "02",

    title:
      "UI Engineering & Responsive Design",

    description:
      "Build clean, responsive interfaces using Bootstrap, modern CSS, and interactive JavaScript experiences.",
  },


  {
    number: "03",

    title:
      "Backend & CMS Development",

    description:
      "Develop dynamic features using PHP, WordPress, or Shopify with secure integrations and scalability.",
  },


  {
    number: "04",

    title:
      "Optimization & Growth Readiness",

    description:
      "Optimize performance, SEO, and UX to ensure fast load times and future-ready scalability.",
  },

];


/* =========================================================
   TECHNOLOGY STACK ACCORDION
========================================================= */

const technologyStack = [

  {
    title:
      "Front-End Experience: HTML, CSS & JavaScript",

    content:
      "We build clean, responsive and accessible interfaces using semantic HTML, modern CSS and JavaScript to deliver smooth experiences across desktop, tablet and mobile devices.",
  },


  {
    title:
      "Responsive Frameworks: Bootstrap & jQuery",

    content:
      "Bootstrap helps us create consistent responsive layouts while jQuery supports efficient interactions, UI enhancements and dynamic website functionality.",
  },


  {
    title:
      "Backend Power: PHP-Driven Web Applications",

    content:
      "PHP powers secure and dynamic backend functionality, including forms, databases, business logic, APIs and custom web application features.",
  },


  {
    title:
      "CMS Excellence: WordPress Development",

    content:
      "We create flexible WordPress websites with customized themes, manageable content structures, integrations and performance-focused development.",
  },


  {
    title:
      "E-Commerce Growth: Shopify Development",

    content:
      "Our Shopify development solutions cover store setup, customization, product experiences, integrations and scalable e-commerce functionality.",
  },

];


/* =========================================================
   PAGE
========================================================= */

function TechStackWeb() {

  const [
    activeStack,
    setActiveStack,
  ] = useState(0);


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(
    () => {

      document.title =
        "Technology Stack & Web Experience | DGATE IS";


      const description =
        "DGATE IS delivers responsive frontend engineering, PHP development, WordPress, Shopify and scalable web experiences.";


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
        `${window.location.origin}/tech-stack-web`
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
     TOGGLE STACK
  ======================================================= */

  const toggleStack =
    (index) => {

      setActiveStack(
        (current) =>
          current === index
            ? null
            : index
      );

    };


  /* =======================================================
     UI
  ======================================================= */

  return (

    <>

      <Navbar />


      <main
        className="techstack-page"
      >


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="techstack-hero"
        >


          <div
            className="
              techstack-container
              techstack-hero__grid
            "
          >


            {/* LEFT */}

            <div
              className="techstack-hero__title"
            >

              <div
                className="techstack-hero__shape"
                aria-hidden="true"
              />


              <div>

                <span
                  className="techstack-eyebrow"
                >
                  TECHNOLOGY &amp; WEB
                </span>


                <h1>

                  Technology Stack &amp;

                  <br />

                  Web

                  <span>
                    {" "}Experience
                  </span>

                </h1>

              </div>


            </div>


            {/* RIGHT */}

            <div
              className="techstack-hero__description"
            >

              <p>

                We engineer future-ready digital products
                using modern frontend frameworks,
                scalable backend architectures, and
                cloud-native infrastructure. Our tech
                stack ensures speed, security,
                performance, and seamless user
                experiences across devices.

              </p>

            </div>


          </div>


        </section>


        {/* =================================================
            MAIN TECHNOLOGY IMAGE
            ONLY ONE IMAGE
        ================================================= */}

        <section
          className="techstack-feature"
        >

          <div
            className="techstack-container"
          >

            <figure
              className="techstack-feature__media"
            >

              <img
                src={
                  technologyImage
                }

                alt="Web development source code and technology stack"

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
                        fallbackTechnologyImage;

                    }

                  }
                }
              />

            </figure>

          </div>

        </section>


        {/* =================================================
            TECHNOLOGY STACK OVERVIEW
        ================================================= */}

        <section
          className="techstack-overview"
        >

          <div
            className="techstack-container"
          >


            <header
              className="techstack-section-heading"
            >

              <span
                className="techstack-section-heading__eyebrow"
              >
                SERVICE OVERVIEW
              </span>


              <h2>

                Technology Stack –

                <span>
                  {" "}Web Experience
                </span>

              </h2>

            </header>


            <div
              className="techstack-divider"
            />


            <div
              className="techstack-overview__grid"
            >


              {/* LEFT */}

              <div
                className="techstack-overview__content"
              >

                <p>

                  Our web development stack is built
                  on proven, high-performance
                  technologies that ensure fast load
                  times, responsive design, and
                  long-term scalability. From clean
                  semantic HTML and modern CSS to
                  dynamic JavaScript and PHP-powered
                  backends, every layer is optimized
                  for real-world performance.

                </p>


                <p>

                  We leverage Bootstrap for responsive
                  layouts, jQuery for efficient
                  interactions, and powerful CMS
                  platforms like WordPress and Shopify
                  to deliver flexible, secure, and
                  easy-to-manage websites that grow
                  with your business.

                </p>

              </div>


              {/* RIGHT */}

              <div
                className="techstack-approach"
              >

                <h3>
                  Our Tech-Driven Development Approach
                </h3>


                <div
                  className="techstack-approach__list"
                >

                  {approachItems.map(
                    (item) => (

                      <div
                        className="techstack-approach__item"
                        key={item.title}
                      >

                        <FaCheckCircle />


                        <p>

                          <strong>
                            {item.title}
                          </strong>

                          <span>
                            {item.description}
                          </span>

                        </p>

                      </div>

                    )
                  )}

                </div>


              </div>


            </div>


          </div>

        </section>


        {/* =================================================
            WHAT WE OFFER
        ================================================= */}

        <section
          className="techstack-offer"
        >

          <div
            className="techstack-container"
          >


            <header
              className="techstack-offer__header"
            >

              <span
                className="techstack-section-heading__eyebrow"
              >
                OUR EXPERTISE
              </span>


              <h2>

                What We Offer in

                <span>
                  {" "}Web Development
                </span>

              </h2>

            </header>


            <div
              className="techstack-offer__grid"
            >


              {offerCards.map(
                (card) => (

                  <article
                    className="techstack-offer__card"
                    key={card.id}
                  >


                    <div
                      className="techstack-offer__icon"
                    >
                      {card.icon}
                    </div>


                    <h3>
                      {card.title}
                    </h3>


                    <div
                      className="techstack-offer__line"
                    />


                    <ul>

                      {card.items.map(
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


          </div>

        </section>


        {/* =================================================
            DEVELOPMENT FRAMEWORK
        ================================================= */}

        <section
          className="techstack-framework"
        >


          <div
            className="techstack-framework__grid-bg"
            aria-hidden="true"
          />


          <div
            className="
              techstack-container
              techstack-framework__content
            "
          >


            <div
              className="techstack-framework__label"
            >
              OUR DEVELOPMENT FRAMEWORK
            </div>


            <h2>

              From Technology Selection

              <br />

              <span>
                to Scalable Web Experiences
              </span>

            </h2>


            <div
              className="techstack-framework__steps"
            >


              <div
                className="techstack-framework__connector"
                aria-hidden="true"
              />


              {frameworkSteps.map(
                (step) => (

                  <article
                    className="techstack-framework__step"
                    key={step.number}
                  >


                    <span
                      className="techstack-framework__number"
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
            TECHNOLOGY STACK
        ================================================= */}

        <section
          className="techstack-stack"
        >

          <div
            className="techstack-container"
          >


            <div
              className="techstack-stack__label"
            >
              TECHNOLOGY STACK
            </div>


            <h2>

              Powerful Technologies

              <br />

              Behind High-Performance

              <br />

              <span>
                Web Experiences
              </span>

            </h2>


            <div
              className="techstack-accordion"
            >


              {technologyStack.map(
                (item, index) => {

                  const isOpen =
                    activeStack === index;


                  return (

                    <div
                      className={`
                        techstack-accordion__item
                        ${
                          isOpen
                            ? "techstack-accordion__item--active"
                            : ""
                        }
                      `}

                      key={
                        item.title
                      }
                    >


                      <button
                        type="button"

                        className="techstack-accordion__button"

                        onClick={
                          () =>
                            toggleStack(
                              index
                            )
                        }

                        aria-expanded={
                          isOpen
                        }
                      >


                        <span>
                          {item.title}
                        </span>


                        <FaChevronDown />


                      </button>


                      <div
                        className="techstack-accordion__content"
                      >

                        <div>

                          <p>
                            {item.content}
                          </p>

                        </div>

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


    </>

  );

}


export default TechStackWeb;