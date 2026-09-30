import { useState } from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "./Production.css";

import dgateLogo from "../../assets/images/dgate-logo.png";


/* =========================================================
   GOOGLE APPS SCRIPT URL
========================================================= */

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzFRMRflBsXts2_4WP_BWGYaJScQSEBpLHEStpOaqe_oKoNKFygyEqr4ZAr9OllRKfLkQ/exec";



/* =========================================================
   WAIT
========================================================= */

const wait = (milliseconds) =>
  new Promise(
    (resolve) =>
      setTimeout(
        resolve,
        milliseconds
      )
  );


/* =========================================================
   READ GOOGLE SHEET USING JSONP
========================================================= */

const getGoogleVisitors =
  () => {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        const callbackName =
          `dgateCallback_${Date.now()}`;


        const script =
          document.createElement(
            "script"
          );


        const timeout =
          setTimeout(
            () => {

              cleanup();

              reject(
                new Error(
                  "Google Sheet connection timeout."
                )
              );

            },
            15000
          );


        const cleanup =
          () => {

            clearTimeout(
              timeout
            );


            if (
              script.parentNode
            ) {

              script.parentNode
                .removeChild(
                  script
                );

            }


            try {

              delete window[
                callbackName
              ];

            }

            catch {

              window[
                callbackName
              ] = undefined;

            }

          };


        window[
          callbackName
        ] = (
          response
        ) => {

          cleanup();


          if (
            !response ||
            response.success !== true
          ) {

            reject(
              new Error(
                response?.message ||
                "Unable to read Google Sheet."
              )
            );


            return;

          }


          resolve(
            Array.isArray(
              response.visitors
            )
              ? response.visitors
              : []
          );

        };


        script.onerror =
          () => {

            cleanup();


            reject(
              new Error(
                "Unable to connect to Google Sheet."
              )
            );

          };


        script.src =
          `${GOOGLE_SHEET_URL}?callback=${callbackName}&t=${Date.now()}`;


        script.async =
          true;


        document.body
          .appendChild(
            script
          );

      }
    );

  };


/* =========================================================
   LOCAL STORAGE
========================================================= */

