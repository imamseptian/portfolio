import React, { forwardRef, useState } from "react";
import Slider from "react-slick";
import AkuBisa from "./projects/AkuBisa";
import FoodRecommendation from "./projects/FoodRecommendation";
import Kostku from "./projects/Kostku";
import VideoDownloader from "./projects/VideoDownloader";
import LiveChat from "./projects/LiveChat";
import PepeManga from "./projects/PepeManga";
import "./Skills.css";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import '../fontawesome'

const Skills = forwardRef((props, ref) => {
  const [currentSliderIndex, setcurrentSliderIndex] = useState(0);

  let settings = {
    customPaging: function (i) {
      if (i === currentSliderIndex) {
        return <div className="custom-dot-slider selected"></div>;
      } else {
        return <div className="custom-dot-slider"></div>;
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
    afterChange: (index) => {
      setcurrentSliderIndex(index);
    },
    pauseOnDotsHover: true,
  };

  return (
    <div ref={ref} className="skills-sec">
      {/* <div className="skills-box"> */}
      <h2 className="title dark">My Projects</h2>
      {/* <div style={{ background: "red" }}> */}
      <Slider {...settings}>
        <PepeManga />
        <LiveChat />
        <Kostku />
        {/* <Kostku /> */}

        <VideoDownloader />
        <FoodRecommendation />
        <AkuBisa />
      </Slider>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
});

export default Skills;
