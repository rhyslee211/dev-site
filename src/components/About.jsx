import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiPostgresql } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython   } from "react-icons/fa";

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
              <div><IoLogoJavascript size={60} color="#f7df1e" className="" /></div>
              <div className="flex flex-row  items-center">
                <div><IoLogoReact size={60} color="#61DAFB" className="" /></div>
                <div><FaNodeJs size={60} color="#339933" className="" /></div>
              </div>
              <div className="flex flex-row  items-center">
                <div><FaJava size={60} color="#339933" className="" /></div>
                <div><FaPython size={60} color="#000000" className="" /></div>
              </div>
              <div><SiPostgresql size={60} color="#61DAFB" className="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
)};

export default About;