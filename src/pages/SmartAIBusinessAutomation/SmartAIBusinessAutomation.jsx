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
  FaObjectGroup,
  FaBezierCurve,
  FaExpandArrowsAlt,
} from "react-icons/fa";

import Navbar
  from "../../components/Home/Navbar/Navbar";

import Footer
  from "../../components/Home/Footer/Footer";

import "./SmartAIBusinessAutomation.css";


/* =========================================================
   MAIN AI IMAGE
========================================================= */

const aiAutomationImage =
  "https://www.ozdreamwalk.com/wp-content/uploads/2024/08/ai_strategies_for_business_automation.jpg";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackAiAutomationImage =
  "https://www.ozdreamwalk.com/wp-content/uploads/2024/08/ai_strategies_for_business_automation.jpg";


/* =========================================================
   SERVICE APPROACH
========================================================= */

const approachItems = [

  {
    title:
      "Process & Workflow Analysis",

    description:
      "Identify tasks ideal for automation across sales, support, and operations.",
  },

  {
    title:
      "Bot Strategy & Use-Case Design",

    description:
      "Define calling bots, WhatsApp bots, chat bots, and sales automation flows.",
  },

  {
    title:
      "AI Bot Development & Integrations",

    description:
      "Connect CRMs, APIs, databases, and messaging platforms seamlessly.",
  },

  {
    title:
      "Testing, Deployment & Optimization",

    description:
      "Train AI models, refine responses, and optimize performance continuously.",
  },

];


/* =========================================================
   WHAT WE OFFER
========================================================= */

