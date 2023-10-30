import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import firstBurgerOnTable from "./Images/burger-on-table-2.jpeg";
import secondBurgerOnTable from "./Images/burger-on-table-3.jpeg";
import thirdBurgerOnTable from "./Images/burger-on-table-4.jpeg";
import imageOne from "./Images/image6.png";
import imageTwo from "./Images/image7.png";
import imageThree from "./Images/image2.png";
import imageFour from "./Images/image3.png";
import imageFive from "./Images/image1.png";

export const Pages = () => {
  return (
    <Container fluid id="pages">
      <Container fluid id="burgers-on-table">
        <img
          src={firstBurgerOnTable}
          alt="First Burger Image"
          className="img-fluid"
        />
        <img
          src={secondBurgerOnTable}
          alt="Second Burger Image"
          className="img-fluid"
        />
        <img
          src={thirdBurgerOnTable}
          alt="Third Burger Image"
          className="img-fluid"
        />
      </Container>
      <Container fluid id="forYou">
        <div id="specialOffer">
          <p>Special Offer</p>
        </div>
        <h1 className="display-6">FOR YOU!</h1>
        <p id="foryou-p">
          Discover unbeatable deals that allow you to satisfy both your appetite
          and your wallet simultaneously.
        </p>
      </Container>
      <Container fluid id="burgerPrices">
        <Row id="row">
          <Col md={4} id="col">
            <img src={imageOne} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">CHEESE BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageTwo} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">HAM BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageThree} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">PORK BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
        </Row>
        {/* Second Row */}
        <Row id="row">
          <Col md={4} id="col">
            <img src={imageFour} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">MUTTON BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageTwo} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">BEEF BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageOne} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">HAM BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
        </Row>
        {/* Third Row */}
        <Row id="row">
          <Col md={4} id="col">
            <img src={imageFour} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">BEEF BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageFive} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">BEEF BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
          <Col md={4} id="col">
            <img src={imageFour} alt="Inner burger image" />
            <Container id="colInner">
              <h1 className="display-6">BEEF BURGER</h1>
              <h1 className="display-6" id="price">
                $5.99
              </h1>
            </Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing..</p>
          </Col>
        </Row>
        <button id="seeMoreBtn">See More</button>
      </Container>
    </Container>
  );
};
