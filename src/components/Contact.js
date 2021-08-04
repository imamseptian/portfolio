import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import contactimg from "../images/avatar.jpg";
import facebookicon from "../images/tools/facebook.png";
import githubicon from "../images/tools/github.png";
import gmailicon from "../images/tools/gmail.png";
import linkedinicon from "../images/tools/linkedin.png";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  const socialList = [
    {
      name: "imamseptian.wijaya@gmail.com",
      img: gmailicon,
      url: "",
    },

    {
      name: "facebook.com/razael2127/",
      img: facebookicon,
      url: "https://www.facebook.com/razael2127/",
    },
    {
      name: "Linkedin",
      img: linkedinicon,
      url: "https://www.linkedin.com/in/imam-septian-985940209/",
    },
    {
      name: "github.com/imamseptian",
      img: githubicon,
      url: "https://github.com/imamseptian",
    },
  ];

  return (
    <div ref={ref} className="contact-sec">
      <h2 className="section-title contact">Contact</h2>
      <div className="contact-content">
        <img src={contactimg} alt="" className="contact-avatar" />
        <h2 style={{ color: "white", fontSize: "24px" }}>
          My Social and Contact
        </h2>
        {socialList.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <img src={item.img} alt="" className="social-logo" />
              {item.name}
            </a>
          );
        })}
        <a
          href="https://wa.me/6285870480645"
          target="_blank"
          rel="noreferrer"
          className="social-button"
          style={{ background: "#40c351", color: "white" }}
        >
          <FontAwesomeIcon
            icon={["fab", "whatsapp"]}
            style={{
              marginRight: "10px",
              marginLeft: "30px",
              fontSize: "30px",
            }}
            size="lg"
          />
          +62-858-7048-0645
        </a>
      </div>
    </div>
  );
});

export default Contact;
