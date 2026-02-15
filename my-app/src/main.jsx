import { createRoot } from "react-dom/client";

const name = "Omolade Ajala";
const currentDate = new Date();
const year = currentDate.getFullYear();

createRoot(document.getElementById("root")).render(
  <>
    <h1>Created by {name}</h1>
    <p>Copyright by {year}</p>
  </>,
);
