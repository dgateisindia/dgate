import "./DataAnalyticsPerformance.css";

import {
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaChartBar,
  FaChartLine,
  FaBullseye,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar
  from "../../components/Home/Navbar/Navbar";

import Footer
  from "../../components/Home/Footer/Footer";


/* =========================================================
   MAIN ANALYTICS IMAGE

   ONLY ONE IMAGE
========================================================= */

const analyticsImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=90";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackAnalyticsImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=90";


/* =========================================================
   SERVICE CARDS
========================================================= */

const analyticsServices = [

  {
    id: "tracking",

    icon:
      <FaBullseye />,

    title:
      "Social Media Analytics & Tracking Setup",

    items: [
      "GA4 & Google Tag Manager implementation",
      "Meta Pixel, Google Ads & LinkedIn tracking",
      "Event, funnel & conversion tracking for social campaigns",
      "E-Commerce & lead attribution setup",
    ],
  },


  {
    id: "dashboard",

    icon:
      <FaChartLine />,

    title:
      "Social Media Performance Dashboards & Reporting",

    items: [
      "Custom social media KPI dashboards",
      "Campaign performance & ROI reporting",
      "Paid vs organic social insights",
      "Clear data visualization for decision-makers",
    ],
  },


  {
    id: "growth",

    icon:
      <FaChartBar />,

    title:
      "Social Media Optimization & Growth Marketing",

    items: [
      "Ad creative & audience performance analysis",
      "Funnel & landing page optimization",
      "A/B testing for ads, creatives & CTAs",
      "Performance-driven growth experiments",
    ],
  },

];


/* =========================================================
   PROCESS
========================================================= */

const analyticsProcess = [

  {
    number: "01",

    title:
      "Audit & Analytics Setup",

    description:
      "Audit social media accounts, ad platforms, GA4, pixels, events and conversions to ensure accurate performance tracking.",
  },


  {
    number: "02",

    title:
      "Social Media Data Analysis",

    description:
      "Analyze audience behavior, content engagement, ad performance, traffic quality and funnel drop-offs across platforms.",
  },


  {
    number: "03",

    title:
      "Optimization & Growth Testing",

    description:
      "Optimize ads, creatives, targeting, landing pages and messaging using performance data and structured A/B testing.",
  },


  {
    number: "04",

    title:
      "Reporting & Scaling Growth",

    description:
      "Deliver actionable dashboards, ROI insights and continuously scale high-performing social media campaigns.",
  },

];


/* =========================================================
   FAQ
========================================================= */

const faqs = [

  {
    question:
      "What is social media performance marketing and why does it matter?",

    answer:
      "Social media performance marketing uses campaign data, audience behaviour and conversion tracking to improve advertising results. It helps businesses understand what is generating engagement, leads, sales and measurable return on investment.",
  },


  {
    question:
      "Which tools do you use for social media analytics and tracking?",

    answer:
      "Depending on the business, we can work with GA4, Google Tag Manager, Meta Pixel, Meta Ads Manager, Google Ads, LinkedIn Campaign Manager and custom reporting dashboards.",
  },


  {
    question:
      "Can you help improve ROI from social media ads?",

    answer:
      "Yes. We analyse audiences, campaign structure, creatives, landing pages, conversion tracking and funnel performance to identify opportunities for improving efficiency and return on ad spend.",
  },


  {
    question:
      "Do you provide custom social media dashboards and reports?",

    answer:
      "Yes. Reporting can be structured around the KPIs that matter to your business including reach, engagement, traffic, leads, conversions, revenue, customer acquisition cost and campaign ROI.",
  },


  {
    question:
      "Is social media marketing a one-time setup or ongoing service?",

    answer:
      "Analytics setup can be completed as a defined project, but performance marketing works best as an ongoing process of measurement, testing, optimisation and scaling.",
  },

];


/* =========================================================
   DATA ANALYTICS PERFORMANCE PAGE
========================================================= */

function DataAnalyticsPerformance() {


  /* =======================================================
     SEO
  ======================================================= */

  useEffect(
    () => {

      document.title =
        "Social Media Analytics & Performance Growth | DGATE IS";


      const description =
        "DGATE Integrated Services provides social media marketing analytics, campaign tracking, performance dashboards, conversion optimization and ROI-focused growth marketing services.";


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
        `${window.location.origin}/data-analytics-performance`
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

    <>

      <Navbar />


      <main
        className="performance-page"
      >


        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="performance-intro"
        >


          <div
            className="performance-intro__burst"
            aria-hidden="true"
          />


          <div
            className="performance-intro__arc"
            aria-hidden="true"
          />


          <div
            className="
              performance-container
              performance-intro__layout
            "
          >


            {/* LEFT */}

            <div
              className="performance-intro__heading"
            >

              <span
                className="performance-eyebrow"
              >
                DATA &amp; PERFORMANCE
              </span>


              <h1>

                Social Media

                <br />

                Marketing, Analytics &amp;

                <br />

                <span>
                  Performance Growth
                </span>

              </h1>

            </div>


            {/* RIGHT */}

            <div
              className="performance-intro__copy"
            >

              <p>

                We help brands grow faster on social
                platforms using data-driven social
                media marketing strategies. From
                analytics setup and conversion tracking
                to paid social optimization, content
                performance insights, and ROI-focused
                growth — we turn social engagement into
                measurable revenue.

              </p>

            </div>


          </div>


        </section>


        {/* =================================================
            ANALYTICS IMAGE
            ONE IMAGE ONLY
        ================================================= */}

        <section
          className="performance-feature"
        >

          <div
            className="performance-container"
          >

            <figure
              className="performance-feature__media"
            >

              <img
                src={
                  analyticsImage
                }

                alt="Digital marketing analytics and performance growth dashboard"

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
                        fallbackAnalyticsImage;

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
          className="performance-overview"
        >

          <div
            className="performance-container"
          >


            <header
              className="performance-section-heading"
            >

              <span
                className="performance-section-heading__eyebrow"
              >
                SERVICE OVERVIEW
              </span>


              <h2>

                Data Analytics –

                <span>
                  {" "}Performance Growth
                </span>

              </h2>

            </header>


            <div
              className="performance-divider"
            />


            <div
              className="performance-overview__grid"
            >


              {/* LEFT */}

              <div
                className="performance-overview__copy"
              >

                <p>

                  Social media marketing and
                  performance analytics are the
                  backbone of modern digital growth.
                  At DGATE Integrated Services, we
                  help businesses build, track, and
                  scale high-performing social media
                  campaigns across platforms like
                  Instagram, Facebook, LinkedIn,
                  YouTube, and Google Ads — powered
                  by accurate analytics and
                  actionable insights.

                </p>


                <p>

                  Our social-first approach ensures
                  every campaign is measurable and
                  optimized for results. From social
                  media analytics setup and ad
                  conversion tracking to audience
                  insights, funnel optimization, and
                  performance reporting — we
                  transform marketing data into
                  strategies that drive engagement,
                  leads, and sales.

                </p>

              </div>


              {/* RIGHT */}

              <div
                className="performance-approach"
              >

                <h3>

                  Our Approach to Data &amp;
                  Performance Growth

                </h3>


                <div
                  className="performance-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Analytics &amp; Tracking Setup
                    </strong>

                    <span>

                      Setting up GA4, GTM,
                      Meta Pixel, Google Ads,
                      LinkedIn and conversion APIs
                      for accurate social tracking.

                    </span>

                  </p>

                </div>


                <div
                  className="performance-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Social Media Insights &amp; Analysis
                    </strong>

                    <span>

                      Understanding audience behavior,
                      content performance, engagement
                      metrics, and campaign effectiveness.

                    </span>

                  </p>

                </div>


                <div
                  className="performance-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Optimization &amp; Growth Marketing
                    </strong>

                    <span>

                      Improving creatives, targeting,
                      funnels, and landing pages for
                      higher ROI.

                    </span>

                  </p>

                </div>


                <div
                  className="performance-approach__item"
                >

                  <FaCheckCircle />


                  <p>

                    <strong>
                      Performance Scaling
                    </strong>

                    <span>

                      Continuous testing, reporting,
                      and optimization to scale winning
                      social media campaigns.

                    </span>

                  </p>

                </div>


              </div>


            </div>


          </div>

        </section>


        {/* =================================================
            WHAT WE OFFER
        ================================================= */}

        <section
          className="performance-offer"
        >

          <div
            className="performance-container"
          >


            <header
              className="performance-offer__header"
            >

              <span
                className="performance-section-heading__eyebrow"
              >
                OUR EXPERTISE
              </span>


              <h2>

                What We Offer in

                <span>
                  {" "}Performance Analytics
                </span>

              </h2>

            </header>


            <div
              className="performance-offer__grid"
            >


              {analyticsServices.map(
                (service) => (

                  <article
                    key={
                      service.id
                    }

                    className="performance-offer__card"
                  >


                    <div
                      className="performance-offer__icon"
                    >
                      {service.icon}
                    </div>


                    <h3>
                      {service.title}
                    </h3>


                    <div
                      className="performance-offer__line"
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


          </div>

        </section>


        {/* =================================================
            PROCESS
        ================================================= */}

        <section
          className="performance-process"
        >


          <div
            className="performance-process__background"
            aria-hidden="true"
          />


          <div
            className="performance-container"
          >


            <header
              className="performance-process__header"
            >

              <span
                className="performance-pill"
              >
                OUR METHODOLOGY
              </span>


              <h2>

                Performance Analytics Process

                <br />

                <span>
                  From Data to Growth
                </span>

              </h2>

            </header>


            <div
              className="performance-process__timeline"
            >


              {analyticsProcess.map(
                (step) => (

                  <article
                    key={
                      step.number
                    }

                    className="performance-process__step"
                  >


                    <span
                      className="performance-process__number"
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
          className="performance-faq-section"
        >

          <div
            className="
              performance-container
              performance-faq-section__inner
            "
          >


            <header
              className="performance-faq-header"
            >

              <span
                className="
                  performance-pill
                  performance-pill--light
                "
              >
                SOCIAL MEDIA MARKETING FAQS
              </span>


              <h2>

                Digital Marketing &amp;

                <br />

                <span>
                  Analytics Questions
                </span>

              </h2>

            </header>


            <div
              className="performance-faq-list"
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
                        className="performance-faq-list__toggle"

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


export default DataAnalyticsPerformance;