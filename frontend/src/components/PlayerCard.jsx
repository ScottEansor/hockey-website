import { calculateAge } from "../util";
export default function PlayerCard({ player }) {
  const playerAge = calculateAge(player.birthday);
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
          {player.parent.parentFirstName &&
            <div className="card-text">
              Parents: {player.parent.parentFirstName}{" "}
              {player.parent.parentLastName},{" "}
              {player.parent.secondParentFirstName}{" "}
              {player.parent.secondParentLastName}
            </div>
          }
          {/*
          - Starting Note Modal
            - make it different than accordian in registration card
            - finish rest of player card. 
          */}
          <div className="card-text">Level: {player.level}</div>
        </div>
      </div>
    </div>
  );
}
