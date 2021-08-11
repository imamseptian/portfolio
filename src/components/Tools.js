import React, { forwardRef } from "react";
import codeigniter from "../images/tools/code-igniter.png";
import cssicon from "../images/tools/css.png";
import expressicon from "../images/tools/express.png";
import flaskicon from "../images/tools/flask.png";
import javascript from "../images/tools/javascript.png";
import laravelicon from "../images/tools/laravel.png";
import nexticon from "../images/tools/next.png";
import php from "../images/tools/php.png";
import python from "../images/tools/python.png";
import reacticon from "../images/tools/react.png";
import tensorflowicon from "../images/tools/tensorflow.png";
import mysqlicon from "../images/tools/mysql.png";
import htmlicon from "../images/tools/html.png";
import "./Tools.css";

const Tools = forwardRef((props, ref) => {
  const listTools = [
    {
      name: "Javascript",
      img: javascript,
      url: "https://www.javascript.com/",
    },
    {
      name: "PHP",
      img: php,
      url: "https://www.php.net/",
    },
    {
      name: "HTML",
      img: htmlicon,
      url: "https://en.wikipedia.org/wiki/HTML",
    },
    {
      name: "CSS",
      img: cssicon,
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "MySQL",
      img: mysqlicon,
      url: "https://www.mysql.com/",
    },
    {
      name: "Python",
      img: python,
      url: "https://www.python.org/",
    },

    {
      name: "Express JS",
      img: expressicon,
      url: "https://expressjs.com/",
    },
    {
      name: "React",
      img: reacticon,
      url: "https://reactjs.org/",
    },
    {
      name: "React Native",
      img: reacticon,
      url: "https://reactnative.dev/",
    },
    {
      name: "Next JS",
      img: nexticon,
      url: "https://nextjs.org/",
    },
    {
      name: "Laravel",
      img: laravelicon,
      url: "https://laravel.com/",
    },
    {
      name: "Flask",
      img: flaskicon,
      url: "https://flask.palletsprojects.com/en/2.0.x/",
    },
  ];

  return (
    <div ref={ref} className="tools-sec">
      <h2 className="section-title tools">Tools</h2>
      <div className="tools-content">
        {listTools.map((item, index) => {
          return (
            <a
              className="tools-item"
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <img src={item.img} alt="" className="tools-img" />
              <div className="tools-name">{item.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
});

export default Tools;
