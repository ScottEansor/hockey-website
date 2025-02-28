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
      notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim massa id mi vestibulum, at dapibus augue dapibus. Pellentesque ex libero, malesuada vitae mi congue, congue gravida ipsum. Vivamus non nisi eget nisl suscipit ornare. Ut dolor libero, vestibulum eget dignissim et, sollicitudin ac dolor. Nunc ut efficitur arcu, sed porta dui. Curabitur commodo dui in ante semper, eget tempor massa tempus. Curabitur vel ex porta, aliquet eros non, pharetra ex. Morbi rhoncus quam quam, nec mattis tortor pellentesque et. Nullam tellus felis, gravida quis egestas in, maximus quis odio.

Aenean id congue felis. Duis facilisis, justo et vehicula auctor, massa velit dictum metus, sed dapibus ipsum leo eu metus. Nam ac quam vel dui rutrum porttitor. Donec ut vehicula elit, eu ultrices magna. Cras blandit sem sit amet imperdiet bibendum. Nulla condimentum, magna at viverra auctor, ex nibh imperdiet turpis, nec laoreet felis felis et tortor. Aenean egestas, enim sit amet efficitur hendrerit, nisi augue faucibus lorem, vitae molestie urna arcu rutrum quam. Nam consectetur, tellus sit amet bibendum ultricies, tellus urna pharetra nulla, et viverra neque ligula quis justo. Pellentesque porta lacus id dui venenatis semper. Suspendisse ac cursus odio. Duis at quam rhoncus, dictum nisl a, venenatis velit. Vestibulum finibus, nisi eget luctus cursus, ipsum magna varius mauris, eu dictum ipsum ex ut nibh. Sed vel nisi tempor felis varius vestibulum. Praesent vehicula eget est et consectetur. Praesent et bibendum metus, id auctor tortor.

Morbi lobortis pellentesque libero sed interdum. Ut rhoncus feugiat imperdiet. Sed ultricies maximus eros id mattis. Nulla egestas mauris in quam consequat, in ullamcorper neque mattis. Fusce congue nibh eget eros malesuada consequat. Etiam dictum varius felis sed sollicitudin. Sed dapibus nulla at augue venenatis, eget congue sem finibus. Donec congue, magna nec scelerisque facilisis, orci lectus maximus urna, sed mollis augue metus in nunc. Vivamus bibendum sed leo vel tincidunt. Maecenas placerat nisi id augue euismod tincidunt. Quisque sagittis ut leo et eleifend. Etiam ac tincidunt sem. Duis ex libero, fringilla et est vitae, fringilla euismod lacus. In ligula libero, tristique aliquet elementum non, mollis vitae mauris.`,
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
