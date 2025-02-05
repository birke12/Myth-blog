import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img
          className="logo1"
          src="../src/assets/logo/placeholdeLogo.png"
          alt="logo"
        />
      </a>

      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {/* Destinations Dropdown (Opens on Hover) */}
        <li className="dropdown">
          <span className="dropdown-toggle">Destinations ▼</span>
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
            {/* Greece Dropdown (Opens on Hover) */}
            <li className="dropdown hover-dropdown">
              <span className="dropdown-toggle-greece">Greece ▼</span>
              <ul className="dropdown-menu sub-menu">
                <li>
                  <NavLink to="/athens">Athens</NavLink>
                </li>
                <li>
                  <NavLink to="/santorini">Santorini</NavLink>
                </li>
                <li>
                  <NavLink to="/mykonos">Mykonos</NavLink>
                </li>
              </ul>
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
      </ul>
    </nav>
  );
};

export default Navigation;
