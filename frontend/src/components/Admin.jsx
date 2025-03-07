import React, { useState } from "react";
import RegistrationCard from "./RegistrationCard";

export default function Admin() {
  const [registrations, setRegistrations] = useState(null);

  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4 gap-2">
      <h1 className="text-center p-2">Registered Players</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {registrations.map((reg) => (
          <RegistrationCard reg={reg} key={reg._id} />
        ))}
      </div>
    </div>
  );
}
