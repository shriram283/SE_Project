import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/jcb12.jpeg";
import lift from "../assets/jcb78.png";
import kickstart from "../assets/jcb09.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Project 1"
              description="anjcbfyvbuviurvrv"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project 2"
              description="abchvfnrtgitrginiuniutngiut"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Project 3"
              description="abciusviufvibijgrbinr"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects