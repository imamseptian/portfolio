import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import Typed from "react-typed";
import Background from "../images/cat-dark.jpg";
import "./Home.css";
const Home = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        background: `url(${Background}) no-repeat center`,
        // background: `red`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignItems: "center",
        justifyContent: "center",
        // fontFamily: `"Ubuntu", sans-serif`,
        fontFamily: `'Oxygen',sans-serif`,
        fontWeight: 600,
        color: "#fff",
        position: "relative",
        // height: "100vh",
      }}
    >
      {/* <div className="bg-mask"></div> */}
      <div className="home-box">
        <div className="column-left">
          <div className="home-text-1">Hello World! I am</div>
          <div className="home-text-2">Imam Septian A.W.</div>
          <div className="home-text-3">
            And I'm{" "}
            <Typed
              strings={[
                "a Fullstack Developer.",
                "a Mobile Developer.",
                "an IT Enthusiast.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="home-typed"
            />
          </div>

          <a
            className="custom-btn btn-home-github"
            href="https://github.com/imamseptian"
            target="_blank"
            rel="noreferrer"
          >
            {/* <div className="btn-div"> */}
            <FontAwesomeIcon
              icon={["fab", "github"]}
              style={{ marginRight: "5px" }}
            />
            Github Repositories
            {/* </div> */}
          </a>
        </div>
      </div>
    </div>
  );
});

export default Home;