function Production() {

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      company: "",
    });


  const [errors, setErrors] =
    useState({});


  const [submitting, setSubmitting] =
    useState(false);


  const [submitError, setSubmitError] =
    useState("");


  const [submitted, setSubmitted] =
    useState(false);


  const [submittedName, setSubmittedName] =
    useState("");


  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;



    setFormData(
      (previous) => ({
        ...previous,
        [name]: value,
      })
    );


    setErrors(
      (previous) => ({
        ...previous,
        [name]: "",
      })
    );


    setSubmitError("");
  };


  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {


    const nextErrors = {};



    if (!formData.name.trim()) {

      nextErrors.name =
        "Name is required";

    }



    if (!formData.phone.trim()) {

      nextErrors.phone =
        "Phone is required";

    }


    else if (
      !/^[0-9+\-\s()]{8,15}$/.test(
        formData.phone.trim()
      )
    ) {

      nextErrors.phone =
        "Enter a valid phone number";

    }


    if (!formData.email.trim()) {

      nextErrors.email =
        "Email is required";

    }


    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {

      nextErrors.email =
        "Enter a valid email";

    }


    if (!formData.company.trim()) {

      nextErrors.company =
        "Company is required";

    }



    setErrors(nextErrors);


    return (
      Object.keys(nextErrors).length === 0
    );
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit =
  async (event) => {

    event.preventDefault();


    if (submitting) {
      return;
    }


    if (!validateForm()) {
      return;
    }


    setSubmitting(true);

    setSubmitError("");


    const newLead = {

      name:
        formData.name.trim(),

      phone:
        formData.phone.trim(),

      email:
        formData.email
          .trim()
          .toLowerCase(),

      company:
        formData.company.trim(),

    };


    try {

      const body =
        new URLSearchParams();


      body.append(
        "name",
        newLead.name
      );


      body.append(
        "phone",
        newLead.phone
      );


      body.append(
        "email",
        newLead.email
      );


      body.append(
        "company",
        newLead.company
      );


      /* ===============================================
         SEND TO GOOGLE SHEET
      =============================================== */

      await fetch(
        GOOGLE_SHEET_URL,
        {

          method: "POST",

          mode: "no-cors",

          body:
            body,

        }
      );


      /* ===============================================
         VERIFY THAT DATA REALLY EXISTS IN SHEET
      =============================================== */

      let saved =
        false;


      for (
        let attempt = 0;
        attempt < 4;
        attempt++
      ) {

        await wait(
          800
        );


        const visitors =
          await getGoogleVisitors();


        saved =
          visitors.some(
            (visitor) =>

              String(
                visitor.phone || ""
              ).trim() ===
                newLead.phone &&

              String(
                visitor.email || ""
              )
                .trim()
                .toLowerCase() ===
                newLead.email &&

              String(
                visitor.name || ""
              )
                .trim()
                .toLowerCase() ===
                newLead.name
                  .toLowerCase()

          );


        if (saved) {
          break;
        }

      }


      if (!saved) {

        throw new Error(
          "Data was not saved in Google Sheet."
        );

      }


      /* ===============================================
         SUCCESS ONLY AFTER GOOGLE SHEET CONFIRMS
      =============================================== */

      setSubmittedName(
        newLead.name
      );


      setFormData({

        name: "",

        phone: "",

        email: "",

        company: "",

      });


      setErrors({});


      setSubmitted(true);

    }

    catch (error) {

      console.error(
        "Submission error:",
        error
      );


      setSubmitError(
        "Data Google Sheet me save nahi hua. Please try again."
      );

    }

    finally {

      setSubmitting(false);

    }

  };


  /* =========================================================
     CANCEL SUCCESS PAGE
  ========================================================= */

  const handleCancel = () => {

    setSubmitted(false);

    setSubmittedName("");

    setSubmitError("");

    setErrors({});

  };


  return (

    <main className="production-page">

      <div className="production-wrapper">

        <section
          className={`production-card ${
            submitted
              ? "production-card--success"
              : ""
          }`}
        >

          <div className="production-logo-wrap">

            <img
              src={dgateLogo}
              alt="D-GATE Integrated Services"
              className="production-logo"
            />

          </div>


          {submitted ? (

            <div className="production-success">

              <div className="production-success-icon">
                <FaCheck />
              </div>


              <h1>

                Thank You

                {submittedName
                  ? `, ${submittedName}!`
                  : "!"}

              </h1>


              <p className="production-success-message">

                Your details have been
                submitted successfully.

              </p>


              <button
                type="button"
                className="production-cancel-button"
                onClick={handleCancel}
              >

                CANCEL

              </button>

            </div>

          ) : (

            <>

              <div className="production-heading">

                <h1>
                  Something New Is Coming 👀
                </h1>


                <p className="production-highlight">

                  Our website will be back soon —
                  better and ready for you.

                </p>


                <h2>
                  Want to be the first to know?
                </h2>

              </div>


              <form
                className="production-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME */}

                <div className="production-field">

                  <label htmlFor="name">
                    Name
                  </label>


                  <div
                    className={`production-input ${
                      errors.name
                        ? "is-error"
                        : ""
                    }`}
                  >

                    <FaUser />


                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      disabled={
                        submitting
                      }
                    />

                  </div>


                  {errors.name && (

                    <small className="production-error">
                      {errors.name}
                    </small>

                  )}

                </div>


                {/* PHONE */}

                <div className="production-field">

                  <label htmlFor="phone">
                    Phone
                  </label>


                  <div
                    className={`production-input ${
                      errors.phone
                        ? "is-error"
                        : ""
                    }`}
                  >

                    <FaPhoneAlt />


                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      disabled={
                        submitting
                      }
                    />

                  </div>


                  {errors.phone && (

                    <small className="production-error">
                      {errors.phone}
                    </small>

                  )}

                </div>


                {/* EMAIL */}

                <div className="production-field">

                  <label htmlFor="email">
                    Email
                  </label>


                  <div
                    className={`production-input ${
                      errors.email
                        ? "is-error"
                        : ""
                    }`}
                  >

                    <FaEnvelope />


                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      inputMode="email"
                      disabled={
                        submitting
                      }
                    />

                  </div>


                  {errors.email && (

                    <small className="production-error">
                      {errors.email}
                    </small>

                  )}

                </div>


                {/* COMPANY */}

                <div className="production-field">

                  <label htmlFor="company">
                    Company
                  </label>


                  <div
                    className={`production-input ${
                      errors.company
                        ? "is-error"
                        : ""
                    }`}
                  >

                    <FaBuilding />


                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      disabled={
                        submitting
                      }
                    />

                  </div>


                  {errors.company && (

                    <small className="production-error">
                      {errors.company}
                    </small>

                  )}

                </div>


                {submitError && (

                  <div className="production-submit-error">
                    {submitError}
                  </div>

                )}


                <button
                  type="submit"
                  className="production-submit"
                  disabled={submitting}
                >

                  {submitting
                    ? "SUBMITTING..."
                    : "NOTIFY ME"}


                  {!submitting && (
                    <FaArrowRight />
                  )}

                </button>


                <p className="production-final-message">

                  We&apos;ll let you know as soon
                  as we&apos;re live.
                </p>

              </form>

            </>

          )}

        </section>

      </div>

    </main>
  );
}

export default Production;