import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import live1 from "../../images/simplechat/live1.png";
import live2 from "../../images/simplechat/live2.png";
import live3 from "../../images/simplechat/live3.png";
import live4 from "../../images/simplechat/live4.png";
import expressicon from "../../images/tools/express.png";
import "./FoodRecommendation.css";
const LiveChat = () => {
  const imageList = [live1, live2, live3, live4];

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
              src={imageList[i]}
              className="custom-slick-img-video-dots selected"
              alt="Food Recommendation API"
              //  className="custom-slick-social-dots"
            />
          </div>
        );
      } else {
        return (
          <div>
            <img
              src={imageList[i]}
              className="custom-slick-img-video-dots"
              alt="Food Recommendation API"
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
        <div className="project-content-landscape-left">
          <Slider {...settings}>
            {imageList.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={img}
                    alt="Live chat"
                    className={`landscape-only-img`}
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
            <h1 className="text-kostku">Simple Livechat App</h1>
            <p className="kostku-description">
              This is my personal project to develop my skill, this is a simple
              chatting website that I create using React JS, Socket.io, and
              Express JS. Every user can chat with another user that already
              registered accounts to the website. To make a real-time chat
              experience I'm using Socket IO library, to handle the backend I'm
              using Express JS, and for the frontend I'm using React JS. Also,
              I'm using Tailwind CSS for the CSS styling.
            </p>
            {/* </div> */}

            <a
              href="https://react-livechat.vercel.app/"
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

            <a
              href="https://imamseptian.github.io/portfolio/"
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
                icon={["fas", "globe"]}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              Check the website
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
                href="https://expressjs.com/"
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
                  src={expressicon}
                  alt="Food Recommendation API"
                  style={{
                    position: "absolute",
                    left: "7px",
                    top: "7px",
                    height: "20px",
                  }}
                />
                Express JS
              </a>

              <a
                className="custom-btn btn-kostku"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "white",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "rocketchat"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Socket.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
