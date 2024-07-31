import React from "react";
import JavaImg from "../assets/Java.svg";
import PythonImg from "../assets/Python.svg";
import NodeJSImg from "../assets/NodeJS.svg";
import ReactImg from "../assets/React.svg";
import PostgresSQLImg from "../assets/PostgresSQL.svg";
import JavaScriptImg from "../assets/Java.svg";

const About = () => {
  return (
    <div className="bg-white">
      <div className="">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold items-center w-fit">About Me</h1>
          <div className="text-lg p-4">
            I'm a Full-Stack Engineer from the NJ/NYC area who enjoys developing high-quality and user-friendly applications.
          </div>
          <div>
            <div className="text-2xl font-bold">My Tech Stack:</div>
            <div className="text-lg p-4 flex flex-col items-center">
              {/*<div><svg xmlns="../assets/Java.svg" fill="currentColor" viewBox="0 0 16 16" width="60" height="60" className="bi bi-google"/></div>
              <div className="flex flex-row  items-center">
                <div><ReactImg width="60" height="60" className="" /></div>
                <div><NodeJSImg width="60" height="60" className="" /></div>
              </div>
              <div className="flex flex-row  items-center">
                <div><JavaImg width="60" height="60" className="" /></div>
                <div><PythonImg width="60" height="60" className="" /></div>
              </div>
              <div><PostgresSQLImg width="60" height="60" className="" /></div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
)};

export default About;