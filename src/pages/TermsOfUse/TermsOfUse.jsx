import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCalendarAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBan,
  FaExternalLinkAlt,
  FaArrowUp,
  FaExclamationTriangle,
  FaBalanceScale,
  FaRegLightbulb,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import "./TermsOfUse.css";

function TermsOfUse() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="terms-page">
      <Navbar />

      <main className="terms-main">
        <div className="terms-container">
          <header className="terms-hero">
              <h1 className="terms-hero__title">
                Terms of <span className="terms-hero__title-accent">Use</span>
              </h1>

              <div className="terms-hero__meta">
                <div className="terms-hero__meta-item">
                  <FaCalendarAlt className="terms-hero__meta-icon" />
                  <span>
                    Last Updated: <strong>21 October 2026</strong>
                  </span>
                </div>
                <div className="terms-hero__meta-item">
                  <FaGlobe className="terms-hero__meta-icon" />
                  <span>
                    Applies to: <strong>www.dgateis.com</strong>
                  </span>
                </div>
                <div className="terms-hero__meta-item">
                  <FaBalanceScale className="terms-hero__meta-icon" />
                  <span>
                    Jurisdiction: <strong>Bengaluru, Karnataka, India</strong>
                  </span>
                </div>
              </div>

              {/* WELCOME / PREAMBLE CALLOUT */}
              <div className="terms-hero__preamble">
                <p>
                  Welcome to the website of{" "}
                  <strong>D-GATE Integrated Services</strong>. These Terms of
                  Use (&quot;Terms&quot;) govern your access to and use of{" "}
                  <strong>www.dgateis.com</strong> and its content, pages,
                  features and materials. By accessing or using this website, you
                  agree to these Terms. If you do not agree with these Terms,
                  please discontinue use of the website immediately.
                </p>
              </div>
            </header>

            {/* SECTIONS 01 TO 20 */}
            <article className="terms-cards-wrapper">
              {/* 1. ABOUT D-GATE */}
              <section id="about" className="terms-card">
                <div className="terms-card__header">
                  <h2>About D-GATE</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    <strong>D-GATE Integrated Services</strong> is a business
                    providing comprehensive services across areas including
                    strategy, branding, creative, digital experiences,
                    technology, e-commerce, marketing, performance and related
                    business solutions.
                  </p>
                  <p>
                    Information on this website is intended to introduce D-GATE,
                    its capabilities, thinking, work and services.
                  </p>
                  <div className="terms-callout terms-callout--info">
                    <FaRegLightbulb className="terms-callout__icon" />
                    <div>
                      <strong>Commercial Agreements Notice:</strong> Specific
                      services, deliverables, timelines, fees and commercial
                      obligations will be governed by separate proposals,
                      statements of work, contracts or written agreements between
                      D-GATE and its clients.
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. USE OF THE WEBSITE */}
              <section id="use-of-website" className="terms-card">
                <div className="terms-card__header">
                  <h2>Use of the Website</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    You may access and use this website solely for lawful
                    personal or business purposes. In accessing this website, you
                    explicitly agree that you will <strong>not</strong> engage in
                    any conduct that:
                  </p>

                  <div className="terms-prohibited-grid">
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Violates applicable local, national or international law</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Infringes the intellectual property or privacy rights of another person or organisation</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Attempts to obtain unauthorised access to the website or its underlying infrastructure</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Introduces viruses, malware, trojans, worms or other harmful computer code</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Attempts to disrupt, degrade or interfere with website security, integrity or availability</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Scrapes, copies, crawls or extracts substantial website content without prior written permission</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Misrepresents your identity, company affiliation, credentials or origin</span>
                    </div>
                    <div className="terms-prohibited-item">
                      <FaBan className="terms-prohibited-item__icon" />
                      <span>Uses D-GATE content or representations for deceptive, fraudulent or unlawful activity</span>
                    </div>
                  </div>

                  <p className="terms-note">
                    D-GATE reserves the right to restrict, suspend or block access
                    immediately where misuse, abusive behaviour or security
                    risks are detected.
                  </p>
                </div>
              </section>

              {/* 3. INTELLECTUAL PROPERTY */}
              <section id="intellectual-property" className="terms-card">
                <div className="terms-card__header">
                  <h2>Intellectual Property</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Unless otherwise stated, the D-GATE website and its original
                    content are owned by or licensed to <strong>DGATE Integrated
                    Services</strong>. This protected intellectual property
                    includes, but is not limited to:
                  </p>

                  <div className="terms-tags-cloud">
                    <span className="terms-tag">D-GATE Name &amp; Branding</span>
                    <span className="terms-tag">Logos &amp; Icons</span>
                    <span className="terms-tag">Website Design &amp; Architecture</span>
                    <span className="terms-tag">Copy &amp; Written Content</span>
                    <span className="terms-tag">Graphics &amp; Visual Design</span>
                    <span className="terms-tag">Illustrations &amp; 3D Renderings</span>
                    <span className="terms-tag">Images &amp; Photography</span>
                    <span className="terms-tag">Videos &amp; Motion Assets</span>
                    <span className="terms-tag">Case-Study Presentations</span>
                    <span className="terms-tag">Design Systems &amp; Guidelines</span>
                    <span className="terms-tag">Layouts &amp; Schemas</span>
                    <span className="terms-tag">Proprietary Concepts</span>
                    <span className="terms-tag">Source Material</span>
                    <span className="terms-tag">Creative &amp; Digital Assets</span>
                  </div>

                  <p>
                    These materials are protected by applicable intellectual
                    property laws and copyright regulations.
                  </p>

                  <div className="terms-permissions-block">
                    <div className="terms-permission-item terms-permission-item--allowed">
                      <FaCheckCircle className="terms-permission-icon" />
                      <div>
                        <strong>Permitted:</strong> You may view, browse and read
                        website content on your personal screen for general
                        informational purposes.
                      </div>
                    </div>
                    <div className="terms-permission-item terms-permission-item--forbidden">
                      <FaBan className="terms-permission-icon" />
                      <div>
                        <strong>Restricted:</strong> You may not reproduce,
                        republish, distribute, sell, modify, commercially exploit
                        or create derivative works from D-GATE-owned website
                        content without prior written permission.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. CLIENT WORK, BRANDS AND THIRD-PARTY MATERIALS */}
              <section id="client-work" className="terms-card">
                <div className="terms-card__header">
                  <h2>Client Work, Brands and Third-Party Materials</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    The website may display client names, trademarks, logos,
                    campaigns, screenshots, product images and other materials in
                    connection with D-GATE&apos;s portfolio or case studies.
                  </p>
                  <p>
                    Such trademarks and intellectual property remain the property
                    of their respective owners. Their appearance on this website
                    does not imply that D-GATE owns those trademarks or claims
                    exclusive rights beyond the scope of work performed.
                  </p>
                  <p>
                    Case studies are presented to demonstrate relevant work and
                    experience. D-GATE publishes client identities, materials,
                    testimonials and results only where it has the appropriate
                    permission or legal basis to do so.
                  </p>
                </div>
              </section>

              {/* 5. CASE STUDIES AND RESULTS */}
              <section id="case-studies" className="terms-card">
                <div className="terms-card__header">
                  <h2>Case Studies and Results</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Examples of client work may describe challenges, approaches,
                    deliverables and outcomes.
                  </p>
                  <div className="terms-callout terms-callout--warning">
                    <FaExclamationTriangle className="terms-callout__icon" />
                    <div>
                      <strong>No Guarantee of Specific Results:</strong> Any
                      performance figures, percentages, revenue figures,
                      conversion improvements, lead volumes or other quantitative
                      results apply solely to the specific circumstances and
                      market conditions in which they were achieved. Past results
                      do not guarantee similar future outcomes. Business,
                      marketing and technology performance can vary depending on
                      numerous external factors beyond D-GATE&apos;s control.
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. WEBSITE INFORMATION */}
              <section id="website-information" className="terms-card">
                <div className="terms-card__header">
                  <h2>Website Information</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    We aim to keep information on the website accurate and current,
                    however:
                  </p>
                  <ul className="terms-list">
                    <li>Content may occasionally contain inadvertent typographical errors or omissions.</li>
                    <li>Service specifications, methodologies and technologies may evolve over time.</li>
                    <li>Information may become outdated before the next scheduled update.</li>
                    <li>Features, case studies or website pages may change or be removed without notice.</li>
                  </ul>
                  <p>
                    Website content is therefore provided for general informational
                    purposes and should not be treated as a binding commercial offer
                    unless expressly agreed in writing.
                  </p>
                </div>
              </section>

              {/* 7. NO PROFESSIONAL ADVICE */}
              <section id="no-advice" className="terms-card">
                <div className="terms-card__header">
                  <h2>No Professional Advice</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Nothing on this website constitutes legal, financial, tax,
                    accounting or other regulated professional advice.
                  </p>
                  <p>
                    Articles, insights, publications, case studies and other
                    materials express general perspectives only and should not be
                    relied upon as a substitute for professional counsel
                    appropriate to your specific business circumstances.
                  </p>
                </div>
              </section>

              {/* 8. PROPOSALS AND ENGAGEMENTS */}
              <section id="proposals" className="terms-card">
                <div className="terms-card__header">
                  <h2>Proposals and Engagements</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Submitting an enquiry through our contact forms, sending an
                    email, or discussing a potential project with D-GATE does
                    not create a formal client relationship or contractual
                    commitment.
                  </p>
                  <p>
                    A commercial relationship begins only when the relevant
                    parties enter into an appropriate written agreement,
                    statement of work (SOW), or otherwise expressly agree in
                    writing to proceed.
                  </p>
                  <p>
                    All terms relating to project scope, pricing, milestones,
                    timelines, ownership of deliverables, payment schedules,
                    confidentiality, ongoing maintenance, support, cancellation
                    and licensing will be governed strictly by the applicable
                    proposal, contract or formal statement of work.
                  </p>
                </div>
              </section>

              {/* 9. USER SUBMISSIONS */}
              <section id="user-submissions" className="terms-card">
                <div className="terms-card__header">
                  <h2>User Submissions</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    If you voluntarily submit information to D-GATE through the
                    website (including contact forms, consultation requests or
                    email channels), you confirm that:
                  </p>
                  <ul className="terms-list">
                    <li>The information provided is accurate and truthful to the best of your knowledge.</li>
                    <li>You have the full legal right and authority to provide such information.</li>
                    <li>Its submission does not violate any third party&apos;s privacy or proprietary rights.</li>
                  </ul>
                  <p>
                    Information submitted through contact forms will be handled in
                    accordance with our{" "}
                    <Link to="/privacy-policy" className="terms-link">
                      Privacy Policy
                    </Link>
                    . Please do not submit confidential business secrets or
                    sensitive proprietary material through general public website
                    forms.
                  </p>
                </div>
              </section>

              {/* 10. CAREERS AND APPLICATIONS */}
              <section id="careers" className="terms-card">
                <div className="terms-card__header">
                  <h2>Careers and Applications</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Submission of a resume, CV, portfolio link, or job
                    application through the Careers section does not guarantee an
                    interview, offer of employment, response or future
                    consideration.
                  </p>
                  <p>
                    D-GATE may retain applicant information in accordance with its
                    internal recruitment requirements and applicable data
                    retention policies.
                  </p>
                </div>
              </section>

              {/* 11. THIRD-PARTY WEBSITES AND SERVICES */}
              <section id="third-party" className="terms-card">
                <div className="terms-card__header">
                  <h2>Third-Party Websites and Services</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Our website may contain hyperlinks to external websites, social
                    media platforms, or web services operated by third parties.
                    These links are provided purely for convenience or general
                    reference.
                  </p>
                  <p>
                    D-GATE does not control, endorse, monitor, or accept
                    responsibility for third-party content, uptime availability,
                    security, privacy practices, products or services.
                  </p>
                  <p>
                    Your interactions with external websites are governed solely by
                    their respective terms, privacy notices and operating
                    policies.
                  </p>
                </div>
              </section>

              {/* 12. WEBSITE AVAILABILITY */}
              <section id="availability" className="terms-card">
                <div className="terms-card__header">
                  <h2>Website Availability</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    We aim to maintain a dependable and accessible website, but we
                    do not guarantee uninterrupted, secure, or error-free
                    availability.
                  </p>
                  <p>
                    We reserve the right to modify, suspend, restrict or
                    discontinue parts or all of the website at any time for
                    scheduled maintenance, security patches, technical
                    upgrades, business reasons or unforeseen circumstances
                    beyond our reasonable control.
                  </p>
                </div>
              </section>

              {/* 13. DISCLAIMER OF WARRANTIES */}
              <section id="warranties" className="terms-card">
                <div className="terms-card__header">
                  <h2>Disclaimer of Warranties</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    To the maximum extent permitted by applicable law, the
                    website and its entire content are provided on an{" "}
                    <strong>&quot;as available&quot;</strong> and{" "}
                    <strong>&quot;as is&quot;</strong> basis, without warranties
                    of any kind, either express or implied.
                  </p>
                  <p>Specifically, D-GATE makes no warranty that:</p>
                  <ul className="terms-list">
                    <li>The website will always be available without disruption or delay.</li>
                    <li>All content, data and calculations will always be completely error-free.</li>
                    <li>The website will satisfy every individual user&apos;s specific operational requirements.</li>
                    <li>Use of the website or implementation of its ideas will produce any guaranteed business outcome.</li>
                  </ul>
                  <p>
                    Nothing in these Terms excludes statutory warranties or
                    consumer rights that cannot legally be excluded under
                    applicable Indian law.
                  </p>
                </div>
              </section>

              {/* 14. LIMITATION OF LIABILITY */}
              <section id="liability" className="terms-card">
                <div className="terms-card__header">
                  <h2>Limitation of Liability</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    To the maximum extent permitted by applicable law, D-GATE
                    Integrated Services, its founders, directors, employees,
                    contractors and affiliates will not be responsible or liable
                    for any indirect, incidental, consequential, punitive, or
                    special damages arising solely out of your access to, use of,
                    or inability to use this public website.
                  </p>
                  <p>
                    This includes, without limitation, loss of business revenue,
                    profits, data or goodwill resulting from reliance upon
                    general website information, temporary server downtime,
                    third-party external links, or unauthorised network
                    interference beyond our reasonable control.
                  </p>
                  <p>
                    Nothing in these Terms limits liability where such limitation
                    or exclusion is explicitly prohibited by law.
                  </p>
                </div>
              </section>

              {/* 15. INDEMNITY */}
              <section id="indemnity" className="terms-card">
                <div className="terms-card__header">
                  <h2>Indemnity</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    To the extent permitted by law, you agree to indemnify,
                    defend and hold harmless D-GATE Integrated Services, its
                    officers, directors, and employees against any third-party
                    claims, liabilities, losses, damages or expenses (including
                    reasonable legal fees) arising from:
                  </p>
                  <ul className="terms-list">
                    <li>Your unlawful misuse of the website or breach of these Terms.</li>
                    <li>Your violation of any applicable statute or regulation.</li>
                    <li>Any infringement by you of third-party intellectual property or privacy rights.</li>
                  </ul>
                </div>
              </section>

              {/* 16. PRIVACY */}
              <section id="privacy" className="terms-card">
                <div className="terms-card__header">
                  <h2>Privacy</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    Your access to and use of the website is also governed by our{" "}
                    <strong>Privacy Policy</strong>, which explains how D-GATE
                    collects, processes, protects and handles personal
                    information.
                  </p>
                  <div className="terms-callout terms-callout--info">
                    <FaShieldAlt className="terms-callout__icon" />
                    <div>
                      Please review our full data handling practices. You can
                      access our Privacy Policy directly at any time:{" "}
                      <Link to="/privacy-policy" className="terms-link">
                        View Privacy Policy &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* 17. CHANGES TO THESE TERMS */}
              <section id="changes" className="terms-card">
                <div className="terms-card__header">
                  <h2>Changes to These Terms</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    D-GATE may revise and update these Terms periodically to
                    reflect changes in our legal obligations, business operations
                    or website functionality.
                  </p>
                  <p>
                    Changes will take effect immediately upon being posted on this
                    website, unless a specific date is noted. The &quot;Last
                    Updated&quot; date at the top of this document indicates the
                    latest revision date.
                  </p>
                  <p>
                    Your continued use of the website following the posting of
                    revised Terms constitutes your acceptance of the updated
                    provisions.
                  </p>
                </div>
              </section>

              {/* 18. GOVERNING LAW AND JURISDICTION */}
              <section id="governing-law" className="terms-card">
                <div className="terms-card__header">
                  <h2>Governing Law and Jurisdiction</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    These Terms and any dispute or claim arising out of or in
                    connection with them or their subject matter shall be governed
                    by and construed in accordance with the <strong>laws
                    applicable in India</strong>.
                  </p>
                  <div className="terms-callout terms-callout--accent">
                    <FaBalanceScale className="terms-callout__icon" />
                    <div>
                      <strong>Exclusive Jurisdiction:</strong> Subject to
                      applicable law, any legal suit, action, or proceeding
                      arising specifically out of or related to the use of this
                      website shall be instituted exclusively in the competent
                      courts located in <strong>Bengaluru, Karnataka, India</strong>.
                    </div>
                  </div>
                </div>
              </section>

              {/* 19. SEVERABILITY */}
              <section id="severability" className="terms-card">
                <div className="terms-card__header">
                  <h2>Severability</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    If any provision or part-provision of these Terms is held by a
                    court of competent jurisdiction to be invalid, illegal or
                    unenforceable, that provision will be modified to the minimum
                    extent necessary to make it valid and enforceable.
                  </p>
                  <p>
                    If modification is not possible, the provision shall be
                    severed, and all remaining provisions of these Terms will
                    continue in full legal force and effect.
                  </p>
                </div>
              </section>

              {/* 20. CONTACT */}
              <section id="contact" className="terms-card terms-card--contact">
                <div className="terms-card__header">
                  <h2>Contact D-GATE</h2>
                </div>
                <div className="terms-card__body">
                  <p>
                    If you have questions, comments, or legal concerns regarding
                    these Terms of Use or the website, please contact us:
                  </p>

                  <div className="terms-contact-grid">
                    <div className="terms-contact-item">
                      <div className="terms-contact-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <strong>Company Address:</strong>
                        <p>
                          D-GATE Integrated Services<br />
                          Bengaluru, Karnataka, India
                        </p>
                      </div>
                    </div>

                    <div className="terms-contact-item">
                      <div className="terms-contact-icon">
                        <FaEnvelope />
                      </div>
                      <div>
                        <strong>Email Address:</strong>
                        <p>
                          <a href="mailto:info@dgateis.com">info@dgateis.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="terms-contact-item">
                      <div className="terms-contact-icon">
                        <FaGlobe />
                      </div>
                      <div>
                        <strong>Official Website:</strong>
                        <p>
                          <a href="https://www.dgateis.com" target="_blank" rel="noopener noreferrer">
                            www.dgateis.com <FaExternalLinkAlt className="terms-ext-icon" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="terms-contact-cta">
                    <Link to="/contact" className="terms-btn-primary">
                      Contact Us Directly &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* BACK TO TOP BUTTON */}
              <div className="terms-back-to-top">
                <button type="button" onClick={scrollToTop}>
                  <FaArrowUp /> Back to Top
                </button>
              </div>
            </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfUse;
