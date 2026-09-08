import "./ContactInfo.css";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   CONTACT DETAILS
========================================================= */

const contactDetails = [
  {
    id: "email",
    Icon: FaEnvelope,
    title: "Email Us",
    value: "info@dgateis.com",
    subText:
      "For general inquiries and business discussions",
    type: "email",
  },

  {
    id: "phone",
    Icon: FaPhoneAlt,
    title: "Call Us",
    value: "+91 80 1234 5678",
    subText:
      "Speak directly with our team",
    type: "phone",
  },

  {
    id: "whatsapp",
    Icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 98765 43210",
    subText:
      "Connect with us for quick assistance",
    type: "whatsapp",
  },

  {
    id: "hours",
    Icon: FaClock,
    title: "Business Hours",
    value: "Mon – Fri : 9:30 AM – 6:30 PM",
    subText:
      "Our team will respond during business hours",
    type: "hours",
  },
];


/* =========================================================
   OFFICES
========================================================= */

const offices = [
  {
    id: "india",
    country: "India",
    city: "Bengaluru",
    address:
      "Bengaluru, Karnataka, India",
  },

  {
    id: "usa",
    country: "USA",
    city: "United States",
    address:
      "Serving clients across the United States",
  },

  {
    id: "uae",
    country: "UAE",
    city: "Dubai",
    address:
      "Dubai, United Arab Emirates",
  },

  {
    id: "singapore",
    country: "Singapore",
    city: "Singapore",
    address:
      "Serving clients across Singapore and APAC",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function ContactInfo() {
  const sectionRef = useRef(null);


  /* =========================================================
     SCROLL ANIMATION
     FADE ONLY
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;


    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 86%",
          once: true,
        },
      });


      timeline
        .from(
          ".contact-page-info__heading",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".contact-page-info__card",
          {
            opacity: 0,
            duration: 0.38,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        )

        .from(
          ".contact-page-info__offices-heading",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.1"
        )

        .from(
          ".contact-page-info__office-card",
          {
            opacity: 0,
            duration: 0.38,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     CONTACT VALUE
  ========================================================= */

  const renderContactValue = (item) => {

    if (item.type === "email") {
      return (
        <a
          href={`mailto:${item.value}`}
          className="contact-page-info__value"
        >
          {item.value}
        </a>
      );
    }


    if (item.type === "phone") {
      const phoneNumber =
        item.value.replace(/\s/g, "");

      return (
        <a
          href={`tel:${phoneNumber}`}
          className="contact-page-info__value"
        >
          {item.value}
        </a>
      );
    }


    return (
      <span className="contact-page-info__value">
        {item.value}
      </span>
    );
  };


  return (
    <section
      className="contact-page-info"
      ref={sectionRef}
      aria-labelledby="contact-page-info-title"
    >
      <div className="container">


        {/* =================================================
            CONTACT INFORMATION
        ================================================= */}

        <div className="contact-page-info__heading">

          <span className="contact-page-info__eyebrow">
            CONTACT INFORMATION
          </span>


          <h2 id="contact-page-info-title">
            Get in <span>Touch</span>
          </h2>


          <div
            className="contact-page-info__line"
            aria-hidden="true"
          />


          <p>
            Have a question or want to discuss your next
            project? Connect with our team through any of
            the channels below.
          </p>

        </div>


        {/* =================================================
            CONTACT CARDS
        ================================================= */}

        <div className="contact-page-info__grid">

          {contactDetails.map((item) => {
            const Icon = item.Icon;

            return (
              <article
                className="contact-page-info__card"
                key={item.id}
              >

                <div
                  className="contact-page-info__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>


                <div className="contact-page-info__card-content">

                  <h3>
                    {item.title}
                  </h3>


                  {renderContactValue(item)}


                  <p>
                    {item.subText}
                  </p>

                </div>

              </article>
            );
          })}

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="contact-page-info__divider"
          aria-hidden="true"
        />


        {/* =================================================
            OFFICES HEADING
        ================================================= */}

        <div className="contact-page-info__offices-heading">

          <span className="contact-page-info__eyebrow">
            OUR GLOBAL PRESENCE
          </span>


          <h2>
            Our <span>Offices</span>
          </h2>


          <div
            className="contact-page-info__line"
            aria-hidden="true"
          />


          <p>
            Connecting engineering expertise and technology
            solutions with businesses across global markets.
          </p>

        </div>


        {/* =================================================
            OFFICE CARDS
        ================================================= */}

        <div className="contact-page-info__offices-grid">

          {offices.map((office) => (

            <article
              className="contact-page-info__office-card"
              key={office.id}
            >

              <div
                className="contact-page-info__office-accent"
                aria-hidden="true"
              />


              <div
                className="contact-page-info__office-icon"
                aria-hidden="true"
              >
                <FaMapMarkerAlt />
              </div>


              <h3>
                {office.country}
              </h3>


              <span className="contact-page-info__office-city">
                {office.city}
              </span>


              <p>
                {office.address}
              </p>

            </article>

          ))}

        </div>

 
 
      </div>

      
    </section>

);
}




export default ContactInfo;