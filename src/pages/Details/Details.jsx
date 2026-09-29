import {
  useEffect,
  useState,
} from "react";

import {
  FaTrash,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

import "./Details.css";

function Details() {
  const [leads, setLeads] = useState([]);

  const loadLeads = () => {
    const savedLeads =
      JSON.parse(
        localStorage.getItem(
          "dgateProductionLeads"
        )
      ) || [];

    setLeads(savedLeads);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const deleteLead = (id) => {
    const updatedLeads =
      leads.filter(
        (lead) => lead.id !== id
      );

    setLeads(updatedLeads);

    localStorage.setItem(
      "dgateProductionLeads",
      JSON.stringify(updatedLeads)
    );
  };

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleString(
      "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
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

          {/* TOTAL RESPONSES */}

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

          {leads.length === 0 ? (

            <div className="details-empty">

              <FaDatabase />

              <h3>
                No details submitted yet
              </h3>

              <p>
                New form responses will
                appear here.
              </p>

            </div>

          ) : (

            <div className="table-responsive">

              <table className="table details-table">

                <thead>

                  <tr>

                    <th>#</th>

                    <th>Name</th>

                    <th>Phone</th>

                    <th>Email</th>

                    <th>Company</th>

                    <th>Submitted</th>

                    <th>Action</th>

                  </tr>

                </thead>

                <tbody>

                  {leads.map(
                    (lead, index) => (

                      <tr key={lead.id}>

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
                            lead.createdAt
                          )}
                        </td>

                        <td>

                          <button
                            type="button"
                            className="details-delete"
                            onClick={() =>
                              deleteLead(
                                lead.id
                              )
                            }
                            aria-label={`Delete ${lead.name}`}
                          >
                            <FaTrash />
                          </button>

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