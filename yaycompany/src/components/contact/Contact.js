import React from "react";
import Contactform from "./components-contact/Contactform";
import Contactinformation from "./components-contact/Contactinformation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <>
      <Container classname="contact-wrapper">
        <Row sm={1} lg={2}>
          <Col>
            <Contactform />
          </Col>
          <Col md={{ order: "first" }} lg={{ order: "last" }}>
            <Contactinformation />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
