import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
function Content() {
  return (
    <>
      <Container>
        <div className="tab-home d-none d-md-block">
          <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
            <Tab eventKey="first" title="First">
              <div className="tab-content-wrapper">
                <div className="content-image1"></div>
                <div>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab-cta">
                    <a href="/">Share</a>
                    <i className="tab-icon fab fa-facebook-f"></i>
                    <i className="tab-icon fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Second">
              <div className="tab-content-wrapper">
                <div className="content-image2"></div>
                <div>
                  {" "}
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab-cta">
                    <a href="/">Share</a>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="third" title="Third">
              <div className="tab-content-wrapper">
                <div className="content-image3"></div>
                <div>
                  {" "}
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab-cta">
                    <a href="/">Share</a>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
      <Container>
        {" "}
        <Accordion defaultActiveKey="0" className="d-md-none">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                First
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <div className="mobile-content-image1"></div>
                <div className="accordion-cta">
                  <a href="/">Share</a>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Second
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <div className="mobile-content-image2"></div>
                <div className="accordion-cta">
                  <a href="/">Share</a>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Third
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.
                <div className="mobile-content-image3"></div>
                <div className="accordion-cta">
                  <a href="/">Share</a>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default Content;
