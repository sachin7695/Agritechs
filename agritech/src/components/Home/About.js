import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/irr.jpg";
import Tilt from "react-parallax-tilt";
import iot from "../../Assets/iot.jpeg";


function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "4em" }}>
              About AgriTech!
            </h1>
            <p className="home-about-body">
            Farming these days requires a lot of manual labor considering a medium-sized field, in this case, it can become a concern for farmers regarding the irrigation problems or spreading diseases. We propose a solution that will automate the whole process with the help of a web app and a drone that will increase the efficiency of farming. This solution is oriented towards sustainability and intelligent agriculture.
            <br />
<br/>1. We track the soil moisture content in real time with the help of soil moisture sensors that are spread equally over the sectioned farm. <br/>2. We promote sustainability by using solar energy to power these sensors continuously.<br/>3. Based on the detected soil moisture content of each sector in the farm, we automate the irrigation process. <br/>The drone hovers over the field at regular intervals and generates field images with the help of which we predict the plant health status through deep learning.
              <br />
              <br />
              <br />
      
              We propose a solution that will be oriented towards sustainability and smart farming. We ought to assist a farmer in three different aspects with the help of a drone embedded with a deep learning model, soil moisture sensors, and connecting these through a web app  
 <br/>1.Detect soil moisture content
 <br/>2.Track plant health status
<br/>3.Automate Irrigation
<br/>4.Crop yield prediction 
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
      <img src={iot} className="img-fluid1"/>
    </Container>
  );
}
export default About;
