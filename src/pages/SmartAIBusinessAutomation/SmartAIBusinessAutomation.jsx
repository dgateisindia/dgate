import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaRobot,
  FaWhatsapp,
  FaPhoneAlt,
  FaCogs,
  FaCheckCircle,
  FaChartLine,
  FaHeadset,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./SmartAIBusinessAutomation.css";


/* =========================================================
   SERVICES
========================================================= */

const automationServices = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Chatbot Development",
    description:
      "Automated WhatsApp conversations for enquiries, lead capture, support, order updates, FAQs and business workflows.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "AI Calling Bots",
    description:
      "AI-powered calling workflows for lead qualification, reminders, follow-ups, customer assistance and repetitive business calls.",
  },
  {
    icon: <FaRobot />,
    title: "AI Business Automation",
    description:
      "Automate repetitive workflows across customer communication, lead handling, internal processes and service operations.",
  },
  {
    icon: <FaCogs />,
    title: "WhatsApp API Integrations",
    description:
      "Connect WhatsApp Business API with your CRM, website, lead forms, support workflows and other business systems.",
  },
];


/* =========================================================
   AUTOMATION FEATURES
========================================================= */

const automationFeatures = [
  "WhatsApp Business API integration",
  "Lead capture automation",
  "FAQ chatbot automation",
  "Customer support workflows",
  "Appointment reminders",
  "Order status notifications",
  "CRM integration",
  "Lead qualification workflows",
  "AI calling bot integration",
  "Follow-up automation",
  "Campaign response automation",
  "Analytics and reporting",
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Workflow Discovery",
    description:
      "We identify repetitive communication and business processes that can be automated effectively.",
  },
  {
    number: "02",
    title: "Conversation & Logic Design",
    description:
      "We map chatbot flows, automation rules, lead journeys and required integrations.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build the WhatsApp chatbot, AI automation or calling workflow and connect it with your business tools.",
  },
  {
    number: "04",
    title: "Testing & Optimisation",
    description:
      "We test real user scenarios, automation logic, integrations and response flows before deployment.",
  },
];


