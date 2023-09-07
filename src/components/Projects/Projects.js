import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import trojan from "../../Assets/Projects/trojanapp.png";
import apex from "../../Assets/Projects/apex.png"; 
import passport from "../../Assets/Projects/passport.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent<strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
         Below are projects I've worked on during internships and school thus far
        
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apex}
              isBlog={false}
              title="Oracle APEX"
              description="During my time with Oracle, I worked extensively on creating Oracle APEX. The Low Code app, which was published by Oracle, utilizes Java, mySQL, and aspects of C++. Frameworks used to create this app included Maven and Terraform."
              ghLink="https://apex.oracle.com/pls/apex/r/apex/workspace/home?session=100116347780437"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passport}
              isBlog={false}
              title="Passport-Cli (Oracle)"
              description="My most recent internship included the passport-cli system, which takes projects built by Oracle and scans them for government security compliance. Project was built in Java and included frameworks such as Jenkins, Maven, and Quarkus."
              ghLink="https://docs.oracle.com/en/cloud/paas/java-cloud/pscli/paas-service-manager-command-line-interface-reference.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trojan}
              isBlog={false}
              title="FreeTrojan App"
              description="Continuation of 201 Final Project built on React. App serves to let college students know what free events their campus offers. Java used for the backend of the project. Javascript, CSS and HTML used for the frontend. App currently being moved to android."
              ghLink="https://github.com/AaronShields/201_Final_Project"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
