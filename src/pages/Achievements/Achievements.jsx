import {
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  FaArrowRight,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaStar,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "../Shared/InnerPages.css";


const achievements = [
  {
    id: 1,
    icon: <FaTrophy />,
    title: "Growing Digital Expertise",
    description:
      "Continuously building stronger expertise across development, digital solutions, branding and business technology.",
  },

  {
    id: 2,
    icon: <FaUsers />,
    title: "Client-Focused Delivery",
    description:
      "Our work is built around understanding real business requirements and developing solutions that create practical value.",
  },

  {
    id: 3,
    icon: <FaLightbulb />,
    title: "Innovation Driven",
    description:
      "We continuously explore new technologies, smarter workflows and digital strategies to improve the solutions we deliver.",
  },

  {
    id: 4,
    icon: <FaHandshake />,
    title: "Strong Partnerships",
    description:
      "Building trusted and long-term relationships through communication, transparency and reliable execution.",
  },

  {
    id: 5,
    icon: <FaAward />,
    title: "Quality Standards",
    description:
      "Every project is approached with attention to performance, user experience, scalability and professional delivery.",
  },

  {
    id: 6,
    icon: <FaStar />,
    title: "Continuous Improvement",
    description:
      "Our team learns from every project to continuously strengthen our services, processes and customer experience.",
  },
];


const timeline = [
  {
    year: "Foundation",
    title: "The DGATE Journey Begins",
    description:
      "DGATE was established with a vision to help businesses adopt modern digital solutions and technology.",
  },

  {
    year: "Growth",
    title: "Expanding Digital Services",
    description:
      "Our capabilities expanded across web development, digital marketing, software solutions, mobile applications and business technology.",
  },

  {
    year: "Innovation",
    title: "Building Integrated Solutions",
    description:
      "DGATE began focusing on integrated solutions that connect technology, marketing, customer experience and business operations.",
  },

  {
    year: "Today",
    title: "Moving Businesses Forward",
    description:
      "We continue helping organizations transform ideas into scalable digital experiences while building stronger long-term partnerships.",
  },
];


function Achievements() {

  useEffect(() => {

    document.title =
      "DGATE Achievements & Digital Growth | DGATE IS";


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
      "Discover DGATE Integrated Services achievements, growth journey, digital capabilities, innovation and commitment to client-focused delivery."
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="dgate-page">


        {/* PREMIUM ACHIEVEMENTS HERO */}

        <section
          className="
            dgate-inner-hero
            dgate-inner-hero--premium
            dgate-inner-hero--achievements
          "
        >

          <div
            className="dgate-inner-hero__pattern"
            aria-hidden="true"
          />


          <div className="dgate-container">

            <div className="dgate-inner-hero__layout">


              <div className="dgate-inner-hero__content">

                <nav
                  className="dgate-inner-hero__breadcrumb"
                  aria-label="Breadcrumb"
                >

                  <Link to="/">
                    Home
                  </Link>

                  <span aria-hidden="true">
                    ›
                  </span>

                  <span aria-current="page">
                    Achievements
                  </span>

                </nav>


                <div className="dgate-eyebrow">

                  <span className="dgate-eyebrow__dot" />

                  OUR ACHIEVEMENTS

                </div>


                <h1>

                  Progress powered by{" "}

                  <span>
                    people & innovation.
                  </span>

                </h1>


                <div
                  className="dgate-inner-hero__line"
                  aria-hidden="true"
                />


                <p>

                  Every milestone reflects our
                  commitment to technology,
                  collaboration, customer success
                  and continuous improvement.

                </p>


                <a
                  href="#achievement-highlights"
                  className="dgate-inner-hero__button"
                >

                  Explore Milestones

                  <FaArrowRight />

                </a>

              </div>


              {/* TROPHY VISUAL */}

              <div
                className="dgate-inner-hero__scene"
                aria-hidden="true"
              >

                <div className="dgate-hero-orbit dgate-hero-orbit--one" />

                <div className="dgate-hero-orbit dgate-hero-orbit--two" />


                <div className="dgate-achievement-core">

                  <div className="dgate-achievement-core__ring" />

                  <div className="dgate-achievement-core__ring dgate-achievement-core__ring--two" />


                  <div className="dgate-achievement-core__icon">

                    <FaTrophy />

                  </div>


                  <div className="dgate-achievement-core__text">

                    <span>
                      DGATE
                    </span>

                    <strong>
                      PROGRESS
                    </strong>

                  </div>

                </div>


                <div className="dgate-hero-chip dgate-hero-chip--one">
                  Innovation
                </div>


                <div className="dgate-hero-chip dgate-hero-chip--two">
                  Partnerships
                </div>


                <div className="dgate-hero-chip dgate-hero-chip--three">
                  Quality
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ACHIEVEMENTS */}

        <section
          id="achievement-highlights"
          className="dgate-section"
        >

          <div className="dgate-container">

            <div className="dgate-section-heading dgate-section-heading--center">

              <div className="dgate-section-label">
                What Defines Us
              </div>


              <h2>

                More than milestones.
                A culture of progress.

              </h2>


              <p>

                We measure achievement through
                the quality of our work,
                relationships we build and
                value we create.

              </p>

            </div>


            <div className="achievement-grid">

              {achievements.map(
                (achievement) => (

                  <article
                    className="achievement-card"
                    key={achievement.id}
                  >

                    <div className="achievement-card__icon">

                      {achievement.icon}

                    </div>


                    <h3>
                      {achievement.title}
                    </h3>


                    <p>
                      {achievement.description}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* STATS */}

        <section className="dgate-section dgate-section--dark">

          <div className="dgate-container">

            <div className="dgate-section-heading dgate-section-heading--center">

              <div className="dgate-section-label">
                DGATE
              </div>


              <h2>

                Built around integrated
                digital capabilities.

              </h2>

            </div>


            <div className="dgate-stats-grid">

              <div className="dgate-stat">

                <strong>
                  360°
                </strong>

                <span>
                  Digital Approach
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  100%
                </strong>

                <span>
                  Client Focus
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  Multi
                </strong>

                <span>
                  Service Expertise
                </span>

              </div>


              <div className="dgate-stat">

                <strong>
                  ∞
                </strong>

                <span>
                  Growth Mindset
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* JOURNEY */}

        <section className="dgate-section dgate-section--light">

          <div className="dgate-container">

            <div className="dgate-section-heading dgate-section-heading--center">

              <div className="dgate-section-label">
                Our Journey
              </div>


              <h2>

                Growing with every
                challenge we solve.

              </h2>

            </div>


            <div className="achievement-timeline">

              {timeline.map(
                (item, index) => (

                  <article
                    className="timeline-item"
                    key={`${item.year}-${index}`}
                  >

                    <div className="timeline-dot" />


                    <div className="timeline-content">

                      <span className="timeline-year">

                        {item.year}

                      </span>


                      <h3>
                        {item.title}
                      </h3>


                      <p>
                        {item.description}
                      </p>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="dgate-page-cta">

          <div className="dgate-container">

            <div className="dgate-page-cta__content">

              <div>

                <h2>

                  Let your next milestone
                  start with DGATE.

                </h2>


                <p>

                  Partner with us to create
                  digital solutions built for
                  your next stage of growth.

                </p>

              </div>


              <Link
                to="/contact"
                className="dgate-page-cta__button"
              >

                Work With Us

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


export default Achievements;