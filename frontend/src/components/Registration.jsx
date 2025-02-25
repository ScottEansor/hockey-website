import React from "react";

export default function Registration() {
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h2 className="text-center p-2">Player Registration</h2>
      <p className="text-center p-2">
        Please fill out the form below to register your player.
      </p>
      <form className="w-75 d-flex flex-column gap-3 p-2">
        {/* Player's First Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Player's First Name"
          required
        />

        {/* Player's Last Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Player's Last Name"
          required
        />

        {/* Primary Parent/Guardian First Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Parent/Guardian First Name"
          required
        />

        {/* Primary Parent/Guardian Last Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Parent/Guardian Last Name"
          required
        />

        {/* Second Parent/Guardian First Name (non-required) */}
        <input
          type="text"
          className="form-control bg-light"
          placeholder="Second Parent/Guardian First Name"
        />

        {/* Second Parent/Guardian Last Name (non-required) */}
        <input
          type="text"
          className="form-control bg-light"
          placeholder="Second Parent/Guardian Last Name"
        />

        {/* Player's Birthday */}
        <input type="date" className="form-control" required />

        {/* Current Level */}
        <select className="form-control" required>
          <option value="">-- Select Current Level --</option>
          <option value="AAA">AAA</option>
          <option value="AA">AA</option>
          <option value="A/AA">A/AA</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="Beginner">Beginner</option>
        </select>

        {/* Primary Parent/Guardian Cell Phone */}
        <input
          type="tel"
          className="form-control"
          placeholder="Primary Cell Phone"
          required
        />

        {/* Primary Parent/Guardian Email */}
        <input
          type="email"
          className="form-control"
          placeholder="Primary Email"
          required
        />

        {/* Note for Admin */}
        <textarea
          className="form-control"
          placeholder="Additional Notes"
          rows="4"
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div className="bg-body-tertiary contact-info p-3 text-center">
        <h5>Need Assistance?</h5>
        <p>Email: eansor.coaching@gmail.com</p>
      </div>
    </div>
  );
}
