import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Aaron Shields </span>
            and I am from <span className="purple"> Washington, D.C.</span>
            <br />
            <br /> I am a senior studying Computer Science and Business Administration (CBSA) at
            <span className="purple"> the University of Southern California.</span>
            <br />
            <br />
            Additionally, I have completed two internships at Oracle! One being on 
            the Global Business Unit and the other with the Health and AI team. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Baseball
            </li>
            <li className="about-activity">
              <ImPointRight /> Thrifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
