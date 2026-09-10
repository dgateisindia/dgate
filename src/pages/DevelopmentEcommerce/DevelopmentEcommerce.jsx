import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaShoppingCart,
  FaShopify,
  FaWordpress,
  FaMobileAlt,
  FaCreditCard,
  FaRocket,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./DevelopmentEcommerce.css";


/* =========================================================
   E-COMMERCE SERVICES
========================================================= */

const ecommerceServices = [
  {
    icon: <FaShopify />,
    title: "Shopify Development",
    description:
      "Custom Shopify stores designed for performance, conversions, mobile users and simple day-to-day product management.",
  },
  {
    icon: <FaWordpress />,
    title: "WooCommerce Development",
    description:
      "Flexible WooCommerce development for businesses that need greater control over content, products and integrations.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Custom E-Commerce Development",
    description:
      "Tailored e-commerce experiences built around your products, customers, operations and growth requirements.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-First Commerce",
    description:
      "Responsive online stores designed to provide a fast and frictionless shopping experience across mobile devices.",
  },
];


/* =========================================================
   FEATURES
========================================================= */

const ecommerceFeatures = [
  "Custom storefront design",
  "Shopify theme development",
  "WooCommerce store development",
  "Payment gateway integration",
  "Product and inventory setup",
  "Mobile-first responsive design",
  "Conversion-focused checkout",
  "SEO-friendly store structure",
  "Speed and performance optimisation",
  "Analytics and conversion tracking",
  "Third-party integrations",
  "Post-launch support",
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your products, customers, competitors, business model and technical requirements.",
  },
  {
    number: "02",
    title: "UX & Store Planning",
    description:
      "We plan navigation, product discovery, collections, checkout flow and customer experience.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Our team develops a responsive and conversion-focused Shopify, WooCommerce or custom store.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test responsiveness, payments, checkout, product flows, integrations and performance before launch.",
  },
];


