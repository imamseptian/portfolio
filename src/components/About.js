import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import Avatar2 from "../images/avatar2.JPG";
import "./About.css";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import '../fontawesome'

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-sec">
      <div className="about-box">
        <h2 className="title">About Me</h2>

        <div className="about-content">
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
          <div className="about-content-left">
            <img src={Avatar2} alt="avatar" className="avatar" />
          </div>
          <div className="about-content-right">
            {/* <div className="about-name">My name is Imam Septian Adi Wijaya</div> */}
            <p>
              <span style={{ color: "black" }}>
                Hello, my name is Imam Septian Adi Wijaya.{" "}
              </span>
              Since I was a kid, I interested in computer things but not in
              programming yet. Even I'm pretty good with computer things until I
              graduated from high school I still have zero knowledge about
              programming. So I decided to learn about programming by taking a
              computer science degree at Dian Nuswantoro University. I'm
              interested in web programming and my favorite programming language
              was Javascript, PHP, and Python. After 3.5 years, I finally finish
              my computer science and got my bachelor's degree status. Also
              before I graduated from my university I was able to join Bangkit
              2021 at machine learning path. even I'm still a newcomer and
              freshly graduated student I'm looking for more experience in the
              future.
            </p>

            {/* <a href="#">Download CV</a> */}
            <a
              className="custom-btn btn-cv"
              href="https://drive.google.com/file/d/17qk4NtXw_d5Ppz23YfHR1vYUHWIxrgNn/view?usp=sharing"
              target="_blank"
              // rel="noreferrer"
            >
              <div className="btn-div">
                <FontAwesomeIcon
                  icon={["fas", "file-pdf"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Download Resume
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
