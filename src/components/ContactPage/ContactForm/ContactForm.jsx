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
  FaArrowRight,
  FaCheckCircle,
  FaExclamationCircle,
  FaWhatsapp,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   SERVICE OPTIONS
========================================================= */

const services = [
  "Digital Engineering",
  "Cloud Solutions",
  "Data & Analytics",
  "AI & Automation",
  "Cyber Security",
  "Engineering Services",
  "Other",
];


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

  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappMessage =
    "Hello DGATE Integrated Services, I would like to discuss a project with your team.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


/* =========================================================
   COMPONENT
========================================================= */

function ContactForm() {
  const sectionRef = useRef(null);

  const [formData, setFormData] =
    useState(initialFormData);

  const [isSending, setIsSending] =
    useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  /* =========================================================
     FADE-ONLY SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const reduceMotion =
      window.matchMedia(
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
          ".contact-page-form__header",
          {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity",
          }
        )

        .from(
          ".contact-page-form__form",
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "opacity",
          },
          "-=0.15"
        );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));


    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };


  /* =========================================================
     FORM SUBMIT
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


    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


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


      setFormData(initialFormData);

    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn't send your message right now. Please try again shortly.",
      });

    } finally {
      setIsSending(false);
    }
  };


  return (
    <section
      id="contact-form"
      className="contact-page-form"
      ref={sectionRef}
      aria-labelledby="contact-page-form-title"
    >
      <div className="container">

        <div className="contact-page-form__card">


          {/* ==========================================
              HEADER
          ========================================== */}

          <div className="contact-page-form__header">

            <div
              className="contact-page-form__header-icon"
              aria-hidden="true"
            >
              <FaPaperPlane />
            </div>


            <div className="contact-page-form__header-text">

              <h2 id="contact-page-form-title">
                Send Us a Message
              </h2>

              <p>
                Fill out the form and our team will get
                back to you shortly.
              </p>

            </div>

          </div>


          {/* ==========================================
              FORM
          ========================================== */}

          <form
            className="contact-page-form__form"
            onSubmit={handleSubmit}
            noValidate={false}
          >


            {/* NAME + EMAIL */}

            <div className="contact-page-form__row">

              <div className="contact-page-form__field">

                <label htmlFor="contact-name">
                  Full Name
                  <span> *</span>
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

              </div>


              <div className="contact-page-form__field">

                <label htmlFor="contact-email">
                  Email Address
                  <span> *</span>
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            {/* COMPANY + PHONE */}

            <div className="contact-page-form__row">

              <div className="contact-page-form__field">

                <label htmlFor="contact-company">
                  Company Name
                </label>

                <input
                  type="text"
                  id="contact-company"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />

              </div>


              <div className="contact-page-form__field">

                <label htmlFor="contact-phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />

              </div>

            </div>


            {/* SERVICE */}

            <div className="contact-page-form__field contact-page-form__field--full">

              <label htmlFor="contact-service">
                Select Service
                <span> *</span>
              </label>

              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Service
                </option>

                {services.map((service) => (
                  <option
                    value={service}
                    key={service}
                  >
                    {service}
                  </option>
                ))}

              </select>

            </div>


            {/* MESSAGE */}

            <div className="contact-page-form__field contact-page-form__field--full">

              <label htmlFor="contact-message">
                Tell us about your project or requirement
                <span> *</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your project or requirement"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* ==========================================
                STATUS
            ========================================== */}

            {status.message && (

              <div
                className={`contact-page-form__status contact-page-form__status--${status.type}`}
                role={
                  status.type === "error"
                    ? "alert"
                    : "status"
                }
                aria-live="polite"
              >

                {status.type === "success" ? (
                  <FaCheckCircle aria-hidden="true" />
                ) : (
                  <FaExclamationCircle aria-hidden="true" />
                )}


                <span>
                  {status.message}
                </span>

              </div>

            )}


            {/* ==========================================
                BOTTOM
            ========================================== */}

           {/* ==========================================
    BOTTOM ACTIONS
========================================== */}

        <div className="contact-page-form__bottom">

          <div className="contact-page-form__actions">

            {/* SEND MESSAGE */}

            <button
              type="submit"
              className="contact-page-form__submit"
              disabled={isSending}
            >
              <span>
                {isSending
                  ? "SENDING..."
                  : "SEND MESSAGE"}
              </span>

              {!isSending && (
                <FaArrowRight aria-hidden="true" />
              )}
            </button>


            {/* WHATSAPP */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-form__whatsapp"
              aria-label="Chat with DGATE on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />

              <span>
                CHAT ON WHATSAPP
              </span>
            </a>

          </div>


          {/* PRIVACY */}

          <div className="contact-page-form__privacy">

            <FaLock aria-hidden="true" />

            <span>
              We respect your privacy. Your data is
              safe with us.
            </span>

          </div>

        </div>

          </form>

        </div>

      </div>
    </section>
  );
}


export default ContactForm;