import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaArrowUp,
  FaBalanceScale,
  FaRegLightbulb,
  FaShieldAlt,
  FaLock,
  FaUserCheck,
  FaServer,
} from "react-icons/fa";

import Navbar from "../../components/Home/Navbar/Navbar";
import Footer from "../../components/Home/Footer/Footer";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="privacy-page">
      {/* CONSTANT NAVBAR AT TOP */}
      <Navbar />

      <main className="privacy-main">
        <div className="privacy-container">
          {/* HERO / HEADER SECTION */}
          <header className="privacy-hero">
            <h1 className="privacy-hero__title">
              Privacy <span className="privacy-hero__title-accent">Policy</span>
            </h1>

            <div className="privacy-hero__meta">
              <div className="privacy-hero__meta-item">
                <FaCalendarAlt className="privacy-hero__meta-icon" />
                <span>
                  Last Updated: <strong>21 October 2026</strong>
                </span>
              </div>
              <div className="privacy-hero__meta-item">
                <FaGlobe className="privacy-hero__meta-icon" />
                <span>
                  Applies to: <strong>www.dgateis.com</strong>
                </span>
              </div>
              <div className="privacy-hero__meta-item">
                <FaBalanceScale className="privacy-hero__meta-icon" />
                <span>
                  Jurisdiction: <strong>Bengaluru, Karnataka, India</strong>
                </span>
              </div>
            </div>

            {/* WELCOME / PREAMBLE CALLOUT */}
            <div className="privacy-hero__preamble">
              <p>
                <strong>D-GATE Integrated Services</strong> (&ldquo;D-GATE&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects the privacy of website visitors, clients, applicants and business contacts. This Privacy Policy explains how we collect, use, store, share and protect personal information when you visit <strong>www.dgateis.com</strong>, submit an enquiry, apply for a role, communicate with us or otherwise interact with our website and services. By using this website, you acknowledge the practices described in this Privacy Policy.
              </p>
            </div>
          </header>

          {/* ALL 16 SECTION CARDS */}
          <article className="privacy-cards-wrapper">
            {/* 1. INFORMATION WE COLLECT */}
            <section id="information-we-collect" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Information We Collect</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  We collect personal information to provide our services, respond to inquiries, and ensure seamless communication. Information is collected either when you provide it directly to us or automatically through your interactions with our website.
                </p>

                <div className="privacy-grid-two">
                  <div className="privacy-subcard">
                    <div className="privacy-subcard__title">
                      <FaUserCheck className="privacy-subcard__icon" />
                      <strong>Information You Provide Directly</strong>
                    </div>
                    <ul className="privacy-list">
                      <li>Full name and professional contact information</li>
                      <li>Company or organisation name and job title</li>
                      <li>Email address and phone number</li>
                      <li>Project requirements, specifications or business briefs</li>
                      <li>Information submitted through contact or enquiry forms</li>
                      <li>Recruitment submissions, including resumes, CVs, or portfolios</li>
                      <li>Any other communications or correspondence sent to D-GATE</li>
                    </ul>
                  </div>

                  <div className="privacy-subcard">
                    <div className="privacy-subcard__title">
                      <FaServer className="privacy-subcard__icon" />
                      <strong>Technical Information Collected Automatically</strong>
                    </div>
                    <ul className="privacy-list">
                      <li>IP (Internet Protocol) address and approximate geolocation</li>
                      <li>Browser version and device hardware type</li>
                      <li>Operating system and display resolution</li>
                      <li>Pages visited, time spent, and navigation paths</li>
                      <li>Date and timestamp of website access</li>
                      <li>Referring website or marketing channel sources</li>
                      <li>Cookie identifiers and interaction metrics</li>
                    </ul>
                  </div>
                </div>

                <div className="privacy-callout privacy-callout--info">
                  <FaRegLightbulb className="privacy-callout__icon" />
                  <div>
                    <strong>Sensitive Personal Information Notice:</strong> We do not intentionally request or require sensitive personal data (such as financial passwords, biometric data, health records, or religious beliefs) through general website forms unless it is genuinely required for a specific, lawful, and consented purpose.
                  </div>
                </div>
              </div>
            </section>

            {/* 2. HOW WE USE YOUR INFORMATION */}
            <section id="how-we-use-information" className="privacy-card">
              <div className="privacy-card__header">
                <h2>How We Use Your Information</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  D-GATE Integrated Services uses collected personal information for legitimate business and operational purposes, including:
                </p>
                <ul className="privacy-list">
                  <li><strong>Responding to Enquiries:</strong> Answering questions, assessing business challenges, and discussing potential engagements.</li>
                  <li><strong>Understanding Project Requirements:</strong> Formulating customized technical proposals, scopes of work, and commercial models.</li>
                  <li><strong>Service Information:</strong> Providing detailed information about our strategy, branding, digital, engineering, and technology capabilities.</li>
                  <li><strong>Managing Recruitment:</strong> Processing candidate applications, reviewing qualifications, and coordinating interview schedules.</li>
                  <li><strong>Website Optimization:</strong> Enhancing website performance, user experience, site navigation, and mobile responsiveness.</li>
                  <li><strong>Analytics &amp; Engagement:</strong> Analyzing traffic trends, user flows, content popularity, and digital marketing efficiency.</li>
                  <li><strong>Security &amp; Fraud Prevention:</strong> Protecting our infrastructure, preventing cyber abuse, and ensuring platform reliability.</li>
                  <li><strong>Legal &amp; Regulatory Compliance:</strong> Fulfilling statutory compliance, tax regulations, and lawful orders from authorities.</li>
                </ul>
                <div className="privacy-callout">
                  <FaShieldAlt className="privacy-callout__icon" />
                  <div>
                    <strong>Commitment to Purpose Limitation:</strong> We do not use personal information for materially unrelated purposes without an appropriate legal basis or obtaining your prior explicit consent where legally required.
                  </div>
                </div>
              </div>
            </section>

            {/* 3. CONTACT AND PROJECT ENQUIRIES */}
            <section id="contact-enquiries" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Contact and Project Enquiries</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  When you submit a contact or inquiry form through the D-GATE website, we collect your name, company details, email address, phone number, and information regarding the project, digital challenge, or service you wish to explore.
                </p>
                <p>
                  We use this information primarily to evaluate your request, get in touch with you, and determine how D-GATE may best assist your organization.
                </p>
                <div className="privacy-callout privacy-callout--info">
                  <FaRegLightbulb className="privacy-callout__icon" />
                  <div>
                    <strong>Non-Contractual Note:</strong> Submitting an inquiry or contacting D-GATE through our website does not by itself establish a formal contractual client relationship. Commercial engagements commence only upon execution of a written agreement or statement of work.
                  </div>
                </div>
              </div>
            </section>

            {/* 4. COOKIES AND ANALYTICS */}
            <section id="cookies-analytics" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Cookies and Analytics</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  Our website may use cookies, pixels, and related tracking technologies to operate correctly, remember preferences, evaluate website engagement, and enhance user experience.
                </p>

                <div className="privacy-cookie-grid">
                  <div className="privacy-cookie-item">
                    <div className="privacy-cookie-badge">Essential</div>
                    <h4>Strictly Necessary Cookies</h4>
                    <p>Enable core website functionality, security protocols, session management, and load balancing. These cannot be disabled.</p>
                  </div>

                  <div className="privacy-cookie-item">
                    <div className="privacy-cookie-badge">Analytics</div>
                    <h4>Performance &amp; Analytics</h4>
                    <p>Help us anonymously understand visitor volume, dwell times, popular pages, and technical performance issues.</p>
                  </div>

                  <div className="privacy-cookie-item">
                    <div className="privacy-cookie-badge">Preferences</div>
                    <h4>Functional Cookies</h4>
                    <p>Remember user selections, regional preferences, and layout customizations to deliver a tailored experience.</p>
                  </div>

                  <div className="privacy-cookie-item">
                    <div className="privacy-cookie-badge">Marketing</div>
                    <h4>Marketing &amp; Campaigns</h4>
                    <p>Where enabled and permitted, measure the reach of advertising campaigns and support relevant business communications.</p>
                  </div>
                </div>

                <p className="privacy-note-text">
                  Where required by applicable regulations, visitors are provided with controls to accept, reject, or manage non-essential cookies. You can also configure or block cookies at any time directly through your web browser preferences.
                </p>
              </div>
            </section>

            {/* 5. ANALYTICS AND THIRD-PARTY TECHNOLOGIES */}
            <section id="third-party-technologies" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Analytics and Third-Party Technologies</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  D-GATE may engage reputable third-party service providers for services such as cloud hosting, analytics tracking, contact form handling, communication channels, security monitoring, CRM, and marketing performance measurement.
                </p>
                <p>
                  Depending on the active tools on our website, these third-party providers may process limited information on our behalf strictly to carry out their technical services.
                </p>
                <p>
                  We require all service providers handling personal data on behalf of D-GATE to implement appropriate technical and organisational safeguards and use such data exclusively for authorized, documented purposes.
                </p>
                <p className="privacy-dim-text">
                  <em>This policy will be updated as new analytics, advertising, CRM, chatbot, or automation technologies are introduced across our digital ecosystem.</em>
                </p>
              </div>
            </section>

            {/* 6. HOW WE SHARE INFORMATION */}
            <section id="how-we-share-information" className="privacy-card">
              <div className="privacy-card__header">
                <h2>How We Share Information</h2>
              </div>
              <div className="privacy-card__body">
                <div className="privacy-highlight-box">
                  <FaCheckCircle className="privacy-highlight-box__icon" />
                  <div>
                    <strong>We Do Not Sell Personal Data:</strong> D-GATE Integrated Services does not sell, rent, or trade your personal information to third parties as part of our ordinary business operations.
                  </div>
                </div>

                <p>
                  We may share information only where reasonably necessary and lawful with:
                </p>
                <ul className="privacy-list">
                  <li><strong>Authorised Technology Providers:</strong> Cloud hosting, server infrastructure, email delivery, and CRM software partners.</li>
                  <li><strong>Analytics Platforms:</strong> Aggregated measurement tools that help us optimize user experience and engagement.</li>
                  <li><strong>Professional Advisers:</strong> Legal counsel, auditors, accountants, and compliance consultants bound by confidentiality.</li>
                  <li><strong>Operations Contractors:</strong> Specialized technical contractors and teams supporting D-GATE delivery under strict non-disclosure obligations.</li>
                  <li><strong>Government &amp; Legal Authorities:</strong> Law enforcement, regulators, or judicial bodies where mandatory under applicable law.</li>
                </ul>
                <p>
                  Information may also be disclosed in good faith where reasonably necessary to comply with legal obligations, enforce our <Link to="/terms-of-use">Terms of Use</Link>, protect the safety and property of D-GATE and its users, or in connection with a corporate merger, reorganization, acquisition, or asset transfer subject to statutory data protection standards.
                </p>
              </div>
            </section>

            {/* 7. DATA RETENTION */}
            <section id="data-retention" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Data Retention</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  We retain personal information only for as long as reasonably necessary to fulfill the specific purposes for which it was gathered, including satisfying legal, accounting, tax, security, and dispute-resolution requirements.
                </p>
                <p>
                  When personal information is no longer needed, we follow standard operational procedures to securely delete, anonymize, or permanently dispose of the records in accordance with applicable retention schedules and data privacy laws.
                </p>
              </div>
            </section>

            {/* 8. DATA SECURITY */}
            <section id="data-security" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Data Security</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  D-GATE employs industry-standard technical and organizational security measures designed to protect your personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.
                </p>
                <div className="privacy-security-grid">
                  <div className="privacy-security-item">
                    <FaLock className="privacy-security-item__icon" />
                    <span>Encrypted SSL/TLS transmission protocols</span>
                  </div>
                  <div className="privacy-security-item">
                    <FaLock className="privacy-security-item__icon" />
                    <span>Restricted role-based access controls</span>
                  </div>
                  <div className="privacy-security-item">
                    <FaLock className="privacy-security-item__icon" />
                    <span>Regular monitoring and server firewall safeguards</span>
                  </div>
                  <div className="privacy-security-item">
                    <FaLock className="privacy-security-item__icon" />
                    <span>Confidentiality agreements with staff &amp; contractors</span>
                  </div>
                </div>
                <p className="privacy-note-text">
                  While we take thorough precautions, no internet data transmission, cloud storage repository, or digital infrastructure can be guaranteed to be 100% impenetrable. We encourage users to maintain caution when sharing sensitive information online.
                </p>
              </div>
            </section>

            {/* 9. YOUR CHOICES AND RIGHTS */}
            <section id="choices-and-rights" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Your Choices and Rights</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  Depending on applicable data-protection laws, you may hold several rights regarding the personal information we maintain about you, including:
                </p>

                <div className="privacy-rights-grid">
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Right to Access:</strong> Request confirmation of whether we process your data and receive copies of your records.
                    </div>
                  </div>
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or out-of-date personal information.
                    </div>
                  </div>
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Right to Erasure:</strong> Request deletion or erasure of your personal records where no legal obligation requires retention.
                    </div>
                  </div>
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Withdrawal of Consent:</strong> Withdraw previously granted consent for processing your personal information at any time.
                    </div>
                  </div>
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Marketing Opt-Out:</strong> Unsubscribe from promotional email communications and updates with one click.
                    </div>
                  </div>
                  <div className="privacy-right-item">
                    <span className="privacy-right-item__bullet">&bull;</span>
                    <div>
                      <strong>Grievance Redressal:</strong> Submit inquiries or grievances regarding the handling of your data to our privacy contact.
                    </div>
                  </div>
                </div>

                <p>
                  To exercise any of these rights, please email your request to <a href="mailto:info@dgateis.com" className="privacy-link">info@dgateis.com</a>. To ensure security, we may require verification of your identity before processing your request.
                </p>
              </div>
            </section>

            {/* 10. MARKETING COMMUNICATIONS */}
            <section id="marketing-communications" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Marketing Communications</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  Where permitted by law or based on your prior consent, we may periodically send you informational updates, industry insights, or details regarding D-GATE services.
                </p>
                <p>
                  You may opt out of promotional communications at any point by utilizing the &ldquo;unsubscribe&rdquo; link located at the bottom of our emails, or by emailing <a href="mailto:info@dgateis.com" className="privacy-link">info@dgateis.com</a> with &ldquo;Unsubscribe&rdquo; in the subject line.
                </p>
                <p className="privacy-note-text">
                  Please note that opting out of promotional emails does not prevent essential transactional or operational communications (such as responses to active project inquiries or contract notices).
                </p>
              </div>
            </section>

            {/* 11. EXTERNAL LINKS */}
            <section id="external-links" className="privacy-card">
              <div className="privacy-card__header">
                <h2>External Links</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  The D-GATE website may contain links to external third-party websites, digital platforms, or services operated independently of D-GATE.
                </p>
                <p>
                  D-GATE does not control, supervise, or assume responsibility for the privacy standards, cookie policies, or content maintained by third parties. We encourage you to review the privacy policy of any third-party website you visit.
                </p>
              </div>
            </section>

            {/* 12. CAREERS AND RECRUITMENT */}
            <section id="careers-recruitment" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Careers and Recruitment</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  If you submit a job application, resume, portfolio, or career inquiry to D-GATE, we collect your name, contact details, work history, educational credentials, and any supplementary material you voluntarily provide.
                </p>
                <p>
                  This information is processed exclusively for candidate evaluation, background verification, interview coordination, and talent recruitment purposes. Applicant records are retained strictly in accordance with statutory recruitment guidelines.
                </p>
              </div>
            </section>

            {/* 13. CHILDREN'S PRIVACY */}
            <section id="childrens-privacy" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Children&apos;s Privacy</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  The D-GATE website and our professional services are directed toward business professionals and enterprises. They are not designed for or intentionally directed to children.
                </p>
                <p>
                  We do not knowingly collect personal information from individuals under the age of majority. If we become aware that personal data of a minor has been collected without verifiable parental or guardian consent, we will take immediate steps to permanently remove such records.
                </p>
              </div>
            </section>

            {/* 14. INTERNATIONAL PROCESSING */}
            <section id="international-processing" className="privacy-card">
              <div className="privacy-card__header">
                <h2>International Processing</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  Certain cloud hosting, infrastructure, or technical service partners utilized by D-GATE may maintain servers or processing operations outside of India.
                </p>
                <p>
                  Whenever personal information is transferred, stored, or processed internationally, D-GATE seeks to ensure that such processing adheres to recognized data-protection standards and incorporates appropriate contractual and legal safeguards.
                </p>
              </div>
            </section>

            {/* 15. CHANGES TO THIS PRIVACY POLICY */}
            <section id="policy-changes" className="privacy-card">
              <div className="privacy-card__header">
                <h2>Changes to This Privacy Policy</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  We may update or revise this Privacy Policy periodically to reflect changes in our operational procedures, website features, technology integrations, business models, or statutory legal requirements.
                </p>
                <p>
                  The &ldquo;Last Updated&rdquo; date displayed at the top of this page indicates the most recent revision. Any updates take effect immediately upon publication on this website. Your continued use of the website following changes constitutes acknowledgment of the revised Privacy Policy.
                </p>
              </div>
            </section>

            {/* 16. CONTACT US */}
            <section id="contact-us" className="privacy-card privacy-card--contact">
              <div className="privacy-card__header">
                <h2>Contact Us</h2>
              </div>
              <div className="privacy-card__body">
                <p>
                  If you have questions, feedback, grievance redressal requests, or concerns regarding this Privacy Policy or our data management practices, please contact our team:
                </p>

                <div className="privacy-contact-box">
                  <div className="privacy-contact-item">
                    <div className="privacy-contact-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <strong>D-GATE Integrated Services</strong>
                      <p>Bengaluru, Karnataka, India</p>
                    </div>
                  </div>

                  <div className="privacy-contact-item">
                    <div className="privacy-contact-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <strong>Email Address:</strong>
                      <p>
                        <a href="mailto:info@dgateis.com">info@dgateis.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="privacy-contact-item">
                    <div className="privacy-contact-icon">
                      <FaGlobe />
                    </div>
                    <div>
                      <strong>Official Website:</strong>
                      <p>
                        <a href="https://www.dgateis.com" target="_blank" rel="noopener noreferrer">
                          www.dgateis.com <FaExternalLinkAlt className="privacy-ext-icon" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="privacy-contact-cta">
                  <Link to="/contact" className="privacy-btn-primary">
                    Contact Us Directly &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* BACK TO TOP BUTTON */}
            <div className="privacy-back-to-top">
              <button type="button" onClick={scrollToTop}>
                <FaArrowUp /> Back to Top
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* FULL-WIDTH FOOTER */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
