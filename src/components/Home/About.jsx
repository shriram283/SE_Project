import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/emp.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET'S <span className="yellow"> INTRODUCE </span> OURSELF
                </h1>
                <p className="home-about-body">
                 Hi, We are <span className="yellow"> SBMC TECHNOFORG</span>
                 and We are located at <span className="yellow">Bhosari MIDC, Pimpri-Chinchawad-411039</span>
                <br />
                <br />
                SBMC TechnoForg pioneers precision engineering solutions tailored for 
              heavy machinery, specializing in a comprehensive range of automotive spare
               parts including suspensions, nuts, and bolts. With a steadfast commitment
                to quality and innovation, we leverage state-of-the-art technologies to meet
                 the stringent demands of the construction industry. Our relentless pursuit
                  of excellence ensures that every component we produce enhances performance
                   and longevity, contributing to the seamless operation and success of our
                    clients' projects.

                <br />      
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND US ON</h1>
                <p>
                Please don't hesitate to reach out to us and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About