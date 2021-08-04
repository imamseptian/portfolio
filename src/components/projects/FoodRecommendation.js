import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
import rec1 from "../../images/recommendation/rec1.PNG";
import rec2 from "../../images/recommendation/rec2.PNG";
import rec3 from "../../images/recommendation/rec3.PNG";
import rec4 from "../../images/recommendation/rec4.PNG";
import tficon from "../../images/tficon.png";
import "./FoodRecommendation.css";
const FoodRecommendation = () => {
  const imageList = [rec1, rec2, rec3, rec4];

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
                    alt="Food Recommendation API"
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
            <h1 className="text-kostku">Food Recommendation API</h1>
            <p className="kostku-description">
              This is an application that I developed for my Capstone project
              during the Bangki 2021 program. The part that I work on is the
              backend to provide recommendations for healthy food based on the
              data that our group has collected. To provide recommendations to
              application users, we use 2 methods, namely content-based
              recommendation & collaborative filtering. This application is
              built using Tensorflow for collaborative filtering, Scikit-learn
              for content based recommendation, and Flask framework to build
              healthy food recommendation API.
            </p>
            {/* </div> */}

            <a
              href="https://github.com/imamseptian/menu-recommendation"
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
                href="https://www.tensorflow.org/"
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
                  src={tficon}
                  alt="Food Recommendation API"
                  style={{
                    position: "absolute",
                    left: "7px",
                    top: "7px",
                    height: "20px",
                  }}
                />
                Tensorflow
              </a>
              <a
                className="custom-btn btn-kostku"
                href="https://flask.palletsprojects.com/en/2.0.x/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "white",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={["fas", "flask"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Flask
              </a>

              <a
                className="custom-btn btn-kostku"
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
                style={{
                  background:
                    "linear-gradient(0deg,rgba(66,128,178,255), rgba(75, 120, 176, 255))",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={["fab", "python"]}
                  style={{ marginRight: "5px" }}
                  size="lg"
                />
                Python
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecommendation;
