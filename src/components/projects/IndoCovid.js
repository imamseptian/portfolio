import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../images/indocovid/1.png";
import pic2 from "../../images/indocovid/2.png";
import pic3 from "../../images/indocovid/3.png";
import pic4 from "../../images/indocovid/4.png";

import "./VideoDownloader.css";
import "./PepeManga.css";

const IndoCovid = () => {
  const imageList = [
    { landscape: true, img: pic1 },
    { landscape: false, img: pic2 },
    { landscape: true, img: pic3 },
    { landscape: false, img: pic4 },
  ];

  const [counter, setcounter] = useState(0);

  let settings = {
    customPaging: function (i) {
      if (i === counter) {
        return (
          <div>
            <img
              src={imageList[i].img}
              className="custom-slick-img-video-dots selected"
              alt="IndoCovid Monitor"
            />
          </div>
        );
      } else {
        return (
          <div>
            <img
              src={imageList[i].img}
              className="custom-slick-img-video-dots"
              alt="IndoCovid Monitor"
            />
          </div>
        );
      }
    },
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    pauseOnDotsHover: true,
    afterChange: (index) => {
      setcounter(index);
    },
  };

  return (
    <div className="project-wrapper">
      <div className="project-content">
        <div className="pepemanga-content-left">
          <Slider {...settings}>
            {imageList.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={img.img}
                    className={`pepemanga-img ${
                      img.landscape ? "landscape" : null
                    }`}
                    alt="IndoCovid Monitor"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="project-content-video-right">
          {/* <div className="kostku-title"> */}
          <div>
            <h1 className="text-kostku">IndoCovid Website</h1>
            <p className="kostku-description">
              This is a simple website that consume some public API's. This
              website helps users to see the development of Covid-19 cases in
              Indonesia. This website also help the users to find the suitable
              Covid-19 Hospital in some area in Indonesia, the website will
              helps to find some information about the hospital and the
              remaining available bed in the hospital.
            </p>
            {/* </div> */}

            <a
              href="https://github.com/imamseptian/indocovid-monitor"
              // className="button-framework"
              className="custom-btn btn-kostku"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(0deg, rgba(22, 27, 34, 1), rgba(55, 23, 34, 1))",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              Go to project repository
            </a>
            <a
              href="https://indocovid-monitor.vercel.app/"
              className="custom-btn btn-kostku"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(0deg, rgba(22, 27, 34, 1), rgba(55, 23, 34, 1))",
                color: "white",
              }}
            >
              <FontAwesomeIcon
                icon={["fas", "globe"]}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              Check the Website
            </a>
          </div>

          <div>
            <h2 className="text-mobile">Developed Using</h2>
            <div className="tools-wrapper">
              <a
                className="custom-btn btn-kostku"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(40, 44, 52, 1), rgba(60, 35, 52, 1))",
                  color: "white",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                React JS
              </a>

              <a
                className="custom-btn btn-kostku"
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(252, 220, 0, 1), rgba(255, 212, 0, 1))",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Javascript
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoCovid;
