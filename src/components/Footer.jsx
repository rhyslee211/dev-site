import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
//import { FaReact } from "react-icons/fa";
//import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer border">

      <div className="">
          Thank you for visiting my portfolio!
      </div>

      <div className="flex-row flex">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/rhyslee211"
          className="w-10"
        >
          <AiFillGithub size={40} className="text-black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rhys-lee/"
          className="w-10"
        >
          <AiOutlineLinkedin size={40} className="text-black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:“rhyslee211@gmail.com”"
          className="w-10"
        >
          <CiMail size={40} className="text-black" />
        </a>
      </div>
      <div className="gap-1.5">
          Made With <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">TailwindCSS</a>
          {/*<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="flex">
            <FaReact size={40} className="text-black w-auto" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="flex">
            <RiTailwindCssFill size={40} className="text-lightblue" />
          </a>*/}
      </div>
    </footer>
  );
};

export default Footer;