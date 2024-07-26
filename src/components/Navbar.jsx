import React from "react";
import resume from "../assets/RhysLeeResume.pdf";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ HomeRef, AboutRef, ProjectsRef, ContactRef }) => {

  const scrollToSection = (ref) => {
    console.log(ref.current)
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <nav className="py-1 bg-slate-900 text-white flex flex-row justify-between items-center align-middle lg:justify-evenly lg:pl-40">
      <button className="text-lg pl-2 lg:font-medium lg:text-base lg:hidden">
        Rhys Lee
      </button>
      <button
        data-collapse-toggle="navbar-default"
        className="hidden pr-2"
        aria-controls="navbar-default" aria-expanded="false"
      >
        <GiHamburgerMenu size={35} />
      </button>

      <button className="lg:hidden mr-2 px-2 bg-white text-slate-900 rounded-md" onClick={openResume}>
        Resume
      </button>

      <div className="hidden w-full lg:block" id="navbar-default">
        <ul className="text-lg flex flex-col lg:flex-row lg:justify-between lg:w-96 lg:pl-4 lg:my-4">
          <li className="hover:text-gray-400">
            <button className="" onClick={() => scrollToSection(HomeRef)}>
              Home
            </button>
          </li>
          <li className="hover:text-gray-400">
            <button className="" onClick={() => scrollToSection(AboutRef)}>
              About
            </button>
          </li>
          <li className="hover:text-gray-400">
            <button className="" onClick={() => scrollToSection(ProjectsRef)}>
              Projects
            </button>
          </li>
          <li className="hover:text-gray-400">
            <button className="" onClick={() => scrollToSection(ContactRef)}>
              Contact
            </button>
          </li>
          <li className="hover:bg-slate-400 px-2 bg-white text-slate-900 rounded-md">
            <button className="" onClick={openResume}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
