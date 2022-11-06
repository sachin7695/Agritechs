import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeaturesCards from "./FeaturesCards";
import irrigation from "../../Assets/Projects/irrigation.jpg";
import iot from "../../Assets/iot.jpeg";
import ph from "../../Assets/phealth.jpg";
import yeild from "../../Assets/yeild.jpg";

function Features() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="Olive">Features/Services</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <FeaturesCards
              imgPath={iot}
              isBlog={false}
              title="Soil Moisture Status"
              description="Knowing the soil moisture status enables highly efficient irrigation. So we keep a track of the soil moisture content of each sector of the farm in real-time through soil moisture sensors. "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <FeaturesCards
              imgPath={irrigation}
              isBlog={false}
              title="Automate irrigation"
              description="To address over-irrigation and wastage of water, we have come up with a solution to automate irrigation.
              Based on real-time soil moisture monitoring, we decide to open the pumps near the sectors of the farm that have low soil moisture when compared to the optimum soil moisture. "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <FeaturesCards
              imgPath={ph}
              isBlog={false}
              title="Plant health Status"
              description="To help the farmer to monitor all parts of the field at a glance and give more attention to the problematic areas, we maneuver a drone at regular intervals which takes in plant images, and with the help of deep learning it decides whether the plants are healthy or not. "
              ghLink="https://a915-2405-204-129f-ccdd-475-2280-425f-bea.in.ngrok.io/"
              demoLink="https://a915-2405-204-129f-ccdd-475-2280-425f-bea.in.ngrok.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <FeaturesCards
              imgPath={yeild}
              isBlog={false}
              title="Crop Yield prediction"
              description="This model will act as a medium to provide the farmers with efficient information required to get high yields and thus maximize profits. This will give an approximation on how much amount of crop will be produced depending upon the given input. "
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Features;
