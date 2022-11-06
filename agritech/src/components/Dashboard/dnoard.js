import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dboardCards from "./dboardCards";
import irrigation from "../../Assets/Projects/irrigation.jpg";
import soil from "./Assets/soil.png";
import temp from "./Assets/temp.png";
import rain from "./Assets/rain.png";


function Features() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="Olive">Features/Services</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <dboardCards
              imgPath={soil}
              isBlog={false}
              title="Moisture sensor"
              description=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <dboardCards
              imgPath={temp}
              isBlog={false}
              title="Automate irrigation"
              description=" "
          
            />
          </Col>

          <Col md={4} className="project-card">
            <dboardCards
              imgPath={rain}
              isBlog={false}
              title="Automate irrigation"
              description=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <dboardCards
              imgPath={irrigation}
              isBlog={false}
              title="Automate irrigation"
              description=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <dboardCards
              imgPath={irrigation}
              isBlog={false}
              title="Automate irrigation"
              description=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <dboardCards
              imgPath={irrigation}
              isBlog={false}
              title="Automate irrigation"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;
