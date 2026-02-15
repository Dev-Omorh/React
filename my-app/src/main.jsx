import { createRoot } from "react-dom/client";

const fName = "Omolade";
const lName = "Ajala";
const num = 7;
createRoot(document.getElementById("root")).render(
  <>
    <h1>My full name is {fName + " " + lName}</h1>
    <p>Lucky number is {3 + 4}</p>
  </>,
);