function DevelopmentEcommerce() {

  useEffect(() => {

    /* =====================================================
       SEO TITLE
    ===================================================== */

    document.title =
      "Ecommerce Website Development Company Bangalore | Shopify Agency | DGATE IS";


    /* =====================================================
       META DESCRIPTION
    ===================================================== */

    const description =
      "DGATE IS is an ecommerce website development company in Bangalore offering Shopify development, WooCommerce services and custom ecommerce website design for startups, small businesses and growing brands.";

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
      `${window.location.origin}/development-ecommerce-solutions.html`
    );


    /* =====================================================
       CLEANUP NOT REQUIRED
       Metadata changes on next page using useEffect
    ===================================================== */

  }, []);


  return (
    <>
      <Navbar />


      <main className="ecommerce-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ecommerce-hero">

          <div className="ecommerce-container ecommerce-hero__grid">

            {/* LEFT */}

            <div className="ecommerce-hero__content">

              <span className="ecommerce-eyebrow">
                ECOMMERCE WEBSITE DEVELOPMENT COMPANY BANGALORE
              </span>


              <h1>
                Shopify & WooCommerce
                <span> Development Agency in Bangalore</span>
              </h1>


              <p>
                Custom Shopify & WooCommerce stores built for conversions. 
                Payment gateways, speed & mobile-first design by DGATE IS, Bangalore
              </p>


              <div className="ecommerce-hero__actions">

                <Link
                  to="/contact"
                  className="ecommerce-btn ecommerce-btn--primary"
                >
                  Start Your E-Commerce Project

                  <FaArrowRight />
                </Link>


                <a
                  href="#ecommerce-cost"
                  className="ecommerce-btn ecommerce-btn--secondary"
                >
                  View Development Options
                </a>

              </div>

            </div>


            {/* RIGHT */}

            <div className="ecommerce-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
                alt="Custom ecommerce website development company in Bangalore"
              />


              <div className="ecommerce-hero__card">

                <strong>
                  Shopify + WooCommerce + Custom
                </strong>

                <span>
                  Commerce experiences built for growth.
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="ecommerce-section">

          <div className="ecommerce-container">

            <div className="ecommerce-heading">

              <span>
                SHOPIFY DEVELOPMENT AGENCY BANGALORE
              </span>


              <h2>
                E-Commerce Development Built Around
                Your Customers and Business.
              </h2>


              <p>
                A successful e-commerce website needs more than
                attractive product pages. It needs fast performance,
                simple navigation, secure payments, mobile usability
                and a checkout experience designed to reduce friction.
              </p>

            </div>


            <div className="ecommerce-services-grid">

              {ecommerceServices.map(
                (service) => (

                  <article
                    className="ecommerce-service-card"
                    key={service.title}
                  >

                    <div className="ecommerce-service-card__icon">
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
            SHOPIFY / WOOCOMMERCE
        ===================================================== */}

        <section className="ecommerce-section ecommerce-section--light">

          <div className="ecommerce-container ecommerce-two-column">

            <div className="ecommerce-platform-content">

              <span className="ecommerce-small-label">
                SHOPIFY & WOOCOMMERCE DEVELOPMENT
              </span>


              <h2>
                Choose the Right Commerce Platform
                for Your Business.
              </h2>


              <p>
                Whether you need an easy-to-manage Shopify store
                or flexible WooCommerce development, we help you
                choose a platform that fits your products,
                operations and growth plans.
              </p>


              <Link
                to="/contact"
                className="ecommerce-text-link"
              >
                Discuss Your Store Requirements

                <FaArrowRight />
              </Link>

            </div>


            <div className="ecommerce-platform-grid">

              <article className="ecommerce-platform-card">

                <div className="ecommerce-platform-card__icon">
                  <FaShopify />
                </div>


                <h3>
                  Shopify Development
                </h3>


                <p>
                  Ideal for businesses looking for a reliable,
                  scalable and easy-to-manage commerce platform.
                </p>


                <ul>

                  <li>
                    Custom Shopify theme setup
                  </li>

                  <li>
                    Product and collection setup
                  </li>

                  <li>
                    Payment integrations
                  </li>

                  <li>
                    App integrations
                  </li>

                </ul>

              </article>


              <article className="ecommerce-platform-card">

                <div className="ecommerce-platform-card__icon">
                  <FaWordpress />
                </div>


                <h3>
                  WooCommerce Development
                </h3>


                <p>
                  Flexible WordPress-based e-commerce development
                  for businesses requiring greater customisation.
                </p>


                <ul>

                  <li>
                    WooCommerce configuration
                  </li>

                  <li>
                    Custom storefront development
                  </li>

                  <li>
                    Payment gateway setup
                  </li>

                  <li>
                    Plugin integrations
                  </li>

                </ul>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOM ECOMMERCE
        ===================================================== */}

        <section className="ecommerce-section">

          <div className="ecommerce-container ecommerce-two-column">

            <div>

              <span className="ecommerce-small-label">
                CUSTOM ECOMMERCE WEBSITE DESIGN BANGALORE
              </span>


              <h2>
                Custom E-Commerce Experiences,
                Not Generic Templates.
              </h2>


              <p>
                Your online store should match your brand,
                customer journey and operational requirements.
                DGATE IS creates custom e-commerce website designs
                focused on usability, credibility and conversions.
              </p>

            </div>


            <div className="ecommerce-feature-list">

              {ecommerceFeatures.map(
                (feature) => (

                  <div
                    key={feature}
                    className="ecommerce-feature-item"
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
            SMALL BUSINESS
        ===================================================== */}

        <section className="ecommerce-small-business">

          <div className="ecommerce-container ecommerce-small-business__grid">

            <div>

              <span className="ecommerce-small-label">
                ECOMMERCE DEVELOPMENT FOR SMALL BUSINESS
              </span>


              <h2>
                Launching Your First Online Store?
              </h2>


              <p>
                We work with small businesses and growing brands
                that need a professional e-commerce website without
                unnecessary complexity.
              </p>


              <p>
                Our team can help with store design, product setup,
                payments, mobile optimisation and launch support
                so you can focus on your products and customers.
              </p>

            </div>


            <div className="ecommerce-small-business__cards">

              <div>
                <FaRocket />

                <strong>
                  Fast Launch
                </strong>

                <span>
                  Practical development for businesses ready
                  to start selling online.
                </span>
              </div>


              <div>
                <FaMobileAlt />

                <strong>
                  Mobile First
                </strong>

                <span>
                  Shopping experiences optimised for mobile
                  customers.
                </span>
              </div>


              <div>
                <FaCreditCard />

                <strong>
                  Secure Payments
                </strong>

                <span>
                  Reliable payment gateway and checkout
                  integrations.
                </span>
              </div>


              <div>
                <FaChartLine />

                <strong>
                  Growth Ready
                </strong>

                <span>
                  Built to support campaigns, analytics and
                  future business growth.
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            COST SECTION
        ===================================================== */}

        <section
          className="ecommerce-section"
          id="ecommerce-cost"
        >

          <div className="ecommerce-container">

            <div className="ecommerce-heading ecommerce-heading--center">

              <span>
                ECOMMERCE WEBSITE DEVELOPMENT COST BANGALORE
              </span>


              <h2>
                How Much Does It Cost to Build an
                E-Commerce Website in Bangalore?
              </h2>


              <p>
                E-commerce development cost depends on the
                platform, number of products, custom design,
                integrations, payment requirements and level
                of automation needed. We recommend the right
                scope after understanding your business.
              </p>

            </div>


            <div className="ecommerce-package-grid">

              {/* STARTER */}

              <article className="ecommerce-package">

                <span className="ecommerce-package__label">
                  STARTER
                </span>


                <h3>
                  Small Business Store
                </h3>


                <p>
                  Suitable for businesses launching a focused
                  online product catalogue.
                </p>


                <ul>

                  <li>
                    Responsive storefront
                  </li>

                  <li>
                    Product setup
                  </li>

                  <li>
                    Payment gateway
                  </li>

                  <li>
                    Basic shipping setup
                  </li>

                  <li>
                    Mobile optimisation
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="ecommerce-package__link"
                >
                  Get a Cost Estimate

                  <FaArrowRight />
                </Link>

              </article>


              {/* GROWTH */}

              <article className="ecommerce-package ecommerce-package--featured">

                <span className="ecommerce-package__label">
                  GROWTH
                </span>


                <h3>
                  Shopify / WooCommerce Store
                </h3>


                <p>
                  Suitable for businesses that need a stronger
                  branded and conversion-focused e-commerce
                  experience.
                </p>


                <ul>

                  <li>
                    Custom store design
                  </li>

                  <li>
                    Product and collection structure
                  </li>

                  <li>
                    Payment integrations
                  </li>

                  <li>
                    Analytics setup
                  </li>

                  <li>
                    SEO-ready structure
                  </li>

                  <li>
                    Third-party integrations
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="ecommerce-package__link"
                >
                  Discuss Your Requirements

                  <FaArrowRight />
                </Link>

              </article>


              {/* CUSTOM */}

              <article className="ecommerce-package">

                <span className="ecommerce-package__label">
                  CUSTOM
                </span>


                <h3>
                  Advanced Commerce Solution
                </h3>


                <p>
                  For businesses requiring custom workflows,
                  integrations or advanced commerce functionality.
                </p>


                <ul>

                  <li>
                    Custom development
                  </li>

                  <li>
                    Advanced integrations
                  </li>

                  <li>
                    Custom business workflows
                  </li>

                  <li>
                    Performance optimisation
                  </li>

                  <li>
                    Scalable architecture
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="ecommerce-package__link"
                >
                  Request Custom Quote

                  <FaArrowRight />
                </Link>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONVERSION / SEO
        ===================================================== */}

        <section className="ecommerce-section ecommerce-section--dark">

          <div className="ecommerce-container ecommerce-two-column">

            <div>

              <span className="ecommerce-small-label">
                BUILT FOR PERFORMANCE
              </span>


              <h2>
                Your Store Should Do More Than
                Display Products.
              </h2>

            </div>


            <div className="ecommerce-dark-features">

              <div>
                <FaSearch />

                <span>
                  SEO-ready architecture
                </span>
              </div>


              <div>
                <FaRocket />

                <span>
                  Fast-loading storefront
                </span>
              </div>


              <div>
                <FaMobileAlt />

                <span>
                  Mobile-first experience
                </span>
              </div>


              <div>
                <FaChartLine />

                <span>
                  Conversion and analytics ready
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="ecommerce-section ecommerce-section--light">

          <div className="ecommerce-container">

            <div className="ecommerce-heading ecommerce-heading--center">

              <span>
                OUR DEVELOPMENT PROCESS
              </span>


              <h2>
                From E-Commerce Idea to Launch.
              </h2>


              <p>
                A clear development process keeps your project
                focused, transparent and aligned with your
                business objectives.
              </p>

            </div>


            <div className="ecommerce-process-grid">

              {processSteps.map(
                (step) => (

                  <article
                    className="ecommerce-process-card"
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

        <section className="ecommerce-section">

          <div className="ecommerce-container">

            <div className="ecommerce-heading">

              <span>
                E-COMMERCE DEVELOPMENT FAQs
              </span>


              <h2>
                Common Questions About Building
                an Online Store in Bangalore.
              </h2>

            </div>


            <div className="ecommerce-faq">


              <details>

                <summary>
                  How much does it cost to build an e-commerce
                  website in Bangalore?
                </summary>


                <p>
                  The cost varies depending on whether you use
                  Shopify, WooCommerce or custom development,
                  along with product count, design requirements,
                  payment integrations and additional features.
                  Contact DGATE IS for a project-specific estimate.
                </p>

              </details>


              <details>

                <summary>
                  Do you provide Shopify development in Bangalore?
                </summary>


                <p>
                  Yes. DGATE IS provides Shopify development
                  services in Bangalore, including storefront
                  design, theme configuration, product setup,
                  payment integration and third-party app
                  integrations.
                </p>

              </details>


              <details>

                <summary>
                  Do you offer WooCommerce development services
                  in Bangalore?
                </summary>


                <p>
                  Yes. We develop WooCommerce stores for businesses
                  that want a flexible WordPress-based commerce
                  solution with greater customisation options.
                </p>

              </details>


              <details>

                <summary>
                  Can you create a custom e-commerce website?
                </summary>


                <p>
                  Yes. We provide custom e-commerce website design
                  and development based on your products, branding,
                  customer journey and operational requirements.
                </p>

              </details>


              <details>

                <summary>
                  Do you build e-commerce websites for small
                  businesses?
                </summary>


                <p>
                  Yes. DGATE IS works with startups and small
                  businesses that need practical, professional
                  and scalable online stores.
                </p>

              </details>


              <details>

                <summary>
                  I am looking for a Shopify developer near me
                  in Bangalore. Can DGATE IS help?
                </summary>


                <p>
                  Yes. DGATE IS is based in Bangalore and can
                  support local businesses with Shopify store
                  development, optimisation, integrations and
                  ongoing digital requirements.
                </p>

              </details>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="ecommerce-cta">

          <div className="ecommerce-container">

            <div className="ecommerce-cta__box">

              <div>

                <span>
                  START SELLING ONLINE
                </span>


                <h2>
                  Looking for an E-Commerce Website
                  Development Company in Bangalore?
                </h2>


                <p>
                  Tell us what you want to sell and our team
                  will help you choose the right technology,
                  design and development approach.
                </p>

              </div>


              <Link
                to="/contact"
                className="ecommerce-btn ecommerce-btn--primary"
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


export default DevelopmentEcommerce;