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
    <nav className="py-1 sticky top-0 bg-slate-700 text-gray-200 flex flex-row justify-between items-center align-middle lg:justify-evenly">
      <button className="text-lg pl-2 lg:font-medium lg:text-base lg:hidden">
        Rhys Lee
      </button>
      <button
        data-collapse-toggle="navbar-default"
        className="lg:hidden pr-2"
        aria-controls="navbar-default" aria-expanded="false"
      >
        <GiHamburgerMenu size={35} />
      </button>

      <div className="hidden w-full lg:block" id="navbar-default">
        <ul className="text-lg flex flex-col lg:flex-row lg:justify-start lg:w-1/2">
          <li className="">
            <button className="" onClick={() => scrollToSection(HomeRef)}>
              Home
            </button>
          </li>
          <li className="">
            <button className="" onClick={() => scrollToSection(AboutRef)}>
              About
            </button>
          </li>
          <li className="">
            <button className="" onClick={() => scrollToSection(ProjectsRef)}>
              Projects
            </button>
          </li>
          <li className="">
            <button className="" onClick={() => scrollToSection(ContactRef)}>
              Contact
            </button>
          </li>
          <li className="">
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
