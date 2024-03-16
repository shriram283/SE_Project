import React from "react";
import { Container, Row } from "react-bootstrap";
import FounderImage from "./founder.png";

const SBMCTechnoforgFounder = () => {
  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center" }}>
      <img src={FounderImage} alt="Founder" style={{ maxWidth: "300px" }} />
    </Row>
      <Row style={{ justifyContent: "center" }}>
        <h2>Mayur Patharkar</h2>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <p>Email: sbmctechnoforg@gmail.com</p>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <p>Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor gravida, tempor elit sed, fermentum neque.</p>
      </Row>
    </Container>
  );
};

export default SBMCTechnoforgFounder;
