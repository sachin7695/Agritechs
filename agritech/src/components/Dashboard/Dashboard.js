import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homePic from "../../Assets/homepic.jpg";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import FeaturesCards from "./dboardCards";
import irrigation from "../../Assets/Projects/irrigation.jpg";
import dboard from "./dboardCards";
import dashPic from "../../Assets/stats.png";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "#";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <dboard/>
    
      <Container fluid className="resume-section">
      <Container>
        <h1 className="project-heading">
          <strong className="Olive2">Agriculture Assistant</strong>
          <h1>(Your field report are as follows)</h1>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="d-card">
            <FeaturesCards
              
              isBlog={false}
              title="temp:  22 *C"
              description=""
              
            />
          </Col>

          <Col md={4} className="d-card">
            <FeaturesCards
             
              isBlog={false}
              title="soil moisture:  15%"
              description=""
            />
          </Col>

          <Col md={4} className="d-card">
            <FeaturesCards
             
              isBlog={false}
              title="humidity:  10%"
              description=""
            />
          </Col>
          </Row>

        
        <br/>
        <br/>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className= "smhead">Soil Moisture stats</h1>
        </Row>
        <br/>
        <br/>
        <img src={dashPic} className="img-fluid2" />
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 500 ? 1.2 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
           
            Download Report 
          </Button>
          
        </Row>
        Helpline number: Contact Agricultural Experts
      </Container>
      </Container>
      </div>
      
  );
}

export default ResumeNew;
