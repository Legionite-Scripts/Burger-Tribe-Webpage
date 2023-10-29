import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import imageOne from "./Images/portfolio-image-1.jpg";
import imageTwo from "./Images/portfolio-image-2.jpg";
import imageThree from "./Images/portfolio-image-3.jpg";
import imageFour from "./Images/burger-on-table-2.jpeg";
import imageFive from "./Images/portfolio-image-5.jpg";
import imageSix from "./Images/portfolio-image-6.jpg";

export const Portfolio = () => {
  return (
    <Container fluid id="portfolio">
      <div id="specialOffer">
        <p>Follow Us</p>
      </div>
      <h1 className="display-6" id="twitter-h1">
        @Twitter
      </h1>
      <Container fluid id="portfolioRowsAndColumns">
        <Row id="portfolioRow">
          <Col md={6} id="portfolioCol">
            <img src={imageOne} alt="" />
          </Col>
          <Col md={6} id="portfolioCol">
            <img src={imageTwo} alt="" />
          </Col>
        </Row>
        {/* Second Row */}
        <Row id="portfolioRow">
          <Col md={6} id="portfolioCol">
            <img src={imageThree} alt="" />
          </Col>
          <Col md={6} id="portfolioCol">
            <img src={imageFour} alt="" />
          </Col>
        </Row>
        {/* Third Row */}
        <Row id="portfolioRow">
          <Col md={6} id="portfolioCol">
            <img src={imageFive} alt="" />
          </Col>
          <Col md={6} id="portfolioCol">
            <img src={imageSix} alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
