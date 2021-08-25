import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../pages/style.css"
import logo from "../images/linkedin.png"
import ghlogo from "../images/github.png"
import resume from "../images/resume.jpg"

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className='nav-item'>
      <a href="https://drive.google.com/file/d/15L-Hx7H3OTUSYuiXnyBwsI2fjKnftKUg/view?usp=sharing"><img className='nav-icon' src={resume} alt='resume' /></a>
      </li>
      <li className='nav-item'>
      <a href="https://www.linkedin.com/in/johnny-nguyen-17941532/"><img className='nav-icon' src={logo} alt='linkedin' /></a>
      </li>
      <li className='nav-item'>
        <a href="https://github.com/NguyenJohnnyT"> <img className='nav-icon' src={ghlogo} alt='github' /></a>
      </li>
    </ul>
  )
}

export default NavTabs;