import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../pages/style.css"
import linkedInLogo from "../../assets/img/misc/linkedin.png"
import ghlogo from "../../assets/img/misc/github.png"
import resume from "../../assets/img/misc/resume.jpg"
import Auth from "../../utils/auth"

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
          About/Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
        to="/projects"
        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <>
          <li className="nav-item">
            <Link
              to="/admin"
              className={location.pathname === "/admin" ? "nav-link active" : "nav-link"}
            >
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={Auth.logout}
            >
              Signout
            </Link>
          </li>
        </>
      ) : (
        <li className="nav-item">
          <Link
            to="/login"
            className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
            Login
          </Link>
        </li>
      )}
      <li className='nav-item'>
      <a href="https://drive.google.com/file/d/13FnzkKVuJHeIfUhwujQaHzvz0sbQHt6P/view?usp=sharing"><img className='nav-icon' src={resume} alt='resume' /></a>
      </li>
      <li className='nav-item'>
      <a href="https://www.linkedin.com/in/johnny-truc-nguyen"><img className='nav-icon' src={linkedInLogo} alt='linkedin' /></a>
      </li>
      <li className='nav-item'>
        <a href="https://github.com/NguyenJohnnyT"> <img className='nav-icon' src={ghlogo} alt='github' /></a>
      </li>
    </ul>
  )
}

export default NavTabs;