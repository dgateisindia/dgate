import "./ContactHero.css";

import {
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";

import {
  FaHeadset,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

import contactHero from "../../../assets/images/Contact/hero/contact-hero.png";


/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    id: "quick-response",
    title: "Quick Response",
    description: "We get back to you within 24 hours",
    Icon: FaHeadset,
  },
  {
    id: "expert-guidance",
    title: "Expert Guidance",
    description: "Connect with our technology experts",
    Icon: FaUsers,
  },
  {
    id: "secure-confidential",
    title: "Secure & Confidential",
    description: "Your information is safe with us",
    Icon: FaShieldAlt,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function ContactHero() {
  const heroRef = useRef(null);


  /* =========================================================
     HERO ENTRANCE
     FADE ONLY
  ========================================================= */

  useEffect(() => {
    if (!heroRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();


      timeline
        .from(
          ".contact-page-hero__breadcrumb",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".contact-page-hero__title",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".contact-page-hero__line",
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.2"
        )

        .from(
          ".contact-page-hero__description",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".contact-page-hero__feature",
          {
            opacity: 0,
            duration: 0.35,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".contact-page-hero__visual",
          {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.35"
        );

    }, heroRef);


    return () => ctx.revert();

  }, []);


  return (
    <section
      className="contact-page-hero"
      ref={heroRef}
      aria-labelledby="contact-page-hero-title"
    >
      <div className="contact-page-hero__container">


        {/* ==========================================
            LEFT CONTENT
        ========================================== */}

        <div className="contact-page-hero__content">


          {/* BREADCRUMB */}

          <nav
            className="contact-page-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              ›
            </span>

            <span aria-current="page">
              Contact Us
            </span>
          </nav>


          {/* TITLE */}

          <h1
            id="contact-page-hero-title"
            className="contact-page-hero__title"
          >
            Let&apos;s Build Something
            <br />

            Amazing{" "}

            <span>
              Together
            </span>
          </h1>


          {/* YELLOW LINE */}

          <div
            className="contact-page-hero__line"
            aria-hidden="true"
          />


          {/* DESCRIPTION */}

          <p className="contact-page-hero__description">
            Have a project in mind or want to learn more about
            how we can help your business grow? We&apos;d love
            to hear from you.
          </p>


          {/* ==========================================
              FEATURES
          ========================================== */}

          <div className="contact-page-hero__features">

            {features.map((feature) => {
              const Icon = feature.Icon;

              return (
                <div
                  className="contact-page-hero__feature"
                  key={feature.id}
                >

                  <div
                    className="contact-page-hero__feature-icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </div>


                  <div className="contact-page-hero__feature-text">

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* ==========================================
            RIGHT IMAGE
        ========================================== */}

        <div className="contact-page-hero__visual">

          <img
            src={contactHero}
            alt="DGATE global offices and corporate headquarters"
            className="contact-page-hero__image"
            fetchPriority="high"
          />


          <div
            className="contact-page-hero__overlay"
            aria-hidden="true"
          />

        </div>

      </div>
    </section>
  );
}


export default ContactHero;