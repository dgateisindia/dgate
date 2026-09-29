import "./ContactHero.css";

import {
  useEffect,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

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
    description: "We respond to your enquiry within 24 hours.",
    Icon: FaHeadset,
  },

  {
    id: "expert-guidance",
    title: "Expert Guidance",
    description: "Connect directly with our digital specialists.",
    Icon: FaUsers,
  },

  {
    id: "secure-confidential",
    title: "Secure & Confidential",
    description: "Your business information stays protected.",
    Icon: FaShieldAlt,
  },
];


function ContactHero() {
  const heroRef = useRef(null);


  /* =========================================================
     HERO ENTRANCE ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!heroRef.current) return undefined;


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {
      return undefined;
    }


    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      timeline
        .from(
          ".contact-page-hero__breadcrumb",
          {
            opacity: 0,
            y: 12,
            duration: 0.45,
          }
        )

        .from(
          ".contact-page-hero__title",
          {
            opacity: 0,
            y: 18,
            duration: 0.65,
          },
          "-=0.22"
        )

        .from(
          ".contact-page-hero__line",
          {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.45,
          },
          "-=0.3"
        )

        .from(
          ".contact-page-hero__description",
          {
            opacity: 0,
            y: 14,
            duration: 0.5,
          },
          "-=0.2"
        )

        .from(
          ".contact-page-hero__feature",
          {
            opacity: 0,
            y: 18,
            duration: 0.48,
            stagger: 0.09,
          },
          "-=0.2"
        )

        .from(
          ".contact-page-hero__visual",
          {
            opacity: 0,
            duration: 0.7,
          },
          "-=0.55"
        );

    }, heroRef);


    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <section
      className="contact-page-hero"
      ref={heroRef}
      aria-labelledby="contact-page-hero-title"
    >

      <div className="contact-page-hero__container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="contact-page-hero__content">

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


          {/* ACCENT LINE */}

          <div
            className="contact-page-hero__line"
            aria-hidden="true"
          />


          {/* DESCRIPTION */}

          <p className="contact-page-hero__description">

            Have a project in mind or want to learn
            more about how we can help your business
            grow? We&apos;d love to hear from you.

          </p>


          {/* =================================================
              TRUST FEATURES
          ================================================= */}

          <div
            className="contact-page-hero__features"
            role="list"
            aria-label="Why contact DGATE"
          >

            {features.map((feature) => {

              const Icon = feature.Icon;


              return (

                <article
                  className="contact-page-hero__feature"
                  key={feature.id}
                  role="listitem"
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


                  <span
                    className="contact-page-hero__feature-accent"
                    aria-hidden="true"
                  />

                </article>

              );

            })}

          </div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div className="contact-page-hero__visual">

          <img
            src={contactHero}
            alt="DGATE Integrated Services corporate workspace"
            className="contact-page-hero__image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />


          <div
            className="contact-page-hero__overlay"
            aria-hidden="true"
          />


          {/* SMALL IMAGE LABEL */}

          <div
            className="contact-page-hero__visual-badge"
            aria-hidden="true"
          >

            <span>
              DGATE
            </span>

            <strong>
              LET&apos;S BUILD
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}


export default ContactHero;