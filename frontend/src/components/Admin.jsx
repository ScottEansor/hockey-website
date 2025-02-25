import React from "react";
import RegistrationCard from "./RegistrationCard";

export default function Admin() {
  const Registrations = [
    {
      id: "1",
      playerFirstName: "Sidney",
      playerLastName: "Crosby",
      birthday: "1987-08-07",
      parent1FirstName: "Troy",
      parent1LastName: "Crosby",
      parent2FirstName: "Trina",
      parent2LastName: "Forbes-Crosby",
      level: "AAA",
      phone: "123-456-7890",
      email: "parents@crosbyfamily.com",
      notes: "Excited to join the team! Has prior AAA experience.",
    },
    {
      id: "2",
      playerFirstName: "Connor",
      playerLastName: "McDavid",
      birthday: "1997-01-13",
      parent1FirstName: "Brian",
      parent1LastName: "McDavid",
      parent2FirstName: "Kelly",
      parent2LastName: "McDavid",
      level: "AA",
      phone: "234-567-8901",
      email: "mcdavids@example.com",
      notes: "Prefers morning practices, No scheduling conflicts known.",
    },
    {
      id: "3",
      playerFirstName: "Connor",
      playerLastName: "McDavid",
      birthday: "1997-01-13",
      parent1FirstName: "Brian",
      parent1LastName: "McDavid",
      parent2FirstName: "Kelly",
      parent2LastName: "McDavid",
      level: "A/AA",
      phone: "234-567-8901",
      email: "mcdavids@example.com",
      notes: "Prefers morning practices, No scheduling conflicts known.",
    },
    {
      id: "4",
      playerFirstName: "Connor",
      playerLastName: "McDavid",
      birthday: "1997-01-13",
      parent1FirstName: "Brian",
      parent1LastName: "McDavid",
      parent2FirstName: "Kelly",
      parent2LastName: "McDavid",
      level: "B",
      phone: "234-567-8901",
      email: "mcdavids@example.com",
      notes: "Prefers morning practices, No scheduling conflicts known.",
    },
  ];
  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4 gap-2">
      <h1 className="text-center p-2">Registered Players</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {Registrations.map((reg) => (
          <RegistrationCard reg={reg} key={reg.id} />
        ))}
      </div>
    </div>
  );
}
