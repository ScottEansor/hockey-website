import React from "react";

export default function Login() {
  return (
    // Main container that fills the whole screen and centers content
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh", // Ensures it takes full height dynamically
        width: "100vw", // Ensures it takes full width dynamically
        background: "linear-gradient(to right, #141E30, #243B55)",
      }}
    >
      {/* Inner box that holds the login form */}
      <div
        className="p-4 rounded shadow"
        style={{
          background: "rgba(255, 255, 255, 0.2)", // Slightly transparent
          backdropFilter: "blur(10px)", // Blurred effect for a modern look
          width: "350px",
        }}
      >
        {/* Login title */}
        <h2 className="text-center text-light mb-4">Login</h2>

        {/* Form starts here */}
        <form>
          {/* Input field for email */}
          <div className="mb-3">
            <label className="form-label text-light">Email address</label>
            <input type="email" className="form-control" required />
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
