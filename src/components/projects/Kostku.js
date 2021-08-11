import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import "./Kostku.css";
const Kostku = () => {
  const imageList = [
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/homescreen.png",
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/daftar_kamar.png",
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/daftar_penghuni.png",
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/detail_penghuni.png",
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/daftar_pemasukan.png",
    "https://raw.githubusercontent.com/imamseptian/kostku-rn06.3/main/src/preview/laporan.png",
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
              src={imageList[i]}
              className="custom-slick-img-dots selected"
              alt="Kostku App"
            />
          </div>
        );
      } else {
        return (
          <div>
            <img
              src={imageList[i]}
              className="custom-slick-img-dots"
              alt="Kostku App"
            />
          </div>
        );
      }
    },
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div className="project-content-left">
          <Slider {...settings}>
            {imageList.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={img}
                    alt="Kostku App"
                    className="custom-slick-img-thumbnail"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="project-content-right">
          {/* <div className="kostku-title"> */}
          <div>
            <h1 className="text-kostku">KostKu Application</h1>
            <h2 className="text-mobile yep">
              Mobile Frontend & Backend Service
            </h2>
            <p className="kostku-description">
              This is an application to help boarding house owner to manage
              their boarding house business. This application has several
              functions, such as recording boarding house assets, occupant data,
              payment transactions, reporting income & outcome every month, and
              many more. I developed this application with the frontend using
              react native, the backend using the laravel framework, and for my
              database using MySQL
            </p>
            {/* </div> */}
            <div className="wrapper-github-kostku">
              <a
                href="https://github.com/imamseptian/kostku-fullstack"
                // className="button-framework"
                className="custom-btn btn-kostku "
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
          </div>

          <div>
            <h2 className="text-mobile">Developed Using</h2>
            <div className="tools-wrapper">
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
                  icon={["fab", "js"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Javascript
              </a>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kostku;
