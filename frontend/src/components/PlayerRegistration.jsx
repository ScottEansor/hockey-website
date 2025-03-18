import React from "react";

export default function PlayerRegistration() {
  return (
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="Player's First Name"
        required
        name="playerFirstName"
      />

      <input
        type="text"
        className="form-control"
        placeholder="Player's Last Name"
        required
        name="playerLastName"
      />

      <label>
        Birthday:
        <input type="date" className="form-control" required name="birthday" />
      </label>

      <select className="form-control" required name="level">
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
      ></textarea>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
