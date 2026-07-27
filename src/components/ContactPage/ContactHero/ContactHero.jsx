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


function ContactHero() {

  const heroRef = useRef(null);


  /* =========================================================
     GSAP HERO ENTRANCE
  ========================================================= */

  useEffect(() => {

    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({

        defaults: {
          ease: "power3.out",
        },

      });


      /* Breadcrumb */

      timeline.from(
        ".contact-hero-breadcrumb",
        {
          x: -25,
          opacity: 0,
          duration: 0.5,
        }
      );


      /* Heading */

      timeline.from(
        ".contact-hero-title",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.2"
      );


      /* Yellow Line */

      timeline.from(
        ".contact-hero-title-line",
        {
          width: 0,
          duration: 0.45,
        },
        "-=0.2"
      );


      /* Description */

      timeline.from(
        ".contact-hero-description",
        {
          y: 18,
          opacity: 0,
          duration: 0.55,
        },
        "-=0.15"
      );


      /* Features */

      timeline.from(
        ".contact-hero-feature",
        {
          y: 20,
          opacity: 0,
          duration: 0.55,
          stagger: 0.12,
        },
        "-=0.2"
      );


      /* Right Image */

      timeline.from(
        ".contact-hero-image-side",
        {
          x: 45,
          opacity: 0,
          duration: 0.85,
        },
        "-=0.7"
      );

    }, heroRef);


    return () => {

      ctx.revert();

    };

  }, []);


  return (

    <section
      className="contact-hero"
      ref={heroRef}
    >

      <div className="contact-hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="contact-hero-content">


          {/* BREADCRUMB */}

          <div className="contact-hero-breadcrumb">

            <Link to="/">
              Home
            </Link>

            <span>
              ›
            </span>

            <span>
              Contact Us
            </span>

          </div>


          {/* HEADING */}

          <h1 className="contact-hero-title">

            Let&apos;s Build Something

            <br />

            Amazing{" "}

            <span>
              Together
            </span>

          </h1>


          {/* YELLOW LINE */}

          <div className="contact-hero-title-line" />


          {/* DESCRIPTION */}

          <p className="contact-hero-description">

            Have a project in mind or want to learn more about
            how we can help your business grow? We&apos;d love
            to hear from you.

          </p>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="contact-hero-features">


            {/* QUICK RESPONSE */}

            <div className="contact-hero-feature">

              <div className="contact-feature-icon">

                <FaHeadset />

              </div>

              <div className="contact-feature-text">

                <h3>
                  Quick Response
                </h3>

                <p>
                  We get back to you
                  <br />
                  within 24 hours
                </p>

              </div>

            </div>


            {/* EXPERT GUIDANCE */}

            <div className="contact-hero-feature">

              <div className="contact-feature-icon">

                <FaUsers />

              </div>

              <div className="contact-feature-text">

                <h3>
                  Expert Guidance
                </h3>

                <p>
                  Connect with our
                  <br />
                  technology experts
                </p>

              </div>

            </div>


            {/* SECURE */}

            <div className="contact-hero-feature">

              <div className="contact-feature-icon">

                <FaShieldAlt />

              </div>

              <div className="contact-feature-text">

                <h3>
                  Secure &amp; Confidential
                </h3>

                <p>
                  Your information is safe
                  <br />
                  with us
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT IMAGE
        ================================================= */}

        <div className="contact-hero-image-side">

          <img

            src={contactHero}

            alt="DGATE global offices and corporate headquarters"

            className="contact-hero-image"

          />

        </div>

      </div>

    </section>

  );

}

export default ContactHero;