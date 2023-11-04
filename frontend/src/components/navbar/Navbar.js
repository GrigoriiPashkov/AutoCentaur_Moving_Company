import "../../styles/nav-style.css";
import gmail from "../../img/iconmonstr-gmail-5-48.png";
import sms from "../../img/iconmonstr-wechat-5-48.png";
import inst from "../../img/iconmonstr-instagram-15-48.png";
import facebk from "../../img/facebook_icon.png";
import cent_logo from "../../img/cent_logo.png";
import React, { useEffect, useState } from "react";
import scrollToView from "../../utils/scrollToView";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    scrollToView();
  }, []);
  const handleNavClick = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    }, 50);
  };
  return (
    <div className="left-navigation">
      <div
        className={`hamburger-button ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="left-nav-container">
        <a href="/" className="logo-image-container">
          <img src={cent_logo} alt="AutoCentaur Logo" className="logo-image" />
        </a>
        <a href="/" className="logo-link">
          <h1 className="logo-text">AutoCentaur</h1>
        </a>
        <nav className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          <a
            href="#home"
            className="nav-link"
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => handleNavClick("about")}
          >
            About
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={() => handleNavClick("services")}
          >
            Services
          </a>
          <a
            href="#contacts"
            className="nav-link"
            onClick={() => handleNavClick("contacts")}
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="social-footer">
        <div className="social-icon-container">
          <img src={gmail} alt="gmail"></img>
          <span className="tooltip">autocentaur@gmail.com</span>
        </div>
        <div className="social-icon-container">
          <img src={sms} alt="gmail"></img>
          <span className="tooltip">+1-437-348-4828</span>
        </div>

        <a
          href="https://www.instagram.com/autocentaur/"
          className="social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={inst} alt="instagram"></img>
        </a>
        <a
          href="https://www.facebook.com/serhii.kryvenko.77"
          className="social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebk} alt="facebook"></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
