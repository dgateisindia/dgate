import "./Services.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaLightbulb,
  FaMobileAlt,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaEnvelopeOpenText,
  FaNewspaper,
  FaWhatsapp,
  FaBell,
  FaBroadcastTower,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    id: "branding-creative",
    number: "01",
    Icon: FaLightbulb,
    title: "Branding & Creative Solutions",

    items: [
      "Logo Design & Brand Identity",
      "Brand Strategy & Positioning",
      "Brand Guidelines",
      "Corporate Identity",
      "Rebranding & Brand Refresh",
      "Visual Storytelling & Creative Direction",
      "Social Media Branding Kits",
    ],

    tagline: "Build a brand people remember.",
  },

  {
    id: "app-development",
    number: "02",
    Icon: FaMobileAlt,
    title: "App Development",

    items: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "App Testing & QA",
      "App Maintenance & Updates",
      "Enterprise Mobility Solutions",
    ],

    tagline: "Turning ideas into seamless mobile experiences.",
  },

  {
    id: "web-development",
    number: "03",
    Icon: FaCode,
    title: "Web Development",

    items: [
      "Custom Website Development",
      "WordPress Development",
      "E-Commerce Development",
      "Landing Page Design & Optimization",
      "Website Speed Optimization",
      "Website Maintenance & Support",
      "CMS Development",
      "API Integrations",
    ],

    tagline: "Your website is your digital storefront; we make it powerful.",
  },

  {
    id: "digital-marketing",
    number: "04",
    Icon: FaBullhorn,
    title: "Digital Marketing",

    items: [
      "Social Media Marketing",
      "Search Engine Optimization",
      "Content Marketing",
      "Video Marketing",
    ],

    tagline: "Grow your presence. Build your audience.",
  },

  {
    id: "performance-marketing",
    number: "05",
    Icon: FaChartLine,
    title: "Performance Marketing",

    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Conversion Rate Optimization",
      "Funnel Strategy & Optimization",
      "Retargeting & Remarketing Campaigns",
      "Analytics & Reporting",
    ],

    tagline: "Every click optimized for results.",
  },

  {
    id: "email-marketing",
    number: "06",
    Icon: FaEnvelopeOpenText,
    title: "Email Marketing",

    items: [
      "Email Campaign Strategy",
      "Newsletter Design",
      "Automation & Drip Campaigns",
      "Lead Nurturing Funnels",
      "Email Copywriting",
      "A/B Testing & Optimization",
    ],

    tagline: "Right message. Right time. Right audience.",
  },

  {
    id: "digital-pr",
    number: "07",
    Icon: FaNewspaper,
    title: "Digital PR",

    items: [
      "Press Release Writing & Distribution",
      "Media Outreach",
      "Influencer PR Campaigns",
      "Brand Mentions & Coverage",
      "Crisis Management",
    ],

    tagline: "Get featured. Get recognized.",
  },

  {
    id: "whatsapp-marketing",
    number: "08",
    Icon: FaWhatsapp,
    title: "WhatsApp Marketing",

    items: [
      "WhatsApp API Integration",
      "Broadcast Campaigns",
      "Automated Chatbots",
      "Customer Support Automation",
      "Lead Generation Campaigns",
      "Personalized Messaging",
    ],

    tagline: "Connect instantly. Convert faster.",
  },

  {
    id: "push-notification-marketing",
    number: "09",
    Icon: FaBell,
    title: "Push Notification Marketing",

    items: [
      "Web Push Notifications",
      "Mobile Push Notifications",
      "Behavioural Trigger Campaigns",
      "Campaign Analytics",
    ],

    tagline: "Bring users back. Boost retention.",
  },

  {
    id: "traditional-marketing",
    number: "10",
    Icon: FaBroadcastTower,
    title: "Traditional Marketing",

    items: [
      "Print Advertising",
      "TV & Radio Advertising",
      "Event Marketing & Promotions",
      "Outdoor Advertising",
      "Media Buying & Planning",
    ],

    tagline: "Build visibility beyond the digital world.",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function Services() {
  const servicesTrackRef =
    useRef(null);


  const [canScrollLeft, setCanScrollLeft] =
    useState(false);


  const [canScrollRight, setCanScrollRight] =
    useState(true);


  /* =========================================================
     UPDATE ARROW STATES
  ========================================================= */

  const updateScrollState = () => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return;
    }


    const maxScroll =
      track.scrollWidth -
      track.clientWidth;


    const tolerance = 4;


    setCanScrollLeft(
      track.scrollLeft > tolerance
    );


    setCanScrollRight(
      track.scrollLeft <
        maxScroll - tolerance
    );
  };


  /* =========================================================
     INITIALIZE SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return undefined;
    }


    const handleScroll = () => {
      updateScrollState();
    };


    const handleResize = () => {
      updateScrollState();
    };


    /*
     * Check after browser layout is complete.
     */
    const frame =
      window.requestAnimationFrame(
        updateScrollState
      );


    track.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      "resize",
      handleResize
    );


    /*
     * ResizeObserver also catches container/card
     * size changes without relying only on window resize.
     */
    const resizeObserver =
      new ResizeObserver(
        updateScrollState
      );


    resizeObserver.observe(track);


    return () => {
      window.cancelAnimationFrame(
        frame
      );


      track.removeEventListener(
        "scroll",
        handleScroll
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


      resizeObserver.disconnect();
    };

  }, []);


  /* =========================================================
     SCROLL ONE CARD LEFT / RIGHT
  ========================================================= */

  const scrollServices = (direction) => {
    const track =
      servicesTrackRef.current;


    if (!track) {
      return;
    }


    const card =
      track.querySelector(
        ".home-services__card"
      );


    if (!card) {
      return;
    }


    const cardWidth =
      card.getBoundingClientRect().width;


    const trackStyle =
      window.getComputedStyle(track);


    const gap =
      parseFloat(
        trackStyle.columnGap ||
        trackStyle.gap ||
        "18"
      );


    const distance =
      cardWidth + gap;


    track.scrollBy({
      left:
        direction === "next"
          ? distance
          : -distance,

      behavior:
        "smooth",
    });
  };


  /* =========================================================
     KEYBOARD SUPPORT
  ========================================================= */

  const handleKeyDown = (event) => {
    if (
      event.key === "ArrowRight"
    ) {
      event.preventDefault();

      scrollServices("next");
    }


    if (
      event.key === "ArrowLeft"
    ) {
      event.preventDefault();

      scrollServices("previous");
    }
  };


  return (
    <section
      id="services"
      className="home-services"
      aria-labelledby="home-services-title"
    >

      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="home-services__header">

          <div className="home-services__header-copy">

            <span className="home-services__eyebrow">

              WHAT WE DO

            </span>


            <h2
              id="home-services-title"
              className="home-services__title"
            >

              Our{" "}

              <span>
                Core Services
              </span>

            </h2>

          </div>


          <p className="home-services__intro">

            From branding and development to
            performance marketing and customer
            engagement, DGATE provides integrated
            digital and traditional solutions
            designed to help businesses build,
            connect and grow.

          </p>

        </div>


        <div
          className="home-services__title-line"
          aria-hidden="true"
        />


        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="home-services__slider-shell">


          {/* =================================================
              LEFT ARROW
          ================================================= */}

          <button
            type="button"
            className="
              home-services__slider-arrow
              home-services__slider-arrow--left
            "
            onClick={() =>
              scrollServices(
                "previous"
              )
            }
            disabled={!canScrollLeft}
            aria-label="Previous service"
          >

            <FaChevronLeft
              aria-hidden="true"
            />

          </button>


          {/* =================================================
              SERVICES TRACK
          ================================================= */}

          <div
            ref={servicesTrackRef}
            className="home-services__grid"
            tabIndex="0"
            onKeyDown={handleKeyDown}
            aria-label="DGATE services carousel"
          >

            {services.map(
              (service) => {

                const Icon =
                  service.Icon;


                return (

                  <article
                    className="home-services__card"
                    key={service.id}
                  >

                    {/* =====================================
                        HEADER
                    ===================================== */}

                    <div className="home-services__card-header">

                      <div
                        className="home-services__icon"
                        aria-hidden="true"
                      >

                        <Icon />

                      </div>


                      <div className="home-services__heading">

                        <span className="home-services__number">

                          {service.number}

                        </span>


                        <h3>

                          {service.title}

                        </h3>

                      </div>

                    </div>


                    {/* =====================================
                        OPTIONAL INTRO
                    ===================================== */}

                    {service.intro && (

                      <p className="home-services__service-intro">

                        {service.intro}

                      </p>

                    )}


                    {/* =====================================
                        SERVICES LIST
                    ===================================== */}

                    <ul className="home-services__list">

                      {service.items.map(
                        (item) => (

                          <li key={item}>

                            <span
                              className="home-services__bullet"
                              aria-hidden="true"
                            />


                            <span>
                              {item}
                            </span>

                          </li>

                        )
                      )}

                    </ul>


                    {/* =====================================
                        TAGLINE
                    ===================================== */}

                    <p className="home-services__tagline">

                      {service.tagline}

                    </p>


                    <span
                      className="home-services__corner"
                      aria-hidden="true"
                    />

                  </article>

                );

              }
            )}

          </div>


          {/* =================================================
              RIGHT ARROW
          ================================================= */}

          <button
            type="button"
            className="
              home-services__slider-arrow
              home-services__slider-arrow--right
            "
            onClick={() =>
              scrollServices(
                "next"
              )
            }
            disabled={!canScrollRight}
            aria-label="Next service"
          >

            <FaChevronRight
              aria-hidden="true"
            />

          </button>

        </div>


        {/* =================================================
            CAROUSEL FOOTER
        ================================================= */}

        <div className="home-services__carousel-footer">

          <div className="home-services__scroll-note">

            <span
              className="home-services__scroll-line"
              aria-hidden="true"
            />


            <span>
              Use the arrows or swipe to explore all services
            </span>

          </div>


          <div
            className="home-services__progress"
            aria-hidden="true"
          >

            <span
              className={
                canScrollLeft
                  ? "active"
                  : ""
              }
            />

            <span
              className={
                canScrollRight
                  ? "active"
                  : ""
              }
            />

          </div>

        </div>

      </div>

    </section>
  );
}


export default Services;