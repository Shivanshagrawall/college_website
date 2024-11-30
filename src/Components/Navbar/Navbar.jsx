import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assests/college_logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="AITH Logo" height={70} width={70} />
        <h1>Dr. Ambedkar Institute of Technology for Divyangjan</h1>
      </div>
      <div className="menu_section">
        <ul className={`menu_items ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#program">Program</a></li>
          <li><a href="#admission">Admission</a></li>
          <li> <a href="#contact">Contact Us</a></li>
        </ul>
        <span class="material-symbols-outlined menu_icon" onClick={toggleMenu}>menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
