import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homePic from "../../Assets/homepic.jpg";
import About from "./About";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">  
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Team Code Campers!{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> The future of Agriculture</strong>
                <br/>Your go to agricultural assistant.
                <br/>A leap towards sustainable and smart farming. 
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                
                src={homePic}
                alt="home pic"
                className="img-fluid"
                style={{width: "690px", height: "550px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
