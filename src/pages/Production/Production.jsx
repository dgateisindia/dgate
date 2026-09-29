import {
  useState,
} from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "./Production.css";

import dgateLogo
  from "../../assets/images/dgate-logo.png";


/* =========================================================
   GOOGLE APPS SCRIPT WEB APP
========================================================= */

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzjLZCU7xRrIHIko2g9utTcgpmf2QrPhSpev7HUEoppAxdmT7_vWQ4hxjl3gkLYYxrung/exec";


/* =========================================================
   PRODUCTION
========================================================= */

function Production() {

  const [
    formData,
    setFormData,
  ] = useState({

    name: "",

    phone: "",

    email: "",

    company: "",

  });


  const [
    errors,
    setErrors,
  ] = useState({});


  const [
    submitting,
    setSubmitting,
  ] = useState(false);


  const [
    submitError,
    setSubmitError,
  ] = useState("");


  const [
    submitted,
    setSubmitted,
  ] = useState(false);


  const [
    submittedName,
    setSubmittedName,
  ] = useState("");


  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange =
    (event) => {

      const {
        name,
        value,
      } = event.target;


      setFormData(
        (previous) => ({

          ...previous,

          [name]:
            value,

        })
      );


      setErrors(
        (previous) => ({

          ...previous,

          [name]:
            "",

        })
      );


      setSubmitError("");

    };


  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm =
    () => {

      const nextErrors =
        {};


      /* NAME */

      if (
        !formData.name.trim()
      ) {

        nextErrors.name =
          "Name is required";

      }


      /* PHONE */

      if (
        !formData.phone.trim()
      ) {

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


      /* EMAIL */

      if (
        !formData.email.trim()
      ) {

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


      /* COMPANY */

      if (
        !formData.company.trim()
      ) {

        nextErrors.company =
          "Company is required";

      }


      setErrors(
        nextErrors
      );


      return (
        Object.keys(
          nextErrors
        ).length === 0
      );

    };


  /* =========================================================
     LOCAL STORAGE BACKUP
  ========================================================= */

  const saveLocalBackup =
    () => {

      try {

        const newLead = {

          id:
            Date.now(),

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

          createdAt:
            new Date()
              .toISOString(),

        };


        let existingLeads =
          [];


        const savedData =
          localStorage.getItem(
            "dgateProductionLeads"
          );


        if (savedData) {

          try {

            const parsedData =
              JSON.parse(
                savedData
              );


            if (
              Array.isArray(
                parsedData
              )
            ) {

              existingLeads =
                parsedData;

            }

          }

          catch (error) {

            console.warn(
              "Unable to read local backup:",
              error
            );

          }

        }


        localStorage.setItem(

          "dgateProductionLeads",

          JSON.stringify([

            ...existingLeads,

            newLead,

          ])

        );

      }

      catch (error) {

        console.warn(
          "Unable to save local backup:",
          error
        );

      }

    };


  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit =
    async (event) => {

      event.preventDefault();


      if (
        submitting
      ) {

        return;

      }


      if (
        !validateForm()
      ) {

        return;

      }


      try {

        setSubmitting(
          true
        );


        setSubmitError(
          ""
        );


        const currentName =
          formData.name.trim();


        /* =================================================
           GOOGLE SHEET DATA
        ================================================= */

        const body =
          new URLSearchParams();


        body.append(
          "name",
          formData.name.trim()
        );


        body.append(
          "phone",
          formData.phone.trim()
        );


        body.append(
          "email",
          formData.email
            .trim()
            .toLowerCase()
        );


        body.append(
          "company",
          formData.company.trim()
        );


        /* =================================================
           SEND TO GOOGLE SHEET
        ================================================= */

        await fetch(
          GOOGLE_SHEET_URL,
          {

            method:
              "POST",

            mode:
              "no-cors",

            body,

          }
        );


        /* =================================================
           LOCAL BACKUP
        ================================================= */

        saveLocalBackup();


        /* =================================================
           STORE NAME FOR THANK YOU
        ================================================= */

        setSubmittedName(
          currentName
        );


        /* =================================================
           CLEAR FORM DATA
        ================================================= */

        setFormData({

          name: "",

          phone: "",

          email: "",

          company: "",

        });


        /* =================================================
           SHOW THANK YOU

           IMPORTANT:

           There is NO timer.
           There is NO redirect.
           There is NO animation.
        ================================================= */

        setSubmitted(
          true
        );

      }

      catch (error) {

        console.error(
          "Google Sheet submission error:",
          error
        );


        setSubmitError(
          "Unable to submit right now. Please try again."
        );

      }

      finally {

        setSubmitting(
          false
        );

      }

    };


  /* =========================================================
     CANCEL

     Thank You
         ↓
     Cancel
         ↓
     Form
  ========================================================= */

  const handleCancel =
    () => {

      setSubmitted(
        false
      );


      setSubmittedName(
        ""
      );


      setSubmitError(
        ""
      );


      setErrors(
        {}
      );


      /*
        Form was already cleared
        after successful submission.

        Cancel simply switches back
        to the empty form.
      */

    };


  /* =========================================================
     UI
  ========================================================= */

  return (

    <main
      className="production-page"
    >

      <div
        className="production-wrapper"
      >

        <section
          className={`production-card ${
            submitted
              ? "production-card--success"
              : ""
          }`}
        >


          {/* =================================================
              LOGO
          ================================================= */}

          <div
            className="production-logo-wrap"
          >

            <img
              src={
                dgateLogo
              }
              alt="D-GATE Integrated Services"
              className="production-logo"
            />

          </div>


          {/* =================================================
              THANK YOU
          ================================================= */}

          {submitted ? (

            <div
              className="production-success"
            >

              {/* SUCCESS ICON */}

              <div
                className="production-success-icon"
              >

                <FaCheck />

              </div>


              {/* THANK YOU */}

              <h1>

                Thank You

                {submittedName
                  ? `, ${submittedName}!`
                  : "!"}

              </h1>


              {/* MESSAGE */}

              <p
                className="production-success-message"
              >

                Your details have been
                submitted successfully.

              </p>


              {/* CANCEL */}

              <button
                type="button"
                className="production-cancel-button"
                onClick={
                  handleCancel
                }
              >

                CANCEL

              </button>

            </div>

          ) : (

            <>


              {/* =================================================
                  HEADING
              ================================================= */}

              <div
                className="production-heading"
              >

                <h1>
                  Something New Is Coming 👀
                </h1>


                <p
                  className="production-highlight"
                >

                  Our website will be back soon —
                  better and ready for you.

                </p>


                <h2>
                  Want to be the first to know?
                </h2>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="production-form"
                onSubmit={
                  handleSubmit
                }
                noValidate
              >


                {/* NAME */}

                <div
                  className="production-field"
                >

                  <label
                    htmlFor="name"
                  >

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
                      value={
                        formData.name
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="name"
                    />

                  </div>


                  {errors.name && (

                    <small
                      className="production-error"
                    >

                      {errors.name}

                    </small>

                  )}

                </div>


                {/* PHONE */}

                <div
                  className="production-field"
                >

                  <label
                    htmlFor="phone"
                  >

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
                      value={
                        formData.phone
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="tel"
                    />

                  </div>


                  {errors.phone && (

                    <small
                      className="production-error"
                    >

                      {errors.phone}

                    </small>

                  )}

                </div>


                {/* EMAIL */}

                <div
                  className="production-field"
                >

                  <label
                    htmlFor="email"
                  >

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
                      value={
                        formData.email
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="email"
                    />

                  </div>


                  {errors.email && (

                    <small
                      className="production-error"
                    >

                      {errors.email}

                    </small>

                  )}

                </div>


                {/* COMPANY */}

                <div
                  className="production-field"
                >

                  <label
                    htmlFor="company"
                  >

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
                      value={
                        formData.company
                      }
                      onChange={
                        handleChange
                      }
                      autoComplete="organization"
                    />

                  </div>


                  {errors.company && (

                    <small
                      className="production-error"
                    >

                      {errors.company}

                    </small>

                  )}

                </div>


                {/* =================================================
                    SUBMIT ERROR
                ================================================= */}

                {submitError && (

                  <div
                    className="production-submit-error"
                  >

                    {submitError}

                  </div>

                )}


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  className="production-submit"
                  disabled={
                    submitting
                  }
                >

                  {submitting
                    ? "SUBMITTING..."
                    : "NOTIFY ME"}


                  {!submitting && (

                    <FaArrowRight />

                  )}

                </button>


                {/* =================================================
                    BOTTOM MESSAGE
                ================================================= */}

                <p
                  className="production-final-message"
                >

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