import React, { useCallback } from "react";

export default function Registration() {
  const handleSubmit = useCallback(async (e) => {
    const form = e.target;
    const data = {
      playerFirstName: form.playerFirstName.value,
      playerLastName: form.playerLastName.value,
      parentFirstName: form.parentFirstName.value,
      parentLastName: form.parentLastName.value,
      secondParentFirstName: form.secondParentFirstName.value,
      secondParentLastName: form.secondParentLastName.value,
      birthday: form.birthday.value,
      level: form.level.value,
      cellPhone: form.cellPhone.value,
      email: form.email.value,
      notes: form.notes.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("✅ You have successfully registered!");
        form.reset(); // Clears the form after successful submission
      } else {
        const errorData = await response.json(); // Get error message if available
        alert(
          `❌ Registration failed: ${errorData.message || "Please try again."}`
        );
      }
    } catch (error) {
      alert(
        "❌ An error occurred. Please check your connection and try again."
      );
    }
  }, []);

  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4">
      <h2 className="text-center p-2">Player Registration</h2>
      <p className="text-center p-2">
        Please fill out the form below to register your player.
      </p>
      <form
        className="w-75 d-flex flex-column gap-3 p-2"
        onSubmit={handleSubmit}
      >
        {/* Player's First Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Player's First Name"
          required
          name="playerFirstName"
        />

        {/* Player's Last Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Player's Last Name"
          required
          name="playerLastName"
        />

        {/* Primary Parent/Guardian First Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Parent/Guardian First Name"
          required
          name="parentFirstName"
        />

        {/* Primary Parent/Guardian Last Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Parent/Guardian Last Name"
          required
          name="parentLastName"
        />

        {/* Second Parent/Guardian First Name (non-required) */}
        <input
          type="text"
          className="form-control bg-light"
          placeholder="Second Parent/Guardian First Name"
          name="secondParentFirstName"
        />

        {/* Second Parent/Guardian Last Name (non-required) */}
        <input
          type="text"
          className="form-control bg-light"
          placeholder="Second Parent/Guardian Last Name"
          name="secondParentLastName"
        />

        {/* Player's Birthday */}
        <label>
          Birthday:
          <input
            type="date"
            className="form-control"
            required
            name="birthday"
          />
        </label>

        {/* Current Level */}
        <select className="form-control" required name="level">
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
          name="cellPhone"
        />

        {/* Primary Parent/Guardian Email */}
        <input
          type="email"
          className="form-control"
          placeholder="Primary Email"
          required
          name="email"
        />

        {/* Note for Admin */}
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
      <div className="bg-body-tertiary contact-info p-3 text-center">
        <h5>Need Assistance?</h5>
        <p>Email: eansor.coaching@gmail.com</p>
      </div>
    </div>
  );
}
