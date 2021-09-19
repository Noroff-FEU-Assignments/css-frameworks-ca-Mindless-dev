import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards() {
  return (
    <>
      <Row xs={1} md={2} lg={4}>
        <Col>
          <Card className="news-card">
            <div className="card-image1"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image2"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image3"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image4"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="d-none d-lg-flex" md={4}>
        <Col>
          <Card className="news-card">
            <div className="card-image5"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image6"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image7"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="news-card">
            <div className="card-image8"></div>
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="news-button" variant="primary">
                More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Cards;
