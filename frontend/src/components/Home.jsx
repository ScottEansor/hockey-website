import React from "react";
import image from "../assets/2HRA6KN.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  //css needs review jusr rough draft for function and basic look
  return (
    <div
      className="container d-flex align-items-center justify-content-between"
      style={{ height: "100vh" }}
    >
      <div className="title-container text-start d-flex flex-column gap-2">
        <h1 className="display-4 title">Eansor Coaching</h1>
        <h3>Hockey skills training</h3>
        <h5>
          <i className="location-icon bi bi-geo-alt-fill me-2"></i> Steamboat
          Springs, Colorado
        </h5>
        <Link to="/about" className="btn btn-primary">
          More About
        </Link>
        <Link to="register" className="btn btn-primary">
          Register Here
        </Link>
      </div>

      <img
        className="img-fluid rounded-circle"
        src={image}
        alt="Coaching"
        style={{ maxWidth: "40%" }}
      />
    </div>
  );
}
