import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import nexticon from "../../images/nexticon.png";
import pic1 from "../../images/pepemanga/pic1.PNG";
import pic2 from "../../images/pepemanga/pic2.PNG";
import pic3 from "../../images/pepemanga/pic3.PNG";
import pic4 from "../../images/pepemanga/pic4.PNG";
import pic5 from "../../images/pepemanga/pic5.PNG";
import pic6 from "../../images/pepemanga/pic6.PNG";
import pic7 from "../../images/pepemanga/pic7.PNG";
import pic8 from "../../images/pepemanga/pic8.PNG";
import pic9 from "../../images/pepemanga/pic9.PNG";
import "./VideoDownloader.css";
import "./PepeManga.css";

const PepeManga = () => {
  const imageList = [
    { landscape: true, img: pic1 },
    { landscape: true, img: pic2 },
    { landscape: true, img: pic3 },
    { landscape: false, img: pic4 },
    { landscape: true, img: pic5 },
    { landscape: false, img: pic6 },
    { landscape: false, img: pic8 },
    { landscape: false, img: pic9 },
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
            <h1 className="text-kostku">Pepe Manga Frontend</h1>
            <p className="kostku-description">
              This is a simple website for reading manga, this project
              repository only contain the frontend side and im using other
              people backend repository to fetch manga data that has been
              translated into Indonesian Language. Im creating this project
              using React + Material UI.
            </p>
            {/* </div> */}

            <a
              href="https://github.com/imamseptian/pepemanga-fe"
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

export default PepeManga;
