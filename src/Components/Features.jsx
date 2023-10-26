import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import featuresBurgerImage from "./Images/image5.png";

export const Features = () => {
  return (
    <Container fluid id="features">
      <Container id="featuresImageDiv">
        <img src={featuresBurgerImage} alt="" />
      </Container>
      <Container id="featuresTextDiv">
        <div id="specialOffer">
          <p>Special Offer</p>
        </div>
        <h1 className="display-5">100% NATURAL FRESH INGREDIENTS</h1>
        <p id="features-p">
          What sets you apart is your unwavering dedication to using natural
          ingredients. It's a rare combination of nutrition and exceptional
          taste.
        </p>
        <li>
          The use of 100% natural, fresh ingredients creates an explosion of
          flavors in your dishes.
        </li>
        <li>
          No artificial additives, just real food bursting with real flavor.
        </li>
        <li>
          Your commitment to using 100% natural, fresh ingredients shines
          through in every bite.
        </li>
        <button>About Us</button>
      </Container>
    </Container>
  );
};
