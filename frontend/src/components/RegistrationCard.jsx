import React, { useCallback, useState } from "react";
import { calculateAge } from "../util";

export default function RegistrationCard({ reg }) {
  const [noteOpen, setNoteOpen] = useState(false);

  const playerFullName = `${reg.playerFirstName} ${reg.playerLastName}`;
  const parent1FullName = `${reg.parentFirstName} ${reg.parentLastName}`;
  const parent2FullName =
    reg.secondParentFirstName && reg.secondParentLastName
      ? `${reg.secondParentFirstName} ${reg.secondParentLastName}`
      : "";
  const playerAge = calculateAge(reg.birthday);

  const handleToggleNote = useCallback(() => {
    setNoteOpen((prev) => !prev);
  }, []);

  return (
    <div
      className="card"
      style={{ width: "calc((100% - 2rem) / 3)", minWidth: "252px" }}
    >
      <div className="card-body">
        <h4 className="card-title">{playerFullName}</h4>
        <h6>Age: {playerAge}</h6>
        <div className="d-flex flex-column gap-1">
          <div className="card-text">
            Parents: {parent1FullName}, {parent2FullName}
          </div>
          <div className="card-text">Level: {reg.level}</div>
          <div className="card-text">Email: {reg.email}</div>
          <div className="card-text">Phone: {reg.phone}</div>
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  aria-expanded="true"
                  onClick={handleToggleNote}
                >
                  Note:
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  noteOpen ? "show" : ""
                }`} //here is where the class defines if its open or closed --review here--
              >
                <div className="accordion-body">{reg.notes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
