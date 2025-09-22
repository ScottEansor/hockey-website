import React, { useCallback, useState } from "react";
import { calculateAge } from "../util";
import Modal from "./Modal";
import { Fragment } from "react";

export default function UserCard({ reg }) {
  const [showPlayers, setShowPlayers] = useState(false);

  const playerFullName = `${reg.playerFirstName} ${reg.playerLastName}`;
  const parent1FullName = `${reg.parentFirstName} ${reg.parentLastName}`;
  const parent2FullName =
    reg.secondParentFirstName && reg.secondParentLastName
      ? `${reg.secondParentFirstName} ${reg.secondParentLastName}`
      : "";

  return (
    <div
      className="card"
      style={{ width: "calc((100% - 2rem) / 3)", minWidth: "252px" }}
    >
      <div className="card-body">
        <h4 className="card-title">
          {parent1FullName}, {parent2FullName}
        </h4>
        <div className="d-flex flex-column gap-1">
          <h6 className="card-text">
            Email: <a href={`mailto:${reg.email}`}>{reg.email}</a>
          </h6>
          <h6 className="card-text">
            Phone: <a href={`tel:${reg.cellPhone}`}>{reg.cellPhone}</a>
          </h6>
          {/* add modals to card that associate relevant players */}
        </div>
        <div className="d-flex">
          <button
            className="btn btn-primary"
            onClick={() => setShowPlayers(true)}
          >
            Players
          </button>
        </div>
        <Modal
          open={showPlayers}
          onClose={() => setShowPlayers(false)}
          header={
            <h5 className="modal-title">
              {parent1FullName}, {parent2FullName} - Players
            </h5>
          }
        >
          <div>
            {reg.players.map((player) => (<Fragment key={player._id}>
              <h2>{player.playerFirstName + " " + player.playerLastName}</h2>
              <p>Age: {calculateAge(player.birthday)}</p>
              <p>Level: {player.level}</p>
              </Fragment>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
}
