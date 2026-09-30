import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  FaUsers,
  FaDatabase,
  FaSyncAlt,
} from "react-icons/fa";

import "./Details.css";


/* =========================================================
   SAME GOOGLE APPS SCRIPT URL
========================================================= */

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzFRMRflBsXts2_4WP_BWGYaJScQSEBpLHEStpOaqe_oKoNKFygyEqr4ZAr9OllRKfLkQ/exec";


/* =========================================================
   LOAD VISITORS FROM GOOGLE SHEET
========================================================= */

const getGoogleVisitors =
  () => {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        const callbackName =
          `dgateVisitors_${Date.now()}`;


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
                  "Request timeout"
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
                "Unable to load visitor data."
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
   DETAILS
========================================================= */

function Details() {

  const [
    leads,
    setLeads,
  ] = useState([]);


  const [
    loading,
    setLoading,
  ] = useState(true);


  const [
    error,
    setError,
  ] = useState("");


  /* =========================================================
     LOAD DATA
  ========================================================= */

  const loadLeads =
    useCallback(
      async () => {

        setLoading(true);

        setError("");


        try {

          const visitors =
            await getGoogleVisitors();


          setLeads(
            visitors
          );

        }

        catch (error) {

          console.error(
            "Visitor load error:",
            error
          );


          setLeads([]);


          setError(
            "Unable to load data from Google Sheet."
          );

        }

        finally {

          setLoading(false);

        }

      },
      []
    );


  useEffect(
    () => {

      loadLeads();

    },
    [
      loadLeads,
    ]
  );


  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formatDate =
    (date) => {

      if (!date) {
        return "-";
      }


      const parsedDate =
        new Date(
          date
        );


      if (
        Number.isNaN(
          parsedDate.getTime()
        )
      ) {

        return date;

      }


      return parsedDate
        .toLocaleString(
          "en-IN",
          {

            dateStyle:
              "medium",

            timeStyle:
              "short",

          }
        );

    };


  return (

    <main className="details-page">

      <div className="container details-container">


        {/* HEADER */}

        <header className="details-header">

          <div className="details-header__content">

            <span className="details-eyebrow">
              D-GATE
            </span>


            <h1>
              Website Notifications
            </h1>


            <p>
              People who asked to be notified
              when the website goes live.
            </p>

          </div>


          <div className="details-total-card">

            <span className="details-total-icon">

              <FaUsers />

            </span>


            <div>

              <strong>
                {leads.length}
              </strong>


              <span>
                Total Responses
              </span>

            </div>

          </div>

        </header>


        {/* TABLE */}

        <section className="details-table-card">


          {/* REFRESH */}

          <div
            style={{

              display: "flex",

              justifyContent:
                "flex-end",

              padding:
                "12px 16px",

            }}
          >

            <button
              type="button"
              className="details-delete"
              onClick={loadLeads}
              disabled={loading}
              title="Refresh Google Sheet data"
            >

              <FaSyncAlt />

            </button>

          </div>


          {/* ERROR */}

          {error && (

            <div
              style={{

                color:
                  "#ff6961",

                padding:
                  "0 16px 16px",

                fontSize:
                  "13px",

              }}
            >

              {error}

            </div>

          )}


          {/* LOADING */}

          {loading ? (

            <div className="details-empty">

              <FaDatabase />


              <h3>
                Loading visitor data...
              </h3>

            </div>

          ) : leads.length === 0 ? (

            <div className="details-empty">

              <FaDatabase />


              <h3>
                No details submitted yet
              </h3>


              <p>
                New Google Sheet responses
                will appear here.
              </p>

            </div>

          ) : (

            <div className="table-responsive">

              <table className="table details-table">

                <thead>

                  <tr>

                    <th>
                      #
                    </th>

                    <th>
                      Name
                    </th>

                    <th>
                      Phone
                    </th>

                    <th>
                      Email
                    </th>

                    <th>
                      Company
                    </th>

                    <th>
                      Submitted
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {leads.map(
                    (
                      lead,
                      index
                    ) => (

                      <tr
                        key={
                          lead.id ||
                          index
                        }
                      >

                        <td>
                          {index + 1}
                        </td>


                        <td>

                          <strong>
                            {lead.name}
                          </strong>

                        </td>


                        <td>
                          {lead.phone}
                        </td>


                        <td>
                          {lead.email}
                        </td>


                        <td>
                          {lead.company}
                        </td>


                        <td>

                          {formatDate(
                            lead.submittedAt
                          )}

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </div>

    </main>

  );
}


export default Details;
