import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaWordpress,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./TechStackWeb.css";


const webServices = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Website Development",
    description:
      "Business websites built around your brand, goals, users and technical requirements instead of generic templates.",
  },
  {
    icon: <FaWordpress />,
    title: "WordPress Development",
    description:
      "Professional WordPress websites that are responsive, easy to manage, SEO-ready and scalable for growing businesses.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Website Design",
    description:
      "Mobile-first websites designed to provide a consistent experience across phones, tablets, laptops and desktops.",
  },
  {
    icon: <FaCode />,
    title: "Custom Web Solutions",
    description:
      "Frontend, backend and custom web functionality developed for businesses that need more than a standard website.",
  },
];


const websiteFeatures = [
  "Responsive website design",
  "Custom UI and UX design",
  "WordPress development",
  "Business website development",
  "Landing page development",
  "SEO-ready website structure",
  "Mobile-first optimisation",
  "Performance optimisation",
  "Contact and lead forms",
  "Analytics integration",
  "Website security setup",
  "Ongoing maintenance support",
];


const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, website goals, competitors and technical requirements.",
  },
  {
    number: "02",
    title: "Structure & UX",
    description:
      "We plan the website hierarchy, user journeys, navigation and content structure before development begins.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Our team builds a responsive, fast and professional website using the technology that best fits your needs.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test responsiveness, performance, forms, links, browser compatibility and SEO essentials before launch.",
  },
];


