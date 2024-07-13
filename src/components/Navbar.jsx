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
    <nav className="sticky top-0 bg-gray-900 text-gray-200 flex justify-between align-middle">
      <a className="text-lg" href="#">
        Rhys Lee
      </a>
      <button
        data-collapse-toggle="navbar-default"
        className="lg:hidden"
      >
        <GiHamburgerMenu size={35} />
      </button>

      <div className="hidden" id="navbarNavDropdown">
        <ul className="">
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
