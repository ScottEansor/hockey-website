import React, { useCallback, useState } from "react";

export default function Login({ onLogin }) {
  const [emailSubmitted, setEmailSubmitted] = useState(null);

  const handleSubmitOTP = useCallback(
    async (e) => {
      e.preventDefault();
      const enteredOtp = e.target.otp.value;
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify({
          email: emailSubmitted,
          otp: enteredOtp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        alert("Something went wrong with the request.");
        return;
      }
      alert("You are signed in");
      onLogin();
    },
    [emailSubmitted]
  );

  const handleSubmitEmail = useCallback(async (e) => {
    e.preventDefault();
    const enteredEmail = e.target.email.value;
    const response = await fetch("/api/auth/generate-otp", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Something went wrong with the request.");
      return;
    }
    setEmailSubmitted(enteredEmail);
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #141E30, #243B55)",
      }}
    >
      <div
        className="p-4 rounded shadow"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          width: "350px",
        }}
      >
        <h2 className="text-center text-light mb-4">Login</h2>
        <p className="text-light text-center">{emailSubmitted}</p>
        <form onSubmit={emailSubmitted ? handleSubmitOTP : handleSubmitEmail}>
          {emailSubmitted ? (
            <div className="mb-3">
              <label className="form-label text-light">Password</label>
              <input
                name="otp"
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
                name="email"
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