function TechStackWeb() {

  useEffect(() => {

    /* =====================================================
       SEO TITLE
    ===================================================== */

    document.title =
      "Website Development Company in Bangalore | WordPress Agency | DGATE IS";


    /* =====================================================
       META DESCRIPTION
    ===================================================== */

    const description =
      "DGATE IS is a website development company in Bangalore offering custom website design, WordPress development and responsive web solutions for startups, small businesses and growing brands.";

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
      `${window.location.origin}/tech-stack-web-experience.html`
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="webdev-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="webdev-hero">

          <div className="webdev-container webdev-hero__grid">

            <div className="webdev-hero__content">

              <span className="webdev-eyebrow">
                WEBSITE DEVELOPMENT COMPANY IN BANGALORE
              </span>


              <h1>
                Website Development Company in Bangalore 
                <span> DGATE IS</span>
              </h1>


              <p>
                Custom WordPress & PHP website development 
                for growing Bangalore businesses. Fast, secure, SEO-ready sites.
              </p>


              <div className="webdev-hero__actions">

                <Link
                  to="/contact"
                  className="webdev-btn webdev-btn--primary"
                >
                  Start Your Website Project

                  <FaArrowRight />
                </Link>


                <a
                  href="#website-cost"
                  className="webdev-btn webdev-btn--secondary"
                >
                  View Development Options
                </a>

              </div>

            </div>


            <div className="webdev-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85"
                alt="Website development company in Bangalore"
              />


              <div className="webdev-hero__card">

                <strong>
                  Design + Development + Performance
                </strong>

                <span>
                  Modern websites built for real business growth.
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="webdev-section">

          <div className="webdev-container">

            <div className="webdev-heading">

              <span>
                WORDPRESS DEVELOPMENT AGENCY BANGALORE
              </span>


              <h2>
                Professional Website Development
                for Modern Businesses.
              </h2>


              <p>
                Your website is often the first experience a customer
                has with your business. We combine design, development,
                performance and usability to create websites that look
                professional and support measurable business goals.
              </p>

            </div>


            <div className="webdev-services-grid">

              {webServices.map(
                (service) => (

                  <article
                    className="webdev-service-card"
                    key={service.title}
                  >

                    <div className="webdev-service-card__icon">
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
            WORDPRESS
        ===================================================== */}

        <section className="webdev-section webdev-section--light">

          <div className="webdev-container webdev-two-column">

            <div>

              <span className="webdev-small-label">
                WORDPRESS DEVELOPMENT SERVICES
              </span>


              <h2>
                Flexible WordPress Websites
                Built for Easy Management.
              </h2>


              <p>
                As a WordPress development agency in Bangalore,
                DGATE IS builds business websites that give your team
                control over content while maintaining performance,
                responsive design and professional presentation.
              </p>


              <Link
                to="/contact"
                className="webdev-text-link"
              >
                Discuss Your WordPress Project

                <FaArrowRight />
              </Link>

            </div>


            <div className="webdev-feature-list">

              <div>
                <FaCheckCircle />
                Custom WordPress website design
              </div>

              <div>
                <FaCheckCircle />
                Theme setup and customisation
              </div>

              <div>
                <FaCheckCircle />
                Responsive layouts
              </div>

              <div>
                <FaCheckCircle />
                Plugin integration
              </div>

              <div>
                <FaCheckCircle />
                Lead generation forms
              </div>

              <div>
                <FaCheckCircle />
                SEO-ready structure
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOM WEBSITE
        ===================================================== */}

        <section className="webdev-section">

          <div className="webdev-container webdev-two-column">

            <div>

              <span className="webdev-small-label">
                CUSTOM WEBSITE DESIGN BANGALORE
              </span>


              <h2>
                Custom Website Design
                That Reflects Your Brand.
              </h2>


              <p>
                We design websites around your brand identity,
                business objectives and customer journey rather
                than forcing your business into a generic template.
              </p>

            </div>


            <div className="webdev-features-grid">

              {websiteFeatures.map(
                (feature) => (

                  <div
                    className="webdev-feature-item"
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
            RESPONSIVE DESIGN
        ===================================================== */}

        <section className="webdev-responsive-section">

          <div className="webdev-container webdev-responsive-grid">

            <div>

              <span className="webdev-small-label">
                RESPONSIVE WEBSITE DESIGN COMPANY BANGALORE
              </span>


              <h2>
                Designed for Every Screen.
              </h2>


              <p>
                Your customers may discover your business from a
                phone, tablet or desktop. Every DGATE website is
                designed to adapt smoothly across modern screen sizes.
              </p>

            </div>


            <div className="webdev-responsive-cards">

              <article>

                <FaMobileAlt />

                <h3>
                  Mobile First
                </h3>

                <p>
                  Interfaces designed around the way modern customers
                  browse and interact on mobile devices.
                </p>

              </article>


              <article>

                <FaRocket />

                <h3>
                  Performance Focused
                </h3>

                <p>
                  Clean development practices and optimisation for
                  faster website experiences.
                </p>

              </article>


              <article>

                <FaSearch />

                <h3>
                  SEO Ready
                </h3>

                <p>
                  Search-friendly page structure, metadata support
                  and technical foundations.
                </p>

              </article>


              <article>

                <FaShieldAlt />

                <h3>
                  Secure
                </h3>

                <p>
                  Practical website security and maintenance
                  considerations built into the development process.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECH STACK
        ===================================================== */}

        <section className="webdev-section webdev-section--dark">

          <div className="webdev-container">

            <div className="webdev-heading webdev-heading--center">

              <span>
                TECH STACK & WEB EXPERIENCE
              </span>


              <h2>
                The Right Technology
                for the Right Website.
              </h2>


              <p>
                “Tech Stack & Web Experience” remains important
                inside our development process. We select technology
                based on your website requirements, scalability,
                content management needs and future growth.
              </p>

            </div>


            <div className="webdev-tech-grid">

              <div>
                <strong>
                  WordPress
                </strong>

                <span>
                  Business websites & CMS
                </span>
              </div>


              <div>
                <strong>
                  React
                </strong>

                <span>
                  Modern frontend experiences
                </span>
              </div>


              <div>
                <strong>
                  Node.js
                </strong>

                <span>
                  Backend development
                </span>
              </div>


              <div>
                <strong>
                  PHP
                </strong>

                <span>
                  Custom web development
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SMALL BUSINESS
        ===================================================== */}

        <section className="webdev-section webdev-section--light">

          <div className="webdev-container webdev-two-column">

            <div>

              <span className="webdev-small-label">
                WEBSITE DEVELOPMENT FOR SMALL BUSINESS
              </span>


              <h2>
                Professional Websites
                for Small Businesses.
              </h2>


              <p>
                Small businesses need websites that communicate
                clearly, generate enquiries and remain easy to manage.
                DGATE IS develops practical websites based on your
                budget, business stage and growth plans.
              </p>

            </div>


            <div className="webdev-small-business-card">

              <FaChartLine />


              <h3>
                Built for Growth
              </h3>


              <p>
                Start with the website your business needs today
                while keeping room for future pages, integrations,
                campaigns and digital growth.
              </p>


              <Link
                to="/contact"
                className="webdev-text-link"
              >
                Talk to Our Team

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            COST
        ===================================================== */}

        <section
          className="webdev-section"
          id="website-cost"
        >

          <div className="webdev-container">

            <div className="webdev-heading webdev-heading--center">

              <span>
                WEBSITE DEVELOPMENT COST IN BANGALORE
              </span>


              <h2>
                How Much Does Website Development
                Cost in Bangalore?
              </h2>


              <p>
                Website development cost depends on the number
                of pages, design complexity, CMS requirements,
                custom functionality, integrations and content needs.
                We recommend the right scope after understanding
                your business.
              </p>

            </div>


            <div className="webdev-package-grid">

              <article className="webdev-package">

                <span className="webdev-package__label">
                  STARTER
                </span>


                <h3>
                  Business Website
                </h3>


                <p>
                  Suitable for small businesses that need a clean,
                  professional online presence.
                </p>


                <ul>

                  <li>
                    Responsive website
                  </li>

                  <li>
                    Core business pages
                  </li>

                  <li>
                    Contact form
                  </li>

                  <li>
                    Mobile optimisation
                  </li>

                  <li>
                    Basic SEO setup
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="webdev-package__link"
                >
                  Get a Cost Estimate

                  <FaArrowRight />
                </Link>

              </article>


              <article className="webdev-package webdev-package--featured">

                <span className="webdev-package__label">
                  GROWTH
                </span>


                <h3>
                  Custom Business Website
                </h3>


                <p>
                  For businesses that need stronger branding,
                  content structure and lead-generation features.
                </p>


                <ul>

                  <li>
                    Custom website design
                  </li>

                  <li>
                    WordPress CMS
                  </li>

                  <li>
                    Lead generation forms
                  </li>

                  <li>
                    Analytics integration
                  </li>

                  <li>
                    SEO-ready structure
                  </li>

                  <li>
                    Performance optimisation
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="webdev-package__link"
                >
                  Discuss Your Website

                  <FaArrowRight />
                </Link>

              </article>


              <article className="webdev-package">

                <span className="webdev-package__label">
                  CUSTOM
                </span>


                <h3>
                  Advanced Web Solution
                </h3>


                <p>
                  For businesses requiring custom functionality,
                  integrations or web application features.
                </p>


                <ul>

                  <li>
                    Custom development
                  </li>

                  <li>
                    Advanced integrations
                  </li>

                  <li>
                    Custom workflows
                  </li>

                  <li>
                    Scalable architecture
                  </li>

                  <li>
                    Technical support
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="webdev-package__link"
                >
                  Request Custom Quote

                  <FaArrowRight />
                </Link>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="webdev-section webdev-section--light">

          <div className="webdev-container">

            <div className="webdev-heading webdev-heading--center">

              <span>
                OUR WEB DEVELOPMENT PROCESS
              </span>


              <h2>
                From Website Idea
                to Launch.
              </h2>

            </div>


            <div className="webdev-process-grid">

              {processSteps.map(
                (step) => (

                  <article
                    className="webdev-process-card"
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

        <section className="webdev-section">

          <div className="webdev-container">

            <div className="webdev-heading">

              <span>
                WEBSITE DEVELOPMENT FAQs
              </span>


              <h2>
                Common Website Development
                Questions in Bangalore.
              </h2>

            </div>


            <div className="webdev-faq">

              <details>

                <summary>
                  How much does website development cost in Bangalore?
                </summary>


                <p>
                  The cost depends on the number of pages,
                  custom design requirements, WordPress or custom
                  development, integrations and functionality.
                  DGATE IS provides project-specific estimates
                  after understanding your requirements.
                </p>

              </details>


              <details>

                <summary>
                  Does DGATE IS provide WordPress development
                  in Bangalore?
                </summary>


                <p>
                  Yes. We provide WordPress development for
                  business websites, corporate websites and
                  content-driven websites that need an easy-to-manage
                  CMS.
                </p>

              </details>


              <details>

                <summary>
                  Do you provide custom website design in Bangalore?
                </summary>


                <p>
                  Yes. Our websites can be custom-designed around
                  your brand, audience, content and business goals
                  rather than relying only on generic templates.
                </p>

              </details>


              <details>

                <summary>
                  Are your websites responsive?
                </summary>


                <p>
                  Yes. Our websites are designed to work across
                  modern desktop, tablet and mobile screen sizes.
                </p>

              </details>


              <details>

                <summary>
                  Do you develop websites for small businesses?
                </summary>


                <p>
                  Yes. DGATE IS works with startups and small
                  businesses that need professional, practical and
                  scalable website development in Bangalore.
                </p>

              </details>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="webdev-cta">

          <div className="webdev-container">

            <div className="webdev-cta__box">

              <div>

                <span>
                  BUILD YOUR WEBSITE
                </span>


                <h2>
                  Looking for a Website Development
                  Company in Bangalore?
                </h2>


                <p>
                  Tell us about your business and our team will
                  recommend the right design, technology and
                  development approach.
                </p>

              </div>


              <Link
                to="/contact"
                className="webdev-btn webdev-btn--primary"
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


export default TechStackWeb;