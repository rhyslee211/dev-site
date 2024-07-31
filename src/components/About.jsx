import React from "react";
import {ReactComponent as JavaImg} from "../assets/Java.svg";
import {ReactComponent as PythonImg} from "../assets/Python.svg";
import {ReactComponent as NodeJSImg} from "../assets/NodeJS.svg";
import {ReactComponent as ReactImg} from "../assets/React.svg";
import {ReactComponent as PostgresSQLImg} from "../assets/PostgresSQL.svg";
import {ReactComponent as JavaScriptImg} from "../assets/JavaScript.svg";

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
              <div><JavaScriptImg fill="currentColor" width="60" height="60" className="m-4"/></div>
              <div className="flex flex-row  items-center">
                <div><ReactImg width="60" height="60" className="m-4" /></div>
                <div><NodeJSImg width="60" height="60" className="m-4" /></div>
              </div>
              <div className="flex flex-row  items-center">
                <div><JavaImg width="60" height="60" className="m-4" /></div>
                <div><PythonImg width="60" height="60" className="m-4" /></div>
              </div>
              <div><PostgresSQLImg width="60" height="60" className="m-4" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
)};

export default About;