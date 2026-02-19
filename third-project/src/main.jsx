import { createRoot } from "react-dom/client";
import pi from "./math.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ul>
      <li>{pi}</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </>,
);
