import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import nexticon from "../../images/nexticon.png";
import rn1 from "../../images/videodownloader/rn1.jpg";
import rn2 from "../../images/videodownloader/rn2.jpg";
import rn3 from "../../images/videodownloader/rn3.jpg";
import web1 from "../../images/videodownloader/web1.PNG";
import web2 from "../../images/videodownloader/web2.PNG";
import web3 from "../../images/videodownloader/web3.PNG";
import "./VideoDownloader.css";

const VideoDownloader = () => {
  const imageList = [
    { landscape: false, img: rn1 },
    { landscape: true, img: web1 },
    { landscape: false, img: rn2 },
    { landscape: true, img: web2 },
    { landscape: false, img: rn3 },
    { landscape: true, img: web3 },
  ];

  const [counter, setcounter] = useState(0);

  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     if (counter === imageList.length - 1) {
  //       setcounter(0);
  //     } else {
  //       setcounter(counter + 1);
  //     }
  //   }, 2500);
  //   return () => {
  //     clearInterval(myInterval);
  //   };
  // });

  let settings = {
    customPaging: function (i) {
      if (i === counter) {
        return (
          <div>
            <img
              src={imageList[i].img}
              className="custom-slick-img-video-dots selected"
              alt="Simple Social Video Downloader App"
              //  className="custom-slick-social-dots"
            />
          </div>
        );
      } else {
        return (
          <div>
            <img
              src={imageList[i].img}
              className="custom-slick-img-video-dots"
              alt="Simple Social Video Downloader App"
              //  className="custom-slick-social-dots"
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
        <div className="project-content-video-left">
          <Slider {...settings}>
            {imageList.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={img.img}
                    className={`social-video-img ${
                      img.landscape ? "landscape" : null
                    }`}
                    alt="Simple Social Video Downloader App"
                    // style={{ height: "200px", width: "auto" }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="project-content-video-right">
          {/* <div className="kostku-title"> */}
          <div>
            <h1 className="text-kostku">Simple Social Video Downloader</h1>
            <p className="kostku-description">
              This is a simple android & web based application which can be used
              to download videos from social media websites. Currently this
              application can only download videos from Youtube, Twitter, and
              TikTok websites. The web application was developed using the Next
              JS framework, while for the android application I developed it
              using the React Native framework.
            </p>
            {/* </div> */}

            <a
              href="https://github.com/imamseptian/next-video-downloader"
              // className="button-framework"
              className="custom-btn btn-kostku"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(0deg, rgba(22, 27, 34, 1), rgba(55, 23, 34, 1))",
                color: "white",
              }}
              // style={{
              //   background: "#161b22",
              //   color: "white",
              //   border: "1px solid white",
              // }}
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              Go to Project Repository
            </a>
          </div>

          <div>
            <h2 className="text-mobile">Developed Using</h2>
            <div className="tools-wrapper">
              <a
                className="custom-btn btn-kostku"
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "white",
                  color: "black",
                  marginTop: "0",
                  paddingLeft: "30px",
                  position: "relative",
                }}
              >
                <img
                  src={nexticon}
                  alt="Simple Social Video Downloader App"
                  style={{
                    position: "absolute",
                    left: "7px",
                    top: "7px",
                    height: "20px",
                  }}
                />
                Next JS
              </a>

              <a
                className="custom-btn btn-kostku"
                href="https://reactnative.dev/"
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
                React Native
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

export default VideoDownloader;
