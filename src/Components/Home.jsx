import React from "react";
import { Container } from "react-bootstrap";
import homeBurgerImage from "./Images/image3.png";

export const Home = () => {
  return (
    <Container fluid id="home">
      <div className="container" id="homeText">
        <div id="specialOffer">
          <p>Special Offer</p>
        </div>
        <h1 className="display-5">FAVOURITE TASTY BURGER</h1>
        <button className="btn">Order Now</button>
      </div>
      <div className="container" id="homeImage">
        <img src={homeBurgerImage} alt="Home Burger Image" id="burgerImage" />
      </div>
    </Container>
  );
};
