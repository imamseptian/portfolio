import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useState } from "react";
import "./Navbar.css";

const navbar = forwardRef(
  (
    {
      small,
      homeScroll,
      aboutScroll,
      skillsScroll,
      toolsScroll,
      contactScroll,
    },
    ref
  ) => {
    // const { homeRef, aboutRef, skillsRef, toolsRef, contactRef } = ref;

    const [showMenu, setshowMenu] = useState(false);

    return (
      <nav className={`navbar ${small ? "scrolled" : null}`}>
        <div className="navbar-content">
          {/* <div> */}
          <a
            className="portfolio-link"
            href="http://imamseptian.github.io/react-portfolio"
          >
            Portfolio
          </a>
          {/* </div> */}
          <ul className={`menu ${showMenu ? "active" : null}`}>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  homeScroll();
                  setshowMenu(false);
                }}
                href="http://imamseptian.github.io/react-portfolio"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  aboutScroll();
                  setshowMenu(false);
                }}
                href="http://imamseptian.github.io/react-portfolio"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  skillsScroll();
                  setshowMenu(false);
                }}
                href="http://imamseptian.github.io/react-portfolio"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  toolsScroll();
                  setshowMenu(false);
                }}
                href="http://imamseptian.github.io/react-portfolio"
              >
                Tools
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  contactScroll();
                  setshowMenu(false);
                }}
                href="http://imamseptian.github.io/react-portfolio"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className="menu-btn"
            onClick={(e) => {
              e.preventDefault();
              setshowMenu(!showMenu);
            }}
          >
            {showMenu ? (
              <FontAwesomeIcon icon={["fas", "times"]} size="lg" />
            ) : (
              <FontAwesomeIcon icon={["fas", "bars"]} size="lg" />
            )}
          </div>
        </div>
      </nav>
    );
  }
);

export default navbar;
