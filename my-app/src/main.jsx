import { createRoot } from "react-dom/client";

const name = "Amala";
const num = 4;
createRoot(document.getElementById("root")).render(
  <h1>
    Hello {name}! Your lucky number is {num}
  </h1>,
);
