import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Container } from "react-bootstrap";
import homeBurgerImage from "./Images/image3.png";

export const Home = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["TASTY", "SAVORY", "CHEESY", "YUMMY"], // Strings to display
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
        <h1 className="display-5">
          FAVOURITE <span ref={el}>TASTY</span> BURGERS
        </h1>
        <button className="btn">Order Now</button>
      </div>
      <div className="container" id="homeImage">
        <img src={homeBurgerImage} alt="Home Burger Image" id="burgerImage" />
      </div>
    </Container>
  );
};
