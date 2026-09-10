import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaPalette,
  FaPenNib,
  FaRocket,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./BrandingDesign.css";


const services = [
  {
    icon: <FaLightbulb />,
    title: "Brand Strategy",
    text:
      "Clear positioning, audience definition, messaging and brand direction for startups, SMEs and growing businesses.",
  },
  {
    icon: <FaPenNib />,
    title: "Logo Design",
    text:
      "Professional logo design built around your business identity, audience and long-term brand recognition.",
  },
  {
    icon: <FaPalette />,
    title: "Visual Identity",
    text:
      "Colours, typography, brand guidelines and visual systems designed to keep your brand consistent everywhere.",
  },
  {
    icon: <FaRocket />,
    title: "Rebranding",
    text:
      "Modernise an existing brand while protecting its recognition, credibility and connection with customers.",
  },
];


function BrandingDesign() {

  useEffect(() => {

    /* =========================================
       PAGE TITLE
    ========================================= */

    document.title =
      "Branding Agency in Bangalore — Logo & Identity Design | DGATE IS";


    /* =========================================
       META DESCRIPTION
    ========================================= */

    const description =
      "Looking for a branding agency in Bangalore? DGATE IS offers logo design, brand identity, startup branding and affordable branding packages for growing businesses and D2C brands.";

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


    /* =========================================
       CANONICAL
    ========================================= */

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
      `${window.location.origin}/branding-design.html`
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="branding-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="branding-hero">

          <div className="branding-container branding-hero__grid">

            <div className="branding-hero__content">

              <span className="branding-eyebrow">
                BRANDING AGENCY IN BANGALORE
              </span>


              <h1>
                Branding Agency in Bangalore
                
                <span> Logo & Identity Design </span>
                
              </h1>


              <p>
                Brand strategy, logo design & visual identity for Bangalore
                startups and SMEs. See how DGATE IS builds brands that build 
                trust.
              </p>


              <div className="branding-hero__actions">

                <Link
                  to="/contact"
                  className="branding-btn branding-btn--primary"
                >
                  Start Your Brand Project

                  <FaArrowRight />
                </Link>


                <a
                  href="#branding-packages"
                  className="branding-btn branding-btn--secondary"
                >
                  View Branding Packages
                </a>

              </div>

            </div>


            <div className="branding-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85"
                alt="Brand identity design and logo development in Bangalore"
              />

              <div className="branding-hero__card">

                <strong>
                  Strategy + Identity + Design
                </strong>

                <span>
                  Built for modern Bangalore businesses.
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="branding-section">

          <div className="branding-container">

            <div className="branding-heading">

              <span>
                BRAND IDENTITY DESIGN BANGALORE
              </span>

              <h2>
                More Than a Logo.
                We Build Complete Brand Identities.
              </h2>


              <p>
                A strong brand is more than colours and a logo.
                It is how customers recognise, understand and
                trust your business. Our branding services combine
                strategy, identity and design to create brands that
                are clear, consistent and commercially relevant.
              </p>

            </div>


            <div className="branding-services-grid">

              {services.map(
                (service) => (

                  <article
                    className="branding-service-card"
                    key={service.title}
                  >

                    <div className="branding-service-card__icon">
                      {service.icon}
                    </div>


                    <h3>
                      {service.title}
                    </h3>


                    <p>
                      {service.text}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            STARTUP / D2C
        ===================================================== */}

        <section className="branding-section branding-section--light">

          <div className="branding-container branding-two-column">

            <div>

              <span className="branding-small-label">
                STARTUP BRANDING AGENCY BANGALORE
              </span>


              <h2>
                Branding Built for Startups,
                SMEs & D2C Brands.
              </h2>


              <p>
                Whether you are launching a new company or
                repositioning an established business, DGATE IS
                creates practical branding systems designed for
                growth.
              </p>

            </div>


            <div className="branding-check-list">

              <div>
                <FaCheckCircle />
                Startup branding and launch identity
              </div>

              <div>
                <FaCheckCircle />
                D2C brand identity and packaging direction
              </div>

              <div>
                <FaCheckCircle />
                Corporate brand identity systems
              </div>

              <div>
                <FaCheckCircle />
                Rebranding for established businesses
              </div>

              <div>
                <FaCheckCircle />
                Social media and digital brand guidelines
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            AFFORDABLE / PACKAGES
        ===================================================== */}

        <section
          className="branding-section"
          id="branding-packages"
        >

          <div className="branding-container">

            <div className="branding-heading branding-heading--center">

              <span>
                AFFORDABLE BRANDING AGENCY BANGALORE
              </span>


              <h2>
                Flexible Branding Packages
                for Different Business Stages.
              </h2>


              <p>
                Looking for an affordable branding agency in
                Bangalore? We offer flexible branding packages
                based on your actual requirements instead of
                forcing every business into the same plan.
              </p>

            </div>


            <div className="branding-package-grid">

              <article className="branding-package">

                <span className="branding-package__type">
                  STARTER
                </span>

                <h3>
                  Logo & Basic Identity
                </h3>


                <ul>

                  <li>
                    Logo design concepts
                  </li>

                  <li>
                    Colour palette
                  </li>

                  <li>
                    Typography selection
                  </li>

                  <li>
                    Basic brand usage guide
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="branding-package__link"
                >
                  Get Pricing

                  <FaArrowRight />
                </Link>

              </article>


              <article className="branding-package branding-package--featured">

                <span className="branding-package__type">
                  GROWTH
                </span>

                <h3>
                  Complete Brand Identity
                </h3>


                <ul>

                  <li>
                    Brand strategy
                  </li>

                  <li>
                    Logo identity system
                  </li>

                  <li>
                    Brand guidelines
                  </li>

                  <li>
                    Marketing design direction
                  </li>

                  <li>
                    Social media identity
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="branding-package__link"
                >
                  Discuss Your Brand

                  <FaArrowRight />
                </Link>

              </article>


              <article className="branding-package">

                <span className="branding-package__type">
                  REBRANDING
                </span>

                <h3>
                  Brand Refresh & Repositioning
                </h3>


                <ul>

                  <li>
                    Existing brand review
                  </li>

                  <li>
                    New positioning
                  </li>

                  <li>
                    Visual identity redesign
                  </li>

                  <li>
                    Brand guideline update
                  </li>

                </ul>


                <Link
                  to="/contact"
                  className="branding-package__link"
                >
                  Request a Quote

                  <FaArrowRight />
                </Link>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            REBRANDING
        ===================================================== */}

        <section className="branding-section branding-section--dark">

          <div className="branding-container branding-two-column">

            <div>

              <span className="branding-small-label">
                REBRANDING AGENCY BANGALORE
              </span>


              <h2>
                Has Your Business Outgrown
                Your Current Brand?
              </h2>

            </div>


            <div>

              <p>
                Rebranding can help your business communicate
                more clearly, look more professional and connect
                with changing customer expectations.
              </p>


              <Link
                to="/contact"
                className="branding-btn branding-btn--yellow"
              >
                Talk to Our Branding Team

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="branding-section">

          <div className="branding-container">

            <div className="branding-heading">

              <span>
                BRANDING FAQs
              </span>

              <h2>
                Common Questions About
                Branding in Bangalore.
              </h2>

            </div>


            <div className="branding-faq">

              <details>
                <summary>
                  How much does branding cost in Bangalore?
                </summary>

                <p>
                  Branding cost depends on whether you need only
                  a logo, a complete brand identity, packaging,
                  brand strategy or a full rebranding project.
                  DGATE IS offers flexible packages based on scope
                  and business requirements.
                </p>
              </details>


              <details>
                <summary>
                  Do you offer affordable branding packages?
                </summary>

                <p>
                  Yes. We can structure branding packages for
                  startups, SMEs and growing businesses based on
                  the level of strategy and design support required.
                </p>
              </details>


              <details>
                <summary>
                  Are you a logo design company in Bangalore?
                </summary>

                <p>
                  Yes. DGATE IS provides professional logo design
                  in Bangalore along with brand identity systems,
                  colour palettes, typography and brand guidelines.
                </p>
              </details>


              <details>
                <summary>
                  Do you provide branding for D2C brands?
                </summary>

                <p>
                  Yes. Our branding services can support D2C
                  businesses with identity, digital branding,
                  packaging direction and consistent visual
                  communication.
                </p>
              </details>


              <details>
                <summary>
                  Can DGATE IS rebrand an existing company?
                </summary>

                <p>
                  Yes. We provide rebranding services for companies
                  that want to modernise their identity, improve
                  positioning or communicate more effectively with
                  their target market.
                </p>
              </details>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="branding-cta">

          <div className="branding-container">

            <div className="branding-cta__box">

              <div>

                <span>
                  LET'S BUILD YOUR BRAND
                </span>


                <h2>
                  Looking for a Branding Agency
                  in Bangalore?
                </h2>


                <p>
                  Tell us about your business and let our team
                  create a branding approach that matches your
                  goals and budget.
                </p>

              </div>


              <Link
                to="/contact"
                className="branding-btn branding-btn--primary"
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


export default BrandingDesign;