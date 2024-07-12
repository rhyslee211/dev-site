import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "../assets/RhysLeeResume.pdf";

const Navbar = ({ HomeRef, AboutRef, ProjectsRef, ContactRef }) => {

  const scrollToSection = (ref) => {
    console.log(ref.current)
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand navbar-margin-left ps-2" href="#">
        Rhys Lee
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" onClick={() => scrollToSection(HomeRef)}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection(AboutRef)}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection(ProjectsRef)}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection(ContactRef)}>
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={openResume}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