const offerCards = [

  {
    id: "strategy",

    icon:
      <FaObjectGroup />,

    title:
      "AI Automation Strategy & Architecture",

    items: [
      "Business workflow & automation discovery",
      "AI bot use-case planning & logic design",
      "Scalable automation architecture",
    ],
  },

  {
    id: "bots",

    icon:
      <FaBezierCurve />,

    title:
      "AI Bots & Smart Assistants",

    items: [
      "AI calling bots & voice assistants",
      "WhatsApp, chat & messaging bots",
      "Sales, support & lead qualification bots",
    ],
  },

  {
    id: "integrations",

    icon:
      <FaExpandArrowsAlt />,

    title:
      "Integrations & Workflow Automation",

    items: [
      "CRM, ERP & database integrations",
      "Automated follow-up workflows",
      "Analytics, reporting & optimization",
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
      "Business Intelligence",

    description:
      "We analyze your workflows, sales funnels, support journeys, and customer touchpoints to identify automation opportunities.",
  },

  {
    number: "02",

    title:
      "AI Bot Design",

    description:
      "Designing smart Calling Bots, Sales Bots, WhatsApp Bots, and AI Assistants aligned with your brand voice.",
  },

  {
    number: "03",

    title:
      "Automation Build",

    description:
      "We develop AI-powered workflows integrating CRM, WhatsApp, voice, email, APIs, and internal systems.",
  },

  {
    number: "04",

    title:
      "Deploy & Scale",

    description:
      "Go live with continuous AI learning, analytics, optimization, and scalable automation across your business.",
  },

];


/* =========================================================
   FAQ
========================================================= */

const faqItems = [

  {
    question:
      "What is AI business automation?",

    answer:
      "AI business automation uses intelligent software and AI-powered bots to automate repetitive processes, customer communication, sales follow-ups, support tasks, lead qualification, and operational workflows.",
  },

  {
    question:
      "What types of AI bots do you build?",

    answer:
      "We build AI calling bots, sales bots, WhatsApp bots, customer-support bots, lead qualification bots, messaging assistants, and custom AI workflow automation solutions.",
  },

  {
    question:
      "Can AI replace human agents?",

    answer:
      "AI is most effective when it handles repetitive and high-volume tasks while human teams focus on conversations, decisions, exceptions, and situations that require personal attention.",
  },

  {
    question:
      "Can AI bots integrate with my CRM & tools?",

    answer:
      "Yes. AI automation can be connected with CRMs, APIs, databases, messaging platforms, WhatsApp workflows, internal applications, and other compatible business systems.",
  },

  {
    question:
      "Is AI automation secure?",

    answer:
      "Security depends on the architecture and integrations used. We design automation workflows with controlled access, secure integrations, appropriate data handling, and reliable system architecture.",
  },

  {
    question:
      "How fast can AI automation go live?",

    answer:
      "The implementation timeline depends on the use case, integrations, workflow complexity, testing requirements, and the amount of customization required for the business.",
  },

];


/* =========================================================
   PAGE
========================================================= */

function SmartAIBusinessAutomation() {

  const [
    activeFaq,
    setActiveFaq,
  ] = useState(0);


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(
    () => {

      document.title =
        "WhatsApp Chatbot Development Company Bangalore | AI Automation | DGATE IS";


      const description =
        "DGATE IS provides AI business automation, WhatsApp bots, AI calling bots, sales bots, smart assistants and workflow automation solutions in Bangalore.";


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
        `${window.location.origin}/smart-ai-business-automation`
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
     FAQ TOGGLE
  ======================================================= */

  const toggleFaq =
    (index) => {

      setActiveFaq(
        (current) =>
          current === index
            ? null
            : index
      );

    };


  return (

    <>

      <Navbar />


      <main
        className="smartai-page"
      >


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="smartai-hero"
        >


          <div
            className="
              smartai-container
              smartai-hero__grid
            "
          >


            <div
              className="smartai-hero__title"
            >

              <div
                className="smartai-hero__shape"
                aria-hidden="true"
              />


              <div>

                <span
                  className="smartai-eyebrow"
                >
                  AI BUSINESS AUTOMATION
                </span>


                <h1>

                  Smart AI Business

                  <br />

                  Automation

                  <br />

                  <span>
                    Solutions
                  </span>

                </h1>

              </div>

            </div>


            <div
              className="smartai-hero__description"
            >

              <p>

                Automate your business with powerful
                AI Calling Bots, Sales Bots, WhatsApp
                Bots, and intelligent Message Bots that
                work 24/7. From lead generation and
                customer support to follow-ups and
                conversions, our AI automation
                solutions help you scale faster with
                less manual effort.

              </p>

            </div>


          </div>


        </section>


        {/* =================================================
            MAIN AI IMAGE
            ONLY ONE IMAGE
        ================================================= */}

        <section
          className="smartai-feature"
        >

          <div
            className="smartai-container"
          >

            <figure
              className="smartai-feature__media"
            >

              <img
                src={aiAutomationImage}

                alt="Artificial intelligence and smart business automation technology"

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
                        fallbackAiAutomationImage;

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
          className="smartai-overview"
        >

          <div
            className="smartai-container"
          >


            <header
              className="smartai-section-heading"
            >

              <span
                className="smartai-section-heading__eyebrow"
              >
                SERVICE OVERVIEW
              </span>


              <h2>

                Smart AI –

                <span>
                  {" "}Business Automation
                </span>

              </h2>

            </header>


            <div
              className="smartai-divider"
            />


            <div
              className="smartai-overview__grid"
            >


              <div
                className="smartai-overview__text"
              >

                <p>

                  AI automation transforms how
                  businesses communicate, sell, and
                  support customers. By deploying
                  intelligent AI Calling Bots, Sales
                  Bots, WhatsApp Bots, and Message
                  Bots, businesses can automate
                  repetitive tasks, respond instantly,
                  and engage customers 24/7 without
                  constant manual intervention.

                </p>


                <p>

                  At DGATE IS, we build smart AI
                  automation systems that handle lead
                  qualification, follow-ups, customer
                  support, appointment booking and
                  sales conversations — helping you
                  reduce costs, increase efficiency,
                  and scale operations faster.

                </p>

              </div>


              <div
                className="smartai-approach"
              >

                <h3>
                  Our Approach to AI Automation
                </h3>


                <div
                  className="smartai-approach__list"
                >

                  {approachItems.map(
                    (item) => (

                      <div
                        className="smartai-approach__item"

                        key={
                          item.title
                        }
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
          className="smartai-offer"
        >

          <div
            className="smartai-container"
          >


            <header
              className="smartai-offer__header"
            >

              <span
                className="smartai-section-heading__eyebrow"
              >
                OUR EXPERTISE
              </span>


              <h2>

                What We Offer in

                <span>
                  {" "}AI Automation
                </span>

              </h2>

            </header>


            <div
              className="smartai-offer__grid"
            >


              {offerCards.map(
                (card) => (

                  <article
                    className="smartai-offer__card"

                    key={
                      card.id
                    }
                  >


                    <div
                      className="smartai-offer__icon"
                    >
                      {card.icon}
                    </div>


                    <h3>
                      {card.title}
                    </h3>


                    <div
                      className="smartai-offer__line"
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
            AI AUTOMATION PROCESS
        ================================================= */}

        <section
          className="smartai-process"
        >


          <div
            className="smartai-process__grid-background"
            aria-hidden="true"
          />


          <div
            className="
              smartai-container
              smartai-process__content
            "
          >


            <div
              className="smartai-process__label"
            >
              AI AUTOMATION WORKFLOW
            </div>


            <h2>

              Our AI Automation Process

              <br />

              <span>
                From Idea to Intelligent Execution
              </span>

            </h2>


            <div
              className="smartai-process__steps"
            >


              <div
                className="smartai-process__line"
                aria-hidden="true"
              />


              {processSteps.map(
                (step) => (

                  <article
                    className="smartai-process__step"

                    key={
                      step.number
                    }
                  >


                    <span
                      className="smartai-process__number"
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
          className="smartai-faq"
        >

          <div
            className="smartai-container"
          >


            <div
              className="smartai-faq__label"
            >
              AI AUTOMATION FAQS
            </div>


            <h2>

              Common Questions About

              <br />

              <span>
                AI Business Automation
              </span>

            </h2>


            <div
              className="smartai-faq__accordion"
            >


              {faqItems.map(
                (item, index) => {

                  const isOpen =
                    activeFaq === index;


                  return (

                    <div
                      className={`
                        smartai-faq__item
                        ${
                          isOpen
                            ? "smartai-faq__item--active"
                            : ""
                        }
                      `}

                      key={
                        item.question
                      }
                    >


                      <button
                        type="button"

                        className="smartai-faq__button"

                        onClick={
                          () =>
                            toggleFaq(
                              index
                            )
                        }

                        aria-expanded={
                          isOpen
                        }
                      >

                        <span>
                          {item.question}
                        </span>


                        <FaChevronDown />


                      </button>


                      <div
                        className="smartai-faq__answer"
                      >

                        <div>

                          <p>
                            {item.answer}
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


export default SmartAIBusinessAutomation;