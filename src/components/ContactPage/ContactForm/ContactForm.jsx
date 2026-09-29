import "./ContactForm.css";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import emailjs from "@emailjs/browser";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaPaperPlane,
  FaLock,
  FaCheckCircle,
  FaExclamationCircle,
  FaWhatsapp,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   SERVICE OPTIONS
========================================================= */

const services = [
  "Branding & Creative Solutions",
  "App Development",
  "Web Development",
  "Digital Marketing",
  "Performance Marketing",
  "Email Marketing",
  "Digital PR",
  "WhatsApp Marketing",
  "Push Notification Marketing",
  "Traditional Marketing",
  "Other",
];


/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};


/* =========================================================
   WHATSAPP
========================================================= */

const whatsappNumber = "919538562600";

const whatsappMessage =
  "Hello DGATE Integrated Services, I would like to discuss a project with your team.";

const whatsappLink =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;


/* =========================================================
   CONTACT FORM COMPONENT
========================================================= */

function ContactForm() {

  const sectionRef = useRef(null);

  const [formData, setFormData] =
    useState(initialFormData);

  const [isSending, setIsSending] =
    useState(false);

  const [status, setStatus] =
    useState({
      type: "",
      message: "",
    });


  /* =========================================================
     GSAP SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {

    if (!sectionRef.current) {
      return undefined;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return undefined;
    }


    const ctx = gsap.context(() => {

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 86%",
            once: true,
          },
        });


      timeline
        .from(
          ".contact-page-form__header",
          {
            opacity: 0,
            y: 15,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "all",
          }
        )

        .from(
          ".contact-page-form__form",
          {
            opacity: 0,
            y: 18,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.2"
        );

    }, sectionRef);


    return () => {
      ctx.revert();
    };

  }, []);


  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setFormData(
      (previousData) => ({
        ...previousData,
        [name]: value,
      })
    );


    if (status.message) {

      setStatus({
        type: "",
        message: "",
      });

    }

  };


  /* =========================================================
     FORM SUBMISSION
  ========================================================= */

  const handleSubmit = async (event) => {

    event.preventDefault();


    const name =
      formData.name.trim();

    const email =
      formData.email.trim();

    const company =
      formData.company.trim();

    const phone =
      formData.phone.trim();

    const message =
      formData.message.trim();


    /* =======================================================
       VALIDATION
    ======================================================= */

    if (
      !name ||
      !email ||
      !formData.service ||
      !message
    ) {

      setStatus({
        type: "error",
        message:
          "Please fill in all required fields.",
      });

      return;
    }


    /* =======================================================
       EMAILJS ENVIRONMENT VARIABLES
    ======================================================= */

    const serviceId =
      import.meta.env
        .VITE_EMAILJS_SERVICE_ID;

    const templateId =
      import.meta.env
        .VITE_EMAILJS_TEMPLATE_ID;

    const publicKey =
      import.meta.env
        .VITE_EMAILJS_PUBLIC_KEY;


    if (
      !serviceId ||
      !templateId ||
      !publicKey
    ) {

      setStatus({
        type: "error",
        message:
          "The contact form is temporarily unavailable. Please try again later.",
      });

      return;
    }


    /* =======================================================
       START SENDING
    ======================================================= */

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });


    const templateParams = {

      name,

      email,

      company:
        company ||
        "Not provided",

      phone:
        phone ||
        "Not provided",

      service:
        formData.service,

      message,

    };


    /* =======================================================
       SEND EMAIL
    ======================================================= */

    try {

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        }
      );


      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully.",
      });


      setFormData(
        initialFormData
      );

    }

    catch (error) {

      console.error(
        "EmailJS Error:",
        error
      );


      setStatus({
        type: "error",
        message:
          "We couldn't send your message right now. Please try again shortly.",
      });

    }

    finally {

      setIsSending(false);

    }

  };


  /* =========================================================
     JSX
  ========================================================= */

  return (

    <section
      id="contact-form"
      className="contact-page-form"
      ref={sectionRef}
      aria-labelledby="contact-page-form-title"
    >

      {/* =====================================================
          BOOTSTRAP CONTAINER
      ===================================================== */}

      <div className="container">


        {/* ===================================================
            CENTER FORM
        =================================================== */}

        <div className="row justify-content-center">


          <div className="col-12 col-lg-10 col-xl-8">


            <div className="contact-page-form__card">


              {/* =============================================
                  HEADER
              ============================================= */}

              <div
                className="
                  contact-page-form__header
                  d-flex
                  align-items-start
                "
              >


                {/* ICON */}

                <div
                  className="contact-page-form__header-icon"
                  aria-hidden="true"
                >

                  <FaPaperPlane />

                </div>


                {/* HEADER TEXT */}

                <div className="contact-page-form__header-text">

                  <h2 id="contact-page-form-title">

                    Send Us a Message

                  </h2>


                  <p>

                    Fill out the form and our team
                    will get back to you shortly.

                  </p>

                </div>


              </div>


              {/* =============================================
                  FORM
              ============================================= */}

              <form
                className="contact-page-form__form"
                onSubmit={handleSubmit}
              >


                {/* ===========================================
                    NAME + EMAIL
                =========================================== */}

                <div className="row g-3 mb-3">


                  {/* NAME */}

                  <div className="col-12 col-md-6">


                    <div className="contact-page-form__field">


                      <label
                        htmlFor="contact-name"
                        className="form-label"
                      >

                        Full Name

                        <span>
                          {" "}*
                        </span>

                      </label>


                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />


                    </div>


                  </div>


                  {/* EMAIL */}

                  <div className="col-12 col-md-6">


                    <div className="contact-page-form__field">


                      <label
                        htmlFor="contact-email"
                        className="form-label"
                      >

                        Email Address

                        <span>
                          {" "}*
                        </span>

                      </label>


                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />


                    </div>


                  </div>


                </div>


                {/* ===========================================
                    COMPANY + PHONE
                =========================================== */}

                <div className="row g-3 mb-3">


                  {/* COMPANY */}

                  <div className="col-12 col-md-6">


                    <div className="contact-page-form__field">


                      <label
                        htmlFor="contact-company"
                        className="form-label"
                      >

                        Company Name

                      </label>


                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        className="form-control"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                      />


                    </div>


                  </div>


                  {/* PHONE */}

                  <div className="col-12 col-md-6">


                    <div className="contact-page-form__field">


                      <label
                        htmlFor="contact-phone"
                        className="form-label"
                      >

                        Phone Number

                      </label>


                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />


                    </div>


                  </div>


                </div>


                {/* ===========================================
                    SERVICE
                =========================================== */}

                <div className="mb-3">


                  <div className="contact-page-form__field">


                    <label
                      htmlFor="contact-service"
                      className="form-label"
                    >

                      Select Service

                      <span>
                        {" "}*
                      </span>

                    </label>


                    <select
                      id="contact-service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >


                      <option value="">

                        Select Service

                      </option>


                      {services.map(
                        (service) => (

                          <option
                            key={service}
                            value={service}
                          >

                            {service}

                          </option>

                        )
                      )}


                    </select>


                  </div>


                </div>


                {/* ===========================================
                    MESSAGE
                =========================================== */}

                <div className="mb-3">


                  <div className="contact-page-form__field">


                    <label
                      htmlFor="contact-message"
                      className="form-label"
                    >

                      Tell us about your project
                      or requirement

                      <span>
                        {" "}*
                      </span>

                    </label>


                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control"
                      placeholder="Tell us about your project or requirement"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />


                  </div>


                </div>


                {/* ===========================================
                    STATUS MESSAGE
                =========================================== */}

                {status.message && (

                  <div
                    className={`
                      alert
                      d-flex
                      align-items-center
                      gap-2
                      contact-page-form__status

                      ${
                        status.type ===
                        "success"

                          ? "alert-success contact-page-form__status--success"

                          : "alert-danger contact-page-form__status--error"
                      }
                    `}
                    role={
                      status.type === "error"
                        ? "alert"
                        : "status"
                    }
                    aria-live="polite"
                  >


                    {status.type ===
                    "success" ? (

                      <FaCheckCircle
                        aria-hidden="true"
                      />

                    ) : (

                      <FaExclamationCircle
                        aria-hidden="true"
                      />

                    )}


                    <span>

                      {status.message}

                    </span>


                  </div>

                )}


                {/* ===========================================
                    BOTTOM
                =========================================== */}

                <div className="contact-page-form__bottom">


                  {/* =========================================
                      BUTTONS
                  ========================================= */}

                  <div
                    className="
                      contact-page-form__actions
                      d-flex
                      flex-column
                      flex-sm-row
                      align-items-stretch
                      gap-3
                    "
                  >


                    {/* =======================================
                        SEND MESSAGE
                    ======================================= */}

                    <button
                      type="submit"
                      className="btn contact-page-form__submit"
                      disabled={isSending}
                    >
                      {!isSending && (
                        <i
                          className="bi bi-chat-left-text"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {isSending ? "SENDING..." : "SEND MESSAGE"}
                      </span>
                    </button>

                    {/* =======================================
                        WHATSAPP
                    ======================================= */}

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        btn
                        contact-page-form__whatsapp
                      "
                      aria-label="Chat with DGATE on WhatsApp"
                    >


                      <FaWhatsapp
                        aria-hidden="true"
                      />


                      <span>

                        CHAT ON WHATSAPP

                      </span>


                    </a>


                  </div>


                  {/* =========================================
                      PRIVACY
                  ========================================= */}

                  <div
                    className="
                      contact-page-form__privacy
                      d-flex
                      align-items-center
                      gap-2
                    "
                  >


                    <FaLock
                      aria-hidden="true"
                    />


                    <span>

                      We respect your privacy.
                      Your data is safe with us.

                    </span>


                  </div>


                </div>


              </form>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default ContactForm;