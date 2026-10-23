import { Link } from "react-router-dom";
import {
  FaLayerGroup,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import ThinkLightbulbIcon from "../../components/Shared/ThinkLightbulbIcon";
import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import "./Services.css";

const servicesPillars = [
  {
    id: "think",
    name: "THINK",
    focus: "IDEATE",
    icon: ThinkLightbulbIcon,
    motto: "Find the idea worth building.",
    desc: "We define what the business should stand for, who it needs to matter to and how it should compete for attention. The output is not a document that sits on a shelf. It is a sharper decision system for everything that follows.",
    capabilities: [
      "Brand strategy & positioning",
      "Brand architecture & messaging",
      "Marketing strategy",
      "Campaign strategy",
      "Content & communication strategy",
      "Audience and market insight",
      "Creative direction",
    ],
    ctaText: "Explore THINK",
    ctaLink: "/services/think",
  },
  {
    id: "build",
    name: "BUILD",
    focus: "INNOVATE",
    icon: FaLayerGroup,
    motto: "Make the idea real.",
    desc: "We turn strategy into the visual, verbal and digital experiences through which people meet the brand. Every touchpoint should feel intentional, recognisable and easy to engage with.",
    capabilities: [
      "Brand identity & visual systems",
      "Campaign concepts & creative",
      "Content creation",
      "Communication design",
      "Website design & development",
      "E-commerce experiences",
      "UI/UX design",
      "Video, motion & digital assets",
    ],
    ctaText: "Explore BUILD",
    ctaLink: "/services/build",
  },
  {
    id: "solve",
    name: "SOLVE",
    focus: "INITIATE",
    icon: FaRocket,
    motto: "Make the work move.",
    desc: "We connect media, performance, search, social, conversion and marketing systems to help the brand turn attention into action — and action into learning.",
    capabilities: [
      "Performance marketing",
      "Search / SEO / SEM",
      "Social media campaigns",
      "Lead generation & nurturing",
      "Conversion optimisation",
      "Campaign management",
      "Analytics & reporting",
      "CRM and marketing automation",
      "AI-enabled marketing workflows — only where internally validated",
    ],
    ctaText: "Explore SOLVE",
    ctaLink: "/services/solve",
  },
];

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-overview-page">
        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="services-overview__hero">
          <div className="container">
            <h1 className="services-overview__title">
              One business direction
              <br></br><span>Three systems</span>
            </h1>

            <div className="services-overview__title-line" aria-hidden="true" />

            <p className="services-overview__lead">
              Transformation rarely fits neatly into a service list. We organise our
              capabilities around the three things businesses repeatedly need: a clearer
              direction, a stronger expression and a more effective path to growth.
            </p>
          </div>
        </section>

        {/* =====================================================
            THREE SYSTEMS CARDS
        ===================================================== */}
        <section className="services-overview__section">
          <div className="services-overview__container">
            <div className="systems-grid">
              {servicesPillars.map((pillar) => {
                const IconComponent = pillar.icon;

                return (
                  <div className="system-pillar" key={pillar.id}>
                    <div>
                      {/* TOP ROW: TITLE GROUP & SYMBOL ON THE SAME LINE */}
                      <div className="system-pillar__top-row">
                        <div className="system-pillar__title-group">
                          <span className="system-pillar__category">{pillar.focus}</span>
                          <h2 className="system-pillar__title">{pillar.name}</h2>
                        </div>
                        <div className="system-pillar__icon-wrap" aria-hidden="true">
                          <IconComponent />
                        </div>
                      </div>

                      {/* MOTTO */}
                      <div className="system-pillar__motto">
                        “{pillar.motto}”
                      </div>

                      {/* DESCRIPTION */}
                      <p className="system-pillar__desc">{pillar.desc}</p>

                      <div className="system-pillar__divider" />

                      {/* CAPABILITIES */}
                      <div className="system-pillar__capabilities-label">
                        Core Capabilities
                      </div>

                      <ul className="system-pillar__list">
                        {pillar.capabilities.map((cap, idx) => (
                          <li className="system-pillar__item" key={idx}>
                            <span className="system-pillar__bullet" aria-hidden="true">
                              <FaCheck />
                            </span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA ACTION */}
                    <div className="system-pillar__action">
                      <Link to={pillar.ctaLink} className="system-pillar__btn">
                        <span>{pillar.ctaText}</span>
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>

                    {/* CORNER ACCENT */}
                    <div className="system-pillar__corner" aria-hidden="true" />
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

export default ServicesPage;