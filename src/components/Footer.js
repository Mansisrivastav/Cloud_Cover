import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; Weather Checker {currentYear}</p>
    </footer>
  );
}

export default Footer;
