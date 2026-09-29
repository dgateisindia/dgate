import "./ServicePageShell.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/Footer";


function ServicePageShell({
  pageClass,
  eyebrow,
  title,
  description,
  tagline,
  services,
  icon: Icon,
  slug,
  seoTitle,
  metaDescription,
}) {
  useEffect(() => {
    document.title = seoTitle;

    let meta =
      document.querySelector(
        'meta[name="description"]'
      );

    if (!meta) {
      meta =
        document.createElement("meta");

      meta.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      metaDescription
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
      `${window.location.origin}/${slug}.html`
    );
  }, [
    seoTitle,
    metaDescription,
    slug,
  ]);


  return (
    <>
      <Navbar />

      <main
        className={`service-shell ${pageClass}`}
      >

        {/* HERO */}

        <section className="service-shell__hero">

          <div
            className="service-shell__grid"
            aria-hidden="true"
          />

          <div className="service-shell__container">

            <div className="service-shell__hero-layout">

              <div className="service-shell__hero-content">


                <span className="service-shell__eyebrow">
                  {eyebrow}
                </span>


                <h1>
                  {title}
                  <span>.</span>
                </h1>


                <p>
                  {description}
                </p>


                <div className="service-shell__hero-actions">

                  <Link
                    to="/contact"
                    className="service-shell__primary-button"
                  >
                    Start a Project

                    <FaArrowRight />
                  </Link>


                  <a
                    href="#service-capabilities"
                    className="service-shell__secondary-button"
                  >
                    Explore Services
                  </a>

                </div>

              </div>


              {/* VISUAL */}

              <div
                className="service-shell__visual"
                aria-hidden="true"
              >

                <div className="service-shell__orbit service-shell__orbit--one" />

                <div className="service-shell__orbit service-shell__orbit--two" />


                

              </div>

            </div>

          </div>

        </section>


        {/* INTRO 

        <section className="service-shell__intro">

          <div className="service-shell__container">

            <div className="service-shell__intro-layout">

              <div>

                <span className="service-shell__section-label">
                  WHAT WE DO
                </span>

                <h2>
                  Built around your
                  business goals.
                </h2>

              </div>


              <div className="service-shell__intro-copy">

                <p>
                  {description}
                </p>

                <strong>
                  {tagline}
                </strong>

              </div>

            </div>

          </div>

        </section>  */}


        {/* CAPABILITIES */}

        <section
          id="service-capabilities"
          className="service-shell__capabilities"
        >

          <div className="service-shell__container">

            <div className="service-shell__heading">

              <span className="service-shell__section-label">
                OUR CAPABILITIES
              </span>

              <h2>
                Everything needed to
                move your business forward.
              </h2>

            </div>


            <div className="service-shell__services">

              {services.map(
                (service, index) => (

                  <article
                    className="service-shell__service-card"
                    key={service}
                  >

                    <span className="service-shell__number">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>


                    <div className="service-shell__check">
                      <FaCheck />
                    </div>


                    <h3>
                      {service}
                    </h3>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* PROCESS */}

        <section className="service-shell__process">

          <div className="service-shell__container">

            <div className="service-shell__process-layout">

              <div>

                <span className="service-shell__section-label">
                  OUR PROCESS
                </span>

                <h2>
                  From strategy
                  to measurable growth.
                </h2>

              </div>


              <div className="service-shell__process-list">

                <article>
                  <span>01</span>

                  <div>
                    <h3>
                      Discover
                    </h3>

                    <p>
                      We understand your business,
                      audience, competitors and goals.
                    </p>
                  </div>
                </article>


                <article>
                  <span>02</span>

                  <div>
                    <h3>
                      Strategize
                    </h3>

                    <p>
                      We define priorities, positioning,
                      channels and the execution roadmap.
                    </p>
                  </div>
                </article>


                <article>
                  <span>03</span>

                  <div>
                    <h3>
                      Execute
                    </h3>

                    <p>
                      Our specialists execute the
                      solution with quality and
                      consistency.
                    </p>
                  </div>
                </article>


                <article>
                  <span>04</span>

                  <div>
                    <h3>
                      Optimize & Scale
                    </h3>

                    <p>
                      We measure performance,
                      improve results and scale
                      what works.
                    </p>
                  </div>
                </article>

              </div>

            </div>

          </div>

        </section>


        {/* CTA 

        <section className="service-shell__cta">

          <div className="service-shell__container">

            <div className="service-shell__cta-box">

              <div>

                <span>
                  LET'S WORK TOGETHER
                </span>

                <h2>
                  Ready to discuss
                  your next project?
                </h2>

              </div>


              <Link
                to="/contact"
                className="service-shell__cta-button"
              >
                Contact DGATE

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>  */}

      </main>

      <Footer />
    </>
  );
}


export default ServicePageShell;