import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaLock,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import "./ContactForm.css";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear previous success/error message
    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.service ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });

      return;
    }

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS configuration:", {
      serviceId,
      templateId,
      publicKeyLoaded: Boolean(publicKey),
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS configuration is missing. Check your .env file."
      );

      setStatus({
        type: "error",
        message:
          "Email configuration is missing. Please check the EmailJS settings.",
      });

      return;
    }

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    const templateParams = {
      name: formData.name.trim(),

      email: formData.email.trim(),

      company: formData.company.trim()
        ? formData.company.trim()
        : "Not provided",

      phone: formData.phone.trim()
        ? formData.phone.trim()
        : "Not provided",

      service: formData.service,

      message: formData.message.trim(),
    };

    try {

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        }
      );

      console.log(
        "Email sent successfully:",
        response.status,
        response.text
      );


      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully.",
      });


      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {

      console.error("FULL EMAILJS ERROR:", error);
      console.error("EMAILJS STATUS:", error?.status);
      console.error("EMAILJS TEXT:", error?.text);

      setStatus({
        type: "error",
        message:
          error?.text ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="contact-form-section"
      id="contact-form"
    >
      <div className="contact-form-container">

        <div className="contact-form-header">

          <div className="contact-form-header-icon">
            <FaPaperPlane />
          </div>

          <div className="contact-form-header-text">

            <h2>
              Send Us a Message
            </h2>

            <p>
              Fill out the form and our team will get back
              to you shortly.
            </p>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="contact-form-row">

            <div className="contact-input-group">

              <label htmlFor="name">
                Full Name
                <span> *</span>
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="contact-input-group">

              <label htmlFor="email">
                Email Address
                <span> *</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="contact-form-row">

            {/* COMPANY */}

            <div className="contact-input-group">

              <label htmlFor="company">
                Company Name
              </label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />

            </div>


            <div className="contact-input-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="contact-input-group contact-full-width">

            <label htmlFor="service">
              Select Service
              <span> *</span>
            </label>

            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Service
              </option>

              <option value="Digital Engineering">
                Digital Engineering
              </option>

              <option value="Cloud Solutions">
                Cloud Solutions
              </option>

              <option value="Data & Analytics">
                Data & Analytics
              </option>

              <option value="AI & Automation">
                AI & Automation
              </option>

              <option value="Cyber Security">
                Cyber Security
              </option>

              <option value="Engineering Services">
                Engineering Services
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          <div className="contact-input-group contact-full-width">

            <label htmlFor="message">
              Tell us about your project or requirement
              <span> *</span>
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or requirement"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>


          {status.message && (

            <div
              className={`contact-form-status ${
                status.type === "success"
                  ? "contact-form-success"
                  : "contact-form-error"
              }`}
            >

              {status.type === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationCircle />
              )}

              <span>
                {status.message}
              </span>

            </div>

          )}

          <div className="contact-form-bottom">

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSending}
            >

              <span>
                {isSending
                  ? "SENDING..."
                  : "SEND MESSAGE"}
              </span>

              {!isSending && (
                <FaArrowRight />
              )}

            </button>

            <div className="contact-privacy">

              <FaLock />

              <span>
                We respect your privacy. Your data is safe
                with us.
              </span>

            </div>

          </div>

        </form>

      </div>
    </section>
  );
}

export default ContactForm;