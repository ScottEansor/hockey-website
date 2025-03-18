import React, { useCallback, useState } from "react";

export default function Login() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmitOTP = useCallback(() => {}, []);

  const handleSubmitEmail = useCallback(async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
  }, []);

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
        <form onSubmit={emailSubmitted ? handleSubmitOTP : handleSubmitEmail}>
          {emailSubmitted ? (
            <div className="mb-3">
              <label className="form-label text-light">Password</label>
              <input
                key="password"
                type="text"
                className="form-control"
                required
              />
            </div>
          ) : (
            <div className="mb-3">
              <label className="form-label text-light">Email address</label>
              <input
                key="email"
                type="email"
                className="form-control"
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            {emailSubmitted ? "Login" : "Send One Time Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
