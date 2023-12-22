import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for sidenav
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Images/image2.png";

export const Navigationbar = () => {
  return (
    <Navbar expand="lg" id="navbar">
      <Navbar.Brand href="/" id="first">
        <img src={logo} alt="logoImage" id="logoImage" />
        Burger Tribe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleBtn" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Navbar.Brand href="/" id="second">
            <img src={logo} alt="logoImage" id="logoImage" />
            Burger Tribe
          </Navbar.Brand>
          <a href="#home" id="link">
            Home
          </a>
          <a href="#features" id="link">Features</a>
          <a href="#pages" id="link">
            Pages
          </a>
          <a href="#portfolio" id="link">
            Portfolio
          </a>
          <a href="#contact" id="link">
            Contact Us
          </a>

          <div id="icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
