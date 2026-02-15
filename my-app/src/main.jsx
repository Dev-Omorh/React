import { createRoot } from "react-dom/client";

const name = "Omolade Ajala";
const year = 2019;

createRoot(document.getElementById("root")).render(
  <>
    <h1>Created by {name}</h1>
    <p>Copyright by {year}</p>
  </>,
);
