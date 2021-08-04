import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import aku1 from "../../images/akubisa/aku1.png";
import aku3 from "../../images/akubisa/aku3.png";
import aku4 from "../../images/akubisa/aku4.png";
import aku7 from "../../images/akubisa/aku7.png";
import "./AkuBisa.css";

const AkuBisa = () => {
  const imageList = [aku1, aku3, aku4, aku7];

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
              alt="Admin Panel AKUBISA"
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
              alt="Admin Panel AKUBISA"
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
                    alt="akubisa app"
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
            <h1 className="text-kostku">AKUBISA School Admin Panel</h1>
            <p className="kostku-description">
              I developed this application when I did an internship at LPK
              Primedian Semarang. I have developed an admin panel to help a
              school provide numeracy and literacy education to their students.
              The admin panel that I developed has several functions, such as
              recording school data (such as teachers, classes, students),
              providing numeracy and literacy materials, and recapitulating
              student scores based on several factors. This application is
              expected to help the government program "Kampus Merdeka". I
              developed this application using the Laravel framework.
            </p>
            {/* </div> */}

            <a
              href="https://drive.google.com/file/d/1UhtXSId5M9Cpix1Ra6tq53aaK9updsiM/view"
              // className="button-framework"
              className="custom-btn btn-kostku"
              target="_blank"
              rel="noreferrer"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255, 45, 32, 1), rgba(255, 36, 32, 1))",
                color: "white",
              }}
              // style={{
              //   background: "#161b22",
              //   color: "white",
              //   border: "1px solid white",
              // }}
            >
              <FontAwesomeIcon
                icon={["fas", "file-pdf"]}
                style={{ marginRight: "10px" }}
                size="lg"
              />
              View My Intership Report
            </a>
          </div>

          <div>
            <h2 className="text-mobile">Developed Using</h2>
            <div className="tools-wrapper">
              <a
                className="custom-btn btn-kostku"
                href="https://laravel.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255, 45, 32, 1), rgba(255, 36, 32, 1))",
                  color: "white",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "laravel"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Laravel
              </a>

              <a
                className="custom-btn btn-kostku"
                href="https://www.php.net/manual/en/intro-whatis.php"
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(136, 146, 191, 1), rgba(160, 136, 191, 1))",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "php"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                PHP
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
                  icon={["fab", "js"]}
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

export default AkuBisa;
