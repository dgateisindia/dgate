import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaChartBar,
  FaChartLine,
  FaCheckCircle,
  FaGoogle,
  FaSearch,
  FaShoppingCart,
  FaTachometerAlt,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./DataAnalyticsPerformance.css";


const analyticsServices = [
  {
    icon: <FaGoogle />,
    title: "GA4 Setup & Configuration",
    description:
      "Google Analytics 4 setup, event configuration and reporting for websites and e-commerce businesses.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Tracking",
    description:
      "Track product views, add-to-cart activity, checkout behaviour and purchases across your online store.",
  },
  {
    icon: <FaChartBar />,
    title: "Marketing Dashboards",
    description:
      "Clear dashboards that combine marketing and website performance data into useful business insights.",
  },
  {
    icon: <FaChartLine />,
    title: "Conversion Rate Optimisation",
    description:
      "Analyse customer behaviour and website performance to identify opportunities to improve conversions.",
  },
];


const analyticsFeatures = [
  "GA4 account setup",
  "Google Tag Manager configuration",
  "Conversion event tracking",
  "E-commerce tracking",
  "Lead form tracking",
  "Campaign attribution",
  "Marketing dashboards",
  "Traffic analysis",
  "Funnel analysis",
  "Conversion optimisation",
  "Performance reporting",
  "Ongoing analytics support",
];


