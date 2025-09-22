import { useState } from "react";
import { calculateAge } from "../util";
import Modal from "./Modal";
export default function PlayerCard({ player, hideParentButton }) {
  const playerAge = calculateAge(player.birthday);
  const [showNotes, setShowNotes] = useState(false);
  const [showParents, setShowParents] = useState(false)
  console.log(player.parent)
  return (
    <div
      className="card"
      style={{ width: "calc((100% - 2rem) / 3)", minWidth: "252px" }}
    >
      <div className="card-body">
        <h4 className="card-title">
          {player.playerFirstName} {player.playerLastName}
        </h4>
        <h6>Age: {playerAge}</h6>
        <div className="d-flex flex-column gap-1">

          {/*
          - Starting Note Modal
            - make it different than accordian in registration card
            - finish rest of player card. 
          */}
          <div className="card-text">Level: {player.level}</div>
          <div className="d-flex">
            <button
              className="btn btn-primary"
              onClick={() => setShowNotes(true)}
            >
              Notes
            </button>
            {!hideParentButton && <button className="btn btn-primary" onClick={()=> setShowParents(true)}>
              Parents
            </button>}
          </div>

          {/* Note modal below  */}
          <Modal open={showNotes} onClose={()=> setShowNotes(false)} header={<h5 className="modal-title">{player.playerFirstName} {player.playerLastName} - Notes </h5>}>
          <p>{player.notes}</p>
          </Modal>
          {/* Parent modal below */}
          <Modal open={showParents} onClose={()=>setShowParents(false)} header={<h5 className="modal-title">{player.playerFirstName} {player.playerLastName} - Parents </h5>}>
            <div>
              <h2>Parent 1:</h2>
              <p>{player.parent.parentFirstName} {player.parent.parentLastName}</p>
              <h2>Parent 2:</h2>
              <p>{player.parent.secondParentFirstName} {player.parent.secondParentLastName}</p>
              <h2>Contact Info:</h2>
              <p>{player.parent.email}</p>
              <p>{player.parent.cellPhone}</p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
