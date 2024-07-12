import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">

        <div className="thanks">
            Thank you for visiting my portfolio!
        </div>

        <div className="contact-info">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/rhyslee211"
        >
          <AiFillGithub size={40} className="text-black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rhys-lee/"
        >
          <AiOutlineLinkedin size={40} className="text-black" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:“rhyslee211@gmail.com”"
        >
          <CiMail size={40} className="text-black" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;