function DataAnalyticsPerformance() {

  useEffect(() => {

    document.title =
      "GA4 Setup Agency Bangalore | Conversion Rate Optimization | DGATE IS";


    const description =
      "DGATE IS is a GA4 setup agency in Bangalore offering Google Analytics consulting, ecommerce tracking, marketing dashboards and conversion rate optimization services.";

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
      `${window.location.origin}/data-analytics-performance-growth.html`
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="analytics-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="analytics-hero">

          <div className="analytics-container analytics-hero__grid">

            <div className="analytics-hero__content">

              <span className="analytics-eyebrow">
                GA4 SETUP AGENCY BANGALORE
              </span>


              <h1>
                GA4 & Analytics Setup Agency 
                <span>   DGATE IS Bangalore.</span>
              </h1>


              <p>
                GA4, conversion tracking, dashboards & CRO for
                 data-driven growth. DGATE IS turns your marketing data into results.
              </p>


              <div className="analytics-hero__actions">

                <Link
                  to="/contact"
                  className="analytics-btn analytics-btn--primary"
                >
                  Set Up Your Analytics

                  <FaArrowRight />
                </Link>


                <a
                  href="#ga4-ecommerce"
                  className="analytics-btn analytics-btn--secondary"
                >
                  Explore GA4 Setup
                </a>

              </div>

            </div>


            <div className="analytics-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
                alt="GA4 setup and analytics dashboard agency in Bangalore"
              />


              <div className="analytics-hero__card">

                <strong>
                  Track. Analyse. Improve.
                </strong>

                <span>
                  Analytics built around real business outcomes.
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="analytics-section">

          <div className="analytics-container">

            <div className="analytics-heading">

              <span>
                GOOGLE ANALYTICS CONSULTANT BANGALORE
              </span>


              <h2>
                Measure What Matters
                to Your Business.
              </h2>


              <p>
                Analytics should do more than show traffic.
                We help you understand where customers come from,
                what actions they take and where opportunities for
                improvement exist.
              </p>

            </div>


            <div className="analytics-services-grid">

              {analyticsServices.map(
                (service) => (

                  <article
                    className="analytics-service-card"
                    key={service.title}
                  >

                    <div className="analytics-service-card__icon">
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
            GA4 ECOMMERCE
        ===================================================== */}

        <section
          className="analytics-section analytics-section--light"
          id="ga4-ecommerce"
        >

          <div className="analytics-container analytics-two-column">

            <div>

              <span className="analytics-small-label">
                HOW TO SET UP GA4 FOR ECOMMERCE
              </span>


              <h2>
                GA4 Setup for
                E-Commerce Websites.
              </h2>


              <p>
                Correct e-commerce tracking helps you understand
                which products customers view, add to cart,
                begin checkout with and ultimately purchase.
              </p>


              <p>
                DGATE IS can configure GA4 and Google Tag Manager
                so important e-commerce interactions are tracked
                consistently.
              </p>

            </div>


            <div className="analytics-check-list">

              <div>
                <FaCheckCircle />
                Product view tracking
              </div>

              <div>
                <FaCheckCircle />
                Add-to-cart tracking
              </div>

              <div>
                <FaCheckCircle />
                Checkout tracking
              </div>

              <div>
                <FaCheckCircle />
                Purchase tracking
              </div>

              <div>
                <FaCheckCircle />
                Revenue reporting
              </div>

              <div>
                <FaCheckCircle />
                Campaign attribution
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DASHBOARDS
        ===================================================== */}

        <section className="analytics-section">

          <div className="analytics-container analytics-two-column">

            <div>

              <span className="analytics-small-label">
                MARKETING DASHBOARD REPORTING AGENCY BANGALORE
              </span>


              <h2>
                Dashboards Your Team
                Can Actually Understand.
              </h2>


              <p>
                Instead of switching between multiple tools,
                we help organise important marketing metrics into
                dashboards that make performance easier to review.
              </p>

            </div>


            <div className="analytics-feature-grid">

              {analyticsFeatures.map(
                (feature) => (

                  <div
                    className="analytics-feature-item"
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
            CRO
        ===================================================== */}

        <section className="analytics-section analytics-section--dark">

          <div className="analytics-container analytics-two-column">

            <div>

              <span className="analytics-small-label">
                CONVERSION RATE OPTIMIZATION AGENCY BANGALORE
              </span>


              <h2>
                More Traffic Is Not Always
                the Answer.
              </h2>

            </div>


            <div>

              <p>
                Conversion rate optimisation focuses on helping
                more existing visitors take meaningful actions,
                such as submitting enquiries, completing checkout
                or making purchases.
              </p>


              <Link
                to="/contact"
                className="analytics-btn analytics-btn--yellow"
              >
                Improve Your Conversions

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="analytics-section analytics-section--light">

          <div className="analytics-container">

            <div className="analytics-heading analytics-heading--center">

              <span>
                OUR ANALYTICS APPROACH
              </span>


              <h2>
                From Tracking Setup
                to Actionable Insights.
              </h2>

            </div>


            <div className="analytics-process-grid">

              <article>

                <span>
                  01
                </span>

                <h3>
                  Audit
                </h3>

                <p>
                  Review your current tracking,
                  website and marketing setup.
                </p>

              </article>


              <article>

                <span>
                  02
                </span>

                <h3>
                  Configure
                </h3>

                <p>
                  Set up GA4, events, conversions
                  and necessary tracking.
                </p>

              </article>


              <article>

                <span>
                  03
                </span>

                <h3>
                  Report
                </h3>

                <p>
                  Organise meaningful metrics
                  into clear dashboards.
                </p>

              </article>


              <article>

                <span>
                  04
                </span>

                <h3>
                  Optimise
                </h3>

                <p>
                  Use the data to identify
                  conversion and growth opportunities.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="analytics-section">

          <div className="analytics-container">

            <div className="analytics-heading">

              <span>
                ANALYTICS FAQs
              </span>


              <h2>
                Common GA4 & Analytics Questions.
              </h2>

            </div>


            <div className="analytics-faq">

              <details>

                <summary>
                  How do I set up GA4 for an ecommerce website?
                </summary>

                <p>
                  GA4 e-commerce setup normally requires a GA4
                  property, Google Tag Manager configuration and
                  events for actions such as product views,
                  add-to-cart, checkout and purchases.
                  DGATE IS can configure and test this tracking
                  for your website.
                </p>

              </details>


              <details>

                <summary>
                  Do you provide GA4 setup services in Bangalore?
                </summary>

                <p>
                  Yes. DGATE IS provides GA4 configuration,
                  conversion tracking and analytics support
                  for Bangalore businesses.
                </p>

              </details>


              <details>

                <summary>
                  Can you create marketing dashboards?
                </summary>

                <p>
                  Yes. We can create dashboards focused on
                  website traffic, marketing campaigns,
                  conversions and other relevant business KPIs.
                </p>

              </details>


              <details>

                <summary>
                  What is conversion rate optimisation?
                </summary>

                <p>
                  Conversion rate optimisation uses behavioural
                  and performance data to identify changes that
                  may help more visitors complete meaningful
                  actions on your website.
                </p>

              </details>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="analytics-cta">

          <div className="analytics-container">

            <div className="analytics-cta__box">

              <div>

                <span>
                  MEASURE WHAT MATTERS
                </span>


                <h2>
                  Need GA4 Setup or Better
                  Marketing Reporting?
                </h2>


                <p>
                  Tell us what you need to measure and our team
                  will help build a cleaner analytics and reporting
                  setup.
                </p>

              </div>


              <Link
                to="/contact"
                className="analytics-btn analytics-btn--primary"
              >
                Talk to Our Analytics Team

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


export default DataAnalyticsPerformance;