function SmartAIBusinessAutomation() {

  useEffect(() => {

    /* =====================================================
       SEO TITLE
    ===================================================== */

    document.title =
      "WhatsApp Chatbot Development Company Bangalore | AI Automation | DGATE IS";


    /* =====================================================
       META DESCRIPTION
    ===================================================== */

    const description =
      "DGATE IS is a WhatsApp chatbot development company and AI automation agency in Bangalore offering WhatsApp Business API solutions, AI calling bots and business automation for startups and small businesses.";

    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );


    if (!metaDescription) {

      metaDescription =
        document.createElement("meta");

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


    /* =====================================================
       CANONICAL
    ===================================================== */

    let canonical =
      document.querySelector(
        'link[rel="canonical"]'
      );


    if (!canonical) {

      canonical =
        document.createElement("link");

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
      `${window.location.origin}/smart-ai-business-automation.html`
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="automation-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="automation-hero">

          <div className="automation-container automation-hero__grid">

            {/* LEFT */}

            <div className="automation-hero__content">

              <span className="automation-eyebrow">
                WHATSAPP CHATBOT DEVELOPMENT COMPANY BANGALORE
              </span>


              <h1>
                Smart AI Business
                Automation Solutions
                
              </h1>


              <p>
                Automate your business with powerful AI Calling Bots, Sales Bots, WhatsApp Bots, and intelligent Message Bots that work 24/7. From lead generation and customer support to follow-ups and conversions, 
                our AI automation solutions help you scale faster with less manual effort.
              </p>


              <div className="automation-hero__actions">

                <Link
                  to="/contact"
                  className="automation-btn automation-btn--primary"
                >
                  Automate Your Business

                  <FaArrowRight />
                </Link>


                <a
                  href="#automation-cost"
                  className="automation-btn automation-btn--secondary"
                >
                  View Automation Options
                </a>

              </div>

            </div>


            {/* RIGHT */}

            <div className="automation-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=85"
                alt="WhatsApp chatbot and AI automation agency in Bangalore"
              />


              <div className="automation-hero__card">

                <FaWhatsapp />


                <div>

                  <strong>
                    AI + WhatsApp + Automation
                  </strong>

                  <span>
                    Faster responses. Smarter workflows.
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="automation-section">

          <div className="automation-container">

            <div className="automation-heading">

              <span>
                AI AUTOMATION AGENCY BANGALORE
              </span>


              <h2>
                Intelligent Automation
                for Everyday Business Workflows.
              </h2>


              <p>
                Automation can reduce repetitive work, improve
                response times and help your team manage more
                customer interactions without manually handling
                every step.
              </p>

            </div>


            <div className="automation-services-grid">

              {automationServices.map(
                (service) => (

                  <article
                    className="automation-service-card"
                    key={service.title}
                  >

                    <div className="automation-service-card__icon">
                      {service.icon}
                    </div>


                    <h3>
                      {service.title}
                    </h3>


                    <p>
                      {service.description}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            WHATSAPP BUSINESS API
        ===================================================== */}

        <section className="automation-section automation-section--light">

          <div className="automation-container automation-two-column">

            <div>

              <span className="automation-small-label">
                WHATSAPP API BUSINESS SOLUTIONS BANGALORE
              </span>


              <h2>
                Turn WhatsApp Into
                a Business Automation Channel.
              </h2>


              <p>
                WhatsApp Business API can help your team manage
                enquiries, customer notifications, support requests
                and automated conversations at scale.
              </p>


              <p>
                DGATE IS can design workflows that connect WhatsApp
                with your website, CRM or internal processes based
                on your business requirements.
              </p>


              <Link
                to="/contact"
                className="automation-text-link"
              >
                Discuss WhatsApp API Integration

                <FaArrowRight />
              </Link>

            </div>


            <div className="automation-feature-grid">

              {automationFeatures.map(
                (feature) => (

                  <div
                    className="automation-feature-item"
                    key={feature}
                  >

                    <FaCheckCircle />

                    <span>
                      {feature}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            AI CALLING BOT
        ===================================================== */}

        <section className="automation-calling-section">

          <div className="automation-container automation-calling-grid">

            <div className="automation-calling-visual">

              <div className="automation-call-circle">

                <FaPhoneAlt />

              </div>


              <div className="automation-call-flow">

                <div>
                  Lead
                </div>

                <span>
                  →
                </span>

                <div>
                  AI Call
                </div>

                <span>
                  →
                </span>

                <div>
                  Qualified
                </div>

              </div>

            </div>


            <div>

              <span className="automation-small-label">
                AI CALLING BOT FOR BUSINESS BANGALORE
              </span>


              <h2>
                Automate Repetitive
                Business Calls.
              </h2>


              <p>
                AI calling bots can support repetitive call
                scenarios such as lead qualification, reminders,
                follow-ups and basic customer interactions.
              </p>


              <div className="automation-mini-list">

                <div>
                  <FaCheckCircle />
                  Lead qualification
                </div>

                <div>
                  <FaCheckCircle />
                  Appointment reminders
                </div>

                <div>
                  <FaCheckCircle />
                  Follow-up calls
                </div>

                <div>
                  <FaCheckCircle />
                  Customer notifications
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SMALL BUSINESS
        ===================================================== */}

        <section className="automation-section">

          <div className="automation-container automation-two-column">

            <div>

              <span className="automation-small-label">
                AI CHATBOT FOR SMALL BUSINESS BANGALORE
              </span>


              <h2>
                Automation Is Not Only
                for Large Companies.
              </h2>


              <p>
                Small businesses can use AI chatbots and WhatsApp
                automation to respond faster, qualify enquiries and
                reduce manual follow-up work without building a large
                customer service team.
              </p>

            </div>


            <div className="automation-small-business-grid">

              <article>

                <FaBolt />

                <h3>
                  Faster Responses
                </h3>

                <p>
                  Respond automatically to common customer
                  enquiries and basic requests.
                </p>

              </article>


              <article>

                <FaHeadset />

                <h3>
                  Better Support
                </h3>

                <p>
                  Handle frequently asked questions before
                  routing complex issues to your team.
                </p>

              </article>


              <article>

                <FaChartLine />

                <h3>
                  Better Follow-Up
                </h3>

                <p>
                  Automate repetitive lead and customer
                  follow-up workflows.
                </p>

              </article>


              <article>

                <FaCogs />

                <h3>
                  Connected Systems
                </h3>

                <p>
                  Connect automation with CRM, websites
                  and other business tools where required.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            COST
        ===================================================== */}

        <section
          className="automation-section automation-section--light"
          id="automation-cost"
        >

          <div className="automation-container">

            <div className="automation-heading automation-heading--center">

              <span>
                WHATSAPP BUSINESS AUTOMATION COST BANGALORE
              </span>


              <h2>
                How Much Does WhatsApp
                Business Automation Cost?
              </h2>


              <p>
                Automation cost depends on the chatbot complexity,
                WhatsApp API requirements, number of workflows,
                CRM integrations, AI features and ongoing support.
                We recommend a solution after understanding your
                exact business process.
              </p>

            </div>


            <div className="automation-package-grid">

              {/* STARTER */}

              <article className="automation-package">

                <span className="automation-package__label">
                  STARTER
                </span>


                <h3>
                  Basic WhatsApp Automation
                </h3>


                <p>
                  Suitable for small businesses that want to automate
                  common customer enquiries and lead capture.
                </p>


                <ul>

                  <li>
                    Basic chatbot flow
                  </li>

                  <li>
                    FAQ automation
                  </li>

                  <li>
                    Lead capture
                  </li>

                  <li>
                    Basic notification flow
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="automation-package__link"
                >
                  Get Cost Estimate

                  <FaArrowRight />
                </Link>

              </article>


              {/* GROWTH */}

              <article className="automation-package automation-package--featured">

                <span className="automation-package__label">
                  GROWTH
                </span>


                <h3>
                  WhatsApp + CRM Automation
                </h3>


                <p>
                  Suitable for businesses that need connected lead,
                  sales and customer communication workflows.
                </p>


                <ul>

                  <li>
                    WhatsApp Business API
                  </li>

                  <li>
                    Advanced conversation flows
                  </li>

                  <li>
                    CRM integration
                  </li>

                  <li>
                    Automated follow-ups
                  </li>

                  <li>
                    Lead qualification
                  </li>

                  <li>
                    Reporting support
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="automation-package__link"
                >
                  Discuss Your Workflow

                  <FaArrowRight />
                </Link>

              </article>


              {/* CUSTOM */}

              <article className="automation-package">

                <span className="automation-package__label">
                  CUSTOM AI
                </span>


                <h3>
                  Advanced AI Automation
                </h3>


                <p>
                  For businesses requiring AI conversations,
                  calling workflows or more complex integrations.
                </p>


                <ul>

                  <li>
                    AI chatbot workflows
                  </li>

                  <li>
                    AI calling bot
                  </li>

                  <li>
                    Custom integrations
                  </li>

                  <li>
                    Business workflow automation
                  </li>

                  <li>
                    Custom logic
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="automation-package__link"
                >
                  Request Custom Quote

                  <FaArrowRight />
                </Link>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY AUTOMATE
        ===================================================== */}

        <section className="automation-section automation-section--dark">

          <div className="automation-container">

            <div className="automation-heading automation-heading--center">

              <span>
                SMART BUSINESS AUTOMATION
              </span>


              <h2>
                Give Your Team More Time
                for Higher-Value Work.
              </h2>


              <p>
                Automation is most valuable when it removes
                repetitive work while keeping important customer
                interactions connected to your team.
              </p>

            </div>


            <div className="automation-benefit-grid">

              <article>

                <FaBolt />

                <strong>
                  Faster
                </strong>

                <span>
                  Reduce repetitive manual response time.
                </span>

              </article>


              <article>

                <FaCogs />

                <strong>
                  Consistent
                </strong>

                <span>
                  Standardise common business workflows.
                </span>

              </article>


              <article>

                <FaChartLine />

                <strong>
                  Scalable
                </strong>

                <span>
                  Handle more interactions as your business grows.
                </span>

              </article>


              <article>

                <FaShieldAlt />

                <strong>
                  Controlled
                </strong>

                <span>
                  Define clear rules for automated business processes.
                </span>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="automation-section automation-section--light">

          <div className="automation-container">

            <div className="automation-heading automation-heading--center">

              <span>
                OUR AUTOMATION PROCESS
              </span>


              <h2>
                From Manual Workflow
                to Smart Automation.
              </h2>

            </div>


            <div className="automation-process-grid">

              {processSteps.map(
                (step) => (

                  <article
                    className="automation-process-card"
                    key={step.number}
                  >

                    <span>
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


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="automation-section">

          <div className="automation-container">

            <div className="automation-heading">

              <span>
                AI AUTOMATION FAQs
              </span>


              <h2>
                Common Questions About
                WhatsApp & AI Automation.
              </h2>

            </div>


            <div className="automation-faq">

              <details>

                <summary>
                  How much does WhatsApp business automation
                  cost in Bangalore?
                </summary>


                <p>
                  The cost depends on the chatbot complexity,
                  WhatsApp API requirements, number of automated
                  workflows, integrations and level of AI required.
                  DGATE IS can provide a scope-based estimate after
                  reviewing your use case.
                </p>

              </details>


              <details>

                <summary>
                  Do you develop WhatsApp chatbots in Bangalore?
                </summary>


                <p>
                  Yes. DGATE IS develops WhatsApp chatbot workflows
                  for enquiries, lead capture, customer support,
                  notifications and other business requirements.
                </p>

              </details>


              <details>

                <summary>
                  Can WhatsApp automation connect with my CRM?
                </summary>


                <p>
                  Depending on the CRM and available integrations,
                  WhatsApp workflows can be connected with lead,
                  sales and customer management systems.
                </p>

              </details>


              <details>

                <summary>
                  Do you build AI chatbots for small businesses?
                </summary>


                <p>
                  Yes. Automation can be structured around smaller
                  workflows such as answering common questions,
                  collecting leads and managing basic follow-ups.
                </p>

              </details>


              <details>

                <summary>
                  Can you develop an AI calling bot for business?
                </summary>


                <p>
                  Yes. AI calling workflows can be designed for
                  appropriate repetitive business scenarios such
                  as reminders, qualification and follow-up calls.
                </p>

              </details>


              <details>

                <summary>
                  Are you a WhatsApp automation agency near me
                  in Bangalore?
                </summary>


                <p>
                  DGATE IS is based in Bangalore and can support
                  businesses looking for WhatsApp Business API,
                  chatbot and AI automation solutions.
                </p>

              </details>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="automation-cta">

          <div className="automation-container">

            <div className="automation-cta__box">

              <div>

                <span>
                  AUTOMATE YOUR BUSINESS
                </span>


                <h2>
                  Looking for a WhatsApp Automation
                  Agency in Bangalore?
                </h2>


                <p>
                  Tell us which business process you want to
                  automate and our team will recommend the right
                  WhatsApp, chatbot or AI workflow.
                </p>

              </div>


              <Link
                to="/contact"
                className="automation-btn automation-btn--primary"
              >
                Get a Free Consultation

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>

      </main>


      <Footer />
    </>
  );
}


export default SmartAIBusinessAutomation;