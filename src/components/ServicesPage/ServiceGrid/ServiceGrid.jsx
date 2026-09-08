import "./ServiceGrid.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaPalette,
  FaCode,
  FaShoppingCart,
  FaBullhorn,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DGATE SERVICES
========================================================= */

const services = [
  {
    id: "branding-creative",
    icon: FaPalette,
    title: "Branding & Creative Design",
    description:
      "Build a powerful brand identity through strategic design, visual storytelling, UI/UX and creative assets.",
  },
  {
    id: "website-development",
    icon: FaCode,
    title: "Website Development",
    description:
      "High-performance, responsive and scalable websites designed to strengthen your digital presence and drive conversions.",
  },
  {
    id: "ecommerce-solutions",
    icon: FaShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete Shopify and e-commerce solutions including store development, payment integration and performance optimization.",
  },
  {
    id: "digital-marketing",
    icon: FaBullhorn,
    title: "Digital Marketing & Performance",
    description:
      "ROI-focused digital marketing through Google Ads, Meta Ads, social media marketing and performance campaigns.",
  },
  {
    id: "seo-analytics",
    icon: FaChartLine,
    title: "SEO, Data & Analytics",
    description:
      "Improve search visibility, track customer behaviour and turn digital performance data into actionable business insights.",
  },
  {
    id: "ai-automation",
    icon: FaRobot,
    title: "AI & Business Automation",
    description:
      "Transform business operations using AI-powered automation, intelligent workflows, CRM integrations and smart digital solutions.",
  },
];

function ServiceGrid() {
  const sectionRef = useRef(null);

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
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .from(".services-grid-page__heading", {
          y: 30,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
        })

        .from(
          ".services-grid-page__card",
          {
            y: 30,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="services-grid-page"
      ref={sectionRef}
      aria-labelledby="services-grid-title"
    >
      <div className="container">

        {/* SECTION HEADING */}
        <div className="services-grid-page__heading">

          <span className="services-grid-page__tag">
            OUR SERVICES
          </span>

          <h2 id="services-grid-title">
            Digital Solutions
            <br />
            Built for Business Growth
          </h2>

          <p>
            From branding and web development to digital marketing,
            e-commerce and intelligent automation, DGATE delivers
            end-to-end digital solutions designed to help businesses
            build, grow and scale.
          </p>

        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid-page__grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="services-grid-page__card"
                key={service.id}
              >

                <div
                  className="services-grid-page__icon"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ServiceGrid;