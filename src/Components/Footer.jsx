import React from "react";
import { Container } from "react-bootstrap";
import logo from "./Images/image2.png";

export const Footer = () => {
  return (
    <Container fluid id="footer">
      <Container fluid id="innerFooter">
        <Container id="footerInnerContainers">
          <Container id="innerDiv1-logo">
            <img src={logo} alt="Logo" />
            <h1 className="display-6">Burger Tribe</h1>
          </Container>
          <p style={{ color: "#ffffff" }}>
            The taste of a lifetime in one bite.
          </p>
        </Container>
        <Container
          id="footerInnerContainers"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Container id="innerDiv2-heading">
            <h1>Company</h1>
          </Container>
          <Container id="innerDiv2-content">
            <h1>Teams</h1>
            <h1>Location</h1>
            <h1>Terms and Privacy</h1>
            <h1>Legal Department</h1>
          </Container>
        </Container>
        <Container id="footerInnerContainers">
          <Container id="innerDiv3-heading">
            <h1>Contact</h1>
          </Container>
          <Container id="innerDiv3-content">
            <h1>Customer Care</h1>
            <h1>Hotline +00-111-22</h1>
          </Container>
        </Container>
        <Container id="footerInnerContainers">
          <Container id="innerDiv4-heading">
            <h1>Socials</h1>
          </Container>
          <Container id="innerDiv4-icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </Container>
          <p id="div-4-p">Online on all Platforms</p>
        </Container>
      </Container>
      <hr />
      <p id="details">
        Developer :{" "}
        <a href="https://legionites-portfolio.netlify.app" target="blank">
          Legionite
        </a>
      </p>
      <p id="details">
        Figma Designer :{" "}
        <a href="https://wa.me/+2348023727364" target="blank">
          Emily
        </a>
      </p>
    </Container>
  );
};
