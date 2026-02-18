import { createRoot } from "react-dom/client";

const date = new Date();
const currentHour = date.getHours();

let greeting;
const customStyle = {};

if (currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
}

createRoot(document.getElementById("root")).render(<h1 style={customStyle}>{greeting}</h1>);
