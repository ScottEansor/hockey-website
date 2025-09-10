import React, { useCallback, useState } from "react";
import { calculateAge } from "../util";

export default function UserCard({ reg }) {
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
        <h4 className="card-title">{parent1FullName}, {parent2FullName}</h4>
        <div className="d-flex flex-column gap-1">
          <h6 className="card-text">Email: <a href={`mailto:${reg.email}`}>{reg.email}</a></h6>
          <h6 className="card-text">Phone: <a href={`tel:${reg.cellPhone}`}>{reg.cellPhone}</a></h6>
        {/* add modals to card that associate relevant players */}
        </div>
      </div>
    </div>
  );
}
