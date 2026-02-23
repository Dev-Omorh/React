import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <>
      <p className="footer">Copyright © {currentYear}</p>
    </>
  );
}

export default Footer;
