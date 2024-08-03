// src/About.js
import React from "react";
import { ReactComponent as JavaImg } from "../assets/Java.svg";
import { ReactComponent as PythonImg } from "../assets/Python.svg";
import { ReactComponent as NodeJSImg } from "../assets/NodeJS.svg";
import { ReactComponent as ReactImg } from "../assets/React.svg";
import { ReactComponent as PostgresSQLImg } from "../assets/PostgresSQL.svg";
import { ReactComponent as JavaScriptImg } from "../assets/JavaScript.svg";
import "../Stylesheets/animatedList.css";

const About = () => {
  const items = [
    <JavaScriptImg width="60" height="60" className="m-4" />,
    <ReactImg width="60" height="60" className="m-4" />,
    <NodeJSImg width="60" height="60" className="m-4" />,
    <JavaImg width="60" height="60" className="m-4" />,
    <PythonImg width="60" height="60" className="m-4" />,
    <PostgresSQLImg width="60" height="60" className="m-4" />,
  ];

  // Duplicate the items to create a seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-white">
      <div className="">
        <div className="flex flex-col items-center justify-center lg:flex-col">
          <div className="flex flex-col justify-center items-center lg:w-2/3">
            <div className="text-5xl font-bold text-center w-fit">About Me</div>
            <div className="text-lg p-4 text-center">
              Hi, I'm a Full-Stack Engineer from the NJ/NYC area who enjoys developing high-quality and user-friendly applications. I have experience working with a variety of technologies including Java, Python, JavaScript, React, NodeJS, and PostgreSQL. I am always looking to expand my knowledge and learn new technologies, techniques, and best practices. Contact me below to connect!
            </div>
          </div>
          <div className="items-center w-5/6 lg:w-1/3">
            <div className="text-2xl font-bold text-center">Tech Stack Overview</div>
            <div className="text-lg p-4 flex flex-row items-center overflow-hidden">
              <div className="animated-list list-none z-10">
                {duplicatedItems.map((item, index) => (
                  <div key={index} className="list-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;