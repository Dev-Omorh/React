import { createRoot } from "react-dom/client";
import Heading from "./Heading";

createRoot(document.getElementById("root")).render(
  <>
    <Heading></Heading>

    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </>,
);
