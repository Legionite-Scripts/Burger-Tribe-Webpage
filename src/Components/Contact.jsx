import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

export const Contact = () => {
  return (
    <Container fluid id="contact">
      <Container id="contactText">
        <h1 className="display-6">JOIN OUR NEWS LETTER</h1>
        <p>Stay in touch and get updated wherever you are</p>
      </Container>
      <Container id="contactInput">
        <input type="text" placeholder="email address"/>
        <button>Get Started</button>
      </Container>
    </Container>
  );
};
