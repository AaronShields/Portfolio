import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">😁 INTRODUCTION 😁</span> 
            </h1>
            <p className="home-about-body">
              I started out as a Economics/Mathematics major, and didn't start coding until freshman year!
              <br />
              <br />I am fluent in coding languages such as, 
              <i>
                <b className="purple"> C++, Java, Python, Javascript, and LaTex</b>
              </i>
              .
              <br />
              <br />
               Currently, I want to work with startups and eventually create my own. I am in clubs such as&nbsp;
              <i>
                <b className="purple">NSBE </b> and
                {" "}
                <b className="purple">
                  SCOPE SC!
                </b>
              </i>
              <br />
              <br />
              I like building random coding projects to solve problems in my life. Currently I am building  
              a <b className="purple"> hair scheduling app</b>  for black students on USCs campus. Additionally, I am building the 
              <i>
                <b className="purple">
                  {" "}
                  FreeTrojan app!
                </b>
              </i>
              &nbsp; Navigate to the projects page to see more!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AaronShields"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aaron-shields-01191720b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shi_leds/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
