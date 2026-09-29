import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaChevronDown,
  FaSearch,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./DigitalMarketingCourse.css";


/* =========================================================
   TRAINING APPROACH
========================================================= */

const approachItems = [
  {
    title: "Practical Learning",
    description:
      "Learn digital marketing concepts through practical sessions, demonstrations, exercises, and real-world examples.",
  },
  {
    title: "Online & Offline Training",
    description:
      "Choose instructor-led online learning or classroom-based offline training based on your convenience.",
  },
  {
    title: "Live Projects & Industry Tools",
    description:
      "Work with digital marketing tools and practical projects to understand how real campaigns are planned and managed.",
  },
  {
    title: "Career Guidance & Skill Development",
    description:
      "Build practical skills, improve your understanding of digital marketing roles, and prepare for career opportunities.",
  },
];


/* =========================================================
   WHAT YOU WILL LEARN
========================================================= */

const offerCards = [
  {
    icon: <FaSearch />,
    title: "SEO & Search Marketing",
    items: [
      "Search Engine Optimization (SEO)",
      "Keyword research & competitor analysis",
      "On-page & off-page SEO",
      "Introduction to Google Ads & SEM",
    ],
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media & Paid Advertising",
    items: [
      "Social media marketing strategy",
      "Instagram, Facebook & LinkedIn marketing",
      "Meta Ads campaign fundamentals",
      "Audience targeting & campaign planning",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Content, Analytics & Performance",
    items: [
      "Content marketing fundamentals",
      "Google Analytics & performance tracking",
      "Campaign reporting & optimization",
      "Lead generation & conversion fundamentals",
    ],
  },
];


/* =========================================================
   COURSE LEARNING PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Enroll & Get Started",
    description:
      "Choose your preferred online or offline learning mode and begin with the fundamentals of digital marketing.",
  },
  {
    number: "02",
    title: "Learn the Concepts",
    description:
      "Understand SEO, social media marketing, paid advertising, content marketing, analytics, and other important digital channels.",
  },
  {
    number: "03",
    title: "Practice & Build Skills",
    description:
      "Apply what you learn through practical exercises, campaign activities, tools, assignments, and project-based learning.",
  },
  {
    number: "04",
    title: "Career Preparation",
    description:
      "Strengthen your practical knowledge, complete the training program, and prepare for digital marketing career opportunities.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const faqItems = [
  {
    question: "Who can join the Digital Marketing Course?",
    answer:
      "The course is suitable for students, graduates, working professionals, entrepreneurs, business owners, freelancers, and beginners who want to learn digital marketing.",
  },
  {
    question: "Is the course available online and offline?",
    answer:
      "Yes. The course is designed to support both online and offline learning, allowing learners to choose a training mode based on their convenience and availability.",
  },
  {
    question: "Do I need previous digital marketing experience?",
    answer:
      "No. The course can be started by beginners. It begins with fundamental concepts before progressing to practical digital marketing topics and tools.",
  },
  {
    question: "What topics are covered in the course?",
    answer:
      "The course covers important areas such as SEO, search marketing, social media marketing, paid advertising, content marketing, analytics, campaign tracking, lead generation, and performance optimization.",
  },
  {
    question: "Will I get practical training?",
    answer:
      "Yes. The training focuses on practical learning through exercises, digital marketing tools, campaign activities, assignments, and project-based practice.",
  },
  {
    question: "Will the course help with career preparation?",
    answer:
      "The program is designed to build practical digital marketing knowledge and help learners understand the skills required for entry-level digital marketing roles, freelancing, and business marketing.",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function DigitalMarketingCourse() {
  const [activeFaq, setActiveFaq] = useState(0);


  /* =========================================================
     SEO
  ========================================================= */

  useEffect(() => {
    document.title =
      "Digital Marketing Course in Bangalore | Online & Offline Training | DGATE";

    const description =
      "Learn digital marketing with practical online and offline training at DGATE. Explore SEO, social media marketing, Google Ads, Meta Ads, content marketing, analytics and practical campaign skills.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);


    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/digital-marketing-course.html`
    );
  }, []);


  /* =========================================================
     FAQ TOGGLE
  ========================================================= */

  const toggleFaq = (index) => {
    setActiveFaq((current) =>
      current === index ? null : index
    );
  };


  return (
    <>
      <Navbar />

      <main className="smartai-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="smartai-hero">

          <div className="smartai-container smartai-hero__grid">

            <div className="smartai-hero__title">

              <div className="smartai-hero__shape" />

              <h1>
                Digital Marketing
                <br />
                Course – Online
                <br />
                & Offline Training
              </h1>

            </div>


            <div className="smartai-hero__description">

              <p>
                Build practical digital marketing skills with{" "}
                <strong>online and offline training</strong>{" "}
                designed for students, professionals, entrepreneurs,
                freelancers, and beginners. Learn SEO, social media,
                paid advertising, content marketing, analytics, and
                campaign optimization through practical learning.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            BREADCRUMB
        ===================================================== */}

        <section className="smartai-breadcrumb-section">

          <div className="smartai-container">

            <nav
              className="smartai-breadcrumb"
              aria-label="Breadcrumb"
            >

              <Link to="/">
                Home
              </Link>

              <span className="smartai-breadcrumb__dot" />

              <Link to="/services">
                Services
              </Link>

              <span className="smartai-breadcrumb__dot" />

              <strong>
                Digital Marketing Course
              </strong>

            </nav>

          </div>

        </section>


        {/* =====================================================
            MAIN COURSE IMAGE
        ===================================================== */}

        <section className="smartai-main-image">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90"
            alt="Digital marketing course classroom training"
          />

        </section>


        {/* =====================================================
            COURSE OVERVIEW
        ===================================================== */}

        <section className="smartai-overview">

          <div className="smartai-container">

            <h2 className="smartai-section-title">
              Course Overview
            </h2>

            <div className="smartai-divider" />


            <div className="smartai-overview__grid">

              {/* LEFT CONTENT */}

              <div className="smartai-overview__text">

                <p>
                  Digital marketing has become an important part of
                  how businesses connect with customers, promote their
                  products and services, generate leads, and build
                  their presence online. Our{" "}
                  <strong>Digital Marketing Course</strong>{" "}
                  introduces learners to the major channels, tools,
                  and techniques used in modern digital marketing.
                </p>


                <p>
                  The course combines conceptual understanding with{" "}
                  <strong>practical learning</strong>. Students learn
                  how SEO, social media, online advertising, content,
                  analytics, and campaign optimization work together
                  to support business growth.
                </p>


                <p>
                  Training is available through{" "}
                  <strong>online and offline learning modes</strong>,
                  making the program suitable for students, graduates,
                  working professionals, entrepreneurs, freelancers,
                  and anyone interested in developing practical
                  digital marketing skills.
                </p>

              </div>


              {/* RIGHT CONTENT */}

              <div className="smartai-approach">

                <h3>
                  Our Digital Marketing Training Approach
                </h3>


                <div className="smartai-approach__list">

                  {approachItems.map((item) => (

                    <div
                      className="smartai-approach__item"
                      key={item.title}
                    >

                      <FaCheckCircle />

                      <p>
                        <strong>{item.title}</strong>
                        {" – "}
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT YOU WILL LEARN
        ===================================================== */}

        <section className="smartai-offer">

          <div className="smartai-container">

            <h2 className="smartai-offer__heading">
              What You Will Learn
            </h2>


            <div className="smartai-offer__grid">

              {offerCards.map((card) => (

                <article
                  className="smartai-offer__card"
                  key={card.title}
                >

                  <div className="smartai-offer__icon">
                    {card.icon}
                  </div>


                  <h3>
                    {card.title}
                  </h3>


                  <div className="smartai-offer__line" />


                  <ul>

                    {card.items.map((item) => (

                      <li key={item}>
                        <span>+</span>
                        <span>{item}</span>
                      </li>

                    ))}

                  </ul>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            ONLINE / OFFLINE TRAINING IMAGES
        ===================================================== */}

        <section className="smartai-image-strip">

          <div className="smartai-image-strip__grid">

            {/* OFFLINE TRAINING */}

            <div className="smartai-image-strip__item">

              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=90"
                alt="Offline classroom digital marketing training"
              />

            </div>


            {/* ONLINE TRAINING */}

            <div className="smartai-image-strip__item">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
                alt="Online digital marketing course learning"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            COURSE LEARNING PROCESS
        ===================================================== */}

        <section className="smartai-process">

          <div className="smartai-process__grid-background" />


          <div className="smartai-container smartai-process__content">

            <div className="smartai-process__label">

              <span />

              Practical Learning Journey

            </div>


            <h2>
              Learn Digital Marketing
              <br />
              From Fundamentals to Practice
            </h2>


            <div className="smartai-process__steps">

              <div className="smartai-process__line" />


              {processSteps.map((step) => (

                <article
                  className="smartai-process__step"
                  key={step.number}
                >

                  <span className="smartai-process__number">
                    {step.number}
                  </span>


                  <h3>
                    {step.title}
                  </h3>


                  <p>
                    {step.description}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="smartai-faq">

          <div className="smartai-container">

            <div className="smartai-faq__label">

              <span />

              Course FAQs

            </div>


            <h2>
              Common Questions About
              <br />
              Digital Marketing Training
            </h2>


            <div className="smartai-faq__accordion">

              {faqItems.map((item, index) => {

                const isOpen = activeFaq === index;

                return (

                  <div
                    className={`smartai-faq__item ${
                      isOpen
                        ? "smartai-faq__item--active"
                        : ""
                    }`}
                    key={item.question}
                  >

                    <button
                      type="button"
                      className="smartai-faq__button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >

                      <span>
                        {item.question}
                      </span>

                      <FaChevronDown />

                    </button>


                    <div className="smartai-faq__answer">

                      <div>

                        <p>
                          {item.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default DigitalMarketingCourse;