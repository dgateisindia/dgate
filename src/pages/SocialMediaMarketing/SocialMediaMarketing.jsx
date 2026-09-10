import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBullhorn,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChartLine,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";

import "./SocialMediaMarketing.css";


const socialServices = [
  {
    icon: <FaInstagram />,
    title: "Instagram Marketing",
    description:
      "Content planning, creative direction and campaign support designed to strengthen your brand and audience engagement.",
  },
  {
    icon: <FaFacebookF />,
    title: "Meta Ads Management",
    description:
      "Paid Facebook and Instagram campaigns focused on reach, leads, conversions and measurable business outcomes.",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn Marketing",
    description:
      "Professional content and campaign strategies for B2B brands, founders and service businesses.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Reporting",
    description:
      "Clear reporting on campaign activity, engagement, leads and other relevant social media performance metrics.",
  },
];


function SocialMediaMarketing() {

  useEffect(() => {

    document.title =
      "Social Media Marketing Agency Bangalore | Instagram & Meta Ads | DGATE IS";


    const description =
      "DGATE IS is a social media marketing agency in Bangalore offering Instagram marketing, Meta ads management and flexible social media packages for startups and small businesses.";

    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );


    if (!metaDescription) {

      metaDescription =
        document.createElement("meta");

      metaDescription.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(
        metaDescription
      );
    }


    metaDescription.setAttribute(
      "content",
      description
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
      `${window.location.origin}/social-media-marketing.html`
    );

  }, []);


  return (
    <>
      <Navbar />


      <main className="social-page">

        <section className="social-hero">

          <div className="social-container social-hero__grid">

            <div>

              <span className="social-eyebrow">
                D-GATE Integrated Services
              </span>


              <h1>
                Social Media Marketing Agency in Bangalore 
                <span> DGATE IS</span>
              </h1>


              <p>
                Instagram, Meta & LinkedIn marketing that drives leads,
                not just likes. Paid & organic social management in Bangalore
              </p>


              <div className="social-hero__actions">

                <Link
                  to="/contact"
                  className="social-btn social-btn--primary"
                >
                  Grow Your Social Media

                  <FaArrowRight />
                </Link>


                <a
                  href="#social-packages"
                  className="social-btn social-btn--secondary"
                >
                  View Packages
                </a>

              </div>

            </div>


            <div className="social-hero__visual">

              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=85"
                alt="Social media marketing agency in Bangalore"
              />

            </div>

          </div>

        </section>


        <section className="social-section">

          <div className="social-container">

            <div className="social-heading">

              <span>
                INSTAGRAM MARKETING AGENCY BANGALORE
              </span>


              <h2>
                Build a Stronger
                Social Media Presence.
              </h2>

            </div>


            <div className="social-services-grid">

              {socialServices.map(
                (service) => (

                  <article key={service.title}>

                    <div className="social-service-icon">
                      {service.icon}
                    </div>


                    <h3>
                      {service.title}
                    </h3>


                    <p>
                      {service.description}
                    </p>

                  </article>

                )
              )}

            </div>

          </div>

        </section>


        <section className="social-section social-section--light">

          <div className="social-container social-two-column">

            <div>

              <span className="social-small-label">
                META ADS MANAGEMENT AGENCY BANGALORE
              </span>


              <h2>
                Paid Social Campaigns
                Focused on Results.
              </h2>


              <p>
                We help businesses plan and manage Meta campaigns
                across Facebook and Instagram based on objectives
                such as awareness, leads, website traffic and sales.
              </p>

            </div>


            <div className="social-check-list">

              <div>
                <FaCheckCircle />
                Campaign planning
              </div>

              <div>
                <FaCheckCircle />
                Audience targeting
              </div>

              <div>
                <FaCheckCircle />
                Ad creative direction
              </div>

              <div>
                <FaCheckCircle />
                Lead generation campaigns
              </div>

              <div>
                <FaCheckCircle />
                Conversion campaigns
              </div>

              <div>
                <FaCheckCircle />
                Campaign reporting
              </div>

            </div>

          </div>

        </section>


        <section
          className="social-section"
          id="social-packages"
        >

          <div className="social-container">

            <div className="social-heading social-heading--center">

              <span>
                SOCIAL MEDIA MARKETING PACKAGES BANGALORE
              </span>


              <h2>
                Flexible Social Media Packages
                for Small Businesses.
              </h2>


              <p>
                Package requirements vary depending on platforms,
                posting frequency, creative production, paid ads
                and campaign goals.
              </p>

            </div>


            <div className="social-package-grid">

              <article>

                <span>
                  STARTER
                </span>


                <h3>
                  Organic Social
                </h3>


                <ul>
                  <li>Content planning</li>
                  <li>Social media creatives</li>
                  <li>Instagram management</li>
                  <li>Basic monthly reporting</li>
                </ul>


                <Link to="/contact">
                  Get Pricing <FaArrowRight />
                </Link>

              </article>


              <article className="social-package--featured">

                <span>
                  GROWTH
                </span>


                <h3>
                  Social + Paid Ads
                </h3>


                <ul>
                  <li>Content strategy</li>
                  <li>Instagram & Facebook management</li>
                  <li>Meta ads management</li>
                  <li>Lead campaign support</li>
                  <li>Performance reporting</li>
                </ul>


                <Link to="/contact">
                  Discuss Your Goals <FaArrowRight />
                </Link>

              </article>


              <article>

                <span>
                  PERFORMANCE
                </span>


                <h3>
                  Paid Social Campaigns
                </h3>


                <ul>
                  <li>Campaign strategy</li>
                  <li>Audience targeting</li>
                  <li>Ad management</li>
                  <li>Conversion tracking</li>
                  <li>Optimisation & reporting</li>
                </ul>


                <Link to="/contact">
                  Request a Quote <FaArrowRight />
                </Link>

              </article>

            </div>

          </div>

        </section>


        <section className="social-section social-section--dark">

          <div className="social-container social-two-column">

            <div>

              <span className="social-small-label">
                SOCIAL MEDIA FOR SMALL BUSINESS
              </span>


              <h2>
                Small Business Marketing
                Without Unnecessary Complexity.
              </h2>

            </div>


            <div>

              <p>
                We can structure social media support around
                the platforms and campaign activity your business
                actually needs instead of forcing every client
                into the same package.
              </p>


              <Link
                to="/contact"
                className="social-btn social-btn--primary"
              >
                Get a Custom Package

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </section>


        <section className="social-section">

          <div className="social-container">

            <div className="social-heading">

              <span>
                SOCIAL MEDIA FAQs
              </span>


              <h2>
                Common Social Media
                Marketing Questions.
              </h2>

            </div>


            <div className="social-faq">

              <details>

                <summary>
                  How much does social media marketing cost in Bangalore?
                </summary>

                <p>
                  Pricing depends on the number of platforms,
                  posting frequency, creative requirements,
                  paid advertising and campaign management.
                  DGATE IS provides a scope-based quote after
                  understanding your requirements.
                </p>

              </details>


              <details>

                <summary>
                  Do you offer social media marketing packages
                  for small businesses?
                </summary>

                <p>
                  Yes. Packages can be structured for startups
                  and small businesses based on content,
                  platform management and paid campaign needs.
                </p>

              </details>


              <details>

                <summary>
                  Do you manage Instagram marketing?
                </summary>

                <p>
                  Yes. We support Instagram content planning,
                  creative direction, organic activity and paid
                  campaign management.
                </p>

              </details>


              <details>

                <summary>
                  Do you manage Meta ads?
                </summary>

                <p>
                  Yes. DGATE IS can manage Facebook and Instagram
                  advertising campaigns including targeting,
                  campaign setup, optimisation and reporting.
                </p>

              </details>

            </div>

          </div>

        </section>


        <section className="social-cta">

          <div className="social-container">

            <div className="social-cta__box">

              <div>

                <span>
                  GROW YOUR SOCIAL PRESENCE
                </span>


                <h2>
                  Looking for a Social Media
                  Marketing Agency in Bangalore?
                </h2>


                <p>
                  Tell us your goals and we will recommend
                  the right organic and paid social approach.
                </p>

              </div>


              <Link
                to="/contact"
                className="social-btn social-btn--primary"
              >
                Get a Free Consultation

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


export default SocialMediaMarketing;