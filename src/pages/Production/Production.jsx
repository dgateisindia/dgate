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
   GOOGLE SHEET API
========================================================= */

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwNZTIAtXSHMMQ5CtUnqmpG9MmQCTUWa0wc-MtLYM0U2QQzyi4u75_VX6sSlQsiDAxv5g/exec";


/* =========================================================
   INITIAL FORM DATA
========================================================= */

const INITIAL_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  company: "",
};


/* =========================================================
   PRODUCTION PAGE
========================================================= */

function Production() {

  /* =========================================================
     STATE
  ========================================================= */

  const [
    formData,
    setFormData,
  ] = useState(
    INITIAL_FORM_DATA
  );


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

  const handleChange = (
    event
  ) => {

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

  const validateForm = () => {

    const nextErrors = {};


    /* NAME */

    if (
      !formData.name.trim()
    ) {

      nextErrors.name =
        "Name is required";

    }

    else if (
      formData.name
        .trim()
        .length < 2
    ) {

      nextErrors.name =
        "Enter a valid name";

    }


    /* PHONE */

    if (
      !formData.phone.trim()
    ) {

      nextErrors.phone =
        "Phone is required";

    }

    else {

      const cleanedPhone =
        formData.phone
          .replace(
            /[\s\-()]/g,
            ""
          );


      if (
        !/^\+?[0-9]{8,15}$/
          .test(
            cleanedPhone
          )
      ) {

        nextErrors.phone =
          "Enter a valid phone number";

      }

    }


    /* EMAIL */

    if (
      !formData.email.trim()
    ) {

      nextErrors.email =
        "Email is required";

    }

    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(
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

  const saveLocalBackup = (
    submittedData
  ) => {

    try {

      const newLead = {

        id:
          Date.now(),

        name:
          submittedData.name,

        phone:
          submittedData.phone,

        email:
          submittedData.email,

        company:
          submittedData.company,

        createdAt:
          new Date()
            .toISOString(),

      };


      const savedData =
        localStorage.getItem(
          "dgateProductionLeads"
        );


      let existingLeads =
        [];


      if (
        savedData
      ) {

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

        catch (
          error
        ) {

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

    catch (
      error
    ) {

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
    async (
      event
    ) => {

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


      /* =====================================================
         INTERNET CHECK
      ===================================================== */

      if (
        !navigator.onLine
      ) {

        setSubmitError(
          "No internet connection. Please check your connection and try again."
        );

        return;

      }


      try {

        setSubmitting(
          true
        );


        setSubmitError(
          ""
        );


        /* ===================================================
           CLEAN FORM DATA
        =================================================== */

        const submittedData = {

          name:
            formData.name
              .trim(),

          phone:
            formData.phone
              .trim(),

          email:
            formData.email
              .trim()
              .toLowerCase(),

          company:
            formData.company
              .trim(),

        };


        const currentName =
          submittedData.name;


        /* ===================================================
           CREATE GOOGLE SHEET BODY
        =================================================== */

        const body =
          new URLSearchParams();


        body.append(
          "name",
          submittedData.name
        );


        body.append(
          "phone",
          submittedData.phone
        );


        body.append(
          "email",
          submittedData.email
        );


        body.append(
          "company",
          submittedData.company
        );


        body.append(
          "source",
          window.location.hostname
        );


        body.append(
          "submittedAt",
          new Date()
            .toISOString()
        );


        /* ===================================================
           REQUEST TIMEOUT
        =================================================== */

        const controller =
          new AbortController();


        const timeoutId =
          window.setTimeout(
            () => {

              controller.abort();

            },
            15000
          );


        /* ===================================================
           SEND TO GOOGLE SHEET
        =================================================== */

        try {

          await fetch(
            GOOGLE_SHEET_URL,
            {

              method:
                "POST",

              mode:
                "no-cors",

              headers: {

                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",

              },

              body:
                body.toString(),

              signal:
                controller.signal,

            }
          );

        }

        finally {

          window.clearTimeout(
            timeoutId
          );

        }


        /* ===================================================
           LOCAL BACKUP
        =================================================== */

        saveLocalBackup(
          submittedData
        );


        /* ===================================================
           STORE NAME
        =================================================== */

        setSubmittedName(
          currentName
        );


        /* ===================================================
           CLEAR FORM
        =================================================== */

        setFormData(
          INITIAL_FORM_DATA
        );


        setErrors(
          {}
        );


        /* ===================================================
           SHOW THANK YOU
        =================================================== */

        setSubmitted(
          true
        );

      }

      catch (
        error
      ) {

        console.error(
          "Google Sheet submission error:",
          error
        );


        if (
          error.name ===
          "AbortError"
        ) {

          setSubmitError(
            "Request took too long. Please try again."
          );

        }

        else {

          setSubmitError(
            "Unable to submit right now. Please try again."
          );

        }

      }

      finally {

        setSubmitting(
          false
        );

      }

    };


  /* =========================================================
     CANCEL
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


      setFormData(
        INITIAL_FORM_DATA
      );

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
              SUCCESS SCREEN
          ================================================= */}

          {submitted ? (

            <div
              className="production-success"
            >

              <div
                className="production-success-icon"
              >

                <FaCheck />

              </div>


              <h1>

                Thank You

                {submittedName
                  ? `, ${submittedName}!`
                  : "!"}

              </h1>


              <p
                className="production-success-message"
              >

                Your details have been
                submitted successfully.

              </p>


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
                      disabled={
                        submitting
                      }
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
                      inputMode="tel"
                      disabled={
                        submitting
                      }
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
                      inputMode="email"
                      disabled={
                        submitting
                      }
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
                      disabled={
                        submitting
                      }
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
                    ERROR
                ================================================= */}

                {submitError && (

                  <div
                    className="production-submit-error"
                    role="alert"
                  >

                    {submitError}

                  </div>

                )}


                {/* =================================================
                    SUBMIT BUTTON
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