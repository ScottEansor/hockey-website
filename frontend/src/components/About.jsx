import React from "react";
import image1 from "../assets/2HRA6KN.jpg"; // Update with correct path
import image2 from "../assets/2HRA6KN.jpg"; // Update with correct path
import image3 from "../assets/2HRA6KN.jpg"; // Update with correct path

export default function About() {
  return (
    <div className="container py-4">
      <h1 className="text-center pb-4">About Eansor Coaching</h1>

      {/* Section 1 - Text on Left, Image on Right */}
      <div className="row align-items-center d-flex flex-column flex-md-row">
        <div className="col-md-6 d-flex flex-column text-start">
          <p>
            I'm Scott Eansor, and I offer private and small group skills
            coaching in Steamboat Springs, specializing in skating, skills
            training, hockey IQ, and more. With my personal hockey background,
            skill set, and video analysis, my goal is to help players in any
            area of the game so they can achieve their personal goals and, most
            importantly, have fun. I work with players ages 6 and up, whether
            they’re aiming for the highest levels of competition or just
            enjoying the game recreationally.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={image1}
            className="img-fluid rounded"
            alt="Coaching"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>

      {/* Section 2 - Image on Left, Text on Right */}
      <div className="row align-items-center d-flex flex-column flex-md-row-reverse">
        <div className="col-md-6 d-flex flex-column text-start">
          <h2>Background</h2>
          <ul>
            <li>Captain of WHL/CHL Championship team</li>
            <li>Played in the Memorial cup</li>
            <li>Team USA World Jrs Bronze medal</li>
            <li>3 year NHL contract with NY Islanders</li>
            <li>5 NHL camps with the Maple Leafs, Canadiens, and Islanders</li>
            <li>3 years AHL experience</li>
            <li>10 NHL preseason games</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={image2}
            className="img-fluid rounded"
            alt="Background"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>

      {/* Section 3 - Text on Left, Image on Right */}
      <div className="row align-items-center d-flex flex-column flex-md-row">
        <div className="col-md-6 d-flex flex-column text-start">
          <h2>Pricing</h2>
          <h4>Howelsen Hill ice arena private session</h4>
          <ul>
            <li>1 skater or family: $150</li>
            <li>2 skaters or families: $75 each family</li>
            <li>3 skaters or families+: $60 each family</li>
          </ul>
          <h4>Howelsen Hill ice arena stick and puck</h4>
          <ul>
            <li>1 skater or family: $130</li>
            <li>2 skaters or families: $75 each family</li>
            <li>3 skaters or families+: $60 each family</li>
          </ul>
          <h4>Rented Private ice session</h4>
          <p>Please contact me directly about pricing and renting the ice.</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={image3}
            className="img-fluid rounded"
            alt="Pricing"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}
