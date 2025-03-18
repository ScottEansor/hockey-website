import React from "react";

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #141E30, #243B55)",
      }}
    >
      {/* box that holds the login form */}
      <div
        className="p-4 rounded shadow"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          width: "350px",
        }}
      >
        <h2 className="text-center text-light mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label text-light">Email address</label>
            <input type="email" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
