import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <img src="" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
          Eansor Coaching
        </a>
        {/* Add a class to apply gap through CSS */}
        <div className="d-flex ms-auto nav-options">
          <a href="#" className="nav-link">
            Schedule
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
