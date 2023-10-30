import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Contact = () => {
  // Create Ref element.
  const pl = useRef(null);

  useEffect(() => {
    const typed = new Typed(pl.current, {
      strings: [
        "JOIN OUR NEWS LETTER",
        "STAY CONNECTED WITH US",
        "LETS GET IN TOUCH",
        "YUMMY",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true, //loop the strings
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container fluid id="contact">
      <Container id="contactText">
        <h1 className="display-6" ref={pl}>
          JOIN OUR NEWS LETTER
        </h1>
        <p>Stay in touch and get updated wherever you are</p>
      </Container>
      <Container id="contactInput">
        <input type="text" placeholder="email address" />
        <button>Get Started</button>
      </Container>
    </Container>
  );
};
