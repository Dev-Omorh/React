import React from "react";
import "../App.css";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <>
      <p className="footer absolute bottom-0 w-full text-center">
        Copyright © {currentYear}
      </p>
    </>
  );
}

export default Footer;
