import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js"; //For typing effect
import { Container } from "react-bootstrap";
import homeBurgerImage from "./Images/image3.png";
import AOS from "aos"; //Import Animation On Scroll
import "aos/dist/aos.css"; //Import AOS css file

export const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["TASTY", "SAVORY", "CHEESY", "YUMMY", "MAGICAL"], // Strings to display
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
    <Container fluid id="home">
      <div className="container" id="homeText">
        <div id="specialOffer">
          <p>Special Offer</p>
        </div>
        <h1 className="display-5" data-aos="zoom-in-up">
          FAVOURITE <span ref={el}>TASTY</span> BURGERS
        </h1>
        <button className="btn" data-aos="fade-right">
          Order Now
        </button>
      </div>
      <div className="container" id="homeImage">
        <img
          src={homeBurgerImage}
          alt="Home Burger Image"
          id="burgerImage"
          data-aos="zoom-in-up"
        />
      </div>
    </Container>
  );
};
