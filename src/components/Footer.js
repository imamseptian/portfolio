import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <span>
        Created By{" "}
        <a
          href="https://github.com/imamseptian"
          target="_blank"
          rel="noreferrer"
        >
          Imam Septian
        </a>{" "}
        | <FontAwesomeIcon icon={["fas", "copyright"]} size="lg" /> 2021 All
        rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
