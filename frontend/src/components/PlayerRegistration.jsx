import React, { useState } from "react";

export default function PlayerRegistration({ onSubmit }) {
  const [player, setPlayer] = useState({
    playerFirstName: "",
    playerLastName: "",
    birthday: "",
    level: "",
    notes: "",
  });

  const handleSubmitPlayerRegistration = (e) => {
    e.preventDefault();
    onSubmit(player);
  };
  console.log(player)
  const updatePlayer = (key, value) => {
    setPlayer((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form
      className="d-flex flex-column gap-3"
      onSubmit={handleSubmitPlayerRegistration}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Player's First Name"
        required
        name="playerFirstName"
        value={player.playerFirstName}
        onChange={(e) => {
          updatePlayer("playerFirstName", e.target.value);
        }}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Player's Last Name"
        required
        name="playerLastName"
        value={player.playerLastName}
        onChange={(e) => {
          updatePlayer("playerLastName", e.target.value);
        }}
      />

      <label>
        Birthday:
        <input
          type="date"
          className="form-control"
          required
          name="birthday"
          value={player.birthday}
          onChange={(e) => {
            updatePlayer("birthday", e.target.value);
          }}
        />
      </label>

      <select
        className="form-control"
        required
        name="level"
        value={player.level}
        onChange={(e) => {
          updatePlayer("level", e.target.value);
        }}
      >
        <option value="">-- Select Current Level --</option>
        <option value="AAA">AAA</option>
        <option value="AA">AA</option>
        <option value="A/AA">A/AA</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="Beginner">Beginner</option>
      </select>

      <textarea
        className="form-control"
        placeholder="Additional Notes"
        rows="4"
        name="notes"
        value={player.notes}
        onChange={(e) => {
          updatePlayer("notes", e.target.value);
        }}
      ></textarea>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
