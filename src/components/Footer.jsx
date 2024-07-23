import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
//import { FaReact } from "react-icons/fa";
//import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer bg-slate-900 text-gray-200 w-full flex flex-col lg:flex-row justify-between lg:h-28 items-center">

      <div className="text-lg flex justify-center items-center pl-4">
          Thank you for visiting my portfolio!
      </div>

      <div>

        <div className="flex-row flex justify-center lg:justify-end">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/rhyslee211"
            className="w-10"
          >
            <AiFillGithub size={40} className="text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rhys-lee/"
            className="w-10"
          >
            <AiOutlineLinkedin size={40} className="text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:“rhyslee211@gmail.com”"
            className="w-10"
          >
            <CiMail size={40} className="text-white" />
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
            Made With&nbsp;<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="underline text-cyan-600">React</a>&nbsp;and&nbsp;<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline text-cyan-600">TailwindCSS</a>
            {/*<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="flex">
              <FaReact size={40} className="text-black w-auto" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="flex">
              <RiTailwindCssFill size={40} className="text-lightblue" />
            </a>*/}
        </div>
        <div className="flex justify-center lg:justify-end">
          © 2024 Rhys Lee
        </div>
      </div>
    </footer>
  );
};

export default Footer;