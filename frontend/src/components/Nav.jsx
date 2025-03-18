import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <a className="title navbar-brand" href="#">
          Eansor Coaching
        </a>
        <div className="d-flex ms-auto nav-options">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/schedule" className="nav-link">
            Schedule Now
          </Link>
          {/* <Link to="/contact" className="nav-link">
            Contact
          </Link> */}
          <Link to="/camp" className="nav-link">
            Camp
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
          <Link to="/athome" className="nav-link">
            At Home
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
