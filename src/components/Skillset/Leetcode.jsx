import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">Our</strong> Work
      </h1>
      <ReactMarkdown>
        {`
At SBMC TechnoForg, our work revolves around delivering superior products
and solutions meticulously crafted to meet the diverse needs of heavy machinery
 industries. From conceptualization to production, we employ advanced engineering
  techniques and cutting-edge technologies to ensure precision, durability, and
   reliability in every component we manufacture. Our unwavering dedication to
    excellence drives us to continuously innovate and exceed industry standards,
     empowering our clients with the tools they need to thrive in today's
      competitive landscape.
        `}
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
