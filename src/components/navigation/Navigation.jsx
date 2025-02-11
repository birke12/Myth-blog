import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img
          className="logo1"
          src="/assets/logo/placeholdeLogo.png"
          alt="logo"
        />
      </a>

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            Destinations{" "}
            <IoIosArrowDown size={14} style={{ verticalAlign: "middle" }} />
          </span>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/paris">Paris</NavLink>
            </li>
            <li>
              <NavLink to="/new-york">New York</NavLink>
            </li>
            <li>
              <NavLink to="/tokyo">Tokyo</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/">Travel Tips</NavLink>
        </li>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>

        <div className="socialIconContainer">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="socialIcon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="socialIcon" />
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
