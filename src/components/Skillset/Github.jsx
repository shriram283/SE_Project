import React from "react";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Our <strong className="yellow">Approach</strong>
      </h1>
      <p>
      At SBMC TechnoForg, our approach is rooted in a customer-centric philosophy,
             where we prioritize understanding the unique requirements of each client. We
              foster collaborative partnerships, leveraging our expertise to tailor solutions
               that address specific challenges and deliver measurable results. Our commitment
                to innovation drives us to continuously explore new technologies and
                 methodologies, ensuring that we remain at the forefront of the industry.
                  With a focus on agility and adaptability, we strive to exceed expectations,
                   consistently delivering value and driving sustainable growth for our clients.
      </p>
    </Row>
  );
}

export default Github;
